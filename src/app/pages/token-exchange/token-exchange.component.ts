import { Component, OnInit, ViewChild, EventEmitter } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";

import Web3 from "web3";
import GeneAbi from "../../contracts/GeneAbi.json";
import GnomeAbi from "../../contracts/GnomeAbi.json";
import chain from "../../constants/chains.json";
import tokens from "../../constants/tokens.json";
import { NgSelectComponent } from "@ng-select/ng-select";

import {
  GENE_ADDRESSES,
  GNOME_ADDRESSES,
  NETWORK,
  TOKEN_EXCHANGE_ADDRESS
} from "src/app/constants";
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers'
import { ethers, Contract } from "ethers";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'e1db6f0a68bfab0597102900e7d92861'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

const arbitrum = {
  chainId: 42161,
  name: 'Arbitrum One',
  currency: 'ETH',
  explorerUrl: 'https://arbiscan.io',
  rpcUrl: 'https://arb1.arbitrum.io/rpc'
}

// 3. Create your application's metadata object
const metadata = {
  name: 'GENOME Exchange',
  description: 'Exchange your GENE and GNOME for GENOME',
  url: 'https://genome.io', // url must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
const modal = createWeb3Modal({
  ethersConfig,
  chains: [mainnet, polygon, arbitrum],
  projectId,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: false, // Optional - false as default
})
const isConnected = modal.getIsConnected();

declare let window: any;

@Component({
    selector: "app-token-exchange",
    templateUrl: "./token-exchange.component.html",
    styleUrls: ["./token-exchange.component.scss"]
})
export class TokenExchangeComponent implements OnInit {
  chain: any = chain;
  token: any = tokens;
  exchangeForm: FormGroup;
  web3: any;
  hasWallet: boolean = false;
  accounts: string = '';
  geneContract: any;
  gnomeContract: any;
  geneBalance: any = '-';
  gnomeBalance: any = '-';
  chainError: any;
  chainOption: any;
  tokenOption: any;
  @ViewChild('chainSelect')
  chainSelect: NgSelectComponent;
  isConnected:any = isConnected;
  provider: any;
  ethBalance: any;
 
  constructor(
    private formBuilder: FormBuilder,
  ) {
    const _this = this
    modal.subscribeWalletInfo(event => console.log(event, "walletinfo"))
    modal.subscribeWalletInfo(event => {
      _this.hasWallet = false;
      setTimeout(function () {
        const addr = modal.getAddress();
        if (addr){
          _this.hasWallet = true;
          _this.accounts = addr;
          _this.exchangeForm.get("chain").enable();
          _this.exchangeForm.get("token").enable();
          _this.provider = new ethers.BrowserProvider(window.ethereum);
          window.ethereum.on("chainChanged", (chainId) => {
            _this.updateChainSelect(chainId);
          })
        }
      }, 500);
    })
    
  }

  ngOnInit() {
    this.exchangeForm = this.formBuilder.group({
      chain: [null, Validators.required],
      token: [null, Validators.required],
    });
    this.exchangeForm.get("chain").disable();
    this.exchangeForm.get("token").disable();
    console.log(modal.getAddress())

  }

  connect(){
    modal.open();

  }

  updateChainSelect(chainId) {
    if (chainId == "0x1" || chainId == 1){
      this.updateChainTokens(this.chainSelect.itemsList.findByLabel('Ethereum'), GENE_ADDRESSES.ETHEREUM, GNOME_ADDRESSES.ETHEREUM, 1)
    } else if (chainId == "0x89" || chainId == 137) {
      this.updateChainTokens(this.chainSelect.itemsList.findByLabel('Polygon'), GNOME_ADDRESSES.POLYGON, GNOME_ADDRESSES.POLYGON, 137);
    } else if (chainId == "0xa4b1" || chainId == 42161) {
      this.updateChainTokens(this.chainSelect.itemsList.findByLabel('Arbitrum'), GNOME_ADDRESSES.ARBITRUM, GNOME_ADDRESSES.ARBITRUM, 42161);
    } else {
      this.clearEvent();
    }
  }

  updateChainTokens(selectedItem, geneAddress, gnomeAddresss, chainID) {
    this.chainSelect.select(selectedItem);
    this.geneContract = new Contract(geneAddress, GeneAbi, this.provider);
    this.gnomeContract = new Contract(gnomeAddresss, GnomeAbi, this.provider);
    this.updateBalance();
  }

  async getAccount() {
    this.accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  }

  clearEvent() {
    this.geneBalance = "-";
    this.gnomeBalance = "-";
  }

  async updateBalance() {
    console.log(1)
    this.geneBalance = await this.geneContract.balanceOf(this.accounts);
    console.log(2)
    this.gnomeBalance = await this.gnomeContract.balanceOf(this.accounts);
    console.log(3)
  }

  applyChainSelect(event) {
    this.chainError = '';
    this.chainOption = event;
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      this.changeChain(ethereum, event.label)
    }
  }

  applyTokenSelect(event) {
    this.tokenOption = event;
  }

  async changeChain(ethereum, label) {
      let selectedChain;
      switch (label) {
        case "Ethereum":
        selectedChain = NETWORK.MAINNET;
        this.geneContract = new Contract(GENE_ADDRESSES.ETHEREUM, GeneAbi, this.provider);
        this.gnomeContract = new Contract(GNOME_ADDRESSES.ETHEREUM, GnomeAbi, this.provider);
        break;
        case "Arbitrum":
        selectedChain = NETWORK.ARBITRUM;
        this.geneContract = new Contract(GENE_ADDRESSES.ARBITRUM, GeneAbi, this.provider);
        this.gnomeContract = new Contract(GNOME_ADDRESSES.ARBITRUM, GnomeAbi, this.provider);
        break;
        case "Polygon":
        selectedChain = NETWORK.POLYGON;
        this.geneContract = new Contract(GNOME_ADDRESSES.POLYGON, GeneAbi, this.provider);
        this.gnomeContract = new Contract(GNOME_ADDRESSES.POLYGON, GnomeAbi, this.provider);
        break;
        default:
        this.clearEvent();
      }
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${selectedChain.toString(16)}` }],
        });
      } catch (error) {
        if (error.code == 4902) {
          this.clearEvent();
          this.chainError = "Please add the " + label + " chain to your wallet first."
        } else {
          this.chainError = error.message;
        }
        console.log(error)
      }
      this.updateBalance();
  }
  async deposit () {
    let tx: any;
    let _contract: any;
    let _balance: any;
    if (this.tokenOption.key == "gene") {
      _contract = this.geneContract;
      _balance = this.geneBalance;
    } else if (this.tokenOption.key == "gnome") {
      _contract = this.gnomeContract;
      _balance = this.gnomeBalance;
    }
    if (_contract) {
      tx = await _contract.methods.transfer(
          TOKEN_EXCHANGE_ADDRESS,
          _balance
      )
      .send({
          from: this.accounts,
      });
      this.updateBalance();
    }
  }
}
