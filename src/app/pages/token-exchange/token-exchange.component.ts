import { Component, OnInit, ViewChild, EventEmitter } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";

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
import { createWeb3Modal, defaultConfig} from '@web3modal/ethers'
import { ethers, Contract } from "ethers";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'e1db6f0a68bfab0597102900e7d92861'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum Mainnet',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const polygon = {
  chainId: 137,
  name: 'Polygon Mainnet',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

const arbitrum = {
  chainId: 42161,
  name: 'Arbitrum One',
  currency: 'ETH',
  explorerUrl: 'https://explorer.arbitrum.io',
  rpcUrl: 'https://arbitrum-mainnet.infura.io'
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
  themeMode: 'light'
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
  providerType: any;
 
  constructor(
    private formBuilder: FormBuilder,
  ) {
    const _this = this;

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
          _this.providerType = modal.getWalletInfo();
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
  }

  async disconnect() {
    await modal.disconnect();
  }

  connect() {
    this.disconnect();
    modal.open();
  }

  clearEvent() {
    this.geneBalance = "-";
    this.gnomeBalance = "-";
  }

  async updateBalance() {
    this.geneBalance = await this.geneContract.balanceOf(this.accounts);
    this.gnomeBalance = await this.gnomeContract.balanceOf(this.accounts);
  }

  applyChainSelect(event) {
    this.clearEvent();
    this.chainError = '';
    this.chainOption = event;
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      this.changeChain(ethereum, event)
    }
  }

  applyTokenSelect(event) {
    this.tokenOption = event;
  }

  generateNewContracts( event ){
    this.provider = new ethers.BrowserProvider(window.ethereum);
    switch (event.label) {
      case "Ethereum":
      this.geneContract = new Contract(GENE_ADDRESSES.ETHEREUM, GeneAbi, this.provider);
      this.gnomeContract = new Contract(GNOME_ADDRESSES.ETHEREUM, GnomeAbi, this.provider);
      break;
      case "Arbitrum":
      this.geneContract = new Contract(GENE_ADDRESSES.ARBITRUM, GeneAbi, this.provider);
      this.gnomeContract = new Contract(GNOME_ADDRESSES.ARBITRUM, GnomeAbi, this.provider);
      break;
      case "Polygon":
      this.geneContract = new Contract(GNOME_ADDRESSES.POLYGON, GeneAbi, this.provider);
      this.gnomeContract = new Contract(GNOME_ADDRESSES.POLYGON, GnomeAbi, this.provider);
      break;
      default:
      this.clearEvent();
    }
    this.updateBalance();
  }

  async changeChain(ethereum, event) {
      const _this = this;
      if (!event) {
        _this.clearEvent();
        return;
      }
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${event.chainId.toString(16)}` }],
        });
        this.generateNewContracts(event);
      } catch (error) {
        console.log(error)
        if (error.code == 4902) {
          console.log('hee')
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params:[
                {
                  "chainId": `0x${event.chainId.toString(16)}`,
                  "chainName": event.name,
                  "rpcUrls": event.rpcUrls,
                  "nativeCurrency": event.nativeCurrency,
                  "blockExplorerUrls": event.blockExplorerUrls,
                }
              ],
            });
          } catch(error){
            _this.chainError = error.message;
            _this.clearEvent();
          }
        } else {
          _this.chainError = error.message;
          _this.clearEvent();
        }
      }
  }

  async deposit () {
    let tx: any;
    let _contract: any;
    let _balance: any;
    const signer = await this.provider.getSigner();
    switch (this.chainOption.label) {
      case "Ethereum":
        if (this.tokenOption.key == "gene") {
          _contract = new ethers.Contract(GENE_ADDRESSES.ETHEREUM, GeneAbi, signer);
          _balance = this.geneBalance;
        } else if (this.tokenOption.key == "gnome") {
          _contract =  new ethers.Contract(GNOME_ADDRESSES.ETHEREUM, GnomeAbi, signer);
          _balance = this.gnomeBalance;
        }
      break;
      case "Arbitrum":
        if (this.tokenOption.key == "gene") {
          _contract = new ethers.Contract(GENE_ADDRESSES.ARBITRUM, GeneAbi, signer);
          _balance = this.geneBalance;
        } else if (this.tokenOption.key == "gnome") {
          _contract =  new ethers.Contract(GNOME_ADDRESSES.ARBITRUM, GnomeAbi, signer);
          _balance = this.gnomeBalance;
        }
      break;
      case "Polygon":
        if (this.tokenOption.key == "gene") {
          _contract = new ethers.Contract(GNOME_ADDRESSES.POLYGON, GeneAbi, signer);
          _balance = this.geneBalance;
        } else if (this.tokenOption.key == "gnome") {
          _contract =  new ethers.Contract(GNOME_ADDRESSES.POLYGON, GnomeAbi, signer);
          _balance = this.gnomeBalance;
        }
      break;
      default:
      this.clearEvent();
    }

    if (_contract) {
      tx = await _contract.transfer(
          TOKEN_EXCHANGE_ADDRESS,
          _balance
      );
      this.updateBalance();
    }
  }
}
