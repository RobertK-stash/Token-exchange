(self.webpackChunkgenome_token_exchange=self.webpackChunkgenome_token_exchange||[]).push([[179],{6010:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.CoinbaseWalletSDK=void 0;const v=I(5605),k=I(9394),x=I(2329),R=I(8169),_=I(1579),C=I(2163),b=I(5129),w=I(3483),T=I(7144),D=I(4587),V=I(7938);class S{constructor(N){var Y,ie,re;this._appName="",this._appLogoUrl=null,this._relay=null,this._relayEventManager=null;const Q=N.linkAPIUrl||k.LINK_API_URL;this._overrideIsMetaMask=!(typeof N.overrideIsMetaMask>"u")&&N.overrideIsMetaMask,this._overrideIsCoinbaseWallet=null===(Y=N.overrideIsCoinbaseWallet)||void 0===Y||Y,this._overrideIsCoinbaseBrowser=null!==(ie=N.overrideIsCoinbaseBrowser)&&void 0!==ie&&ie,this._diagnosticLogger=N.diagnosticLogger,this._reloadOnDisconnect=null===(re=N.reloadOnDisconnect)||void 0===re||re;const Z=new URL(Q);if(this._storage=new R.ScopedLocalStorage(`-walletlink:${Z.protocol}//${Z.host}`),this._storage.setItem("version",S.VERSION),this.walletExtension||this.coinbaseBrowser)return;this._relayEventManager=new w.RelayEventManager;const J=(0,x.isMobileWeb)(),_e={linkAPIUrl:Q,version:V.LIB_VERSION,darkMode:!!N.darkMode,uiConstructor:N.uiConstructor||(B=>J?new b.MobileRelayUI(B):new T.WalletLinkRelayUI(B)),storage:this._storage,relayEventManager:this._relayEventManager,diagnosticLogger:this._diagnosticLogger,reloadOnDisconnect:this._reloadOnDisconnect,enableMobileWalletLink:N.enableMobileWalletLink};this._relay=J?new C.MobileRelay(_e):new D.WalletLinkRelay(_e),this.setAppInfo(N.appName,N.appLogoUrl),!N.headlessMode&&this._relay.attachUI()}makeWeb3Provider(N="",Y=1){const ie=this.walletExtension;if(ie)return this.isCipherProvider(ie)||ie.setProviderInfo(N,Y),!1===this._reloadOnDisconnect&&"function"==typeof ie.disableReloadOnDisconnect&&ie.disableReloadOnDisconnect(),ie;const re=this.coinbaseBrowser;if(re)return re;const Q=this._relay;if(!Q||!this._relayEventManager||!this._storage)throw new Error("Relay not initialized, should never happen");return N||Q.setConnectDisabled(!0),new _.CoinbaseWalletProvider({relayProvider:()=>Promise.resolve(Q),relayEventManager:this._relayEventManager,storage:this._storage,jsonRpcUrl:N,chainId:Y,qrUrl:this.getQrUrl(),diagnosticLogger:this._diagnosticLogger,overrideIsMetaMask:this._overrideIsMetaMask,overrideIsCoinbaseWallet:this._overrideIsCoinbaseWallet,overrideIsCoinbaseBrowser:this._overrideIsCoinbaseBrowser})}setAppInfo(N,Y){var ie;this._appName=N||"DApp",this._appLogoUrl=Y||(0,x.getFavicon)();const re=this.walletExtension;re?this.isCipherProvider(re)||re.setAppInfo(this._appName,this._appLogoUrl):null===(ie=this._relay)||void 0===ie||ie.setAppInfo(this._appName,this._appLogoUrl)}disconnect(){var N;const Y=null==this?void 0:this.walletExtension;Y?Y.close():null===(N=this._relay)||void 0===N||N.resetAndReload()}getQrUrl(){var N,Y;return null!==(Y=null===(N=this._relay)||void 0===N?void 0:N.getQRCodeUrl())&&void 0!==Y?Y:null}getCoinbaseWalletLogo(N,Y=240){return(0,v.walletLogo)(N,Y)}get walletExtension(){var N;return null!==(N=window.coinbaseWalletExtension)&&void 0!==N?N:window.walletLinkExtension}get coinbaseBrowser(){var N,Y;try{const ie=null!==(N=window.ethereum)&&void 0!==N?N:null===(Y=window.top)||void 0===Y?void 0:Y.ethereum;return ie&&"isCoinbaseBrowser"in ie&&ie.isCoinbaseBrowser?ie:void 0}catch{return}}isCipherProvider(N){return"boolean"==typeof N.isCipher&&N.isCipher}}g.CoinbaseWalletSDK=S,S.VERSION=V.LIB_VERSION},5605:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.walletLogo=void 0,g.walletLogo=(v,k)=>{let x;switch(v){case"standard":default:return x=k,`data:image/svg+xml,%3Csvg width='${k}' height='${x}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;case"circle":return x=k,`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${k}' height='${x}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;case"text":return x=(.1*k).toFixed(2),`data:image/svg+xml,%3Csvg width='${k}' height='${x}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;case"textWithLogo":return x=(.25*k).toFixed(2),`data:image/svg+xml,%3Csvg width='${k}' height='${x}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;case"textLight":return x=(.1*k).toFixed(2),`data:image/svg+xml,%3Csvg width='${k}' height='${x}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;case"textWithLogoLight":return x=(.25*k).toFixed(2),`data:image/svg+xml,%3Csvg width='${k}' height='${x}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`}}},9394:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.LINK_API_URL=void 0,g.LINK_API_URL="https://www.walletlink.org"},2564:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.errorValues=g.standardErrorCodes=void 0,g.standardErrorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901,unsupportedChain:4902}},g.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."},4902:{standard:"EIP-3085",message:"Unrecognized chain ID."}}},6609:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.standardErrors=void 0;const v=I(2564),k=I(5112);function x(T,D){const[V,S]=_(D);return new C(T,V||(0,k.getMessageFromCode)(T),S)}function R(T,D){const[V,S]=_(D);return new b(T,V||(0,k.getMessageFromCode)(T),S)}function _(T){if(T){if("string"==typeof T)return[T];if("object"==typeof T&&!Array.isArray(T)){const{message:D,data:V}=T;if(D&&"string"!=typeof D)throw new Error("Must specify string message.");return[D||void 0,V]}}return[]}g.standardErrors={rpc:{parse:T=>x(v.standardErrorCodes.rpc.parse,T),invalidRequest:T=>x(v.standardErrorCodes.rpc.invalidRequest,T),invalidParams:T=>x(v.standardErrorCodes.rpc.invalidParams,T),methodNotFound:T=>x(v.standardErrorCodes.rpc.methodNotFound,T),internal:T=>x(v.standardErrorCodes.rpc.internal,T),server:T=>{if(!T||"object"!=typeof T||Array.isArray(T))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:D}=T;if(!Number.isInteger(D)||D>-32005||D<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return x(D,T)},invalidInput:T=>x(v.standardErrorCodes.rpc.invalidInput,T),resourceNotFound:T=>x(v.standardErrorCodes.rpc.resourceNotFound,T),resourceUnavailable:T=>x(v.standardErrorCodes.rpc.resourceUnavailable,T),transactionRejected:T=>x(v.standardErrorCodes.rpc.transactionRejected,T),methodNotSupported:T=>x(v.standardErrorCodes.rpc.methodNotSupported,T),limitExceeded:T=>x(v.standardErrorCodes.rpc.limitExceeded,T)},provider:{userRejectedRequest:T=>R(v.standardErrorCodes.provider.userRejectedRequest,T),unauthorized:T=>R(v.standardErrorCodes.provider.unauthorized,T),unsupportedMethod:T=>R(v.standardErrorCodes.provider.unsupportedMethod,T),disconnected:T=>R(v.standardErrorCodes.provider.disconnected,T),chainDisconnected:T=>R(v.standardErrorCodes.provider.chainDisconnected,T),unsupportedChain:T=>R(v.standardErrorCodes.provider.unsupportedChain,T),custom:T=>{if(!T||"object"!=typeof T||Array.isArray(T))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:D,message:V,data:S}=T;if(!V||"string"!=typeof V)throw new Error('"message" must be a nonempty string');return new b(D,V,S)}}};class C extends Error{constructor(D,V,S){if(!Number.isInteger(D))throw new Error('"code" must be an integer.');if(!V||"string"!=typeof V)throw new Error('"message" must be a nonempty string.');super(V),this.code=D,void 0!==S&&(this.data=S)}}class b extends C{constructor(D,V,S){if(!function w(T){return Number.isInteger(T)&&T>=1e3&&T<=4999}(D))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(D,V,S)}}},3311:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.standardErrors=g.standardErrorCodes=g.serializeError=g.getMessageFromCode=g.getErrorCode=void 0;const v=I(2564);Object.defineProperty(g,"standardErrorCodes",{enumerable:!0,get:function(){return v.standardErrorCodes}});const k=I(6609);Object.defineProperty(g,"standardErrors",{enumerable:!0,get:function(){return k.standardErrors}});const x=I(3008);Object.defineProperty(g,"serializeError",{enumerable:!0,get:function(){return x.serializeError}});const R=I(5112);Object.defineProperty(g,"getErrorCode",{enumerable:!0,get:function(){return R.getErrorCode}}),Object.defineProperty(g,"getMessageFromCode",{enumerable:!0,get:function(){return R.getMessageFromCode}})},3008:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.serializeError=void 0;const v=I(8315),k=I(7938),x=I(2564),R=I(5112);g.serializeError=function _(w,T){const D=(0,R.serialize)(function C(w){return"string"==typeof w?{message:w,code:x.standardErrorCodes.rpc.internal}:(0,v.isErrorResponse)(w)?Object.assign(Object.assign({},w),{message:w.errorMessage,code:w.errorCode,data:{method:w.method}}):w}(w),{shouldIncludeStack:!0}),V=new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");V.searchParams.set("version",k.LIB_VERSION),V.searchParams.set("code",D.code.toString());const S=function b(w,T){const D=w?.method;if(D)return D;if(void 0!==T){if("string"==typeof T)return T;if(!Array.isArray(T))return T.method;if(T.length>0)return T[0].method}}(D.data,T);return S&&V.searchParams.set("method",S),V.searchParams.set("message",D.message),Object.assign(Object.assign({},D),{docUrl:V.href})}},5112:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.serialize=g.getErrorCode=g.isValidCode=g.getMessageFromCode=g.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const v=I(2564),k="Unspecified error message.";function x(S,A=k){if(S&&Number.isInteger(S)){const N=S.toString();if(D(v.errorValues,N))return v.errorValues[N].message;if(w(S))return g.JSON_RPC_SERVER_ERROR_MESSAGE}return A}function R(S){if(!Number.isInteger(S))return!1;const A=S.toString();return!(!v.errorValues[A]&&!w(S))}function w(S){return S>=-32099&&S<=-32e3}function T(S){return S&&"object"==typeof S&&!Array.isArray(S)?Object.assign({},S):S}function D(S,A){return Object.prototype.hasOwnProperty.call(S,A)}function V(S,A){return"object"==typeof S&&null!==S&&A in S&&"string"==typeof S[A]}g.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",g.getMessageFromCode=x,g.isValidCode=R,g.getErrorCode=function _(S){var A;return"number"==typeof S?S:function C(S){return"object"==typeof S&&null!==S&&("number"==typeof S.code||"number"==typeof S.errorCode)}(S)?null!==(A=S.code)&&void 0!==A?A:S.errorCode:void 0},g.serialize=function b(S,{shouldIncludeStack:A=!1}={}){const N={};if(S&&"object"==typeof S&&!Array.isArray(S)&&D(S,"code")&&R(S.code)){const Y=S;N.code=Y.code,Y.message&&"string"==typeof Y.message?(N.message=Y.message,D(Y,"data")&&(N.data=Y.data)):(N.message=x(N.code),N.data={originalError:T(S)})}else N.code=v.standardErrorCodes.rpc.internal,N.message=V(S,"message")?S.message:k,N.data={originalError:T(S)};return A&&(N.stack=V(S,"stack")?S.stack:void 0),N}},8737:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.ProviderType=g.RegExpString=g.IntNumber=g.BigIntString=g.AddressString=g.HexString=g.OpaqueType=void 0,g.OpaqueType=function I(){return x=>x},g.HexString=x=>x,g.AddressString=x=>x,g.BigIntString=x=>x,g.IntNumber=function v(x){return Math.floor(x)},g.RegExpString=x=>x;var k=function(x){return x.CoinbaseWallet="CoinbaseWallet",x.MetaMask="MetaMask",x.Unselected="",x}(k||(g.ProviderType=k={}))},2329:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function($){return $&&$.__esModule?$:{default:$}};Object.defineProperty(g,"__esModule",{value:!0}),g.isMobileWeb=g.getLocation=g.isInIFrame=g.createQrUrl=g.getFavicon=g.range=g.isBigNumber=g.ensureParsedJSONObject=g.ensureBN=g.ensureRegExpString=g.ensureIntNumber=g.ensureBuffer=g.ensureAddressString=g.ensureEvenLengthHexString=g.ensureHexString=g.isHexString=g.prepend0x=g.strip0x=g.has0xPrefix=g.hexStringFromIntNumber=g.intNumberFromHexString=g.bigIntStringFromBN=g.hexStringFromBuffer=g.hexStringToUint8Array=g.uint8ArrayToHex=g.randomBytesHex=void 0;const k=v(I(2662)),x=I(3311),R=I(8737),_=/^[0-9]*$/,C=/^[a-f0-9]*$/;function w($){return[...$].map(G=>G.toString(16).padStart(2,"0")).join("")}function N($){return $.startsWith("0x")||$.startsWith("0X")}function Y($){return N($)?$.slice(2):$}function ie($){return N($)?`0x${$.slice(2)}`:`0x${$}`}function re($){if("string"!=typeof $)return!1;const G=Y($).toLowerCase();return C.test(G)}function Q($,G=!1){if("string"==typeof $){const ve=Y($).toLowerCase();if(C.test(ve))return(0,R.HexString)(G?`0x${ve}`:ve)}throw x.standardErrors.rpc.invalidParams(`"${String($)}" is not a hexadecimal string`)}function Z($,G=!1){let ve=Q($,!1);return ve.length%2==1&&(ve=(0,R.HexString)(`0${ve}`)),G?(0,R.HexString)(`0x${ve}`):ve}function we($){if("number"==typeof $&&Number.isInteger($))return(0,R.IntNumber)($);if("string"==typeof $){if(_.test($))return(0,R.IntNumber)(Number($));if(re($))return(0,R.IntNumber)(new k.default(Z($,!1),16).toNumber())}throw x.standardErrors.rpc.invalidParams(`Not an integer: ${String($)}`)}function be($){if(null==$||"function"!=typeof $.constructor)return!1;const{constructor:G}=$;return"function"==typeof G.config&&"number"==typeof G.EUCLID}function M(){try{return null!==window.frameElement}catch{return!1}}g.randomBytesHex=function b($){return w(crypto.getRandomValues(new Uint8Array($)))},g.uint8ArrayToHex=w,g.hexStringToUint8Array=function T($){return new Uint8Array($.match(/.{1,2}/g).map(G=>parseInt(G,16)))},g.hexStringFromBuffer=function D($,G=!1){const ve=$.toString("hex");return(0,R.HexString)(G?`0x${ve}`:ve)},g.bigIntStringFromBN=function V($){return(0,R.BigIntString)($.toString(10))},g.intNumberFromHexString=function S($){return(0,R.IntNumber)(new k.default(Z($,!1),16).toNumber())},g.hexStringFromIntNumber=function A($){return(0,R.HexString)(`0x${new k.default($).toString(16)}`)},g.has0xPrefix=N,g.strip0x=Y,g.prepend0x=ie,g.isHexString=re,g.ensureHexString=Q,g.ensureEvenLengthHexString=Z,g.ensureAddressString=function ee($){if("string"==typeof $){const G=Y($).toLowerCase();if(re(G)&&40===G.length)return(0,R.AddressString)(ie(G))}throw x.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String($)}`)},g.ensureBuffer=function J($){if(Buffer.isBuffer($))return $;if("string"==typeof $){if(re($)){const G=Z($,!1);return Buffer.from(G,"hex")}return Buffer.from($,"utf8")}throw x.standardErrors.rpc.invalidParams(`Not binary data: ${String($)}`)},g.ensureIntNumber=we,g.ensureRegExpString=function _e($){if($ instanceof RegExp)return(0,R.RegExpString)($.toString());throw x.standardErrors.rpc.invalidParams(`Not a RegExp: ${String($)}`)},g.ensureBN=function B($){if(null!==$&&(k.default.isBN($)||be($)))return new k.default($.toString(10),10);if("number"==typeof $)return new k.default(we($));if("string"==typeof $){if(_.test($))return new k.default($,10);if(re($))return new k.default(Z($,!1),16)}throw x.standardErrors.rpc.invalidParams(`Not an integer: ${String($)}`)},g.ensureParsedJSONObject=function q($){if("string"==typeof $)return JSON.parse($);if("object"==typeof $)return $;throw x.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String($)}`)},g.isBigNumber=be,g.range=function ae($,G){return Array.from({length:G-$},(ve,ce)=>$+ce)},g.getFavicon=function ue(){const $=document.querySelector('link[sizes="192x192"]')||document.querySelector('link[sizes="180x180"]')||document.querySelector('link[rel="icon"]')||document.querySelector('link[rel="shortcut icon"]'),{protocol:G,host:ve}=document.location,ce=$?$.getAttribute("href"):null;return!ce||ce.startsWith("javascript:")||ce.startsWith("vbscript:")?null:ce.startsWith("http://")||ce.startsWith("https://")||ce.startsWith("data:")?ce:ce.startsWith("//")?G+ce:`${G}//${ve}${ce}`},g.createQrUrl=function le($,G,ve,ce,fe,ge){return`${ve}/#/link?${new URLSearchParams({[ce?"parent-id":"id"]:$,secret:G,server:ve,v:fe,chainId:ge.toString()}).toString()}`},g.isInIFrame=M,g.getLocation=function E(){try{return M()&&window.top?window.top.location:window.location}catch{return window.location}},g.isMobileWeb=function F(){var $;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null===($=window?.navigator)||void 0===$?void 0:$.userAgent)}},9404:(Ve,g,I)=>{"use strict";g.jp=void 0;const k=I(6010),x=I(1579);var R=I(6010);Object.defineProperty(g,"jp",{enumerable:!0,get:function(){return R.CoinbaseWalletSDK}});I(1579);typeof window<"u"&&(window.CoinbaseWalletSDK=k.CoinbaseWalletSDK,window.CoinbaseWalletProvider=x.CoinbaseWalletProvider,window.WalletLink=k.CoinbaseWalletSDK,window.WalletLinkProvider=x.CoinbaseWalletProvider)},8048:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.Cipher=void 0;const k=I(2329);g.Cipher=class x{constructor(_){this.secret=_}encrypt(_){var C=this;return v(function*(){const b=C.secret;if(64!==b.length)throw Error("secret must be 256 bits");const w=crypto.getRandomValues(new Uint8Array(12)),T=yield crypto.subtle.importKey("raw",(0,k.hexStringToUint8Array)(b),{name:"aes-gcm"},!1,["encrypt","decrypt"]),D=new TextEncoder,V=yield window.crypto.subtle.encrypt({name:"AES-GCM",iv:w},T,D.encode(_)),A=V.slice(V.byteLength-16),N=V.slice(0,V.byteLength-16),Y=new Uint8Array(A),ie=new Uint8Array(N),re=new Uint8Array([...w,...Y,...ie]);return(0,k.uint8ArrayToHex)(re)})()}decrypt(_){var C=this;return v(function*(){const b=C.secret;if(64!==b.length)throw Error("secret must be 256 bits");return new Promise((w,T)=>{v(function*(){const D=yield crypto.subtle.importKey("raw",(0,k.hexStringToUint8Array)(b),{name:"aes-gcm"},!1,["encrypt","decrypt"]),V=(0,k.hexStringToUint8Array)(_),S=V.slice(0,12),A=V.slice(12,28),N=V.slice(28),Y=new Uint8Array([...N,...A]),ie={name:"AES-GCM",iv:new Uint8Array(S)};try{const re=yield window.crypto.subtle.decrypt(ie,D,Y),Q=new TextDecoder;w(Q.decode(re))}catch(re){T(re)}})()})})()}}},8169:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.ScopedLocalStorage=void 0,g.ScopedLocalStorage=class I{constructor(k){this.scope=k}setItem(k,x){localStorage.setItem(this.scopedKey(k),x)}getItem(k){return localStorage.getItem(this.scopedKey(k))}removeItem(k){localStorage.removeItem(this.scopedKey(k))}clear(){const k=this.scopedKey(""),x=[];for(let R=0;R<localStorage.length;R++){const _=localStorage.key(R);"string"==typeof _&&_.startsWith(k)&&x.push(_)}x.forEach(R=>localStorage.removeItem(R))}scopedKey(k){return`${this.scope}:${k}`}}},3187:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default='@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'},8070:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(R){return R&&R.__esModule?R:{default:R}};Object.defineProperty(g,"__esModule",{value:!0}),g.injectCssReset=void 0;const k=v(I(3187));g.injectCssReset=function x(){const R=document.createElement("style");R.type="text/css",R.appendChild(document.createTextNode(k.default)),document.documentElement.appendChild(R)}},1579:function(Ve,g,I){"use strict";var v=I(7156).default,k=this&&this.__importDefault||function(Q){return Q&&Q.__esModule?Q:{default:Q}};Object.defineProperty(g,"__esModule",{value:!0}),g.CoinbaseWalletProvider=void 0;const x=k(I(2662)),R=I(9424),_=I(3311),C=I(2329),b=I(2163),w=I(8561),T=I(6293),D=I(8315),V=k(I(3348)),S=I(6480),A=I(4016),N=I(2506),Y="DefaultChainId",ie="DefaultJsonRpcUrl";g.CoinbaseWalletProvider=class re extends R.EventEmitter{constructor(Z){var ee,J;super(),this._filterPolyfill=new A.FilterPolyfill(this),this._subscriptionManager=new N.SubscriptionManager(this),this._relay=null,this._addresses=[],this.hasMadeFirstChainChangedEmission=!1,this.setProviderInfo=this.setProviderInfo.bind(this),this.updateProviderInfo=this.updateProviderInfo.bind(this),this.getChainId=this.getChainId.bind(this),this.setAppInfo=this.setAppInfo.bind(this),this.enable=this.enable.bind(this),this.close=this.close.bind(this),this.send=this.send.bind(this),this.sendAsync=this.sendAsync.bind(this),this.request=this.request.bind(this),this._setAddresses=this._setAddresses.bind(this),this.scanQRCode=this.scanQRCode.bind(this),this.genericRequest=this.genericRequest.bind(this),this._chainIdFromOpts=Z.chainId,this._jsonRpcUrlFromOpts=Z.jsonRpcUrl,this._overrideIsMetaMask=Z.overrideIsMetaMask,this._relayProvider=Z.relayProvider,this._storage=Z.storage,this._relayEventManager=Z.relayEventManager,this.diagnostic=Z.diagnosticLogger,this.reloadOnDisconnect=!0,this.isCoinbaseWallet=null===(ee=Z.overrideIsCoinbaseWallet)||void 0===ee||ee,this.isCoinbaseBrowser=null!==(J=Z.overrideIsCoinbaseBrowser)&&void 0!==J&&J,this.qrUrl=Z.qrUrl;const we=this.getChainId(),_e=(0,C.prepend0x)(we.toString(16));this.emit("connect",{chainIdStr:_e});const B=this._storage.getItem(w.LOCAL_STORAGE_ADDRESSES_KEY);if(B){const q=B.split(" ");""!==q[0]&&(this._addresses=q.map(be=>(0,C.ensureAddressString)(be)),this.emit("accountsChanged",q))}this._subscriptionManager.events.on("notification",q=>{this.emit("message",{type:q.method,data:q.params})}),this._isAuthorized()&&this.initializeRelay(),window.addEventListener("message",q=>{var be;if(q.origin===location.origin&&q.source===window&&"walletLinkMessage"===q.data.type&&"dappChainSwitched"===q.data.data.action){const ue=null!==(be=q.data.data.jsonRpcUrl)&&void 0!==be?be:this.jsonRpcUrl;this.updateProviderInfo(ue,Number(q.data.data.chainId))}})}get selectedAddress(){return this._addresses[0]||void 0}get networkVersion(){return this.getChainId().toString(10)}get chainId(){return(0,C.prepend0x)(this.getChainId().toString(16))}get isWalletLink(){return!0}get isMetaMask(){return this._overrideIsMetaMask}get host(){return this.jsonRpcUrl}get connected(){return!0}isConnected(){return!0}get jsonRpcUrl(){var Z;return null!==(Z=this._storage.getItem(ie))&&void 0!==Z?Z:this._jsonRpcUrlFromOpts}set jsonRpcUrl(Z){this._storage.setItem(ie,Z)}disableReloadOnDisconnect(){this.reloadOnDisconnect=!1}setProviderInfo(Z,ee){this.isCoinbaseBrowser||(this._chainIdFromOpts=ee,this._jsonRpcUrlFromOpts=Z),this.updateProviderInfo(this.jsonRpcUrl,this.getChainId())}updateProviderInfo(Z,ee){this.jsonRpcUrl=Z;const J=this.getChainId();this._storage.setItem(Y,ee.toString(10)),((0,C.ensureIntNumber)(ee)!==J||!this.hasMadeFirstChainChangedEmission)&&(this.emit("chainChanged",this.getChainId()),this.hasMadeFirstChainChangedEmission=!0)}watchAsset(Z,ee,J,we,_e,B){var q=this;return v(function*(){const ae=yield(yield q.initializeRelay()).watchAsset(Z,ee,J,we,_e,B?.toString()).promise;return!(0,D.isErrorResponse)(ae)&&!!ae.result})()}addEthereumChain(Z,ee,J,we,_e,B){var q=this;return v(function*(){var be,ae;if((0,C.ensureIntNumber)(Z)===q.getChainId())return!1;const ue=yield q.initializeRelay(),le=ue.inlineAddEthereumChain(Z.toString());!q._isAuthorized()&&!le&&(yield ue.requestEthereumAccounts().promise);const M=yield ue.addEthereumChain(Z.toString(),ee,_e,J,we,B).promise;return!(0,D.isErrorResponse)(M)&&(!0===(null===(be=M.result)||void 0===be?void 0:be.isApproved)&&q.updateProviderInfo(ee[0],Z),!0===(null===(ae=M.result)||void 0===ae?void 0:ae.isApproved))})()}switchEthereumChain(Z){var ee=this;return v(function*(){const we=yield(yield ee.initializeRelay()).switchEthereumChain(Z.toString(10),ee.selectedAddress||void 0).promise;if((0,D.isErrorResponse)(we)){if(!we.errorCode)return;throw we.errorCode===_.standardErrorCodes.provider.unsupportedChain?_.standardErrors.provider.unsupportedChain():_.standardErrors.provider.custom({message:we.errorMessage,code:we.errorCode})}const _e=we.result;_e.isApproved&&_e.rpcUrl.length>0&&ee.updateProviderInfo(_e.rpcUrl,Z)})()}setAppInfo(Z,ee){this.initializeRelay().then(J=>J.setAppInfo(Z,ee))}enable(){var Z=this;return v(function*(){var ee;return null===(ee=Z.diagnostic)||void 0===ee||ee.log(S.EVENTS.ETH_ACCOUNTS_STATE,{method:"provider::enable",addresses_length:Z._addresses.length,sessionIdHash:Z._relay?T.Session.hash(Z._relay.session.id):void 0}),Z._isAuthorized()?[...Z._addresses]:yield Z.send("eth_requestAccounts")})()}close(){var Z=this;return v(function*(){(yield Z.initializeRelay()).resetAndReload()})()}send(Z,ee){try{const J=this._send(Z,ee);if(J instanceof Promise)return J.catch(we=>{throw(0,_.serializeError)(we,Z)})}catch(J){throw(0,_.serializeError)(J,Z)}}_send(Z,ee){if("string"==typeof Z){const we=Z,_e=Array.isArray(ee)?ee:void 0!==ee?[ee]:[];return this._sendRequestAsync({jsonrpc:"2.0",id:0,method:we,params:_e}).then(q=>q.result)}return"function"==typeof ee?this._sendAsync(Z,ee):Array.isArray(Z)?Z.map(_e=>this._sendRequest(_e)):this._sendRequest(Z)}sendAsync(Z,ee){var J=this;return v(function*(){try{return J._sendAsync(Z,ee).catch(we=>{throw(0,_.serializeError)(we,Z)})}catch(we){return Promise.reject((0,_.serializeError)(we,Z))}})()}_sendAsync(Z,ee){var J=this;return v(function*(){if("function"!=typeof ee)throw new Error("callback is required");if(Array.isArray(Z)){const _e=ee;return void J._sendMultipleRequestsAsync(Z).then(B=>_e(null,B)).catch(B=>_e(B,null))}const we=ee;return J._sendRequestAsync(Z).then(_e=>we(null,_e)).catch(_e=>we(_e,null))})()}request(Z){var ee=this;return v(function*(){try{return ee._request(Z).catch(J=>{throw(0,_.serializeError)(J,Z.method)})}catch(J){return Promise.reject((0,_.serializeError)(J,Z.method))}})()}_request(Z){var ee=this;return v(function*(){if(!Z||"object"!=typeof Z||Array.isArray(Z))throw _.standardErrors.rpc.invalidRequest({message:"Expected a single, non-array, object argument.",data:Z});const{method:J,params:we}=Z;if("string"!=typeof J||0===J.length)throw _.standardErrors.rpc.invalidRequest({message:"'args.method' must be a non-empty string.",data:Z});if(void 0!==we&&!Array.isArray(we)&&("object"!=typeof we||null===we))throw _.standardErrors.rpc.invalidRequest({message:"'args.params' must be an object or array if provided.",data:Z});const _e=void 0===we?[]:we,B=ee._relayEventManager.makeRequestId();return(yield ee._sendRequestAsync({method:J,params:_e,jsonrpc:"2.0",id:B})).result})()}scanQRCode(Z){var ee=this;return v(function*(){const we=yield(yield ee.initializeRelay()).scanQRCode((0,C.ensureRegExpString)(Z)).promise;if((0,D.isErrorResponse)(we))throw(0,_.serializeError)(we.errorMessage,"scanQRCode");if("string"!=typeof we.result)throw(0,_.serializeError)("result was not a string","scanQRCode");return we.result})()}genericRequest(Z,ee){var J=this;return v(function*(){const _e=yield(yield J.initializeRelay()).genericRequest(Z,ee).promise;if((0,D.isErrorResponse)(_e))throw(0,_.serializeError)(_e.errorMessage,"generic");if("string"!=typeof _e.result)throw(0,_.serializeError)("result was not a string","generic");return _e.result})()}connectAndSignIn(Z){var ee=this;return v(function*(){var J;let we;null===(J=ee.diagnostic)||void 0===J||J.log(S.EVENTS.ETH_ACCOUNTS_STATE,{method:"provider::connectAndSignIn",sessionIdHash:ee._relay?T.Session.hash(ee._relay.session.id):void 0});try{const B=yield ee.initializeRelay();if(!(B instanceof b.MobileRelay))throw new Error("connectAndSignIn is only supported on mobile");if(we=yield B.connectAndSignIn(Z).promise,(0,D.isErrorResponse)(we))throw new Error(we.errorMessage)}catch(B){throw"string"==typeof B.message&&B.message.match(/(denied|rejected)/i)?_.standardErrors.provider.userRejectedRequest("User denied account authorization"):B}if(!we.result)throw new Error("accounts received is empty");const{accounts:_e}=we.result;return ee._setAddresses(_e),ee.isCoinbaseBrowser||(yield ee.switchEthereumChain(ee.getChainId())),we.result})()}selectProvider(Z){var ee=this;return v(function*(){const we=yield(yield ee.initializeRelay()).selectProvider(Z).promise;if((0,D.isErrorResponse)(we))throw(0,_.serializeError)(we.errorMessage,"selectProvider");if("string"!=typeof we.result)throw(0,_.serializeError)("result was not a string","selectProvider");return we.result})()}supportsSubscriptions(){return!1}subscribe(){throw new Error("Subscriptions are not supported")}unsubscribe(){throw new Error("Subscriptions are not supported")}disconnect(){return!0}_sendRequest(Z){const ee={jsonrpc:"2.0",id:Z.id},{method:J}=Z;if(ee.result=this._handleSynchronousMethods(Z),void 0===ee.result)throw new Error(`Coinbase Wallet does not support calling ${J} synchronously without a callback. Please provide a callback parameter to call ${J} asynchronously.`);return ee}_setAddresses(Z,ee){if(!Array.isArray(Z))throw new Error("addresses is not an array");const J=Z.map(we=>(0,C.ensureAddressString)(we));JSON.stringify(J)!==JSON.stringify(this._addresses)&&(this._addresses=J,this.emit("accountsChanged",this._addresses),this._storage.setItem(w.LOCAL_STORAGE_ADDRESSES_KEY,J.join(" ")))}_sendRequestAsync(Z){return new Promise((ee,J)=>{try{const we=this._handleSynchronousMethods(Z);if(void 0!==we)return ee({jsonrpc:"2.0",id:Z.id,result:we});const _e=this._handleAsynchronousFilterMethods(Z);if(void 0!==_e)return void _e.then(q=>ee(Object.assign(Object.assign({},q),{id:Z.id}))).catch(q=>J(q));const B=this._handleSubscriptionMethods(Z);if(void 0!==B)return void B.then(q=>ee({jsonrpc:"2.0",id:Z.id,result:q.result})).catch(q=>J(q))}catch(we){return J(we)}this._handleAsynchronousMethods(Z).then(we=>we&&ee(Object.assign(Object.assign({},we),{id:Z.id}))).catch(we=>J(we))})}_sendMultipleRequestsAsync(Z){return Promise.all(Z.map(ee=>this._sendRequestAsync(ee)))}_handleSynchronousMethods(Z){const{method:ee}=Z,J=Z.params||[];switch(ee){case"eth_accounts":return this._eth_accounts();case"eth_coinbase":return this._eth_coinbase();case"eth_uninstallFilter":return this._eth_uninstallFilter(J);case"net_version":return this._net_version();case"eth_chainId":return this._eth_chainId();default:return}}_handleAsynchronousMethods(Z){var ee=this;return v(function*(){const{method:J}=Z,we=Z.params||[];switch(J){case"eth_requestAccounts":return ee._eth_requestAccounts();case"eth_sign":return ee._eth_sign(we);case"eth_ecRecover":return ee._eth_ecRecover(we);case"personal_sign":return ee._personal_sign(we);case"personal_ecRecover":return ee._personal_ecRecover(we);case"eth_signTransaction":return ee._eth_signTransaction(we);case"eth_sendRawTransaction":return ee._eth_sendRawTransaction(we);case"eth_sendTransaction":return ee._eth_sendTransaction(we);case"eth_signTypedData_v1":return ee._eth_signTypedData_v1(we);case"eth_signTypedData_v2":return ee._throwUnsupportedMethodError();case"eth_signTypedData_v3":return ee._eth_signTypedData_v3(we);case"eth_signTypedData_v4":case"eth_signTypedData":return ee._eth_signTypedData_v4(we);case"cbWallet_arbitrary":return ee._cbwallet_arbitrary(we);case"wallet_addEthereumChain":return ee._wallet_addEthereumChain(we);case"wallet_switchEthereumChain":return ee._wallet_switchEthereumChain(we);case"wallet_watchAsset":return ee._wallet_watchAsset(we)}return(yield ee.initializeRelay()).makeEthereumJSONRPCRequest(Z,ee.jsonRpcUrl).catch(B=>{var q;throw(B.code===_.standardErrorCodes.rpc.methodNotFound||B.code===_.standardErrorCodes.rpc.methodNotSupported)&&(null===(q=ee.diagnostic)||void 0===q||q.log(S.EVENTS.METHOD_NOT_IMPLEMENTED,{method:Z.method,sessionIdHash:ee._relay?T.Session.hash(ee._relay.session.id):void 0})),B})})()}_handleAsynchronousFilterMethods(Z){const{method:ee}=Z,J=Z.params||[];switch(ee){case"eth_newFilter":return this._eth_newFilter(J);case"eth_newBlockFilter":return this._eth_newBlockFilter();case"eth_newPendingTransactionFilter":return this._eth_newPendingTransactionFilter();case"eth_getFilterChanges":return this._eth_getFilterChanges(J);case"eth_getFilterLogs":return this._eth_getFilterLogs(J)}}_handleSubscriptionMethods(Z){switch(Z.method){case"eth_subscribe":case"eth_unsubscribe":return this._subscriptionManager.handleRequest(Z)}}_isKnownAddress(Z){try{const ee=(0,C.ensureAddressString)(Z);return this._addresses.map(we=>(0,C.ensureAddressString)(we)).includes(ee)}catch{}return!1}_ensureKnownAddress(Z){var ee;if(!this._isKnownAddress(Z))throw null===(ee=this.diagnostic)||void 0===ee||ee.log(S.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),new Error("Unknown Ethereum address")}_prepareTransactionParams(Z){const ee=Z.from?(0,C.ensureAddressString)(Z.from):this.selectedAddress;if(!ee)throw new Error("Ethereum address is unavailable");return this._ensureKnownAddress(ee),{fromAddress:ee,toAddress:Z.to?(0,C.ensureAddressString)(Z.to):null,weiValue:null!=Z.value?(0,C.ensureBN)(Z.value):new x.default(0),data:Z.data?(0,C.ensureBuffer)(Z.data):Buffer.alloc(0),nonce:null!=Z.nonce?(0,C.ensureIntNumber)(Z.nonce):null,gasPriceInWei:null!=Z.gasPrice?(0,C.ensureBN)(Z.gasPrice):null,maxFeePerGas:null!=Z.maxFeePerGas?(0,C.ensureBN)(Z.maxFeePerGas):null,maxPriorityFeePerGas:null!=Z.maxPriorityFeePerGas?(0,C.ensureBN)(Z.maxPriorityFeePerGas):null,gasLimit:null!=Z.gas?(0,C.ensureBN)(Z.gas):null,chainId:Z.chainId?(0,C.ensureIntNumber)(Z.chainId):this.getChainId()}}_isAuthorized(){return this._addresses.length>0}_requireAuthorization(){if(!this._isAuthorized())throw _.standardErrors.provider.unauthorized({})}_throwUnsupportedMethodError(){throw _.standardErrors.provider.unsupportedMethod({})}_signEthereumMessage(Z,ee,J,we){var _e=this;return v(function*(){_e._ensureKnownAddress(ee);try{const q=yield(yield _e.initializeRelay()).signEthereumMessage(Z,ee,J,we).promise;if((0,D.isErrorResponse)(q))throw new Error(q.errorMessage);return{jsonrpc:"2.0",id:0,result:q.result}}catch(B){throw"string"==typeof B.message&&B.message.match(/(denied|rejected)/i)?_.standardErrors.provider.userRejectedRequest("User denied message signature"):B}})()}_ethereumAddressFromSignedMessage(Z,ee,J){var we=this;return v(function*(){const B=yield(yield we.initializeRelay()).ethereumAddressFromSignedMessage(Z,ee,J).promise;if((0,D.isErrorResponse)(B))throw new Error(B.errorMessage);return{jsonrpc:"2.0",id:0,result:B.result}})()}_eth_accounts(){return[...this._addresses]}_eth_coinbase(){return this.selectedAddress||null}_net_version(){return this.getChainId().toString(10)}_eth_chainId(){return(0,C.hexStringFromIntNumber)(this.getChainId())}getChainId(){const Z=this._storage.getItem(Y);if(!Z)return(0,C.ensureIntNumber)(this._chainIdFromOpts);const ee=parseInt(Z,10);return(0,C.ensureIntNumber)(ee)}_eth_requestAccounts(){var Z=this;return v(function*(){var ee;if(null===(ee=Z.diagnostic)||void 0===ee||ee.log(S.EVENTS.ETH_ACCOUNTS_STATE,{method:"provider::_eth_requestAccounts",addresses_length:Z._addresses.length,sessionIdHash:Z._relay?T.Session.hash(Z._relay.session.id):void 0}),Z._isAuthorized())return Promise.resolve({jsonrpc:"2.0",id:0,result:Z._addresses});let J;try{if(J=yield(yield Z.initializeRelay()).requestEthereumAccounts().promise,(0,D.isErrorResponse)(J))throw new Error(J.errorMessage)}catch(we){throw"string"==typeof we.message&&we.message.match(/(denied|rejected)/i)?_.standardErrors.provider.userRejectedRequest("User denied account authorization"):we}if(!J.result)throw new Error("accounts received is empty");return Z._setAddresses(J.result),Z.isCoinbaseBrowser||(yield Z.switchEthereumChain(Z.getChainId())),{jsonrpc:"2.0",id:0,result:Z._addresses}})()}_eth_sign(Z){this._requireAuthorization();const ee=(0,C.ensureAddressString)(Z[0]),J=(0,C.ensureBuffer)(Z[1]);return this._signEthereumMessage(J,ee,!1)}_eth_ecRecover(Z){const ee=(0,C.ensureBuffer)(Z[0]),J=(0,C.ensureBuffer)(Z[1]);return this._ethereumAddressFromSignedMessage(ee,J,!1)}_personal_sign(Z){this._requireAuthorization();const ee=(0,C.ensureBuffer)(Z[0]),J=(0,C.ensureAddressString)(Z[1]);return this._signEthereumMessage(ee,J,!0)}_personal_ecRecover(Z){const ee=(0,C.ensureBuffer)(Z[0]),J=(0,C.ensureBuffer)(Z[1]);return this._ethereumAddressFromSignedMessage(ee,J,!0)}_eth_signTransaction(Z){var ee=this;return v(function*(){ee._requireAuthorization();const J=ee._prepareTransactionParams(Z[0]||{});try{const _e=yield(yield ee.initializeRelay()).signEthereumTransaction(J).promise;if((0,D.isErrorResponse)(_e))throw new Error(_e.errorMessage);return{jsonrpc:"2.0",id:0,result:_e.result}}catch(we){throw"string"==typeof we.message&&we.message.match(/(denied|rejected)/i)?_.standardErrors.provider.userRejectedRequest("User denied transaction signature"):we}})()}_eth_sendRawTransaction(Z){var ee=this;return v(function*(){const J=(0,C.ensureBuffer)(Z[0]),_e=yield(yield ee.initializeRelay()).submitEthereumTransaction(J,ee.getChainId()).promise;if((0,D.isErrorResponse)(_e))throw new Error(_e.errorMessage);return{jsonrpc:"2.0",id:0,result:_e.result}})()}_eth_sendTransaction(Z){var ee=this;return v(function*(){ee._requireAuthorization();const J=ee._prepareTransactionParams(Z[0]||{});try{const _e=yield(yield ee.initializeRelay()).signAndSubmitEthereumTransaction(J).promise;if((0,D.isErrorResponse)(_e))throw new Error(_e.errorMessage);return{jsonrpc:"2.0",id:0,result:_e.result}}catch(we){throw"string"==typeof we.message&&we.message.match(/(denied|rejected)/i)?_.standardErrors.provider.userRejectedRequest("User denied transaction signature"):we}})()}_eth_signTypedData_v1(Z){var ee=this;return v(function*(){ee._requireAuthorization();const J=(0,C.ensureParsedJSONObject)(Z[0]),we=(0,C.ensureAddressString)(Z[1]);ee._ensureKnownAddress(we);const _e=V.default.hashForSignTypedDataLegacy({data:J}),B=JSON.stringify(J,null,2);return ee._signEthereumMessage(_e,we,!1,B)})()}_eth_signTypedData_v3(Z){var ee=this;return v(function*(){ee._requireAuthorization();const J=(0,C.ensureAddressString)(Z[0]),we=(0,C.ensureParsedJSONObject)(Z[1]);ee._ensureKnownAddress(J);const _e=V.default.hashForSignTypedData_v3({data:we}),B=JSON.stringify(we,null,2);return ee._signEthereumMessage(_e,J,!1,B)})()}_eth_signTypedData_v4(Z){var ee=this;return v(function*(){ee._requireAuthorization();const J=(0,C.ensureAddressString)(Z[0]),we=(0,C.ensureParsedJSONObject)(Z[1]);ee._ensureKnownAddress(J);const _e=V.default.hashForSignTypedData_v4({data:we}),B=JSON.stringify(we,null,2);return ee._signEthereumMessage(_e,J,!1,B)})()}_cbwallet_arbitrary(Z){var ee=this;return v(function*(){const J=Z[0],we=Z[1];if("string"!=typeof we)throw new Error("parameter must be a string");if("object"!=typeof J||null===J)throw new Error("parameter must be an object");return{jsonrpc:"2.0",id:0,result:yield ee.genericRequest(J,we)}})()}_wallet_addEthereumChain(Z){var ee=this;return v(function*(){var J,we,_e,B;const q=Z[0];if(0===(null===(J=q.rpcUrls)||void 0===J?void 0:J.length))return{jsonrpc:"2.0",id:0,error:{code:2,message:"please pass in at least 1 rpcUrl"}};if(!q.chainName||""===q.chainName.trim())throw _.standardErrors.rpc.invalidParams("chainName is a required field");if(!q.nativeCurrency)throw _.standardErrors.rpc.invalidParams("nativeCurrency is a required field");const be=parseInt(q.chainId,16);return(yield ee.addEthereumChain(be,null!==(we=q.rpcUrls)&&void 0!==we?we:[],null!==(_e=q.blockExplorerUrls)&&void 0!==_e?_e:[],q.chainName,null!==(B=q.iconUrls)&&void 0!==B?B:[],q.nativeCurrency))?{jsonrpc:"2.0",id:0,result:null}:{jsonrpc:"2.0",id:0,error:{code:2,message:"unable to add ethereum chain"}}})()}_wallet_switchEthereumChain(Z){var ee=this;return v(function*(){const J=Z[0];return yield ee.switchEthereumChain(parseInt(J.chainId,16)),{jsonrpc:"2.0",id:0,result:null}})()}_wallet_watchAsset(Z){var ee=this;return v(function*(){const J=Array.isArray(Z)?Z[0]:Z;if(!J.type)throw _.standardErrors.rpc.invalidParams("Type is required");if("ERC20"!==J?.type)throw _.standardErrors.rpc.invalidParams(`Asset of type '${J.type}' is not supported`);if(!J?.options)throw _.standardErrors.rpc.invalidParams("Options are required");if(!J?.options.address)throw _.standardErrors.rpc.invalidParams("Address is required");const we=ee.getChainId(),{address:_e,symbol:B,image:q,decimals:be}=J.options;return{jsonrpc:"2.0",id:0,result:yield ee.watchAsset(J.type,_e,B,be,q,we)}})()}_eth_uninstallFilter(Z){const ee=(0,C.ensureHexString)(Z[0]);return this._filterPolyfill.uninstallFilter(ee)}_eth_newFilter(Z){var ee=this;return v(function*(){const J=Z[0];return{jsonrpc:"2.0",id:0,result:yield ee._filterPolyfill.newFilter(J)}})()}_eth_newBlockFilter(){var Z=this;return v(function*(){return{jsonrpc:"2.0",id:0,result:yield Z._filterPolyfill.newBlockFilter()}})()}_eth_newPendingTransactionFilter(){var Z=this;return v(function*(){return{jsonrpc:"2.0",id:0,result:yield Z._filterPolyfill.newPendingTransactionFilter()}})()}_eth_getFilterChanges(Z){const ee=(0,C.ensureHexString)(Z[0]);return this._filterPolyfill.getFilterChanges(ee)}_eth_getFilterLogs(Z){const ee=(0,C.ensureHexString)(Z[0]);return this._filterPolyfill.getFilterLogs(ee)}initializeRelay(){return this._relay?Promise.resolve(this._relay):this._relayProvider().then(Z=>(Z.setAccountsCallback((ee,J)=>this._setAddresses(ee,J)),Z.setChainCallback((ee,J)=>{this.updateProviderInfo(J,parseInt(ee,10))}),Z.setDappDefaultChainCallback(this._chainIdFromOpts),this._relay=Z,Z))}}},6480:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.EVENTS=void 0,g.EVENTS={STARTED_CONNECTING:"walletlink_sdk.started.connecting",CONNECTED_STATE_CHANGE:"walletlink_sdk.connected",DISCONNECTED:"walletlink_sdk.disconnected",METADATA_DESTROYED:"walletlink_sdk_metadata_destroyed",LINKED:"walletlink_sdk.linked",FAILURE:"walletlink_sdk.generic_failure",SESSION_CONFIG_RECEIVED:"walletlink_sdk.session_config_event_received",ETH_ACCOUNTS_STATE:"walletlink_sdk.eth_accounts_state",SESSION_STATE_CHANGE:"walletlink_sdk.session_state_change",UNLINKED_ERROR_STATE:"walletlink_sdk.unlinked_error_state",SKIPPED_CLEARING_SESSION:"walletlink_sdk.skipped_clearing_session",GENERAL_ERROR:"walletlink_sdk.general_error",WEB3_REQUEST:"walletlink_sdk.web3.request",WEB3_REQUEST_PUBLISHED:"walletlink_sdk.web3.request_published",WEB3_RESPONSE:"walletlink_sdk.web3.response",METHOD_NOT_IMPLEMENTED:"walletlink_sdk.method_not_implemented",UNKNOWN_ADDRESS_ENCOUNTERED:"walletlink_sdk.unknown_address_encountered"}},4016:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.filterFromParam=g.FilterPolyfill=void 0;const k=I(8737),x=I(2329),_={jsonrpc:"2.0",id:0};function b(A){return{fromBlock:T(A.fromBlock),toBlock:T(A.toBlock),addresses:void 0===A.address?null:Array.isArray(A.address)?A.address:[A.address],topics:A.topics||[]}}function w(A){const N={fromBlock:D(A.fromBlock),toBlock:D(A.toBlock),topics:A.topics};return null!==A.addresses&&(N.address=A.addresses),N}function T(A){if(void 0===A||"latest"===A||"pending"===A)return"latest";if("earliest"===A)return(0,k.IntNumber)(0);if((0,x.isHexString)(A))return(0,x.intNumberFromHexString)(A);throw new Error(`Invalid block option: ${String(A)}`)}function D(A){return"latest"===A?A:(0,x.hexStringFromIntNumber)(A)}function V(){return Object.assign(Object.assign({},_),{error:{code:-32e3,message:"filter not found"}})}function S(){return Object.assign(Object.assign({},_),{result:[]})}g.FilterPolyfill=class C{constructor(N){this.logFilters=new Map,this.blockFilters=new Set,this.pendingTransactionFilters=new Set,this.cursors=new Map,this.timeouts=new Map,this.nextFilterId=(0,k.IntNumber)(1),this.REQUEST_THROTTLE_INTERVAL=1e3,this.lastFetchTimestamp=new Date(0),this.resolvers=[],this.provider=N}newFilter(N){var Y=this;return v(function*(){const ie=b(N),re=Y.makeFilterId(),Q=yield Y.setInitialCursorPosition(re,ie.fromBlock);return console.info(`Installing new log filter(${re}):`,ie,"initial cursor position:",Q),Y.logFilters.set(re,ie),Y.setFilterTimeout(re),(0,x.hexStringFromIntNumber)(re)})()}newBlockFilter(){var N=this;return v(function*(){const Y=N.makeFilterId(),ie=yield N.setInitialCursorPosition(Y,"latest");return console.info(`Installing new block filter (${Y}) with initial cursor position:`,ie),N.blockFilters.add(Y),N.setFilterTimeout(Y),(0,x.hexStringFromIntNumber)(Y)})()}newPendingTransactionFilter(){var N=this;return v(function*(){const Y=N.makeFilterId(),ie=yield N.setInitialCursorPosition(Y,"latest");return console.info(`Installing new block filter (${Y}) with initial cursor position:`,ie),N.pendingTransactionFilters.add(Y),N.setFilterTimeout(Y),(0,x.hexStringFromIntNumber)(Y)})()}uninstallFilter(N){const Y=(0,x.intNumberFromHexString)(N);return console.info(`Uninstalling filter (${Y})`),this.deleteFilter(Y),!0}getFilterChanges(N){const Y=(0,x.intNumberFromHexString)(N);return this.timeouts.has(Y)&&this.setFilterTimeout(Y),this.logFilters.has(Y)?this.getLogFilterChanges(Y):this.blockFilters.has(Y)?this.getBlockFilterChanges(Y):this.pendingTransactionFilters.has(Y)?this.getPendingTransactionFilterChanges(Y):Promise.resolve(V())}getFilterLogs(N){var Y=this;return v(function*(){const ie=(0,x.intNumberFromHexString)(N),re=Y.logFilters.get(ie);return re?Y.sendAsyncPromise(Object.assign(Object.assign({},_),{method:"eth_getLogs",params:[w(re)]})):V()})()}makeFilterId(){return(0,k.IntNumber)(++this.nextFilterId)}sendAsyncPromise(N){return new Promise((Y,ie)=>{this.provider.sendAsync(N,(re,Q)=>re?ie(re):Array.isArray(Q)||null==Q?ie(new Error(`unexpected response received: ${JSON.stringify(Q)}`)):void Y(Q))})}deleteFilter(N){console.info(`Deleting filter (${N})`),this.logFilters.delete(N),this.blockFilters.delete(N),this.pendingTransactionFilters.delete(N),this.cursors.delete(N),this.timeouts.delete(N)}getLogFilterChanges(N){var Y=this;return v(function*(){const ie=Y.logFilters.get(N),re=Y.cursors.get(N);if(!re||!ie)return V();const Q=yield Y.getCurrentBlockHeight(),Z="latest"===ie.toBlock?Q:ie.toBlock;if(re>Q||re>Number(ie.toBlock))return S();console.info(`Fetching logs from ${re} to ${Z} for filter ${N}`);const ee=yield Y.sendAsyncPromise(Object.assign(Object.assign({},_),{method:"eth_getLogs",params:[w(Object.assign(Object.assign({},ie),{fromBlock:re,toBlock:Z}))]}));if(Array.isArray(ee.result)){const J=ee.result.map(_e=>(0,x.intNumberFromHexString)(_e.blockNumber||"0x0")),we=Math.max(...J);if(we&&we>re){const _e=(0,k.IntNumber)(we+1);console.info(`Moving cursor position for filter (${N}) from ${re} to ${_e}`),Y.cursors.set(N,_e)}}return ee})()}getBlockFilterChanges(N){var Y=this;return v(function*(){const ie=Y.cursors.get(N);if(!ie)return V();const re=yield Y.getCurrentBlockHeight();if(ie>re)return S();console.info(`Fetching blocks from ${ie} to ${re} for filter (${N})`);const Q=(yield Promise.all((0,x.range)(ie,re+1).map(ee=>Y.getBlockHashByNumber((0,k.IntNumber)(ee))))).filter(ee=>!!ee),Z=(0,k.IntNumber)(ie+Q.length);return console.info(`Moving cursor position for filter (${N}) from ${ie} to ${Z}`),Y.cursors.set(N,Z),Object.assign(Object.assign({},_),{result:Q})})()}getPendingTransactionFilterChanges(N){return v(function*(){return Promise.resolve(S())})()}setInitialCursorPosition(N,Y){var ie=this;return v(function*(){const re=yield ie.getCurrentBlockHeight(),Q="number"==typeof Y&&Y>re?Y:re;return ie.cursors.set(N,Q),Q})()}setFilterTimeout(N){const Y=this.timeouts.get(N);Y&&window.clearTimeout(Y);const ie=window.setTimeout(()=>{console.info(`Filter (${N}) timed out`),this.deleteFilter(N)},3e5);this.timeouts.set(N,ie)}getCurrentBlockHeight(){var N=this;return v(function*(){const Y=new Date;if(Y.getTime()-N.lastFetchTimestamp.getTime()>N.REQUEST_THROTTLE_INTERVAL){N.lastFetchTimestamp=Y;const ie=yield N._getCurrentBlockHeight();N.currentBlockHeight=ie,N.resolvers.forEach(re=>re(ie)),N.resolvers=[]}return N.currentBlockHeight?N.currentBlockHeight:new Promise(ie=>N.resolvers.push(ie))})()}_getCurrentBlockHeight(){var N=this;return v(function*(){const{result:Y}=yield N.sendAsyncPromise(Object.assign(Object.assign({},_),{method:"eth_blockNumber",params:[]}));return(0,x.intNumberFromHexString)((0,x.ensureHexString)(Y))})()}getBlockHashByNumber(N){var Y=this;return v(function*(){const ie=yield Y.sendAsyncPromise(Object.assign(Object.assign({},_),{method:"eth_getBlockByNumber",params:[(0,x.hexStringFromIntNumber)(N),!1]}));return ie.result&&"string"==typeof ie.result.hash?(0,x.ensureHexString)(ie.result.hash):null})()}},g.filterFromParam=b},2506:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.SubscriptionManager=void 0;const k=I(1496),x=I(4035),R=()=>{};g.SubscriptionManager=class _{constructor(b){const w=new k.PollingBlockTracker({provider:b,pollingInterval:15e3,setSkipCacheFlag:!0}),{events:T,middleware:D}=x({blockTracker:w,provider:b});this.events=T,this.subscriptionMiddleware=D}handleRequest(b){var w=this;return v(function*(){const T={};return yield w.subscriptionMiddleware(b,T,R,R),T})()}destroy(){this.subscriptionMiddleware.destroy()}}},8561:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.RelayAbstract=g.APP_VERSION_KEY=g.LOCAL_STORAGE_ADDRESSES_KEY=g.WALLET_USER_NAME_KEY=void 0;const k=I(3311);g.WALLET_USER_NAME_KEY="walletUsername",g.LOCAL_STORAGE_ADDRESSES_KEY="Addresses",g.APP_VERSION_KEY="AppVersion",g.RelayAbstract=class x{makeEthereumJSONRPCRequest(_,C){return v(function*(){if(!C)throw new Error("Error: No jsonRpcUrl provided");return window.fetch(C,{method:"POST",body:JSON.stringify(_),mode:"cors",headers:{"Content-Type":"application/json"}}).then(b=>b.json()).then(b=>{if(!b)throw k.standardErrors.rpc.parse({});const w=b,{error:T}=w;if(T)throw(0,k.serializeError)(T,_.method);return w})})()}}},3483:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.RelayEventManager=void 0;const v=I(2329);g.RelayEventManager=class k{constructor(){this._nextRequestId=0,this.callbacks=new Map}makeRequestId(){this._nextRequestId=(this._nextRequestId+1)%2147483647;const R=this._nextRequestId,_=(0,v.prepend0x)(R.toString(16));return this.callbacks.get(_)&&this.callbacks.delete(_),R}}},6293:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.Session=void 0;const v=I(7965),k=I(2329),x="session:id",R="session:secret",_="session:linked";class C{constructor(w,T,D,V){this._storage=w,this._id=T||(0,k.randomBytesHex)(16),this._secret=D||(0,k.randomBytesHex)(32),this._key=(new v.sha256).update(`${this._id}, ${this._secret} WalletLink`).digest("hex"),this._linked=!!V}static load(w){const T=w.getItem(x),D=w.getItem(_),V=w.getItem(R);return T&&V?new C(w,T,V,"1"===D):null}static hash(w){return(new v.sha256).update(w).digest("hex")}get id(){return this._id}get secret(){return this._secret}get key(){return this._key}get linked(){return this._linked}set linked(w){this._linked=w,this.persistLinked()}save(){return this._storage.setItem(x,this._id),this._storage.setItem(R,this._secret),this.persistLinked(),this}persistLinked(){this._storage.setItem(_,this._linked?"1":"0")}}g.Session=C},2163:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.MobileRelay=void 0;const v=I(2329),k=I(4587),x=I(5129);g.MobileRelay=class R extends k.WalletLinkRelay{constructor(C){var b;super(C),this._enableMobileWalletLink=null!==(b=C.enableMobileWalletLink)&&void 0!==b&&b}requestEthereumAccounts(){return this._enableMobileWalletLink?super.requestEthereumAccounts():{promise:new Promise(()=>{const C=(0,v.getLocation)();C.href=`https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(C.href)}`}),cancel:()=>{}}}publishWeb3RequestEvent(C,b){if(super.publishWeb3RequestEvent(C,b),!(this._enableMobileWalletLink&&this.ui instanceof x.MobileRelayUI))return;let w=!1;switch(b.method){case"requestEthereumAccounts":case"connectAndSignIn":w=!0,this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());break;case"switchEthereumChain":return;default:w=!0,this.ui.openCoinbaseWalletDeeplink()}w&&window.addEventListener("blur",()=>{window.addEventListener("focus",()=>{this.connection.checkUnseenEvents()},{once:!0})},{once:!0})}handleWeb3ResponseMessage(C){super.handleWeb3ResponseMessage(C),this._enableMobileWalletLink&&this.ui instanceof x.MobileRelayUI&&this.ui.closeOpenedWindow()}connectAndSignIn(C){if(!this._enableMobileWalletLink)throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");return this.sendRequest({method:"connectAndSignIn",params:{appName:this.appName,appLogoUrl:this.appLogoUrl,domain:window.location.hostname,aud:window.location.href,version:"1",type:"eip4361",nonce:C.nonce,iat:(new Date).toISOString(),chainId:`eip155:${this.dappDefaultChain}`,statement:C.statement,resources:C.resources}})}}},5129:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.MobileRelayUI=void 0;const v=I(8669);g.MobileRelayUI=class k{constructor(R){this.attached=!1,this.darkMode=!1,this.openedWindow=null,this.redirectDialog=new v.RedirectDialog,this.darkMode=R.darkMode}attach(){if(this.attached)throw new Error("Coinbase Wallet SDK UI is already attached");this.redirectDialog.attach(),this.attached=!0}setConnected(R){}closeOpenedWindow(){var R;null===(R=this.openedWindow)||void 0===R||R.close(),this.openedWindow=null}redirectToCoinbaseWallet(R){const _=new URL("https://go.cb-w.com/walletlink");_.searchParams.append("redirect_url",window.location.href),R&&_.searchParams.append("wl_url",R),this.openedWindow=window.open(_.href,"cbw-opener"),this.openedWindow&&setTimeout(()=>this.closeOpenedWindow(),5e3)}openCoinbaseWalletDeeplink(R){this.redirectDialog.present({title:"Redirecting to Coinbase Wallet...",buttonText:"Open",darkMode:this.darkMode,onButtonClick:()=>{this.redirectToCoinbaseWallet(R)}}),setTimeout(()=>{this.redirectToCoinbaseWallet(R)},99)}showConnecting(R){return()=>{this.closeOpenedWindow(),this.redirectDialog.clear()}}hideRequestEthereumAccounts(){this.closeOpenedWindow(),this.redirectDialog.clear()}requestEthereumAccounts(){}addEthereumChain(){}watchAsset(){}selectProvider(){}switchEthereumChain(){}signEthereumMessage(){}signEthereumTransaction(){}submitEthereumTransaction(){}ethereumAddressFromSignedMessage(){}reloadUI(){}setStandalone(){}setConnectDisabled(){}inlineAccountsResponse(){return!1}inlineAddEthereumChain(){return!1}inlineWatchAsset(){return!1}inlineSwitchEthereumChain(){return!1}isStandalone(){return!1}}},4587:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.WalletLinkRelay=void 0;const v=I(3311),k=I(8737),x=I(2329),R=I(6480),_=I(8561),C=I(6293),b=I(7547),w=I(8315),T=I(7144);class D extends _.RelayAbstract{constructor(S){var A;super(),this.accountsCallback=null,this.chainCallbackParams={chainId:"",jsonRpcUrl:""},this.chainCallback=null,this.dappDefaultChain=1,this.appName="",this.appLogoUrl=null,this.linkedUpdated=re=>{var Q;this.isLinked=re;const Z=this.storage.getItem(_.LOCAL_STORAGE_ADDRESSES_KEY);if(re&&(this.session.linked=re),this.isUnlinkedErrorState=!1,Z){const ee=Z.split(" "),J="true"===this.storage.getItem("IsStandaloneSigning");if(""!==ee[0]&&!re&&this.session.linked&&!J){this.isUnlinkedErrorState=!0;const we=this.getSessionIdHash();null===(Q=this.diagnostic)||void 0===Q||Q.log(R.EVENTS.UNLINKED_ERROR_STATE,{sessionIdHash:we})}}},this.metadataUpdated=(re,Q)=>{this.storage.setItem(re,Q)},this.chainUpdated=(re,Q)=>{this.chainCallbackParams.chainId===re&&this.chainCallbackParams.jsonRpcUrl===Q||(this.chainCallbackParams={chainId:re,jsonRpcUrl:Q},this.chainCallback&&this.chainCallback(re,Q))},this.accountUpdated=re=>{this.accountsCallback&&this.accountsCallback([re]),D.accountRequestCallbackIds.size>0&&(Array.from(D.accountRequestCallbackIds.values()).forEach(Q=>{this.invokeCallback(Object.assign(Object.assign({},{type:"WEB3_RESPONSE",id:Q,response:{method:"requestEthereumAccounts",result:[re]}}),{id:Q}))}),D.accountRequestCallbackIds.clear())},this.connectedUpdated=re=>{this.ui.setConnected(re)},this.resetAndReload=this.resetAndReload.bind(this),this.linkAPIUrl=S.linkAPIUrl,this.storage=S.storage,this.options=S;const{session:N,ui:Y,connection:ie}=this.subscribe();this._session=N,this.connection=ie,this.relayEventManager=S.relayEventManager,this.diagnostic=S.diagnosticLogger,this._reloadOnDisconnect=null===(A=S.reloadOnDisconnect)||void 0===A||A,this.ui=Y}subscribe(){const S=C.Session.load(this.storage)||new C.Session(this.storage).save(),{linkAPIUrl:A,diagnostic:N}=this,Y=new b.WalletLinkConnection({session:S,linkAPIUrl:A,diagnostic:N,listener:this}),{version:ie,darkMode:re}=this.options,Q=this.options.uiConstructor({linkAPIUrl:A,version:ie,darkMode:re,session:S});return Y.connect(),{session:S,ui:Q,connection:Y}}attachUI(){this.ui.attach()}resetAndReload(){Promise.race([this.connection.setSessionMetadata("__destroyed","1"),new Promise(S=>setTimeout(()=>S(null),1e3))]).then(()=>{var S,A;const N=this.ui.isStandalone();null===(S=this.diagnostic)||void 0===S||S.log(R.EVENTS.SESSION_STATE_CHANGE,{method:"relay::resetAndReload",sessionMetadataChange:"__destroyed, 1",sessionIdHash:this.getSessionIdHash()}),this.connection.destroy();const Y=C.Session.load(this.storage);if(Y?.id===this._session.id?this.storage.clear():Y&&(null===(A=this.diagnostic)||void 0===A||A.log(R.EVENTS.SKIPPED_CLEARING_SESSION,{sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:C.Session.hash(Y.id)})),this._reloadOnDisconnect)return void this.ui.reloadUI();this.accountsCallback&&this.accountsCallback([],!0);const{session:ie,ui:re,connection:Q}=this.subscribe();this._session=ie,this.connection=Q,this.ui=re,N&&this.ui.setStandalone&&this.ui.setStandalone(!0),this.attachUI()}).catch(S=>{var A;null===(A=this.diagnostic)||void 0===A||A.log(R.EVENTS.FAILURE,{method:"relay::resetAndReload",message:`failed to reset and reload with ${S}`,sessionIdHash:this.getSessionIdHash()})})}setAppInfo(S,A){this.appName=S,this.appLogoUrl=A}getStorageItem(S){return this.storage.getItem(S)}get session(){return this._session}setStorageItem(S,A){this.storage.setItem(S,A)}signEthereumMessage(S,A,N,Y){return this.sendRequest({method:"signEthereumMessage",params:{message:(0,x.hexStringFromBuffer)(S,!0),address:A,addPrefix:N,typedDataJson:Y||null}})}ethereumAddressFromSignedMessage(S,A,N){return this.sendRequest({method:"ethereumAddressFromSignedMessage",params:{message:(0,x.hexStringFromBuffer)(S,!0),signature:(0,x.hexStringFromBuffer)(A,!0),addPrefix:N}})}signEthereumTransaction(S){return this.sendRequest({method:"signEthereumTransaction",params:{fromAddress:S.fromAddress,toAddress:S.toAddress,weiValue:(0,x.bigIntStringFromBN)(S.weiValue),data:(0,x.hexStringFromBuffer)(S.data,!0),nonce:S.nonce,gasPriceInWei:S.gasPriceInWei?(0,x.bigIntStringFromBN)(S.gasPriceInWei):null,maxFeePerGas:S.gasPriceInWei?(0,x.bigIntStringFromBN)(S.gasPriceInWei):null,maxPriorityFeePerGas:S.gasPriceInWei?(0,x.bigIntStringFromBN)(S.gasPriceInWei):null,gasLimit:S.gasLimit?(0,x.bigIntStringFromBN)(S.gasLimit):null,chainId:S.chainId,shouldSubmit:!1}})}signAndSubmitEthereumTransaction(S){return this.sendRequest({method:"signEthereumTransaction",params:{fromAddress:S.fromAddress,toAddress:S.toAddress,weiValue:(0,x.bigIntStringFromBN)(S.weiValue),data:(0,x.hexStringFromBuffer)(S.data,!0),nonce:S.nonce,gasPriceInWei:S.gasPriceInWei?(0,x.bigIntStringFromBN)(S.gasPriceInWei):null,maxFeePerGas:S.maxFeePerGas?(0,x.bigIntStringFromBN)(S.maxFeePerGas):null,maxPriorityFeePerGas:S.maxPriorityFeePerGas?(0,x.bigIntStringFromBN)(S.maxPriorityFeePerGas):null,gasLimit:S.gasLimit?(0,x.bigIntStringFromBN)(S.gasLimit):null,chainId:S.chainId,shouldSubmit:!0}})}submitEthereumTransaction(S,A){return this.sendRequest({method:"submitEthereumTransaction",params:{signedTransaction:(0,x.hexStringFromBuffer)(S,!0),chainId:A}})}scanQRCode(S){return this.sendRequest({method:"scanQRCode",params:{regExp:S}})}getQRCodeUrl(){return(0,x.createQrUrl)(this._session.id,this._session.secret,this.linkAPIUrl,!1,this.options.version,this.dappDefaultChain)}genericRequest(S,A){return this.sendRequest({method:"generic",params:{action:A,data:S}})}sendGenericMessage(S){return this.sendRequest(S)}sendRequest(S){let A=null;const N=(0,x.randomBytesHex)(8),Y=re=>{this.publishWeb3RequestCanceledEvent(N),this.handleErrorResponse(N,S.method,re),A?.()};return{promise:new Promise((re,Q)=>{this.ui.isStandalone()||(A=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:Y,onResetConnection:this.resetAndReload})),this.relayEventManager.callbacks.set(N,Z=>{if(A?.(),(0,w.isErrorResponse)(Z))return Q(new Error(Z.errorMessage));re(Z)}),this.ui.isStandalone()?this.sendRequestStandalone(N,S):this.publishWeb3RequestEvent(N,S)}),cancel:Y}}setConnectDisabled(S){this.ui.setConnectDisabled(S)}setAccountsCallback(S){this.accountsCallback=S}setChainCallback(S){this.chainCallback=S}setDappDefaultChainCallback(S){this.dappDefaultChain=S,this.ui instanceof T.WalletLinkRelayUI&&this.ui.setChainId(S)}publishWeb3RequestEvent(S,A){var N;const Y={type:"WEB3_REQUEST",id:S,request:A},ie=C.Session.load(this.storage);null===(N=this.diagnostic)||void 0===N||N.log(R.EVENTS.WEB3_REQUEST,{eventId:Y.id,method:`relay::${A.method}`,sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:ie?C.Session.hash(ie.id):"",isSessionMismatched:(ie?.id!==this._session.id).toString()}),this.publishEvent("Web3Request",Y,!0).then(re=>{var Q;null===(Q=this.diagnostic)||void 0===Q||Q.log(R.EVENTS.WEB3_REQUEST_PUBLISHED,{eventId:Y.id,method:`relay::${A.method}`,sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:ie?C.Session.hash(ie.id):"",isSessionMismatched:(ie?.id!==this._session.id).toString()})}).catch(re=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:Y.id,response:{method:A.method,errorMessage:re.message}})})}publishWeb3RequestCanceledEvent(S){this.publishEvent("Web3RequestCanceled",{type:"WEB3_REQUEST_CANCELED",id:S},!1).then()}publishEvent(S,A,N){return this.connection.publishEvent(S,A,N)}handleWeb3ResponseMessage(S){var A;const{response:N}=S;if(null===(A=this.diagnostic)||void 0===A||A.log(R.EVENTS.WEB3_RESPONSE,{eventId:S.id,method:`relay::${N.method}`,sessionIdHash:this.getSessionIdHash()}),"requestEthereumAccounts"===N.method)return D.accountRequestCallbackIds.forEach(Y=>this.invokeCallback(Object.assign(Object.assign({},S),{id:Y}))),void D.accountRequestCallbackIds.clear();this.invokeCallback(S)}handleErrorResponse(S,A,N,Y){var ie;const re=null!==(ie=N?.message)&&void 0!==ie?ie:(0,v.getMessageFromCode)(Y);this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:S,response:{method:A,errorMessage:re,errorCode:Y}})}invokeCallback(S){const A=this.relayEventManager.callbacks.get(S.id);A&&(A(S.response),this.relayEventManager.callbacks.delete(S.id))}requestEthereumAccounts(){const S={method:"requestEthereumAccounts",params:{appName:this.appName,appLogoUrl:this.appLogoUrl||null}},N=(0,x.randomBytesHex)(8),Y=re=>{this.publishWeb3RequestCanceledEvent(N),this.handleErrorResponse(N,S.method,re)};return{promise:new Promise((re,Q)=>{if(this.relayEventManager.callbacks.set(N,Z=>{if(this.ui.hideRequestEthereumAccounts(),(0,w.isErrorResponse)(Z))return Q(new Error(Z.errorMessage));re(Z)}),this.ui.inlineAccountsResponse())this.ui.requestEthereumAccounts({onCancel:Y,onAccounts:ee=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:N,response:{method:"requestEthereumAccounts",result:ee}})}});else{const Z=v.standardErrors.provider.userRejectedRequest("User denied account authorization");this.ui.requestEthereumAccounts({onCancel:()=>Y(Z)})}D.accountRequestCallbackIds.add(N),!this.ui.inlineAccountsResponse()&&!this.ui.isStandalone()&&this.publishWeb3RequestEvent(N,S)}),cancel:Y}}selectProvider(S){const N=(0,x.randomBytesHex)(8);return{cancel:re=>{this.publishWeb3RequestCanceledEvent(N),this.handleErrorResponse(N,"selectProvider",re)},promise:new Promise((re,Q)=>{this.relayEventManager.callbacks.set(N,J=>{if((0,w.isErrorResponse)(J))return Q(new Error(J.errorMessage));re(J)}),this.ui.selectProvider&&this.ui.selectProvider({onApprove:J=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:N,response:{method:"selectProvider",result:J}})},onCancel:J=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:N,response:{method:"selectProvider",result:k.ProviderType.Unselected}})},providerOptions:S})})}}watchAsset(S,A,N,Y,ie,re){const Q={method:"watchAsset",params:{type:S,options:{address:A,symbol:N,decimals:Y,image:ie},chainId:re}};let Z=null;const ee=(0,x.randomBytesHex)(8),J=_e=>{this.publishWeb3RequestCanceledEvent(ee),this.handleErrorResponse(ee,Q.method,_e),Z?.()};return this.ui.inlineWatchAsset()||(Z=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:J,onResetConnection:this.resetAndReload})),{cancel:J,promise:new Promise((_e,B)=>{this.relayEventManager.callbacks.set(ee,ae=>{if(Z?.(),(0,w.isErrorResponse)(ae))return B(new Error(ae.errorMessage));_e(ae)}),this.ui.inlineWatchAsset()&&this.ui.watchAsset({onApprove:()=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:ee,response:{method:"watchAsset",result:!0}})},onCancel:ae=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:ee,response:{method:"watchAsset",result:!1}})},type:S,address:A,symbol:N,decimals:Y,image:ie,chainId:re}),!this.ui.inlineWatchAsset()&&!this.ui.isStandalone()&&this.publishWeb3RequestEvent(ee,Q)})}}addEthereumChain(S,A,N,Y,ie,re){const Q={method:"addEthereumChain",params:{chainId:S,rpcUrls:A,blockExplorerUrls:Y,chainName:ie,iconUrls:N,nativeCurrency:re}};let Z=null;const ee=(0,x.randomBytesHex)(8),J=_e=>{this.publishWeb3RequestCanceledEvent(ee),this.handleErrorResponse(ee,Q.method,_e),Z?.()};return this.ui.inlineAddEthereumChain(S)||(Z=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:J,onResetConnection:this.resetAndReload})),{promise:new Promise((_e,B)=>{this.relayEventManager.callbacks.set(ee,ae=>{if(Z?.(),(0,w.isErrorResponse)(ae))return B(new Error(ae.errorMessage));_e(ae)}),this.ui.inlineAddEthereumChain(S)&&this.ui.addEthereumChain({onCancel:ae=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:ee,response:{method:"addEthereumChain",result:{isApproved:!1,rpcUrl:""}}})},onApprove:ae=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:ee,response:{method:"addEthereumChain",result:{isApproved:!0,rpcUrl:ae}}})},chainId:Q.params.chainId,rpcUrls:Q.params.rpcUrls,blockExplorerUrls:Q.params.blockExplorerUrls,chainName:Q.params.chainName,iconUrls:Q.params.iconUrls,nativeCurrency:Q.params.nativeCurrency}),!this.ui.inlineAddEthereumChain(S)&&!this.ui.isStandalone()&&this.publishWeb3RequestEvent(ee,Q)}),cancel:J}}switchEthereumChain(S,A){const N={method:"switchEthereumChain",params:Object.assign({chainId:S},{address:A})},Y=(0,x.randomBytesHex)(8);return{promise:new Promise((Q,Z)=>{this.relayEventManager.callbacks.set(Y,we=>(0,w.isErrorResponse)(we)&&we.errorCode?Z(v.standardErrors.provider.custom({code:we.errorCode,message:"Unrecognized chain ID. Try adding the chain using addEthereumChain first."})):(0,w.isErrorResponse)(we)?Z(new Error(we.errorMessage)):void Q(we)),this.ui.switchEthereumChain({onCancel:we=>{var _e;if(we){const B=null!==(_e=(0,v.getErrorCode)(we))&&void 0!==_e?_e:v.standardErrorCodes.provider.unsupportedChain;this.handleErrorResponse(Y,"switchEthereumChain",we instanceof Error?we:v.standardErrors.provider.unsupportedChain(S),B)}else this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:Y,response:{method:"switchEthereumChain",result:{isApproved:!1,rpcUrl:""}}})},onApprove:we=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:Y,response:{method:"switchEthereumChain",result:{isApproved:!0,rpcUrl:we}}})},chainId:N.params.chainId,address:N.params.address}),!this.ui.inlineSwitchEthereumChain()&&!this.ui.isStandalone()&&this.publishWeb3RequestEvent(Y,N)}),cancel:Q=>{this.publishWeb3RequestCanceledEvent(Y),this.handleErrorResponse(Y,N.method,Q)}}}inlineAddEthereumChain(S){return this.ui.inlineAddEthereumChain(S)}getSessionIdHash(){return C.Session.hash(this._session.id)}sendRequestStandalone(S,A){const N=ie=>{this.handleErrorResponse(S,A.method,ie)},Y=ie=>{this.handleWeb3ResponseMessage({type:"WEB3_RESPONSE",id:S,response:ie})};switch(A.method){case"signEthereumMessage":this.ui.signEthereumMessage({request:A,onSuccess:Y,onCancel:N});break;case"signEthereumTransaction":this.ui.signEthereumTransaction({request:A,onSuccess:Y,onCancel:N});break;case"submitEthereumTransaction":this.ui.submitEthereumTransaction({request:A,onSuccess:Y,onCancel:N});break;case"ethereumAddressFromSignedMessage":this.ui.ethereumAddressFromSignedMessage({request:A,onSuccess:Y});break;default:N()}}}g.WalletLinkRelay=D,D.accountRequestCallbackIds=new Set},7547:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.WalletLinkConnection=void 0;const k=I(8737),x=I(8048),R=I(6480),_=I(8561),C=I(6293),b=I(6724),w=I(243);g.WalletLinkConnection=class V{constructor({session:A,linkAPIUrl:N,listener:Y,diagnostic:ie,WebSocketClass:re=WebSocket}){var Q=this;this.destroyed=!1,this.lastHeartbeatResponse=0,this.nextReqId=(0,k.IntNumber)(1),this._connected=!1,this._linked=!1,this.shouldFetchUnseenEventsOnConnect=!1,this.requestResolutions=new Map,this.handleSessionMetadataUpdated=ee=>{ee&&new Map([["__destroyed",this.handleDestroyed],["EthereumAddress",this.handleAccountUpdated],["WalletUsername",this.handleWalletUsernameUpdated],["AppVersion",this.handleAppVersionUpdated],["ChainId",we=>ee.JsonRpcUrl&&this.handleChainUpdated(we,ee.JsonRpcUrl)]]).forEach((we,_e)=>{const B=ee[_e];void 0!==B&&we(B)})},this.handleDestroyed=ee=>{var J,we;"1"===ee&&(null===(J=this.listener)||void 0===J||J.resetAndReload(),null===(we=this.diagnostic)||void 0===we||we.log(R.EVENTS.METADATA_DESTROYED,{alreadyDestroyed:this.isDestroyed,sessionIdHash:C.Session.hash(this.session.id)}))},this.handleAccountUpdated=function(){var ee=v(function*(J){var we,_e;try{const B=yield Q.cipher.decrypt(J);null===(we=Q.listener)||void 0===we||we.accountUpdated(B)}catch{null===(_e=Q.diagnostic)||void 0===_e||_e.log(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"selectedAddress"})}});return function(J){return ee.apply(this,arguments)}}(),this.handleMetadataUpdated=function(){var ee=v(function*(J,we){var _e,B;try{const q=yield Q.cipher.decrypt(we);null===(_e=Q.listener)||void 0===_e||_e.metadataUpdated(J,q)}catch{null===(B=Q.diagnostic)||void 0===B||B.log(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:J})}});return function(J,we){return ee.apply(this,arguments)}}(),this.handleWalletUsernameUpdated=function(){var ee=v(function*(J){Q.handleMetadataUpdated(_.WALLET_USER_NAME_KEY,J)});return function(J){return ee.apply(this,arguments)}}(),this.handleAppVersionUpdated=function(){var ee=v(function*(J){Q.handleMetadataUpdated(_.APP_VERSION_KEY,J)});return function(J){return ee.apply(this,arguments)}}(),this.handleChainUpdated=function(){var ee=v(function*(J,we){var _e,B;try{const q=yield Q.cipher.decrypt(J),be=yield Q.cipher.decrypt(we);null===(_e=Q.listener)||void 0===_e||_e.chainUpdated(q,be)}catch{null===(B=Q.diagnostic)||void 0===B||B.log(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"chainId|jsonRpcUrl"})}});return function(J,we){return ee.apply(this,arguments)}}(),this.session=A,this.cipher=new x.Cipher(A.secret),this.diagnostic=ie,this.listener=Y;const Z=new w.WalletLinkWebSocket(`${N}/rpc`,re);Z.setConnectionStateListener(function(){var ee=v(function*(J){var we;null===(we=Q.diagnostic)||void 0===we||we.log(R.EVENTS.CONNECTED_STATE_CHANGE,{state:J,sessionIdHash:C.Session.hash(A.id)});let _e=!1;switch(J){case w.ConnectionState.DISCONNECTED:if(!Q.destroyed){const B=function(){var q=v(function*(){yield new Promise(be=>setTimeout(be,5e3)),Q.destroyed||Z.connect().catch(()=>{B()})});return function(){return q.apply(this,arguments)}}();B()}break;case w.ConnectionState.CONNECTED:try{yield Q.authenticate(),Q.sendIsLinked(),Q.sendGetSessionConfig(),_e=!0}catch{}Q.updateLastHeartbeat(),setInterval(()=>{Q.heartbeat()},1e4),Q.shouldFetchUnseenEventsOnConnect&&Q.fetchUnseenEventsAPI()}Q.connected!==_e&&(Q.connected=_e)});return function(J){return ee.apply(this,arguments)}}()),Z.setIncomingDataListener(ee=>{var J,we,_e;switch(ee.type){case"Heartbeat":return void this.updateLastHeartbeat();case"IsLinkedOK":case"Linked":{const B="IsLinkedOK"===ee.type?ee.linked:void 0;null===(J=this.diagnostic)||void 0===J||J.log(R.EVENTS.LINKED,{sessionIdHash:C.Session.hash(A.id),linked:B,type:ee.type,onlineGuests:ee.onlineGuests}),this.linked=B||ee.onlineGuests>0;break}case"GetSessionConfigOK":case"SessionConfigUpdated":null===(we=this.diagnostic)||void 0===we||we.log(R.EVENTS.SESSION_CONFIG_RECEIVED,{sessionIdHash:C.Session.hash(A.id),metadata_keys:ee&&ee.metadata?Object.keys(ee.metadata):void 0}),this.handleSessionMetadataUpdated(ee.metadata);break;case"Event":this.handleIncomingEvent(ee)}void 0!==ee.id&&(null===(_e=this.requestResolutions.get(ee.id))||void 0===_e||_e(ee))}),this.ws=Z,this.http=new b.WalletLinkHTTP(N,A.id,A.key)}connect(){var A;if(this.destroyed)throw new Error("instance is destroyed");null===(A=this.diagnostic)||void 0===A||A.log(R.EVENTS.STARTED_CONNECTING,{sessionIdHash:C.Session.hash(this.session.id)}),this.ws.connect()}destroy(){var A;this.destroyed=!0,this.ws.disconnect(),null===(A=this.diagnostic)||void 0===A||A.log(R.EVENTS.DISCONNECTED,{sessionIdHash:C.Session.hash(this.session.id)}),this.listener=void 0}get isDestroyed(){return this.destroyed}get connected(){return this._connected}set connected(A){var N,Y;this._connected=A,A&&(null===(N=this.onceConnected)||void 0===N||N.call(this)),null===(Y=this.listener)||void 0===Y||Y.connectedUpdated(A)}setOnceConnected(A){return new Promise(N=>{this.connected?A().then(N):this.onceConnected=()=>{A().then(N),this.onceConnected=void 0}})}get linked(){return this._linked}set linked(A){var N,Y;this._linked=A,A&&(null===(N=this.onceLinked)||void 0===N||N.call(this)),null===(Y=this.listener)||void 0===Y||Y.linkedUpdated(A)}setOnceLinked(A){return new Promise(N=>{this.linked?A().then(N):this.onceLinked=()=>{A().then(N),this.onceLinked=void 0}})}handleIncomingEvent(A){var N=this;return v(function*(){var Y,ie;if("Event"===A.type&&"Web3Response"===A.event)try{const re=yield N.cipher.decrypt(A.data),Q=JSON.parse(re);if("WEB3_RESPONSE"!==Q.type)return;null===(Y=N.listener)||void 0===Y||Y.handleWeb3ResponseMessage(Q)}catch{null===(ie=N.diagnostic)||void 0===ie||ie.log(R.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"incomingEvent"})}})()}checkUnseenEvents(){var A=this;return v(function*(){if(A.connected){yield new Promise(N=>setTimeout(N,250));try{yield A.fetchUnseenEventsAPI()}catch(N){console.error("Unable to check for unseen events",N)}}else A.shouldFetchUnseenEventsOnConnect=!0})()}fetchUnseenEventsAPI(){var A=this;return v(function*(){A.shouldFetchUnseenEventsOnConnect=!1,(yield A.http.fetchUnseenEvents()).forEach(Y=>A.handleIncomingEvent(Y))})()}setSessionMetadata(A,N){var Y=this;return v(function*(){const ie={type:"SetSessionConfig",id:(0,k.IntNumber)(Y.nextReqId++),sessionId:Y.session.id,metadata:{[A]:N}};return Y.setOnceConnected(v(function*(){const re=yield Y.makeRequest(ie);if("Fail"===re.type)throw new Error(re.error||"failed to set session metadata")}))})()}publishEvent(A,N,Y=!1){var ie=this;return v(function*(){const re=yield ie.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({},N),{origin:location.origin,relaySource:window.coinbaseWalletExtension?"injected_sdk":"sdk"}))),Q={type:"PublishEvent",id:(0,k.IntNumber)(ie.nextReqId++),sessionId:ie.session.id,event:A,data:re,callWebhook:Y};return ie.setOnceLinked(v(function*(){const Z=yield ie.makeRequest(Q);if("Fail"===Z.type)throw new Error(Z.error||"failed to publish event");return Z.eventId}))})()}sendData(A){this.ws.sendData(JSON.stringify(A))}updateLastHeartbeat(){this.lastHeartbeatResponse=Date.now()}heartbeat(){if(Date.now()-this.lastHeartbeatResponse>2e4)this.ws.disconnect();else try{this.ws.sendData("h")}catch{}}makeRequest(A,N=6e4){var Y=this;return v(function*(){const ie=A.id;let re;return Y.sendData(A),Promise.race([new Promise((Q,Z)=>{re=window.setTimeout(()=>{Z(new Error(`request ${ie} timed out`))},N)}),new Promise(Q=>{Y.requestResolutions.set(ie,Z=>{clearTimeout(re),Q(Z),Y.requestResolutions.delete(ie)})})])})()}authenticate(){var A=this;return v(function*(){const N={type:"HostSession",id:(0,k.IntNumber)(A.nextReqId++),sessionId:A.session.id,sessionKey:A.session.key},Y=yield A.makeRequest(N);if("Fail"===Y.type)throw new Error(Y.error||"failed to authentcate")})()}sendIsLinked(){const A={type:"IsLinked",id:(0,k.IntNumber)(this.nextReqId++),sessionId:this.session.id};this.sendData(A)}sendGetSessionConfig(){const A={type:"GetSessionConfig",id:(0,k.IntNumber)(this.nextReqId++),sessionId:this.session.id};this.sendData(A)}}},6724:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.WalletLinkHTTP=void 0,g.WalletLinkHTTP=class k{constructor(R,_,C){this.linkAPIUrl=R,this.sessionId=_,this.auth=`Basic ${btoa(`${_}:${C}`)}`}markUnseenEventsAsSeen(R){var _=this;return v(function*(){return Promise.all(R.map(C=>fetch(`${_.linkAPIUrl}/events/${C.eventId}/seen`,{method:"POST",headers:{Authorization:_.auth}}))).catch(C=>console.error("Unabled to mark event as failed:",C))})()}fetchUnseenEvents(){var R=this;return v(function*(){var _;const C=yield fetch(`${R.linkAPIUrl}/events?unseen=true`,{headers:{Authorization:R.auth}});if(C.ok){const{events:b,error:w}=yield C.json();if(w)throw new Error(`Check unseen events failed: ${w}`);const T=null!==(_=b?.filter(D=>"Web3Response"===D.event).map(D=>({type:"Event",sessionId:R.sessionId,eventId:D.id,event:D.event,data:D.data})))&&void 0!==_?_:[];return R.markUnseenEventsAsSeen(T),T}throw new Error(`Check unseen events failed: ${C.status}`)})()}}},243:(Ve,g,I)=>{"use strict";var v=I(7156).default;Object.defineProperty(g,"__esModule",{value:!0}),g.WalletLinkWebSocket=g.ConnectionState=void 0;var k=function(R){return R[R.DISCONNECTED=0]="DISCONNECTED",R[R.CONNECTING=1]="CONNECTING",R[R.CONNECTED=2]="CONNECTED",R}(k||(g.ConnectionState=k={}));g.WalletLinkWebSocket=class x{setConnectionStateListener(_){this.connectionStateListener=_}setIncomingDataListener(_){this.incomingDataListener=_}constructor(_,C=WebSocket){this.WebSocketClass=C,this.webSocket=null,this.pendingData=[],this.url=_.replace(/^http/,"ws")}connect(){var _=this;return v(function*(){if(_.webSocket)throw new Error("webSocket object is not null");return new Promise((C,b)=>{var w;let T;try{_.webSocket=T=new _.WebSocketClass(_.url)}catch(D){return void b(D)}null===(w=_.connectionStateListener)||void 0===w||w.call(_,k.CONNECTING),T.onclose=D=>{var V;_.clearWebSocket(),b(new Error(`websocket error ${D.code}: ${D.reason}`)),null===(V=_.connectionStateListener)||void 0===V||V.call(_,k.DISCONNECTED)},T.onopen=D=>{var V;C(),null===(V=_.connectionStateListener)||void 0===V||V.call(_,k.CONNECTED),_.pendingData.length>0&&([..._.pendingData].forEach(A=>_.sendData(A)),_.pendingData=[])},T.onmessage=D=>{var V,S;if("h"===D.data)null===(V=_.incomingDataListener)||void 0===V||V.call(_,{type:"Heartbeat"});else try{const A=JSON.parse(D.data);null===(S=_.incomingDataListener)||void 0===S||S.call(_,A)}catch{}}})})()}disconnect(){var _;const{webSocket:C}=this;if(C){this.clearWebSocket(),null===(_=this.connectionStateListener)||void 0===_||_.call(this,k.DISCONNECTED),this.connectionStateListener=void 0,this.incomingDataListener=void 0;try{C.close()}catch{}}}sendData(_){const{webSocket:C}=this;if(!C)return this.pendingData.push(_),void this.connect();C.send(_)}clearWebSocket(){const{webSocket:_}=this;_&&(this.webSocket=null,_.onclose=null,_.onerror=null,_.onmessage=null,_.onopen=null)}}},8315:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.isErrorResponse=void 0,g.isErrorResponse=function I(v){return void 0!==v.errorMessage}},7144:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.WalletLinkRelayUI=void 0;const v=I(8070),k=I(3953),x=I(1926);g.WalletLinkRelayUI=class R{constructor(C){this.standalone=null,this.attached=!1,this.snackbar=new x.Snackbar({darkMode:C.darkMode}),this.linkFlow=new k.LinkFlow({darkMode:C.darkMode,version:C.version,sessionId:C.session.id,sessionSecret:C.session.secret,linkAPIUrl:C.linkAPIUrl,isParentConnection:!1})}attach(){if(this.attached)throw new Error("Coinbase Wallet SDK UI is already attached");const C=document.documentElement,b=document.createElement("div");b.className="-cbwsdk-css-reset",C.appendChild(b),this.linkFlow.attach(b),this.snackbar.attach(b),this.attached=!0,(0,v.injectCssReset)()}setConnected(C){this.linkFlow.setConnected(C)}setChainId(C){this.linkFlow.setChainId(C)}setConnectDisabled(C){this.linkFlow.setConnectDisabled(C)}addEthereumChain(){}watchAsset(){}switchEthereumChain(){}requestEthereumAccounts(C){this.linkFlow.open({onCancel:C.onCancel})}hideRequestEthereumAccounts(){this.linkFlow.close()}signEthereumMessage(){}signEthereumTransaction(){}submitEthereumTransaction(){}ethereumAddressFromSignedMessage(){}showConnecting(C){let b;return b=C.isUnlinkedErrorState?{autoExpand:!0,message:"Connection lost",menuItems:[{isRed:!1,info:"Reset connection",svgWidth:"10",svgHeight:"11",path:"M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",defaultFillRule:"evenodd",defaultClipRule:"evenodd",onClick:C.onResetConnection}]}:{message:"Confirm on phone",menuItems:[{isRed:!0,info:"Cancel transaction",svgWidth:"11",svgHeight:"11",path:"M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",defaultFillRule:"inherit",defaultClipRule:"inherit",onClick:C.onCancel},{isRed:!1,info:"Reset connection",svgWidth:"10",svgHeight:"11",path:"M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",defaultFillRule:"evenodd",defaultClipRule:"evenodd",onClick:C.onResetConnection}]},this.snackbar.presentItem(b)}reloadUI(){document.location.reload()}inlineAccountsResponse(){return!1}inlineAddEthereumChain(){return!1}inlineWatchAsset(){return!1}inlineSwitchEthereumChain(){return!1}setStandalone(C){this.standalone=C}isStandalone(){var C;return null!==(C=this.standalone)&&void 0!==C&&C}}},4475:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"},9959:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(re){return re&&re.__esModule?re:{default:re}};Object.defineProperty(g,"__esModule",{value:!0}),g.CoinbaseWalletSteps=g.ConnectContent=void 0;const k=v(I(6915)),x=I(4354),R=I(2329),_=I(7938),C=I(1757),b=I(7072),w=I(7341),T=I(5499),D=I(2531),V=v(I(4475)),S_steps=ie,A=re=>"light"===re?"#FFFFFF":"#0A0B0D";function Y({title:re,description:Q,theme:Z}){return(0,x.h)("div",{className:(0,k.default)("-cbwsdk-connect-item",Z)},(0,x.h)("div",null,(0,x.h)(b.CoinbaseWalletRound,null)),(0,x.h)("div",{className:"-cbwsdk-connect-item-copy-wrapper"},(0,x.h)("h3",{className:"-cbwsdk-connect-item-title"},re),(0,x.h)("p",{className:"-cbwsdk-connect-item-description"},Q)))}function ie({theme:re}){return(0,x.h)("ol",{className:"-cbwsdk-wallet-steps"},(0,x.h)("li",{className:(0,k.default)("-cbwsdk-wallet-steps-item",re)},(0,x.h)("div",{className:"-cbwsdk-wallet-steps-item-wrapper"},"Open Coinbase Wallet app")),(0,x.h)("li",{className:(0,k.default)("-cbwsdk-wallet-steps-item",re)},(0,x.h)("div",{className:"-cbwsdk-wallet-steps-item-wrapper"},(0,x.h)("span",null,"Tap ",(0,x.h)("strong",null,"Scan")," "),(0,x.h)("span",{className:(0,k.default)("-cbwsdk-wallet-steps-pad-left","-cbwsdk-wallet-steps-icon",re)},(0,x.h)(w.QRCodeIcon,{fill:A(re)})))))}g.ConnectContent=function N(re){const{theme:Q}=re,Z=(0,R.createQrUrl)(re.sessionId,re.sessionSecret,re.linkAPIUrl,re.isParentConnection,re.version,re.chainId),ee=S_steps;return(0,x.h)("div",{"data-testid":"connect-content",className:(0,k.default)("-cbwsdk-connect-content",Q)},(0,x.h)("style",null,V.default),(0,x.h)("div",{className:"-cbwsdk-connect-content-header"},(0,x.h)("h2",{className:(0,k.default)("-cbwsdk-connect-content-heading",Q)},"Scan to connect with our mobile app"),re.onCancel&&(0,x.h)("button",{type:"button",className:"-cbwsdk-cancel-button",onClick:re.onCancel},(0,x.h)(C.CloseIcon,{fill:"light"===Q?"#0A0B0D":"#FFFFFF"}))),(0,x.h)("div",{className:"-cbwsdk-connect-content-layout"},(0,x.h)("div",{className:"-cbwsdk-connect-content-column-left"},(0,x.h)(Y,{title:"Coinbase Wallet app",description:"Connect with your self-custody wallet",theme:Q})),(0,x.h)("div",{className:"-cbwsdk-connect-content-column-right"},(0,x.h)("div",{className:"-cbwsdk-connect-content-qr-wrapper"},(0,x.h)(T.QRCode,{content:Z,width:200,height:200,fgColor:"#000",bgColor:"transparent"}),(0,x.h)("input",{type:"hidden",name:"cbw-cbwsdk-version",value:_.LIB_VERSION}),(0,x.h)("input",{type:"hidden",value:Z})),(0,x.h)(ee,{theme:Q}),!re.isConnected&&(0,x.h)("div",{"data-testid":"connecting-spinner",className:(0,k.default)("-cbwsdk-connect-content-qr-connecting",Q)},(0,x.h)(D.Spinner,{size:36,color:"dark"===Q?"#FFF":"#000"}),(0,x.h)("p",null,"Connecting...")))))},g.CoinbaseWalletSteps=ie},7077:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"},8767:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(g,"__esModule",{value:!0}),g.ConnectDialog=void 0;const k=v(I(6915)),x=I(4354),R=I(491),_=I(9959),C=I(6021),b=v(I(7077));g.ConnectDialog=T=>{const{isOpen:D,darkMode:V}=T,[S,A]=(0,R.useState)(!D),[N,Y]=(0,R.useState)(!D);(0,R.useEffect)(()=>{const re=[window.setTimeout(()=>{Y(!D)},10)];return D?A(!1):re.push(window.setTimeout(()=>{A(!0)},360)),()=>{re.forEach(window.clearTimeout)}},[D]);const ie=V?"dark":"light";return(0,x.h)("div",{class:(0,k.default)("-cbwsdk-connect-dialog-container",S&&"-cbwsdk-connect-dialog-container-hidden")},(0,x.h)("style",null,b.default),(0,x.h)("div",{class:(0,k.default)("-cbwsdk-connect-dialog-backdrop",ie,N&&"-cbwsdk-connect-dialog-backdrop-hidden")}),(0,x.h)("div",{class:"-cbwsdk-connect-dialog"},(0,x.h)("div",{class:(0,k.default)("-cbwsdk-connect-dialog-box",N&&"-cbwsdk-connect-dialog-box-hidden")},T.connectDisabled?null:(0,x.h)(_.ConnectContent,{theme:ie,version:T.version,sessionId:T.sessionId,sessionSecret:T.sessionSecret,linkAPIUrl:T.linkAPIUrl,isConnected:T.isConnected,isParentConnection:T.isParentConnection,chainId:T.chainId,onCancel:T.onCancel}),(0,x.h)(C.TryExtensionContent,{theme:ie}))))}},3953:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.LinkFlow=void 0;const v=I(4354),k=I(8767);g.LinkFlow=class x{constructor(_){this.connected=!1,this.chainId=1,this.isOpen=!1,this.onCancel=null,this.root=null,this.connectDisabled=!1,this.darkMode=_.darkMode,this.version=_.version,this.sessionId=_.sessionId,this.sessionSecret=_.sessionSecret,this.linkAPIUrl=_.linkAPIUrl,this.isParentConnection=_.isParentConnection}attach(_){this.root=document.createElement("div"),this.root.className="-cbwsdk-link-flow-root",_.appendChild(this.root),this.render()}setConnected(_){this.connected!==_&&(this.connected=_,this.render())}setChainId(_){this.chainId!==_&&(this.chainId=_,this.render())}detach(){var _;this.root&&((0,v.render)(null,this.root),null===(_=this.root.parentElement)||void 0===_||_.removeChild(this.root))}setConnectDisabled(_){this.connectDisabled=_}open(_){this.isOpen=!0,this.onCancel=_.onCancel,this.render()}close(){this.isOpen=!1,this.onCancel=null,this.render()}render(){this.root&&(0,v.render)((0,v.h)(k.ConnectDialog,{darkMode:this.darkMode,version:this.version,sessionId:this.sessionId,sessionSecret:this.sessionSecret,linkAPIUrl:this.linkAPIUrl,isOpen:this.isOpen,isConnected:this.connected,isParentConnection:this.isParentConnection,chainId:this.chainId,onCancel:this.onCancel,connectDisabled:this.connectDisabled}),this.root)}}},5499:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(g,"__esModule",{value:!0}),g.QRCode=void 0;const k=I(4354),x=I(491),R=v(I(8167));g.QRCode=C=>{const[b,w]=(0,x.useState)("");return(0,x.useEffect)(()=>{var T,D;const V=new R.default({content:C.content,background:C.bgColor||"#ffffff",color:C.fgColor||"#000000",container:"svg",ecl:"M",width:null!==(T=C.width)&&void 0!==T?T:256,height:null!==(D=C.height)&&void 0!==D?D:256,padding:0,image:C.image}),S=Buffer.from(V.svg(),"utf8").toString("base64");w(`data:image/svg+xml;base64,${S}`)},[C.bgColor,C.content,C.fgColor,C.height,C.image,C.width]),b?(0,k.h)("img",{src:b,alt:"QR Code"}):null}},9983:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"},8669:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(g,"__esModule",{value:!0}),g.RedirectDialog=void 0;const k=v(I(6915)),x=I(4354),R=I(8070),_=I(9963),C=v(I(9983));g.RedirectDialog=class b{constructor(){this.root=null}attach(){const D=document.documentElement;this.root=document.createElement("div"),this.root.className="-cbwsdk-css-reset",D.appendChild(this.root),(0,R.injectCssReset)()}present(D){this.render(D)}clear(){this.render(null)}render(D){this.root&&((0,x.render)(null,this.root),D&&(0,x.render)((0,x.h)(w,Object.assign({},D,{onDismiss:()=>{this.clear()}})),this.root))}};const w=({title:T,buttonText:D,darkMode:V,onButtonClick:S,onDismiss:A})=>{const N=V?"dark":"light";return(0,x.h)(_.SnackbarContainer,{darkMode:V},(0,x.h)("div",{class:"-cbwsdk-redirect-dialog"},(0,x.h)("style",null,C.default),(0,x.h)("div",{class:"-cbwsdk-redirect-dialog-backdrop",onClick:A}),(0,x.h)("div",{class:(0,k.default)("-cbwsdk-redirect-dialog-box",N)},(0,x.h)("p",null,T),(0,x.h)("button",{onClick:S},D))))}},1916:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"},1926:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(V){return V&&V.__esModule?V:{default:V}};Object.defineProperty(g,"__esModule",{value:!0}),g.SnackbarInstance=g.SnackbarContainer=g.Snackbar=void 0;const k=v(I(6915)),x=I(4354),R=I(491),_=v(I(1916));g.Snackbar=class w{constructor(S){this.items=new Map,this.nextItemKey=0,this.root=null,this.darkMode=S.darkMode}attach(S){this.root=document.createElement("div"),this.root.className="-cbwsdk-snackbar-root",S.appendChild(this.root),this.render()}presentItem(S){const A=this.nextItemKey++;return this.items.set(A,S),this.render(),()=>{this.items.delete(A),this.render()}}clear(){this.items.clear(),this.render()}render(){this.root&&(0,x.render)((0,x.h)("div",null,(0,x.h)(g.SnackbarContainer,{darkMode:this.darkMode},Array.from(this.items.entries()).map(([S,A])=>(0,x.h)(g.SnackbarInstance,Object.assign({},A,{key:S}))))),this.root)}},g.SnackbarContainer=V=>(0,x.h)("div",{class:(0,k.default)("-cbwsdk-snackbar-container")},(0,x.h)("style",null,_.default),(0,x.h)("div",{class:"-cbwsdk-snackbar"},V.children)),g.SnackbarInstance=({autoExpand:V,message:S,menuItems:A})=>{const[N,Y]=(0,R.useState)(!0),[ie,re]=(0,R.useState)(V??!1);return(0,R.useEffect)(()=>{const Z=[window.setTimeout(()=>{Y(!1)},1),window.setTimeout(()=>{re(!0)},1e4)];return()=>{Z.forEach(window.clearTimeout)}}),(0,x.h)("div",{class:(0,k.default)("-cbwsdk-snackbar-instance",N&&"-cbwsdk-snackbar-instance-hidden",ie&&"-cbwsdk-snackbar-instance-expanded")},(0,x.h)("div",{class:"-cbwsdk-snackbar-instance-header",onClick:()=>{re(!ie)}},(0,x.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",class:"-cbwsdk-snackbar-instance-header-cblogo"})," ",(0,x.h)("div",{class:"-cbwsdk-snackbar-instance-header-message"},S),(0,x.h)("div",{class:"-gear-container"},!ie&&(0,x.h)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,x.h)("circle",{cx:"12",cy:"12",r:"12",fill:"#F5F7F8"})),(0,x.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",class:"-gear-icon",title:"Expand"}))),A&&A.length>0&&(0,x.h)("div",{class:"-cbwsdk-snackbar-instance-menu"},A.map((Z,ee)=>(0,x.h)("div",{class:(0,k.default)("-cbwsdk-snackbar-instance-menu-item",Z.isRed&&"-cbwsdk-snackbar-instance-menu-item-is-red"),onClick:Z.onClick,key:ee},(0,x.h)("svg",{width:Z.svgWidth,height:Z.svgHeight,viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,x.h)("path",{"fill-rule":Z.defaultFillRule,"clip-rule":Z.defaultClipRule,d:Z.path,fill:"#AAAAAA"})),(0,x.h)("span",{class:(0,k.default)("-cbwsdk-snackbar-instance-menu-item-info",Z.isRed&&"-cbwsdk-snackbar-instance-menu-item-info-is-red")},Z.info)))))}},9963:function(Ve,g,I){"use strict";var v=this&&this.__createBinding||(Object.create?function(x,R,_,C){void 0===C&&(C=_);var b=Object.getOwnPropertyDescriptor(R,_);(!b||("get"in b?!R.__esModule:b.writable||b.configurable))&&(b={enumerable:!0,get:function(){return R[_]}}),Object.defineProperty(x,C,b)}:function(x,R,_,C){void 0===C&&(C=_),x[C]=R[_]}),k=this&&this.__exportStar||function(x,R){for(var _ in x)"default"!==_&&!Object.prototype.hasOwnProperty.call(R,_)&&v(R,x,_)};Object.defineProperty(g,"__esModule",{value:!0}),k(I(1926),g)},9436:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"},2531:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(g,"__esModule",{value:!0}),g.Spinner=void 0;const k=I(4354),x=v(I(9436));g.Spinner=_=>{var C;const b=null!==(C=_.size)&&void 0!==C?C:64,w=_.color||"#000";return(0,k.h)("div",{class:"-cbwsdk-spinner"},(0,k.h)("style",null,x.default),(0,k.h)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{width:b,height:b}},(0,k.h)("circle",{style:{cx:50,cy:50,r:45,stroke:w}})))}},3325:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.default=".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"},6021:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(D){return D&&D.__esModule?D:{default:D}};Object.defineProperty(g,"__esModule",{value:!0}),g.TryExtensionContent=void 0;const k=v(I(6915)),x=I(4354),R=I(491),_=I(1654),C=I(4453),b=I(1115),w=v(I(3325));g.TryExtensionContent=function T({theme:D}){const[V,S]=(0,R.useState)(!1),A=(0,R.useCallback)(()=>{window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome","_blank")},[]),N=(0,R.useCallback)(()=>{V?window.location.reload():(A(),S(!0))},[A,V]);return(0,x.h)("div",{class:(0,k.default)("-cbwsdk-try-extension",D)},(0,x.h)("style",null,w.default),(0,x.h)("div",{class:"-cbwsdk-try-extension-column-half"},(0,x.h)("h3",{class:(0,k.default)("-cbwsdk-try-extension-heading",D)},"Or try the Coinbase Wallet browser extension"),(0,x.h)("div",{class:"-cbwsdk-try-extension-cta-wrapper"},(0,x.h)("button",{class:(0,k.default)("-cbwsdk-try-extension-cta",D),onClick:N},V?"Refresh":"Install"),(0,x.h)("div",null,!V&&(0,x.h)(_.ArrowLeftIcon,{class:"-cbwsdk-try-extension-cta-icon",fill:"light"===D?"#0052FF":"#588AF5"})))),(0,x.h)("div",{class:"-cbwsdk-try-extension-column-half"},(0,x.h)("ul",{class:"-cbwsdk-try-extension-list"},(0,x.h)("li",{class:"-cbwsdk-try-extension-list-item"},(0,x.h)("div",{class:"-cbwsdk-try-extension-list-item-icon-wrapper"},(0,x.h)("span",{class:(0,k.default)("-cbwsdk-try-extension-list-item-icon",D)},(0,x.h)(C.LaptopIcon,{fill:"light"===D?"#0A0B0D":"#FFFFFF"}))),(0,x.h)("div",{class:(0,k.default)("-cbwsdk-try-extension-list-item-copy",D)},"Connect with dapps with just one click on your desktop browser")),(0,x.h)("li",{class:"-cbwsdk-try-extension-list-item"},(0,x.h)("div",{class:"-cbwsdk-try-extension-list-item-icon-wrapper"},(0,x.h)("span",{class:(0,k.default)("-cbwsdk-try-extension-list-item-icon",D)},(0,x.h)(b.SafeIcon,{fill:"light"===D?"#0A0B0D":"#FFFFFF"}))),(0,x.h)("div",{class:(0,k.default)("-cbwsdk-try-extension-list-item-copy",D)},"Add an additional layer of security by using a supported Ledger hardware wallet")))))}},1654:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.ArrowLeftIcon=void 0;const v=I(4354);g.ArrowLeftIcon=function k(x){return(0,v.h)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},x),(0,v.h)("path",{d:"M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"}))}},1757:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.CloseIcon=void 0;const v=I(4354);g.CloseIcon=function k(x){return(0,v.h)("svg",Object.assign({width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x),(0,v.h)("path",{d:"M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"}))}},7072:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.CoinbaseWalletRound=void 0;const v=I(4354);g.CoinbaseWalletRound=function k(x){return(0,v.h)("svg",Object.assign({width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x),(0,v.h)("circle",{cx:"14",cy:"14",r:"14",fill:"#0052FF"}),(0,v.h)("path",{d:"M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",fill:"white"}),(0,v.h)("path",{d:"M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",fill:"#0052FF"}))}},4453:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.LaptopIcon=void 0;const v=I(4354);g.LaptopIcon=function k(x){return(0,v.h)("svg",Object.assign({width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},x),(0,v.h)("path",{d:"M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"}),(0,v.h)("path",{d:"M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"}))}},7341:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.QRCodeIcon=void 0;const v=I(4354);g.QRCodeIcon=function k(x){return(0,v.h)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},x),(0,v.h)("path",{d:"M3 3V8.99939L5 8.99996V5H9V3H3Z"}),(0,v.h)("path",{d:"M15 21L21 21V15.0006L19 15V19L15 19V21Z"}),(0,v.h)("path",{d:"M21 9H19V5H15.0006L15 3H21V9Z"}),(0,v.h)("path",{d:"M3 15V21H8.99939L8.99996 19H5L5 15H3Z"}))}},1115:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.SafeIcon=void 0;const v=I(4354);g.SafeIcon=function k(x){return(0,v.h)("svg",Object.assign({width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},x),(0,v.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"}))}},7252:(Ve,g,I)=>{const v=I(2814),k=I(2662);function x(N){return N.startsWith("int[")?"int256"+N.slice(3):"int"===N?"int256":N.startsWith("uint[")?"uint256"+N.slice(4):"uint"===N?"uint256":N.startsWith("fixed[")?"fixed128x128"+N.slice(5):"fixed"===N?"fixed128x128":N.startsWith("ufixed[")?"ufixed128x128"+N.slice(6):"ufixed"===N?"ufixed128x128":N}function R(N){return parseInt(/^\D+(\d+)$/.exec(N)[1],10)}function _(N){var Y=/^\D+(\d+)x(\d+)$/.exec(N);return[parseInt(Y[1],10),parseInt(Y[2],10)]}function C(N){var Y=N.match(/(.*)\[(.*?)\]$/);return Y?""===Y[2]?"dynamic":parseInt(Y[2],10):null}function b(N){var Y=typeof N;if("string"===Y)return v.isHexString(N)?new k(v.stripHexPrefix(N),16):new k(N,10);if("number"===Y)return new k(N);if(N.toArray)return N;throw new Error("Argument is not a number")}function w(N,Y){var ie,re,Q,Z;if("address"===N)return w("uint160",b(Y));if("bool"===N)return w("uint8",Y?1:0);if("string"===N)return w("bytes",new Buffer(Y,"utf8"));if(function D(N){return N.lastIndexOf("]")===N.length-1}(N)){if(typeof Y.length>"u")throw new Error("Not an array?");if("dynamic"!==(ie=C(N))&&0!==ie&&Y.length>ie)throw new Error("Elements exceed array size: "+ie);for(Z in Q=[],N=N.slice(0,N.lastIndexOf("[")),"string"==typeof Y&&(Y=JSON.parse(Y)),Y)Q.push(w(N,Y[Z]));if("dynamic"===ie){var ee=w("uint256",Y.length);Q.unshift(ee)}return Buffer.concat(Q)}if("bytes"===N)return Y=new Buffer(Y),Q=Buffer.concat([w("uint256",Y.length),Y]),Y.length%32!=0&&(Q=Buffer.concat([Q,v.zeros(32-Y.length%32)])),Q;if(N.startsWith("bytes")){if((ie=R(N))<1||ie>32)throw new Error("Invalid bytes<N> width: "+ie);return v.setLengthRight(Y,32)}if(N.startsWith("uint")){if((ie=R(N))%8||ie<8||ie>256)throw new Error("Invalid uint<N> width: "+ie);if((re=b(Y)).bitLength()>ie)throw new Error("Supplied uint exceeds width: "+ie+" vs "+re.bitLength());if(re<0)throw new Error("Supplied uint is negative");return re.toArrayLike(Buffer,"be",32)}if(N.startsWith("int")){if((ie=R(N))%8||ie<8||ie>256)throw new Error("Invalid int<N> width: "+ie);if((re=b(Y)).bitLength()>ie)throw new Error("Supplied int exceeds width: "+ie+" vs "+re.bitLength());return re.toTwos(256).toArrayLike(Buffer,"be",32)}if(N.startsWith("ufixed")){if(ie=_(N),(re=b(Y))<0)throw new Error("Supplied ufixed is negative");return w("uint256",re.mul(new k(2).pow(new k(ie[1]))))}if(N.startsWith("fixed"))return ie=_(N),w("int256",b(Y).mul(new k(2).pow(new k(ie[1]))));throw new Error("Unsupported or invalid type: "+N)}function T(N){return"string"===N||"bytes"===N||"dynamic"===C(N)}function S(N,Y){if(N.length!==Y.length)throw new Error("Number of types are not matching the values");for(var ie,re,Q=[],Z=0;Z<N.length;Z++){var ee=x(N[Z]),J=Y[Z];if("bytes"===ee)Q.push(J);else if("string"===ee)Q.push(new Buffer(J,"utf8"));else if("bool"===ee)Q.push(new Buffer(J?"01":"00","hex"));else if("address"===ee)Q.push(v.setLength(J,20));else if(ee.startsWith("bytes")){if((ie=R(ee))<1||ie>32)throw new Error("Invalid bytes<N> width: "+ie);Q.push(v.setLengthRight(J,ie))}else if(ee.startsWith("uint")){if((ie=R(ee))%8||ie<8||ie>256)throw new Error("Invalid uint<N> width: "+ie);if((re=b(J)).bitLength()>ie)throw new Error("Supplied uint exceeds width: "+ie+" vs "+re.bitLength());Q.push(re.toArrayLike(Buffer,"be",ie/8))}else{if(!ee.startsWith("int"))throw new Error("Unsupported or invalid type: "+ee);if((ie=R(ee))%8||ie<8||ie>256)throw new Error("Invalid int<N> width: "+ie);if((re=b(J)).bitLength()>ie)throw new Error("Supplied int exceeds width: "+ie+" vs "+re.bitLength());Q.push(re.toTwos(ie).toArrayLike(Buffer,"be",ie/8))}}return Buffer.concat(Q)}Ve.exports={rawEncode:function V(N,Y){var ie=[],re=[],Q=32*N.length;for(var Z in N){var ee=x(N[Z]),we=w(ee,Y[Z]);T(ee)?(ie.push(w("uint256",Q)),re.push(we),Q+=we.length):ie.push(we)}return Buffer.concat(ie.concat(re))},solidityPack:S,soliditySHA3:function A(N,Y){return v.keccak(S(N,Y))}}},3348:(Ve,g,I)=>{const v=I(2814),k=I(7252),x={type:"object",properties:{types:{type:"object",additionalProperties:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"}},required:["name","type"]}}},primaryType:{type:"string"},domain:{type:"object"},message:{type:"object"}},required:["types","primaryType","domain","message"]},R={encodeData(C,b,w,T=!0){const D=["bytes32"],V=[this.hashType(C,w)];if(T){const S=(A,N,Y)=>{if(void 0!==w[N])return["bytes32",null==Y?"0x0000000000000000000000000000000000000000000000000000000000000000":v.keccak(this.encodeData(N,Y,w,T))];if(void 0===Y)throw new Error(`missing value for field ${A} of type ${N}`);if("bytes"===N)return["bytes32",v.keccak(Y)];if("string"===N)return"string"==typeof Y&&(Y=Buffer.from(Y,"utf8")),["bytes32",v.keccak(Y)];if(N.lastIndexOf("]")===N.length-1){const ie=N.slice(0,N.lastIndexOf("[")),re=Y.map(Q=>S(A,ie,Q));return["bytes32",v.keccak(k.rawEncode(re.map(([Q])=>Q),re.map(([,Q])=>Q)))]}return[N,Y]};for(const A of w[C]){const[N,Y]=S(A.name,A.type,b[A.name]);D.push(N),V.push(Y)}}else for(const S of w[C]){let A=b[S.name];if(void 0!==A)if("bytes"===S.type)D.push("bytes32"),A=v.keccak(A),V.push(A);else if("string"===S.type)D.push("bytes32"),"string"==typeof A&&(A=Buffer.from(A,"utf8")),A=v.keccak(A),V.push(A);else if(void 0!==w[S.type])D.push("bytes32"),A=v.keccak(this.encodeData(S.type,A,w,T)),V.push(A);else{if(S.type.lastIndexOf("]")===S.type.length-1)throw new Error("Arrays currently unimplemented in encodeData");D.push(S.type),V.push(A)}}return k.rawEncode(D,V)},encodeType(C,b){let w="",T=this.findTypeDependencies(C,b).filter(D=>D!==C);T=[C].concat(T.sort());for(const D of T){if(!b[D])throw new Error("No type definition specified: "+D);w+=D+"("+b[D].map(({name:S,type:A})=>A+" "+S).join(",")+")"}return w},findTypeDependencies(C,b,w=[]){if(C=C.match(/^\w*/)[0],w.includes(C)||void 0===b[C])return w;w.push(C);for(const T of b[C])for(const D of this.findTypeDependencies(T.type,b,w))!w.includes(D)&&w.push(D);return w},hashStruct(C,b,w,T=!0){return v.keccak(this.encodeData(C,b,w,T))},hashType(C,b){return v.keccak(this.encodeType(C,b))},sanitizeData(C){const b={};for(const w in x.properties)C[w]&&(b[w]=C[w]);return b.types&&(b.types=Object.assign({EIP712Domain:[]},b.types)),b},hash(C,b=!0){const w=this.sanitizeData(C),T=[Buffer.from("1901","hex")];return T.push(this.hashStruct("EIP712Domain",w.domain,w.types,b)),"EIP712Domain"!==w.primaryType&&T.push(this.hashStruct(w.primaryType,w.message,w.types,b)),v.keccak(Buffer.concat(T))}};Ve.exports={TYPED_MESSAGE_SCHEMA:x,TypedDataUtils:R,hashForSignTypedDataLegacy:function(C){return function _(C){const b=new Error("Expect argument to be non-empty array");if("object"!=typeof C||!C.length)throw b;const w=C.map(function(V){return"bytes"===V.type?v.toBuffer(V.value):V.value}),T=C.map(function(V){return V.type}),D=C.map(function(V){if(!V.name)throw b;return V.type+" "+V.name});return k.soliditySHA3(["bytes32","bytes32"],[k.soliditySHA3(new Array(C.length).fill("string"),D),k.soliditySHA3(T,w)])}(C.data)},hashForSignTypedData_v3:function(C){return R.hash(C.data,!1)},hashForSignTypedData_v4:function(C){return R.hash(C.data)}}},2814:(Ve,g,I)=>{const v=I(568),k=I(2662);function x(S){return Buffer.allocUnsafe(S).fill(0)}function R(S,A,N){const Y=x(A);return S=C(S),N?S.length<A?(S.copy(Y),Y):S.slice(0,A):S.length<A?(S.copy(Y,A-S.length),Y):S.slice(-A)}function C(S){if(!Buffer.isBuffer(S))if(Array.isArray(S))S=Buffer.from(S);else if("string"==typeof S)S=D(S)?Buffer.from(function T(S){return S.length%2?"0"+S:S}(V(S)),"hex"):Buffer.from(S);else if("number"==typeof S)S=intToBuffer(S);else if(null==S)S=Buffer.allocUnsafe(0);else if(k.isBN(S))S=S.toArrayLike(Buffer);else{if(!S.toArray)throw new Error("invalid type");S=Buffer.from(S.toArray())}return S}function D(S){return"string"==typeof S&&S.match(/^0x[0-9A-Fa-f]*$/)}function V(S){return"string"==typeof S&&S.startsWith("0x")?S.slice(2):S}Ve.exports={zeros:x,setLength:R,setLengthRight:function _(S,A){return R(S,A,!0)},isHexString:D,stripHexPrefix:V,toBuffer:C,bufferToHex:function b(S){return"0x"+(S=C(S)).toString("hex")},keccak:function w(S,A){return S=C(S),A||(A=256),v("keccak"+A).update(S).digest()}}},8167:Ve=>{function g(S){this.mode=v.MODE_8BIT_BYTE,this.data=S,this.parsedData=[];for(var A=0,N=this.data.length;A<N;A++){var Y=[],ie=this.data.charCodeAt(A);ie>65536?(Y[0]=240|(1835008&ie)>>>18,Y[1]=128|(258048&ie)>>>12,Y[2]=128|(4032&ie)>>>6,Y[3]=128|63&ie):ie>2048?(Y[0]=224|(61440&ie)>>>12,Y[1]=128|(4032&ie)>>>6,Y[2]=128|63&ie):ie>128?(Y[0]=192|(1984&ie)>>>6,Y[1]=128|63&ie):Y[0]=ie,this.parsedData.push(Y)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function I(S,A){this.typeNumber=S,this.errorCorrectLevel=A,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}g.prototype={getLength:function(S){return this.parsedData.length},write:function(S){for(var A=0,N=this.parsedData.length;A<N;A++)S.put(this.parsedData[A],8)}},I.prototype={addData:function(S){var A=new g(S);this.dataList.push(A),this.dataCache=null},isDark:function(S,A){if(S<0||this.moduleCount<=S||A<0||this.moduleCount<=A)throw new Error(S+","+A);return this.modules[S][A]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(S,A){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var N=0;N<this.moduleCount;N++){this.modules[N]=new Array(this.moduleCount);for(var Y=0;Y<this.moduleCount;Y++)this.modules[N][Y]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(S,A),this.typeNumber>=7&&this.setupTypeNumber(S),null==this.dataCache&&(this.dataCache=I.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,A)},setupPositionProbePattern:function(S,A){for(var N=-1;N<=7;N++)if(!(S+N<=-1||this.moduleCount<=S+N))for(var Y=-1;Y<=7;Y++)A+Y<=-1||this.moduleCount<=A+Y||(this.modules[S+N][A+Y]=0<=N&&N<=6&&(0==Y||6==Y)||0<=Y&&Y<=6&&(0==N||6==N)||2<=N&&N<=4&&2<=Y&&Y<=4)},getBestMaskPattern:function(){for(var S=0,A=0,N=0;N<8;N++){this.makeImpl(!0,N);var Y=R.getLostPoint(this);(0==N||S>Y)&&(S=Y,A=N)}return A},createMovieClip:function(S,A,N){var Y=S.createEmptyMovieClip(A,N);this.make();for(var re=0;re<this.modules.length;re++)for(var Q=1*re,Z=0;Z<this.modules[re].length;Z++){var ee=1*Z;this.modules[re][Z]&&(Y.beginFill(0,100),Y.moveTo(ee,Q),Y.lineTo(ee+1,Q),Y.lineTo(ee+1,Q+1),Y.lineTo(ee,Q+1),Y.endFill())}return Y},setupTimingPattern:function(){for(var S=8;S<this.moduleCount-8;S++)null==this.modules[S][6]&&(this.modules[S][6]=S%2==0);for(var A=8;A<this.moduleCount-8;A++)null==this.modules[6][A]&&(this.modules[6][A]=A%2==0)},setupPositionAdjustPattern:function(){for(var S=R.getPatternPosition(this.typeNumber),A=0;A<S.length;A++)for(var N=0;N<S.length;N++){var Y=S[A],ie=S[N];if(null==this.modules[Y][ie])for(var re=-2;re<=2;re++)for(var Q=-2;Q<=2;Q++)this.modules[Y+re][ie+Q]=-2==re||2==re||-2==Q||2==Q||0==re&&0==Q}},setupTypeNumber:function(S){for(var A=R.getBCHTypeNumber(this.typeNumber),N=0;N<18;N++){var Y=!S&&1==(A>>N&1);this.modules[Math.floor(N/3)][N%3+this.moduleCount-8-3]=Y}for(N=0;N<18;N++)Y=!S&&1==(A>>N&1),this.modules[N%3+this.moduleCount-8-3][Math.floor(N/3)]=Y},setupTypeInfo:function(S,A){for(var Y=R.getBCHTypeInfo(this.errorCorrectLevel<<3|A),ie=0;ie<15;ie++){var re=!S&&1==(Y>>ie&1);ie<6?this.modules[ie][8]=re:ie<8?this.modules[ie+1][8]=re:this.modules[this.moduleCount-15+ie][8]=re}for(ie=0;ie<15;ie++)re=!S&&1==(Y>>ie&1),ie<8?this.modules[8][this.moduleCount-ie-1]=re:ie<9?this.modules[8][15-ie-1+1]=re:this.modules[8][15-ie-1]=re;this.modules[this.moduleCount-8][8]=!S},mapData:function(S,A){for(var N=-1,Y=this.moduleCount-1,ie=7,re=0,Q=this.moduleCount-1;Q>0;Q-=2)for(6==Q&&Q--;;){for(var Z=0;Z<2;Z++)if(null==this.modules[Y][Q-Z]){var ee=!1;re<S.length&&(ee=1==(S[re]>>>ie&1)),R.getMask(A,Y,Q-Z)&&(ee=!ee),this.modules[Y][Q-Z]=ee,-1==--ie&&(re++,ie=7)}if((Y+=N)<0||this.moduleCount<=Y){Y-=N,N=-N;break}}}},I.PAD0=236,I.PAD1=17,I.createData=function(S,A,N){for(var Y=w.getRSBlocks(S,A),ie=new T,re=0;re<N.length;re++){var Q=N[re];ie.put(Q.mode,4),ie.put(Q.getLength(),R.getLengthInBits(Q.mode,S)),Q.write(ie)}var Z=0;for(re=0;re<Y.length;re++)Z+=Y[re].dataCount;if(ie.getLengthInBits()>8*Z)throw new Error("code length overflow. ("+ie.getLengthInBits()+">"+8*Z+")");for(ie.getLengthInBits()+4<=8*Z&&ie.put(0,4);ie.getLengthInBits()%8!=0;)ie.putBit(!1);for(;!(ie.getLengthInBits()>=8*Z||(ie.put(I.PAD0,8),ie.getLengthInBits()>=8*Z));)ie.put(I.PAD1,8);return I.createBytes(ie,Y)},I.createBytes=function(S,A){for(var N=0,Y=0,ie=0,re=new Array(A.length),Q=new Array(A.length),Z=0;Z<A.length;Z++){var ee=A[Z].dataCount,J=A[Z].totalCount-ee;Y=Math.max(Y,ee),ie=Math.max(ie,J),re[Z]=new Array(ee);for(var we=0;we<re[Z].length;we++)re[Z][we]=255&S.buffer[we+N];N+=ee;var _e=R.getErrorCorrectPolynomial(J),q=new b(re[Z],_e.getLength()-1).mod(_e);for(Q[Z]=new Array(_e.getLength()-1),we=0;we<Q[Z].length;we++){var be=we+q.getLength()-Q[Z].length;Q[Z][we]=be>=0?q.get(be):0}}var ae=0;for(we=0;we<A.length;we++)ae+=A[we].totalCount;var ue=new Array(ae),le=0;for(we=0;we<Y;we++)for(Z=0;Z<A.length;Z++)we<re[Z].length&&(ue[le++]=re[Z][we]);for(we=0;we<ie;we++)for(Z=0;Z<A.length;Z++)we<Q[Z].length&&(ue[le++]=Q[Z][we]);return ue};for(var v={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},k={L:1,M:0,Q:3,H:2},x={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},R={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(S){for(var A=S<<10;R.getBCHDigit(A)-R.getBCHDigit(R.G15)>=0;)A^=R.G15<<R.getBCHDigit(A)-R.getBCHDigit(R.G15);return(S<<10|A)^R.G15_MASK},getBCHTypeNumber:function(S){for(var A=S<<12;R.getBCHDigit(A)-R.getBCHDigit(R.G18)>=0;)A^=R.G18<<R.getBCHDigit(A)-R.getBCHDigit(R.G18);return S<<12|A},getBCHDigit:function(S){for(var A=0;0!=S;)A++,S>>>=1;return A},getPatternPosition:function(S){return R.PATTERN_POSITION_TABLE[S-1]},getMask:function(S,A,N){switch(S){case x.PATTERN000:return(A+N)%2==0;case x.PATTERN001:return A%2==0;case x.PATTERN010:return N%3==0;case x.PATTERN011:return(A+N)%3==0;case x.PATTERN100:return(Math.floor(A/2)+Math.floor(N/3))%2==0;case x.PATTERN101:return A*N%2+A*N%3==0;case x.PATTERN110:return(A*N%2+A*N%3)%2==0;case x.PATTERN111:return(A*N%3+(A+N)%2)%2==0;default:throw new Error("bad maskPattern:"+S)}},getErrorCorrectPolynomial:function(S){for(var A=new b([1],0),N=0;N<S;N++)A=A.multiply(new b([1,_.gexp(N)],0));return A},getLengthInBits:function(S,A){if(1<=A&&A<10)switch(S){case v.MODE_NUMBER:return 10;case v.MODE_ALPHA_NUM:return 9;case v.MODE_8BIT_BYTE:case v.MODE_KANJI:return 8;default:throw new Error("mode:"+S)}else if(A<27)switch(S){case v.MODE_NUMBER:return 12;case v.MODE_ALPHA_NUM:return 11;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 10;default:throw new Error("mode:"+S)}else{if(!(A<41))throw new Error("type:"+A);switch(S){case v.MODE_NUMBER:return 14;case v.MODE_ALPHA_NUM:return 13;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 12;default:throw new Error("mode:"+S)}}},getLostPoint:function(S){for(var A=S.getModuleCount(),N=0,Y=0;Y<A;Y++)for(var ie=0;ie<A;ie++){for(var re=0,Q=S.isDark(Y,ie),Z=-1;Z<=1;Z++)if(!(Y+Z<0||A<=Y+Z))for(var ee=-1;ee<=1;ee++)ie+ee<0||A<=ie+ee||0==Z&&0==ee||Q==S.isDark(Y+Z,ie+ee)&&re++;re>5&&(N+=3+re-5)}for(Y=0;Y<A-1;Y++)for(ie=0;ie<A-1;ie++){var J=0;S.isDark(Y,ie)&&J++,S.isDark(Y+1,ie)&&J++,S.isDark(Y,ie+1)&&J++,S.isDark(Y+1,ie+1)&&J++,(0==J||4==J)&&(N+=3)}for(Y=0;Y<A;Y++)for(ie=0;ie<A-6;ie++)S.isDark(Y,ie)&&!S.isDark(Y,ie+1)&&S.isDark(Y,ie+2)&&S.isDark(Y,ie+3)&&S.isDark(Y,ie+4)&&!S.isDark(Y,ie+5)&&S.isDark(Y,ie+6)&&(N+=40);for(ie=0;ie<A;ie++)for(Y=0;Y<A-6;Y++)S.isDark(Y,ie)&&!S.isDark(Y+1,ie)&&S.isDark(Y+2,ie)&&S.isDark(Y+3,ie)&&S.isDark(Y+4,ie)&&!S.isDark(Y+5,ie)&&S.isDark(Y+6,ie)&&(N+=40);var we=0;for(ie=0;ie<A;ie++)for(Y=0;Y<A;Y++)S.isDark(Y,ie)&&we++;return N+Math.abs(100*we/A/A-50)/5*10}},_={glog:function(S){if(S<1)throw new Error("glog("+S+")");return _.LOG_TABLE[S]},gexp:function(S){for(;S<0;)S+=255;for(;S>=256;)S-=255;return _.EXP_TABLE[S]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},C=0;C<8;C++)_.EXP_TABLE[C]=1<<C;for(C=8;C<256;C++)_.EXP_TABLE[C]=_.EXP_TABLE[C-4]^_.EXP_TABLE[C-5]^_.EXP_TABLE[C-6]^_.EXP_TABLE[C-8];for(C=0;C<255;C++)_.LOG_TABLE[_.EXP_TABLE[C]]=C;function b(S,A){if(null==S.length)throw new Error(S.length+"/"+A);for(var N=0;N<S.length&&0==S[N];)N++;this.num=new Array(S.length-N+A);for(var Y=0;Y<S.length-N;Y++)this.num[Y]=S[Y+N]}function w(S,A){this.totalCount=S,this.dataCount=A}function T(){this.buffer=[],this.length=0}b.prototype={get:function(S){return this.num[S]},getLength:function(){return this.num.length},multiply:function(S){for(var A=new Array(this.getLength()+S.getLength()-1),N=0;N<this.getLength();N++)for(var Y=0;Y<S.getLength();Y++)A[N+Y]^=_.gexp(_.glog(this.get(N))+_.glog(S.get(Y)));return new b(A,0)},mod:function(S){if(this.getLength()-S.getLength()<0)return this;for(var A=_.glog(this.get(0))-_.glog(S.get(0)),N=new Array(this.getLength()),Y=0;Y<this.getLength();Y++)N[Y]=this.get(Y);for(Y=0;Y<S.getLength();Y++)N[Y]^=_.gexp(_.glog(S.get(Y))+A);return new b(N,0).mod(S)}},w.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],w.getRSBlocks=function(S,A){var N=w.getRsBlockTable(S,A);if(null==N)throw new Error("bad rs block @ typeNumber:"+S+"/errorCorrectLevel:"+A);for(var Y=N.length/3,ie=[],re=0;re<Y;re++)for(var Q=N[3*re+0],Z=N[3*re+1],ee=N[3*re+2],J=0;J<Q;J++)ie.push(new w(Z,ee));return ie},w.getRsBlockTable=function(S,A){switch(A){case k.L:return w.RS_BLOCK_TABLE[4*(S-1)+0];case k.M:return w.RS_BLOCK_TABLE[4*(S-1)+1];case k.Q:return w.RS_BLOCK_TABLE[4*(S-1)+2];case k.H:return w.RS_BLOCK_TABLE[4*(S-1)+3];default:return}},T.prototype={get:function(S){var A=Math.floor(S/8);return 1==(this.buffer[A]>>>7-S%8&1)},put:function(S,A){for(var N=0;N<A;N++)this.putBit(1==(S>>>A-N-1&1))},getLengthInBits:function(){return this.length},putBit:function(S){var A=Math.floor(this.length/8);this.buffer.length<=A&&this.buffer.push(0),S&&(this.buffer[A]|=128>>>this.length%8),this.length++}};var D=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function V(S){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M",image:{svg:"",width:0,height:0}},"string"==typeof S&&(S={content:S}),S)for(var N in S)this.options[N]=S[N];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var Q=this.options.content,Z=function ie(J,we){for(var _e=function re(J){var we=encodeURI(J).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return we.length+(we.length!=J?3:0)}(J),B=1,q=0,be=0,ae=D.length;be<=ae;be++){var ue=D[be];if(!ue)throw new Error("Content too long: expected "+q+" but got "+_e);switch(we){case"L":q=ue[0];break;case"M":q=ue[1];break;case"Q":q=ue[2];break;case"H":q=ue[3];break;default:throw new Error("Unknwon error correction level: "+we)}if(_e<=q)break;B++}if(B>D.length)throw new Error("Content too long");return B}(Q,this.options.ecl),ee=function Y(J){switch(J){case"L":return k.L;case"M":return k.M;case"Q":return k.Q;case"H":return k.H;default:throw new Error("Unknwon error correction level: "+J)}}(this.options.ecl);this.qrcode=new I(Z,ee),this.qrcode.addData(Q),this.qrcode.make()}V.prototype.svg=function(S){var A=this.options||{},N=this.qrcode.modules;typeof S>"u"&&(S={container:A.container||"svg"});for(var Y=!(typeof A.pretty<"u"&&!A.pretty),ie=Y?"  ":"",re=Y?"\r\n":"",Q=A.width,Z=A.height,ee=N.length,J=Q/(ee+2*A.padding),we=Z/(ee+2*A.padding),_e=typeof A.join<"u"&&!!A.join,B=typeof A.swap<"u"&&!!A.swap,q=!(typeof A.xmlDeclaration<"u"&&!A.xmlDeclaration),be=typeof A.predefined<"u"&&!!A.predefined,ae=be?ie+'<defs><path id="qrmodule" d="M0 0 h'+we+" v"+J+' H0 z" style="fill:'+A.color+';shape-rendering:crispEdges;" /></defs>'+re:"",ue=ie+'<rect x="0" y="0" width="'+Q+'" height="'+Z+'" style="fill:'+A.background+';shape-rendering:crispEdges;"/>'+re,le="",M="",E=0;E<ee;E++)for(var F=0;F<ee;F++)if(N[F][E]){var G=F*J+A.padding*J,ve=E*we+A.padding*we;if(B){var ce=G;G=ve,ve=ce}if(_e){var fe=J+G,ge=we+ve;G=Number.isInteger(G)?Number(G):G.toFixed(2),ve=Number.isInteger(ve)?Number(ve):ve.toFixed(2),fe=Number.isInteger(fe)?Number(fe):fe.toFixed(2),M+="M"+G+","+ve+" V"+(ge=Number.isInteger(ge)?Number(ge):ge.toFixed(2))+" H"+fe+" V"+ve+" H"+G+" Z "}else le+=be?ie+'<use x="'+G.toString()+'" y="'+ve.toString()+'" href="#qrmodule" />'+re:ie+'<rect x="'+G.toString()+'" y="'+ve.toString()+'" width="'+J+'" height="'+we+'" style="fill:'+A.color+';shape-rendering:crispEdges;"/>'+re}_e&&(le=ie+'<path x="0" y="0" style="fill:'+A.color+';shape-rendering:crispEdges;" d="'+M+'" />');let j="";if(void 0!==this.options.image&&this.options.image.svg){const Xe=Q*this.options.image.width/100,et=Z*this.options.image.height/100;j+=`<svg x="${Q/2-Xe/2}" y="${Z/2-et/2}" width="${Xe}" height="${et}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`,j+=this.options.image.svg+re,j+="</svg>"}var Te="";switch(S.container){case"svg":q&&(Te+='<?xml version="1.0" standalone="yes"?>'+re),Te+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+Q+'" height="'+Z+'">'+re,Te+=ae+ue+le,Te+=j,Te+="</svg>";break;case"svg-viewbox":q&&(Te+='<?xml version="1.0" standalone="yes"?>'+re),Te+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+Q+" "+Z+'">'+re,Te+=ae+ue+le,Te+=j,Te+="</svg>";break;case"g":Te+='<g width="'+Q+'" height="'+Z+'">'+re,Te+=ae+ue+le,Te+=j,Te+="</g>";break;default:Te+=(ae+ue+le+j).replace(/^\s+/,"")}return Te},Ve.exports=V},7938:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.LIB_VERSION=void 0,g.LIB_VERSION="3.9.1"},9424:Ve=>{"use strict";var g=Object.prototype.hasOwnProperty,I="~";function v(){}function k(C,b,w){this.fn=C,this.context=b,this.once=w||!1}function x(C,b,w,T,D){if("function"!=typeof w)throw new TypeError("The listener must be a function");var V=new k(w,T||C,D),S=I?I+b:b;return C._events[S]?C._events[S].fn?C._events[S]=[C._events[S],V]:C._events[S].push(V):(C._events[S]=V,C._eventsCount++),C}function R(C,b){0==--C._eventsCount?C._events=new v:delete C._events[b]}function _(){this._events=new v,this._eventsCount=0}Object.create&&(v.prototype=Object.create(null),(new v).__proto__||(I=!1)),_.prototype.eventNames=function(){var w,T,b=[];if(0===this._eventsCount)return b;for(T in w=this._events)g.call(w,T)&&b.push(I?T.slice(1):T);return Object.getOwnPropertySymbols?b.concat(Object.getOwnPropertySymbols(w)):b},_.prototype.listeners=function(b){var T=this._events[I?I+b:b];if(!T)return[];if(T.fn)return[T.fn];for(var D=0,V=T.length,S=new Array(V);D<V;D++)S[D]=T[D].fn;return S},_.prototype.listenerCount=function(b){var T=this._events[I?I+b:b];return T?T.fn?1:T.length:0},_.prototype.emit=function(b,w,T,D,V,S){var A=I?I+b:b;if(!this._events[A])return!1;var ie,re,N=this._events[A],Y=arguments.length;if(N.fn){switch(N.once&&this.removeListener(b,N.fn,void 0,!0),Y){case 1:return N.fn.call(N.context),!0;case 2:return N.fn.call(N.context,w),!0;case 3:return N.fn.call(N.context,w,T),!0;case 4:return N.fn.call(N.context,w,T,D),!0;case 5:return N.fn.call(N.context,w,T,D,V),!0;case 6:return N.fn.call(N.context,w,T,D,V,S),!0}for(re=1,ie=new Array(Y-1);re<Y;re++)ie[re-1]=arguments[re];N.fn.apply(N.context,ie)}else{var Z,Q=N.length;for(re=0;re<Q;re++)switch(N[re].once&&this.removeListener(b,N[re].fn,void 0,!0),Y){case 1:N[re].fn.call(N[re].context);break;case 2:N[re].fn.call(N[re].context,w);break;case 3:N[re].fn.call(N[re].context,w,T);break;case 4:N[re].fn.call(N[re].context,w,T,D);break;default:if(!ie)for(Z=1,ie=new Array(Y-1);Z<Y;Z++)ie[Z-1]=arguments[Z];N[re].fn.apply(N[re].context,ie)}}return!0},_.prototype.on=function(b,w,T){return x(this,b,w,T,!1)},_.prototype.once=function(b,w,T){return x(this,b,w,T,!0)},_.prototype.removeListener=function(b,w,T,D){var V=I?I+b:b;if(!this._events[V])return this;if(!w)return R(this,V),this;var S=this._events[V];if(S.fn)S.fn===w&&(!D||S.once)&&(!T||S.context===T)&&R(this,V);else{for(var A=0,N=[],Y=S.length;A<Y;A++)(S[A].fn!==w||D&&!S[A].once||T&&S[A].context!==T)&&N.push(S[A]);N.length?this._events[V]=1===N.length?N[0]:N:R(this,V)}return this},_.prototype.removeAllListeners=function(b){var w;return b?this._events[w=I?I+b:b]&&R(this,w):(this._events=new v,this._eventsCount=0),this},_.prototype.off=_.prototype.removeListener,_.prototype.addListener=_.prototype.on,_.prefixed=I,_.EventEmitter=_,Ve.exports=_},2753:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});const v=I(2016);function k(_,C,b){try{Reflect.apply(_,C,b)}catch(w){setTimeout(()=>{throw w})}}g.default=class R extends v.EventEmitter{emit(C,...b){let w="error"===C;const T=this._events;if(void 0!==T)w=w&&void 0===T.error;else if(!w)return!1;if(w){let V;if(b.length>0&&([V]=b),V instanceof Error)throw V;const S=new Error("Unhandled error."+(V?` (${V.message})`:""));throw S.context=V,S}const D=T[C];if(void 0===D)return!1;if("function"==typeof D)k(D,this,b);else{const V=D.length,S=function x(_){const C=_.length,b=new Array(C);for(let w=0;w<C;w+=1)b[w]=_[w];return b}(D);for(let A=0;A<V;A+=1)k(S[A],this,b)}return!0}}},3689:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.assertExhaustive=g.assertStruct=g.assert=g.AssertionError=void 0;const v=I(54);function _(D,V){return function x(D){var V,S;return"string"==typeof(null===(S=null===(V=D?.prototype)||void 0===V?void 0:V.constructor)||void 0===S?void 0:S.name)}(D)?new D({message:V}):D({message:V})}class C extends Error{constructor(V){super(V.message),this.code="ERR_ASSERTION"}}g.AssertionError=C,g.assert=function b(D,V="Assertion failed.",S=C){if(!D)throw V instanceof Error?V:_(S,V)},g.assertStruct=function w(D,V,S="Assertion failed",A=C){try{(0,v.assert)(D,V)}catch(N){throw _(A,`${S}: ${function R(D){const V=function k(D){return"object"==typeof D&&null!==D&&"message"in D}(D)?D.message:String(D);return V.endsWith(".")?V.slice(0,-1):V}(N)}.`)}},g.assertExhaustive=function T(D){throw new Error("Invalid branch reached. Should be detected during compilation.")}},3845:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.base64=void 0;const v=I(54),k=I(3689);g.base64=(R,_={})=>{var C,b;const w=null!==(C=_.paddingRequired)&&void 0!==C&&C,T=null!==(b=_.characterSet)&&void 0!==b?b:"base64";let D,V;return"base64"===T?D=String.raw`[A-Za-z0-9+\/]`:((0,k.assert)("base64url"===T),D=String.raw`[-_A-Za-z0-9]`),V=w?new RegExp(`^(?:${D}{4})*(?:${D}{3}=|${D}{2}==)?$`,"u"):new RegExp(`^(?:${D}{4})*(?:${D}{2,3}|${D}{3}=|${D}{2}==)?$`,"u"),(0,v.pattern)(R,V)}},6468:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.createDataView=g.concatBytes=g.valueToBytes=g.stringToBytes=g.numberToBytes=g.signedBigIntToBytes=g.bigIntToBytes=g.hexToBytes=g.bytesToString=g.bytesToNumber=g.bytesToSignedBigInt=g.bytesToBigInt=g.bytesToHex=g.assertIsBytes=g.isBytes=void 0;const v=I(3689),k=I(1506),x=48,R=58,_=87,b=function C(){const B=[];return()=>{if(0===B.length)for(let q=0;q<256;q++)B.push(q.toString(16).padStart(2,"0"));return B}}();function w(B){return B instanceof Uint8Array}function T(B){(0,v.assert)(w(B),"Value must be a Uint8Array.")}function D(B){if(T(B),0===B.length)return"0x";const q=b(),be=new Array(B.length);for(let ae=0;ae<B.length;ae++)be[ae]=q[B[ae]];return(0,k.add0x)(be.join(""))}function V(B){T(B);const q=D(B);return BigInt(q)}function Y(B){var q;if("0x"===(null===(q=B?.toLowerCase)||void 0===q?void 0:q.call(B)))return new Uint8Array;(0,k.assertIsHexString)(B);const be=(0,k.remove0x)(B).toLowerCase(),ae=be.length%2==0?be:`0${be}`,ue=new Uint8Array(ae.length/2);for(let le=0;le<ue.length;le++){const M=ae.charCodeAt(2*le),E=ae.charCodeAt(2*le+1);ue[le]=16*(M-(M<R?x:_))+(E-(E<R?x:_))}return ue}function ie(B){return(0,v.assert)("bigint"==typeof B,"Value must be a bigint."),(0,v.assert)(B>=BigInt(0),"Value must be a non-negative bigint."),Y(B.toString(16))}function Z(B){return(0,v.assert)("number"==typeof B,"Value must be a number."),(0,v.assert)(B>=0,"Value must be a non-negative number."),(0,v.assert)(Number.isSafeInteger(B),"Value is not a safe integer. Use `bigIntToBytes` instead."),Y(B.toString(16))}function ee(B){return(0,v.assert)("string"==typeof B,"Value must be a string."),(new TextEncoder).encode(B)}function J(B){if("bigint"==typeof B)return ie(B);if("number"==typeof B)return Z(B);if("string"==typeof B)return B.startsWith("0x")?Y(B):ee(B);if(w(B))return B;throw new TypeError(`Unsupported value type: "${typeof B}".`)}g.isBytes=w,g.assertIsBytes=T,g.bytesToHex=D,g.bytesToBigInt=V,g.bytesToSignedBigInt=function S(B){T(B);let q=BigInt(0);for(const be of B)q=(q<<BigInt(8))+BigInt(be);return BigInt.asIntN(8*B.length,q)},g.bytesToNumber=function A(B){T(B);const q=V(B);return(0,v.assert)(q<=BigInt(Number.MAX_SAFE_INTEGER),"Number is not a safe integer. Use `bytesToBigInt` instead."),Number(q)},g.bytesToString=function N(B){return T(B),(new TextDecoder).decode(B)},g.hexToBytes=Y,g.bigIntToBytes=ie,g.signedBigIntToBytes=function Q(B,q){(0,v.assert)("bigint"==typeof B,"Value must be a bigint."),(0,v.assert)("number"==typeof q,"Byte length must be a number."),(0,v.assert)(q>0,"Byte length must be greater than 0."),(0,v.assert)(function re(B,q){(0,v.assert)(q>0);const be=B>>BigInt(31);return!((~B&be)+(B&~be)>>BigInt(8*q-1))}(B,q),"Byte length is too small to represent the given value.");let be=B;const ae=new Uint8Array(q);for(let ue=0;ue<ae.length;ue++)ae[ue]=Number(BigInt.asUintN(8,be)),be>>=BigInt(8);return ae.reverse()},g.numberToBytes=Z,g.stringToBytes=ee,g.valueToBytes=J,g.concatBytes=function we(B){const q=new Array(B.length);let be=0;for(let ue=0;ue<B.length;ue++){const le=J(B[ue]);q[ue]=le,be+=le.length}const ae=new Uint8Array(be);for(let ue=0,le=0;ue<q.length;ue++)ae.set(q[ue],le),le+=q[ue].length;return ae},g.createDataView=function _e(B){if(typeof Buffer<"u"&&B instanceof Buffer){const q=B.buffer.slice(B.byteOffset,B.byteOffset+B.byteLength);return new DataView(q)}return new DataView(B.buffer,B.byteOffset,B.byteLength)}},7634:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.ChecksumStruct=void 0;const v=I(54),k=I(3845);g.ChecksumStruct=(0,v.size)((0,k.base64)((0,v.string)(),{paddingRequired:!0}),44,44)},8081:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.createHex=g.createBytes=g.createBigInt=g.createNumber=void 0;const v=I(54),k=I(3689),x=I(6468),R=I(1506),_=(0,v.union)([(0,v.number)(),(0,v.bigint)(),(0,v.string)(),R.StrictHexStruct]),C=(0,v.coerce)((0,v.number)(),_,Number),b=(0,v.coerce)((0,v.bigint)(),_,BigInt),T=((0,v.union)([R.StrictHexStruct,(0,v.instance)(Uint8Array)]),(0,v.coerce)((0,v.instance)(Uint8Array),(0,v.union)([R.StrictHexStruct]),x.hexToBytes)),D=(0,v.coerce)(R.StrictHexStruct,(0,v.instance)(Uint8Array),x.bytesToHex);g.createNumber=function V(Y){try{const ie=(0,v.create)(Y,C);return(0,k.assert)(Number.isFinite(ie),`Expected a number-like value, got "${Y}".`),ie}catch(ie){throw ie instanceof v.StructError?new Error(`Expected a number-like value, got "${Y}".`):ie}},g.createBigInt=function S(Y){try{return(0,v.create)(Y,b)}catch(ie){throw ie instanceof v.StructError?new Error(`Expected a number-like value, got "${String(ie.value)}".`):ie}},g.createBytes=function A(Y){if("string"==typeof Y&&"0x"===Y.toLowerCase())return new Uint8Array;try{return(0,v.create)(Y,T)}catch(ie){throw ie instanceof v.StructError?new Error(`Expected a bytes-like value, got "${String(ie.value)}".`):ie}},g.createHex=function N(Y){if(Y instanceof Uint8Array&&0===Y.length||"string"==typeof Y&&"0x"===Y.toLowerCase())return"0x";try{return(0,v.create)(Y,D)}catch(ie){throw ie instanceof v.StructError?new Error(`Expected a bytes-like value, got "${String(ie.value)}".`):ie}}},6722:function(Ve,g){"use strict";var k,x,I=this&&this.__classPrivateFieldSet||function(C,b,w,T,D){if("m"===T)throw new TypeError("Private method is not writable");if("a"===T&&!D)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof b?C!==b||!D:!b.has(C))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===T?D.call(C,w):D?D.value=w:b.set(C,w),w},v=this&&this.__classPrivateFieldGet||function(C,b,w,T){if("a"===w&&!T)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof b?C!==b||!T:!b.has(C))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===w?T:"a"===w?T.call(C):T?T.value:b.get(C)};Object.defineProperty(g,"__esModule",{value:!0}),g.FrozenSet=g.FrozenMap=void 0;class R{constructor(b){k.set(this,void 0),I(this,k,new Map(b),"f"),Object.freeze(this)}get size(){return v(this,k,"f").size}[(k=new WeakMap,Symbol.iterator)](){return v(this,k,"f")[Symbol.iterator]()}entries(){return v(this,k,"f").entries()}forEach(b,w){return v(this,k,"f").forEach((T,D,V)=>b.call(w,T,D,this))}get(b){return v(this,k,"f").get(b)}has(b){return v(this,k,"f").has(b)}keys(){return v(this,k,"f").keys()}values(){return v(this,k,"f").values()}toString(){return`FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([b,w])=>`${String(b)} => ${String(w)}`).join(", ")} `:""}}`}}g.FrozenMap=R;class _{constructor(b){x.set(this,void 0),I(this,x,new Set(b),"f"),Object.freeze(this)}get size(){return v(this,x,"f").size}[(x=new WeakMap,Symbol.iterator)](){return v(this,x,"f")[Symbol.iterator]()}entries(){return v(this,x,"f").entries()}forEach(b,w){return v(this,x,"f").forEach((T,D,V)=>b.call(w,T,D,this))}has(b){return v(this,x,"f").has(b)}keys(){return v(this,x,"f").keys()}values(){return v(this,x,"f").values()}toString(){return`FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(b=>String(b)).join(", ")} `:""}}`}}g.FrozenSet=_,Object.freeze(R),Object.freeze(R.prototype),Object.freeze(_),Object.freeze(_.prototype)},3243:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0})},1506:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.remove0x=g.add0x=g.assertIsStrictHexString=g.assertIsHexString=g.isStrictHexString=g.isHexString=g.StrictHexStruct=g.HexStruct=void 0;const v=I(54),k=I(3689);function x(T){return(0,v.is)(T,g.HexStruct)}function R(T){return(0,v.is)(T,g.StrictHexStruct)}g.HexStruct=(0,v.pattern)((0,v.string)(),/^(?:0x)?[0-9a-f]+$/iu),g.StrictHexStruct=(0,v.pattern)((0,v.string)(),/^0x[0-9a-f]+$/iu),g.isHexString=x,g.isStrictHexString=R,g.assertIsHexString=function _(T){(0,k.assert)(x(T),"Value must be a hexadecimal string.")},g.assertIsStrictHexString=function C(T){(0,k.assert)(R(T),'Value must be a hexadecimal string, starting with "0x".')},g.add0x=function b(T){return T.startsWith("0x")?T:T.startsWith("0X")?`0x${T.substring(2)}`:`0x${T}`},g.remove0x=function w(T){return T.startsWith("0x")||T.startsWith("0X")?T.substring(2):T}},7184:function(Ve,g,I){"use strict";var v=this&&this.__createBinding||(Object.create?function(x,R,_,C){void 0===C&&(C=_);var b=Object.getOwnPropertyDescriptor(R,_);(!b||("get"in b?!R.__esModule:b.writable||b.configurable))&&(b={enumerable:!0,get:function(){return R[_]}}),Object.defineProperty(x,C,b)}:function(x,R,_,C){void 0===C&&(C=_),x[C]=R[_]}),k=this&&this.__exportStar||function(x,R){for(var _ in x)"default"!==_&&!Object.prototype.hasOwnProperty.call(R,_)&&v(R,x,_)};Object.defineProperty(g,"__esModule",{value:!0}),k(I(3689),g),k(I(3845),g),k(I(6468),g),k(I(7634),g),k(I(8081),g),k(I(6722),g),k(I(3243),g),k(I(1506),g),k(I(6261),g),k(I(352),g),k(I(7464),g),k(I(3571),g),k(I(6885),g),k(I(5127),g),k(I(9246),g),k(I(1655),g),k(I(9383),g)},6261:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.getJsonRpcIdValidator=g.assertIsJsonRpcError=g.isJsonRpcError=g.assertIsJsonRpcFailure=g.isJsonRpcFailure=g.assertIsJsonRpcSuccess=g.isJsonRpcSuccess=g.assertIsJsonRpcResponse=g.isJsonRpcResponse=g.assertIsPendingJsonRpcResponse=g.isPendingJsonRpcResponse=g.JsonRpcResponseStruct=g.JsonRpcFailureStruct=g.JsonRpcSuccessStruct=g.PendingJsonRpcResponseStruct=g.assertIsJsonRpcRequest=g.isJsonRpcRequest=g.assertIsJsonRpcNotification=g.isJsonRpcNotification=g.JsonRpcNotificationStruct=g.JsonRpcRequestStruct=g.JsonRpcParamsStruct=g.JsonRpcErrorStruct=g.JsonRpcIdStruct=g.JsonRpcVersionStruct=g.jsonrpc2=g.getJsonSize=g.isValidJson=g.JsonStruct=g.UnsafeJsonStruct=void 0;const v=I(54),k=I(3689);g.UnsafeJsonStruct=(0,v.union)([(0,v.literal)(null),(0,v.boolean)(),(0,v.define)("finite number",J=>(0,v.is)(J,(0,v.number)())&&Number.isFinite(J)),(0,v.string)(),(0,v.array)((0,v.lazy)(()=>g.UnsafeJsonStruct)),(0,v.record)((0,v.string)(),(0,v.lazy)(()=>g.UnsafeJsonStruct))]),g.JsonStruct=(0,v.define)("Json",(J,we)=>{function _e(B,q){const ae=[...q.validator(B,we)];return!(ae.length>0)||ae}try{const B=_e(J,g.UnsafeJsonStruct);return!0!==B?B:_e(JSON.parse(JSON.stringify(J)),g.UnsafeJsonStruct)}catch(B){return B instanceof RangeError&&"Circular reference detected"}}),g.isValidJson=function R(J){return(0,v.is)(J,g.JsonStruct)},g.getJsonSize=function _(J){(0,k.assertStruct)(J,g.JsonStruct,"Invalid JSON value");const we=JSON.stringify(J);return(new TextEncoder).encode(we).byteLength},g.jsonrpc2="2.0",g.JsonRpcVersionStruct=(0,v.literal)(g.jsonrpc2),g.JsonRpcIdStruct=(0,v.nullable)((0,v.union)([(0,v.number)(),(0,v.string)()])),g.JsonRpcErrorStruct=(0,v.object)({code:(0,v.integer)(),message:(0,v.string)(),data:(0,v.optional)(g.JsonStruct),stack:(0,v.optional)((0,v.string)())}),g.JsonRpcParamsStruct=(0,v.optional)((0,v.union)([(0,v.record)((0,v.string)(),g.JsonStruct),(0,v.array)(g.JsonStruct)])),g.JsonRpcRequestStruct=(0,v.object)({id:g.JsonRpcIdStruct,jsonrpc:g.JsonRpcVersionStruct,method:(0,v.string)(),params:g.JsonRpcParamsStruct}),g.JsonRpcNotificationStruct=(0,v.omit)(g.JsonRpcRequestStruct,["id"]),g.isJsonRpcNotification=function C(J){return(0,v.is)(J,g.JsonRpcNotificationStruct)},g.assertIsJsonRpcNotification=function b(J,we){(0,k.assertStruct)(J,g.JsonRpcNotificationStruct,"Invalid JSON-RPC notification",we)},g.isJsonRpcRequest=function w(J){return(0,v.is)(J,g.JsonRpcRequestStruct)},g.assertIsJsonRpcRequest=function T(J,we){(0,k.assertStruct)(J,g.JsonRpcRequestStruct,"Invalid JSON-RPC request",we)},g.PendingJsonRpcResponseStruct=(0,v.object)({id:g.JsonRpcIdStruct,jsonrpc:g.JsonRpcVersionStruct,result:(0,v.optional)((0,v.unknown)()),error:(0,v.optional)(g.JsonRpcErrorStruct)}),g.JsonRpcSuccessStruct=(0,v.object)({id:g.JsonRpcIdStruct,jsonrpc:g.JsonRpcVersionStruct,result:g.JsonStruct}),g.JsonRpcFailureStruct=(0,v.object)({id:g.JsonRpcIdStruct,jsonrpc:g.JsonRpcVersionStruct,error:g.JsonRpcErrorStruct}),g.JsonRpcResponseStruct=(0,v.union)([g.JsonRpcSuccessStruct,g.JsonRpcFailureStruct]),g.isPendingJsonRpcResponse=function D(J){return(0,v.is)(J,g.PendingJsonRpcResponseStruct)},g.assertIsPendingJsonRpcResponse=function V(J,we){(0,k.assertStruct)(J,g.PendingJsonRpcResponseStruct,"Invalid pending JSON-RPC response",we)},g.isJsonRpcResponse=function S(J){return(0,v.is)(J,g.JsonRpcResponseStruct)},g.assertIsJsonRpcResponse=function A(J,we){(0,k.assertStruct)(J,g.JsonRpcResponseStruct,"Invalid JSON-RPC response",we)},g.isJsonRpcSuccess=function N(J){return(0,v.is)(J,g.JsonRpcSuccessStruct)},g.assertIsJsonRpcSuccess=function Y(J,we){(0,k.assertStruct)(J,g.JsonRpcSuccessStruct,"Invalid JSON-RPC success response",we)},g.isJsonRpcFailure=function ie(J){return(0,v.is)(J,g.JsonRpcFailureStruct)},g.assertIsJsonRpcFailure=function re(J,we){(0,k.assertStruct)(J,g.JsonRpcFailureStruct,"Invalid JSON-RPC failure response",we)},g.isJsonRpcError=function Q(J){return(0,v.is)(J,g.JsonRpcErrorStruct)},g.assertIsJsonRpcError=function Z(J,we){(0,k.assertStruct)(J,g.JsonRpcErrorStruct,"Invalid JSON-RPC error",we)},g.getJsonRpcIdValidator=function ee(J){const{permitEmptyString:we,permitFractions:_e,permitNull:B}=Object.assign({permitEmptyString:!0,permitFractions:!1,permitNull:!0},J);return be=>!!("number"==typeof be&&(_e||Number.isInteger(be))||"string"==typeof be&&(we||be.length>0)||B&&null===be)}},352:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0})},7464:function(Ve,g,I){"use strict";var v=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(g,"__esModule",{value:!0}),g.createModuleLogger=g.createProjectLogger=void 0;const x=(0,v(I(563)).default)("metamask");g.createProjectLogger=function R(C){return x.extend(C)},g.createModuleLogger=function _(C,b){return C.extend(b)}},3571:(Ve,g)=>{"use strict";var T;function C(T){return T.charCodeAt(0)<=127}Object.defineProperty(g,"__esModule",{value:!0}),g.calculateNumberSize=g.calculateStringSize=g.isASCII=g.isPlainObject=g.ESCAPE_CHARACTERS_REGEXP=g.JsonSize=g.hasProperty=g.isObject=g.isNullOrUndefined=g.isNonEmptyArray=void 0,g.isNonEmptyArray=function I(T){return Array.isArray(T)&&T.length>0},g.isNullOrUndefined=function v(T){return null==T},g.isObject=function k(T){return!!T&&"object"==typeof T&&!Array.isArray(T)},g.hasProperty=(T,D)=>Object.hasOwnProperty.call(T,D),(T=g.JsonSize||(g.JsonSize={}))[T.Null=4]="Null",T[T.Comma=1]="Comma",T[T.Wrapper=1]="Wrapper",T[T.True=4]="True",T[T.False=5]="False",T[T.Quote=1]="Quote",T[T.Colon=1]="Colon",T[T.Date=24]="Date",g.ESCAPE_CHARACTERS_REGEXP=/"|\\|\n|\r|\t/gu,g.isPlainObject=function _(T){if("object"!=typeof T||null===T)return!1;try{let D=T;for(;null!==Object.getPrototypeOf(D);)D=Object.getPrototypeOf(D);return Object.getPrototypeOf(T)===D}catch{return!1}},g.isASCII=C,g.calculateStringSize=function b(T){var D;return T.split("").reduce((S,A)=>C(A)?S+1:S+2,0)+(null!==(D=T.match(g.ESCAPE_CHARACTERS_REGEXP))&&void 0!==D?D:[]).length},g.calculateNumberSize=function w(T){return T.toString().length}},6885:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.hexToBigInt=g.hexToNumber=g.bigIntToHex=g.numberToHex=void 0;const v=I(3689),k=I(1506);g.numberToHex=b=>((0,v.assert)("number"==typeof b,"Value must be a number."),(0,v.assert)(b>=0,"Value must be a non-negative number."),(0,v.assert)(Number.isSafeInteger(b),"Value is not a safe integer. Use `bigIntToHex` instead."),(0,k.add0x)(b.toString(16))),g.bigIntToHex=b=>((0,v.assert)("bigint"==typeof b,"Value must be a bigint."),(0,v.assert)(b>=0,"Value must be a non-negative bigint."),(0,k.add0x)(b.toString(16))),g.hexToNumber=b=>{(0,k.assertIsHexString)(b);const w=parseInt(b,16);return(0,v.assert)(Number.isSafeInteger(w),"Value is not a safe integer. Use `hexToBigInt` instead."),w},g.hexToBigInt=b=>((0,k.assertIsHexString)(b),BigInt((0,k.add0x)(b)))},5127:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0})},9246:(Ve,g)=>{"use strict";var _;Object.defineProperty(g,"__esModule",{value:!0}),g.timeSince=g.inMilliseconds=g.Duration=void 0,(_=g.Duration||(g.Duration={}))[_.Millisecond=1]="Millisecond",_[_.Second=1e3]="Second",_[_.Minute=6e4]="Minute",_[_.Hour=36e5]="Hour",_[_.Day=864e5]="Day",_[_.Week=6048e5]="Week",_[_.Year=31536e6]="Year";const k=(_,C)=>{if(!(_=>Number.isInteger(_)&&_>=0)(_))throw new Error(`"${C}" must be a non-negative integer. Received: "${_}".`)};g.inMilliseconds=function x(_,C){return k(_,"count"),_*C},g.timeSince=function R(_){return k(_,"timestamp"),Date.now()-_}},1655:(Ve,g)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0})},9383:(Ve,g,I)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g.satisfiesVersionRange=g.gtRange=g.gtVersion=g.assertIsSemVerRange=g.assertIsSemVerVersion=g.isValidSemVerRange=g.isValidSemVerVersion=g.VersionRangeStruct=g.VersionStruct=void 0;const v=I(424),k=I(54),x=I(3689);g.VersionStruct=(0,k.refine)((0,k.string)(),"Version",V=>null!==(0,v.valid)(V)||`Expected SemVer version, got "${V}"`),g.VersionRangeStruct=(0,k.refine)((0,k.string)(),"Version range",V=>null!==(0,v.validRange)(V)||`Expected SemVer range, got "${V}"`),g.isValidSemVerVersion=function R(V){return(0,k.is)(V,g.VersionStruct)},g.isValidSemVerRange=function _(V){return(0,k.is)(V,g.VersionRangeStruct)},g.assertIsSemVerVersion=function C(V){(0,x.assertStruct)(V,g.VersionStruct)},g.assertIsSemVerRange=function b(V){(0,x.assertStruct)(V,g.VersionRangeStruct)},g.gtVersion=function w(V,S){return(0,v.gt)(V,S)},g.gtRange=function T(V,S){return(0,v.gtr)(V,S)},g.satisfiesVersionRange=function D(V,S){return(0,v.satisfies)(V,S,{includePrerelease:!0})}},7289:(Ve,g,I)=>{"use strict";var v={};I.r(v),I.d(v,{identity:()=>Zae});var k={};I.r(k),I.d(k,{base2:()=>Gae});var x={};I.r(x),I.d(x,{base8:()=>qae});var R={};I.r(R),I.d(R,{base10:()=>Kae});var _={};I.r(_),I.d(_,{base16:()=>Yae,base16upper:()=>Jae});var C={};I.r(C),I.d(C,{base32:()=>sy,base32hex:()=>tce,base32hexpad:()=>rce,base32hexpadupper:()=>ice,base32hexupper:()=>nce,base32pad:()=>Xae,base32padupper:()=>ece,base32upper:()=>Qae,base32z:()=>oce});var b={};I.r(b),I.d(b,{base36:()=>sce,base36upper:()=>ace});var w={};I.r(w),I.d(w,{base58btc:()=>cd,base58flickr:()=>cce});var T={};I.r(T),I.d(T,{base64:()=>lce,base64pad:()=>uce,base64url:()=>dce,base64urlpad:()=>fce});var D={};I.r(D),I.d(D,{base256emoji:()=>yce});var V={};I.r(V),I.d(V,{sha256:()=>Uce,sha512:()=>$ce});var S={};I.r(S),I.d(S,{identity:()=>Vce});var A={};I.r(A),I.d(A,{code:()=>zce,decode:()=>Zce,encode:()=>Wce,name:()=>Hce});var N={};I.r(N),I.d(N,{code:()=>Yce,decode:()=>Qce,encode:()=>Jce,name:()=>Kce});var Y={};function ie(n){return"function"==typeof n}function re(n){const t=n(r=>{Error.call(r),r.stack=(new Error).stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}I.r(Y),I.d(Y,{dQ:()=>oA,ci:()=>Tg,bytesToNumberBE:()=>hp,ty:()=>rA,eV:()=>Hy,n$:()=>JU,ql:()=>Dl,hexToBytes:()=>Rg,tL:()=>Og,S5:()=>iA,FF:()=>zy});const Q=re(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t});function Z(n,e){if(n){const t=n.indexOf(e);0<=t&&n.splice(t,1)}}class ee{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const a of t)a.remove(this);else t.remove(this);const{initialTeardown:r}=this;if(ie(r))try{r()}catch(a){e=a instanceof Q?a.errors:[a]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const a of o)try{_e(a)}catch(l){e=e??[],l instanceof Q?e=[...e,...l.errors]:e.push(l)}}if(e)throw new Q(e)}}add(e){var t;if(e&&e!==this)if(this.closed)_e(e);else{if(e instanceof ee){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(e)}}_hasParent(e){const{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){const{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Z(t,e)}remove(e){const{_finalizers:t}=this;t&&Z(t,e),e instanceof ee&&e._removeParent(this)}}ee.EMPTY=(()=>{const n=new ee;return n.closed=!0,n})();const J=ee.EMPTY;function we(n){return n instanceof ee||n&&"closed"in n&&ie(n.remove)&&ie(n.add)&&ie(n.unsubscribe)}function _e(n){ie(n)?n():n.unsubscribe()}const B={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},q={setTimeout(n,e,...t){const{delegate:r}=q;return r?.setTimeout?r.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){const{delegate:e}=q;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function be(n){q.setTimeout(()=>{const{onUnhandledError:e}=B;if(!e)throw n;e(n)})}function ae(){}const ue=E("C",void 0,void 0);function E(n,e,t){return{kind:n,value:e,error:t}}let F=null;function $(n){if(B.useDeprecatedSynchronousErrorHandling){const e=!F;if(e&&(F={errorThrown:!1,error:null}),n(),e){const{errorThrown:t,error:r}=F;if(F=null,t)throw r}}else n()}class ve extends ee{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,we(e)&&e.add(this)):this.destination=Ke}static create(e,t,r){return new j(e,t,r)}next(e){this.isStopped?et(function M(n){return E("N",n,void 0)}(e),this):this._next(e)}error(e){this.isStopped?et(function le(n){return E("E",void 0,n)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?et(ue,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const ce=Function.prototype.bind;function fe(n,e){return ce.call(n,e)}class ge{constructor(e){this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(r){Te(r)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(r){Te(r)}else Te(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Te(t)}}}class j extends ve{constructor(e,t,r){let o;if(super(),ie(e)||!e)o={next:e??void 0,error:t??void 0,complete:r??void 0};else{let a;this&&B.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&fe(e.next,a),error:e.error&&fe(e.error,a),complete:e.complete&&fe(e.complete,a)}):o=e}this.destination=new ge(o)}}function Te(n){B.useDeprecatedSynchronousErrorHandling?function G(n){B.useDeprecatedSynchronousErrorHandling&&F&&(F.errorThrown=!0,F.error=n)}(n):be(n)}function et(n,e){const{onStoppedNotification:t}=B;t&&q.setTimeout(()=>t(n,e))}const Ke={closed:!0,next:ae,error:function Xe(n){throw n},complete:ae},Me="function"==typeof Symbol&&Symbol.observable||"@@observable";function Re(n){return n}function P(n){return 0===n.length?Re:1===n.length?n[0]:function(t){return n.reduce((r,o)=>o(r),t)}}let xe=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){const r=new n;return r.source=this,r.operator=t,r}subscribe(t,r,o){const a=function nt(n){return n&&n instanceof ve||function ke(n){return n&&ie(n.next)&&ie(n.error)&&ie(n.complete)}(n)&&we(n)}(t)?t:new j(t,r,o);return $(()=>{const{operator:l,source:d}=this;a.add(l?l.call(a,d):d?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(t){try{return this._subscribe(t)}catch(r){t.error(r)}}forEach(t,r){return new(r=Ne(r))((o,a)=>{const l=new j({next:d=>{try{t(d)}catch(p){a(p),l.unsubscribe()}},error:a,complete:o});this.subscribe(l)})}_subscribe(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)}[Me](){return this}pipe(...t){return P(t)(this)}toPromise(t){return new(t=Ne(t))((r,o)=>{let a;this.subscribe(l=>a=l,l=>o(l),()=>r(a))})}}return n.create=e=>new n(e),n})();function Ne(n){var e;return null!==(e=n??B.Promise)&&void 0!==e?e:Promise}const se=re(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let z=(()=>{class n extends xe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const r=new te(this,this);return r.operator=t,r}_throwIfClosed(){if(this.closed)throw new se}next(t){$(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(t)}})}error(t){$(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:r}=this;for(;r.length;)r.shift().error(t)}})}complete(){$(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:r,isStopped:o,observers:a}=this;return r||o?J:(this.currentObservers=null,a.push(t),new ee(()=>{this.currentObservers=null,Z(a,t)}))}_checkFinalizedStatuses(t){const{hasError:r,thrownError:o,isStopped:a}=this;r?t.error(o):a&&t.complete()}asObservable(){const t=new xe;return t.source=this,t}}return n.create=(e,t)=>new te(e,t),n})();class te extends z{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)}error(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)}complete(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)}_subscribe(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:J}}function Ie(n){return ie(n?.lift)}function $e(n){return e=>{if(Ie(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Pe(n,e,t,r,o){return new Ye(n,e,t,r,o)}class Ye extends ve{constructor(e,t,r,o,a,l){super(e),this.onFinalize=a,this.shouldUnsubscribe=l,this._next=t?function(d){try{t(d)}catch(p){e.error(p)}}:super._next,this._error=o?function(d){try{o(d)}catch(p){e.error(p)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(d){e.error(d)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}function qe(n,e){return $e((t,r)=>{let o=0;t.subscribe(Pe(r,a=>{r.next(n.call(e,a,o++))}))})}var st=I(7582);const je=n=>n&&"number"==typeof n.length&&"function"!=typeof n;function We(n){return ie(n?.then)}function oe(n){return ie(n[Me])}function ne(n){return Symbol.asyncIterator&&ie(n?.[Symbol.asyncIterator])}function K(n){return new TypeError(`You provided ${null!==n&&"object"==typeof n?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const Be=function de(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function ot(n){return ie(n?.[Be])}function ct(n){return(0,st.__asyncGenerator)(this,arguments,function*(){const t=n.getReader();try{for(;;){const{value:r,done:o}=yield(0,st.__await)(t.read());if(o)return yield(0,st.__await)(void 0);yield yield(0,st.__await)(r)}}finally{t.releaseLock()}})}function ht(n){return ie(n?.getReader)}function Ct(n){if(n instanceof xe)return n;if(null!=n){if(oe(n))return function Lt(n){return new xe(e=>{const t=n[Me]();if(ie(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(n);if(je(n))return function Gt(n){return new xe(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}(n);if(We(n))return function dn(n){return new xe(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,be)})}(n);if(ne(n))return Kn(n);if(ot(n))return function Jt(n){return new xe(e=>{for(const t of n)if(e.next(t),e.closed)return;e.complete()})}(n);if(ht(n))return function Zr(n){return Kn(ct(n))}(n)}throw K(n)}function Kn(n){return new xe(e=>{(function bn(n,e){var t,r,o,a;return(0,st.__awaiter)(this,void 0,void 0,function*(){try{for(t=(0,st.__asyncValues)(n);!(r=yield t.next()).done;)if(e.next(r.value),e.closed)return}catch(l){o={error:l}}finally{try{r&&!r.done&&(a=t.return)&&(yield a.call(t))}finally{if(o)throw o.error}}e.complete()})})(n,e).catch(t=>e.error(t))})}function St(n,e,t,r=0,o=!1){const a=e.schedule(function(){t(),o?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(a),!o)return a}function sn(n,e,t=1/0){return ie(e)?sn((r,o)=>qe((a,l)=>e(r,a,o,l))(Ct(n(r,o))),t):("number"==typeof e&&(t=e),$e((r,o)=>function nn(n,e,t,r,o,a,l,d){const p=[];let y=0,O=0,H=!1;const Ee=()=>{H&&!p.length&&!y&&e.complete()},Ue=Ge=>y<r?He(Ge):p.push(Ge),He=Ge=>{a&&e.next(Ge),y++;let at=!1;Ct(t(Ge,O++)).subscribe(Pe(e,ft=>{o?.(ft),a?Ue(ft):e.next(ft)},()=>{at=!0},void 0,()=>{if(at)try{for(y--;p.length&&y<r;){const ft=p.shift();l?St(e,l,()=>He(ft)):He(ft)}Ee()}catch(ft){e.error(ft)}}))};return n.subscribe(Pe(e,Ue,()=>{H=!0,Ee()})),()=>{d?.()}}(r,o,n,t)))}function xn(n=1/0){return sn(Re,n)}const nr=new xe(n=>n.complete());function Gr(n){return n&&ie(n.schedule)}function In(n){return n[n.length-1]}function Fn(n){return ie(In(n))?n.pop():void 0}function Cr(n){return Gr(In(n))?n.pop():void 0}function _n(n,e=0){return $e((t,r)=>{t.subscribe(Pe(r,o=>St(r,n,()=>r.next(o),e),()=>St(r,n,()=>r.complete(),e),o=>St(r,n,()=>r.error(o),e)))})}function qr(n,e=0){return $e((t,r)=>{r.add(n.schedule(()=>t.subscribe(r),e))})}function dr(n,e){if(!n)throw new Error("Iterable cannot be null");return new xe(t=>{St(t,e,()=>{const r=n[Symbol.asyncIterator]();St(t,e,()=>{r.next().then(o=>{o.done?t.complete():t.next(o.value)})},0,!0)})})}function Hn(n,e){return e?function Yr(n,e){if(null!=n){if(oe(n))return function jn(n,e){return Ct(n).pipe(qr(e),_n(e))}(n,e);if(je(n))return function Qr(n,e){return new xe(t=>{let r=0;return e.schedule(function(){r===n.length?t.complete():(t.next(n[r++]),t.closed||this.schedule())})})}(n,e);if(We(n))return function Vn(n,e){return Ct(n).pipe(qr(e),_n(e))}(n,e);if(ne(n))return dr(n,e);if(ot(n))return function Kr(n,e){return new xe(t=>{let r;return St(t,e,()=>{r=n[Be](),St(t,e,()=>{let o,a;try{({value:o,done:a}=r.next())}catch(l){return void t.error(l)}a?t.complete():t.next(o)},0,!0)}),()=>ie(r?.return)&&r.return()})}(n,e);if(ht(n))return function gc(n,e){return dr(ct(n),e)}(n,e)}throw K(n)}(n,e):Ct(n)}function es(...n){const e=Cr(n),t=function rt(n,e){return"number"==typeof In(n)?n.pop():e}(n,1/0),r=n;return r.length?1===r.length?Ct(r[0]):xn(t)(Hn(r,e)):nr}class xi extends z{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){const{hasError:e,thrownError:t,_value:r}=this;if(e)throw t;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}}function hn(...n){return Hn(n,Cr(n))}function ra(n={}){const{connector:e=(()=>new z),resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=n;return a=>{let l,d,p,y=0,O=!1,H=!1;const Ee=()=>{d?.unsubscribe(),d=void 0},Ue=()=>{Ee(),l=p=void 0,O=H=!1},He=()=>{const Ge=l;Ue(),Ge?.unsubscribe()};return $e((Ge,at)=>{y++,!H&&!O&&Ee();const ft=p=p??e();at.add(()=>{y--,0===y&&!H&&!O&&(d=xs(He,o))}),ft.subscribe(at),!l&&y>0&&(l=new j({next:dt=>ft.next(dt),error:dt=>{H=!0,Ee(),d=xs(Ue,t,dt),ft.error(dt)},complete:()=>{O=!0,Ee(),d=xs(Ue,r),ft.complete()}}),Ct(Ge).subscribe(l))})(a)}}function xs(n,e,...t){if(!0===e)return void n();if(!1===e)return;const r=new j({next:()=>{r.unsubscribe(),n()}});return Ct(e(...t)).subscribe(r)}function zi(n,e){return $e((t,r)=>{let o=null,a=0,l=!1;const d=()=>l&&!o&&r.complete();t.subscribe(Pe(r,p=>{o?.unsubscribe();let y=0;const O=a++;Ct(n(p,O)).subscribe(o=Pe(r,H=>r.next(e?e(p,H,O,y++):H),()=>{o=null,d()}))},()=>{l=!0,d()}))})}function Pa(n,e){return n===e}function Yn(n){for(let e in n)if(n[e]===Yn)return e;throw Error("Could not find renamed property on target object.")}function ts(n,e){for(const t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function Ur(n){if("string"==typeof n)return n;if(Array.isArray(n))return"["+n.map(Ur).join(", ")+"]";if(null==n)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;const e=n.toString();if(null==e)return""+e;const t=e.indexOf("\n");return-1===t?e:e.substring(0,t)}function Wi(n,e){return null==n||""===n?null===e?"":e:null==e||""===e?n:n+" "+e}const ka=Yn({__forward_ref__:Yn});function fr(n){return n.__forward_ref__=fr,n.toString=function(){return Ur(this())},n}function En(n){return qc(n)?n():n}function qc(n){return"function"==typeof n&&n.hasOwnProperty(ka)&&n.__forward_ref__===fr}function Kc(n){return n&&!!n.\u0275providers}const La="https://g.co/ng/security#xss";class Bt extends Error{constructor(e,t){super(function mc(n,e){return`NG0${Math.abs(n)}${e?": "+e:""}`}(e,t)),this.code=e}}function Pn(n){return"string"==typeof n?n:null==n?"":String(n)}function Yf(n,e){throw new Bt(-201,!1)}function ns(n,e){null==n&&function yn(n,e,t,r){throw new Error(`ASSERTION ERROR: ${n}`+(null==r?"":` [Expected=> ${t} ${r} ${e} <=Actual]`))}(e,n,null,"!=")}function vn(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Uo(n){return{providers:n.providers||[],imports:n.imports||[]}}function Au(n){return Qf(n,kd)||Qf(n,Dp)}function Qf(n,e){return n.hasOwnProperty(e)?n[e]:null}function Iu(n){return n&&(n.hasOwnProperty(Xf)||n.hasOwnProperty(ut))?n[Xf]:null}const kd=Yn({\u0275prov:Yn}),Xf=Yn({\u0275inj:Yn}),Dp=Yn({ngInjectableDef:Yn}),ut=Yn({ngInjectorDef:Yn});var gt=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(gt||{});let Pt;function rr(n){const e=Pt;return Pt=n,e}function Bn(n,e,t){const r=Au(n);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:t&gt.Optional?null:void 0!==e?e:void Yf(Ur(n))}const zn=globalThis;class qt{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=vn({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}const eh={},um="__NG_DI_FLAG__",Du="ngTempTokenPath",rE=/\n/gm,Iv="__source";let Fd;function Bl(n){const e=Fd;return Fd=n,e}function sE(n,e=gt.Default){if(void 0===Fd)throw new Bt(-203,!1);return null===Fd?Bn(n,void 0,e):Fd.get(n,e&gt.Optional?null:void 0,e)}function Dn(n,e=gt.Default){return(function Qt(){return Pt}()||sE)(En(n),e)}function an(n,e=gt.Default){return Dn(n,Tp(e))}function Tp(n){return typeof n>"u"||"number"==typeof n?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function dm(n){const e=[];for(let t=0;t<n.length;t++){const r=En(n[t]);if(Array.isArray(r)){if(0===r.length)throw new Bt(900,!1);let o,a=gt.Default;for(let l=0;l<r.length;l++){const d=r[l],p=aE(d);"number"==typeof p?-1===p?o=d.token:a|=p:o=d}e.push(Dn(o,a))}else e.push(Dn(r))}return e}function th(n,e){return n[um]=e,n.prototype[um]=e,n}function aE(n){return n[um]}function Qc(n){return{toString:n}.toString()}var Rp=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Rp||{}),Fa=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Fa||{});const yc={},xr=[],Op=Yn({\u0275cmp:Yn}),nh=Yn({\u0275dir:Yn}),fm=Yn({\u0275pipe:Yn}),Ru=Yn({\u0275mod:Yn}),Qi=Yn({\u0275fac:Yn}),Ar=Yn({__NG_ELEMENT_ID__:Yn}),Tv=Yn({__NG_ENV_ID__:Yn});function is(n,e,t){let r=n.length;for(;;){const o=n.indexOf(e,t);if(-1===o)return o;if(0===o||n.charCodeAt(o-1)<=32){const a=e.length;if(o+a===r||n.charCodeAt(o+a)<=32)return o}t=o+1}}function uo(n,e,t){let r=0;for(;r<t.length;){const o=t[r];if("number"==typeof o){if(0!==o)break;r++;const a=t[r++],l=t[r++],d=t[r++];n.setAttribute(e,l,d,a)}else{const a=o,l=t[++r];rh(a)?n.setProperty(e,a,l):n.setAttribute(e,a,l),r++}}return r}function Rv(n){return 3===n||4===n||6===n}function rh(n){return 64===n.charCodeAt(0)}function Ua(n,e){if(null!==e&&0!==e.length)if(null===n||0===n.length)n=e.slice();else{let t=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?t=o:0===t||Ov(n,t,o,null,-1===t||2===t?e[++r]:null)}}return n}function Ov(n,e,t,r,o){let a=0,l=n.length;if(-1===e)l=-1;else for(;a<n.length;){const d=n[a++];if("number"==typeof d){if(d===e){l=-1;break}if(d>e){l=a-1;break}}}for(;a<n.length;){const d=n[a];if("number"==typeof d)break;if(d===t){if(null===r)return void(null!==o&&(n[a+1]=o));if(r===n[a+1])return void(n[a+2]=o)}a++,null!==r&&a++,null!==o&&a++}-1!==l&&(n.splice(l,0,e),a=l+1),n.splice(a++,0,t),null!==r&&n.splice(a++,0,r),null!==o&&n.splice(a++,0,o)}const vc="ng-template";function oa(n,e,t){let r=0,o=!0;for(;r<n.length;){let a=n[r++];if("string"==typeof a&&o){const l=n[r++];if(t&&"class"===a&&-1!==is(l.toLowerCase(),e,0))return!0}else{if(1===a){for(;r<n.length&&"string"==typeof(a=n[r++]);)if(a.toLowerCase()===e)return!0;return!1}"number"==typeof a&&(o=!1)}}return!1}function Mv(n){return 4===n.type&&n.value!==vc}function $a(n,e,t){return e===(4!==n.type||t?n.value:vc)}function os(n,e,t){let r=4;const o=n.attrs||[],a=function Nv(n){for(let e=0;e<n.length;e++)if(Rv(n[e]))return e;return n.length}(o);let l=!1;for(let d=0;d<e.length;d++){const p=e[d];if("number"!=typeof p){if(!l)if(4&r){if(r=2|1&r,""!==p&&!$a(n,p,t)||""===p&&1===e.length){if(ja(r))return!1;l=!0}}else{const y=8&r?p:e[++d];if(8&r&&null!==n.attrs){if(!oa(n.attrs,y,t)){if(ja(r))return!1;l=!0}continue}const H=Ou(8&r?"class":p,o,Mv(n),t);if(-1===H){if(ja(r))return!1;l=!0;continue}if(""!==y){let Ee;Ee=H>a?"":o[H+1].toLowerCase();const Ue=8&r?Ee:null;if(Ue&&-1!==is(Ue,y,0)||2&r&&y!==Ee){if(ja(r))return!1;l=!0}}}}else{if(!l&&!ja(r)&&!ja(p))return!1;if(l&&ja(p))continue;l=!1,r=p|1&r}}return ja(r)||l}function ja(n){return 0==(1&n)}function Ou(n,e,t,r){if(null===e)return-1;let o=0;if(r||!t){let a=!1;for(;o<e.length;){const l=e[o];if(l===n)return o;if(3===l||6===l)a=!0;else{if(1===l||2===l){let d=e[++o];for(;"string"==typeof d;)d=e[++o];continue}if(4===l)break;if(0===l){o+=4;continue}}o+=a?1:2}return-1}return function hm(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){const r=n[t];if("number"==typeof r)return-1;if(r===e)return t;t++}return-1}(e,n)}function Va(n,e,t=!1){for(let r=0;r<e.length;r++)if(os(n,e[r],t))return!0;return!1}function ih(n,e){e:for(let t=0;t<e.length;t++){const r=e[t];if(n.length===r.length){for(let o=0;o<n.length;o++)if(n[o]!==r[o])continue e;return!0}}return!1}function Pv(n,e){return n?":not("+e.trim()+")":e}function wc(n){let e=n[0],t=1,r=2,o="",a=!1;for(;t<n.length;){let l=n[t];if("string"==typeof l)if(2&r){const d=n[++t];o+="["+l+(d.length>0?'="'+d+'"':"")+"]"}else 8&r?o+="."+l:4&r&&(o+=" "+l);else""!==o&&!ja(l)&&(e+=Pv(a,o),o=""),r=l,a=a||!ja(r);t++}return""!==o&&(e+=Pv(a,o)),e}function Xc(n){return Qc(()=>{const e=Ha(n),t={...e,decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Rp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Fa.Emulated,styles:n.styles||xr,_:null,schemas:n.schemas||null,tView:null,id:""};Bv(t);const r=n.dependencies;return t.directiveDefs=$d(r,!1),t.pipeDefs=$d(r,!0),t.id=function pE(n){let e=0;const t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(const o of t)e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}(t),t})}function kv(n){return yr(n)||bi(n)}function oh(n){return null!==n}function sa(n){return Qc(()=>({type:n.type,bootstrap:n.bootstrap||xr,declarations:n.declarations||xr,imports:n.imports||xr,exports:n.exports||xr,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Lv(n,e){if(null==n)return yc;const t={};for(const r in n)if(n.hasOwnProperty(r)){let o=n[r],a=o;Array.isArray(o)&&(a=o[1],o=o[0]),t[o]=r,e&&(e[o]=a)}return t}function fn(n){return Qc(()=>{const e=Ha(n);return Bv(e),e})}function yr(n){return n[Op]||null}function bi(n){return n[nh]||null}function hi(n){return n[fm]||null}function Xi(n,e){const t=n[Ru]||null;if(!t&&!0===e)throw new Error(`Type ${Ur(n)} does not have '\u0275mod' property.`);return t}function Ha(n){const e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||yc,exportAs:n.exportAs||null,standalone:!0===n.standalone,signals:!0===n.signals,selectors:n.selectors||xr,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Lv(n.inputs,e),outputs:Lv(n.outputs)}}function Bv(n){n.features?.forEach(e=>e(n))}function $d(n,e){if(!n)return null;const t=e?hi:kv;return()=>("function"==typeof n?n():n).map(r=>t(r)).filter(oh)}const ci=0,Wt=1,Gn=2,pi=3,ss=4,sh=5,bo=6,bc=7,Li=8,Mu=9,ah=10,Zn=11,Mp=12,gE=13,ch=14,Bi=15,Vd=16,lh=17,el=18,uh=19,mE=20,Nu=21,Fl=22,Np=23,tl=24,ir=25,pm=1,Fv=2,_c=7,Ul=9,eo=11;function as(n){return Array.isArray(n)&&"object"==typeof n[pm]}function Ai(n){return Array.isArray(n)&&!0===n[pm]}function Is(n){return 0!=(4&n.flags)}function Pu(n){return n.componentOffset>-1}function ku(n){return 1==(1&n.flags)}function _o(n){return!!n.template}function gm(n){return 0!=(512&n[Gn])}function Lu(n,e){return n.hasOwnProperty(Qi)?n[Qi]:null}let Si=null,kp=!1;function Ii(n){const e=Si;return Si=n,e}const jo={version:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{}};function mm(n){if(!Za(n)||n.dirty){if(!n.producerMustRecompute(n)&&!mh(n))return void(n.dirty=!1);n.producerRecomputeValue(n),n.dirty=!1}}function Lp(n){n.dirty=!0,function zd(n){if(void 0===n.liveConsumerNode)return;const e=kp;kp=!0;try{for(const t of n.liveConsumerNode)t.dirty||Lp(t)}finally{kp=e}}(n),n.consumerMarkedDirty?.(n)}function jl(n){return n&&(n.nextProducerIndex=0),Ii(n)}function vm(n,e){if(Ii(e),n&&void 0!==n.producerNode&&void 0!==n.producerIndexOfThis&&void 0!==n.producerLastReadVersion){if(Za(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Bu(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function mh(n){Wd(n);for(let e=0;e<n.producerNode.length;e++){const t=n.producerNode[e],r=n.producerLastReadVersion[e];if(r!==t.version||(mm(t),r!==t.version))return!0}return!1}function Vl(n){if(Wd(n),Za(n))for(let e=0;e<n.producerNode.length;e++)Bu(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Bu(n,e){if(function Gv(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}(n),Wd(n),1===n.liveConsumerNode.length)for(let r=0;r<n.producerNode.length;r++)Bu(n.producerNode[r],n.producerIndexOfThis[r]);const t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){const r=n.liveConsumerIndexOfThis[e],o=n.liveConsumerNode[e];Wd(o),o.producerIndexOfThis[r]=e}}function Za(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Wd(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}let zl=null;const Yv=()=>{},Fp=(()=>({...jo,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:n=>{n.schedule(n.ref)},hasRun:!1,cleanupFn:Yv}))();class xE{constructor(e,t,r){this.previousValue=e,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}}function Eo(){return Fu}function Fu(n){return n.type.prototype.ngOnChanges&&(n.setInput=AE),il}function il(){const n=Zl(this),e=n?.current;if(e){const t=n.previous;if(t===yc)n.previous=e;else for(let r in e)t[r]=e[r];n.current=null,this.ngOnChanges(e)}}function AE(n,e,t,r){const o=this.declaredInputs[t],a=Zl(n)||function SE(n,e){return n[vh]=e}(n,{previous:yc,current:null}),l=a.current||(a.current={}),d=a.previous,p=d[o];l[o]=new xE(p&&p.currentValue,e,d===yc),n[r]=e}Eo.ngInherit=!0;const vh="__ngSimpleChanges__";function Zl(n){return n[vh]||null}const Cc=function(n,e,t){};function Or(n){for(;Array.isArray(n);)n=n[ci];return n}function $u(n,e){return Or(e[n])}function Zi(n,e){return Or(e[n.index])}function Kd(n,e){return n.data[e]}function Rs(n,e){const t=e[n];return as(t)?t:t[ci]}function xc(n,e){return null==e?null:n[e]}function cs(n){n[lh]=0}function No(n){1024&n[Gn]||(n[Gn]|=1024,sl(n,1))}function Jv(n){1024&n[Gn]&&(n[Gn]&=-1025,sl(n,-1))}function sl(n,e){let t=n[pi];if(null===t)return;t[sh]+=e;let r=t;for(t=t[pi];null!==t&&(1===e&&1===r[sh]||-1===e&&0===r[sh]);)t[sh]+=e,r=t,t=t[pi]}const Rn={lFrame:zp(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function jp(){return Rn.bindingsEnabled}function qa(){return null!==Rn.skipHydrationRootTNode}function Tt(){return Rn.lFrame.lView}function vr(){return Rn.lFrame.tView}function Vo(n){return Rn.lFrame.contextLView=n,n[Li]}function fo(n){return Rn.lFrame.contextLView=null,n}function Co(){let n=Vp();for(;null!==n&&64===n.type;)n=n.parent;return n}function Vp(){return Rn.lFrame.currentTNode}function Sc(n,e){const t=Rn.lFrame;t.currentTNode=n,t.isParent=e}function cl(){return Rn.lFrame.isParent}function ua(){Rn.lFrame.isParent=!1}function Ho(){const n=Rn.lFrame;let e=n.bindingRootIndex;return-1===e&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function ul(){return Rn.lFrame.bindingIndex++}function Gl(n,e){const t=Rn.lFrame;t.bindingIndex=t.bindingRootIndex=n,ls(e)}function ls(n){Rn.lFrame.currentDirectiveIndex=n}function Xv(){return Rn.lFrame.currentQueryIndex}function Hp(n){Rn.lFrame.currentQueryIndex=n}function wh(n){const e=n[Wt];return 2===e.type?e.declTNode:1===e.type?n[bo]:null}function ew(n,e,t){if(t&gt.SkipSelf){let o=e,a=n;for(;!(o=o.parent,null!==o||t&gt.Host||(o=wh(a),null===o||(a=a[ch],10&o.type))););if(null===o)return!1;e=o,n=a}const r=Rn.lFrame=tw();return r.currentTNode=e,r.lView=n,!0}function Cm(n){const e=tw(),t=n[Wt];Rn.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function tw(){const n=Rn.lFrame,e=null===n?null:n.child;return null===e?zp(n):e}function zp(n){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return null!==n&&(n.child=e),e}function Ce(){const n=Rn.lFrame;return Rn.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}const U=Ce;function me(){const n=Ce();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function pe(){return Rn.lFrame.selectedIndex}function ze(n){Rn.lFrame.selectedIndex=n}function Je(){const n=Rn.lFrame;return Kd(n.tView,n.selectedIndex)}let fa=!0;function Ms(){return fa}function si(n){fa=n}function ho(n,e){for(let t=e.directiveStart,r=e.directiveEnd;t<r;t++){const a=n.data[t].type.prototype,{ngAfterContentInit:l,ngAfterContentChecked:d,ngAfterViewInit:p,ngAfterViewChecked:y,ngOnDestroy:O}=a;l&&(n.contentHooks??=[]).push(-t,l),d&&((n.contentHooks??=[]).push(t,d),(n.contentCheckHooks??=[]).push(t,d)),p&&(n.viewHooks??=[]).push(-t,p),y&&((n.viewHooks??=[]).push(t,y),(n.viewCheckHooks??=[]).push(t,y)),null!=O&&(n.destroyHooks??=[]).push(t,O)}}function jr(n,e,t){Ka(n,e,3,t)}function po(n,e,t,r){(3&n[Gn])===t&&Ka(n,e,t,r)}function Fi(n,e){let t=n[Gn];(3&t)===e&&(t&=8191,t+=1,n[Gn]=t)}function Ka(n,e,t,r){const a=r??-1,l=e.length-1;let d=0;for(let p=void 0!==r?65535&n[lh]:0;p<l;p++)if("number"==typeof e[p+1]){if(d=e[p],null!=r&&d>=r)break}else e[p]<0&&(n[lh]+=65536),(d<a||-1==a)&&(TH(n,t,e,p),n[lh]=(4294901760&n[lh])+p+2),p++}function yI(n,e){Cc(4,n,e);const t=Ii(null);try{e.call(n)}finally{Ii(t),Cc(5,n,e)}}function TH(n,e,t,r){const o=t[r]<0,a=t[r+1],d=n[o?-t[r]:t[r]];o?n[Gn]>>13<n[lh]>>16&&(3&n[Gn])===e&&(n[Gn]+=8192,yI(d,a)):yI(d,a)}const Wp=-1;class xm{constructor(e,t,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=r}}function BE(n){return n!==Wp}function Am(n){return 32767&n}function Sm(n,e){let t=function NH(n){return n>>16}(n),r=e;for(;t>0;)r=r[ch],t--;return r}let FE=!0;function nw(n){const e=FE;return FE=n,e}const vI=255,wI=5;let PH=0;const ql={};function rw(n,e){const t=bI(n,e);if(-1!==t)return t;const r=e[Wt];r.firstCreatePass&&(n.injectorIndex=e.length,UE(r.data,n),UE(e,null),UE(r.blueprint,null));const o=iw(n,e),a=n.injectorIndex;if(BE(o)){const l=Am(o),d=Sm(o,e),p=d[Wt].data;for(let y=0;y<8;y++)e[a+y]=d[l+y]|p[l+y]}return e[a+8]=o,a}function UE(n,e){n.push(0,0,0,0,0,0,0,0,e)}function bI(n,e){return-1===n.injectorIndex||n.parent&&n.parent.injectorIndex===n.injectorIndex||null===e[n.injectorIndex+8]?-1:n.injectorIndex}function iw(n,e){if(n.parent&&-1!==n.parent.injectorIndex)return n.parent.injectorIndex;let t=0,r=null,o=e;for(;null!==o;){if(r=II(o),null===r)return Wp;if(t++,o=o[ch],-1!==r.injectorIndex)return r.injectorIndex|t<<16}return Wp}function $E(n,e,t){!function kH(n,e,t){let r;"string"==typeof t?r=t.charCodeAt(0)||0:t.hasOwnProperty(Ar)&&(r=t[Ar]),null==r&&(r=t[Ar]=PH++);const o=r&vI;e.data[n+(o>>wI)]|=1<<o}(n,e,t)}function _I(n,e,t){if(t&gt.Optional||void 0!==n)return n;Yf()}function EI(n,e,t,r){if(t&gt.Optional&&void 0===r&&(r=null),!(t&(gt.Self|gt.Host))){const o=n[Mu],a=rr(void 0);try{return o?o.get(e,r,t&gt.Optional):Bn(e,r,t&gt.Optional)}finally{rr(a)}}return _I(r,0,t)}function CI(n,e,t,r=gt.Default,o){if(null!==n){if(2048&e[Gn]&&!(r&gt.Self)){const l=function jH(n,e,t,r,o){let a=n,l=e;for(;null!==a&&null!==l&&2048&l[Gn]&&!(512&l[Gn]);){const d=xI(a,l,t,r|gt.Self,ql);if(d!==ql)return d;let p=a.parent;if(!p){const y=l[mE];if(y){const O=y.get(t,ql,r);if(O!==ql)return O}p=II(l),l=l[ch]}a=p}return o}(n,e,t,r,ql);if(l!==ql)return l}const a=xI(n,e,t,r,ql);if(a!==ql)return a}return EI(e,t,r,o)}function xI(n,e,t,r,o){const a=function FH(n){if("string"==typeof n)return n.charCodeAt(0)||0;const e=n.hasOwnProperty(Ar)?n[Ar]:void 0;return"number"==typeof e?e>=0?e&vI:$H:e}(t);if("function"==typeof a){if(!ew(e,n,r))return r&gt.Host?_I(o,0,r):EI(e,t,r,o);try{let l;if(l=a(r),null!=l||r&gt.Optional)return l;Yf()}finally{U()}}else if("number"==typeof a){let l=null,d=bI(n,e),p=Wp,y=r&gt.Host?e[Bi][bo]:null;for((-1===d||r&gt.SkipSelf)&&(p=-1===d?iw(n,e):e[d+8],p!==Wp&&SI(r,!1)?(l=e[Wt],d=Am(p),e=Sm(p,e)):d=-1);-1!==d;){const O=e[Wt];if(AI(a,d,O.data)){const H=BH(d,e,t,l,r,y);if(H!==ql)return H}p=e[d+8],p!==Wp&&SI(r,e[Wt].data[d+8]===y)&&AI(a,d,e)?(l=O,d=Am(p),e=Sm(p,e)):d=-1}}return o}function BH(n,e,t,r,o,a){const l=e[Wt],d=l.data[n+8],O=ow(d,l,t,null==r?Pu(d)&&FE:r!=l&&0!=(3&d.type),o&gt.Host&&a===d);return null!==O?bh(e,l,O,d):ql}function ow(n,e,t,r,o){const a=n.providerIndexes,l=e.data,d=1048575&a,p=n.directiveStart,O=a>>20,Ee=o?d+O:n.directiveEnd;for(let Ue=r?d:d+O;Ue<Ee;Ue++){const He=l[Ue];if(Ue<p&&t===He||Ue>=p&&He.type===t)return Ue}if(o){const Ue=l[p];if(Ue&&_o(Ue)&&Ue.type===t)return p}return null}function bh(n,e,t,r){let o=n[t];const a=e.data;if(function RH(n){return n instanceof xm}(o)){const l=o;l.resolving&&function rm(n,e){const t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Bt(-200,`Circular dependency in DI detected for ${n}${t}`)}(function _r(n){return"function"==typeof n?n.name||n.toString():"object"==typeof n&&null!=n&&"function"==typeof n.type?n.type.name||n.type.toString():Pn(n)}(a[t]));const d=nw(l.canSeeViewProviders);l.resolving=!0;const y=l.injectImpl?rr(l.injectImpl):null;ew(n,r,gt.Default);try{o=n[t]=l.factory(void 0,a,n,r),e.firstCreatePass&&t>=r.directiveStart&&function ti(n,e,t){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:a}=e.type.prototype;if(r){const l=Fu(e);(t.preOrderHooks??=[]).push(n,l),(t.preOrderCheckHooks??=[]).push(n,l)}o&&(t.preOrderHooks??=[]).push(0-n,o),a&&((t.preOrderHooks??=[]).push(n,a),(t.preOrderCheckHooks??=[]).push(n,a))}(t,a[t],e)}finally{null!==y&&rr(y),nw(d),l.resolving=!1,U()}}return o}function AI(n,e,t){return!!(t[e+(n>>wI)]&1<<n)}function SI(n,e){return!(n&gt.Self||n&gt.Host&&e)}class Ns{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,r){return CI(this._tNode,this._lView,e,Tp(r),t)}}function $H(){return new Ns(Co(),Tt())}function Wo(n){return Qc(()=>{const e=n.prototype.constructor,t=e[Qi]||jE(e),r=Object.prototype;let o=Object.getPrototypeOf(n.prototype).constructor;for(;o&&o!==r;){const a=o[Qi]||jE(o);if(a&&a!==t)return a;o=Object.getPrototypeOf(o)}return a=>new a})}function jE(n){return qc(n)?()=>{const e=jE(En(n));return e&&e()}:Lu(n)}function II(n){const e=n[Wt],t=e.type;return 2===t?e.declTNode:1===t?n[bo]:null}function Zp(n){return function LH(n,e){if("class"===e)return n.classes;if("style"===e)return n.styles;const t=n.attrs;if(t){const r=t.length;let o=0;for(;o<r;){const a=t[o];if(Rv(a))break;if(0===a)o+=2;else if("number"==typeof a)for(o++;o<r&&"string"==typeof t[o];)o++;else{if(a===e)return t[o+1];o+=2}}}return null}(Co(),n)}const qp="__parameters__";function Yp(n,e,t){return Qc(()=>{const r=function VE(n){return function(...t){if(n){const r=n(...t);for(const o in r)this[o]=r[o]}}}(e);function o(...a){if(this instanceof o)return r.apply(this,a),this;const l=new o(...a);return d.annotation=l,d;function d(p,y,O){const H=p.hasOwnProperty(qp)?p[qp]:Object.defineProperty(p,qp,{value:[]})[qp];for(;H.length<=O;)H.push(null);return(H[O]=H[O]||[]).push(l),p}}return t&&(o.prototype=Object.create(t.prototype)),o.prototype.ngMetadataName=n,o.annotationCls=o,o})}function Qp(n,e){n.forEach(t=>Array.isArray(t)?Qp(t,e):e(t))}function TI(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function sw(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Tm(n,e){const t=[];for(let r=0;r<n;r++)t.push(e);return t}function Ya(n,e,t){let r=Xp(n,e);return r>=0?n[1|r]=t:(r=~r,function qH(n,e,t,r){let o=n.length;if(o==e)n.push(t,r);else if(1===o)n.push(r,n[0]),n[0]=t;else{for(o--,n.push(n[o-1],n[o]);o>e;)n[o]=n[o-2],o--;n[e]=t,n[e+1]=r}}(n,r,e,t)),r}function HE(n,e){const t=Xp(n,e);if(t>=0)return n[1|t]}function Xp(n,e){return function RI(n,e,t){let r=0,o=n.length>>t;for(;o!==r;){const a=r+(o-r>>1),l=n[a<<t];if(e===l)return a<<t;l>e?o=a:r=a+1}return~(o<<t)}(n,e,1)}const cw=th(Yp("Optional"),8),lw=th(Yp("SkipSelf"),4);function pw(n){return 128==(128&n.flags)}var nf=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(nf||{});const gz=/^>|^->|<!--|-->|--!>|<!-$/g,mz=/(<|>)/g,yz="\u200b$1\u200b";const qE=new Map;let vz=0;const YE="__ngContext__";function us(n,e){as(e)?(n[YE]=e[uh],function bz(n){qE.set(n[uh],n)}(e)):n[YE]=e}let JE;function QE(n,e){return JE(n,e)}function Mm(n){const e=n[pi];return Ai(e)?e[pi]:e}function YI(n){return QI(n[Mp])}function JI(n){return QI(n[ss])}function QI(n){for(;null!==n&&!Ai(n);)n=n[ss];return n}function n0(n,e,t,r,o){if(null!=r){let a,l=!1;Ai(r)?a=r:as(r)&&(l=!0,r=r[ci]);const d=Or(r);0===n&&null!==t?null==o?nD(e,t,d):_h(e,t,d,o||null,!0):1===n&&null!==t?_h(e,t,d,o||null,!0):2===n?function _w(n,e,t){const r=ww(n,e);r&&function Uz(n,e,t,r){n.removeChild(e,t,r)}(n,r,e,t)}(e,d,l):3===n&&e.destroyNode(d),null!=a&&function Vz(n,e,t,r,o){const a=t[_c];a!==Or(t)&&n0(e,n,r,a,o);for(let d=eo;d<t.length;d++){const p=t[d];Pm(p[Wt],p,n,e,r,a)}}(e,n,a,t,o)}}function XE(n,e){return n.createComment(function VI(n){return n.replace(gz,e=>e.replace(mz,yz))}(e))}function yw(n,e,t){return n.createElement(e,t)}function eD(n,e){const t=n[Ul],r=t.indexOf(e);Jv(e),t.splice(r,1)}function vw(n,e){if(n.length<=eo)return;const t=eo+e,r=n[t];if(r){const o=r[Vd];null!==o&&o!==n&&eD(o,r),e>0&&(n[t-1][ss]=r[ss]);const a=sw(n,eo+e);!function Oz(n,e){Pm(n,e,e[Zn],2,null,null),e[ci]=null,e[bo]=null}(r[Wt],r);const l=a[el];null!==l&&l.detachView(a[Wt]),r[pi]=null,r[ss]=null,r[Gn]&=-129}return r}function eC(n,e){if(!(256&e[Gn])){const t=e[Zn];e[Np]&&Vl(e[Np]),e[tl]&&Vl(e[tl]),t.destroyNode&&Pm(n,e,t,3,null,null),function Pz(n){let e=n[Mp];if(!e)return tC(n[Wt],n);for(;e;){let t=null;if(as(e))t=e[Mp];else{const r=e[eo];r&&(t=r)}if(!t){for(;e&&!e[ss]&&e!==n;)as(e)&&tC(e[Wt],e),e=e[pi];null===e&&(e=n),as(e)&&tC(e[Wt],e),t=e&&e[ss]}e=t}}(e)}}function tC(n,e){if(!(256&e[Gn])){e[Gn]&=-129,e[Gn]|=256,function Fz(n,e){let t;if(null!=n&&null!=(t=n.destroyHooks))for(let r=0;r<t.length;r+=2){const o=e[t[r]];if(!(o instanceof xm)){const a=t[r+1];if(Array.isArray(a))for(let l=0;l<a.length;l+=2){const d=o[a[l]],p=a[l+1];Cc(4,d,p);try{p.call(d)}finally{Cc(5,d,p)}}else{Cc(4,o,a);try{a.call(o)}finally{Cc(5,o,a)}}}}}(n,e),function Bz(n,e){const t=n.cleanup,r=e[bc];if(null!==t)for(let a=0;a<t.length-1;a+=2)if("string"==typeof t[a]){const l=t[a+3];l>=0?r[l]():r[-l].unsubscribe(),a+=2}else t[a].call(r[t[a+1]]);null!==r&&(e[bc]=null);const o=e[Nu];if(null!==o){e[Nu]=null;for(let a=0;a<o.length;a++)(0,o[a])()}}(n,e),1===e[Wt].type&&e[Zn].destroy();const t=e[Vd];if(null!==t&&Ai(e[pi])){t!==e[pi]&&eD(t,e);const r=e[el];null!==r&&r.detachView(n)}!function _z(n){qE.delete(n[uh])}(e)}}function nC(n,e,t){return function tD(n,e,t){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return t[ci];{const{componentOffset:o}=r;if(o>-1){const{encapsulation:a}=n.data[r.directiveStart+o];if(a===Fa.None||a===Fa.Emulated)return null}return Zi(r,t)}}(n,e.parent,t)}function _h(n,e,t,r,o){n.insertBefore(e,t,r,o)}function nD(n,e,t){n.appendChild(e,t)}function rD(n,e,t,r,o){null!==r?_h(n,e,t,r,o):nD(n,e,t)}function ww(n,e){return n.parentNode(e)}function iD(n,e,t){return sD(n,e,t)}let rC,aC,Cw,sD=function oD(n,e,t){return 40&n.type?Zi(n,t):null};function bw(n,e,t,r){const o=nC(n,r,e),a=e[Zn],d=iD(r.parent||e[bo],r,e);if(null!=o)if(Array.isArray(t))for(let p=0;p<t.length;p++)rD(a,o,t[p],d,!1);else rD(a,o,t,d,!1);void 0!==rC&&rC(a,r,e,t,o)}function Nm(n,e){if(null!==e){const t=e.type;if(3&t)return Zi(e,n);if(4&t)return iC(-1,n[e.index]);if(8&t){const r=e.child;if(null!==r)return Nm(n,r);{const o=n[e.index];return Ai(o)?iC(-1,o):Or(o)}}if(32&t)return QE(e,n)()||Or(n[e.index]);{const r=cD(n,e);return null!==r?Array.isArray(r)?r[0]:Nm(Mm(n[Bi]),r):Nm(n,e.next)}}return null}function cD(n,e){return null!==e?n[Bi][bo].projection[e.projection]:null}function iC(n,e){const t=eo+n+1;if(t<e.length){const r=e[t],o=r[Wt].firstChild;if(null!==o)return Nm(r,o)}return e[_c]}function oC(n,e,t,r,o,a,l){for(;null!=t;){const d=r[t.index],p=t.type;if(l&&0===e&&(d&&us(Or(d),r),t.flags|=2),32!=(32&t.flags))if(8&p)oC(n,e,t.child,r,o,a,!1),n0(e,n,o,d,a);else if(32&p){const y=QE(t,r);let O;for(;O=y();)n0(e,n,o,O,a);n0(e,n,o,d,a)}else 16&p?uD(n,e,r,t,o,a):n0(e,n,o,d,a);t=l?t.projectionNext:t.next}}function Pm(n,e,t,r,o,a){oC(t,r,n.firstChild,e,o,a,!1)}function uD(n,e,t,r,o,a){const l=t[Bi],p=l[bo].projection[r.projection];if(Array.isArray(p))for(let y=0;y<p.length;y++)n0(e,n,o,p[y],a);else{let y=p;const O=l[pi];pw(r)&&(y.flags|=128),oC(n,e,y,O,o,a,!0)}}function dD(n,e,t){""===t?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function fD(n,e,t){const{mergedAttrs:r,classes:o,styles:a}=t;null!==r&&uo(n,e,r),null!==o&&dD(n,e,o),null!==a&&function zz(n,e,t){n.setAttribute(e,"style",t)}(n,e,a)}function gD(n){return function cC(){if(void 0===Cw&&(Cw=null,zn.trustedTypes))try{Cw=zn.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Cw}()?.createScriptURL(n)||n}class mD{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${La})`}}function rf(n){return n instanceof mD?n.changingThisBreaksApplicationSecurity:n}function km(n,e){const t=function eW(n){return n instanceof mD&&n.getTypeName()||null}(n);if(null!=t&&t!==e){if("ResourceURL"===t&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${La})`)}return t===e}const iW=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;var s0=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(s0||{});function CD(n){const e=Bm();return e?e.sanitize(s0.URL,n)||"":km(n,"URL")?rf(n):function lC(n){return(n=String(n)).match(iW)?n:"unsafe:"+n}(Pn(n))}function xD(n){const e=Bm();if(e)return gD(e.sanitize(s0.RESOURCE_URL,n)||"");if(km(n,"ResourceURL"))return gD(rf(n));throw new Bt(904,!1)}function Bm(){const n=Tt();return n&&n[ah].sanitizer}const Fm=new qt("ENVIRONMENT_INITIALIZER"),SD=new qt("INJECTOR",-1),ID=new qt("INJECTOR_DEF_TYPES");class hC{get(e,t=eh){if(t===eh){const r=new Error(`NullInjectorError: No provider for ${Ur(e)}!`);throw r.name="NullInjectorError",r}return t}}function yW(...n){return{\u0275providers:TD(0,n),\u0275fromNgModule:!0}}function TD(n,...e){const t=[],r=new Set;let o;const a=l=>{t.push(l)};return Qp(e,l=>{const d=l;Aw(d,a,[],r)&&(o||=[],o.push(d))}),void 0!==o&&RD(o,a),t}function RD(n,e){for(let t=0;t<n.length;t++){const{ngModule:r,providers:o}=n[t];pC(o,a=>{e(a,r)})}}function Aw(n,e,t,r){if(!(n=En(n)))return!1;let o=null,a=Iu(n);const l=!a&&yr(n);if(a||l){if(l&&!l.standalone)return!1;o=n}else{const p=n.ngModule;if(a=Iu(p),!a)return!1;o=p}const d=r.has(o);if(l){if(d)return!1;if(r.add(o),l.dependencies){const p="function"==typeof l.dependencies?l.dependencies():l.dependencies;for(const y of p)Aw(y,e,t,r)}}else{if(!a)return!1;{if(null!=a.imports&&!d){let y;r.add(o);try{Qp(a.imports,O=>{Aw(O,e,t,r)&&(y||=[],y.push(O))})}finally{}void 0!==y&&RD(y,e)}if(!d){const y=Lu(o)||(()=>new o);e({provide:o,useFactory:y,deps:xr},o),e({provide:ID,useValue:o,multi:!0},o),e({provide:Fm,useValue:()=>Dn(o),multi:!0},o)}const p=a.providers;if(null!=p&&!d){const y=n;pC(p,O=>{e(O,y)})}}}return o!==n&&void 0!==n.providers}function pC(n,e){for(let t of n)Kc(t)&&(t=t.\u0275providers),Array.isArray(t)?pC(t,e):e(t)}const vW=Yn({provide:String,useValue:Yn});function gC(n){return null!==n&&"object"==typeof n&&vW in n}function Eh(n){return"function"==typeof n}const mC=new qt("Set Injector scope."),Sw={},bW={};let yC;function Iw(){return void 0===yC&&(yC=new hC),yC}class Dc{}class a0 extends Dc{get destroyed(){return this._destroyed}constructor(e,t,r,o){super(),this.parent=t,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,wC(e,l=>this.processProvider(l)),this.records.set(SD,c0(void 0,this)),o.has("environment")&&this.records.set(Dc,c0(void 0,this));const a=this.records.get(mC);null!=a&&"string"==typeof a.value&&this.scopes.add(a.value),this.injectorDefTypes=new Set(this.get(ID.multi,xr,gt.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();const e=this._onDestroyHooks;this._onDestroyHooks=[];for(const t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();const t=Bl(this),r=rr(void 0);try{return e()}finally{Bl(t),rr(r)}}get(e,t=eh,r=gt.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Tv))return e[Tv](this);r=Tp(r);const a=Bl(this),l=rr(void 0);try{if(!(r&gt.SkipSelf)){let p=this.records.get(e);if(void 0===p){const y=function AW(n){return"function"==typeof n||"object"==typeof n&&n instanceof qt}(e)&&Au(e);p=y&&this.injectableDefInScope(y)?c0(vC(e),Sw):null,this.records.set(e,p)}if(null!=p)return this.hydrate(e,p)}return(r&gt.Self?Iw():this.parent).get(e,t=r&gt.Optional&&t===eh?null:t)}catch(d){if("NullInjectorError"===d.name){if((d[Du]=d[Du]||[]).unshift(Ur(e)),a)throw d;return function cE(n,e,t,r){const o=n[Du];throw e[Iv]&&o.unshift(e[Iv]),n.message=function lE(n,e,t,r=null){n=n&&"\n"===n.charAt(0)&&"\u0275"==n.charAt(1)?n.slice(2):n;let o=Ur(e);if(Array.isArray(e))o=e.map(Ur).join(" -> ");else if("object"==typeof e){let a=[];for(let l in e)if(e.hasOwnProperty(l)){let d=e[l];a.push(l+":"+("string"==typeof d?JSON.stringify(d):Ur(d)))}o=`{${a.join(", ")}}`}return`${t}${r?"("+r+")":""}[${o}]: ${n.replace(rE,"\n  ")}`}("\n"+n.message,o,t,r),n.ngTokenPath=o,n[Du]=null,n}(d,e,"R3InjectorError",this.source)}throw d}finally{rr(l),Bl(a)}}resolveInjectorInitializers(){const e=Bl(this),t=rr(void 0);try{const o=this.get(Fm.multi,xr,gt.Self);for(const a of o)a()}finally{Bl(e),rr(t)}}toString(){const e=[],t=this.records;for(const r of t.keys())e.push(Ur(r));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Bt(205,!1)}processProvider(e){let t=Eh(e=En(e))?e:En(e&&e.provide);const r=function EW(n){return gC(n)?c0(void 0,n.useValue):c0(ND(n),Sw)}(e);if(Eh(e)||!0!==e.multi)this.records.get(t);else{let o=this.records.get(t);o||(o=c0(void 0,Sw,!0),o.factory=()=>dm(o.multi),this.records.set(t,o)),t=e,o.multi.push(e)}this.records.set(t,r)}hydrate(e,t){return t.value===Sw&&(t.value=bW,t.value=t.factory()),"object"==typeof t.value&&t.value&&function xW(n){return null!==n&&"object"==typeof n&&"function"==typeof n.ngOnDestroy}(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;const t=En(e.providedIn);return"string"==typeof t?"any"===t||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){const t=this._onDestroyHooks.indexOf(e);-1!==t&&this._onDestroyHooks.splice(t,1)}}function vC(n){const e=Au(n),t=null!==e?e.factory:Lu(n);if(null!==t)return t;if(n instanceof qt)throw new Bt(204,!1);if(n instanceof Function)return function _W(n){const e=n.length;if(e>0)throw Tm(e,"?"),new Bt(204,!1);const t=function Su(n){return n&&(n[kd]||n[Dp])||null}(n);return null!==t?()=>t.factory(n):()=>new n}(n);throw new Bt(204,!1)}function ND(n,e,t){let r;if(Eh(n)){const o=En(n);return Lu(o)||vC(o)}if(gC(n))r=()=>En(n.useValue);else if(function MD(n){return!(!n||!n.useFactory)}(n))r=()=>n.useFactory(...dm(n.deps||[]));else if(function OD(n){return!(!n||!n.useExisting)}(n))r=()=>Dn(En(n.useExisting));else{const o=En(n&&(n.useClass||n.provide));if(!function CW(n){return!!n.deps}(n))return Lu(o)||vC(o);r=()=>new o(...dm(n.deps))}return r}function c0(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function wC(n,e){for(const t of n)Array.isArray(t)?wC(t,e):t&&Kc(t)?wC(t.\u0275providers,e):e(t)}const Dw=new qt("AppId",{providedIn:"root",factory:()=>SW}),SW="ng",PD=new qt("Platform Initializer"),l0=new qt("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),kD=new qt("CSP nonce",{providedIn:"root",factory:()=>function o0(){if(void 0!==aC)return aC;if(typeof document<"u")return document;throw new Bt(210,!1)}().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});let LD=(n,e,t)=>null;function IC(n,e,t=!1){return LD(n,e,t)}class LW{}class UD{}class FW{resolveComponentFactory(e){throw function BW(n){const e=Error(`No component factory found for ${Ur(n)}.`);return e.ngComponent=n,e}(e)}}let Pw=(()=>{class n{static#e=this.NULL=new FW}return n})();function UW(){return f0(Co(),Tt())}function f0(n,e){return new go(Zi(n,e))}let go=(()=>{class n{constructor(t){this.nativeElement=t}static#e=this.__NG_ELEMENT_ID__=UW}return n})();function $W(n){return n instanceof go?n.nativeElement:n}class jD{}let Kl=(()=>{class n{constructor(){this.destroyNode=null}static#e=this.__NG_ELEMENT_ID__=()=>function jW(){const n=Tt(),t=Rs(Co().index,n);return(as(t)?t:n)[Zn]}()}return n})(),VW=(()=>{class n{static#e=this.\u0275prov=vn({token:n,providedIn:"root",factory:()=>null})}return n})();class jm{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const HW=new jm("16.2.12"),RC={};function WD(n,e=null,t=null,r){const o=ZD(n,e,t,r);return o.resolveInjectorInitializers(),o}function ZD(n,e=null,t=null,r,o=new Set){const a=[t||xr,yW(n)];return r=r||("object"==typeof n?void 0:Ur(n)),new a0(a,e||Iw(),r||null,o)}let Ja=(()=>{class n{static#e=this.THROW_IF_NOT_FOUND=eh;static#t=this.NULL=new hC;static create(t,r){if(Array.isArray(t))return WD({name:""},r,t,"");{const o=t.name??"";return WD({name:o},t.parent,t.providers,o)}}static#n=this.\u0275prov=vn({token:n,providedIn:"any",factory:()=>Dn(SD)});static#r=this.__NG_ELEMENT_ID__=-1}return n})();function MC(n){return n.ngOriginalError}class Hu{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&MC(e);for(;t&&MC(t);)t=MC(t);return t||null}}function PC(n){return e=>{setTimeout(n,void 0,e)}}const gr=class YW extends z{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,r){let o=e,a=t||(()=>null),l=r;if(e&&"object"==typeof e){const p=e;o=p.next?.bind(p),a=p.error?.bind(p),l=p.complete?.bind(p)}this.__isAsync&&(a=PC(a),o&&(o=PC(o)),l&&(l=PC(l)));const d=super.subscribe({next:o,error:a,complete:l});return e instanceof ee&&e.add(d),d}};function qD(...n){}class li{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new gr(!1),this.onMicrotaskEmpty=new gr(!1),this.onStable=new gr(!1),this.onError=new gr(!1),typeof Zone>"u")throw new Bt(908,!1);Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&t,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function JW(){const n="function"==typeof zn.requestAnimationFrame;let e=zn[n?"requestAnimationFrame":"setTimeout"],t=zn[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r);const o=t[Zone.__symbol__("OriginalDelegate")];o&&(t=o)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function eZ(n){const e=()=>{!function XW(n){n.isCheckStableRunning||-1!==n.lastRequestAnimationFrameId||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(zn,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,LC(n),n.isCheckStableRunning=!0,kC(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),LC(n))}(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,r,o,a,l,d)=>{if(function nZ(n){return!(!Array.isArray(n)||1!==n.length)&&!0===n[0].data?.__ignore_ng_zone__}(d))return t.invokeTask(o,a,l,d);try{return KD(n),t.invokeTask(o,a,l,d)}finally{(n.shouldCoalesceEventChangeDetection&&"eventTask"===a.type||n.shouldCoalesceRunChangeDetection)&&e(),YD(n)}},onInvoke:(t,r,o,a,l,d,p)=>{try{return KD(n),t.invoke(o,a,l,d,p)}finally{n.shouldCoalesceRunChangeDetection&&e(),YD(n)}},onHasTask:(t,r,o,a)=>{t.hasTask(o,a),r===o&&("microTask"==a.change?(n._hasPendingMicrotasks=a.microTask,LC(n),kC(n)):"macroTask"==a.change&&(n.hasPendingMacrotasks=a.macroTask))},onHandleError:(t,r,o,a)=>(t.handleError(o,a),n.runOutsideAngular(()=>n.onError.emit(a)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!li.isInAngularZone())throw new Bt(909,!1)}static assertNotInAngularZone(){if(li.isInAngularZone())throw new Bt(909,!1)}run(e,t,r){return this._inner.run(e,t,r)}runTask(e,t,r,o){const a=this._inner,l=a.scheduleEventTask("NgZoneEvent: "+o,e,QW,qD,qD);try{return a.runTask(l,t,r)}finally{a.cancelTask(l)}}runGuarded(e,t,r){return this._inner.runGuarded(e,t,r)}runOutsideAngular(e){return this._outer.run(e)}}const QW={};function kC(n){if(0==n._nesting&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function LC(n){n.hasPendingMicrotasks=!!(n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&-1!==n.lastRequestAnimationFrameId)}function KD(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function YD(n){n._nesting--,kC(n)}class tZ{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new gr,this.onMicrotaskEmpty=new gr,this.onStable=new gr,this.onError=new gr}run(e,t,r){return e.apply(t,r)}runGuarded(e,t,r){return e.apply(t,r)}runOutsideAngular(e){return e()}runTask(e,t,r,o){return e.apply(t,r)}}const JD=new qt("",{providedIn:"root",factory:QD});function QD(){const n=an(li);let e=!0;return es(new xe(o=>{e=n.isStable&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks,n.runOutsideAngular(()=>{o.next(e),o.complete()})}),new xe(o=>{let a;n.runOutsideAngular(()=>{a=n.onStable.subscribe(()=>{li.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks&&(e=!0,o.next(!0))})})});const l=n.onUnstable.subscribe(()=>{li.assertInAngularZone(),e&&(e=!1,n.runOutsideAngular(()=>{o.next(!1)}))});return()=>{a.unsubscribe(),l.unsubscribe()}}).pipe(ra()))}function zu(n){return n instanceof Function?n():n}let BC=(()=>{class n{constructor(){this.renderDepth=0,this.handler=null}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){this.renderDepth--,0===this.renderDepth&&this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null}static#e=this.\u0275prov=vn({token:n,providedIn:"root",factory:()=>new n})}return n})();function Vm(n){for(;n;){n[Gn]|=64;const e=Mm(n);if(gm(n)&&!e)return n;n=e}return null}const rT=new qt("",{providedIn:"root",factory:()=>!1});let Lw=null;function aT(n,e){return n[e]??uT()}function cT(n,e){const t=uT();t.producerNode?.length&&(n[e]=Lw,t.lView=n,Lw=lT())}const fZ={...jo,consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Vm(n.lView)},lView:null};function lT(){return Object.create(fZ)}function uT(){return Lw??=lT(),Lw}const Jn={};function Wn(n){dT(vr(),Tt(),pe()+n,!1)}function dT(n,e,t,r){if(!r)if(3==(3&e[Gn])){const a=n.preOrderCheckHooks;null!==a&&jr(e,a,t)}else{const a=n.preOrderHooks;null!==a&&po(e,a,0,t)}ze(t)}function Dt(n,e=gt.Default){const t=Tt();return null===t?Dn(n,e):CI(Co(),t,En(n),e)}function Bw(n,e,t,r,o,a,l,d,p,y,O){const H=e.blueprint.slice();return H[ci]=o,H[Gn]=140|r,(null!==y||n&&2048&n[Gn])&&(H[Gn]|=2048),cs(H),H[pi]=H[ch]=n,H[Li]=t,H[ah]=l||n&&n[ah],H[Zn]=d||n&&n[Zn],H[Mu]=p||n&&n[Mu]||null,H[bo]=a,H[uh]=function wz(){return vz++}(),H[Fl]=O,H[mE]=y,H[Bi]=2==e.type?n[Bi]:H,H}function g0(n,e,t,r,o){let a=n.data[e];if(null===a)a=function FC(n,e,t,r,o){const a=Vp(),l=cl(),p=n.data[e]=function bZ(n,e,t,r,o,a){let l=e?e.injectorIndex:-1,d=0;return qa()&&(d|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:l,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:d,providerIndexes:0,value:o,attrs:a,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,l?a:a&&a.parent,t,e,r,o);return null===n.firstChild&&(n.firstChild=p),null!==a&&(l?null==a.child&&null!==p.parent&&(a.child=p):null===a.next&&(a.next=p,p.prev=a)),p}(n,e,t,r,o),function PE(){return Rn.lFrame.inI18n}()&&(a.flags|=32);else if(64&a.type){a.type=t,a.value=r,a.attrs=o;const l=function Ac(){const n=Rn.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}();a.injectorIndex=null===l?-1:l.injectorIndex}return Sc(a,!0),a}function Hm(n,e,t,r){if(0===t)return-1;const o=e.length;for(let a=0;a<t;a++)e.push(r),n.blueprint.push(r),n.data.push(null);return o}function hT(n,e,t,r,o){const a=aT(e,Np),l=pe(),d=2&r;try{ze(-1),d&&e.length>ir&&dT(n,e,ir,!1),Cc(d?2:0,o);const y=d?a:null,O=jl(y);try{null!==y&&(y.dirty=!1),t(r,o)}finally{vm(y,O)}}finally{d&&null===e[Np]&&cT(e,Np),ze(l),Cc(d?3:1,o)}}function UC(n,e,t){if(Is(e)){const r=Ii(null);try{const a=e.directiveEnd;for(let l=e.directiveStart;l<a;l++){const d=n.data[l];d.contentQueries&&d.contentQueries(1,t[l],l)}}finally{Ii(r)}}}function $C(n,e,t){jp()&&(function IZ(n,e,t,r){const o=t.directiveStart,a=t.directiveEnd;Pu(t)&&function PZ(n,e,t){const r=Zi(e,n),o=pT(t);let l=16;t.signals?l=4096:t.onPush&&(l=64);const d=Fw(n,Bw(n,o,null,l,r,e,null,n[ah].rendererFactory.createRenderer(r,t),null,null,null));n[e.index]=d}(e,t,n.data[o+t.componentOffset]),n.firstCreatePass||rw(t,e),us(r,e);const l=t.initialInputs;for(let d=o;d<a;d++){const p=n.data[d],y=bh(e,n,d,t);us(y,e),null!==l&&kZ(0,d-o,y,p,0,l),_o(p)&&(Rs(t.index,e)[Li]=bh(e,n,d,t))}}(n,e,t,Zi(t,e)),64==(64&t.flags)&&wT(n,e,t))}function jC(n,e,t=Zi){const r=e.localNames;if(null!==r){let o=e.index+1;for(let a=0;a<r.length;a+=2){const l=r[a+1],d=-1===l?t(e,n):n[l];n[o++]=d}}}function pT(n){const e=n.tView;return null===e||e.incompleteFirstPass?n.tView=VC(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function VC(n,e,t,r,o,a,l,d,p,y,O){const H=ir+r,Ee=H+o,Ue=function pZ(n,e){const t=[];for(let r=0;r<e;r++)t.push(r<n?null:Jn);return t}(H,Ee),He="function"==typeof y?y():y;return Ue[Wt]={type:n,blueprint:Ue,template:t,queries:null,viewQuery:d,declTNode:e,data:Ue.slice().fill(null,H),bindingStartIndex:H,expandoStartIndex:Ee,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof a?a():a,pipeRegistry:"function"==typeof l?l():l,firstChild:null,schemas:p,consts:He,incompleteFirstPass:!1,ssrId:O}}let gT=n=>null;function mT(n,e,t,r){for(let o in n)if(n.hasOwnProperty(o)){t=null===t?{}:t;const a=n[o];null===r?yT(t,e,o,a):r.hasOwnProperty(o)&&yT(t,e,r[o],a)}return t}function yT(n,e,t,r){n.hasOwnProperty(t)?n[t].push(e,r):n[t]=[e,r]}function Qa(n,e,t,r,o,a,l,d){const p=Zi(e,t);let O,y=e.inputs;!d&&null!=y&&(O=y[r])?(GC(n,t,O,r,o),Pu(e)&&function CZ(n,e){const t=Rs(e,n);16&t[Gn]||(t[Gn]|=64)}(t,e.index)):3&e.type&&(r=function EZ(n){return"class"===n?"className":"for"===n?"htmlFor":"formaction"===n?"formAction":"innerHtml"===n?"innerHTML":"readonly"===n?"readOnly":"tabindex"===n?"tabIndex":n}(r),o=null!=l?l(o,e.value||"",r):o,a.setProperty(p,r,o))}function HC(n,e,t,r){if(jp()){const o=null===r?null:{"":-1},a=function TZ(n,e){const t=n.directiveRegistry;let r=null,o=null;if(t)for(let a=0;a<t.length;a++){const l=t[a];if(Va(e,l.selectors,!1))if(r||(r=[]),_o(l))if(null!==l.findHostDirectiveDefs){const d=[];o=o||new Map,l.findHostDirectiveDefs(l,d,o),r.unshift(...d,l),zC(n,e,d.length)}else r.unshift(l),zC(n,e,0);else o=o||new Map,l.findHostDirectiveDefs?.(l,r,o),r.push(l)}return null===r?null:[r,o]}(n,t);let l,d;null===a?l=d=null:[l,d]=a,null!==l&&vT(n,e,t,l,o,d),o&&function RZ(n,e,t){if(e){const r=n.localNames=[];for(let o=0;o<e.length;o+=2){const a=t[e[o+1]];if(null==a)throw new Bt(-301,!1);r.push(e[o],a)}}}(t,r,o)}t.mergedAttrs=Ua(t.mergedAttrs,t.attrs)}function vT(n,e,t,r,o,a){for(let y=0;y<r.length;y++)$E(rw(t,e),n,r[y].type);!function MZ(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}(t,n.data.length,r.length);for(let y=0;y<r.length;y++){const O=r[y];O.providersResolver&&O.providersResolver(O)}let l=!1,d=!1,p=Hm(n,e,r.length,null);for(let y=0;y<r.length;y++){const O=r[y];t.mergedAttrs=Ua(t.mergedAttrs,O.hostAttrs),NZ(n,t,e,p,O),OZ(p,O,o),null!==O.contentQueries&&(t.flags|=4),(null!==O.hostBindings||null!==O.hostAttrs||0!==O.hostVars)&&(t.flags|=64);const H=O.type.prototype;!l&&(H.ngOnChanges||H.ngOnInit||H.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!d&&(H.ngOnChanges||H.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),d=!0),p++}!function _Z(n,e,t){const o=e.directiveEnd,a=n.data,l=e.attrs,d=[];let p=null,y=null;for(let O=e.directiveStart;O<o;O++){const H=a[O],Ee=t?t.get(H):null,He=Ee?Ee.outputs:null;p=mT(H.inputs,O,p,Ee?Ee.inputs:null),y=mT(H.outputs,O,y,He);const Ge=null===p||null===l||Mv(e)?null:LZ(p,O,l);d.push(Ge)}null!==p&&(p.hasOwnProperty("class")&&(e.flags|=8),p.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=d,e.inputs=p,e.outputs=y}(n,t,a)}function wT(n,e,t){const r=t.directiveStart,o=t.directiveEnd,a=t.index,l=function kE(){return Rn.lFrame.currentDirectiveIndex}();try{ze(a);for(let d=r;d<o;d++){const p=n.data[d],y=e[d];ls(d),(null!==p.hostBindings||0!==p.hostVars||null!==p.hostAttrs)&&DZ(p,y)}}finally{ze(-1),ls(l)}}function DZ(n,e){null!==n.hostBindings&&n.hostBindings(1,e)}function zC(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function OZ(n,e,t){if(t){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)t[e.exportAs[r]]=n;_o(e)&&(t[""]=n)}}function NZ(n,e,t,r,o){n.data[r]=o;const a=o.factory||(o.factory=Lu(o.type)),l=new xm(a,_o(o),Dt);n.blueprint[r]=l,t[r]=l,function AZ(n,e,t,r,o){const a=o.hostBindings;if(a){let l=n.hostBindingOpCodes;null===l&&(l=n.hostBindingOpCodes=[]);const d=~e.index;(function SZ(n){let e=n.length;for(;e>0;){const t=n[--e];if("number"==typeof t&&t<0)return t}return 0})(l)!=d&&l.push(d),l.push(t,r,a)}}(n,e,r,Hm(n,t,o.hostVars,Jn),o)}function Yl(n,e,t,r,o,a){const l=Zi(n,e);!function WC(n,e,t,r,o,a,l){if(null==a)n.removeAttribute(e,o,t);else{const d=null==l?Pn(a):l(a,r||"",o);n.setAttribute(e,o,d,t)}}(e[Zn],l,a,n.value,t,r,o)}function kZ(n,e,t,r,o,a){const l=a[e];if(null!==l)for(let d=0;d<l.length;)bT(r,t,l[d++],l[d++],l[d++])}function bT(n,e,t,r,o){const a=Ii(null);try{const l=n.inputTransforms;null!==l&&l.hasOwnProperty(r)&&(o=l[r].call(e,o)),null!==n.setInput?n.setInput(e,o,t,r):e[r]=o}finally{Ii(a)}}function LZ(n,e,t){let r=null,o=0;for(;o<t.length;){const a=t[o];if(0!==a)if(5!==a){if("number"==typeof a)break;if(n.hasOwnProperty(a)){null===r&&(r=[]);const l=n[a];for(let d=0;d<l.length;d+=2)if(l[d]===e){r.push(a,l[d+1],t[o+1]);break}}o+=2}else o+=2;else o+=4}return r}function _T(n,e,t,r){return[n,!0,!1,e,null,0,r,t,null,null,null]}function ET(n,e){const t=n.contentQueries;if(null!==t)for(let r=0;r<t.length;r+=2){const a=t[r+1];if(-1!==a){const l=n.data[a];Hp(t[r]),l.contentQueries(2,e[a],a)}}}function Fw(n,e){return n[Mp]?n[gE][ss]=e:n[Mp]=e,n[gE]=e,e}function ZC(n,e,t){Hp(0);const r=Ii(null);try{e(n,t)}finally{Ii(r)}}function CT(n){return n[bc]||(n[bc]=[])}function xT(n){return n.cleanup||(n.cleanup=[])}function ST(n,e){const t=n[Mu],r=t?t.get(Hu,null):null;r&&r.handleError(e)}function GC(n,e,t,r,o){for(let a=0;a<t.length;){const l=t[a++],d=t[a++];bT(n.data[l],e[l],r,d,o)}}function BZ(n,e){const t=Rs(e,n),r=t[Wt];!function FZ(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}(r,t);const o=t[ci];null!==o&&null===t[Fl]&&(t[Fl]=IC(o,t[Mu])),qC(r,t,t[Li])}function qC(n,e,t){Cm(e);try{const r=n.viewQuery;null!==r&&ZC(1,r,t);const o=n.template;null!==o&&hT(n,e,o,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&ET(n,e),n.staticViewQueries&&ZC(2,n.viewQuery,t);const a=n.components;null!==a&&function UZ(n,e){for(let t=0;t<e.length;t++)BZ(n,e[t])}(e,a)}catch(r){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),r}finally{e[Gn]&=-5,me()}}let IT=(()=>{class n{constructor(){this.all=new Set,this.queue=new Map}create(t,r,o){const a=typeof Zone>"u"?null:Zone.current,l=function Zd(n,e,t){const r=Object.create(Fp);t&&(r.consumerAllowSignalWrites=!0),r.fn=n,r.schedule=e;const o=l=>{r.cleanupFn=l};return r.ref={notify:()=>Lp(r),run:()=>{if(r.dirty=!1,r.hasRun&&!mh(r))return;r.hasRun=!0;const l=jl(r);try{r.cleanupFn(),r.cleanupFn=Yv,r.fn(o)}finally{vm(r,l)}},cleanup:()=>r.cleanupFn()},r.ref}(t,y=>{this.all.has(y)&&this.queue.set(y,a)},o);let d;this.all.add(l),l.notify();const p=()=>{l.cleanup(),d?.(),this.all.delete(l),this.queue.delete(l)};return d=r?.onDestroy(p),{destroy:p}}flush(){if(0!==this.queue.size)for(const[t,r]of this.queue)this.queue.delete(t),r?r.run(()=>t.run()):t.run()}get isQueueEmpty(){return 0===this.queue.size}static#e=this.\u0275prov=vn({token:n,providedIn:"root",factory:()=>new n})}return n})();function Uw(n,e,t){let r=t?n.styles:null,o=t?n.classes:null,a=0;if(null!==e)for(let l=0;l<e.length;l++){const d=e[l];"number"==typeof d?a=d:1==a?o=Wi(o,d):2==a&&(r=Wi(r,d+": "+e[++l]+";"))}t?n.styles=r:n.stylesWithoutHost=r,t?n.classes=o:n.classesWithoutHost=o}function zm(n,e,t,r,o=!1){for(;null!==t;){const a=e[t.index];null!==a&&r.push(Or(a)),Ai(a)&&DT(a,r);const l=t.type;if(8&l)zm(n,e,t.child,r);else if(32&l){const d=QE(t,e);let p;for(;p=d();)r.push(p)}else if(16&l){const d=cD(e,t);if(Array.isArray(d))r.push(...d);else{const p=Mm(e[Bi]);zm(p[Wt],p,d,r,!0)}}t=o?t.projectionNext:t.next}return r}function DT(n,e){for(let t=eo;t<n.length;t++){const r=n[t],o=r[Wt].firstChild;null!==o&&zm(r[Wt],r,o,e)}n[_c]!==n[ci]&&e.push(n[_c])}function $w(n,e,t,r=!0){const o=e[ah],a=o.rendererFactory,l=o.afterRenderEventManager;a.begin?.(),l?.begin();try{TT(n,e,n.template,t)}catch(p){throw r&&ST(e,p),p}finally{a.end?.(),o.effectManager?.flush(),l?.end()}}function TT(n,e,t,r){const o=e[Gn];if(256!=(256&o)){e[ah].effectManager?.flush(),Cm(e);try{cs(e),function Qv(n){return Rn.lFrame.bindingIndex=n}(n.bindingStartIndex),null!==t&&hT(n,e,t,2,r);const l=3==(3&o);if(l){const y=n.preOrderCheckHooks;null!==y&&jr(e,y,null)}else{const y=n.preOrderHooks;null!==y&&po(e,y,0,null),Fi(e,0)}if(function VZ(n){for(let e=YI(n);null!==e;e=JI(e)){if(!e[Fv])continue;const t=e[Ul];for(let r=0;r<t.length;r++){No(t[r])}}}(e),RT(e,2),null!==n.contentQueries&&ET(n,e),l){const y=n.contentCheckHooks;null!==y&&jr(e,y)}else{const y=n.contentHooks;null!==y&&po(e,y,1),Fi(e,1)}!function hZ(n,e){const t=n.hostBindingOpCodes;if(null===t)return;const r=aT(e,tl);try{for(let o=0;o<t.length;o++){const a=t[o];if(a<0)ze(~a);else{const l=a,d=t[++o],p=t[++o];Gl(d,l),r.dirty=!1;const y=jl(r);try{p(2,e[l])}finally{vm(r,y)}}}}finally{null===e[tl]&&cT(e,tl),ze(-1)}}(n,e);const d=n.components;null!==d&&MT(e,d,0);const p=n.viewQuery;if(null!==p&&ZC(2,p,r),l){const y=n.viewCheckHooks;null!==y&&jr(e,y)}else{const y=n.viewHooks;null!==y&&po(e,y,2),Fi(e,2)}!0===n.firstUpdatePass&&(n.firstUpdatePass=!1),e[Gn]&=-73,Jv(e)}finally{me()}}}function RT(n,e){for(let t=YI(n);null!==t;t=JI(t))for(let r=eo;r<t.length;r++)OT(t[r],e)}function HZ(n,e,t){OT(Rs(e,n),t)}function OT(n,e){if(!function ol(n){return 128==(128&n[Gn])}(n))return;const t=n[Wt],r=n[Gn];if(80&r&&0===e||1024&r||2===e)TT(t,n,t.template,n[Li]);else if(n[sh]>0){RT(n,1);const o=t.components;null!==o&&MT(n,o,1)}}function MT(n,e,t){for(let r=0;r<e.length;r++)HZ(n,e[r],t)}class Wm{get rootNodes(){const e=this._lView,t=e[Wt];return zm(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Li]}set context(e){this._lView[Li]=e}get destroyed(){return 256==(256&this._lView[Gn])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[pi];if(Ai(e)){const t=e[8],r=t?t.indexOf(this):-1;r>-1&&(vw(e,r),sw(t,r))}this._attachedToViewContainer=!1}eC(this._lView[Wt],this._lView)}onDestroy(e){!function la(n,e){if(256==(256&n[Gn]))throw new Bt(911,!1);null===n[Nu]&&(n[Nu]=[]),n[Nu].push(e)}(this._lView,e)}markForCheck(){Vm(this._cdRefInjectingView||this._lView)}detach(){this._lView[Gn]&=-129}reattach(){this._lView[Gn]|=128}detectChanges(){$w(this._lView[Wt],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Bt(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Nz(n,e){Pm(n,e,e[Zn],2,null,null)}(this._lView[Wt],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Bt(902,!1);this._appRef=e}}class zZ extends Wm{constructor(e){super(e),this._view=e}detectChanges(){const e=this._view;$w(e[Wt],e,e[Li],!1)}checkNoChanges(){}get context(){return null}}class NT extends Pw{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=yr(e);return new Zm(t,this.ngModule)}}function PT(n){const e=[];for(let t in n)n.hasOwnProperty(t)&&e.push({propName:n[t],templateName:t});return e}class ZZ{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,r){r=Tp(r);const o=this.injector.get(e,RC,r);return o!==RC||t===RC?o:this.parentInjector.get(e,t,r)}}class Zm extends UD{get inputs(){const e=this.componentDef,t=e.inputTransforms,r=PT(e.inputs);if(null!==t)for(const o of r)t.hasOwnProperty(o.propName)&&(o.transform=t[o.propName]);return r}get outputs(){return PT(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=function dE(n){return n.map(wc).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,r,o){let a=(o=o||this.ngModule)instanceof Dc?o:o?.injector;a&&null!==this.componentDef.getStandaloneInjector&&(a=this.componentDef.getStandaloneInjector(a)||a);const l=a?new ZZ(e,a):e,d=l.get(jD,null);if(null===d)throw new Bt(407,!1);const H={rendererFactory:d,sanitizer:l.get(VW,null),effectManager:l.get(IT,null),afterRenderEventManager:l.get(BC,null)},Ee=d.createRenderer(null,this.componentDef),Ue=this.componentDef.selectors[0][0]||"div",He=r?function gZ(n,e,t,r){const a=r.get(rT,!1)||t===Fa.ShadowDom,l=n.selectRootElement(e,a);return function mZ(n){gT(n)}(l),l}(Ee,r,this.componentDef.encapsulation,l):yw(Ee,Ue,function WZ(n){const e=n.toLowerCase();return"svg"===e?"svg":"math"===e?"math":null}(Ue)),ft=this.componentDef.signals?4608:this.componentDef.onPush?576:528;let dt=null;null!==He&&(dt=IC(He,l,!0));const vt=VC(0,null,null,1,0,null,null,null,null,null,null),Et=Bw(null,vt,null,ft,null,null,H,Ee,l,null,dt);let At,Mt;Cm(Et);try{const Ut=this.componentDef;let jt,Xn=null;Ut.findHostDirectiveDefs?(jt=[],Xn=new Map,Ut.findHostDirectiveDefs(Ut,jt,Xn),jt.push(Ut)):jt=[Ut];const Fr=function qZ(n,e){const t=n[Wt],r=ir;return n[r]=e,g0(t,r,2,"#host",null)}(Et,He),Nr=function KZ(n,e,t,r,o,a,l){const d=o[Wt];!function YZ(n,e,t,r){for(const o of n)e.mergedAttrs=Ua(e.mergedAttrs,o.hostAttrs);null!==e.mergedAttrs&&(Uw(e,e.mergedAttrs,!0),null!==t&&fD(r,t,e))}(r,n,e,l);let p=null;null!==e&&(p=IC(e,o[Mu]));const y=a.rendererFactory.createRenderer(e,t);let O=16;t.signals?O=4096:t.onPush&&(O=64);const H=Bw(o,pT(t),null,O,o[n.index],n,a,y,null,null,p);return d.firstCreatePass&&zC(d,n,r.length-1),Fw(o,H),o[n.index]=H}(Fr,He,Ut,jt,Et,H,Ee);Mt=Kd(vt,ir),He&&function QZ(n,e,t,r){if(r)uo(n,t,["ng-version",HW.full]);else{const{attrs:o,classes:a}=function Ss(n){const e=[],t=[];let r=1,o=2;for(;r<n.length;){let a=n[r];if("string"==typeof a)2===o?""!==a&&e.push(a,n[++r]):8===o&&t.push(a);else{if(!ja(o))break;o=a}r++}return{attrs:e,classes:t}}(e.selectors[0]);o&&uo(n,t,o),a&&a.length>0&&dD(n,t,a.join(" "))}}(Ee,Ut,He,r),void 0!==t&&function XZ(n,e,t){const r=n.projection=[];for(let o=0;o<e.length;o++){const a=t[o];r.push(null!=a?Array.from(a):null)}}(Mt,this.ngContentSelectors,t),At=function JZ(n,e,t,r,o,a){const l=Co(),d=o[Wt],p=Zi(l,o);vT(d,o,l,t,null,r);for(let O=0;O<t.length;O++)us(bh(o,d,l.directiveStart+O,l),o);wT(d,o,l),p&&us(p,o);const y=bh(o,d,l.directiveStart+l.componentOffset,l);if(n[Li]=o[Li]=y,null!==a)for(const O of a)O(y,e);return UC(d,l,n),y}(Nr,Ut,jt,Xn,Et,[eG]),qC(vt,Et,null)}finally{me()}return new GZ(this.componentType,At,f0(Mt,Et),Et,Mt)}}class GZ extends LW{constructor(e,t,r,o,a){super(),this.location=r,this._rootLView=o,this._tNode=a,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new zZ(o),this.componentType=e}setInput(e,t){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;const a=this._rootLView;GC(a[Wt],a,o,e,t),this.previousInputValues.set(e,t),Vm(Rs(this._tNode.index,a))}}get injector(){return new Ns(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}function eG(){const n=Co();ho(Tt()[Wt],n)}function ni(n){let e=function kT(n){return Object.getPrototypeOf(n.prototype).constructor}(n.type),t=!0;const r=[n];for(;e;){let o;if(_o(n))o=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Bt(903,!1);o=e.\u0275dir}if(o){if(t){r.push(o);const l=n;l.inputs=jw(n.inputs),l.inputTransforms=jw(n.inputTransforms),l.declaredInputs=jw(n.declaredInputs),l.outputs=jw(n.outputs);const d=o.hostBindings;d&&iG(n,d);const p=o.viewQuery,y=o.contentQueries;if(p&&nG(n,p),y&&rG(n,y),ts(n.inputs,o.inputs),ts(n.declaredInputs,o.declaredInputs),ts(n.outputs,o.outputs),null!==o.inputTransforms&&(null===l.inputTransforms&&(l.inputTransforms={}),ts(l.inputTransforms,o.inputTransforms)),_o(o)&&o.data.animation){const O=n.data;O.animation=(O.animation||[]).concat(o.data.animation)}}const a=o.features;if(a)for(let l=0;l<a.length;l++){const d=a[l];d&&d.ngInherit&&d(n),d===ni&&(t=!1)}}e=Object.getPrototypeOf(e)}!function tG(n){let e=0,t=null;for(let r=n.length-1;r>=0;r--){const o=n[r];o.hostVars=e+=o.hostVars,o.hostAttrs=Ua(o.hostAttrs,t=Ua(t,o.hostAttrs))}}(r)}function jw(n){return n===yc?{}:n===xr?[]:n}function nG(n,e){const t=n.viewQuery;n.viewQuery=t?(r,o)=>{e(r,o),t(r,o)}:e}function rG(n,e){const t=n.contentQueries;n.contentQueries=t?(r,o,a)=>{e(r,o,a),t(r,o,a)}:e}function iG(n,e){const t=n.hostBindings;n.hostBindings=t?(r,o)=>{e(r,o),t(r,o)}:e}function UT(n){const e=n.inputConfig,t={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];Array.isArray(o)&&o[2]&&(t[r]=o[2])}n.inputTransforms=t}function Vw(n){return!!KC(n)&&(Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n)}function KC(n){return null!==n&&("function"==typeof n||"object"==typeof n)}function Jl(n,e,t){return n[e]=t}function ds(n,e,t){return!Object.is(n[e],t)&&(n[e]=t,!0)}function Ch(n,e,t,r){const o=ds(n,e,t);return ds(n,e+1,r)||o}function Xa(n,e,t,r){const o=Tt();return ds(o,ul(),e)&&(vr(),Yl(Je(),o,n,e,t,r)),Xa}function y0(n,e,t,r){return ds(n,ul(),t)?e+Pn(t)+r:Jn}function Pr(n,e,t,r,o,a,l,d){const p=Tt(),y=vr(),O=n+ir,H=y.firstCreatePass?function TG(n,e,t,r,o,a,l,d,p){const y=e.consts,O=g0(e,n,4,l||null,xc(y,d));HC(e,t,O,xc(y,p)),ho(e,O);const H=O.tView=VC(2,O,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,y,null);return null!==e.queries&&(e.queries.template(e,O),H.queries=e.queries.embeddedTView(O)),O}(O,y,p,e,t,r,o,a,l):y.data[O];Sc(H,!1);const Ee=QT(y,p,H,n);Ms()&&bw(y,p,Ee,H),us(Ee,p),Fw(p,p[O]=_T(Ee,p,Ee,H)),ku(H)&&$C(y,p,H),null!=l&&jC(p,H,d)}let QT=function XT(n,e,t,r){return si(!0),e[Zn].createComment("")};function Ql(n){return function Ts(n,e){return n[e]}(function NE(){return Rn.lFrame.contextLView}(),ir+n)}function pr(n,e,t){const r=Tt();return ds(r,ul(),e)&&Qa(vr(),Je(),r,n,e,r[Zn],t,!1),pr}function t5(n,e,t,r,o){const l=o?"class":"style";GC(n,t,e.inputs[l],l,r)}function tn(n,e,t,r){const o=Tt(),a=vr(),l=ir+n,d=o[Zn],p=a.firstCreatePass?function NG(n,e,t,r,o,a){const l=e.consts,p=g0(e,n,2,r,xc(l,o));return HC(e,t,p,xc(l,a)),null!==p.attrs&&Uw(p,p.attrs,!1),null!==p.mergedAttrs&&Uw(p,p.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,p),p}(l,a,o,e,t,r):a.data[l],y=e9(a,o,p,d,e,n);o[l]=y;const O=ku(p);return Sc(p,!0),fD(d,y,p),32!=(32&p.flags)&&Ms()&&bw(a,o,y,p),0===function Em(){return Rn.lFrame.elementDepthCount}()&&us(y,o),function Qd(){Rn.lFrame.elementDepthCount++}(),O&&($C(a,o,p),UC(a,p,o)),null!==r&&jC(o,p),tn}function rn(){let n=Co();cl()?ua():(n=n.parent,Sc(n,!1));const e=n;(function OE(n){return Rn.skipHydrationRootTNode===n})(e)&&function ef(){Rn.skipHydrationRootTNode=null}(),function RE(){Rn.lFrame.elementDepthCount--}();const t=vr();return t.firstCreatePass&&(ho(t,n),Is(n)&&t.queries.elementEnd(n)),null!=e.classesWithoutHost&&function OH(n){return 0!=(8&n.flags)}(e)&&t5(t,e,Tt(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function MH(n){return 0!=(16&n.flags)}(e)&&t5(t,e,Tt(),e.stylesWithoutHost,!1),rn}function So(n,e,t,r){return tn(n,e,t,r),rn(),So}let e9=(n,e,t,r,o,a)=>(si(!0),yw(r,o,function Os(){return Rn.lFrame.currentNamespace}()));function Zu(n,e,t){const r=Tt(),o=vr(),a=n+ir,l=o.firstCreatePass?function LG(n,e,t,r,o){const a=e.consts,l=xc(a,r),d=g0(e,n,8,"ng-container",l);return null!==l&&Uw(d,l,!0),HC(e,t,d,xc(a,o)),null!==e.queries&&e.queries.elementStart(e,d),d}(a,o,r,e,t):o.data[a];Sc(l,!0);const d=t9(o,r,l,n);return r[a]=d,Ms()&&bw(o,r,d,l),us(d,r),ku(l)&&($C(o,r,l),UC(o,l,r)),null!=t&&jC(r,l),Zu}function Gu(){let n=Co();const e=vr();return cl()?ua():(n=n.parent,Sc(n,!1)),e.firstCreatePass&&(ho(e,n),Is(n)&&e.queries.elementEnd(n)),Gu}function Gw(n,e,t){return Zu(n,e,t),Gu(),Gw}let t9=(n,e,t,r)=>(si(!0),XE(e[Zn],""));function xh(){return Tt()}function Jm(n){return!!n&&"function"==typeof n.then}function n9(n){return!!n&&"function"==typeof n.subscribe}function Ui(n,e,t,r){const o=Tt(),a=vr(),l=Co();return function i9(n,e,t,r,o,a,l){const d=ku(r),y=n.firstCreatePass&&xT(n),O=e[Li],H=CT(e);let Ee=!0;if(3&r.type||l){const Ge=Zi(r,e),at=l?l(Ge):Ge,ft=H.length,dt=l?Et=>l(Or(Et[r.index])):r.index;let vt=null;if(!l&&d&&(vt=function UG(n,e,t,r){const o=n.cleanup;if(null!=o)for(let a=0;a<o.length-1;a+=2){const l=o[a];if(l===t&&o[a+1]===r){const d=e[bc],p=o[a+2];return d.length>p?d[p]:null}"string"==typeof l&&(a+=2)}return null}(n,e,o,r.index)),null!==vt)(vt.__ngLastListenerFn__||vt).__ngNextListenerFn__=a,vt.__ngLastListenerFn__=a,Ee=!1;else{a=s9(r,e,O,a,!1);const Et=t.listen(at,o,a);H.push(a,Et),y&&y.push(o,dt,ft,ft+1)}}else a=s9(r,e,O,a,!1);const Ue=r.outputs;let He;if(Ee&&null!==Ue&&(He=Ue[o])){const Ge=He.length;if(Ge)for(let at=0;at<Ge;at+=2){const At=e[He[at]][He[at+1]].subscribe(a),Mt=H.length;H.push(a,At),y&&y.push(o,r.index,Mt,-(Mt+1))}}}(a,o,o[Zn],l,n,e,r),Ui}function o9(n,e,t,r){try{return Cc(6,e,t),!1!==t(r)}catch(o){return ST(n,o),!1}finally{Cc(7,e,t)}}function s9(n,e,t,r,o){return function a(l){if(l===Function)return r;Vm(n.componentOffset>-1?Rs(n.index,e):e);let p=o9(e,t,r,l),y=a.__ngNextListenerFn__;for(;y;)p=o9(e,t,y,l)&&p,y=y.__ngNextListenerFn__;return o&&!1===p&&l.preventDefault(),p}}function Ir(n=1){return function Se(n){return(Rn.lFrame.contextLView=function Le(n,e){for(;n>0;)e=e[ch],n--;return e}(n,Rn.lFrame.contextLView))[Li]}(n)}function $G(n,e){let t=null;const r=function uE(n){const e=n.attrs;if(null!=e){const t=e.indexOf(5);if(!(1&t))return e[t+1]}return null}(n);for(let o=0;o<e.length;o++){const a=e[o];if("*"!==a){if(null===r?Va(n,a,!0):ih(r,a))return o}else t=o}return t}function n5(n){const e=Tt()[Bi][bo];if(!e.projection){const r=e.projection=Tm(n?n.length:1,null),o=r.slice();let a=e.child;for(;null!==a;){const l=n?$G(a,n):0;null!==l&&(o[l]?o[l].projectionNext=a:r[l]=a,o[l]=a),a=a.next}}}function r5(n,e=0,t){const r=Tt(),o=vr(),a=g0(o,ir+n,16,null,t||null);null===a.projection&&(a.projection=e),ua(),(!r[Fl]||qa())&&32!=(32&a.flags)&&function jz(n,e,t){uD(e[Zn],0,e,t,nC(n,t,e),iD(t.parent||e[bo],t,e))}(o,r,a)}function i5(n,e,t){return o5(n,"",e,"",t),i5}function o5(n,e,t,r,o){const a=Tt(),l=y0(a,e,t,r);return l!==Jn&&Qa(vr(),Je(),a,n,l,a[Zn],o,!1),o5}function qw(n,e){return n<<17|e<<2}function sf(n){return n>>17&32767}function s5(n){return 2|n}function Ah(n){return(131068&n)>>2}function a5(n,e){return-131069&n|e<<2}function c5(n){return 1|n}function g9(n,e,t,r,o){const a=n[t+1],l=null===e;let d=r?sf(a):Ah(a),p=!1;for(;0!==d&&(!1===p||l);){const O=n[d+1];ZG(n[d],e)&&(p=!0,n[d+1]=r?c5(O):s5(O)),d=r?sf(O):Ah(O)}p&&(n[t+1]=r?s5(a):c5(a))}function ZG(n,e){return null===n||null==e||(Array.isArray(n)?n[1]:n)===e||!(!Array.isArray(n)||"string"!=typeof e)&&Xp(n,e)>=0}function Rc(n,e){return function dl(n,e,t,r){const o=Tt(),a=vr(),l=function zo(n){const e=Rn.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}(2);a.firstUpdatePass&&function x9(n,e,t,r){const o=n.data;if(null===o[t+1]){const a=o[pe()],l=function C9(n,e){return e>=n.expandoStartIndex}(n,t);(function D9(n,e){return 0!=(n.flags&(e?8:16))})(a,r)&&null===e&&!l&&(e=!1),e=function tq(n,e,t,r){const o=function xo(n){const e=Rn.lFrame.currentDirectiveIndex;return-1===e?null:n[e]}(n);let a=r?e.residualClasses:e.residualStyles;if(null===o)0===(r?e.classBindings:e.styleBindings)&&(t=Qm(t=l5(null,n,e,t,r),e.attrs,r),a=null);else{const l=e.directiveStylingLast;if(-1===l||n[l]!==o)if(t=l5(o,n,e,t,r),null===a){let p=function nq(n,e,t){const r=t?e.classBindings:e.styleBindings;if(0!==Ah(r))return n[sf(r)]}(n,e,r);void 0!==p&&Array.isArray(p)&&(p=l5(null,n,e,p[1],r),p=Qm(p,e.attrs,r),function rq(n,e,t,r){n[sf(t?e.classBindings:e.styleBindings)]=r}(n,e,r,p))}else a=function iq(n,e,t){let r;const o=e.directiveEnd;for(let a=1+e.directiveStylingLast;a<o;a++)r=Qm(r,n[a].hostAttrs,t);return Qm(r,e.attrs,t)}(n,e,r)}return void 0!==a&&(r?e.residualClasses=a:e.residualStyles=a),t}(o,a,e,r),function zG(n,e,t,r,o,a){let l=a?e.classBindings:e.styleBindings,d=sf(l),p=Ah(l);n[r]=t;let O,y=!1;if(Array.isArray(t)?(O=t[1],(null===O||Xp(t,O)>0)&&(y=!0)):O=t,o)if(0!==p){const Ee=sf(n[d+1]);n[r+1]=qw(Ee,d),0!==Ee&&(n[Ee+1]=a5(n[Ee+1],r)),n[d+1]=function VG(n,e){return 131071&n|e<<17}(n[d+1],r)}else n[r+1]=qw(d,0),0!==d&&(n[d+1]=a5(n[d+1],r)),d=r;else n[r+1]=qw(p,0),0===d?d=r:n[p+1]=a5(n[p+1],r),p=r;y&&(n[r+1]=s5(n[r+1])),g9(n,O,r,!0),g9(n,O,r,!1),function WG(n,e,t,r,o){const a=o?n.residualClasses:n.residualStyles;null!=a&&"string"==typeof e&&Xp(a,e)>=0&&(t[r+1]=c5(t[r+1]))}(e,O,n,r,a),l=qw(d,p),a?e.classBindings=l:e.styleBindings=l}(o,a,e,t,l,r)}}(a,n,l,r),e!==Jn&&ds(o,l,e)&&function S9(n,e,t,r,o,a,l,d){if(!(3&e.type))return;const p=n.data,y=p[d+1],O=function HG(n){return 1==(1&n)}(y)?I9(p,e,t,o,Ah(y),l):void 0;Kw(O)||(Kw(a)||function jG(n){return 2==(2&n)}(y)&&(a=I9(p,null,t,o,d,l)),function Hz(n,e,t,r,o){if(e)o?n.addClass(t,r):n.removeClass(t,r);else{let a=-1===r.indexOf("-")?void 0:nf.DashCase;null==o?n.removeStyle(t,r,a):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),a|=nf.Important),n.setStyle(t,r,o,a))}}(r,l,$u(pe(),t),o,a))}(a,a.data[pe()],o,o[Zn],n,o[l+1]=function cq(n,e){return null==n||""===n||("string"==typeof e?n+=e:"object"==typeof n&&(n=Ur(rf(n)))),n}(e,t),r,l)}(n,e,null,!0),Rc}function l5(n,e,t,r,o){let a=null;const l=t.directiveEnd;let d=t.directiveStylingLast;for(-1===d?d=t.directiveStart:d++;d<l&&(a=e[d],r=Qm(r,a.hostAttrs,o),a!==n);)d++;return null!==n&&(t.directiveStylingLast=d),r}function Qm(n,e,t){const r=t?1:2;let o=-1;if(null!==e)for(let a=0;a<e.length;a++){const l=e[a];"number"==typeof l?o=l:o===r&&(Array.isArray(n)||(n=void 0===n?[]:["",n]),Ya(n,l,!!t||e[++a]))}return void 0===n?null:n}function I9(n,e,t,r,o,a){const l=null===e;let d;for(;o>0;){const p=n[o],y=Array.isArray(p),O=y?p[1]:p,H=null===O;let Ee=t[o+1];Ee===Jn&&(Ee=H?xr:void 0);let Ue=H?HE(Ee,r):O===r?Ee:void 0;if(y&&!Kw(Ue)&&(Ue=HE(p,r)),Kw(Ue)&&(d=Ue,l))return d;const He=n[o+1];o=l?sf(He):Ah(He)}if(null!==e){let p=a?e.residualClasses:e.residualStyles;null!=p&&(d=HE(p,r))}return d}function Kw(n){return void 0!==n}function An(n,e=""){const t=Tt(),r=vr(),o=n+ir,a=r.firstCreatePass?g0(r,o,1,e,null):r.data[o],l=T9(r,t,a,e,n);t[o]=l,Ms()&&bw(r,t,l,a),Sc(a,!1)}let T9=(n,e,t,r,o)=>(si(!0),function mw(n,e){return n.createText(e)}(e[Zn],r));function af(n){return cf("",n,""),af}function cf(n,e,t){const r=Tt(),o=y0(r,n,e,t);return o!==Jn&&function Wu(n,e,t){const r=$u(e,n);!function XI(n,e,t){n.setValue(e,t)}(n[Zn],r,t)}(r,pe(),o),cf}const I0="en-US";let J9=I0;function f5(n,e,t,r,o){if(n=En(n),Array.isArray(n))for(let a=0;a<n.length;a++)f5(n[a],e,t,r,o);else{const a=vr(),l=Tt(),d=Co();let p=Eh(n)?n:En(n.provide);const y=ND(n),O=1048575&d.providerIndexes,H=d.directiveStart,Ee=d.providerIndexes>>20;if(Eh(n)||!n.multi){const Ue=new xm(y,o,Dt),He=p5(p,e,o?O:O+Ee,H);-1===He?($E(rw(d,l),a,p),h5(a,n,e.length),e.push(p),d.directiveStart++,d.directiveEnd++,o&&(d.providerIndexes+=1048576),t.push(Ue),l.push(Ue)):(t[He]=Ue,l[He]=Ue)}else{const Ue=p5(p,e,O+Ee,H),He=p5(p,e,O,O+Ee),at=He>=0&&t[He];if(o&&!at||!o&&!(Ue>=0&&t[Ue])){$E(rw(d,l),a,p);const ft=function TK(n,e,t,r,o){const a=new xm(n,t,Dt);return a.multi=[],a.index=e,a.componentProviders=0,E7(a,o,r&&!t),a}(o?DK:IK,t.length,o,r,y);!o&&at&&(t[He].providerFactory=ft),h5(a,n,e.length,0),e.push(p),d.directiveStart++,d.directiveEnd++,o&&(d.providerIndexes+=1048576),t.push(ft),l.push(ft)}else h5(a,n,Ue>-1?Ue:He,E7(t[o?He:Ue],y,!o&&r));!o&&r&&at&&t[He].componentProviders++}}}function h5(n,e,t,r){const o=Eh(e),a=function wW(n){return!!n.useClass}(e);if(o||a){const p=(a?En(e.useClass):e).prototype.ngOnDestroy;if(p){const y=n.destroyHooks||(n.destroyHooks=[]);if(!o&&e.multi){const O=y.indexOf(t);-1===O?y.push(t,[r,p]):y[O+1].push(r,p)}else y.push(t,p)}}}function E7(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function p5(n,e,t,r){for(let o=t;o<r;o++)if(e[o]===n)return o;return-1}function IK(n,e,t,r){return g5(this.multi,[])}function DK(n,e,t,r){const o=this.multi;let a;if(this.providerFactory){const l=this.providerFactory.componentProviders,d=bh(t,t[Wt],this.providerFactory.index,r);a=d.slice(0,l),g5(o,a);for(let p=l;p<d.length;p++)a.push(d[p])}else a=[],g5(o,a);return a}function g5(n,e){for(let t=0;t<n.length;t++)e.push((0,n[t])());return e}function _i(n,e=[]){return t=>{t.providersResolver=(r,o)=>function SK(n,e,t){const r=vr();if(r.firstCreatePass){const o=_o(n);f5(t,r.data,r.blueprint,o,!0),f5(e,r.data,r.blueprint,o,!1)}}(r,o?o(n):n,e)}}class Ih{}class C7{}class m5 extends Ih{constructor(e,t,r){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new NT(this);const o=Xi(e);this._bootstrapComponents=zu(o.bootstrap),this._r3Injector=ZD(e,t,[{provide:Ih,useValue:this},{provide:Pw,useValue:this.componentFactoryResolver},...r],Ur(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class y5 extends C7{constructor(e){super(),this.moduleType=e}create(e){return new m5(this.moduleType,e,[])}}class x7 extends Ih{constructor(e){super(),this.componentFactoryResolver=new NT(this),this.instance=null;const t=new a0([...e.providers,{provide:Ih,useValue:this},{provide:Pw,useValue:this.componentFactoryResolver}],e.parent||Iw(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}}function v5(n,e,t=null){return new x7({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}let MK=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){const r=TD(0,t.type),o=r.length>0?v5([r],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,o)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(const t of this.cachedInjectors.values())null!==t&&t.destroy()}finally{this.cachedInjectors.clear()}}static#e=this.\u0275prov=vn({token:n,providedIn:"environment",factory:()=>new n(Dn(Dc))})}return n})();function A7(n){n.getStandaloneInjector=e=>e.get(MK).getOrCreateStandaloneInjector(n)}function qu(n,e,t,r){return function k7(n,e,t,r,o,a){const l=e+t;return ds(n,l,o)?Jl(n,l+1,a?r.call(a,o):r(o)):i1(n,l+1)}(Tt(),Ho(),n,e,t,r)}function M7(n,e,t,r,o){return function L7(n,e,t,r,o,a,l){const d=e+t;return Ch(n,d,o,a)?Jl(n,d+2,l?r.call(l,o,a):r(o,a)):i1(n,d+2)}(Tt(),Ho(),n,e,t,r,o)}function N7(n,e,t,r,o,a){return function B7(n,e,t,r,o,a,l,d){const p=e+t;return function Hw(n,e,t,r,o){const a=Ch(n,e,t,r);return ds(n,e+2,o)||a}(n,p,o,a,l)?Jl(n,p+3,d?r.call(d,o,a,l):r(o,a,l)):i1(n,p+3)}(Tt(),Ho(),n,e,t,r,o,a)}function P7(n,e,t,r,o,a,l){return function F7(n,e,t,r,o,a,l,d,p){const y=e+t;return function Tc(n,e,t,r,o,a){const l=Ch(n,e,t,r);return Ch(n,e+2,o,a)||l}(n,y,o,a,l,d)?Jl(n,y+4,p?r.call(p,o,a,l,d):r(o,a,l,d)):i1(n,y+4)}(Tt(),Ho(),n,e,t,r,o,a,l)}function i1(n,e){const t=n[e];return t===Jn?void 0:t}function eY(){return this._results[Symbol.iterator]()}class b5{static#e=Symbol.iterator;get changes(){return this._changes||(this._changes=new gr)}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const t=b5.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=eY)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){const r=this;r.dirty=!1;const o=function Ic(n){return n.flat(Number.POSITIVE_INFINITY)}(e);(this._changesDetected=!function ZH(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++){let o=n[r],a=e[r];if(t&&(o=t(o),a=t(a)),a!==o)return!1}return!0}(r._results,o,t))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}function nY(n,e,t,r=!0){const o=e[Wt];if(function kz(n,e,t,r){const o=eo+r,a=t.length;r>0&&(t[o-1][ss]=e),r<a-eo?(e[ss]=t[o],TI(t,eo+r,e)):(t.push(e),e[ss]=null),e[pi]=t;const l=e[Vd];null!==l&&t!==l&&function Lz(n,e){const t=n[Ul];e[Bi]!==e[pi][pi][Bi]&&(n[Fv]=!0),null===t?n[Ul]=[e]:t.push(e)}(l,e);const d=e[el];null!==d&&d.insertView(n),e[Gn]|=128}(o,e,n,t),r){const a=iC(t,n),l=e[Zn],d=ww(l,n[_c]);null!==d&&function Mz(n,e,t,r,o,a){r[ci]=o,r[bo]=e,Pm(n,r,t,1,o,a)}(o,n[bo],l,e,d,a)}}let Vr=(()=>{class n{static#e=this.__NG_ELEMENT_ID__=oY}return n})();const rY=Vr,iY=class extends rY{constructor(e,t,r){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,r){const o=function tY(n,e,t,r){const o=e.tView,d=Bw(n,o,t,4096&n[Gn]?4096:16,null,e,null,null,null,r?.injector??null,r?.hydrationInfo??null);d[Vd]=n[e.index];const y=n[el];return null!==y&&(d[el]=y.createEmbeddedView(o)),qC(o,d,t),d}(this._declarationLView,this._declarationTContainer,e,{injector:t,hydrationInfo:r});return new Wm(o)}};function oY(){return eb(Co(),Tt())}function eb(n,e){return 4&n.type?new iY(e,n,f0(n,e)):null}let hl=(()=>{class n{static#e=this.__NG_ELEMENT_ID__=dY}return n})();function dY(){return Z7(Co(),Tt())}const fY=hl,z7=class extends fY{constructor(e,t,r){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=r}get element(){return f0(this._hostTNode,this._hostLView)}get injector(){return new Ns(this._hostTNode,this._hostLView)}get parentInjector(){const e=iw(this._hostTNode,this._hostLView);if(BE(e)){const t=Sm(e,this._hostLView),r=Am(e);return new Ns(t[Wt].data[r+8],t)}return new Ns(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const t=W7(this._lContainer);return null!==t&&t[e]||null}get length(){return this._lContainer.length-eo}createEmbeddedView(e,t,r){let o,a;"number"==typeof r?o=r:null!=r&&(o=r.index,a=r.injector);const d=e.createEmbeddedViewImpl(t||{},a,null);return this.insertImpl(d,o,false),d}createComponent(e,t,r,o,a){const l=e&&!function Dm(n){return"function"==typeof n}(e);let d;if(l)d=t;else{const Ge=t||{};d=Ge.index,r=Ge.injector,o=Ge.projectableNodes,a=Ge.environmentInjector||Ge.ngModuleRef}const p=l?e:new Zm(yr(e)),y=r||this.parentInjector;if(!a&&null==p.ngModule){const at=(l?y:this.parentInjector).get(Dc,null);at&&(a=at)}yr(p.componentType??{});const Ue=p.create(y,o,null,a);return this.insertImpl(Ue.hostView,d,false),Ue}insert(e,t){return this.insertImpl(e,t,!1)}insertImpl(e,t,r){const o=e._lView;if(function DE(n){return Ai(n[pi])}(o)){const p=this.indexOf(e);if(-1!==p)this.detach(p);else{const y=o[pi],O=new z7(y,y[bo],y[pi]);O.detach(O.indexOf(e))}}const l=this._adjustIndex(t),d=this._lContainer;return nY(d,o,l,!r),e.attachToViewContainerRef(),TI(_5(d),l,e),e}move(e,t){return this.insert(e,t)}indexOf(e){const t=W7(this._lContainer);return null!==t?t.indexOf(e):-1}remove(e){const t=this._adjustIndex(e,-1),r=vw(this._lContainer,t);r&&(sw(_5(this._lContainer),t),eC(r[Wt],r))}detach(e){const t=this._adjustIndex(e,-1),r=vw(this._lContainer,t);return r&&null!=sw(_5(this._lContainer),t)?new Wm(r):null}_adjustIndex(e,t=0){return e??this.length+t}};function W7(n){return n[8]}function _5(n){return n[8]||(n[8]=[])}function Z7(n,e){let t;const r=e[n.index];return Ai(r)?t=r:(t=_T(r,e,null,n),e[n.index]=t,Fw(e,t)),G7(t,e,n,r),new z7(t,n,e)}let G7=function q7(n,e,t,r){if(n[_c])return;let o;o=8&t.type?Or(r):function hY(n,e){const t=n[Zn],r=t.createComment(""),o=Zi(e,n);return _h(t,ww(t,o),r,function $z(n,e){return n.nextSibling(e)}(t,o),!1),r}(e,t),n[_c]=o};class E5{constructor(e){this.queryList=e,this.matches=null}clone(){return new E5(this.queryList)}setDirty(){this.queryList.setDirty()}}class C5{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const r=null!==e.contentQueries?e.contentQueries[0]:t.length,o=[];for(let a=0;a<r;a++){const l=t.getByIndex(a);o.push(this.queries[l.indexInDeclarationView].clone())}return new C5(o)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==X7(e,t).matches&&this.queries[t].setDirty()}}class K7{constructor(e,t,r=null){this.predicate=e,this.flags=t,this.read=r}}class x5{constructor(e=[]){this.queries=e}elementStart(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let r=0;r<this.length;r++){const o=null!==t?t.length:0,a=this.getByIndex(r).embeddedTView(e,o);a&&(a.indexInDeclarationView=r,null!==t?t.push(a):t=[a])}return null!==t?new x5(t):null}template(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class A5{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new A5(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const t=this._declarationNodeIndex;let r=e.parent;for(;null!==r&&8&r.type&&r.index!==t;)r=r.parent;return t===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(e,t){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const a=r[o];this.matchTNodeWithReadOption(e,t,mY(t,a)),this.matchTNodeWithReadOption(e,t,ow(t,e,a,!1,!1))}else r===Vr?4&t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ow(t,e,r,!1,!1))}matchTNodeWithReadOption(e,t,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===go||o===hl||o===Vr&&4&t.type)this.addMatch(t.index,-2);else{const a=ow(t,e,o,!1,!1);null!==a&&this.addMatch(t.index,a)}else this.addMatch(t.index,r)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function mY(n,e){const t=n.localNames;if(null!==t)for(let r=0;r<t.length;r+=2)if(t[r]===e)return t[r+1];return null}function vY(n,e,t,r){return-1===t?function yY(n,e){return 11&n.type?f0(n,e):4&n.type?eb(n,e):null}(e,n):-2===t?function wY(n,e,t){return t===go?f0(e,n):t===Vr?eb(e,n):t===hl?Z7(e,n):void 0}(n,e,r):bh(n,n[Wt],t,e)}function Y7(n,e,t,r){const o=e[el].queries[r];if(null===o.matches){const a=n.data,l=t.matches,d=[];for(let p=0;p<l.length;p+=2){const y=l[p];d.push(y<0?null:vY(e,a[y],l[p+1],t.metadata.read))}o.matches=d}return o.matches}function S5(n,e,t,r){const o=n.queries.getByIndex(t),a=o.matches;if(null!==a){const l=Y7(n,e,o,t);for(let d=0;d<a.length;d+=2){const p=a[d];if(p>0)r.push(l[d/2]);else{const y=a[d+1],O=e[-p];for(let H=eo;H<O.length;H++){const Ee=O[H];Ee[Vd]===Ee[pi]&&S5(Ee[Wt],Ee,y,r)}if(null!==O[Ul]){const H=O[Ul];for(let Ee=0;Ee<H.length;Ee++){const Ue=H[Ee];S5(Ue[Wt],Ue,y,r)}}}}}return r}function to(n){const e=Tt(),t=vr(),r=Xv();Hp(r+1);const o=X7(t,r);if(n.dirty&&function Yd(n){return 4==(4&n[Gn])}(e)===(2==(2&o.metadata.flags))){if(null===o.matches)n.reset([]);else{const a=o.crossesNgTemplate?S5(t,e,r,[]):Y7(t,e,o,r);n.reset(a,$W),n.notifyOnChanges()}return!0}return!1}function lf(n,e,t){const r=vr();r.firstCreatePass&&(Q7(r,new K7(n,e,t),-1),2==(2&e)&&(r.staticViewQueries=!0)),J7(r,Tt(),e)}function ga(n,e,t,r){const o=vr();if(o.firstCreatePass){const a=Co();Q7(o,new K7(e,t,r),a.index),function _Y(n,e){const t=n.contentQueries||(n.contentQueries=[]);e!==(t.length?t[t.length-1]:-1)&&t.push(n.queries.length-1,e)}(o,n),2==(2&t)&&(o.staticContentQueries=!0)}J7(o,Tt(),t)}function no(){return function bY(n,e){return n[el].queries[e].queryList}(Tt(),Xv())}function J7(n,e,t){const r=new b5(4==(4&t));(function wZ(n,e,t,r){const o=CT(e);o.push(t),n.firstCreatePass&&xT(n).push(r,o.length-1)})(n,e,r,r.destroy),null===e[el]&&(e[el]=new C5),e[el].queries.push(new E5(r))}function Q7(n,e,t){null===n.queries&&(n.queries=new x5),n.queries.track(new A5(e,t))}function X7(n,e){return n.queries.getByIndex(e)}function uf(n,e){return eb(n,e)}const M5=new qt("Application Initializer");let N5=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r}),this.appInits=an(M5,{optional:!0})??[]}runInitializers(){if(this.initialized)return;const t=[];for(const o of this.appInits){const a=o();if(Jm(a))t.push(a);else if(n9(a)){const l=new Promise((d,p)=>{a.subscribe({complete:d,error:p})});t.push(l)}}const r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(o=>{this.reject(o)}),0===t.length&&r(),this.initialized=!0}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mR=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();const Ku=new qt("LocaleId",{providedIn:"root",factory:()=>an(Ku,gt.Optional|gt.SkipSelf)||function VY(){return typeof $localize<"u"&&$localize.locale||I0}()});let yR=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new xi(!1)}add(){this.hasPendingTasks.next(!0);const t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),0===this.pendingTasks.size&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class WY{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}let vR=(()=>{class n{compileModuleSync(t){return new y5(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){const r=this.compileModuleSync(t),a=zu(Xi(t).declarations).reduce((l,d)=>{const p=yr(d);return p&&l.push(new Zm(p)),l},[]);return new WY(r,a)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const ER=new qt(""),ib=new qt("");let F5,L5=(()=>{class n{constructor(t,r,o){this._ngZone=t,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,F5||(function hJ(n){F5=n}(o),o.addToWindow(r)),this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{li.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(t)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,r,o){let a=-1;r&&r>0&&(a=setTimeout(()=>{this._callbacks=this._callbacks.filter(l=>l.timeoutId!==a),t(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:t,timeoutId:a,updateCb:o})}whenStable(t,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(t){this.registry.registerApplication(t,this)}unregisterApplication(t){this.registry.unregisterApplication(t)}findProviders(t,r,o){return[]}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(li),Dn(B5),Dn(ib))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})(),B5=(()=>{class n{constructor(){this._applications=new Map}registerApplication(t,r){this._applications.set(t,r)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,r=!0){return F5?.findTestabilityInTree(this,t,r)??null}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})(),df=null;const CR=new qt("AllowMultipleToken"),U5=new qt("PlatformDestroyListeners"),$5=new qt("appBootstrapListener");class AR{constructor(e,t){this.name=e,this.token=t}}function IR(n,e,t=[]){const r=`Platform: ${e}`,o=new qt(r);return(a=[])=>{let l=j5();if(!l||l.injector.get(CR,!1)){const d=[...t,...a,{provide:o,useValue:!0}];n?n(d):function mJ(n){if(df&&!df.get(CR,!1))throw new Bt(400,!1);(function xR(){!function EE(n){zl=n}(()=>{throw new Bt(600,!1)})})(),df=n;const e=n.get(TR);(function SR(n){n.get(PD,null)?.forEach(t=>t())})(n)}(function DR(n=[],e){return Ja.create({name:e,providers:[{provide:mC,useValue:"platform"},{provide:U5,useValue:new Set([()=>df=null])},...n]})}(d,r))}return function vJ(n){const e=j5();if(!e)throw new Bt(401,!1);return e}()}}function j5(){return df?.get(TR)??null}let TR=(()=>{class n{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,r){const o=function wJ(n="zone.js",e){return"noop"===n?new tZ:"zone.js"===n?new li(e):n}(r?.ngZone,function RR(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}({eventCoalescing:r?.ngZoneEventCoalescing,runCoalescing:r?.ngZoneRunCoalescing}));return o.run(()=>{const a=function OK(n,e,t){return new m5(n,e,t)}(t.moduleType,this.injector,function kR(n){return[{provide:li,useFactory:n},{provide:Fm,multi:!0,useFactory:()=>{const e=an(_J,{optional:!0});return()=>e.initialize()}},{provide:PR,useFactory:bJ},{provide:JD,useFactory:QD}]}(()=>o)),l=a.injector.get(Hu,null);return o.runOutsideAngular(()=>{const d=o.onError.subscribe({next:p=>{l.handleError(p)}});a.onDestroy(()=>{ob(this._modules,a),d.unsubscribe()})}),function OR(n,e,t){try{const r=t();return Jm(r)?r.catch(o=>{throw e.runOutsideAngular(()=>n.handleError(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>n.handleError(r)),r}}(l,o,()=>{const d=a.injector.get(N5);return d.runInitializers(),d.donePromise.then(()=>(function Q9(n){ns(n,"Expected localeId to be defined"),"string"==typeof n&&(J9=n.toLowerCase().replace(/_/g,"-"))}(a.injector.get(Ku,I0)||I0),this._moduleDoBootstrap(a),a))})})}bootstrapModule(t,r=[]){const o=MR({},r);return function pJ(n,e,t){const r=new y5(t);return Promise.resolve(r)}(0,0,t).then(a=>this.bootstrapModuleFactory(a,o))}_moduleDoBootstrap(t){const r=t.injector.get(R0);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!t.instance.ngDoBootstrap)throw new Bt(-403,!1);t.instance.ngDoBootstrap(r)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Bt(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const t=this._injector.get(U5,null);t&&(t.forEach(r=>r()),t.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(Ja))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function MR(n,e){return Array.isArray(e)?e.reduce(MR,n):{...n,...e}}let R0=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=an(PR),this.zoneIsStable=an(JD),this.componentTypes=[],this.components=[],this.isStable=an(yR).hasPendingTasks.pipe(zi(t=>t?hn(!1):this.zoneIsStable),function Na(n,e=Re){return n=n??Pa,$e((t,r)=>{let o,a=!0;t.subscribe(Pe(r,l=>{const d=e(l);(a||!n(o,d))&&(a=!1,o=d,r.next(l))}))})}(),ra()),this._injector=an(Dc)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(t,r){const o=t instanceof UD;if(!this._injector.get(N5).done)throw!o&&function Ud(n){const e=yr(n)||bi(n)||hi(n);return null!==e&&e.standalone}(t),new Bt(405,!1);let l;l=o?t:this._injector.get(Pw).resolveComponentFactory(t),this.componentTypes.push(l.componentType);const d=function gJ(n){return n.isBoundToModule}(l)?void 0:this._injector.get(Ih),y=l.create(Ja.NULL,[],r||l.selector,d),O=y.location.nativeElement,H=y.injector.get(ER,null);return H?.registerApplication(O),y.onDestroy(()=>{this.detachView(y.hostView),ob(this.components,y),H?.unregisterApplication(O)}),this._loadComponent(y),y}tick(){if(this._runningTick)throw new Bt(101,!1);try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this.internalErrorHandler(t)}finally{this._runningTick=!1}}attachView(t){const r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){const r=t;ob(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);const r=this._injector.get($5,[]);r.push(...this._bootstrapListeners),r.forEach(o=>o(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>ob(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Bt(406,!1);const t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ob(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const PR=new qt("",{providedIn:"root",factory:()=>an(Hu).handleError.bind(void 0)});function bJ(){const n=an(li),e=an(Hu);return t=>n.runOutsideAngular(()=>e.handleError(t))}let _J=(()=>{class n{constructor(){this.zone=an(li),this.applicationRef=an(R0)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();let c1=(()=>{class n{static#e=this.__NG_ELEMENT_ID__=CJ}return n})();function CJ(n){return function xJ(n,e,t){if(Pu(n)&&!t){const r=Rs(n.index,e);return new Wm(r,r)}return 47&n.type?new Wm(e[Bi],e):null}(Co(),Tt(),16==(16&n))}class UR{constructor(){}supports(e){return Vw(e)}create(e){return new RJ(e)}}const TJ=(n,e)=>e;class RJ{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||TJ}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,r=this._removalsHead,o=0,a=null;for(;t||r;){const l=!r||t&&t.currentIndex<jR(r,o,a)?t:r,d=jR(l,o,a),p=l.currentIndex;if(l===r)o--,r=r._nextRemoved;else if(t=t._next,null==l.previousIndex)o++;else{a||(a=[]);const y=d-o,O=p-o;if(y!=O){for(let Ee=0;Ee<y;Ee++){const Ue=Ee<a.length?a[Ee]:a[Ee]=0,He=Ue+Ee;O<=He&&He<y&&(a[Ee]=Ue+1)}a[l.previousIndex]=O-y}}d!==p&&e(l,d,p)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!Vw(e))throw new Bt(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let o,a,l,t=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let d=0;d<this.length;d++)a=e[d],l=this._trackByFn(d,a),null!==t&&Object.is(t.trackById,l)?(r&&(t=this._verifyReinsertion(t,a,l,d)),Object.is(t.item,a)||this._addIdentityChange(t,a)):(t=this._mismatch(t,a,l,d),r=!0),t=t._next}else o=0,function dG(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{const t=n[Symbol.iterator]();let r;for(;!(r=t.next()).done;)e(r.value)}}(e,d=>{l=this._trackByFn(o,d),null!==t&&Object.is(t.trackById,l)?(r&&(t=this._verifyReinsertion(t,d,l,o)),Object.is(t.item,d)||this._addIdentityChange(t,d)):(t=this._mismatch(t,d,l,o),r=!0),t=t._next,o++}),this.length=o;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,r,o){let a;return null===e?a=this._itTail:(a=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,a,o)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,a,o)):e=this._addAfter(new OJ(t,r),a,o),e}_verifyReinsertion(e,t,r,o){let a=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==a?e=this._reinsertAfter(a,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const o=e._prevRemoved,a=e._nextRemoved;return null===o?this._removalsHead=a:o._nextRemoved=a,null===a?this._removalsTail=o:a._prevRemoved=o,this._insertAfter(e,t,r),this._addToMoves(e,r),e}_moveAfter(e,t,r){return this._unlink(e),this._insertAfter(e,t,r),this._addToMoves(e,r),e}_addAfter(e,t,r){return this._insertAfter(e,t,r),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,r){const o=null===t?this._itHead:t._next;return e._next=o,e._prev=t,null===o?this._itTail=e:o._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new $R),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,r=e._next;return null===t?this._itHead=r:t._next=r,null===r?this._itTail=t:r._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new $R),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class OJ{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class MJ{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===t||t<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const t=e._prevDup,r=e._nextDup;return null===t?this._head=r:t._nextDup=r,null===r?this._tail=t:r._prevDup=t,null===this._head}}class $R{constructor(){this.map=new Map}put(e){const t=e.trackById;let r=this.map.get(t);r||(r=new MJ,this.map.set(t,r)),r.add(e)}get(e,t){const o=this.map.get(e);return o?o.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function jR(n,e,t){const r=n.previousIndex;if(null===r)return r;let o=0;return t&&r<t.length&&(o=t[r]),r+e+o}class VR{constructor(){}supports(e){return e instanceof Map||KC(e)}create(){return new NJ}}class NJ{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||KC(e)))throw new Bt(900,!1)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,o)=>{if(t&&t.key===o)this._maybeAddToChanges(t,r),this._appendAfter=t,t=t._next;else{const a=this._getOrCreateRecordForKey(o,r);t=this._insertBeforeOrAppend(t,a)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let r=t;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const r=e._prev;return t._next=e,t._prev=r,e._prev=t,r&&(r._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const o=this._records.get(e);this._maybeAddToChanges(o,t);const a=o._prev,l=o._next;return a&&(a._next=l),l&&(l._prev=a),o._next=null,o._prev=null,o}const r=new PJ(e);return this._records.set(e,r),r.currentValue=t,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(r=>t(e[r],r))}}class PJ{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}function HR(){return new cb([new UR])}let cb=(()=>{class n{static#e=this.\u0275prov=vn({token:n,providedIn:"root",factory:HR});constructor(t){this.factories=t}static create(t,r){if(null!=r){const o=r.factories.slice();t=t.concat(o)}return new n(t)}static extend(t){return{provide:n,useFactory:r=>n.create(t,r||HR()),deps:[[n,new lw,new cw]]}}find(t){const r=this.factories.find(o=>o.supports(t));if(null!=r)return r;throw new Bt(901,!1)}}return n})();function zR(){return new l1([new VR])}let l1=(()=>{class n{static#e=this.\u0275prov=vn({token:n,providedIn:"root",factory:zR});constructor(t){this.factories=t}static create(t,r){if(r){const o=r.factories.slice();t=t.concat(o)}return new n(t)}static extend(t){return{provide:n,useFactory:r=>n.create(t,r||zR()),deps:[[n,new lw,new cw]]}}find(t){const r=this.factories.find(o=>o.supports(t));if(r)return r;throw new Bt(901,!1)}}return n})();const BJ=IR(null,"core",[]);let FJ=(()=>{class n{constructor(t){}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(R0))};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({})}return n})();function O0(n){return"boolean"==typeof n?n:null!=n&&"false"!==n}let G5=null;function ff(){return G5}class QJ{}const ec=new qt("DocumentToken");let q5=(()=>{class n{historyGo(t){throw new Error("Not implemented")}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return an(eQ)},providedIn:"platform"})}return n})();const XJ=new qt("Location Initialized");let eQ=(()=>{class n extends q5{constructor(){super(),this._doc=an(ec),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ff().getBaseHref(this._doc)}onPopState(t){const r=ff().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){const r=ff().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,o){this._history.pushState(t,r,o)}replaceState(t,r,o){this._history.replaceState(t,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return new n},providedIn:"platform"})}return n})();function K5(n,e){if(0==n.length)return e;if(0==e.length)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,2==t?n+e.substring(1):1==t?n+e:n+"/"+e}function XR(n){const e=n.match(/#|\?|$/),t=e&&e.index||n.length;return n.slice(0,t-("/"===n[t-1]?1:0))+n.slice(t)}function Yu(n){return n&&"?"!==n[0]?"?"+n:n}let Th=(()=>{class n{historyGo(t){throw new Error("Not implemented")}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return an(tO)},providedIn:"root"})}return n})();const eO=new qt("appBaseHref");let tO=(()=>{class n extends Th{constructor(t,r){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??an(ec).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return K5(this._baseHref,t)}path(t=!1){const r=this._platformLocation.pathname+Yu(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${r}${o}`:r}pushState(t,r,o,a){const l=this.prepareExternalUrl(o+Yu(a));this._platformLocation.pushState(t,r,l)}replaceState(t,r,o,a){const l=this.prepareExternalUrl(o+Yu(a));this._platformLocation.replaceState(t,r,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(q5),Dn(eO,8))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tQ=(()=>{class n extends Th{constructor(t,r){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(t){const r=K5(this._baseHref,t);return r.length>0?"#"+r:r}pushState(t,r,o,a){let l=this.prepareExternalUrl(o+Yu(a));0==l.length&&(l=this._platformLocation.pathname),this._platformLocation.pushState(t,r,l)}replaceState(t,r,o,a){let l=this.prepareExternalUrl(o+Yu(a));0==l.length&&(l=this._platformLocation.pathname),this._platformLocation.replaceState(t,r,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(q5),Dn(eO,8))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})(),Y5=(()=>{class n{constructor(t){this._subject=new gr,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;const r=this._locationStrategy.getBaseHref();this._basePath=function iQ(n){if(new RegExp("^(https?:)?//").test(n)){const[,t]=n.split(/\/\/[^\/]+/);return t}return n}(XR(nO(r))),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+Yu(r))}normalize(t){return n.stripTrailingSlash(function rQ(n,e){if(!n||!e.startsWith(n))return e;const t=e.substring(n.length);return""===t||["/",";","?","#"].includes(t[0])?t:e}(this._basePath,nO(t)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",o=null){this._locationStrategy.pushState(o,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Yu(r)),o)}replaceState(t,r="",o=null){this._locationStrategy.replaceState(o,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Yu(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(o=>o(t,r))}subscribe(t,r,o){return this._subject.subscribe({next:t,error:r,complete:o})}static#e=this.normalizeQueryParams=Yu;static#t=this.joinWithSlash=K5;static#n=this.stripTrailingSlash=XR;static#r=this.\u0275fac=function(r){return new(r||n)(Dn(Th))};static#i=this.\u0275prov=vn({token:n,factory:function(){return function nQ(){return new Y5(Dn(Th))}()},providedIn:"root"})}return n})();function nO(n){return n.replace(/\/index.html$/,"")}const s4=/\s+/,dO=[];let a4=(()=>{class n{constructor(t,r,o,a){this._iterableDiffers=t,this._keyValueDiffers=r,this._ngEl=o,this._renderer=a,this.initialClasses=dO,this.stateMap=new Map}set klass(t){this.initialClasses=null!=t?t.trim().split(s4):dO}set ngClass(t){this.rawClass="string"==typeof t?t.trim().split(s4):t}ngDoCheck(){for(const r of this.initialClasses)this._updateState(r,!0);const t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(const r of t)this._updateState(r,!0);else if(null!=t)for(const r of Object.keys(t))this._updateState(r,!!t[r]);this._applyStateDiff()}_updateState(t,r){const o=this.stateMap.get(t);void 0!==o?(o.enabled!==r&&(o.changed=!0,o.enabled=r),o.touched=!0):this.stateMap.set(t,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(const t of this.stateMap){const r=t[0],o=t[1];o.changed?(this._toggleClass(r,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),o.touched=!1}}_toggleClass(t,r){(t=t.trim()).length>0&&t.split(s4).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(cb),Dt(l1),Dt(go),Dt(Kl))};static#t=this.\u0275dir=fn({type:n,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0})}return n})();class zQ{constructor(e,t,r,o){this.$implicit=e,this.ngForOf=t,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let hO=(()=>{class n{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,r,o){this._viewContainer=t,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const r=this._viewContainer;t.forEachOperation((o,a,l)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new zQ(o.item,this._ngForOf,-1,-1),null===l?void 0:l);else if(null==l)r.remove(null===a?void 0:a);else if(null!==a){const d=r.get(a);r.move(d,l),pO(d,o)}});for(let o=0,a=r.length;o<a;o++){const d=r.get(o).context;d.index=o,d.count=a,d.ngForOf=this._ngForOf}t.forEachIdentityChange(o=>{pO(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(t,r){return!0}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(hl),Dt(Vr),Dt(cb))};static#t=this.\u0275dir=fn({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}return n})();function pO(n,e){n.context.$implicit=e.item}let bb=(()=>{class n{constructor(t,r){this._viewContainer=t,this._context=new WQ,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){gO("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){gO("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,r){return!0}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(hl),Dt(Vr))};static#t=this.\u0275dir=fn({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}return n})();class WQ{constructor(){this.$implicit=null,this.ngIf=null}}function gO(n,e){if(e&&!e.createEmbeddedView)throw new Error(`${n} must be a TemplateRef, but received '${Ur(e)}'.`)}let u4=(()=>{class n{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(t){if(t.ngTemplateOutlet||t.ngTemplateOutletInjector){const r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:o,ngTemplateOutletContext:a,ngTemplateOutletInjector:l}=this;this._viewRef=r.createEmbeddedView(o,a,l?{injector:l}:void 0)}else this._viewRef=null}else this._viewRef&&t.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(hl))};static#t=this.\u0275dir=fn({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Eo]})}return n})(),h4=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({})}return n})();function wO(n){return"server"===n}let _X=(()=>{class n{static#e=this.\u0275prov=vn({token:n,providedIn:"root",factory:()=>new EX(Dn(ec),window)})}return n})();class EX{constructor(e,t){this.document=e,this.window=t,this.offset=()=>[0,0]}setOffset(e){this.offset=Array.isArray(e)?()=>e:e}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(!this.supportsScrolling())return;const t=function CX(n,e){const t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if("function"==typeof n.createTreeWalker&&n.body&&"function"==typeof n.body.attachShadow){const r=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const a=o.shadowRoot;if(a){const l=a.getElementById(e)||a.querySelector(`[name="${e}"]`);if(l)return l}o=r.nextNode()}}return null}(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.supportsScrolling()&&(this.window.history.scrollRestoration=e)}scrollToElement(e){const t=e.getBoundingClientRect(),r=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(r-a[0],o-a[1])}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}class GX extends QJ{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class m4 extends GX{static makeCurrent(){!function JJ(n){G5||(G5=n)}(new m4)}onAndCancel(e,t,r){return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=function qX(){return h1=h1||document.querySelector("base"),h1?h1.getAttribute("href"):null}();return null==t?null:function KX(n){Cb=Cb||document.createElement("a"),Cb.setAttribute("href",n);const e=Cb.pathname;return"/"===e.charAt(0)?e:`/${e}`}(t)}resetBaseElement(){h1=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return function VQ(n,e){e=encodeURIComponent(e);for(const t of n.split(";")){const r=t.indexOf("="),[o,a]=-1==r?[t,""]:[t.slice(0,r),t.slice(r+1)];if(o.trim()===e)return decodeURIComponent(a)}return null}(document.cookie,e)}}let Cb,h1=null,JX=(()=>{class n{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();const y4=new qt("EventManagerPlugins");let xO=(()=>{class n{constructor(t,r){this._zone=r,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,o){return this._findPluginFor(r).addEventListener(t,r,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(a=>a.supports(t)),!r)throw new Bt(5101,!1);return this._eventNameToPlugin.set(t,r),r}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(y4),Dn(li))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();class AO{constructor(e){this._doc=e}}const v4="ng-app-id";let SO=(()=>{class n{constructor(t,r,o,a={}){this.doc=t,this.appId=r,this.nonce=o,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=wO(a),this.resetHostNodes()}addStyles(t){for(const r of t)1===this.changeUsageCount(r,1)&&this.onStyleAdded(r)}removeStyles(t){for(const r of t)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){const t=this.styleNodesInDOM;t&&(t.forEach(r=>r.remove()),t.clear());for(const r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(const r of this.getAllStyles())this.addStyleToHost(t,r)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(const r of this.hostNodes)this.addStyleToHost(r,t)}onStyleRemoved(t){const r=this.styleRef;r.get(t)?.elements?.forEach(o=>o.remove()),r.delete(t)}collectServerRenderedStyles(){const t=this.doc.head?.querySelectorAll(`style[${v4}="${this.appId}"]`);if(t?.length){const r=new Map;return t.forEach(o=>{null!=o.textContent&&r.set(o.textContent,o)}),r}return null}changeUsageCount(t,r){const o=this.styleRef;if(o.has(t)){const a=o.get(t);return a.usage+=r,a.usage}return o.set(t,{usage:r,elements:[]}),r}getStyleElement(t,r){const o=this.styleNodesInDOM,a=o?.get(r);if(a?.parentNode===t)return o.delete(r),a.removeAttribute(v4),a;{const l=this.doc.createElement("style");return this.nonce&&l.setAttribute("nonce",this.nonce),l.textContent=r,this.platformIsServer&&l.setAttribute(v4,this.appId),l}}addStyleToHost(t,r){const o=this.getStyleElement(t,r);t.appendChild(o);const a=this.styleRef,l=a.get(r)?.elements;l?l.push(o):a.set(r,{elements:[o],usage:1})}resetHostNodes(){const t=this.hostNodes;t.clear(),t.add(this.doc.head)}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(ec),Dn(Dw),Dn(kD,8),Dn(l0))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();const w4={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},b4=/%COMP%/g,tee=new qt("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>!1});function DO(n,e){return e.map(t=>t.replace(b4,n))}let TO=(()=>{class n{constructor(t,r,o,a,l,d,p,y=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=l,this.platformId=d,this.ngZone=p,this.nonce=y,this.rendererByCompId=new Map,this.platformIsServer=wO(d),this.defaultRenderer=new _4(t,l,p,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Fa.ShadowDom&&(r={...r,encapsulation:Fa.Emulated});const o=this.getOrCreateRenderer(t,r);return o instanceof OO?o.applyToHost(t):o instanceof E4&&o.applyStyles(),o}getOrCreateRenderer(t,r){const o=this.rendererByCompId;let a=o.get(r.id);if(!a){const l=this.doc,d=this.ngZone,p=this.eventManager,y=this.sharedStylesHost,O=this.removeStylesOnCompDestroy,H=this.platformIsServer;switch(r.encapsulation){case Fa.Emulated:a=new OO(p,y,r,this.appId,O,l,d,H);break;case Fa.ShadowDom:return new oee(p,y,t,r,l,d,this.nonce,H);default:a=new E4(p,y,r,O,l,d,H)}o.set(r.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(xO),Dn(SO),Dn(Dw),Dn(tee),Dn(ec),Dn(l0),Dn(li),Dn(kD))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();class _4{constructor(e,t,r,o){this.eventManager=e,this.doc=t,this.ngZone=r,this.platformIsServer=o,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(w4[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(RO(e)?e.content:e).appendChild(t)}insertBefore(e,t,r){e&&(RO(e)?e.content:e).insertBefore(t,r)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let r="string"==typeof e?this.doc.querySelector(e):e;if(!r)throw new Bt(-5104,!1);return t||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,r,o){if(o){t=o+":"+t;const a=w4[o];a?e.setAttributeNS(a,t,r):e.setAttribute(t,r)}else e.setAttribute(t,r)}removeAttribute(e,t,r){if(r){const o=w4[r];o?e.removeAttributeNS(o,t):e.removeAttribute(`${r}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,r,o){o&(nf.DashCase|nf.Important)?e.style.setProperty(t,r,o&nf.Important?"important":""):e.style[t]=r}removeStyle(e,t,r){r&nf.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,r){e[t]=r}setValue(e,t){e.nodeValue=t}listen(e,t,r){if("string"==typeof e&&!(e=ff().getGlobalEventTarget(this.doc,e)))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(r))}decoratePreventDefault(e){return t=>{if("__ngUnwrap__"===t)return e;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))&&t.preventDefault()}}}function RO(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class oee extends _4{constructor(e,t,r,o,a,l,d,p){super(e,a,l,p),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const y=DO(o.id,o.styles);for(const O of y){const H=document.createElement("style");d&&H.setAttribute("nonce",d),H.textContent=O,this.shadowRoot.appendChild(H)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,r){return super.insertBefore(this.nodeOrShadowRoot(e),t,r)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class E4 extends _4{constructor(e,t,r,o,a,l,d,p){super(e,a,l,d),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o,this.styles=p?DO(p,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class OO extends E4{constructor(e,t,r,o,a,l,d,p){const y=o+"-"+r.id;super(e,t,r,a,l,d,p,y),this.contentAttr=function nee(n){return"_ngcontent-%COMP%".replace(b4,n)}(y),this.hostAttr=function ree(n){return"_nghost-%COMP%".replace(b4,n)}(y)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){const r=super.createElement(e,t);return super.setAttribute(r,this.contentAttr,""),r}}let see=(()=>{class n extends AO{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,o){return t.addEventListener(r,o,!1),()=>this.removeEventListener(t,r,o)}removeEventListener(t,r,o){return t.removeEventListener(r,o)}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(ec))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();const MO=["alt","control","meta","shift"],aee={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},cee={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let lee=(()=>{class n extends AO{constructor(t){super(t)}supports(t){return null!=n.parseEventName(t)}addEventListener(t,r,o){const a=n.parseEventName(r),l=n.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ff().onAndCancel(t,a.domEventName,l))}static parseEventName(t){const r=t.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const a=n._normalizeKey(r.pop());let l="",d=r.indexOf("code");if(d>-1&&(r.splice(d,1),l="code."),MO.forEach(y=>{const O=r.indexOf(y);O>-1&&(r.splice(O,1),l+=y+".")}),l+=a,0!=r.length||0===a.length)return null;const p={};return p.domEventName=o,p.fullKey=l,p}static matchEventFullKeyCode(t,r){let o=aee[t.key]||t.key,a="";return r.indexOf("code.")>-1&&(o=t.code,a="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),MO.forEach(l=>{l!==o&&(0,cee[l])(t)&&(a+=l+".")}),a+=o,a===r)}static eventCallback(t,r,o){return a=>{n.matchEventFullKeyCode(a,t)&&o.runGuarded(()=>r(a))}}static _normalizeKey(t){return"esc"===t?"escape":t}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(ec))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();const PO=[{provide:l0,useValue:"browser"},{provide:PD,useValue:function uee(){m4.makeCurrent()},multi:!0},{provide:ec,useFactory:function fee(){return function qz(n){aC=n}(document),document},deps:[]}],hee=IR(BJ,"browser",PO),pee=new qt(""),kO=[{provide:ib,useClass:class YX{addToWindow(e){zn.getAngularTestability=(r,o=!0)=>{const a=e.findTestabilityInTree(r,o);if(null==a)throw new Bt(5103,!1);return a},zn.getAllAngularTestabilities=()=>e.getAllTestabilities(),zn.getAllAngularRootElements=()=>e.getAllRootElements(),zn.frameworkStabilizers||(zn.frameworkStabilizers=[]),zn.frameworkStabilizers.push(r=>{const o=zn.getAllAngularTestabilities();let a=o.length,l=!1;const d=function(p){l=l||p,a--,0==a&&r(l)};o.forEach(p=>{p.whenStable(d)})})}findTestabilityInTree(e,t,r){return null==t?null:e.getTestability(t)??(r?ff().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},deps:[]},{provide:ER,useClass:L5,deps:[li,B5,ib]},{provide:L5,useClass:L5,deps:[li,B5,ib]}],LO=[{provide:mC,useValue:"root"},{provide:Hu,useFactory:function dee(){return new Hu},deps:[]},{provide:y4,useClass:see,multi:!0,deps:[ec,li,l0]},{provide:y4,useClass:lee,multi:!0,deps:[ec]},TO,SO,xO,{provide:jD,useExisting:TO},{provide:class xX{},useClass:JX,deps:[]},[]];let BO=(()=>{class n{constructor(t){}static withServerTransition(t){return{ngModule:n,providers:[{provide:Dw,useValue:t.appId}]}}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(pee,12))};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({providers:[...LO,...kO],imports:[h4,FJ]})}return n})(),FO=(()=>{class n{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(ec))};static#t=this.\u0275prov=vn({token:n,factory:function(r){let o=null;return o=r?new r:function mee(){return new FO(Dn(ec))}(),o},providedIn:"root"})}return n})();typeof window<"u"&&window;const{isArray:Eee}=Array,{getPrototypeOf:Cee,prototype:xee,keys:Aee}=Object;function VO(n){if(1===n.length){const e=n[0];if(Eee(e))return{args:e,keys:null};if(function See(n){return n&&"object"==typeof n&&Cee(n)===xee}(e)){const t=Aee(e);return{args:t.map(r=>e[r]),keys:t}}}return{args:n,keys:null}}const{isArray:Iee}=Array;function x4(n){return qe(e=>function Dee(n,e){return Iee(e)?n(...e):n(e)}(n,e))}function HO(n,e){return n.reduce((t,r,o)=>(t[r]=e[o],t),{})}function A4(...n){const e=Cr(n),t=Fn(n),{args:r,keys:o}=VO(n);if(0===r.length)return Hn([],e);const a=new xe(function Tee(n,e,t=Re){return r=>{zO(e,()=>{const{length:o}=n,a=new Array(o);let l=o,d=o;for(let p=0;p<o;p++)zO(e,()=>{const y=Hn(n[p],e);let O=!1;y.subscribe(Pe(r,H=>{a[p]=H,O||(O=!0,d--),d||r.next(t(a.slice()))},()=>{--l||r.complete()}))},r)},r)}}(r,e,o?l=>HO(o,l):Re));return t?a.pipe(x4(t)):a}function zO(n,e,t){n?St(t,n,e):e()}const xb=re(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function S4(...n){return function Ree(){return xn(1)}()(Hn(n,Cr(n)))}function WO(n){return new xe(e=>{Ct(n()).subscribe(e)})}function p1(n,e){const t=ie(n)?n:()=>n,r=o=>o.error(t());return new xe(e?o=>e.schedule(r,0,o):r)}function I4(){return $e((n,e)=>{let t=null;n._refCount++;const r=Pe(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount)return void(t=null);const o=n._connection,a=t;t=null,o&&(!a||o===a)&&o.unsubscribe(),e.unsubscribe()});n.subscribe(r),r.closed||(t=n.connect())})}class ZO extends xe{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Ie(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new ee;const t=this.getSubject();e.add(this.source.subscribe(Pe(t,void 0,()=>{this._teardown(),t.complete()},r=>{this._teardown(),t.error(r)},()=>this._teardown()))),e.closed&&(this._connection=null,e=ee.EMPTY)}return e}refCount(){return I4()(this)}}function N0(n){return n<=0?()=>nr:$e((e,t)=>{let r=0;e.subscribe(Pe(t,o=>{++r<=n&&(t.next(o),n<=r&&t.complete())}))})}function GO(...n){const e=Cr(n);return $e((t,r)=>{(e?S4(n,t,e):S4(n,t)).subscribe(r)})}function Xu(n,e){return $e((t,r)=>{let o=0;t.subscribe(Pe(r,a=>n.call(e,a,o++)&&r.next(a)))})}function Ab(n){return $e((e,t)=>{let r=!1;e.subscribe(Pe(t,o=>{r=!0,t.next(o)},()=>{r||t.next(n),t.complete()}))})}function qO(n=Oee){return $e((e,t)=>{let r=!1;e.subscribe(Pe(t,o=>{r=!0,t.next(o)},()=>r?t.complete():t.error(n())))})}function Oee(){return new xb}function Rh(n,e){const t=arguments.length>=2;return r=>r.pipe(n?Xu((o,a)=>n(o,a,r)):Re,N0(1),t?Ab(e):qO(()=>new xb))}function g1(n,e){return ie(e)?sn(n,e,1):sn(n,1)}function Zo(n,e,t){const r=ie(n)||e||t?{next:n,error:e,complete:t}:n;return r?$e((o,a)=>{var l;null===(l=r.subscribe)||void 0===l||l.call(r);let d=!0;o.subscribe(Pe(a,p=>{var y;null===(y=r.next)||void 0===y||y.call(r,p),a.next(p)},()=>{var p;d=!1,null===(p=r.complete)||void 0===p||p.call(r),a.complete()},p=>{var y;d=!1,null===(y=r.error)||void 0===y||y.call(r,p),a.error(p)},()=>{var p,y;d&&(null===(p=r.unsubscribe)||void 0===p||p.call(r)),null===(y=r.finalize)||void 0===y||y.call(r)}))}):Re}function Oh(n){return $e((e,t)=>{let a,r=null,o=!1;r=e.subscribe(Pe(t,void 0,void 0,l=>{a=Ct(n(l,Oh(n)(e))),r?(r.unsubscribe(),r=null,a.subscribe(t)):o=!0})),o&&(r.unsubscribe(),r=null,a.subscribe(t))})}function D4(n){return n<=0?()=>nr:$e((e,t)=>{let r=[];e.subscribe(Pe(t,o=>{r.push(o),n<r.length&&r.shift()},()=>{for(const o of r)t.next(o);t.complete()},void 0,()=>{r=null}))})}function T4(n){return $e((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Mh(n){return $e((e,t)=>{Ct(n).subscribe(Pe(t,()=>t.complete(),ae)),!t.closed&&e.subscribe(t)})}const or="primary",m1=Symbol("RouteTitle");class Lee{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function P0(n){return new Lee(n)}function Bee(n,e,t){const r=t.path.split("/");if(r.length>n.length||"full"===t.pathMatch&&(e.hasChildren()||r.length<n.length))return null;const o={};for(let a=0;a<r.length;a++){const l=r[a],d=n[a];if(l.startsWith(":"))o[l.substring(1)]=d;else if(l!==d.path)return null}return{consumed:n.slice(0,r.length),posParams:o}}function tu(n,e){const t=n?Object.keys(n):void 0,r=e?Object.keys(e):void 0;if(!t||!r||t.length!=r.length)return!1;let o;for(let a=0;a<t.length;a++)if(o=t[a],!KO(n[o],e[o]))return!1;return!0}function KO(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;const t=[...n].sort(),r=[...e].sort();return t.every((o,a)=>r[a]===o)}return n===e}function YO(n){return n.length>0?n[n.length-1]:null}function pf(n){return function _ee(n){return!!n&&(n instanceof xe||ie(n.lift)&&ie(n.subscribe))}(n)?n:Jm(n)?Hn(Promise.resolve(n)):hn(n)}const Uee={exact:function XO(n,e,t){if(!Nh(n.segments,e.segments)||!Sb(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(const r in e.children)if(!n.children[r]||!XO(n.children[r],e.children[r],t))return!1;return!0},subset:eM},JO={exact:function $ee(n,e){return tu(n,e)},subset:function jee(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>KO(n[t],e[t]))},ignored:()=>!0};function QO(n,e,t){return Uee[t.paths](n.root,e.root,t.matrixParams)&&JO[t.queryParams](n.queryParams,e.queryParams)&&!("exact"===t.fragment&&n.fragment!==e.fragment)}function eM(n,e,t){return tM(n,e,e.segments,t)}function tM(n,e,t,r){if(n.segments.length>t.length){const o=n.segments.slice(0,t.length);return!(!Nh(o,t)||e.hasChildren()||!Sb(o,t,r))}if(n.segments.length===t.length){if(!Nh(n.segments,t)||!Sb(n.segments,t,r))return!1;for(const o in e.children)if(!n.children[o]||!eM(n.children[o],e.children[o],r))return!1;return!0}{const o=t.slice(0,n.segments.length),a=t.slice(n.segments.length);return!!(Nh(n.segments,o)&&Sb(n.segments,o,r)&&n.children[or])&&tM(n.children[or],e,a,r)}}function Sb(n,e,t){return e.every((r,o)=>JO[t](n[o].parameters,r.parameters))}class k0{constructor(e=new ri([],{}),t={},r=null){this.root=e,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=P0(this.queryParams)),this._queryParamMap}toString(){return zee.serialize(this)}}class ri{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ib(this)}}class y1{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=P0(this.parameters)),this._parameterMap}toString(){return iM(this)}}function Nh(n,e){return n.length===e.length&&n.every((t,r)=>t.path===e[r].path)}let v1=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return new R4},providedIn:"root"})}return n})();class R4{parse(e){const t=new tte(e);return new k0(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){const t=`/${w1(e.root,!0)}`,r=function Gee(n){const e=Object.keys(n).map(t=>{const r=n[t];return Array.isArray(r)?r.map(o=>`${Db(t)}=${Db(o)}`).join("&"):`${Db(t)}=${Db(r)}`}).filter(t=>!!t);return e.length?`?${e.join("&")}`:""}(e.queryParams);return`${t}${r}${"string"==typeof e.fragment?`#${function Wee(n){return encodeURI(n)}(e.fragment)}`:""}`}}const zee=new R4;function Ib(n){return n.segments.map(e=>iM(e)).join("/")}function w1(n,e){if(!n.hasChildren())return Ib(n);if(e){const t=n.children[or]?w1(n.children[or],!1):"",r=[];return Object.entries(n.children).forEach(([o,a])=>{o!==or&&r.push(`${o}:${w1(a,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}{const t=function Hee(n,e){let t=[];return Object.entries(n.children).forEach(([r,o])=>{r===or&&(t=t.concat(e(o,r)))}),Object.entries(n.children).forEach(([r,o])=>{r!==or&&(t=t.concat(e(o,r)))}),t}(n,(r,o)=>o===or?[w1(n.children[or],!1)]:[`${o}:${w1(r,!1)}`]);return 1===Object.keys(n.children).length&&null!=n.children[or]?`${Ib(n)}/${t[0]}`:`${Ib(n)}/(${t.join("//")})`}}function nM(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Db(n){return nM(n).replace(/%3B/gi,";")}function O4(n){return nM(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Tb(n){return decodeURIComponent(n)}function rM(n){return Tb(n.replace(/\+/g,"%20"))}function iM(n){return`${O4(n.path)}${function Zee(n){return Object.keys(n).map(e=>`;${O4(e)}=${O4(n[e])}`).join("")}(n.parameters)}`}const qee=/^[^\/()?;#]+/;function M4(n){const e=n.match(qee);return e?e[0]:""}const Kee=/^[^\/()?;=#]+/,Jee=/^[^=?&#]+/,Xee=/^[^&#]+/;class tte{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new ri([],{}):new ri([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(r[or]=new ri(e,t)),r}parseSegment(){const e=M4(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new Bt(4009,!1);return this.capture(e),new y1(Tb(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=function Yee(n){const e=n.match(Kee);return e?e[0]:""}(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){const o=M4(this.remaining);o&&(r=o,this.capture(r))}e[Tb(t)]=Tb(r)}parseQueryParam(e){const t=function Qee(n){const e=n.match(Jee);return e?e[0]:""}(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){const l=function ete(n){const e=n.match(Xee);return e?e[0]:""}(this.remaining);l&&(r=l,this.capture(r))}const o=rM(t),a=rM(r);if(e.hasOwnProperty(o)){let l=e[o];Array.isArray(l)||(l=[l],e[o]=l),l.push(a)}else e[o]=a}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=M4(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new Bt(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):e&&(a=or);const l=this.parseChildren();t[a]=1===Object.keys(l).length?l[or]:new ri([],l),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new Bt(4011,!1)}}function oM(n){return n.segments.length>0?new ri([],{[or]:n}):n}function sM(n){const e={};for(const r of Object.keys(n.children)){const a=sM(n.children[r]);if(r===or&&0===a.segments.length&&a.hasChildren())for(const[l,d]of Object.entries(a.children))e[l]=d;else(a.segments.length>0||a.hasChildren())&&(e[r]=a)}return function nte(n){if(1===n.numberOfChildren&&n.children[or]){const e=n.children[or];return new ri(n.segments.concat(e.segments),e.children)}return n}(new ri(n.segments,e))}function Ph(n){return n instanceof k0}function aM(n){let e;const r=function t(a){const l={};for(const p of a.children){const y=t(p);l[p.outlet]=y}const d=new ri(a.url,l);return a===n&&(e=d),d}(n.root),o=oM(r);return e??o}function cM(n,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(0===e.length)return N4(o,o,o,t,r);const a=function ite(n){if("string"==typeof n[0]&&1===n.length&&"/"===n[0])return new uM(!0,0,n);let e=0,t=!1;const r=n.reduce((o,a,l)=>{if("object"==typeof a&&null!=a){if(a.outlets){const d={};return Object.entries(a.outlets).forEach(([p,y])=>{d[p]="string"==typeof y?y.split("/"):y}),[...o,{outlets:d}]}if(a.segmentPath)return[...o,a.segmentPath]}return"string"!=typeof a?[...o,a]:0===l?(a.split("/").forEach((d,p)=>{0==p&&"."===d||(0==p&&""===d?t=!0:".."===d?e++:""!=d&&o.push(d))}),o):[...o,a]},[]);return new uM(t,e,r)}(e);if(a.toRoot())return N4(o,o,new ri([],{}),t,r);const l=function ote(n,e,t){if(n.isAbsolute)return new Ob(e,!0,0);if(!t)return new Ob(e,!1,NaN);if(null===t.parent)return new Ob(t,!0,0);const r=Rb(n.commands[0])?0:1;return function ste(n,e,t){let r=n,o=e,a=t;for(;a>o;){if(a-=o,r=r.parent,!r)throw new Bt(4005,!1);o=r.segments.length}return new Ob(r,!1,o-a)}(t,t.segments.length-1+r,n.numberOfDoubleDots)}(a,o,n),d=l.processChildren?_1(l.segmentGroup,l.index,a.commands):dM(l.segmentGroup,l.index,a.commands);return N4(o,l.segmentGroup,d,t,r)}function Rb(n){return"object"==typeof n&&null!=n&&!n.outlets&&!n.segmentPath}function b1(n){return"object"==typeof n&&null!=n&&n.outlets}function N4(n,e,t,r,o){let l,a={};r&&Object.entries(r).forEach(([p,y])=>{a[p]=Array.isArray(y)?y.map(O=>`${O}`):`${y}`}),l=n===e?t:lM(n,e,t);const d=oM(sM(l));return new k0(d,a,o)}function lM(n,e,t){const r={};return Object.entries(n.children).forEach(([o,a])=>{r[o]=a===e?t:lM(a,e,t)}),new ri(n.segments,r)}class uM{constructor(e,t,r){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=r,e&&r.length>0&&Rb(r[0]))throw new Bt(4003,!1);const o=r.find(b1);if(o&&o!==YO(r))throw new Bt(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Ob{constructor(e,t,r){this.segmentGroup=e,this.processChildren=t,this.index=r}}function dM(n,e,t){if(n||(n=new ri([],{})),0===n.segments.length&&n.hasChildren())return _1(n,e,t);const r=function cte(n,e,t){let r=0,o=e;const a={match:!1,pathIndex:0,commandIndex:0};for(;o<n.segments.length;){if(r>=t.length)return a;const l=n.segments[o],d=t[r];if(b1(d))break;const p=`${d}`,y=r<t.length-1?t[r+1]:null;if(o>0&&void 0===p)break;if(p&&y&&"object"==typeof y&&void 0===y.outlets){if(!hM(p,y,l))return a;r+=2}else{if(!hM(p,{},l))return a;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(n,e,t),o=t.slice(r.commandIndex);if(r.match&&r.pathIndex<n.segments.length){const a=new ri(n.segments.slice(0,r.pathIndex),{});return a.children[or]=new ri(n.segments.slice(r.pathIndex),n.children),_1(a,0,o)}return r.match&&0===o.length?new ri(n.segments,{}):r.match&&!n.hasChildren()?P4(n,e,t):r.match?_1(n,0,o):P4(n,e,t)}function _1(n,e,t){if(0===t.length)return new ri(n.segments,{});{const r=function ate(n){return b1(n[0])?n[0].outlets:{[or]:n}}(t),o={};if(Object.keys(r).some(a=>a!==or)&&n.children[or]&&1===n.numberOfChildren&&0===n.children[or].segments.length){const a=_1(n.children[or],e,t);return new ri(n.segments,a.children)}return Object.entries(r).forEach(([a,l])=>{"string"==typeof l&&(l=[l]),null!==l&&(o[a]=dM(n.children[a],e,l))}),Object.entries(n.children).forEach(([a,l])=>{void 0===r[a]&&(o[a]=l)}),new ri(n.segments,o)}}function P4(n,e,t){const r=n.segments.slice(0,e);let o=0;for(;o<t.length;){const a=t[o];if(b1(a)){const p=lte(a.outlets);return new ri(r,p)}if(0===o&&Rb(t[0])){r.push(new y1(n.segments[e].path,fM(t[0]))),o++;continue}const l=b1(a)?a.outlets[or]:`${a}`,d=o<t.length-1?t[o+1]:null;l&&d&&Rb(d)?(r.push(new y1(l,fM(d))),o+=2):(r.push(new y1(l,{})),o++)}return new ri(r,{})}function lte(n){const e={};return Object.entries(n).forEach(([t,r])=>{"string"==typeof r&&(r=[r]),null!==r&&(e[t]=P4(new ri([],{}),0,r))}),e}function fM(n){const e={};return Object.entries(n).forEach(([t,r])=>e[t]=`${r}`),e}function hM(n,e,t){return n==t.path&&tu(e,t.parameters)}const E1="imperative";class nu{constructor(e,t){this.id=e,this.url=t}}class Mb extends nu{constructor(e,t,r="imperative",o=null){super(e,t),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class gf extends nu{constructor(e,t,r){super(e,t),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class C1 extends nu{constructor(e,t,r,o){super(e,t),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class L0 extends nu{constructor(e,t,r,o){super(e,t),this.reason=r,this.code=o,this.type=16}}class Nb extends nu{constructor(e,t,r,o){super(e,t),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class pM extends nu{constructor(e,t,r,o){super(e,t),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ute extends nu{constructor(e,t,r,o){super(e,t),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class dte extends nu{constructor(e,t,r,o,a){super(e,t),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=a,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class fte extends nu{constructor(e,t,r,o){super(e,t),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class hte extends nu{constructor(e,t,r,o){super(e,t),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class pte{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class gte{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class mte{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class yte{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class vte{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class wte{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class gM{constructor(e,t,r){this.routerEvent=e,this.position=t,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}class k4{}class L4{constructor(e){this.url=e}}class bte{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new x1,this.attachRef=null}}let x1=(()=>{class n{constructor(){this.contexts=new Map}onChildOutletCreated(t,r){const o=this.getOrCreateContext(t);o.outlet=r,this.contexts.set(t,o)}onChildOutletDestroyed(t){const r=this.getContext(t);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let r=this.getContext(t);return r||(r=new bte,this.contexts.set(t,r)),r}getContext(t){return this.contexts.get(t)||null}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class mM{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=B4(e,this._root);return t?t.children.map(r=>r.value):[]}firstChild(e){const t=B4(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=F4(e,this._root);return t.length<2?[]:t[t.length-2].children.map(o=>o.value).filter(o=>o!==e)}pathFromRoot(e){return F4(e,this._root).map(t=>t.value)}}function B4(n,e){if(n===e.value)return e;for(const t of e.children){const r=B4(n,t);if(r)return r}return null}function F4(n,e){if(n===e.value)return[e];for(const t of e.children){const r=F4(n,t);if(r.length)return r.unshift(e),r}return[]}class ed{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function B0(n){const e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}class yM extends mM{constructor(e,t){super(e),this.snapshot=t,U4(this,e)}toString(){return this.snapshot.toString()}}function vM(n,e){const t=function _te(n,e){const l=new Pb([],{},{},"",{},or,e,null,{});return new bM("",new ed(l,[]))}(0,e),r=new xi([new y1("",{})]),o=new xi({}),a=new xi({}),l=new xi({}),d=new xi(""),p=new F0(r,o,l,d,a,or,e,t.root);return p.snapshot=t.root,new yM(new ed(p,[]),t)}class F0{constructor(e,t,r,o,a,l,d,p){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=a,this.outlet=l,this.component=d,this._futureSnapshot=p,this.title=this.dataSubject?.pipe(qe(y=>y[m1]))??hn(void 0),this.url=e,this.params=t,this.queryParams=r,this.fragment=o,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(qe(e=>P0(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(qe(e=>P0(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function wM(n,e="emptyOnly"){const t=n.pathFromRoot;let r=0;if("always"!==e)for(r=t.length-1;r>=1;){const o=t[r],a=t[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(a.component)break;r--}}return function Ete(n){return n.reduce((e,t)=>({params:{...e.params,...t.params},data:{...e.data,...t.data},resolve:{...t.data,...e.resolve,...t.routeConfig?.data,...t._resolvedData}}),{params:{},data:{},resolve:{}})}(t.slice(r))}class Pb{get title(){return this.data?.[m1]}constructor(e,t,r,o,a,l,d,p,y){this.url=e,this.params=t,this.queryParams=r,this.fragment=o,this.data=a,this.outlet=l,this.component=d,this.routeConfig=p,this._resolve=y}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=P0(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=P0(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class bM extends mM{constructor(e,t){super(t),this.url=e,U4(this,t)}toString(){return _M(this._root)}}function U4(n,e){e.value._routerState=n,e.children.forEach(t=>U4(n,t))}function _M(n){const e=n.children.length>0?` { ${n.children.map(_M).join(", ")} } `:"";return`${n.value}${e}`}function $4(n){if(n.snapshot){const e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,tu(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),tu(e.params,t.params)||n.paramsSubject.next(t.params),function Fee(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!tu(n[t],e[t]))return!1;return!0}(e.url,t.url)||n.urlSubject.next(t.url),tu(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function j4(n,e){const t=tu(n.params,e.params)&&function Vee(n,e){return Nh(n,e)&&n.every((t,r)=>tu(t.parameters,e[r].parameters))}(n.url,e.url);return t&&!(!n.parent!=!e.parent)&&(!n.parent||j4(n.parent,e.parent))}let V4=(()=>{class n{constructor(){this.activated=null,this._activatedRoute=null,this.name=or,this.activateEvents=new gr,this.deactivateEvents=new gr,this.attachEvents=new gr,this.detachEvents=new gr,this.parentContexts=an(x1),this.location=an(hl),this.changeDetector=an(c1),this.environmentInjector=an(Dc),this.inputBinder=an(kb,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){const{firstChange:r,previousValue:o}=t.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;const t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Bt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Bt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Bt(4012,!1);this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,r){this.activated=t,this._activatedRoute=r,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,r){if(this.isActivated)throw new Bt(4013,!1);this._activatedRoute=t;const o=this.location,l=t.snapshot.component,d=this.parentContexts.getOrCreateContext(this.name).children,p=new Cte(t,d,o.injector);this.activated=o.createComponent(l,{index:o.length,injector:p,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275dir=fn({type:n,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Eo]})}return n})();class Cte{constructor(e,t,r){this.route=e,this.childContexts=t,this.parent=r}get(e,t){return e===F0?this.route:e===x1?this.childContexts:this.parent.get(e,t)}}const kb=new qt("");let EM=(()=>{class n{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){const{activatedRoute:r}=t,o=A4([r.queryParams,r.params,r.data]).pipe(zi(([a,l,d],p)=>(d={...a,...l,...d},0===p?hn(d):Promise.resolve(d)))).subscribe(a=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==r||null===r.component)return void this.unsubscribeFromRouteData(t);const l=function YJ(n){const e=yr(n);if(!e)return null;const t=new Zm(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}(r.component);if(l)for(const{templateName:d}of l.inputs)t.activatedComponentRef.setInput(d,a[d]);else this.unsubscribeFromRouteData(t)});this.outletDataSubscriptions.set(t,o)}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();function A1(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){const r=t.value;r._futureSnapshot=e.value;const o=function Ate(n,e,t){return e.children.map(r=>{for(const o of t.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return A1(n,r,o);return A1(n,r)})}(n,e,t);return new ed(r,o)}{if(n.shouldAttach(e.value)){const a=n.retrieve(e.value);if(null!==a){const l=a.route;return l.value._futureSnapshot=e.value,l.children=e.children.map(d=>A1(n,d)),l}}const r=function Ste(n){return new F0(new xi(n.url),new xi(n.params),new xi(n.queryParams),new xi(n.fragment),new xi(n.data),n.outlet,n.component,n)}(e.value),o=e.children.map(a=>A1(n,a));return new ed(r,o)}}const H4="ngNavigationCancelingError";function CM(n,e){const{redirectTo:t,navigationBehaviorOptions:r}=Ph(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,o=xM(!1,0,e);return o.url=t,o.navigationBehaviorOptions=r,o}function xM(n,e,t){const r=new Error("NavigationCancelingError: "+(n||""));return r[H4]=!0,r.cancellationCode=e,t&&(r.url=t),r}function AM(n){return n&&n[H4]}let SM=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275cmp=Xc({type:n,selectors:[["ng-component"]],standalone:!0,features:[A7],decls:1,vars:0,template:function(r,o){1&r&&So(0,"router-outlet")},dependencies:[V4],encapsulation:2})}return n})();function z4(n){const e=n.children&&n.children.map(z4),t=e?{...n,children:e}:{...n};return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==or&&(t.component=SM),t}function ml(n){return n.outlet||or}function S1(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){const t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}class Pte{constructor(e,t,r,o,a){this.routeReuseStrategy=e,this.futureState=t,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=a}activate(e){const t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,e),$4(this.futureState.root),this.activateChildRoutes(t,r,e)}deactivateChildRoutes(e,t,r){const o=B0(t);e.children.forEach(a=>{const l=a.value.outlet;this.deactivateRoutes(a,o[l],r),delete o[l]}),Object.values(o).forEach(a=>{this.deactivateRouteAndItsChildren(a,r)})}deactivateRoutes(e,t,r){const o=e.value,a=t?t.value:null;if(o===a)if(o.component){const l=r.getContext(o.outlet);l&&this.deactivateChildRoutes(e,t,l.children)}else this.deactivateChildRoutes(e,t,r);else a&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const r=t.getContext(e.value.outlet),o=r&&e.value.component?r.children:t,a=B0(e);for(const l of Object.keys(a))this.deactivateRouteAndItsChildren(a[l],o);if(r&&r.outlet){const l=r.outlet.detach(),d=r.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:l,route:e,contexts:d})}}deactivateRouteAndOutlet(e,t){const r=t.getContext(e.value.outlet),o=r&&e.value.component?r.children:t,a=B0(e);for(const l of Object.keys(a))this.deactivateRouteAndItsChildren(a[l],o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(e,t,r){const o=B0(t);e.children.forEach(a=>{this.activateRoutes(a,o[a.value.outlet],r),this.forwardEvent(new wte(a.value.snapshot))}),e.children.length&&this.forwardEvent(new yte(e.value.snapshot))}activateRoutes(e,t,r){const o=e.value,a=t?t.value:null;if($4(o),o===a)if(o.component){const l=r.getOrCreateContext(o.outlet);this.activateChildRoutes(e,t,l.children)}else this.activateChildRoutes(e,t,r);else if(o.component){const l=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const d=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),l.children.onOutletReAttached(d.contexts),l.attachRef=d.componentRef,l.route=d.route.value,l.outlet&&l.outlet.attach(d.componentRef,d.route.value),$4(d.route.value),this.activateChildRoutes(e,null,l.children)}else{const d=S1(o.snapshot);l.attachRef=null,l.route=o,l.injector=d,l.outlet&&l.outlet.activateWith(o,l.injector),this.activateChildRoutes(e,null,l.children)}}else this.activateChildRoutes(e,null,r)}}class IM{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class Lb{constructor(e,t){this.component=e,this.route=t}}function kte(n,e,t){const r=n._root;return I1(r,e?e._root:null,t,[r.value])}function U0(n,e){const t=Symbol(),r=e.get(n,t);return r===t?"function"!=typeof n||function Ip(n){return null!==Au(n)}(n)?e.get(n):n:r}function I1(n,e,t,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const a=B0(e);return n.children.forEach(l=>{(function Bte(n,e,t,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const a=n.value,l=e?e.value:null,d=t?t.getContext(n.value.outlet):null;if(l&&a.routeConfig===l.routeConfig){const p=function Fte(n,e,t){if("function"==typeof t)return t(n,e);switch(t){case"pathParamsChange":return!Nh(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Nh(n.url,e.url)||!tu(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!j4(n,e)||!tu(n.queryParams,e.queryParams);default:return!j4(n,e)}}(l,a,a.routeConfig.runGuardsAndResolvers);p?o.canActivateChecks.push(new IM(r)):(a.data=l.data,a._resolvedData=l._resolvedData),I1(n,e,a.component?d?d.children:null:t,r,o),p&&d&&d.outlet&&d.outlet.isActivated&&o.canDeactivateChecks.push(new Lb(d.outlet.component,l))}else l&&D1(e,d,o),o.canActivateChecks.push(new IM(r)),I1(n,null,a.component?d?d.children:null:t,r,o)})(l,a[l.value.outlet],t,r.concat([l.value]),o),delete a[l.value.outlet]}),Object.entries(a).forEach(([l,d])=>D1(d,t.getContext(l),o)),o}function D1(n,e,t){const r=B0(n),o=n.value;Object.entries(r).forEach(([a,l])=>{D1(l,o.component?e?e.children.getContext(a):null:e,t)}),t.canDeactivateChecks.push(new Lb(o.component&&e&&e.outlet&&e.outlet.isActivated?e.outlet.component:null,o))}function T1(n){return"function"==typeof n}function DM(n){return n instanceof xb||"EmptyError"===n?.name}const Bb=Symbol("INITIAL_VALUE");function $0(){return zi(n=>A4(n.map(e=>e.pipe(N0(1),GO(Bb)))).pipe(qe(e=>{for(const t of e)if(!0!==t){if(t===Bb)return Bb;if(!1===t||t instanceof k0)return t}return!0}),Xu(e=>e!==Bb),N0(1)))}function TM(n){return function ye(...n){return P(n)}(Zo(e=>{if(Ph(e))throw CM(0,e)}),qe(e=>!0===e))}class Fb{constructor(e){this.segmentGroup=e||null}}class RM{constructor(e){this.urlTree=e}}function j0(n){return p1(new Fb(n))}function OM(n){return p1(new RM(n))}class ine{constructor(e,t){this.urlSerializer=e,this.urlTree=t}noMatchError(e){return new Bt(4002,!1)}lineralizeSegments(e,t){let r=[],o=t.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return hn(r);if(o.numberOfChildren>1||!o.children[or])return p1(new Bt(4e3,!1));o=o.children[or]}}applyRedirectCommands(e,t,r){return this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,r)}applyRedirectCreateUrlTree(e,t,r,o){const a=this.createSegmentGroup(e,t.root,r,o);return new k0(a,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const r={};return Object.entries(e).forEach(([o,a])=>{if("string"==typeof a&&a.startsWith(":")){const d=a.substring(1);r[o]=t[d]}else r[o]=a}),r}createSegmentGroup(e,t,r,o){const a=this.createSegments(e,t.segments,r,o);let l={};return Object.entries(t.children).forEach(([d,p])=>{l[d]=this.createSegmentGroup(e,p,r,o)}),new ri(a,l)}createSegments(e,t,r,o){return t.map(a=>a.path.startsWith(":")?this.findPosParam(e,a,o):this.findOrReturn(a,r))}findPosParam(e,t,r){const o=r[t.path.substring(1)];if(!o)throw new Bt(4001,!1);return o}findOrReturn(e,t){let r=0;for(const o of t){if(o.path===e.path)return t.splice(r),o;r++}return e}}const W4={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function one(n,e,t,r,o){const a=Z4(n,e,t);return a.matched?(r=function Dte(n,e){return n.providers&&!n._injector&&(n._injector=v5(n.providers,e,`Route: ${n.path}`)),n._injector??e}(e,r),function tne(n,e,t,r){const o=e.canMatch;return o&&0!==o.length?hn(o.map(l=>{const d=U0(l,n);return pf(function zte(n){return n&&T1(n.canMatch)}(d)?d.canMatch(e,t):n.runInContext(()=>d(e,t)))})).pipe($0(),TM()):hn(!0)}(r,e,t).pipe(qe(l=>!0===l?a:{...W4}))):hn(a)}function Z4(n,e,t){if(""===e.path)return"full"===e.pathMatch&&(n.hasChildren()||t.length>0)?{...W4}:{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};const o=(e.matcher||Bee)(t,n,e);if(!o)return{...W4};const a={};Object.entries(o.posParams??{}).forEach(([d,p])=>{a[d]=p.path});const l=o.consumed.length>0?{...a,...o.consumed[o.consumed.length-1].parameters}:a;return{matched:!0,consumedSegments:o.consumed,remainingSegments:t.slice(o.consumed.length),parameters:l,positionalParamSegments:o.posParams??{}}}function MM(n,e,t,r){return t.length>0&&function cne(n,e,t){return t.some(r=>Ub(n,e,r)&&ml(r)!==or)}(n,t,r)?{segmentGroup:new ri(e,ane(r,new ri(t,n.children))),slicedSegments:[]}:0===t.length&&function lne(n,e,t){return t.some(r=>Ub(n,e,r))}(n,t,r)?{segmentGroup:new ri(n.segments,sne(n,0,t,r,n.children)),slicedSegments:t}:{segmentGroup:new ri(n.segments,n.children),slicedSegments:t}}function sne(n,e,t,r,o){const a={};for(const l of r)if(Ub(n,t,l)&&!o[ml(l)]){const d=new ri([],{});a[ml(l)]=d}return{...o,...a}}function ane(n,e){const t={};t[or]=e;for(const r of n)if(""===r.path&&ml(r)!==or){const o=new ri([],{});t[ml(r)]=o}return t}function Ub(n,e,t){return(!(n.hasChildren()||e.length>0)||"full"!==t.pathMatch)&&""===t.path}class hne{constructor(e,t,r,o,a,l,d){this.injector=e,this.configLoader=t,this.rootComponentType=r,this.config=o,this.urlTree=a,this.paramsInheritanceStrategy=l,this.urlSerializer=d,this.allowRedirects=!0,this.applyRedirects=new ine(this.urlSerializer,this.urlTree)}noMatchError(e){return new Bt(4002,!1)}recognize(){const e=MM(this.urlTree.root,[],[],this.config).segmentGroup;return this.processSegmentGroup(this.injector,this.config,e,or).pipe(Oh(t=>{if(t instanceof RM)return this.allowRedirects=!1,this.urlTree=t.urlTree,this.match(t.urlTree);throw t instanceof Fb?this.noMatchError(t):t}),qe(t=>{const r=new Pb([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},or,this.rootComponentType,null,{}),o=new ed(r,t),a=new bM("",o),l=function rte(n,e,t=null,r=null){return cM(aM(n),e,t,r)}(r,[],this.urlTree.queryParams,this.urlTree.fragment);return l.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(l),this.inheritParamsAndData(a._root),{state:a,tree:l}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e.root,or).pipe(Oh(r=>{throw r instanceof Fb?this.noMatchError(r):r}))}inheritParamsAndData(e){const t=e.value,r=wM(t,this.paramsInheritanceStrategy);t.params=Object.freeze(r.params),t.data=Object.freeze(r.data),e.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(e,t,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(e,t,r):this.processSegment(e,t,r,r.segments,o,!0)}processChildren(e,t,r){const o=[];for(const a of Object.keys(r.children))"primary"===a?o.unshift(a):o.push(a);return Hn(o).pipe(g1(a=>{const l=r.children[a],d=function Mte(n,e){const t=n.filter(r=>ml(r)===e);return t.push(...n.filter(r=>ml(r)!==e)),t}(t,a);return this.processSegmentGroup(e,d,l,a)}),function Nee(n,e){return $e(function Mee(n,e,t,r,o){return(a,l)=>{let d=t,p=e,y=0;a.subscribe(Pe(l,O=>{const H=y++;p=d?n(p,O,H):(d=!0,O),r&&l.next(p)},o&&(()=>{d&&l.next(p),l.complete()})))}}(n,e,arguments.length>=2,!0))}((a,l)=>(a.push(...l),a)),Ab(null),function Pee(n,e){const t=arguments.length>=2;return r=>r.pipe(n?Xu((o,a)=>n(o,a,r)):Re,D4(1),t?Ab(e):qO(()=>new xb))}(),sn(a=>{if(null===a)return j0(r);const l=NM(a);return function pne(n){n.sort((e,t)=>e.value.outlet===or?-1:t.value.outlet===or?1:e.value.outlet.localeCompare(t.value.outlet))}(l),hn(l)}))}processSegment(e,t,r,o,a,l){return Hn(t).pipe(g1(d=>this.processSegmentAgainstRoute(d._injector??e,t,d,r,o,a,l).pipe(Oh(p=>{if(p instanceof Fb)return hn(null);throw p}))),Rh(d=>!!d),Oh(d=>{if(DM(d))return function dne(n,e,t){return 0===e.length&&!n.children[t]}(r,o,a)?hn([]):j0(r);throw d}))}processSegmentAgainstRoute(e,t,r,o,a,l,d){return function une(n,e,t,r){return!!(ml(n)===r||r!==or&&Ub(e,t,n))&&("**"===n.path||Z4(e,n,t).matched)}(r,o,a,l)?void 0===r.redirectTo?this.matchSegmentAgainstRoute(e,o,r,a,l,d):d&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,o,t,r,a,l):j0(o):j0(o)}expandSegmentAgainstRouteUsingRedirect(e,t,r,o,a,l){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,r,o,l):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,r,o,a,l)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,r,o){const a=this.applyRedirects.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?OM(a):this.applyRedirects.lineralizeSegments(r,a).pipe(sn(l=>{const d=new ri(l,{});return this.processSegment(e,t,d,l,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,r,o,a,l){const{matched:d,consumedSegments:p,remainingSegments:y,positionalParamSegments:O}=Z4(t,o,a);if(!d)return j0(t);const H=this.applyRedirects.applyRedirectCommands(p,o.redirectTo,O);return o.redirectTo.startsWith("/")?OM(H):this.applyRedirects.lineralizeSegments(o,H).pipe(sn(Ee=>this.processSegment(e,r,t,Ee.concat(y),l,!1)))}matchSegmentAgainstRoute(e,t,r,o,a,l){let d;if("**"===r.path){const p=o.length>0?YO(o).parameters:{};d=hn({snapshot:new Pb(o,p,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,PM(r),ml(r),r.component??r._loadedComponent??null,r,kM(r)),consumedSegments:[],remainingSegments:[]}),t.children={}}else d=one(t,r,o,e).pipe(qe(({matched:p,consumedSegments:y,remainingSegments:O,parameters:H})=>p?{snapshot:new Pb(y,H,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,PM(r),ml(r),r.component??r._loadedComponent??null,r,kM(r)),consumedSegments:y,remainingSegments:O}:null));return d.pipe(zi(p=>null===p?j0(t):this.getChildConfig(e=r._injector??e,r,o).pipe(zi(({routes:y})=>{const O=r._loadedInjector??e,{snapshot:H,consumedSegments:Ee,remainingSegments:Ue}=p,{segmentGroup:He,slicedSegments:Ge}=MM(t,Ee,Ue,y);if(0===Ge.length&&He.hasChildren())return this.processChildren(O,y,He).pipe(qe(ft=>null===ft?null:[new ed(H,ft)]));if(0===y.length&&0===Ge.length)return hn([new ed(H,[])]);const at=ml(r)===a;return this.processSegment(O,y,He,Ge,at?or:a,!0).pipe(qe(ft=>[new ed(H,ft)]))}))))}getChildConfig(e,t,r){return t.children?hn({routes:t.children,injector:e}):t.loadChildren?void 0!==t._loadedRoutes?hn({routes:t._loadedRoutes,injector:t._loadedInjector}):function ene(n,e,t,r){const o=e.canLoad;return void 0===o||0===o.length?hn(!0):hn(o.map(l=>{const d=U0(l,n);return pf(function $te(n){return n&&T1(n.canLoad)}(d)?d.canLoad(e,t):n.runInContext(()=>d(e,t)))})).pipe($0(),TM())}(e,t,r).pipe(sn(o=>o?this.configLoader.loadChildren(e,t).pipe(Zo(a=>{t._loadedRoutes=a.routes,t._loadedInjector=a.injector})):function rne(n){return p1(xM(!1,3))}())):hn({routes:[],injector:e})}}function gne(n){const e=n.value.routeConfig;return e&&""===e.path}function NM(n){const e=[],t=new Set;for(const r of n){if(!gne(r)){e.push(r);continue}const o=e.find(a=>r.value.routeConfig===a.value.routeConfig);void 0!==o?(o.children.push(...r.children),t.add(o)):e.push(r)}for(const r of t){const o=NM(r.children);e.push(new ed(r.value,o))}return e.filter(r=>!t.has(r))}function PM(n){return n.data||{}}function kM(n){return n.resolve||{}}function LM(n){return"string"==typeof n.title||null===n.title}function G4(n){return zi(e=>{const t=n(e);return t?Hn(t).pipe(qe(()=>e)):hn(e)})}const V0=new qt("ROUTES");let q4=(()=>{class n{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=an(vR)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return hn(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);const r=pf(t.loadComponent()).pipe(qe(BM),Zo(a=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a}),T4(()=>{this.componentLoaders.delete(t)})),o=new ZO(r,()=>new z).pipe(I4());return this.componentLoaders.set(t,o),o}loadChildren(t,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return hn({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const a=function Ene(n,e,t,r){return pf(n.loadChildren()).pipe(qe(BM),sn(o=>o instanceof C7||Array.isArray(o)?hn(o):Hn(e.compileModuleAsync(o))),qe(o=>{r&&r(n);let a,l,d=!1;return Array.isArray(o)?(l=o,!0):(a=o.create(t).injector,l=a.get(V0,[],{optional:!0,self:!0}).flat()),{routes:l.map(z4),injector:a}}))}(r,this.compiler,t,this.onLoadEndListener).pipe(T4(()=>{this.childrenLoaders.delete(r)})),l=new ZO(a,()=>new z).pipe(I4());return this.childrenLoaders.set(r,l),l}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function BM(n){return function Cne(n){return n&&"object"==typeof n&&"default"in n}(n)?n.default:n}let $b=(()=>{class n{get hasRequestedNavigation(){return 0!==this.navigationId}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new z,this.transitionAbortSubject=new z,this.configLoader=an(q4),this.environmentInjector=an(Dc),this.urlSerializer=an(v1),this.rootContexts=an(x1),this.inputBindingEnabled=null!==an(kb,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>hn(void 0),this.rootComponentType=null,this.configLoader.onLoadEndListener=o=>this.events.next(new gte(o)),this.configLoader.onLoadStartListener=o=>this.events.next(new pte(o))}complete(){this.transitions?.complete()}handleNavigationRequest(t){const r=++this.navigationId;this.transitions?.next({...this.transitions.value,...t,id:r})}setupNavigations(t,r,o){return this.transitions=new xi({id:0,currentUrlTree:r,currentRawUrl:r,currentBrowserUrl:r,extractedUrl:t.urlHandlingStrategy.extract(r),urlAfterRedirects:t.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:E1,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Xu(a=>0!==a.id),qe(a=>({...a,extractedUrl:t.urlHandlingStrategy.extract(a.rawUrl)})),zi(a=>{this.currentTransition=a;let l=!1,d=!1;return hn(a).pipe(Zo(p=>{this.currentNavigation={id:p.id,initialUrl:p.rawUrl,extractedUrl:p.extractedUrl,trigger:p.source,extras:p.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),zi(p=>{const y=p.currentBrowserUrl.toString(),O=!t.navigated||p.extractedUrl.toString()!==y||y!==p.currentUrlTree.toString();if(!O&&"reload"!==(p.extras.onSameUrlNavigation??t.onSameUrlNavigation)){const Ee="";return this.events.next(new L0(p.id,this.urlSerializer.serialize(p.rawUrl),Ee,0)),p.resolve(null),nr}if(t.urlHandlingStrategy.shouldProcessUrl(p.rawUrl))return hn(p).pipe(zi(Ee=>{const Ue=this.transitions?.getValue();return this.events.next(new Mb(Ee.id,this.urlSerializer.serialize(Ee.extractedUrl),Ee.source,Ee.restoredState)),Ue!==this.transitions?.getValue()?nr:Promise.resolve(Ee)}),function mne(n,e,t,r,o,a){return sn(l=>function fne(n,e,t,r,o,a,l="emptyOnly"){return new hne(n,e,t,r,o,l,a).recognize()}(n,e,t,r,l.extractedUrl,o,a).pipe(qe(({state:d,tree:p})=>({...l,targetSnapshot:d,urlAfterRedirects:p}))))}(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,t.paramsInheritanceStrategy),Zo(Ee=>{a.targetSnapshot=Ee.targetSnapshot,a.urlAfterRedirects=Ee.urlAfterRedirects,this.currentNavigation={...this.currentNavigation,finalUrl:Ee.urlAfterRedirects};const Ue=new pM(Ee.id,this.urlSerializer.serialize(Ee.extractedUrl),this.urlSerializer.serialize(Ee.urlAfterRedirects),Ee.targetSnapshot);this.events.next(Ue)}));if(O&&t.urlHandlingStrategy.shouldProcessUrl(p.currentRawUrl)){const{id:Ee,extractedUrl:Ue,source:He,restoredState:Ge,extras:at}=p,ft=new Mb(Ee,this.urlSerializer.serialize(Ue),He,Ge);this.events.next(ft);const dt=vM(0,this.rootComponentType).snapshot;return this.currentTransition=a={...p,targetSnapshot:dt,urlAfterRedirects:Ue,extras:{...at,skipLocationChange:!1,replaceUrl:!1}},hn(a)}{const Ee="";return this.events.next(new L0(p.id,this.urlSerializer.serialize(p.extractedUrl),Ee,1)),p.resolve(null),nr}}),Zo(p=>{const y=new ute(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(y)}),qe(p=>(this.currentTransition=a={...p,guards:kte(p.targetSnapshot,p.currentSnapshot,this.rootContexts)},a)),function Zte(n,e){return sn(t=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:a,canDeactivateChecks:l}}=t;return 0===l.length&&0===a.length?hn({...t,guardsResult:!0}):function Gte(n,e,t,r){return Hn(n).pipe(sn(o=>function Xte(n,e,t,r,o){const a=e&&e.routeConfig?e.routeConfig.canDeactivate:null;return a&&0!==a.length?hn(a.map(d=>{const p=S1(e)??o,y=U0(d,p);return pf(function Hte(n){return n&&T1(n.canDeactivate)}(y)?y.canDeactivate(n,e,t,r):p.runInContext(()=>y(n,e,t,r))).pipe(Rh())})).pipe($0()):hn(!0)}(o.component,o.route,t,e,r)),Rh(o=>!0!==o,!0))}(l,r,o,n).pipe(sn(d=>d&&function Ute(n){return"boolean"==typeof n}(d)?function qte(n,e,t,r){return Hn(e).pipe(g1(o=>S4(function Yte(n,e){return null!==n&&e&&e(new mte(n)),hn(!0)}(o.route.parent,r),function Kte(n,e){return null!==n&&e&&e(new vte(n)),hn(!0)}(o.route,r),function Qte(n,e,t){const r=e[e.length-1],a=e.slice(0,e.length-1).reverse().map(l=>function Lte(n){const e=n.routeConfig?n.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:n,guards:e}:null}(l)).filter(l=>null!==l).map(l=>WO(()=>hn(l.guards.map(p=>{const y=S1(l.node)??t,O=U0(p,y);return pf(function Vte(n){return n&&T1(n.canActivateChild)}(O)?O.canActivateChild(r,n):y.runInContext(()=>O(r,n))).pipe(Rh())})).pipe($0())));return hn(a).pipe($0())}(n,o.path,t),function Jte(n,e,t){const r=e.routeConfig?e.routeConfig.canActivate:null;if(!r||0===r.length)return hn(!0);const o=r.map(a=>WO(()=>{const l=S1(e)??t,d=U0(a,l);return pf(function jte(n){return n&&T1(n.canActivate)}(d)?d.canActivate(e,n):l.runInContext(()=>d(e,n))).pipe(Rh())}));return hn(o).pipe($0())}(n,o.route,t))),Rh(o=>!0!==o,!0))}(r,a,n,e):hn(d)),qe(d=>({...t,guardsResult:d})))})}(this.environmentInjector,p=>this.events.next(p)),Zo(p=>{if(a.guardsResult=p.guardsResult,Ph(p.guardsResult))throw CM(0,p.guardsResult);const y=new dte(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot,!!p.guardsResult);this.events.next(y)}),Xu(p=>!!p.guardsResult||(this.cancelNavigationTransition(p,"",3),!1)),G4(p=>{if(p.guards.canActivateChecks.length)return hn(p).pipe(Zo(y=>{const O=new fte(y.id,this.urlSerializer.serialize(y.extractedUrl),this.urlSerializer.serialize(y.urlAfterRedirects),y.targetSnapshot);this.events.next(O)}),zi(y=>{let O=!1;return hn(y).pipe(function yne(n,e){return sn(t=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=t;if(!o.length)return hn(t);let a=0;return Hn(o).pipe(g1(l=>function vne(n,e,t,r){const o=n.routeConfig,a=n._resolve;return void 0!==o?.title&&!LM(o)&&(a[m1]=o.title),function wne(n,e,t,r){const o=function bne(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}(n);if(0===o.length)return hn({});const a={};return Hn(o).pipe(sn(l=>function _ne(n,e,t,r){const o=S1(e)??r,a=U0(n,o);return pf(a.resolve?a.resolve(e,t):o.runInContext(()=>a(e,t)))}(n[l],e,t,r).pipe(Rh(),Zo(d=>{a[l]=d}))),D4(1),function kee(n){return qe(()=>n)}(a),Oh(l=>DM(l)?nr:p1(l)))}(a,n,e,r).pipe(qe(l=>(n._resolvedData=l,n.data=wM(n,t).resolve,o&&LM(o)&&(n.data[m1]=o.title),null)))}(l.route,r,n,e)),Zo(()=>a++),D4(1),sn(l=>a===o.length?hn(t):nr))})}(t.paramsInheritanceStrategy,this.environmentInjector),Zo({next:()=>O=!0,complete:()=>{O||this.cancelNavigationTransition(y,"",2)}}))}),Zo(y=>{const O=new hte(y.id,this.urlSerializer.serialize(y.extractedUrl),this.urlSerializer.serialize(y.urlAfterRedirects),y.targetSnapshot);this.events.next(O)}))}),G4(p=>{const y=O=>{const H=[];O.routeConfig?.loadComponent&&!O.routeConfig._loadedComponent&&H.push(this.configLoader.loadComponent(O.routeConfig).pipe(Zo(Ee=>{O.component=Ee}),qe(()=>{})));for(const Ee of O.children)H.push(...y(Ee));return H};return A4(y(p.targetSnapshot.root)).pipe(Ab(),N0(1))}),G4(()=>this.afterPreactivation()),qe(p=>{const y=function xte(n,e,t){const r=A1(n,e._root,t?t._root:void 0);return new yM(r,e)}(t.routeReuseStrategy,p.targetSnapshot,p.currentRouterState);return this.currentTransition=a={...p,targetRouterState:y},a}),Zo(()=>{this.events.next(new k4)}),((n,e,t,r)=>qe(o=>(new Pte(e,o.targetRouterState,o.currentRouterState,t,r).activate(n),o)))(this.rootContexts,t.routeReuseStrategy,p=>this.events.next(p),this.inputBindingEnabled),N0(1),Zo({next:p=>{l=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new gf(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects))),t.titleStrategy?.updateTitle(p.targetRouterState.snapshot),p.resolve(!0)},complete:()=>{l=!0}}),Mh(this.transitionAbortSubject.pipe(Zo(p=>{throw p}))),T4(()=>{l||d||this.cancelNavigationTransition(a,"",1),this.currentNavigation?.id===a.id&&(this.currentNavigation=null)}),Oh(p=>{if(d=!0,AM(p))this.events.next(new C1(a.id,this.urlSerializer.serialize(a.extractedUrl),p.message,p.cancellationCode)),function Ite(n){return AM(n)&&Ph(n.url)}(p)?this.events.next(new L4(p.url)):a.resolve(!1);else{this.events.next(new Nb(a.id,this.urlSerializer.serialize(a.extractedUrl),p,a.targetSnapshot??void 0));try{a.resolve(t.errorHandler(p))}catch(y){a.reject(y)}}return nr}))}))}cancelNavigationTransition(t,r,o){const a=new C1(t.id,this.urlSerializer.serialize(t.extractedUrl),r,o);this.events.next(a),t.resolve(!1)}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function FM(n){return n!==E1}let UM=(()=>{class n{buildTitle(t){let r,o=t.root;for(;void 0!==o;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(a=>a.outlet===or);return r}getResolvedTitleForRoute(t){return t.data[m1]}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return an(xne)},providedIn:"root"})}return n})(),xne=(()=>{class n extends UM{constructor(t){super(),this.title=t}updateTitle(t){const r=this.buildTitle(t);void 0!==r&&this.title.setTitle(r)}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(FO))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ane=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return an(Ine)},providedIn:"root"})}return n})();class Sne{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}let Ine=(()=>{class n extends Sne{static#e=this.\u0275fac=function(){let t;return function(o){return(t||(t=Wo(n)))(o||n)}}();static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const jb=new qt("",{providedIn:"root",factory:()=>({})});let Dne=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:function(){return an(Tne)},providedIn:"root"})}return n})(),Tne=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,r){return t}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var R1=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(R1||{});function $M(n,e){n.events.pipe(Xu(t=>t instanceof gf||t instanceof C1||t instanceof Nb||t instanceof L0),qe(t=>t instanceof gf||t instanceof L0?R1.COMPLETE:t instanceof C1&&(0===t.code||1===t.code)?R1.REDIRECTING:R1.FAILED),Xu(t=>t!==R1.REDIRECTING),N0(1)).subscribe(()=>{e()})}function Rne(n){throw n}function One(n,e,t){return e.parse("/")}const Mne={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Nne={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Nc=(()=>{class n{get navigationId(){return this.navigationTransitions.navigationId}get browserPageId(){return"computed"!==this.canceledNavigationResolution?this.currentPageId:this.location.getState()?.\u0275routerPageId??this.currentPageId}get events(){return this._events}constructor(){this.disposed=!1,this.currentPageId=0,this.console=an(mR),this.isNgZoneEnabled=!1,this._events=new z,this.options=an(jb,{optional:!0})||{},this.pendingTasks=an(yR),this.errorHandler=this.options.errorHandler||Rne,this.malformedUriErrorHandler=this.options.malformedUriErrorHandler||One,this.navigated=!1,this.lastSuccessfulId=-1,this.urlHandlingStrategy=an(Dne),this.routeReuseStrategy=an(Ane),this.titleStrategy=an(UM),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.config=an(V0,{optional:!0})?.flat()??[],this.navigationTransitions=an($b),this.urlSerializer=an(v1),this.location=an(Y5),this.componentInputBindingEnabled=!!an(kb,{optional:!0}),this.eventsSubscription=new ee,this.isNgZoneEnabled=an(li)instanceof li&&li.isInAngularZone(),this.resetConfig(this.config),this.currentUrlTree=new k0,this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=vM(0,null),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe(t=>{this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId},t=>{this.console.warn(`Unhandled Navigation Error: ${t}`)}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){const t=this.navigationTransitions.events.subscribe(r=>{try{const{currentTransition:o}=this.navigationTransitions;if(null===o)return void(jM(r)&&this._events.next(r));if(r instanceof Mb)FM(o.source)&&(this.browserUrlTree=o.extractedUrl);else if(r instanceof L0)this.rawUrlTree=o.rawUrl;else if(r instanceof pM){if("eager"===this.urlUpdateStrategy){if(!o.extras.skipLocationChange){const a=this.urlHandlingStrategy.merge(o.urlAfterRedirects,o.rawUrl);this.setBrowserUrl(a,o)}this.browserUrlTree=o.urlAfterRedirects}}else if(r instanceof k4)this.currentUrlTree=o.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(o.urlAfterRedirects,o.rawUrl),this.routerState=o.targetRouterState,"deferred"===this.urlUpdateStrategy&&(o.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,o),this.browserUrlTree=o.urlAfterRedirects);else if(r instanceof C1)0!==r.code&&1!==r.code&&(this.navigated=!0),(3===r.code||2===r.code)&&this.restoreHistory(o);else if(r instanceof L4){const a=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||FM(o.source)};this.scheduleNavigation(a,E1,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}r instanceof Nb&&this.restoreHistory(o,!0),r instanceof gf&&(this.navigated=!0),jM(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){if(this.setUpLocationChangeListener(),!this.navigationTransitions.hasRequestedNavigation){const t=this.location.getState();this.navigateToSyncWithBrowser(this.location.path(!0),E1,t)}}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{const r="popstate"===t.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{this.navigateToSyncWithBrowser(t.url,r,t.state)},0)}))}navigateToSyncWithBrowser(t,r,o){const a={replaceUrl:!0},l=o?.navigationId?o:null;if(o){const p={...o};delete p.navigationId,delete p.\u0275routerPageId,0!==Object.keys(p).length&&(a.state=p)}const d=this.parseUrl(t);this.scheduleNavigation(d,r,l,a)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(z4),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,r={}){const{relativeTo:o,queryParams:a,fragment:l,queryParamsHandling:d,preserveFragment:p}=r,y=p?this.currentUrlTree.fragment:l;let H,O=null;switch(d){case"merge":O={...this.currentUrlTree.queryParams,...a};break;case"preserve":O=this.currentUrlTree.queryParams;break;default:O=a||null}null!==O&&(O=this.removeEmptyProps(O));try{H=aM(o?o.snapshot:this.routerState.snapshot.root)}catch{("string"!=typeof t[0]||!t[0].startsWith("/"))&&(t=[]),H=this.currentUrlTree.root}return cM(H,t,O,y??null)}navigateByUrl(t,r={skipLocationChange:!1}){const o=Ph(t)?t:this.parseUrl(t),a=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(a,E1,null,r)}navigate(t,r={skipLocationChange:!1}){return function Pne(n){for(let e=0;e<n.length;e++)if(null==n[e])throw new Bt(4008,!1)}(t),this.navigateByUrl(this.createUrlTree(t,r),r)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let r;try{r=this.urlSerializer.parse(t)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,t)}return r}isActive(t,r){let o;if(o=!0===r?{...Mne}:!1===r?{...Nne}:r,Ph(t))return QO(this.currentUrlTree,t,o);const a=this.parseUrl(t);return QO(this.currentUrlTree,a,o)}removeEmptyProps(t){return Object.keys(t).reduce((r,o)=>{const a=t[o];return null!=a&&(r[o]=a),r},{})}scheduleNavigation(t,r,o,a,l){if(this.disposed)return Promise.resolve(!1);let d,p,y;l?(d=l.resolve,p=l.reject,y=l.promise):y=new Promise((H,Ee)=>{d=H,p=Ee});const O=this.pendingTasks.add();return $M(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(O))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,currentBrowserUrl:this.browserUrlTree,rawUrl:t,extras:a,resolve:d,reject:p,promise:y,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),y.catch(H=>Promise.reject(H))}setBrowserUrl(t,r){const o=this.urlSerializer.serialize(t);if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){const l={...r.extras.state,...this.generateNgRouterState(r.id,this.browserPageId)};this.location.replaceState(o,"",l)}else{const a={...r.extras.state,...this.generateNgRouterState(r.id,this.browserPageId+1)};this.location.go(o,"",a)}}restoreHistory(t,r=!1){if("computed"===this.canceledNavigationResolution){const a=this.currentPageId-this.browserPageId;0!==a?this.location.historyGo(a):this.currentUrlTree===this.getCurrentNavigation()?.finalUrl&&0===a&&(this.resetState(t),this.browserUrlTree=t.currentUrlTree,this.resetUrlToCurrentUrlTree())}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=t.currentRouterState,this.currentUrlTree=t.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,r){return"computed"===this.canceledNavigationResolution?{navigationId:t,\u0275routerPageId:r}:{navigationId:t}}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jM(n){return!(n instanceof k4||n instanceof L4)}let Vb=(()=>{class n{constructor(t,r,o,a,l,d){this.router=t,this.route=r,this.tabIndexAttribute=o,this.renderer=a,this.el=l,this.locationStrategy=d,this.href=null,this.commands=null,this.onChanges=new z,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;const p=l.nativeElement.tagName?.toLowerCase();this.isAnchorElement="a"===p||"area"===p,this.isAnchorElement?this.subscription=t.events.subscribe(y=>{y instanceof gf&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(t){null!=this.tabIndexAttribute||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(t){null!=t?(this.commands=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(t,r,o,a,l){return!!(null===this.urlTree||this.isAnchorElement&&(0!==t||r||o||a||l||"string"==typeof this.target&&"_self"!=this.target))||(this.router.navigateByUrl(this.urlTree,{skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state}),!this.isAnchorElement)}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){this.href=null!==this.urlTree&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null;const t=null===this.href?null:function AD(n,e,t){return function mW(n,e){return"src"===e&&("embed"===n||"frame"===n||"iframe"===n||"media"===n||"script"===n)||"href"===e&&("base"===n||"link"===n)?xD:CD}(e,t)(n)}(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",t)}applyAttributeValue(t,r){const o=this.renderer,a=this.el.nativeElement;null!==r?o.setAttribute(a,t,r):o.removeAttribute(a,t)}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(Nc),Dt(F0),Zp("tabindex"),Dt(Kl),Dt(go),Dt(Th))};static#t=this.\u0275dir=fn({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,o){1&r&&Ui("click",function(l){return o.onClick(l.button,l.ctrlKey,l.shiftKey,l.altKey,l.metaKey)}),2&r&&Xa("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:["preserveFragment","preserveFragment",O0],skipLocationChange:["skipLocationChange","skipLocationChange",O0],replaceUrl:["replaceUrl","replaceUrl",O0],routerLink:"routerLink"},standalone:!0,features:[UT,Eo]})}return n})();class VM{}let Bne=(()=>{class n{constructor(t,r,o,a,l){this.router=t,this.injector=o,this.preloadingStrategy=a,this.loader=l}setUpPreloading(){this.subscription=this.router.events.pipe(Xu(t=>t instanceof gf),g1(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,r){const o=[];for(const a of r){a.providers&&!a._injector&&(a._injector=v5(a.providers,t,`Route: ${a.path}`));const l=a._injector??t,d=a._loadedInjector??l;(a.loadChildren&&!a._loadedRoutes&&void 0===a.canLoad||a.loadComponent&&!a._loadedComponent)&&o.push(this.preloadConfig(l,a)),(a.children||a._loadedRoutes)&&o.push(this.processRoutes(d,a.children??a._loadedRoutes))}return Hn(o).pipe(xn())}preloadConfig(t,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(t,r):hn(null);const a=o.pipe(sn(l=>null===l?hn(void 0):(r._loadedRoutes=l.routes,r._loadedInjector=l.injector,this.processRoutes(l.injector??t,l.routes))));return r.loadComponent&&!r._loadedComponent?Hn([a,this.loader.loadComponent(r)]).pipe(xn()):a})}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(Nc),Dn(vR),Dn(Dc),Dn(VM),Dn(q4))};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const K4=new qt("");let HM=(()=>{class n{constructor(t,r,o,a,l={}){this.urlSerializer=t,this.transitions=r,this.viewportScroller=o,this.zone=a,this.options=l,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},l.scrollPositionRestoration=l.scrollPositionRestoration||"disabled",l.anchorScrolling=l.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Mb?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof gf?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof L0&&0===t.code&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof gM&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new gM(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static#e=this.\u0275fac=function(r){!function fT(){throw new Error("invalid")}()};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac})}return n})();function td(n,e){return{\u0275kind:n,\u0275providers:e}}function WM(){const n=an(Ja);return e=>{const t=n.get(R0);if(e!==t.components[0])return;const r=n.get(Nc),o=n.get(ZM);1===n.get(Y4)&&r.initialNavigation(),n.get(GM,null,gt.Optional)?.setUpPreloading(),n.get(K4,null,gt.Optional)?.init(),r.resetRootComponentType(t.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}const ZM=new qt("",{factory:()=>new z}),Y4=new qt("",{providedIn:"root",factory:()=>1}),GM=new qt("");function jne(n){return td(0,[{provide:GM,useExisting:Bne},{provide:VM,useExisting:n}])}const qM=new qt("ROUTER_FORROOT_GUARD"),Hne=[Y5,{provide:v1,useClass:R4},Nc,x1,{provide:F0,useFactory:function zM(n){return n.routerState.root},deps:[Nc]},q4,[]];function zne(){return new AR("Router",Nc)}let KM=(()=>{class n{constructor(t){}static forRoot(t,r){return{ngModule:n,providers:[Hne,[],{provide:V0,multi:!0,useValue:t},{provide:qM,useFactory:qne,deps:[[Nc,new cw,new lw]]},{provide:jb,useValue:r||{}},r?.useHash?{provide:Th,useClass:tQ}:{provide:Th,useClass:tO},{provide:K4,useFactory:()=>{const n=an(_X),e=an(li),t=an(jb),r=an($b),o=an(v1);return t.scrollOffset&&n.setOffset(t.scrollOffset),new HM(o,r,n,e,t)}},r?.preloadingStrategy?jne(r.preloadingStrategy).\u0275providers:[],{provide:AR,multi:!0,useFactory:zne},r?.initialNavigation?Kne(r):[],r?.bindToComponentInputs?td(8,[EM,{provide:kb,useExisting:EM}]).\u0275providers:[],[{provide:YM,useFactory:WM},{provide:$5,multi:!0,useExisting:YM}]]}}static forChild(t){return{ngModule:n,providers:[{provide:V0,multi:!0,useValue:t}]}}static#e=this.\u0275fac=function(r){return new(r||n)(Dn(qM,8))};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({})}return n})();function qne(n){return"guarded"}function Kne(n){return["disabled"===n.initialNavigation?td(3,[{provide:M5,multi:!0,useFactory:()=>{const e=an(Nc);return()=>{e.setUpLocationChangeListener()}}},{provide:Y4,useValue:2}]).\u0275providers:[],"enabledBlocking"===n.initialNavigation?td(2,[{provide:Y4,useValue:0},{provide:M5,multi:!0,deps:[Ja],useFactory:e=>{const t=e.get(XJ,Promise.resolve());return()=>t.then(()=>new Promise(r=>{const o=e.get(Nc),a=e.get(ZM);$M(o,()=>{r(!0)}),e.get($b).afterPreactivation=()=>(r(!0),a.closed?hn(void 0):a),o.initialNavigation()}))}}]).\u0275providers:[]]}const YM=new qt("");var Oe=I(5861);let JM=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(Kl),Dt(go))};static#t=this.\u0275dir=fn({type:n})}return n})(),kh=(()=>{class n extends JM{static#e=this.\u0275fac=function(){let t;return function(o){return(t||(t=Wo(n)))(o||n)}}();static#t=this.\u0275dir=fn({type:n,features:[ni]})}return n})();const yl=new qt("NgValueAccessor"),Xne={provide:yl,useExisting:fr(()=>J4),multi:!0},tre=new qt("CompositionEventMode");let J4=(()=>{class n extends JM{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function ere(){const n=ff()?ff().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(Kl),Dt(go),Dt(tre,8))};static#t=this.\u0275dir=fn({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&Ui("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[_i([Xne]),ni]})}return n})();function mf(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function XM(n){return null!=n&&"number"==typeof n.length}const fs=new qt("NgValidators"),yf=new qt("NgAsyncValidators"),nre=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class eN{static min(e){return function tN(n){return e=>{if(mf(e.value)||mf(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function nN(n){return e=>{if(mf(e.value)||mf(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return function rN(n){return mf(n.value)?{required:!0}:null}(e)}static requiredTrue(e){return function iN(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return function oN(n){return mf(n.value)||nre.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function sN(n){return e=>mf(e.value)||!XM(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function aN(n){return e=>XM(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function cN(n){if(!n)return Hb;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(mf(r.value))return null;const o=r.value;return e.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(e)}static nullValidator(e){return null}static compose(e){return pN(e)}static composeAsync(e){return gN(e)}}function Hb(n){return null}function lN(n){return null!=n}function uN(n){return Jm(n)?Hn(n):n}function dN(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function fN(n,e){return e.map(t=>t(n))}function hN(n){return n.map(e=>function rre(n){return!n.validate}(e)?e:t=>e.validate(t))}function pN(n){if(!n)return null;const e=n.filter(lN);return 0==e.length?null:function(t){return dN(fN(t,e))}}function Q4(n){return null!=n?pN(hN(n)):null}function gN(n){if(!n)return null;const e=n.filter(lN);return 0==e.length?null:function(t){return function Jne(...n){const e=Fn(n),{args:t,keys:r}=VO(n),o=new xe(a=>{const{length:l}=t;if(!l)return void a.complete();const d=new Array(l);let p=l,y=l;for(let O=0;O<l;O++){let H=!1;Ct(t[O]).subscribe(Pe(a,Ee=>{H||(H=!0,y--),d[O]=Ee},()=>p--,void 0,()=>{(!p||!H)&&(y||a.next(r?HO(r,d):d),a.complete())}))}});return e?o.pipe(x4(e)):o}(fN(t,e).map(uN)).pipe(qe(dN))}}function X4(n){return null!=n?gN(hN(n)):null}function mN(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function yN(n){return n._rawValidators}function vN(n){return n._rawAsyncValidators}function ex(n){return n?Array.isArray(n)?n:[n]:[]}function zb(n,e){return Array.isArray(n)?n.includes(e):n===e}function wN(n,e){const t=ex(e);return ex(n).forEach(o=>{zb(t,o)||t.push(o)}),t}function bN(n,e){return ex(e).filter(t=>!zb(n,t))}class _N{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Q4(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=X4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class Bs extends _N{get formDirective(){return null}get path(){return null}}class vf extends _N{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class EN{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let CN=(()=>{class n extends EN{constructor(t){super(t)}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(vf,2))};static#t=this.\u0275dir=fn({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&Rc("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[ni]})}return n})(),xN=(()=>{class n extends EN{constructor(t){super(t)}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(Bs,10))};static#t=this.\u0275dir=fn({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){2&r&&Rc("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[ni]})}return n})();const O1="VALID",Zb="INVALID",H0="PENDING",M1="DISABLED";function rx(n){return(Gb(n)?n.validators:n)||null}function ix(n,e){return(Gb(e)?e.asyncValidators:n)||null}function Gb(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function SN(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new Bt(1e3,"");if(!r[t])throw new Bt(1001,"")}function IN(n,e,t){n._forEachChild((r,o)=>{if(void 0===t[o])throw new Bt(1002,"")})}class qb{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O1}get invalid(){return this.status===Zb}get pending(){return this.status==H0}get disabled(){return this.status===M1}get enabled(){return this.status!==M1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(wN(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(wN(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(bN(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(bN(e,this._rawAsyncValidators))}hasValidator(e){return zb(this._rawValidators,e)}hasAsyncValidator(e){return zb(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=H0,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=M1,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=O1,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O1||this.status===H0)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M1:O1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=H0,this._hasOwnPendingAsyncValidator=!0;const t=uN(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new gr,this.statusChanges=new gr}_calculateStatus(){return this._allControlsDisabled()?M1:this.errors?Zb:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(H0)?H0:this._anyControlsHaveStatus(Zb)?Zb:O1}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Gb(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function are(n){return Array.isArray(n)?Q4(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function cre(n){return Array.isArray(n)?X4(n):n||null}(this._rawAsyncValidators)}}class N1 extends qb{constructor(e,t,r){super(rx(t),ix(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){IN(this,0,e),Object.keys(e).forEach(r=>{SN(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const o=this.controls[r];o&&o.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,o)=>{r.reset(e?e[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,o)=>((r.enabled||this.disabled)&&(t[o]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((o,a)=>{r=t(r,o,a)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}class DN extends N1{}const Lh=new qt("CallSetDisabledState",{providedIn:"root",factory:()=>P1}),P1="always";function k1(n,e,t=P1){ox(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===t)&&e.valueAccessor.setDisabledState?.(n.disabled),function ure(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&TN(n,e)})}(n,e),function fre(n,e){const t=(r,o)=>{e.valueAccessor.writeValue(r),o&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function dre(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&TN(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function lre(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function Yb(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),Qb(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Jb(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ox(n,e){const t=yN(n);null!==e.validator?n.setValidators(mN(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=vN(n);null!==e.asyncValidator?n.setAsyncValidators(mN(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const o=()=>n.updateValueAndValidity();Jb(e._rawValidators,o),Jb(e._rawAsyncValidators,o)}function Qb(n,e){let t=!1;if(null!==n){if(null!==e.validator){const o=yN(n);if(Array.isArray(o)&&o.length>0){const a=o.filter(l=>l!==e.validator);a.length!==o.length&&(t=!0,n.setValidators(a))}}if(null!==e.asyncValidator){const o=vN(n);if(Array.isArray(o)&&o.length>0){const a=o.filter(l=>l!==e.asyncValidator);a.length!==o.length&&(t=!0,n.setAsyncValidators(a))}}}const r=()=>{};return Jb(e._rawValidators,r),Jb(e._rawAsyncValidators,r),t}function TN(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function MN(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function NN(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const B1=class extends qb{constructor(e=null,t,r){super(rx(t),ix(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Gb(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=NN(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){MN(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){MN(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){NN(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let FN=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275dir=fn({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return n})(),$N=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({})}return n})();const ux=new qt("NgModelWithFormControlWarning"),Sre={provide:Bs,useExisting:fr(()=>Xb)};let Xb=(()=>{class n extends Bs{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new gr,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Qb(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return k1(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){Yb(t.control||null,t,!1),function mre(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function ON(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,o=this.form.get(t.path);r!==o&&(Yb(r||null,t),(n=>n instanceof B1)(o)&&(k1(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function RN(n,e){ox(n,e)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function hre(n,e){return Qb(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ox(this.form,this),this._oldForm&&Qb(this._oldForm,this)}_checkFormPresent(){}static#e=this.\u0275fac=function(r){return new(r||n)(Dt(fs,10),Dt(yf,10),Dt(Lh,8))};static#t=this.\u0275dir=fn({type:n,selectors:[["","formGroup",""]],hostBindings:function(r,o){1&r&&Ui("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[_i([Sre]),ni,Eo]})}return n})();const Tre={provide:vf,useExisting:fr(()=>hx)};let hx=(()=>{class n extends vf{set isDisabled(t){}static#e=this._ngModelWarningSentOnce=!1;constructor(t,r,o,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new gr,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function cx(n,e){if(!e)return null;let t,r,o;return Array.isArray(e),e.forEach(a=>{a.constructor===J4?t=a:function gre(n){return Object.getPrototypeOf(n.constructor)===kh}(a)?r=a:o=a}),o||r||t||null}(0,a)}ngOnChanges(t){this._added||this._setUpControl(),function ax(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function Kb(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#t=this.\u0275fac=function(r){return new(r||n)(Dt(Bs,13),Dt(fs,10),Dt(yf,10),Dt(yl,10),Dt(ux,8))};static#n=this.\u0275dir=fn({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[_i([Tre]),ni,Eo]})}return n})(),nP=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({imports:[$N]})}return n})();class rP extends qb{constructor(e,t,r){super(rx(t),ix(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){let o=this._adjustIndex(e);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){IN(this,0,e),e.forEach((r,o)=>{SN(this,!1,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,o)=>{r.reset(e[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}}function iP(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let zre=(()=>{class n{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new n;return t.useNonNullable=!0,t}group(t,r=null){const o=this._reduceControls(t);let a={};return iP(r)?a=r:null!==r&&(a.validators=r.validator,a.asyncValidators=r.asyncValidator),new N1(o,a)}record(t,r=null){const o=this._reduceControls(t);return new DN(o,r)}control(t,r,o){let a={};return this.useNonNullable?(iP(r)?a=r:(a.validators=r,a.asyncValidators=o),new B1(t,{...a,nonNullable:!0})):new B1(t,r,o)}array(t,r,o){const a=t.map(l=>this._createControl(l));return new rP(a,r,o)}_reduceControls(t){const r={};return Object.keys(t).forEach(o=>{r[o]=this._createControl(t[o])}),r}_createControl(t){return t instanceof B1||t instanceof qb?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275prov=vn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wre=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Lh,useValue:t.callSetDisabledState??P1}]}}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({imports:[nP]})}return n})(),Zre=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ux,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Lh,useValue:t.callSetDisabledState??P1}]}}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=sa({type:n});static#n=this.\u0275inj=Uo({imports:[nP]})}return n})();const z0=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"name":"getInitData","outputs":[{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"init","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"initToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"name":"initToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenTemplate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),W0=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"name":"getInitData","outputs":[{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"init","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"initToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"name":"initToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenTemplate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),Gre=JSON.parse('[{"id":1,"key":"arbitrum","label":"Arbitrum","name":"Arbitrum One","chainId":42161,"rpcUrls":["https://arbitrum-mainnet.infura.io"],"nativeCurrency":{"name":"ETH","symbol":"ETH","decimals":18},"blockExplorerUrls":["https://explorer.arbitrum.io"]},{"id":2,"key":"ethereum","label":"Ethereum","name":"EThereum Mainnet","chainId":1,"rpcUrls":["https://cloudflare-eth.com"],"nativeCurrency":{"name":"ETH","symbol":"ETH","decimals":18},"blockExplorerUrls":["https://etherscan.io"]},{"id":3,"key":"polygon","label":"Polygon","name":"Polygon Mainnet","chainId":137,"rpcUrls":["https://polygon-rpc.com"],"nativeCurrency":{"name":"MATIC","symbol":"MATIC","decimals":18},"blockExplorerUrls":["https://polygonscan.com"]}]'),qre=JSON.parse('[{"id":1,"key":"gene","label":"GENE"},{"id":2,"key":"gnome","label":"GNOME"}]'),e__ETHEREUM="0x21413c119b0C11C5d96aE1bD328917bC5C8ED67E",e__ARBITRUM="0x59a729658e9245b0cf1f8cb9fb37945d2b06ea27",wf_ETHEREUM="0xE58Eb0Bb13a71d7B95c4C3cBE6Cb3DBb08f9cBFB",wf_POLYGON="0x6E8a8726639d12935b3219892155520bdC57366B",wf_ARBITRUM="0x7698ac5d15bb3ba7185adcbff32a80ebd9d0709b";var Ae=I(9185),$t=I(7989),tt=I(6494),_t=I(5937),t_=I(9810);const On=n=>n??t_.Ld;var Pc=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let nc=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=Ae.AccountController.state.address,this.balanceVal=Ae.AccountController.state.balance,this.balanceSymbol=Ae.AccountController.state.balanceSymbol,this.profileName=Ae.AccountController.state.profileName,this.profileImage=Ae.AccountController.state.profileImage,this.network=Ae.NetworkController.state.caipNetwork,this.isUnsupportedChain=Ae.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(Ae.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ae.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),Ae.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Ae.fz.getNetworkImage(this.network),t="show"===this.balance;return tt.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${On(this.address)}
        profileName=${On(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${On(e)}
        avatarSrc=${On(this.profileImage)}
        balance=${t?Ae.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Ae.IN.open({view:"UnsupportedChain"}):Ae.IN.open()}};Pc([(0,_t.Cb)({type:Boolean})],nc.prototype,"disabled",void 0),Pc([(0,_t.Cb)()],nc.prototype,"balance",void 0),Pc([(0,_t.Cb)()],nc.prototype,"charsStart",void 0),Pc([(0,_t.Cb)()],nc.prototype,"charsEnd",void 0),Pc([(0,_t.SB)()],nc.prototype,"address",void 0),Pc([(0,_t.SB)()],nc.prototype,"balanceVal",void 0),Pc([(0,_t.SB)()],nc.prototype,"balanceSymbol",void 0),Pc([(0,_t.SB)()],nc.prototype,"profileName",void 0),Pc([(0,_t.SB)()],nc.prototype,"profileImage",void 0),Pc([(0,_t.SB)()],nc.prototype,"network",void 0),Pc([(0,_t.SB)()],nc.prototype,"isUnsupportedChain",void 0),nc=Pc([(0,$t.customElement)("w3m-account-button")],nc);const Jre=tt.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var nd=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let vl=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=Ae.AccountController.state.isConnected,this.unsubscribe.push(Ae.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?tt.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${On(this.balance)}
            .charsStart=${On(this.charsStart)}
            .charsEnd=${On(this.charsEnd)}
          >
          </w3m-account-button>
        `:tt.dy`
          <w3m-connect-button
            size=${On(this.size)}
            label=${On(this.label)}
            loadingLabel=${On(this.loadingLabel)}
          ></w3m-connect-button>
        `}};vl.styles=Jre,nd([(0,_t.Cb)({type:Boolean})],vl.prototype,"disabled",void 0),nd([(0,_t.Cb)()],vl.prototype,"balance",void 0),nd([(0,_t.Cb)()],vl.prototype,"size",void 0),nd([(0,_t.Cb)()],vl.prototype,"label",void 0),nd([(0,_t.Cb)()],vl.prototype,"loadingLabel",void 0),nd([(0,_t.Cb)()],vl.prototype,"charsStart",void 0),nd([(0,_t.Cb)()],vl.prototype,"charsEnd",void 0),nd([(0,_t.SB)()],vl.prototype,"isAccount",void 0),vl=nd([(0,$t.customElement)("w3m-button")],vl);var Z0=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Fh=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ae.IN.state.open,this.loading=Ae.IN.state.loading,this.unsubscribe.push(Ae.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return tt.dy`
      <wui-connect-button
        size=${On(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ae.IN.close():this.loading||Ae.IN.open()}};Z0([(0,_t.Cb)()],Fh.prototype,"size",void 0),Z0([(0,_t.Cb)()],Fh.prototype,"label",void 0),Z0([(0,_t.Cb)()],Fh.prototype,"loadingLabel",void 0),Z0([(0,_t.SB)()],Fh.prototype,"open",void 0),Z0([(0,_t.SB)()],Fh.prototype,"loading",void 0),Fh=Z0([(0,$t.customElement)("w3m-connect-button")],Fh),I(4710);const Qre=tt.iv`
  :host {
    display: block;
    width: max-content;
  }
`;var G0=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let bf=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ae.NetworkController.state.caipNetwork,this.connected=Ae.AccountController.state.isConnected,this.loading=Ae.IN.state.loading,this.isUnsupportedChain=Ae.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(Ae.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),Ae.AccountController.subscribeKey("isConnected",e=>this.connected=e),Ae.IN.subscribeKey("loading",e=>this.loading=e),Ae.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-network-button
        .disabled=${!(!this.disabled&&!this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${On(Ae.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(Ae.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ae.IN.open({view:"Networks"}))}};bf.styles=Qre,G0([(0,_t.Cb)({type:Boolean})],bf.prototype,"disabled",void 0),G0([(0,_t.SB)()],bf.prototype,"network",void 0),G0([(0,_t.SB)()],bf.prototype,"connected",void 0),G0([(0,_t.SB)()],bf.prototype,"loading",void 0),G0([(0,_t.SB)()],bf.prototype,"isUnsupportedChain",void 0),bf=G0([(0,$t.customElement)("w3m-network-button")],bf);const Xre=tt.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var oP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let n_=class extends tt.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Ae.RouterController.state.view,this.unsubscribe.push(Ae.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e=this;this.resizeObserver=new ResizeObserver(function(){var t=(0,Oe.Z)(function*([r]){const o=`${r?.contentRect.height}px`;"0px"!==e.prevHeight&&(yield e.animate([{height:e.prevHeight},{height:o}],{duration:150,easing:"ease",fill:"forwards"}).finished,e.style.height="auto"),e.prevHeight=o});return function(r){return t.apply(this,arguments)}}()),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return tt.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return tt.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return tt.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return tt.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return tt.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return tt.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return tt.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return tt.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return tt.dy`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return tt.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return tt.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return tt.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return tt.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return tt.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return tt.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return tt.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return tt.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return tt.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return tt.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return tt.dy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return tt.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return tt.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return tt.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return tt.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return tt.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return tt.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return tt.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return tt.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return tt.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return tt.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return tt.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return tt.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WalletSend":return tt.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return tt.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return tt.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`}}onViewChange(e){var t=this;return(0,Oe.Z)(function*(){const{history:r}=Ae.RouterController.state;let o=-10,a=10;r.length<t.prevHistoryLength&&(o=10,a=-10),t.prevHistoryLength=r.length,yield t.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${o}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,t.view=e,yield t.animate([{opacity:0,transform:`translateX(${a}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished})()}getWrapper(){return this.shadowRoot?.querySelector("div")}};n_.styles=Xre,oP([(0,_t.SB)()],n_.prototype,"view",void 0),n_=oP([(0,$t.customElement)("w3m-router")],n_);const eie=tt.iv`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var _f=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};const tie={USD:"$",EUR:"\u20ac",GBP:"\xa3"},nie=[100,250,500,1e3];let ru=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=Ae.AccountController.state.isConnected,this.loading=Ae.IN.state.loading,this.paymentCurrency=Ae.ph.state.paymentCurrency,this.paymentAmount=Ae.ph.state.paymentAmount,this.purchaseAmount=Ae.ph.state.purchaseAmount,this.quoteLoading=Ae.ph.state.quotesLoading,this.unsubscribe.push(Ae.AccountController.subscribeKey("isConnected",e=>{this.connected=e}),Ae.IN.subscribeKey("loading",e=>{this.loading=e}),Ae.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${nie.map(e=>tt.dy`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${tie[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?tt.dy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:tt.dy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Ae.IN.open({view:"OnRampProviders"})}openModal(){Ae.IN.open({view:"Connect"})}onPaymentAmountChange(e){return(0,Oe.Z)(function*(){Ae.ph.setPaymentAmount(Number(e.detail)),yield Ae.ph.getQuote()})()}selectPresetAmount(e){return(0,Oe.Z)(function*(){Ae.ph.setPaymentAmount(e),yield Ae.ph.getQuote()})()}};ru.styles=eie,_f([(0,_t.Cb)({type:Boolean})],ru.prototype,"disabled",void 0),_f([(0,_t.SB)()],ru.prototype,"connected",void 0),_f([(0,_t.SB)()],ru.prototype,"loading",void 0),_f([(0,_t.SB)()],ru.prototype,"paymentCurrency",void 0),_f([(0,_t.SB)()],ru.prototype,"paymentAmount",void 0),_f([(0,_t.SB)()],ru.prototype,"purchaseAmount",void 0),_f([(0,_t.SB)()],ru.prototype,"quoteLoading",void 0),ru=_f([(0,$t.customElement)("w3m-onramp-widget")],ru);const rie=tt.iv`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var iie=I(8815);typeof window<"u"&&(window.Buffer||(window.Buffer=iie.lW),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));const Zt={SECURE_SITE_SDK:process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},Go={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var kr,n;(n=kr||(kr={})).assertEqual=o=>o,n.assertIs=function e(o){},n.assertNever=function t(o){throw new Error},n.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},n.getValidEnumValues=o=>{const a=n.objectKeys(o).filter(d=>"number"!=typeof o[o[d]]),l={};for(const d of a)l[d]=o[d];return n.objectValues(l)},n.objectValues=o=>n.objectKeys(o).map(function(a){return o[a]}),n.objectKeys="function"==typeof Object.keys?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},n.find=(o,a)=>{for(const l of o)if(a(l))return l},n.isInteger="function"==typeof Number.isInteger?o=>Number.isInteger(o):o=>"number"==typeof o&&isFinite(o)&&Math.floor(o)===o,n.joinValues=function r(o,a=" | "){return o.map(l=>"string"==typeof l?`'${l}'`:l).join(a)},n.jsonStringifyReplacer=(o,a)=>"bigint"==typeof a?a.toString():a;var sP=function(n){return n.mergeShapes=(e,t)=>({...e,...t}),n}(sP||{});const on=kr.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ef=n=>{switch(typeof n){case"undefined":return on.undefined;case"string":return on.string;case"number":return isNaN(n)?on.nan:on.number;case"boolean":return on.boolean;case"function":return on.function;case"bigint":return on.bigint;case"symbol":return on.symbol;case"object":return Array.isArray(n)?on.array:null===n?on.null:n.then&&"function"==typeof n.then&&n.catch&&"function"==typeof n.catch?on.promise:typeof Map<"u"&&n instanceof Map?on.map:typeof Set<"u"&&n instanceof Set?on.set:typeof Date<"u"&&n instanceof Date?on.date:on.object;default:return on.unknown}},Ht=kr.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);let rd=(()=>{class n extends Error{constructor(t){super(),this.issues=[],this.addIssue=o=>{this.issues=[...this.issues,o]},this.addIssues=(o=[])=>{this.issues=[...this.issues,...o]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const r=t||function(l){return l.message},o={_errors:[]},a=l=>{for(const d of l.issues)if("invalid_union"===d.code)d.unionErrors.map(a);else if("invalid_return_type"===d.code)a(d.returnTypeError);else if("invalid_arguments"===d.code)a(d.argumentsError);else if(0===d.path.length)o._errors.push(r(d));else{let p=o,y=0;for(;y<d.path.length;){const O=d.path[y];y===d.path.length-1?(p[O]=p[O]||{_errors:[]},p[O]._errors.push(r(d))):p[O]=p[O]||{_errors:[]},p=p[O],y++}}};return a(this),o}toString(){return this.message}get message(){return JSON.stringify(this.issues,kr.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(t=(r=>r.message)){const r={},o=[];for(const a of this.issues)a.path.length>0?(r[a.path[0]]=r[a.path[0]]||[],r[a.path[0]].push(t(a))):o.push(t(a));return{formErrors:o,fieldErrors:r}}get formErrors(){return this.flatten()}}return n.create=e=>new n(e),n})();const F1=(n,e)=>{let t;switch(n.code){case Ht.invalid_type:t=n.received===on.undefined?"Required":`Expected ${n.expected}, received ${n.received}`;break;case Ht.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,kr.jsonStringifyReplacer)}`;break;case Ht.unrecognized_keys:t=`Unrecognized key(s) in object: ${kr.joinValues(n.keys,", ")}`;break;case Ht.invalid_union:t="Invalid input";break;case Ht.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${kr.joinValues(n.options)}`;break;case Ht.invalid_enum_value:t=`Invalid enum value. Expected ${kr.joinValues(n.options)}, received '${n.received}'`;break;case Ht.invalid_arguments:t="Invalid function arguments";break;case Ht.invalid_return_type:t="Invalid function return type";break;case Ht.invalid_date:t="Invalid date";break;case Ht.invalid_string:"object"==typeof n.validation?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,"number"==typeof n.validation.position&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:kr.assertNever(n.validation):t="regex"!==n.validation?`Invalid ${n.validation}`:"Invalid";break;case Ht.too_small:t="array"===n.type?`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:"string"===n.type?`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:"number"===n.type?`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:"date"===n.type?`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:"Invalid input";break;case Ht.too_big:t="array"===n.type?`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:"string"===n.type?`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:"number"===n.type?`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:"bigint"===n.type?`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:"date"===n.type?`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:"Invalid input";break;case Ht.custom:t="Invalid input";break;case Ht.invalid_intersection_types:t="Intersection results could not be merged";break;case Ht.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case Ht.not_finite:t="Number must be finite";break;default:t=e.defaultError,kr.assertNever(n)}return{message:t}};let aP=F1;function r_(){return aP}const i_=n=>{const{data:e,path:t,errorMaps:r,issueData:o}=n,a=[...t,...o.path||[]],l={...o,path:a};let d="";const p=r.filter(y=>!!y).slice().reverse();for(const y of p)d=y(l,{data:e,defaultError:d}).message;return{...o,path:a,message:o.message||d}};function cn(n,e){const t=i_({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,r_(),F1].filter(r=>!!r)});n.common.issues.push(t)}class hs{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const o of t){if("aborted"===o.status)return Qn;"dirty"===o.status&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static mergeObjectAsync(e,t){return(0,Oe.Z)(function*(){const r=[];for(const o of t)r.push({key:yield o.key,value:yield o.value});return hs.mergeObjectSync(e,r)})()}static mergeObjectSync(e,t){const r={};for(const o of t){const{key:a,value:l}=o;if("aborted"===a.status||"aborted"===l.status)return Qn;"dirty"===a.status&&e.dirty(),"dirty"===l.status&&e.dirty(),"__proto__"!==a.value&&(typeof l.value<"u"||o.alwaysSet)&&(r[a.value]=l.value)}return{status:e.value,value:r}}}const Qn=Object.freeze({status:"aborted"}),cP=n=>({status:"dirty",value:n}),Fs=n=>({status:"valid",value:n}),yx=n=>"aborted"===n.status,vx=n=>"dirty"===n.status,U1=n=>"valid"===n.status,o_=n=>typeof Promise<"u"&&n instanceof Promise;var Tn=function(n){return n.errToObj=e=>"string"==typeof e?{message:e}:e||{},n.toString=e=>"string"==typeof e?e:e?.message,n}(Tn||{});class iu{constructor(e,t,r,o){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const lP=(n,e)=>{if(U1(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new rd(n.common.issues);return this._error=t,this._error}}};function sr(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:o}=n;if(e&&(t||r))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return e?{errorMap:e,description:o}:{errorMap:(l,d)=>"invalid_type"!==l.code?{message:d.defaultError}:typeof d.data>"u"?{message:r??d.defaultError}:{message:t??d.defaultError},description:o}}class cr{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ef(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Ef(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new hs,ctx:{common:e.parent.common,data:e.data,parsedType:Ef(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(o_(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const o={common:{issues:[],async:null!==(r=t?.async)&&void 0!==r&&r,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ef(e)},a=this._parseSync({data:e,path:o.path,parent:o});return lP(o,a)}parseAsync(e,t){var r=this;return(0,Oe.Z)(function*(){const o=yield r.safeParseAsync(e,t);if(o.success)return o.data;throw o.error})()}safeParseAsync(e,t){var r=this;return(0,Oe.Z)(function*(){const o={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:r._def.errorMap,parent:null,data:e,parsedType:Ef(e)},a=r._parse({data:e,path:o.path,parent:o}),l=yield o_(a)?a:Promise.resolve(a);return lP(o,l)})()}refine(e,t){const r=o=>"string"==typeof t||typeof t>"u"?{message:t}:"function"==typeof t?t(o):t;return this._refinement((o,a)=>{const l=e(o),d=()=>a.addIssue({code:Ht.custom,...r(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(p=>!!p||(d(),!1)):!!l||(d(),!1)})}refinement(e,t){return this._refinement((r,o)=>!!e(r)||(o.addIssue("function"==typeof t?t(r,o):t),!1))}_refinement(e){return new $h({schema:this,typeName:Un.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return jh.create(this,this._def)}nullable(){return H1.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return j1.create(this,this._def)}promise(){return d_.create(this,this._def)}or(e){return Sx.create([this,e],this._def)}and(e){return Dx.create(this,e,this._def)}transform(e){return new $h({...sr(this._def),schema:this,typeName:Un.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"==typeof e?e:()=>e;return new Mx({...sr(this._def),innerType:this,defaultValue:t,typeName:Un.ZodDefault})}brand(){return new yP({typeName:Un.ZodBranded,type:this,...sr(this._def)})}catch(e){const t="function"==typeof e?e:()=>e;return new gP({...sr(this._def),innerType:this,catchValue:t,typeName:Un.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return z1.create(this,e)}readonly(){return vP.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const cie=/^c[^\s-]{8,}$/i,lie=/^[a-z][a-z0-9]*$/,uie=/^[0-9A-HJKMNP-TV-Z]{26}$/,die=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,fie=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let wx;const pie=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,gie=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,mie=n=>n.precision?n.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`):0===n.precision?n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function yie(n,e){return!(("v4"!==e&&e||!pie.test(n))&&("v6"!==e&&e||!gie.test(n)))}let s_=(()=>{class n extends cr{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==on.string){const l=this._getOrReturnCtx(t);return cn(l,{code:Ht.invalid_type,expected:on.string,received:l.parsedType}),Qn}const o=new hs;let a;for(const l of this._def.checks)if("min"===l.kind)t.data.length<l.value&&(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.too_small,minimum:l.value,type:"string",inclusive:!0,exact:!1,message:l.message}),o.dirty());else if("max"===l.kind)t.data.length>l.value&&(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.too_big,maximum:l.value,type:"string",inclusive:!0,exact:!1,message:l.message}),o.dirty());else if("length"===l.kind){const d=t.data.length>l.value,p=t.data.length<l.value;(d||p)&&(a=this._getOrReturnCtx(t,a),d?cn(a,{code:Ht.too_big,maximum:l.value,type:"string",inclusive:!0,exact:!0,message:l.message}):p&&cn(a,{code:Ht.too_small,minimum:l.value,type:"string",inclusive:!0,exact:!0,message:l.message}),o.dirty())}else if("email"===l.kind)fie.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"email",code:Ht.invalid_string,message:l.message}),o.dirty());else if("emoji"===l.kind)wx||(wx=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),wx.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"emoji",code:Ht.invalid_string,message:l.message}),o.dirty());else if("uuid"===l.kind)die.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"uuid",code:Ht.invalid_string,message:l.message}),o.dirty());else if("cuid"===l.kind)cie.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"cuid",code:Ht.invalid_string,message:l.message}),o.dirty());else if("cuid2"===l.kind)lie.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"cuid2",code:Ht.invalid_string,message:l.message}),o.dirty());else if("ulid"===l.kind)uie.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"ulid",code:Ht.invalid_string,message:l.message}),o.dirty());else if("url"===l.kind)try{new URL(t.data)}catch{a=this._getOrReturnCtx(t,a),cn(a,{validation:"url",code:Ht.invalid_string,message:l.message}),o.dirty()}else"regex"===l.kind?(l.regex.lastIndex=0,l.regex.test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"regex",code:Ht.invalid_string,message:l.message}),o.dirty())):"trim"===l.kind?t.data=t.data.trim():"includes"===l.kind?t.data.includes(l.value,l.position)||(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.invalid_string,validation:{includes:l.value,position:l.position},message:l.message}),o.dirty()):"toLowerCase"===l.kind?t.data=t.data.toLowerCase():"toUpperCase"===l.kind?t.data=t.data.toUpperCase():"startsWith"===l.kind?t.data.startsWith(l.value)||(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.invalid_string,validation:{startsWith:l.value},message:l.message}),o.dirty()):"endsWith"===l.kind?t.data.endsWith(l.value)||(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.invalid_string,validation:{endsWith:l.value},message:l.message}),o.dirty()):"datetime"===l.kind?mie(l).test(t.data)||(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.invalid_string,validation:"datetime",message:l.message}),o.dirty()):"ip"===l.kind?yie(t.data,l.version)||(a=this._getOrReturnCtx(t,a),cn(a,{validation:"ip",code:Ht.invalid_string,message:l.message}),o.dirty()):kr.assertNever(l);return{status:o.value,value:t.data}}_regex(t,r,o){return this.refinement(a=>t.test(a),{validation:r,code:Ht.invalid_string,...Tn.errToObj(o)})}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...Tn.errToObj(t)})}url(t){return this._addCheck({kind:"url",...Tn.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...Tn.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...Tn.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...Tn.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...Tn.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...Tn.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...Tn.errToObj(t)})}datetime(t){var r;return this._addCheck("string"==typeof t?{kind:"datetime",precision:null,offset:!1,message:t}:{kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:null!==(r=t?.offset)&&void 0!==r&&r,...Tn.errToObj(t?.message)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...Tn.errToObj(r)})}includes(t,r){return this._addCheck({kind:"includes",value:t,position:r?.position,...Tn.errToObj(r?.message)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...Tn.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...Tn.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...Tn.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...Tn.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...Tn.errToObj(r)})}nonempty(t){return this.min(1,Tn.errToObj(t))}trim(){return new n({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new n({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new n({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>"datetime"===t.kind)}get isEmail(){return!!this._def.checks.find(t=>"email"===t.kind)}get isURL(){return!!this._def.checks.find(t=>"url"===t.kind)}get isEmoji(){return!!this._def.checks.find(t=>"emoji"===t.kind)}get isUUID(){return!!this._def.checks.find(t=>"uuid"===t.kind)}get isCUID(){return!!this._def.checks.find(t=>"cuid"===t.kind)}get isCUID2(){return!!this._def.checks.find(t=>"cuid2"===t.kind)}get isULID(){return!!this._def.checks.find(t=>"ulid"===t.kind)}get isIP(){return!!this._def.checks.find(t=>"ip"===t.kind)}get minLength(){let t=null;for(const r of this._def.checks)"min"===r.kind&&(null===t||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)"max"===r.kind&&(null===t||r.value<t)&&(t=r.value);return t}}return n.create=e=>{var t;return new n({checks:[],typeName:Un.ZodString,coerce:null!==(t=e?.coerce)&&void 0!==t&&t,...sr(e)})},n})();function vie(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=t>r?t:r;return parseInt(n.toFixed(o).replace(".",""))%parseInt(e.toFixed(o).replace(".",""))/Math.pow(10,o)}let bx=(()=>{class n extends cr{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==on.number){const l=this._getOrReturnCtx(t);return cn(l,{code:Ht.invalid_type,expected:on.number,received:l.parsedType}),Qn}let o;const a=new hs;for(const l of this._def.checks)"int"===l.kind?kr.isInteger(t.data)||(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.invalid_type,expected:"integer",received:"float",message:l.message}),a.dirty()):"min"===l.kind?(l.inclusive?t.data<l.value:t.data<=l.value)&&(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.too_small,minimum:l.value,type:"number",inclusive:l.inclusive,exact:!1,message:l.message}),a.dirty()):"max"===l.kind?(l.inclusive?t.data>l.value:t.data>=l.value)&&(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.too_big,maximum:l.value,type:"number",inclusive:l.inclusive,exact:!1,message:l.message}),a.dirty()):"multipleOf"===l.kind?0!==vie(t.data,l.value)&&(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.not_multiple_of,multipleOf:l.value,message:l.message}),a.dirty()):"finite"===l.kind?Number.isFinite(t.data)||(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.not_finite,message:l.message}),a.dirty()):kr.assertNever(l);return{status:a.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,Tn.toString(r))}gt(t,r){return this.setLimit("min",t,!1,Tn.toString(r))}lte(t,r){return this.setLimit("max",t,!0,Tn.toString(r))}lt(t,r){return this.setLimit("max",t,!1,Tn.toString(r))}setLimit(t,r,o,a){return new n({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:o,message:Tn.toString(a)}]})}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:Tn.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Tn.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Tn.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Tn.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Tn.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:Tn.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:Tn.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Tn.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Tn.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)"min"===r.kind&&(null===t||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)"max"===r.kind&&(null===t||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>"int"===t.kind||"multipleOf"===t.kind&&kr.isInteger(t.value))}get isFinite(){let t=null,r=null;for(const o of this._def.checks){if("finite"===o.kind||"int"===o.kind||"multipleOf"===o.kind)return!0;"min"===o.kind?(null===r||o.value>r)&&(r=o.value):"max"===o.kind&&(null===t||o.value<t)&&(t=o.value)}return Number.isFinite(r)&&Number.isFinite(t)}}return n.create=e=>new n({checks:[],typeName:Un.ZodNumber,coerce:e?.coerce||!1,...sr(e)}),n})(),_x=(()=>{class n extends cr{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==on.bigint){const l=this._getOrReturnCtx(t);return cn(l,{code:Ht.invalid_type,expected:on.bigint,received:l.parsedType}),Qn}let o;const a=new hs;for(const l of this._def.checks)"min"===l.kind?(l.inclusive?t.data<l.value:t.data<=l.value)&&(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.too_small,type:"bigint",minimum:l.value,inclusive:l.inclusive,message:l.message}),a.dirty()):"max"===l.kind?(l.inclusive?t.data>l.value:t.data>=l.value)&&(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.too_big,type:"bigint",maximum:l.value,inclusive:l.inclusive,message:l.message}),a.dirty()):"multipleOf"===l.kind?t.data%l.value!==BigInt(0)&&(o=this._getOrReturnCtx(t,o),cn(o,{code:Ht.not_multiple_of,multipleOf:l.value,message:l.message}),a.dirty()):kr.assertNever(l);return{status:a.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,Tn.toString(r))}gt(t,r){return this.setLimit("min",t,!1,Tn.toString(r))}lte(t,r){return this.setLimit("max",t,!0,Tn.toString(r))}lt(t,r){return this.setLimit("max",t,!1,Tn.toString(r))}setLimit(t,r,o,a){return new n({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:o,message:Tn.toString(a)}]})}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Tn.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Tn.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Tn.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Tn.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:Tn.toString(r)})}get minValue(){let t=null;for(const r of this._def.checks)"min"===r.kind&&(null===t||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)"max"===r.kind&&(null===t||r.value<t)&&(t=r.value);return t}}return n.create=e=>{var t;return new n({checks:[],typeName:Un.ZodBigInt,coerce:null!==(t=e?.coerce)&&void 0!==t&&t,...sr(e)})},n})(),Ex=(()=>{class n extends cr{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==on.boolean){const o=this._getOrReturnCtx(t);return cn(o,{code:Ht.invalid_type,expected:on.boolean,received:o.parsedType}),Qn}return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodBoolean,coerce:e?.coerce||!1,...sr(e)}),n})(),Cx=(()=>{class n extends cr{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==on.date){const l=this._getOrReturnCtx(t);return cn(l,{code:Ht.invalid_type,expected:on.date,received:l.parsedType}),Qn}if(isNaN(t.data.getTime()))return cn(this._getOrReturnCtx(t),{code:Ht.invalid_date}),Qn;const o=new hs;let a;for(const l of this._def.checks)"min"===l.kind?t.data.getTime()<l.value&&(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.too_small,message:l.message,inclusive:!0,exact:!1,minimum:l.value,type:"date"}),o.dirty()):"max"===l.kind?t.data.getTime()>l.value&&(a=this._getOrReturnCtx(t,a),cn(a,{code:Ht.too_big,message:l.message,inclusive:!0,exact:!1,maximum:l.value,type:"date"}),o.dirty()):kr.assertNever(l);return{status:o.value,value:new Date(t.data.getTime())}}_addCheck(t){return new n({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:Tn.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:Tn.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)"min"===r.kind&&(null===t||r.value>t)&&(t=r.value);return null!=t?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)"max"===r.kind&&(null===t||r.value<t)&&(t=r.value);return null!=t?new Date(t):null}}return n.create=e=>new n({checks:[],coerce:e?.coerce||!1,typeName:Un.ZodDate,...sr(e)}),n})(),uP=(()=>{class n extends cr{_parse(t){if(this._getType(t)!==on.symbol){const o=this._getOrReturnCtx(t);return cn(o,{code:Ht.invalid_type,expected:on.symbol,received:o.parsedType}),Qn}return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodSymbol,...sr(e)}),n})(),xx=(()=>{class n extends cr{_parse(t){if(this._getType(t)!==on.undefined){const o=this._getOrReturnCtx(t);return cn(o,{code:Ht.invalid_type,expected:on.undefined,received:o.parsedType}),Qn}return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodUndefined,...sr(e)}),n})(),Ax=(()=>{class n extends cr{_parse(t){if(this._getType(t)!==on.null){const o=this._getOrReturnCtx(t);return cn(o,{code:Ht.invalid_type,expected:on.null,received:o.parsedType}),Qn}return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodNull,...sr(e)}),n})(),a_=(()=>{class n extends cr{constructor(){super(...arguments),this._any=!0}_parse(t){return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodAny,...sr(e)}),n})(),$1=(()=>{class n extends cr{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodUnknown,...sr(e)}),n})(),Uh=(()=>{class n extends cr{_parse(t){const r=this._getOrReturnCtx(t);return cn(r,{code:Ht.invalid_type,expected:on.never,received:r.parsedType}),Qn}}return n.create=e=>new n({typeName:Un.ZodNever,...sr(e)}),n})(),dP=(()=>{class n extends cr{_parse(t){if(this._getType(t)!==on.undefined){const o=this._getOrReturnCtx(t);return cn(o,{code:Ht.invalid_type,expected:on.void,received:o.parsedType}),Qn}return Fs(t.data)}}return n.create=e=>new n({typeName:Un.ZodVoid,...sr(e)}),n})(),j1=(()=>{class n extends cr{_parse(t){const{ctx:r,status:o}=this._processInputParams(t),a=this._def;if(r.parsedType!==on.array)return cn(r,{code:Ht.invalid_type,expected:on.array,received:r.parsedType}),Qn;if(null!==a.exactLength){const d=r.data.length>a.exactLength.value,p=r.data.length<a.exactLength.value;(d||p)&&(cn(r,{code:d?Ht.too_big:Ht.too_small,minimum:p?a.exactLength.value:void 0,maximum:d?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),o.dirty())}if(null!==a.minLength&&r.data.length<a.minLength.value&&(cn(r,{code:Ht.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),o.dirty()),null!==a.maxLength&&r.data.length>a.maxLength.value&&(cn(r,{code:Ht.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),o.dirty()),r.common.async)return Promise.all([...r.data].map((d,p)=>a.type._parseAsync(new iu(r,d,r.path,p)))).then(d=>hs.mergeArray(o,d));const l=[...r.data].map((d,p)=>a.type._parseSync(new iu(r,d,r.path,p)));return hs.mergeArray(o,l)}get element(){return this._def.type}min(t,r){return new n({...this._def,minLength:{value:t,message:Tn.toString(r)}})}max(t,r){return new n({...this._def,maxLength:{value:t,message:Tn.toString(r)}})}length(t,r){return new n({...this._def,exactLength:{value:t,message:Tn.toString(r)}})}nonempty(t){return this.min(1,t)}}return n.create=(e,t)=>new n({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Un.ZodArray,...sr(t)}),n})();function q0(n){if(n instanceof K0){const e={};for(const t in n.shape)e[t]=jh.create(q0(n.shape[t]));return new K0({...n._def,shape:()=>e})}return n instanceof j1?new j1({...n._def,type:q0(n.element)}):n instanceof jh?jh.create(q0(n.unwrap())):n instanceof H1?H1.create(q0(n.unwrap())):n instanceof Y0?Y0.create(n.items.map(e=>q0(e))):n}let K0=(()=>{class n extends cr{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const t=this._def.shape(),r=kr.objectKeys(t);return this._cached={shape:t,keys:r}}_parse(t){if(this._getType(t)!==on.object){const O=this._getOrReturnCtx(t);return cn(O,{code:Ht.invalid_type,expected:on.object,received:O.parsedType}),Qn}const{status:o,ctx:a}=this._processInputParams(t),{shape:l,keys:d}=this._getCached(),p=[];if(!(this._def.catchall instanceof Uh&&"strip"===this._def.unknownKeys))for(const O in a.data)d.includes(O)||p.push(O);const y=[];for(const O of d)y.push({key:{status:"valid",value:O},value:l[O]._parse(new iu(a,a.data[O],a.path,O)),alwaysSet:O in a.data});if(this._def.catchall instanceof Uh){const O=this._def.unknownKeys;if("passthrough"===O)for(const H of p)y.push({key:{status:"valid",value:H},value:{status:"valid",value:a.data[H]}});else if("strict"===O)p.length>0&&(cn(a,{code:Ht.unrecognized_keys,keys:p}),o.dirty());else if("strip"!==O)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const O=this._def.catchall;for(const H of p)y.push({key:{status:"valid",value:H},value:O._parse(new iu(a,a.data[H],a.path,H)),alwaysSet:H in a.data})}return a.common.async?Promise.resolve().then((0,Oe.Z)(function*(){const O=[];for(const H of y){const Ee=yield H.key;O.push({key:Ee,value:yield H.value,alwaysSet:H.alwaysSet})}return O})).then(O=>hs.mergeObjectSync(o,O)):hs.mergeObjectSync(o,y)}get shape(){return this._def.shape()}strict(t){return new n({...this._def,unknownKeys:"strict",...void 0!==t?{errorMap:(r,o)=>{var a,l,d,p;const y=null!==(d=null===(l=(a=this._def).errorMap)||void 0===l?void 0:l.call(a,r,o).message)&&void 0!==d?d:o.defaultError;return"unrecognized_keys"===r.code?{message:null!==(p=Tn.errToObj(t).message)&&void 0!==p?p:y}:{message:y}}}:{}})}strip(){return new n({...this._def,unknownKeys:"strip"})}passthrough(){return new n({...this._def,unknownKeys:"passthrough"})}extend(t){return new n({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new n({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:Un.ZodObject})}setKey(t,r){return this.augment({[t]:r})}catchall(t){return new n({...this._def,catchall:t})}pick(t){const r={};return kr.objectKeys(t).forEach(o=>{t[o]&&this.shape[o]&&(r[o]=this.shape[o])}),new n({...this._def,shape:()=>r})}omit(t){const r={};return kr.objectKeys(this.shape).forEach(o=>{t[o]||(r[o]=this.shape[o])}),new n({...this._def,shape:()=>r})}deepPartial(){return q0(this)}partial(t){const r={};return kr.objectKeys(this.shape).forEach(o=>{const a=this.shape[o];r[o]=t&&!t[o]?a:a.optional()}),new n({...this._def,shape:()=>r})}required(t){const r={};return kr.objectKeys(this.shape).forEach(o=>{if(t&&!t[o])r[o]=this.shape[o];else{let l=this.shape[o];for(;l instanceof jh;)l=l._def.innerType;r[o]=l}}),new n({...this._def,shape:()=>r})}keyof(){return pP(kr.objectKeys(this.shape))}}return n.create=(e,t)=>new n({shape:()=>e,unknownKeys:"strip",catchall:Uh.create(),typeName:Un.ZodObject,...sr(t)}),n.strictCreate=(e,t)=>new n({shape:()=>e,unknownKeys:"strict",catchall:Uh.create(),typeName:Un.ZodObject,...sr(t)}),n.lazycreate=(e,t)=>new n({shape:e,unknownKeys:"strip",catchall:Uh.create(),typeName:Un.ZodObject,...sr(t)}),n})(),Sx=(()=>{class n extends cr{_parse(t){const{ctx:r}=this._processInputParams(t),o=this._def.options;if(r.common.async)return Promise.all(o.map(function(){var l=(0,Oe.Z)(function*(d){const p={...r,common:{...r.common,issues:[]},parent:null};return{result:yield d._parseAsync({data:r.data,path:r.path,parent:p}),ctx:p}});return function(d){return l.apply(this,arguments)}}())).then(function a(l){for(const p of l)if("valid"===p.result.status)return p.result;for(const p of l)if("dirty"===p.result.status)return r.common.issues.push(...p.ctx.common.issues),p.result;const d=l.map(p=>new rd(p.ctx.common.issues));return cn(r,{code:Ht.invalid_union,unionErrors:d}),Qn});{let l;const d=[];for(const y of o){const O={...r,common:{...r.common,issues:[]},parent:null},H=y._parseSync({data:r.data,path:r.path,parent:O});if("valid"===H.status)return H;"dirty"===H.status&&!l&&(l={result:H,ctx:O}),O.common.issues.length&&d.push(O.common.issues)}if(l)return r.common.issues.push(...l.ctx.common.issues),l.result;const p=d.map(y=>new rd(y));return cn(r,{code:Ht.invalid_union,unionErrors:p}),Qn}}get options(){return this._def.options}}return n.create=(e,t)=>new n({options:e,typeName:Un.ZodUnion,...sr(t)}),n})();const c_=n=>n instanceof Tx?c_(n.schema):n instanceof $h?c_(n.innerType()):n instanceof Rx?[n.value]:n instanceof u_?n.options:n instanceof Ox?Object.keys(n.enum):n instanceof Mx?c_(n._def.innerType):n instanceof xx?[void 0]:n instanceof Ax?[null]:null;class l_ extends cr{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==on.object)return cn(t,{code:Ht.invalid_type,expected:on.object,received:t.parsedType}),Qn;const r=this.discriminator,a=this.optionsMap.get(t.data[r]);return a?t.common.async?a._parseAsync({data:t.data,path:t.path,parent:t}):a._parseSync({data:t.data,path:t.path,parent:t}):(cn(t,{code:Ht.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Qn)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const o=new Map;for(const a of t){const l=c_(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const d of l){if(o.has(d))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(d)}`);o.set(d,a)}}return new l_({typeName:Un.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:o,...sr(r)})}}function Ix(n,e){const t=Ef(n),r=Ef(e);if(n===e)return{valid:!0,data:n};if(t===on.object&&r===on.object){const o=kr.objectKeys(e),a=kr.objectKeys(n).filter(d=>-1!==o.indexOf(d)),l={...n,...e};for(const d of a){const p=Ix(n[d],e[d]);if(!p.valid)return{valid:!1};l[d]=p.data}return{valid:!0,data:l}}if(t===on.array&&r===on.array){if(n.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<n.length;a++){const p=Ix(n[a],e[a]);if(!p.valid)return{valid:!1};o.push(p.data)}return{valid:!0,data:o}}return t===on.date&&r===on.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}let Dx=(()=>{class n extends cr{_parse(t){const{status:r,ctx:o}=this._processInputParams(t),a=(l,d)=>{if(yx(l)||yx(d))return Qn;const p=Ix(l.value,d.value);return p.valid?((vx(l)||vx(d))&&r.dirty(),{status:r.value,value:p.data}):(cn(o,{code:Ht.invalid_intersection_types}),Qn)};return o.common.async?Promise.all([this._def.left._parseAsync({data:o.data,path:o.path,parent:o}),this._def.right._parseAsync({data:o.data,path:o.path,parent:o})]).then(([l,d])=>a(l,d)):a(this._def.left._parseSync({data:o.data,path:o.path,parent:o}),this._def.right._parseSync({data:o.data,path:o.path,parent:o}))}}return n.create=(e,t,r)=>new n({left:e,right:t,typeName:Un.ZodIntersection,...sr(r)}),n})(),Y0=(()=>{class n extends cr{_parse(t){const{status:r,ctx:o}=this._processInputParams(t);if(o.parsedType!==on.array)return cn(o,{code:Ht.invalid_type,expected:on.array,received:o.parsedType}),Qn;if(o.data.length<this._def.items.length)return cn(o,{code:Ht.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Qn;!this._def.rest&&o.data.length>this._def.items.length&&(cn(o,{code:Ht.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const l=[...o.data].map((d,p)=>{const y=this._def.items[p]||this._def.rest;return y?y._parse(new iu(o,d,o.path,p)):null}).filter(d=>!!d);return o.common.async?Promise.all(l).then(d=>hs.mergeArray(r,d)):hs.mergeArray(r,l)}get items(){return this._def.items}rest(t){return new n({...this._def,rest:t})}}return n.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new n({items:e,typeName:Un.ZodTuple,rest:null,...sr(t)})},n})();class V1 extends cr{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==on.object)return cn(r,{code:Ht.invalid_type,expected:on.object,received:r.parsedType}),Qn;const o=[],a=this._def.keyType,l=this._def.valueType;for(const d in r.data)o.push({key:a._parse(new iu(r,d,r.path,d)),value:l._parse(new iu(r,r.data[d],r.path,d))});return r.common.async?hs.mergeObjectAsync(t,o):hs.mergeObjectSync(t,o)}get element(){return this._def.valueType}static create(e,t,r){return new V1(t instanceof cr?{keyType:e,valueType:t,typeName:Un.ZodRecord,...sr(r)}:{keyType:s_.create(),valueType:e,typeName:Un.ZodRecord,...sr(t)})}}let fP=(()=>{class n extends cr{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:o}=this._processInputParams(t);if(o.parsedType!==on.map)return cn(o,{code:Ht.invalid_type,expected:on.map,received:o.parsedType}),Qn;const a=this._def.keyType,l=this._def.valueType,d=[...o.data.entries()].map(([p,y],O)=>({key:a._parse(new iu(o,p,o.path,[O,"key"])),value:l._parse(new iu(o,y,o.path,[O,"value"]))}));if(o.common.async){const p=new Map;return Promise.resolve().then((0,Oe.Z)(function*(){for(const y of d){const O=yield y.key,H=yield y.value;if("aborted"===O.status||"aborted"===H.status)return Qn;("dirty"===O.status||"dirty"===H.status)&&r.dirty(),p.set(O.value,H.value)}return{status:r.value,value:p}}))}{const p=new Map;for(const y of d){const O=y.key,H=y.value;if("aborted"===O.status||"aborted"===H.status)return Qn;("dirty"===O.status||"dirty"===H.status)&&r.dirty(),p.set(O.value,H.value)}return{status:r.value,value:p}}}}return n.create=(e,t,r)=>new n({valueType:t,keyType:e,typeName:Un.ZodMap,...sr(r)}),n})(),hP=(()=>{class n extends cr{_parse(t){const{status:r,ctx:o}=this._processInputParams(t);if(o.parsedType!==on.set)return cn(o,{code:Ht.invalid_type,expected:on.set,received:o.parsedType}),Qn;const a=this._def;null!==a.minSize&&o.data.size<a.minSize.value&&(cn(o,{code:Ht.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),r.dirty()),null!==a.maxSize&&o.data.size>a.maxSize.value&&(cn(o,{code:Ht.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),r.dirty());const l=this._def.valueType;function d(y){const O=new Set;for(const H of y){if("aborted"===H.status)return Qn;"dirty"===H.status&&r.dirty(),O.add(H.value)}return{status:r.value,value:O}}const p=[...o.data.values()].map((y,O)=>l._parse(new iu(o,y,o.path,O)));return o.common.async?Promise.all(p).then(y=>d(y)):d(p)}min(t,r){return new n({...this._def,minSize:{value:t,message:Tn.toString(r)}})}max(t,r){return new n({...this._def,maxSize:{value:t,message:Tn.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}}return n.create=(e,t)=>new n({valueType:e,minSize:null,maxSize:null,typeName:Un.ZodSet,...sr(t)}),n})();class J0 extends cr{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==on.function)return cn(t,{code:Ht.invalid_type,expected:on.function,received:t.parsedType}),Qn;function r(d,p){return i_({data:d,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r_(),F1].filter(y=>!!y),issueData:{code:Ht.invalid_arguments,argumentsError:p}})}function o(d,p){return i_({data:d,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,r_(),F1].filter(y=>!!y),issueData:{code:Ht.invalid_return_type,returnTypeError:p}})}const a={errorMap:t.common.contextualErrorMap},l=t.data;if(this._def.returns instanceof d_){const d=this;return Fs((0,Oe.Z)(function*(...p){const y=new rd([]),O=yield d._def.args.parseAsync(p,a).catch(Ue=>{throw y.addIssue(r(p,Ue)),y}),H=yield Reflect.apply(l,this,O);return yield d._def.returns._def.type.parseAsync(H,a).catch(Ue=>{throw y.addIssue(o(H,Ue)),y})}))}{const d=this;return Fs(function(...p){const y=d._def.args.safeParse(p,a);if(!y.success)throw new rd([r(p,y.error)]);const O=Reflect.apply(l,this,y.data),H=d._def.returns.safeParse(O,a);if(!H.success)throw new rd([o(O,H.error)]);return H.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new J0({...this._def,args:Y0.create(e).rest($1.create())})}returns(e){return new J0({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new J0({args:e||Y0.create([]).rest($1.create()),returns:t||$1.create(),typeName:Un.ZodFunction,...sr(r)})}}let Tx=(()=>{class n extends cr{get schema(){return this._def.getter()}_parse(t){const{ctx:r}=this._processInputParams(t);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}return n.create=(e,t)=>new n({getter:e,typeName:Un.ZodLazy,...sr(t)}),n})(),Rx=(()=>{class n extends cr{_parse(t){if(t.data!==this._def.value){const r=this._getOrReturnCtx(t);return cn(r,{received:r.data,code:Ht.invalid_literal,expected:this._def.value}),Qn}return{status:"valid",value:t.data}}get value(){return this._def.value}}return n.create=(e,t)=>new n({value:e,typeName:Un.ZodLiteral,...sr(t)}),n})();function pP(n,e){return new u_({values:n,typeName:Un.ZodEnum,...sr(e)})}let u_=(()=>{class n extends cr{_parse(t){if("string"!=typeof t.data){const r=this._getOrReturnCtx(t);return cn(r,{expected:kr.joinValues(this._def.values),received:r.parsedType,code:Ht.invalid_type}),Qn}if(-1===this._def.values.indexOf(t.data)){const r=this._getOrReturnCtx(t);return cn(r,{received:r.data,code:Ht.invalid_enum_value,options:this._def.values}),Qn}return Fs(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}extract(t){return n.create(t)}exclude(t){return n.create(this.options.filter(r=>!t.includes(r)))}}return n.create=pP,n})(),Ox=(()=>{class n extends cr{_parse(t){const r=kr.getValidEnumValues(this._def.values),o=this._getOrReturnCtx(t);if(o.parsedType!==on.string&&o.parsedType!==on.number){const a=kr.objectValues(r);return cn(o,{expected:kr.joinValues(a),received:o.parsedType,code:Ht.invalid_type}),Qn}if(-1===r.indexOf(t.data)){const a=kr.objectValues(r);return cn(o,{received:o.data,code:Ht.invalid_enum_value,options:a}),Qn}return Fs(t.data)}get enum(){return this._def.values}}return n.create=(e,t)=>new n({values:e,typeName:Un.ZodNativeEnum,...sr(t)}),n})(),d_=(()=>{class n extends cr{unwrap(){return this._def.type}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==on.promise&&!1===r.common.async)return cn(r,{code:Ht.invalid_type,expected:on.promise,received:r.parsedType}),Qn;const o=r.parsedType===on.promise?r.data:Promise.resolve(r.data);return Fs(o.then(a=>this._def.type.parseAsync(a,{path:r.path,errorMap:r.common.contextualErrorMap})))}}return n.create=(e,t)=>new n({type:e,typeName:Un.ZodPromise,...sr(t)}),n})(),$h=(()=>{class n extends cr{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Un.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:r,ctx:o}=this._processInputParams(t),a=this._def.effect||null,l={addIssue:d=>{cn(o,d),d.fatal?r.abort():r.dirty()},get path(){return o.path}};if(l.addIssue=l.addIssue.bind(l),"preprocess"===a.type){const d=a.transform(o.data,l);return o.common.issues.length?{status:"dirty",value:o.data}:o.common.async?Promise.resolve(d).then(p=>this._def.schema._parseAsync({data:p,path:o.path,parent:o})):this._def.schema._parseSync({data:d,path:o.path,parent:o})}if("refinement"===a.type){const d=p=>{const y=a.refinement(p,l);if(o.common.async)return Promise.resolve(y);if(y instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return p};if(!1===o.common.async){const p=this._def.schema._parseSync({data:o.data,path:o.path,parent:o});return"aborted"===p.status?Qn:("dirty"===p.status&&r.dirty(),d(p.value),{status:r.value,value:p.value})}return this._def.schema._parseAsync({data:o.data,path:o.path,parent:o}).then(p=>"aborted"===p.status?Qn:("dirty"===p.status&&r.dirty(),d(p.value).then(()=>({status:r.value,value:p.value}))))}if("transform"===a.type){if(!1===o.common.async){const d=this._def.schema._parseSync({data:o.data,path:o.path,parent:o});if(!U1(d))return d;const p=a.transform(d.value,l);if(p instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:p}}return this._def.schema._parseAsync({data:o.data,path:o.path,parent:o}).then(d=>U1(d)?Promise.resolve(a.transform(d.value,l)).then(p=>({status:r.value,value:p})):d)}kr.assertNever(a)}}return n.create=(e,t,r)=>new n({schema:e,typeName:Un.ZodEffects,effect:t,...sr(r)}),n.createWithPreprocess=(e,t,r)=>new n({schema:t,effect:{type:"preprocess",transform:e},typeName:Un.ZodEffects,...sr(r)}),n})(),jh=(()=>{class n extends cr{_parse(t){return this._getType(t)===on.undefined?Fs(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}return n.create=(e,t)=>new n({innerType:e,typeName:Un.ZodOptional,...sr(t)}),n})(),H1=(()=>{class n extends cr{_parse(t){return this._getType(t)===on.null?Fs(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}return n.create=(e,t)=>new n({innerType:e,typeName:Un.ZodNullable,...sr(t)}),n})(),Mx=(()=>{class n extends cr{_parse(t){const{ctx:r}=this._processInputParams(t);let o=r.data;return r.parsedType===on.undefined&&(o=this._def.defaultValue()),this._def.innerType._parse({data:o,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}return n.create=(e,t)=>new n({innerType:e,typeName:Un.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...sr(t)}),n})(),gP=(()=>{class n extends cr{_parse(t){const{ctx:r}=this._processInputParams(t),o={...r,common:{...r.common,issues:[]}},a=this._def.innerType._parse({data:o.data,path:o.path,parent:{...o}});return o_(a)?a.then(l=>({status:"valid",value:"valid"===l.status?l.value:this._def.catchValue({get error(){return new rd(o.common.issues)},input:o.data})})):{status:"valid",value:"valid"===a.status?a.value:this._def.catchValue({get error(){return new rd(o.common.issues)},input:o.data})}}removeCatch(){return this._def.innerType}}return n.create=(e,t)=>new n({innerType:e,typeName:Un.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...sr(t)}),n})(),mP=(()=>{class n extends cr{_parse(t){if(this._getType(t)!==on.nan){const o=this._getOrReturnCtx(t);return cn(o,{code:Ht.invalid_type,expected:on.nan,received:o.parsedType}),Qn}return{status:"valid",value:t.data}}}return n.create=e=>new n({typeName:Un.ZodNaN,...sr(e)}),n})();const wie=Symbol("zod_brand");class yP extends cr{_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.type._parse({data:t.data,path:t.path,parent:t})}unwrap(){return this._def.type}}class z1 extends cr{_parse(e){var t=this;const{status:r,ctx:o}=this._processInputParams(e);if(o.common.async)return function(){var l=(0,Oe.Z)(function*(){const d=yield t._def.in._parseAsync({data:o.data,path:o.path,parent:o});return"aborted"===d.status?Qn:"dirty"===d.status?(r.dirty(),cP(d.value)):t._def.out._parseAsync({data:d.value,path:o.path,parent:o})});return function(){return l.apply(this,arguments)}}()();{const a=this._def.in._parseSync({data:o.data,path:o.path,parent:o});return"aborted"===a.status?Qn:"dirty"===a.status?(r.dirty(),{status:"dirty",value:a.value}):this._def.out._parseSync({data:a.value,path:o.path,parent:o})}}static create(e,t){return new z1({in:e,out:t,typeName:Un.ZodPipeline})}}let vP=(()=>{class n extends cr{_parse(t){const r=this._def.innerType._parse(t);return U1(r)&&(r.value=Object.freeze(r.value)),r}}return n.create=(e,t)=>new n({innerType:e,typeName:Un.ZodReadonly,...sr(t)}),n})();const wP=(n,e={},t)=>n?a_.create().superRefine((r,o)=>{var a,l;if(!n(r)){const d="function"==typeof e?e(r):"string"==typeof e?{message:e}:e,p=null===(l=null!==(a=d.fatal)&&void 0!==a?a:t)||void 0===l||l;o.addIssue({code:"custom",..."string"==typeof d?{message:d}:d,fatal:p})}}):a_.create(),bie={object:K0.lazycreate};var Un=function(n){return n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly",n}(Un||{});const bP=s_.create,_P=bx.create,EP=Ex.create,CP=$h.create;var lt=Object.freeze({__proto__:null,defaultErrorMap:F1,setErrorMap:function sie(n){aP=n},getErrorMap:r_,makeIssue:i_,EMPTY_PATH:[],addIssueToContext:cn,ParseStatus:hs,INVALID:Qn,DIRTY:cP,OK:Fs,isAborted:yx,isDirty:vx,isValid:U1,isAsync:o_,get util(){return kr},get objectUtil(){return sP},ZodParsedType:on,getParsedType:Ef,ZodType:cr,ZodString:s_,ZodNumber:bx,ZodBigInt:_x,ZodBoolean:Ex,ZodDate:Cx,ZodSymbol:uP,ZodUndefined:xx,ZodNull:Ax,ZodAny:a_,ZodUnknown:$1,ZodNever:Uh,ZodVoid:dP,ZodArray:j1,ZodObject:K0,ZodUnion:Sx,ZodDiscriminatedUnion:l_,ZodIntersection:Dx,ZodTuple:Y0,ZodRecord:V1,ZodMap:fP,ZodSet:hP,ZodFunction:J0,ZodLazy:Tx,ZodLiteral:Rx,ZodEnum:u_,ZodNativeEnum:Ox,ZodPromise:d_,ZodEffects:$h,ZodTransformer:$h,ZodOptional:jh,ZodNullable:H1,ZodDefault:Mx,ZodCatch:gP,ZodNaN:mP,BRAND:wie,ZodBranded:yP,ZodPipeline:z1,ZodReadonly:vP,custom:wP,Schema:cr,ZodSchema:cr,late:bie,get ZodFirstPartyTypeKind(){return Un},coerce:{string:n=>s_.create({...n,coerce:!0}),number:n=>bx.create({...n,coerce:!0}),boolean:n=>Ex.create({...n,coerce:!0}),bigint:n=>_x.create({...n,coerce:!0}),date:n=>Cx.create({...n,coerce:!0})},any:a_.create,array:j1.create,bigint:_x.create,boolean:EP,date:Cx.create,discriminatedUnion:l_.create,effect:CP,enum:u_.create,function:J0.create,instanceof:(n,e={message:`Input not instance of ${n.name}`})=>wP(t=>t instanceof n,e),intersection:Dx.create,lazy:Tx.create,literal:Rx.create,map:fP.create,nan:mP.create,nativeEnum:Ox.create,never:Uh.create,null:Ax.create,nullable:H1.create,number:_P,object:K0.create,oboolean:()=>EP().optional(),onumber:()=>_P().optional(),optional:jh.create,ostring:()=>bP().optional(),pipeline:z1.create,preprocess:$h.createWithPreprocess,promise:d_.create,record:V1.create,set:hP.create,strictObject:K0.strictCreate,string:bP,symbol:uP.create,transformer:CP,tuple:Y0.create,undefined:xx.create,union:Sx.create,unknown:$1.create,void:dP.create,NEVER:Qn,ZodIssueCode:Ht,quotelessJson:n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:rd});const qo=lt.object({message:lt.string()});function Mn(n){return lt.literal(Zt[n])}lt.object({accessList:lt.array(lt.string()),blockHash:lt.string().nullable(),blockNumber:lt.string().nullable(),chainId:lt.string(),from:lt.string(),gas:lt.string(),hash:lt.string(),input:lt.string().nullable(),maxFeePerGas:lt.string(),maxPriorityFeePerGas:lt.string(),nonce:lt.string(),r:lt.string(),s:lt.string(),to:lt.string(),transactionIndex:lt.string().nullable(),type:lt.string(),v:lt.string(),value:lt.string()});const Qie=lt.object({chainId:lt.number()}),Xie=lt.object({email:lt.string().email()}),eoe=lt.object({otp:lt.string()}),toe=lt.object({chainId:lt.optional(lt.number()),preferredAccountType:lt.optional(lt.string())}),noe=lt.object({email:lt.string().email()}),roe=lt.object({otp:lt.string()}),ioe=lt.object({otp:lt.string()}),ooe=lt.object({themeMode:lt.optional(lt.enum(["light","dark"])),themeVariables:lt.optional(lt.record(lt.string(),lt.string().or(lt.number())))}),soe=lt.object({metadata:lt.object({name:lt.string(),description:lt.string(),url:lt.string(),icons:lt.array(lt.string())}).optional(),sdkVersion:lt.string(),projectId:lt.string()}),aoe=lt.object({type:lt.string()}),coe=lt.object({action:lt.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),loe=lt.object({email:lt.string().email(),address:lt.string(),chainId:lt.number(),smartAccountDeployed:lt.optional(lt.boolean())}),uoe=lt.object({isConnected:lt.boolean()}),doe=lt.object({chainId:lt.number()}),foe=lt.object({chainId:lt.number()}),hoe=lt.object({newEmail:lt.string().email()}),poe=lt.object({smartAccountEnabledNetworks:lt.array(lt.number())}),goe=(lt.object({address:lt.string(),isDeployed:lt.boolean()}),lt.object({type:lt.string(),address:lt.string()})),moe=lt.any(),yoe=lt.object({method:lt.literal("eth_accounts")}),voe=lt.object({method:lt.literal("eth_blockNumber")}),woe=lt.object({method:lt.literal("eth_call"),params:lt.array(lt.any())}),boe=lt.object({method:lt.literal("eth_chainId")}),_oe=lt.object({method:lt.literal("eth_estimateGas"),params:lt.array(lt.any())}),Eoe=lt.object({method:lt.literal("eth_feeHistory"),params:lt.array(lt.any())}),Coe=lt.object({method:lt.literal("eth_gasPrice")}),xoe=lt.object({method:lt.literal("eth_getAccount"),params:lt.array(lt.any())}),Aoe=lt.object({method:lt.literal("eth_getBalance"),params:lt.array(lt.any())}),Soe=lt.object({method:lt.literal("eth_getBlockByHash"),params:lt.array(lt.any())}),Ioe=lt.object({method:lt.literal("eth_getBlockByNumber"),params:lt.array(lt.any())}),Doe=lt.object({method:lt.literal("eth_getBlockReceipts"),params:lt.array(lt.any())}),Toe=lt.object({method:lt.literal("eth_getBlockTransactionCountByHash"),params:lt.array(lt.any())}),Roe=lt.object({method:lt.literal("eth_getBlockTransactionCountByNumber"),params:lt.array(lt.any())}),Ooe=lt.object({method:lt.literal("eth_getCode"),params:lt.array(lt.any())}),Moe=lt.object({method:lt.literal("eth_getFilterChanges"),params:lt.array(lt.any())}),Noe=lt.object({method:lt.literal("eth_getFilterLogs"),params:lt.array(lt.any())}),Poe=lt.object({method:lt.literal("eth_getLogs"),params:lt.array(lt.any())}),koe=lt.object({method:lt.literal("eth_getProof"),params:lt.array(lt.any())}),Loe=lt.object({method:lt.literal("eth_getStorageAt"),params:lt.array(lt.any())}),Boe=lt.object({method:lt.literal("eth_getTransactionByBlockHashAndIndex"),params:lt.array(lt.any())}),Foe=lt.object({method:lt.literal("eth_getTransactionByBlockNumberAndIndex"),params:lt.array(lt.any())}),Uoe=lt.object({method:lt.literal("eth_getTransactionByHash"),params:lt.array(lt.any())}),$oe=lt.object({method:lt.literal("eth_getTransactionCount"),params:lt.array(lt.any())}),joe=lt.object({method:lt.literal("eth_getTransactionReceipt"),params:lt.array(lt.any())}),Voe=lt.object({method:lt.literal("eth_getUncleCountByBlockHash"),params:lt.array(lt.any())}),Hoe=lt.object({method:lt.literal("eth_getUncleCountByBlockNumber"),params:lt.array(lt.any())}),zoe=lt.object({method:lt.literal("eth_maxPriorityFeePerGas")}),Woe=lt.object({method:lt.literal("eth_newBlockFilter")}),Zoe=lt.object({method:lt.literal("eth_newFilter"),params:lt.array(lt.any())}),Goe=lt.object({method:lt.literal("eth_newPendingTransactionFilter")}),qoe=lt.object({method:lt.literal("eth_sendRawTransaction"),params:lt.array(lt.any())}),Koe=lt.object({method:lt.literal("eth_syncing"),params:lt.array(lt.any())}),Yoe=lt.object({method:lt.literal("eth_uninstallFilter"),params:lt.array(lt.any())}),xP=lt.object({method:lt.literal("personal_sign"),params:lt.array(lt.any())}),Joe=lt.object({method:lt.literal("eth_signTypedData_v4"),params:lt.array(lt.any())}),AP=lt.object({method:lt.literal("eth_sendTransaction"),params:lt.array(lt.any())}),SP=lt.object({token:lt.string()}),f_={appEvent:lt.object({type:Mn("APP_SWITCH_NETWORK"),payload:Qie}).or(lt.object({type:Mn("APP_CONNECT_EMAIL"),payload:Xie})).or(lt.object({type:Mn("APP_CONNECT_DEVICE")})).or(lt.object({type:Mn("APP_CONNECT_OTP"),payload:eoe})).or(lt.object({type:Mn("APP_GET_USER"),payload:lt.optional(toe)})).or(lt.object({type:Mn("APP_SIGN_OUT")})).or(lt.object({type:Mn("APP_IS_CONNECTED"),payload:lt.optional(SP)})).or(lt.object({type:Mn("APP_GET_CHAIN_ID")})).or(lt.object({type:Mn("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(lt.object({type:Mn("APP_INIT_SMART_ACCOUNT")})).or(lt.object({type:Mn("APP_SET_PREFERRED_ACCOUNT"),payload:aoe})).or(lt.object({type:Mn("APP_RPC_REQUEST"),payload:xP.or(AP).or(yoe).or(voe).or(woe).or(boe).or(_oe).or(Eoe).or(Coe).or(xoe).or(Aoe).or(Soe).or(Ioe).or(Doe).or(Toe).or(Roe).or(Ooe).or(Moe).or(Noe).or(Poe).or(koe).or(Loe).or(Boe).or(Foe).or(Uoe).or($oe).or(joe).or(Voe).or(Hoe).or(zoe).or(Woe).or(Zoe).or(Goe).or(qoe).or(Koe).or(Yoe).or(xP).or(Joe).or(AP)})).or(lt.object({type:Mn("APP_UPDATE_EMAIL"),payload:noe})).or(lt.object({type:Mn("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:roe})).or(lt.object({type:Mn("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:ioe})).or(lt.object({type:Mn("APP_SYNC_THEME"),payload:ooe})).or(lt.object({type:Mn("APP_SYNC_DAPP_DATA"),payload:soe})),frameEvent:lt.object({type:Mn("FRAME_SWITCH_NETWORK_ERROR"),payload:qo}).or(lt.object({type:Mn("FRAME_SWITCH_NETWORK_SUCCESS"),payload:foe})).or(lt.object({type:Mn("FRAME_CONNECT_EMAIL_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_CONNECT_EMAIL_SUCCESS"),payload:coe})).or(lt.object({type:Mn("FRAME_CONNECT_OTP_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_CONNECT_OTP_SUCCESS")})).or(lt.object({type:Mn("FRAME_CONNECT_DEVICE_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_CONNECT_DEVICE_SUCCESS")})).or(lt.object({type:Mn("FRAME_GET_USER_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_GET_USER_SUCCESS"),payload:loe})).or(lt.object({type:Mn("FRAME_SIGN_OUT_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_SIGN_OUT_SUCCESS")})).or(lt.object({type:Mn("FRAME_IS_CONNECTED_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_IS_CONNECTED_SUCCESS"),payload:uoe})).or(lt.object({type:Mn("FRAME_GET_CHAIN_ID_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_GET_CHAIN_ID_SUCCESS"),payload:doe})).or(lt.object({type:Mn("FRAME_RPC_REQUEST_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_RPC_REQUEST_SUCCESS"),payload:moe})).or(lt.object({type:Mn("FRAME_SESSION_UPDATE"),payload:SP})).or(lt.object({type:Mn("FRAME_UPDATE_EMAIL_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_UPDATE_EMAIL_SUCCESS")})).or(lt.object({type:Mn("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(lt.object({type:Mn("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:hoe})).or(lt.object({type:Mn("FRAME_SYNC_THEME_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_SYNC_THEME_SUCCESS")})).or(lt.object({type:Mn("FRAME_SYNC_DAPP_DATA_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(lt.object({type:Mn("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:poe})).or(lt.object({type:Mn("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:qo})).or(lt.object({type:Mn("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:goe})).or(lt.object({type:Mn("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:qo}))},ps={set(n,e){Di.isClient&&localStorage.setItem(`${Zt.STORAGE_KEY}${n}`,e)},get:n=>Di.isClient?localStorage.getItem(`${Zt.STORAGE_KEY}${n}`):null,delete(n){Di.isClient&&localStorage.removeItem(`${Zt.STORAGE_KEY}${n}`)}},Qoe=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],h_=3e4,Di={getBlockchainApiUrl(){try{const{timeZone:n}=(new Intl.DateTimeFormat).resolvedOptions(),e=n.toUpperCase();return Qoe.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const n=ps.get(Zt.LAST_EMAIL_LOGIN_TIME);if(n){const e=Date.now()-Number(n);if(e<h_){const t=Math.ceil((h_-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const n=ps.get(Zt.LAST_EMAIL_LOGIN_TIME);if(n){const e=Date.now()-Number(n);if(e<h_)return Math.ceil((h_-e)/1e3)}return 0},checkIfRequestExists(n){const e=this.getRequestMethod(n);return Go.NOT_SAFE_RPC_METHODS.includes(e)||Go.SAFE_RPC_METHODS.includes(e)},getRequestMethod:n=>n?.payload?.method,checkIfRequestIsAllowed(n){const e=this.getRequestMethod(n);return Go.SAFE_RPC_METHODS.includes(e)},getPreferredAccountType:()=>ps.get(Zt.PREFERRED_ACCOUNT_TYPE)||Go.ACCOUNT_TYPES.EOA,isClient:typeof window<"u"};class Xoe{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=Di.getBlockchainApiUrl(),this.events={onFrameEvent:r=>{Di.isClient&&window.addEventListener("message",({data:o})=>{if(!o.type?.includes(Zt.FRAME_EVENT_KEY))return;const a=f_.frameEvent.parse(o);r(a)})},onAppEvent:r=>{Di.isClient&&window.addEventListener("message",({data:o})=>{if(!o.type?.includes(Zt.APP_EVENT_KEY))return;const a=f_.appEvent.parse(o);r(a)})},postAppEvent:r=>{if(Di.isClient){if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");f_.appEvent.parse(r),window.postMessage(r),this.iframe.contentWindow.postMessage(r,"*")}},postFrameEvent:r=>{if(Di.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");f_.frameEvent.parse(r),parent.postMessage(r,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),t&&(this.frameLoadPromise=new Promise((r,o)=>{this.frameLoadPromiseResolver={resolve:r,reject:o}}),Di.isClient)){const r=document.createElement("iframe");r.id="w3m-iframe",r.src=`${Zt.SECURE_SITE_SDK}?projectId=${e}`,r.style.position="fixed",r.style.zIndex="999999",r.style.display="none",r.style.opacity="0",r.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",r.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(r),this.iframe=r,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class ese{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new Xoe(e,!0),this.w3mFrame.events.onFrameEvent(t=>{switch(console.log("\u{1f4bb} received",t),t.type){case Zt.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(t);case Zt.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(t);case Zt.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case Zt.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(t);case Zt.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case Zt.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(t);case Zt.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(t);case Zt.FRAME_GET_USER_ERROR:return this.onConnectError(t);case Zt.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(t);case Zt.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(t);case Zt.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(t);case Zt.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(t);case Zt.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case Zt.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(t);case Zt.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(t);case Zt.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(t);case Zt.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(t);case Zt.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(t);case Zt.FRAME_SESSION_UPDATE:return this.onSessionUpdate(t);case Zt.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case Zt.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(t);case Zt.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case Zt.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(t);case Zt.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(t);case Zt.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(t);case Zt.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case Zt.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(t);case Zt.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case Zt.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(t);case Zt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(t);case Zt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(t);case Zt.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onPreferSmartAccountSuccess(t);case Zt.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onPreferSmartAccountError();default:return null}})}getLoginEmailUsed(){return!!ps.get(Zt.EMAIL_LOGIN_USED_KEY)}getEmail(){return ps.get(Zt.EMAIL)}rejectRpcRequest(){this.rpcRequestResolver?.reject()}connectEmail(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,Di.checkIfAllowedToTriggerEmail(),t.w3mFrame.events.postAppEvent({type:Zt.APP_CONNECT_EMAIL,payload:e}),new Promise((r,o)=>{t.connectEmailResolver={resolve:r,reject:o}})})()}connectDevice(){var e=this;return(0,Oe.Z)(function*(){return yield e.w3mFrame.frameLoadPromise,e.w3mFrame.events.postAppEvent({type:Zt.APP_CONNECT_DEVICE}),new Promise((t,r)=>{e.connectDeviceResolver={resolve:t,reject:r}})})()}connectOtp(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_CONNECT_OTP,payload:e}),new Promise((r,o)=>{t.connectOtpResolver={resolve:r,reject:o}})})()}isConnected(){var e=this;return(0,Oe.Z)(function*(){return yield e.w3mFrame.frameLoadPromise,e.w3mFrame.events.postAppEvent({type:Zt.APP_IS_CONNECTED,payload:void 0}),new Promise((t,r)=>{e.isConnectedResolver={resolve:t,reject:r}})})()}getChainId(){var e=this;return(0,Oe.Z)(function*(){return yield e.w3mFrame.frameLoadPromise,e.w3mFrame.events.postAppEvent({type:Zt.APP_GET_CHAIN_ID}),new Promise((t,r)=>{e.getChainIdResolver={resolve:t,reject:r}})})()}updateEmail(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,Di.checkIfAllowedToTriggerEmail(),t.w3mFrame.events.postAppEvent({type:Zt.APP_UPDATE_EMAIL,payload:e}),new Promise((r,o)=>{t.updateEmailResolver={resolve:r,reject:o}})})()}updateEmailPrimaryOtp(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((r,o)=>{t.updateEmailPrimaryOtpResolver={resolve:r,reject:o}})})()}updateEmailSecondaryOtp(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((r,o)=>{t.updateEmailSecondaryOtpResolver={resolve:r,reject:o}})})()}syncTheme(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_SYNC_THEME,payload:e}),new Promise((r,o)=>{t.syncThemeResolver={resolve:r,reject:o}})})()}syncDappData(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_SYNC_DAPP_DATA,payload:e}),new Promise((r,o)=>{t.syncDappDataResolver={resolve:r,reject:o}})})()}getSmartAccountEnabledNetworks(){var e=this;return(0,Oe.Z)(function*(){return yield e.w3mFrame.frameLoadPromise,e.w3mFrame.events.postAppEvent({type:Zt.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((t,r)=>{e.smartAccountEnabledNetworksResolver={resolve:t,reject:r}})})()}setPreferredAccount(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((r,o)=>{t.setPreferredAccountResolver={resolve:r,reject:o}})})()}connect(e){var t=this;return(0,Oe.Z)(function*(){const r=e?.chainId??t.getLastUsedChainId()??1;return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_GET_USER,payload:{chainId:r,preferredAccountType:e?.preferredAccountType}}),new Promise((o,a)=>{t.connectResolver={resolve:o,reject:a}})})()}switchNetwork(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,t.w3mFrame.events.postAppEvent({type:Zt.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((r,o)=>{t.switchChainResolver={resolve:r,reject:o}})})()}disconnect(){var e=this;return(0,Oe.Z)(function*(){return yield e.w3mFrame.frameLoadPromise,e.w3mFrame.events.postAppEvent({type:Zt.APP_SIGN_OUT}),new Promise((t,r)=>{e.disconnectResolver={resolve:t,reject:r}})})()}request(e){var t=this;return(0,Oe.Z)(function*(){return yield t.w3mFrame.frameLoadPromise,Go.GET_CHAIN_ID===e.method?t.getLastUsedChainId():(t.w3mFrame.events.postAppEvent({type:Zt.APP_RPC_REQUEST,payload:e}),new Promise((r,o)=>{t.rpcRequestResolver={resolve:r,reject:o}}))})()}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(Zt.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(Zt.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Zt.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Zt.FRAME_IS_CONNECTED_ERROR&&e(),t.type===Zt.FRAME_IS_CONNECTED_SUCCESS&&!t.payload.isConnected&&e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Zt.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===Zt.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:Go.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Zt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===Zt.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){this.updateEmailPrimaryOtpResolver?.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){this.updateEmailPrimaryOtpResolver?.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),this.updateEmailSecondaryOtpResolver?.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){this.updateEmailSecondaryOtpResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),this.smartAccountEnabledNetworksResolver?.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){this.persistSmartAccountEnabledNetworks([]),this.smartAccountEnabledNetworksResolver?.reject(e.payload.message)}onPreferSmartAccountSuccess(e){this.persistPreferredAccount(e.payload.type),this.setPreferredAccountResolver?.resolve(void 0)}onPreferSmartAccountError(){this.setPreferredAccountResolver?.reject()}setNewLastEmailLoginTime(){ps.set(Zt.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){ps.set(Zt.EMAIL,e),ps.set(Zt.EMAIL_LOGIN_USED_KEY,"true"),ps.delete(Zt.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){ps.delete(Zt.EMAIL_LOGIN_USED_KEY),ps.delete(Zt.EMAIL),ps.delete(Zt.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){ps.set(Zt.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(ps.get(Zt.LAST_USED_CHAIN_KEY))}persistPreferredAccount(e){ps.set(Zt.PREFERRED_ACCOUNT_TYPE,e)}persistSmartAccountEnabledNetworks(e){ps.set(Zt.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}var Vh=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let id=class extends tt.oi{constructor(){super(),this.usubscribe=[],this.networkImages=Ae.WM.state.networkImages,this.address=Ae.AccountController.state.address,this.profileImage=Ae.AccountController.state.profileImage,this.profileName=Ae.AccountController.state.profileName,this.network=Ae.NetworkController.state.caipNetwork,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(Ae.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):Ae.IN.close()}),Ae.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.imageId??""];return tt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${On(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${$t.UiHelperUtil.getTruncateString(this.profileName?{string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}:{string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${On(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Ae.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:o})=>o===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(Ae.j1.copyToClopboard(this.address),Ae.SnackController.showSuccess("Address copied"))}catch{Ae.SnackController.showError("Failed to copy")}}emailBtnTemplate(){const e=Ae.MO.getConnectedConnector(),t=Ae.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;const r=t.provider.getEmail()??"";return tt.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=Ae.NetworkController.checkIfSmartAccountEnabled(),t=Ae.MO.getConnectedConnector();if(!Ae.ConnectorController.getEmailConnector()||"EMAIL"!==t||!e)return null;const a=Di.getPreferredAccountType()===Go.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return tt.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${a}</wui-text>
      </wui-list-item>
    `}changePreferredAccountType(){var e=this;return(0,Oe.Z)(function*(){const t=Ae.NetworkController.checkIfSmartAccountEnabled(),o=Di.getPreferredAccountType()!==Go.ACCOUNT_TYPES.SMART_ACCOUNT&&t?Go.ACCOUNT_TYPES.SMART_ACCOUNT:Go.ACCOUNT_TYPES.EOA,a=Ae.ConnectorController.getEmailConnector();a&&(e.loading=!0,yield a?.provider.setPreferredAccount(o),e.loading=!1,e.requestUpdate())})()}onGoToUpdateEmail(e){Ae.RouterController.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&Ae.RouterController.push("Networks")}onDisconnect(){var e=this;return(0,Oe.Z)(function*(){try{e.disconnecting=!0,yield Ae.ConnectionController.disconnect(),Ae.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ae.IN.close()}catch{Ae.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ae.SnackController.showError("Failed to disconnect")}finally{e.disconnecting=!1}})()}};id.styles=rie,Vh([(0,_t.SB)()],id.prototype,"address",void 0),Vh([(0,_t.SB)()],id.prototype,"profileImage",void 0),Vh([(0,_t.SB)()],id.prototype,"profileName",void 0),Vh([(0,_t.SB)()],id.prototype,"network",void 0),Vh([(0,_t.SB)()],id.prototype,"disconnecting",void 0),Vh([(0,_t.SB)()],id.prototype,"loading",void 0),id=Vh([(0,$t.customElement)("w3m-account-settings-view")],id);let IP=class extends tt.oi{render(){const e=Ae.MO.getConnectedConnector();return tt.dy`
      ${Ae.OptionsController.state.enableWalletFeatures&&"EMAIL"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return tt.dy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return tt.dy`<w3m-account-default-widget></w3m-account-default-widget>`}};IP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-account-view")],IP);var DP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Nx=class extends tt.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Ae.j1.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return tt.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?tt.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:tt.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return Ae.j1.isMobile()?tt.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Ae.RouterController.push("ConnectingWalletConnect")}};DP([(0,_t.SB)()],Nx.prototype,"search",void 0),Nx=DP([(0,$t.customElement)("w3m-all-wallets-view")],Nx);const nse=tt.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var wl=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let rc=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Ae.ph.state.selectedProvider,this.uri=Ae.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ae.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We\u2019ll notify you once your Buy is processed";return tt.dy`
      <wui-flex
        data-error=${On(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${On(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}initializeCoinbaseTransactions(){var e=this;return(0,Oe.Z)(function*(){yield e.watchCoinbaseTransactions(),e.intervalId=setInterval(()=>e.watchCoinbaseTransactions(),4e3)})()}watchCoinbaseTransactions(){var e=this;return(0,Oe.Z)(function*(){try{const t=Ae.AccountController.state.address,r=Ae.OptionsController.state.projectId;if(!t)throw new Error("No address found");(yield Ae.Lr.fetchTransactions({account:t,onramp:"coinbase",projectId:r})).data.filter(l=>new Date(l.metadata.minedAt)>new Date(e.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===l.metadata.status).length?(clearInterval(e.intervalId),Ae.RouterController.replace("OnRampActivity")):e.startTime&&Date.now()-e.startTime>=18e4&&(clearInterval(e.intervalId),e.error=!0)}catch(t){Ae.SnackController.showError(t)}})()}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,Ae.j1.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?tt.dy`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Ae.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return tt.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return Ae.SnackController.showError("No link found"),void Ae.RouterController.goBack();try{Ae.j1.copyToClopboard(this.selectedOnRampProvider.url),Ae.SnackController.showSuccess("Link copied")}catch{Ae.SnackController.showError("Failed to copy")}}};rc.styles=nse,wl([(0,_t.SB)()],rc.prototype,"selectedOnRampProvider",void 0),wl([(0,_t.SB)()],rc.prototype,"uri",void 0),wl([(0,_t.SB)()],rc.prototype,"ready",void 0),wl([(0,_t.SB)()],rc.prototype,"showRetry",void 0),wl([(0,_t.SB)()],rc.prototype,"buffering",void 0),wl([(0,_t.SB)()],rc.prototype,"error",void 0),wl([(0,_t.SB)()],rc.prototype,"intervalId",void 0),wl([(0,_t.SB)()],rc.prototype,"startTime",void 0),wl([(0,_t.Cb)({type:Boolean})],rc.prototype,"isMobile",void 0),wl([(0,_t.Cb)()],rc.prototype,"onRetry",void 0),rc=wl([(0,$t.customElement)("w3m-buy-in-progress-view")],rc);const rse=tt.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Yt={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.6"},gs={ConnectorExplorerIds:{[Yt.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Yt.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Yt.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Yt.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Yt.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Yt.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Yt.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Yt.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Yt.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Yt.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Yt.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Yt.COINBASE_CONNECTOR_ID]:"Coinbase",[Yt.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Yt.LEDGER_CONNECTOR_ID]:"Ledger",[Yt.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Yt.INJECTED_CONNECTOR_ID]:"INJECTED",[Yt.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Yt.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Yt.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},ise={getCaipTokens(n){if(!n)return;const e={};return Object.entries(n).forEach(([t,r])=>{e[`${Yt.EIP155}:${t}`]=r}),e}};var Px=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let W1=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.connectors=Ae.ConnectorController.state.connectors,this.count=Ae.ApiController.state.count,this.unsubscribe.push(Ae.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),Ae.ApiController.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Ae.j1.isMobile())return null;const e=this.connectors.find(t=>"WALLET_CONNECT"===t.type);return e?tt.dy`
      <wui-list-wallet
        imageSrc=${On(Ae.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Ae.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map(r=>tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
          data-testid=${`wallet-selector-${r.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>"WALLET_CONNECT"===o.type))return null;const{featured:t}=Ae.ApiController.state;return t.length?this.filterOutDuplicateWallets(t).map(o=>tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Ae.MO.getRecentWallets().map(t=>tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>"INJECTED"===e.type&&Ae.ConnectionController.checkInstalled()?tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null)}externalTemplate(){const e=Ae.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(Yt.CONNECTOR_RDNS_MAP[t.id])?null:tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(d=>"WALLET_CONNECT"===d.type),{allWallets:t}=Ae.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!Ae.j1.isMobile())return null;const o=this.count+Ae.ApiController.state.featured.length,a=o<10?o:10*Math.floor(o/10),l=a<o?`${a}+`:`${a}`;return tt.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(Ee=>"WALLET_CONNECT"===Ee.type))return null;const{recommended:t}=Ae.ApiController.state,{customWallets:r,featuredWalletIds:o}=Ae.OptionsController.state,{connectors:a}=Ae.ConnectorController.state,l=Ae.MO.getRecentWallets(),p=a.filter(Ee=>"INJECTED"===Ee.type).filter(Ee=>"Browser Wallet"!==Ee.name);if(o||r||!t.length)return null;const O=Math.max(0,2-(p.length+l.length));return this.filterOutDuplicateWallets(t).slice(0,O).map(Ee=>tt.dy`
        <wui-list-wallet
          imageSrc=${On(Ae.fz.getWalletImage(Ee))}
          name=${Ee?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(Ee)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?Ae.j1.isMobile()?Ae.RouterController.push("AllWallets"):Ae.RouterController.push("ConnectingWalletConnect"):Ae.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const t=Ae.MO.getRecentWallets(),r=this.connectors.map(d=>d.info?.rdns).filter(Boolean),o=t.map(d=>d.rdns).filter(Boolean),a=r.concat(o);return e.filter(d=>!a.includes(String(d?.rdns)))}onAllWallets(){Ae.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Ae.RouterController.push("AllWallets")}onConnectWallet(e){Ae.RouterController.push("ConnectingWalletConnect",{wallet:e})}};W1.styles=rse,Px([(0,_t.SB)()],W1.prototype,"connectors",void 0),Px([(0,_t.SB)()],W1.prototype,"count",void 0),W1=Px([(0,$t.customElement)("w3m-connect-view")],W1);const ose=tt.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Hh=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};class ya extends tt.oi{constructor(){super(),this.wallet=Ae.RouterController.state.data?.wallet,this.connector=Ae.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Ae.fz.getWalletImage(this.wallet)??Ae.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Ae.ConnectionController.state.wcUri,this.error=Ae.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ae.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),Ae.ConnectionController.subscribeKey("wcError",e=>this.error=e),Ae.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),tt.dy`
      <wui-flex
        data-error=${On(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${On(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?tt.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(Ae.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=Ae.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return tt.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Ae.j1.copyToClopboard(this.uri),Ae.SnackController.showSuccess("Link copied"))}catch{Ae.SnackController.showError("Failed to copy")}}}ya.styles=ose,Hh([(0,_t.SB)()],ya.prototype,"uri",void 0),Hh([(0,_t.SB)()],ya.prototype,"error",void 0),Hh([(0,_t.SB)()],ya.prototype,"ready",void 0),Hh([(0,_t.SB)()],ya.prototype,"showRetry",void 0),Hh([(0,_t.SB)()],ya.prototype,"buffering",void 0),Hh([(0,_t.Cb)({type:Boolean})],ya.prototype,"isMobile",void 0),Hh([(0,_t.Cb)()],ya.prototype,"onRetry",void 0);let TP=class extends ya{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}onConnectProxy(){var e=this;return(0,Oe.Z)(function*(){try{e.error=!1,e.connector&&(e.connector.imageUrl&&Ae.MO.setConnectedWalletImageUrl(e.connector.imageUrl),yield Ae.ConnectionController.connectExternal(e.connector),Ae.OptionsController.state.isSiweEnabled?Ae.RouterController.push("ConnectingSiwe"):Ae.IN.close(),Ae.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:e.connector.name||"Unknown"}}))}catch(t){Ae.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),e.error=!0}})()}};TP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-external-view")],TP);var kx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let p_=class extends tt.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=Ae.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Ae.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),tt.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):tt.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}initializeConnection(e=!1){var t=this;return(0,Oe.Z)(function*(){try{const{wcPairingExpiry:r}=Ae.ConnectionController.state;if(e||Ae.j1.isPairingExpired(r)){if(Ae.ConnectionController.connectWalletConnect(),t.wallet){const o=Ae.fz.getWalletImage(t.wallet);o&&Ae.MO.setConnectedWalletImageUrl(o)}else{const a=Ae.ConnectorController.state.connectors.find(d=>"WALLET_CONNECT"===d.type),l=Ae.fz.getConnectorImage(a);l&&Ae.MO.setConnectedWalletImageUrl(l)}yield Ae.ConnectionController.state.wcPromise,t.finalizeConnection(),Ae.OptionsController.state.isSiweEnabled?Ae.RouterController.push("ConnectingSiwe"):Ae.IN.close()}}catch(r){Ae.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:r?.message??"Unknown"}}),Ae.ConnectionController.setWcError(!0),Ae.j1.isAllowedRetry(t.lastRetry)&&(Ae.SnackController.showError("Declined"),t.lastRetry=Date.now(),t.initializeConnection(!0))}})()}finalizeConnection(){const{wcLinking:e,recentWallet:t}=Ae.ConnectionController.state;e&&Ae.MO.setWalletConnectDeepLink(e),t&&Ae.MO.setWeb3ModalRecent(t),Ae.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:a}=this.wallet,l=o?.map(({injected_id:He})=>He).filter(Boolean),d=a?[a]:l??[],p=d.length,y=e,O=r,H=Ae.ConnectionController.checkInstalled(d),Ee=p&&H,Ue=t&&!Ae.j1.isMobile();Ee&&this.platforms.push("browser"),y&&this.platforms.push(Ae.j1.isMobile()?"mobile":"qrcode"),O&&this.platforms.push("web"),Ue&&this.platforms.push("desktop"),!Ee&&p&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return tt.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return tt.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return tt.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return tt.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return tt.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return tt.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?tt.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}onSelectPlatform(e){var t=this;return(0,Oe.Z)(function*(){const r=t.shadowRoot?.querySelector("div");r&&(yield r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,t.platform=e,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}};kx([(0,_t.SB)()],p_.prototype,"platform",void 0),kx([(0,_t.SB)()],p_.prototype,"platforms",void 0),p_=kx([(0,$t.customElement)("w3m-connecting-wc-view")],p_);let RP=class extends tt.oi{constructor(){super(...arguments),this.wallet=Ae.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return tt.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?tt.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?tt.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?tt.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?tt.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&Ae.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&Ae.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&Ae.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&Ae.j1.openHref(this.wallet.homepage,"_blank")}};RP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-downloads-view")],RP);let OP=class extends tt.oi{render(){return tt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Ae.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=Ae.ApiController.state,{customWallets:r}=Ae.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map(a=>tt.dy`
        <wui-list-wallet
          name=${a.name??"Unknown"}
          tagVariant="main"
          imageSrc=${On(Ae.fz.getWalletImage(a))}
          @click=${()=>{Ae.j1.openHref(a.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};OP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-get-wallet-view")],OP);const use=tt.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Lx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Z1=class extends tt.oi{constructor(){super(),this.network=Ae.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return tt.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${On(Ae.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:tt.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onSwitchNetwork(){var e=this;return(0,Oe.Z)(function*(){try{e.error=!1,e.network&&(yield Ae.NetworkController.switchActiveNetwork(e.network),Ae.OptionsController.state.isSiweEnabled||Ae._4.navigateAfterNetworkSwitch())}catch{e.error=!0}})()}};Z1.styles=use,Lx([(0,_t.SB)()],Z1.prototype,"showRetry",void 0),Lx([(0,_t.SB)()],Z1.prototype,"error",void 0),Z1=Lx([(0,$t.customElement)("w3m-network-switch-view")],Z1);const dse=tt.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var MP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let g_=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ae.NetworkController.state.caipNetwork,this.unsubscribe.push(Ae.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Ae.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Ae.RouterController.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=Ae.NetworkController.state;return Ae.j1.sortRequestedNetworks(e,t)?.map(a=>tt.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===a.id}
          imageSrc=${On(Ae.fz.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!r&&!e?.includes(a.id)}
          data-testid=${`w3m-network-switch-${a.name??a.id}`}
        ></wui-card-select>
      `)}onSwitchNetwork(e){return(0,Oe.Z)(function*(){const{isConnected:t}=Ae.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:a}=Ae.NetworkController.state,{data:l}=Ae.RouterController.state;t&&a?.id!==e.id?r?.includes(e.id)?(yield Ae.NetworkController.switchActiveNetwork(e),Ae._4.navigateAfterNetworkSwitch()):o&&Ae.RouterController.push("SwitchNetwork",{...l,network:e}):t||(Ae.NetworkController.setCaipNetwork(e),Ae.RouterController.push("Connect"))})()}};g_.styles=dse,MP([(0,_t.SB)()],g_.prototype,"caipNetwork",void 0),g_=MP([(0,$t.customElement)("w3m-networks-view")],g_);var Cf=I(9776);const fse=tt.iv`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var G1=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let zh=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Ae.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Ae.sl.state.coinbaseTransactions,this.tokenImages=Ae.WM.state.tokenImages,this.unsubscribe.push(Ae.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),Ae.WM.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},Ae.sl.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),Ae.sl.clearCursor(),this.fetchTransactions()}render(){return tt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(t=>{const r=Cf.Em.formatDate(t?.metadata?.minedAt),o=t.transfers[0],a=o?.fungible_info;if(!a)return null;const l=a?.icon?.url||this.tokenImages?.[a.symbol||""];return tt.dy`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===t.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===t.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===t.metadata.status}
          purchaseCurrency=${On(a.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${r}
          icon=${On(l)}
          symbol=${On(a.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const r=parseInt(t,10);return new Array(12).fill(null).map((a,l)=>l).reverse().map(a=>{const l=$t.TransactionUtil.getTransactionGroupTitle(r,a),d=this.coinbaseTransactions[r]?.[a];return d?tt.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${l}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(d)}
            </wui-flex>
          </wui-flex>
        `:null})})}fetchTransactions(){var e=this;return(0,Oe.Z)(function*(){yield e.fetchCoinbaseTransactions()})()}fetchCoinbaseTransactions(){var e=this;return(0,Oe.Z)(function*(){const t=Ae.AccountController.state.address,r=Ae.OptionsController.state.projectId;if(!t)throw new Error("No address found");if(!r)throw new Error("No projectId found");e.loading=!0,yield Ae.sl.fetchTransactions(t,"coinbase"),e.loading=!1,e.refetchLoadingTransactions()})()}refetchLoadingTransactions(){var e=this;const t=new Date;0!==(this.coinbaseTransactions[t.getFullYear()]?.[t.getMonth()]||[]).filter(a=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===a.metadata.status).length?this.refetchTimeout=setTimeout((0,Oe.Z)(function*(){const a=Ae.AccountController.state.address;yield Ae.sl.fetchTransactions(a,"coinbase"),e.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(tt.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};zh.styles=fse,G1([(0,_t.SB)()],zh.prototype,"selectedOnRampProvider",void 0),G1([(0,_t.SB)()],zh.prototype,"loading",void 0),G1([(0,_t.SB)()],zh.prototype,"coinbaseTransactions",void 0),G1([(0,_t.SB)()],zh.prototype,"tokenImages",void 0),zh=G1([(0,$t.customElement)("w3m-onramp-activity-view")],zh);const pse=tt.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var m_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Q0=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ae.ph.state.paymentCurrency,this.currencies=Ae.ph.state.paymentCurrencies,this.currencyImages=Ae.WM.state.currencyImages,this.unsubscribe.push(Ae.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),Ae.WM.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>tt.dy`
        <wui-list-item
          imageSrc=${On(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(Ae.ph.setPaymentCurrency(e),Ae.IN.close())}};Q0.styles=pse,m_([(0,_t.SB)()],Q0.prototype,"selectedCurrency",void 0),m_([(0,_t.SB)()],Q0.prototype,"currencies",void 0),m_([(0,_t.SB)()],Q0.prototype,"currencyImages",void 0),Q0=m_([(0,$t.customElement)("w3m-onramp-fiat-select-view")],Q0);var NP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Bx=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.providers=Ae.ph.state.providers,this.unsubscribe.push(Ae.ph.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){var e=this;const t=this.providers.map(function(){var r=(0,Oe.Z)(function*(o){return"coinbase"===o.name?yield e.getCoinbaseOnRampURL():Promise.resolve(o?.url)});return function(o){return r.apply(this,arguments)}}());Promise.all(t).then(r=>{this.providers=this.providers.map((o,a)=>({...o,url:r[a]||""}))})}render(){return tt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>tt.dy`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){Ae.ph.setSelectedProvider(e),Ae.RouterController.push("BuyInProgress"),Ae.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}getCoinbaseOnRampURL(){return(0,Oe.Z)(function*(){const e=Ae.AccountController.state.address,t=Ae.NetworkController.state.caipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const r=Ae.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??Ae.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=Ae.ph.state.purchaseCurrency,a=o?[o.symbol]:Ae.ph.state.purchaseCurrencies.map(l=>l.symbol);return yield Ae.Lr.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:Ae.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:a}],partnerUserId:e,purchaseAmount:Ae.ph.state.purchaseAmount})})()}};NP([(0,_t.SB)()],Bx.prototype,"providers",void 0),Bx=NP([(0,$t.customElement)("w3m-onramp-providers-view")],Bx);const gse=tt.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var y_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let X0=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Ae.ph.state.purchaseCurrencies,this.tokens=Ae.ph.state.purchaseCurrencies,this.tokenImages=Ae.WM.state.tokenImages,this.unsubscribe.push(Ae.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),Ae.WM.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>tt.dy`
        <wui-list-item
          imageSrc=${On(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(Ae.ph.setPurchaseCurrency(e),Ae.IN.close())}};X0.styles=gse,y_([(0,_t.SB)()],X0.prototype,"selectedCurrency",void 0),y_([(0,_t.SB)()],X0.prototype,"tokens",void 0),y_([(0,_t.SB)()],X0.prototype,"tokenImages",void 0),X0=y_([(0,$t.customElement)("w3m-onramp-token-select-view")],X0);const mse=tt.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let Fx=class extends tt.oi{render(){return tt.dy`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};Fx.styles=mse,Fx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-transactions-view")],Fx);const wse=[{images:["network","layers","system"],title:"The system\u2019s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let PP=class extends tt.oi{render(){return tt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${wse}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Ae.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};PP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-what-is-a-network-view")],PP);const _se=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let kP=class extends tt.oi{render(){return tt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${_se}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Ae.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Ae.RouterController.push("GetWallet")}};kP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-what-is-a-wallet-view")],kP);let LP=class extends tt.oi{render(){return tt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${Ae.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};LP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-what-is-a-buy-view")],LP);const Cse=tt.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var v_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let od=class extends tt.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=Di.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=Ae.RouterController.state.data?.email,this.emailConnector=Ae.ConnectorController.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return tt.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?tt.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:tt.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?tt.dy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Di.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Di.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}onOtpInputChange(e){var t=this;return(0,Oe.Z)(function*(){try{t.loading||(t.otp=e.detail,t.emailConnector&&6===t.otp.length&&(t.loading=!0,yield t.onOtpSubmit?.(t.otp)))}catch(r){t.error=Ae.j1.parseError(r),t.loading=!1}})()}onResendCode(){var e=this;return(0,Oe.Z)(function*(){try{if(e.onOtpResend){if(!e.loading&&!e.timeoutTimeLeft){if(e.error="",e.otp="",!Ae.ConnectorController.getEmailConnector()||!e.email)throw new Error("w3m-email-otp-widget: Unable to resend email");e.loading=!0,yield e.onOtpResend(e.email),e.startOTPTimeout(),Ae.SnackController.showSuccess("Code email resent")}}else e.onStartOver&&e.onStartOver()}catch(t){Ae.SnackController.showError(t)}finally{e.loading=!1}})()}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}};od.styles=Cse,v_([(0,_t.SB)()],od.prototype,"loading",void 0),v_([(0,_t.SB)()],od.prototype,"timeoutTimeLeft",void 0),v_([(0,_t.SB)()],od.prototype,"error",void 0),od=v_([(0,$t.customElement)("w3m-email-otp-widget")],od);var BP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Ux=class extends od{constructor(){var e;super(),e=this,this.unsubscribe=[],this.smartAccountDeployed=Ae.AccountController.state.smartAccountDeployed,this.onOtpSubmit=function(){var t=(0,Oe.Z)(function*(r){try{if(e.emailConnector){const o=Ae.NetworkController.checkIfSmartAccountEnabled();yield e.emailConnector.provider.connectOtp({otp:r}),Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),yield Ae.ConnectionController.connectExternal(e.emailConnector),Ae.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:e.emailConnector.name||"Unknown"}}),o&&!e.smartAccountDeployed?Ae.RouterController.push("UpgradeToSmartAccount"):Ae.IN.close()}}catch(o){throw Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),o}});return function(r){return t.apply(this,arguments)}}(),this.onOtpResend=function(){var t=(0,Oe.Z)(function*(r){e.emailConnector&&(yield e.emailConnector.provider.connectEmail({email:r}),Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))});return function(r){return t.apply(this,arguments)}}(),this.unsubscribe.push(Ae.AccountController.subscribeKey("smartAccountDeployed",t=>{this.smartAccountDeployed=t}))}};BP([(0,_t.SB)()],Ux.prototype,"smartAccountDeployed",void 0),Ux=BP([(0,$t.customElement)("w3m-email-verify-otp-view")],Ux);const Ase=tt.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var FP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let w_=class extends tt.oi{constructor(){super(),this.email=Ae.RouterController.state.data?.email,this.emailConnector=Ae.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return tt.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}listenForDeviceApproval(){var e=this;return(0,Oe.Z)(function*(){if(e.emailConnector)try{yield e.emailConnector.provider.connectDevice(),Ae.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Ae.RouterController.replace("EmailVerifyOtp",{email:e.email})}catch{Ae.RouterController.goBack()}})()}onResendCode(){var e=this;return(0,Oe.Z)(function*(){try{if(!e.loading){if(!e.emailConnector||!e.email)throw new Error("w3m-email-login-widget: Unable to resend email");e.loading=!0,yield e.emailConnector.provider.connectEmail({email:e.email}),e.listenForDeviceApproval(),Ae.SnackController.showSuccess("Code email resent")}}catch(t){Ae.SnackController.showError(t)}finally{e.loading=!1}})()}};w_.styles=Ase,FP([(0,_t.SB)()],w_.prototype,"loading",void 0),w_=FP([(0,$t.customElement)("w3m-email-verify-device-view")],w_);const Sse=tt.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var UP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let b_=class extends tt.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ae.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){var e=this;return(0,Oe.Z)(function*(){yield e.syncTheme(),e.iframe.style.display="block";const r=e.renderRoot.querySelector("div");e.bodyObserver=new ResizeObserver(()=>{const a=r?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};e.iframe.style.width="360px",e.iframe.style.height=a.height-10+"px",e.iframe.style.left="calc(50% - 180px)",e.iframe.style.top=`${a.top+5}px`,e.ready=!0}),e.bodyObserver.observe(window.document.body)})()}render(){return this.ready&&this.onShowIframe(),tt.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}onHideIframe(){var e=this;return(0,Oe.Z)(function*(){yield e.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,e.iframe.style.display="none"})()}syncTheme(){return(0,Oe.Z)(function*(){const e=Ae.ConnectorController.getEmailConnector();e&&(yield e.provider.syncTheme({themeVariables:Ae.ThemeController.getSnapshot().themeVariables}))})()}};b_.styles=Sse,UP([(0,_t.SB)()],b_.prototype,"ready",void 0),b_=UP([(0,$t.customElement)("w3m-approve-transaction-view")],b_);let $P=class extends tt.oi{render(){return tt.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Ae.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${Ae.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};$P=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-upgrade-wallet-view")],$P);var $x=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let __=class extends tt.oi{constructor(){var e;super(...arguments),e=this,this.emailConnector=Ae.ConnectorController.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=(0,Oe.Z)(function*(){if(e.emailConnector)try{e.loading=!0,yield e.emailConnector.provider.setPreferredAccount(Go.ACCOUNT_TYPES.SMART_ACCOUNT),yield e.emailConnector.provider.connect({preferredAccountType:Go.ACCOUNT_TYPES.SMART_ACCOUNT}),e.loading=!1,Ae.RouterController.push("Account")}catch{Ae.SnackController.showError("Error upgrading to smart account")}})}render(){return tt.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return tt.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return tt.dy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){Ae.RouterController.push("Account")}};$x([(0,_t.SB)()],__.prototype,"emailConnector",void 0),$x([(0,_t.SB)()],__.prototype,"loading",void 0),__=$x([(0,$t.customElement)("w3m-upgrade-to-smart-account-view")],__);class Nse{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const q1=(n,e)=>{const t=n._$AN;if(void 0===t)return!1;for(const r of t)r._$AO?.(e,!1),q1(r,e);return!0},E_=n=>{let e,t;do{if(void 0===(e=n._$AM))break;t=e._$AN,t.delete(n),n=e}while(0===t?.size)},VP=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(void 0===t)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),Lse(e)}};function Pse(n){void 0!==this._$AN?(E_(this),this._$AM=n,VP(this)):this._$AM=n}function kse(n,e=!1,t=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(r))for(let a=t;a<r.length;a++)q1(r[a],!1),E_(r[a]);else null!=r&&(q1(r,!1),E_(r));else q1(this,n)}const Lse=n=>{2==n.type&&(n._$AP??=kse,n._$AQ??=Pse)};class Bse extends Nse{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),VP(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(q1(this,e),E_(this))}setValue(e){if((n=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const C_=()=>new Fse;class Fse{}const jx=new WeakMap,x_=(n=>(...e)=>({_$litDirective$:n,values:e}))(class extends Bse{render(n){return t_.Ld}update(n,[e]){const t=e!==this.Y;return t&&void 0!==this.Y&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=n.options?.host,this.rt(this.ct=n.element)),t_.Ld}rt(n){if("function"==typeof this.Y){const e=this.ht??globalThis;let t=jx.get(e);void 0===t&&(t=new WeakMap,jx.set(e,t)),void 0!==t.get(this.Y)&&this.Y.call(this.ht,void 0),t.set(this.Y,n),void 0!==n&&this.Y.call(this.ht,n)}else this.Y.value=n}get lt(){return"function"==typeof this.Y?jx.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Use=tt.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Vx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let K1=class extends tt.oi{constructor(){super(...arguments),this.formRef=C_(),this.initialEmail=Ae.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return tt.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${x_(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${Ae.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}onSubmitEmail(e){var t=this;return(0,Oe.Z)(function*(){try{if(t.loading)return;t.loading=!0,e.preventDefault();const r=Ae.ConnectorController.getEmailConnector();if(!r)throw new Error("w3m-update-email-wallet: Email connector not found");yield r.provider.updateEmail({email:t.email}),Ae.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),Ae.RouterController.replace("UpdateEmailPrimaryOtp",{email:t.initialEmail,newEmail:t.email})}catch(r){Ae.SnackController.showError(r),t.loading=!1}})()}};K1.styles=Use,Vx([(0,_t.SB)()],K1.prototype,"email",void 0),Vx([(0,_t.SB)()],K1.prototype,"loading",void 0),K1=Vx([(0,$t.customElement)("w3m-update-email-wallet-view")],K1);let HP=class extends od{constructor(){var e;super(),e=this,this.email=Ae.RouterController.state.data?.email,this.onOtpSubmit=function(){var t=(0,Oe.Z)(function*(r){try{e.emailConnector&&(yield e.emailConnector.provider.updateEmailPrimaryOtp({otp:r}),Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),Ae.RouterController.replace("UpdateEmailSecondaryOtp",Ae.RouterController.state.data))}catch(o){throw Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),o}});return function(r){return t.apply(this,arguments)}}(),this.onStartOver=()=>{Ae.RouterController.replace("UpdateEmailWallet",Ae.RouterController.state.data)}}};HP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-update-email-primary-otp-view")],HP);let zP=class extends od{constructor(){var e;super(),e=this,this.email=Ae.RouterController.state.data?.newEmail,this.onOtpSubmit=function(){var t=(0,Oe.Z)(function*(r){try{e.emailConnector&&(yield e.emailConnector.provider.updateEmailSecondaryOtp({otp:r}),Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),Ae.RouterController.reset("Account"))}catch(o){throw Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),o}});return function(r){return t.apply(this,arguments)}}(),this.onStartOver=()=>{Ae.RouterController.replace("UpdateEmailWallet",Ae.RouterController.state.data)}}};zP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-update-email-secondary-otp-view")],zP);const Vse=tt.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var WP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let A_=class extends tt.oi{constructor(){super(...arguments),this.disconecting=!1}render(){return tt.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=Ae.NetworkController.state;return Ae.j1.sortRequestedNetworks(e,t).map(o=>tt.dy`
        <wui-list-network
          imageSrc=${On(Ae.fz.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}onDisconnect(){var e=this;return(0,Oe.Z)(function*(){try{e.disconecting=!0,yield Ae.ConnectionController.disconnect(),Ae.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ae.IN.close()}catch{Ae.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ae.SnackController.showError("Failed to disconnect")}finally{e.disconecting=!1}})()}onSwitchNetwork(e){return(0,Oe.Z)(function*(){const{isConnected:t}=Ae.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:a}=Ae.NetworkController.state,{data:l}=Ae.RouterController.state;t&&a?.id!==e.id?r?.includes(e.id)?(yield Ae.NetworkController.switchActiveNetwork(e),Ae._4.navigateAfterNetworkSwitch()):o&&Ae.RouterController.push("SwitchNetwork",{...l,network:e}):t||(Ae.NetworkController.setCaipNetwork(e),Ae.RouterController.push("Connect"))})()}};A_.styles=Vse,WP([(0,_t.SB)()],A_.prototype,"disconecting",void 0),A_=WP([(0,$t.customElement)("w3m-unsupported-chain-view")],A_);const Hse=tt.iv`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var S_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let eg=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.address=Ae.AccountController.state.address,this.profileName=Ae.AccountController.state.profileName,this.network=Ae.NetworkController.state.caipNetwork,this.unsubscribe.push(Ae.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):Ae.SnackController.showError("Account not found")}),Ae.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=Ae.fz.getNetworkImage(this.network);return tt.dy` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${$t.UiHelperUtil.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${Ae.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=Ae.NetworkController.getRequestedCaipNetworks(),t=Ae.NetworkController.checkIfSmartAccountEnabled(),r=Ae.NetworkController.state.caipNetwork;if(Di.getPreferredAccountType()===Go.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?tt.dy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[Ae.fz.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const l=(e?.filter(d=>d?.imageId)?.slice(0,5)).map(Ae.fz.getNetworkImage).filter(Boolean);return tt.dy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${l}
    ></wui-compatible-network>`}onReceiveClick(){Ae.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(Ae.j1.copyToClopboard(this.address),Ae.SnackController.showSuccess("Address copied"))}catch{Ae.SnackController.showError("Failed to copy")}}};eg.styles=Hse,S_([(0,_t.SB)()],eg.prototype,"address",void 0),S_([(0,_t.SB)()],eg.prototype,"profileName",void 0),S_([(0,_t.SB)()],eg.prototype,"network",void 0),eg=S_([(0,$t.customElement)("w3m-wallet-receive-view")],eg);const zse=tt.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let Hx=class extends tt.oi{render(){return tt.dy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:r}=Ae.NetworkController.state,o=Ae.NetworkController.checkIfSmartAccountEnabled(),a=Di.getPreferredAccountType();let l=Ae.j1.sortRequestedNetworks(e,t);if(o&&a===Go.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;l=[r]}return l.map(d=>tt.dy`
        <wui-list-network
          imageSrc=${On(Ae.fz.getNetworkImage(d))}
          name=${d.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Hx.styles=zse,Hx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-wallet-compatible-networks-view")],Hx);const Zse=tt.iv`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var Y1=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Wh=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.token=Ae.Si.state.token,this.sendTokenAmount=Ae.Si.state.sendTokenAmount,this.receiverAddress=Ae.Si.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(Ae.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),tt.dy` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){Ae.RouterController.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!Ae.j1.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};Wh.styles=Zse,Y1([(0,_t.SB)()],Wh.prototype,"token",void 0),Y1([(0,_t.SB)()],Wh.prototype,"sendTokenAmount",void 0),Y1([(0,_t.SB)()],Wh.prototype,"receiverAddress",void 0),Y1([(0,_t.SB)()],Wh.prototype,"message",void 0),Wh=Y1([(0,$t.customElement)("w3m-wallet-send-view")],Wh);const Gse=tt.iv`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var I_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let tg=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=Ae.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=Ae.j1.debounce(e=>{this.search=e}),this.unsubscribe.push(Ae.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return tt.dy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.search?this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.tokenBalance,tt.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(e=>tt.dy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):tt.dy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){Ae.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){Ae.Si.setToken(e),Ae.Si.setTokenAmount(void 0),Ae.RouterController.goBack()}};tg.styles=Gse,I_([(0,_t.SB)()],tg.prototype,"tokenBalance",void 0),I_([(0,_t.SB)()],tg.prototype,"tokens",void 0),I_([(0,_t.SB)()],tg.prototype,"search",void 0),tg=I_([(0,$t.customElement)("w3m-wallet-send-select-token-view")],tg);const qse=tt.iv`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var J1=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Zh=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.token=Ae.Si.state.token,this.sendTokenAmount=Ae.Si.state.sendTokenAmount,this.receiverAddress=Ae.Si.state.receiverAddress,this.caipNetwork=Ae.NetworkController.state.caipNetwork,this.unsubscribe.push(Ae.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),Ae.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number(this.token?.quantity.numeric).toFixed(2)} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${$t.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){return this.token&&this.sendTokenAmount?tt.dy`<wui-text variant="paragraph-400" color="fg-100"
        >$${(this.token.price*this.sendTokenAmount).toFixed(2)}</wui-text
      >`:null}onSendClick(){Ae.RouterController.reset("Account"),setTimeout(()=>{Ae.Si.resetSend()},200)}onCancelClick(){Ae.RouterController.goBack()}};Zh.styles=qse,J1([(0,_t.SB)()],Zh.prototype,"token",void 0),J1([(0,_t.SB)()],Zh.prototype,"sendTokenAmount",void 0),J1([(0,_t.SB)()],Zh.prototype,"receiverAddress",void 0),J1([(0,_t.SB)()],Zh.prototype,"caipNetwork",void 0),Zh=J1([(0,$t.customElement)("w3m-wallet-send-preview-view")],Zh);const Kse=tt.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function ZP(n){const{connectors:e}=Ae.ConnectorController.state,t=e.filter(a=>"ANNOUNCED"===a.type).reduce((a,l)=>(l.info?.rdns&&(a[l.info.rdns]=!0),a),{});return n.map(a=>({...a,installed:!!a.rdns&&!!t[a.rdns??""]})).sort((a,l)=>Number(l.installed)-Number(a.installed))}var Q1=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};const GP="local-paginator";let Gh=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ae.ApiController.state.wallets.length,this.wallets=Ae.ApiController.state.wallets,this.recommended=Ae.ApiController.state.recommended,this.featured=Ae.ApiController.state.featured,this.unsubscribe.push(Ae.ApiController.subscribeKey("wallets",e=>this.wallets=e),Ae.ApiController.subscribeKey("recommended",e=>this.recommended=e),Ae.ApiController.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return tt.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}initialFetch(){var e=this;return(0,Oe.Z)(function*(){const t=e.shadowRoot?.querySelector("wui-grid");e.initial&&t&&(yield Ae.ApiController.fetchWallets({page:1}),yield t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,e.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}shimmerTemplate(e,t){return[...Array(e)].map(()=>tt.dy`
        <wui-card-select-loader type="wallet" id=${On(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return ZP([...this.featured,...this.recommended,...this.wallets]).map(r=>tt.dy`
        <wui-card-select
          imageSrc=${On(Ae.fz.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
          .installed=${r.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:o}=Ae.ApiController.state,a=window.innerWidth<352?3:4,l=e.length+t.length;let p=Math.ceil(l/a)*a-l+a;return p-=e.length?r.length%a:0,0===o&&r.length>0?null:0===o||[...r,...e,...t].length<o?this.shimmerTemplate(p,GP):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${GP}`);e&&(this.paginationObserver=new IntersectionObserver(([t])=>{if(t?.isIntersecting&&!this.initial){const{page:r,count:o,wallets:a}=Ae.ApiController.state;a.length<o&&Ae.ApiController.fetchWallets({page:r+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=Ae.ConnectorController.getConnector(e.id,e.rdns);t?Ae.RouterController.push("ConnectingExternal",{connector:t}):Ae.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Gh.styles=Kse,Q1([(0,_t.SB)()],Gh.prototype,"initial",void 0),Q1([(0,_t.SB)()],Gh.prototype,"wallets",void 0),Q1([(0,_t.SB)()],Gh.prototype,"recommended",void 0),Q1([(0,_t.SB)()],Gh.prototype,"featured",void 0),Gh=Q1([(0,$t.customElement)("w3m-all-wallets-list")],Gh);const Yse=tt.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var zx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let X1=class extends tt.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?tt.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}onSearch(){var e=this;return(0,Oe.Z)(function*(){e.query!==e.prevQuery&&(e.prevQuery=e.query,e.loading=!0,yield Ae.ApiController.searchWallet({search:e.query}),e.loading=!1)})()}walletsTemplate(){const{search:e}=Ae.ApiController.state,t=ZP(e);return e.length?tt.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(r=>tt.dy`
            <wui-card-select
              imageSrc=${On(Ae.fz.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
              .installed=${r.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:tt.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=Ae.ConnectorController.getConnector(e.id,e.rdns);t?Ae.RouterController.push("ConnectingExternal",{connector:t}):Ae.RouterController.push("ConnectingWalletConnect",{wallet:e})}};X1.styles=Yse,zx([(0,_t.SB)()],X1.prototype,"loading",void 0),zx([(0,_t.Cb)()],X1.prototype,"query",void 0),X1=zx([(0,$t.customElement)("w3m-all-wallets-search")],X1);var D_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let ey=class extends tt.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ae.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return tt.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};D_([(0,_t.Cb)({type:Array})],ey.prototype,"platforms",void 0),D_([(0,_t.Cb)()],ey.prototype,"onSelectPlatfrom",void 0),D_([(0,_t.SB)()],ey.prototype,"buffering",void 0),ey=D_([(0,$t.customElement)("w3m-connecting-header")],ey);let qP=class extends ya{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}onConnectProxy(){var e=this;return(0,Oe.Z)(function*(){try{e.error=!1;const{connectors:t}=Ae.ConnectorController.state,r=t.find(a=>"ANNOUNCED"===a.type&&a.info?.rdns===e.wallet?.rdns),o=t.find(a=>"INJECTED"===a.type);r?yield Ae.ConnectionController.connectExternal(r):o&&(yield Ae.ConnectionController.connectExternal(o)),Ae.IN.close(),Ae.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:e.wallet?.name||"Unknown"}})}catch(t){Ae.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),e.error=!0}})()}};qP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-wc-browser")],qP);let KP=class extends ya{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:o}=Ae.j1.formatNativeUrl(e,this.uri);Ae.ConnectionController.setWcLinking({name:t,href:o}),Ae.ConnectionController.setRecentWallet(this.wallet),Ae.j1.openHref(r,"_blank")}catch{this.error=!0}}};KP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-wc-desktop")],KP);let YP=class extends ya{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:o}=Ae.j1.formatNativeUrl(e,this.uri);Ae.ConnectionController.setWcLinking({name:t,href:o}),Ae.ConnectionController.setRecentWallet(this.wallet),Ae.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=Ae.j1.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(Ae.ConnectionController.setBuffering(!0),setTimeout(()=>{Ae.ConnectionController.setBuffering(!1)},5e3))}};YP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-wc-mobile")],YP);const eae=tt.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let Wx=class extends ya{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),tt.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Ae.ConnectionController.setWcLinking(void 0),Ae.ConnectionController.setRecentWallet(this.wallet),tt.dy` <wui-qr-code
      size=${e}
      theme=${Ae.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${On(Ae.fz.getWalletImage(this.wallet))}
      alt=${On(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){return tt.dy`<wui-link
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Wx.styles=eae,Wx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-wc-qrcode")],Wx);let JP=class extends tt.oi{constructor(){if(super(),this.wallet=Ae.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return tt.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${On(Ae.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};JP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-wc-unsupported")],JP);let QP=class extends ya{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Ae.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:o}=Ae.j1.formatUniversalUrl(e,this.uri);Ae.ConnectionController.setWcLinking({name:t,href:o}),Ae.ConnectionController.setRecentWallet(this.wallet),Ae.j1.openHref(r,"_blank")}catch{this.error=!0}}};QP=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-connecting-wc-web")],QP);const iae=tt.iv`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-gray-glass-002);
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var ou=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let kc=class extends tt.oi{constructor(){super(...arguments),this.detailsOpen=!1,this.slippageRate=.5}render(){return tt.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${$t.UiHelperUtil.formatNumberToLocalString(this.toTokenConvertedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${$t.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?tt.dy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Network cost</wui-text>
                      <wui-text variant="small-400" color="fg-100">
                        $${$t.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?tt.dy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Price impact</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${$t.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?tt.dy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Max. slippage</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${$t.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.sourceTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Provider fee</wui-text>
                      <wui-flex alignItems="center" justifyContent="center" class="free-badge">
                        <wui-text variant="micro-700" color="success-100">Free</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};kc.styles=[iae],ou([(0,_t.Cb)()],kc.prototype,"detailsOpen",void 0),ou([(0,_t.Cb)()],kc.prototype,"sourceTokenSymbol",void 0),ou([(0,_t.Cb)()],kc.prototype,"sourceTokenPrice",void 0),ou([(0,_t.Cb)()],kc.prototype,"toTokenSymbol",void 0),ou([(0,_t.Cb)()],kc.prototype,"toTokenConvertedAmount",void 0),ou([(0,_t.Cb)()],kc.prototype,"gasPriceInUSD",void 0),ou([(0,_t.Cb)()],kc.prototype,"priceImpact",void 0),ou([(0,_t.Cb)()],kc.prototype,"slippageRate",void 0),ou([(0,_t.Cb)()],kc.prototype,"maxSlippage",void 0),kc=ou([(0,$t.customElement)("w3m-convert-details")],kc);const oae=tt.iv`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-gray-glass-005);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-gray-glass-002);
  }

  :host wui-flex.focus .input_mask__border {
    fill: var(--wui-gray-glass-020);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-200);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .token-select-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-select-button:hover {
    background: var(--wui-gray-glass-005);
  }

  .token-select-button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-gray-glass-020);
  }

  .market-value {
    min-height: 18px;
  }
`;var bl=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let ic=class extends tt.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.marketValue="$1.0345,00",this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=Cf.C6.bigNumber(this.marketValue||"0").isGreaterThan(0);return tt.dy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        ${"sourceToken"===this.target?$t.convertInputMaskTopSvg:$t.convertInputMaskBottomSvg}
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${this.marketValue}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){const r=","===e.key,o="."===e.key,l=this.value;!(e.key>="0"&&e.key<="9")&&!["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"].includes(e.key)&&!o&&!r&&e.preventDefault(),(r||o)&&(l?.includes(".")||l?.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value;","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){if(!this.token)return tt.dy` <wui-button
        class="swap-token-button"
        size="md"
        variant="accentBg"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;const e=this.token.logoURI?tt.dy`<wui-image src=${this.token.logoURI}></wui-image>`:tt.dy`
          <wui-icon-box
            size="sm"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="networkPlaceholder"
          ></wui-icon-box>
        `;return tt.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <button
          size="sm"
          variant="shade"
          class="token-select-button"
          @click=${this.onSelectToken.bind(this)}
        >
          ${e}
          <wui-text variant="paragraph-600" color="fg-100">${this.token.symbol}</wui-text>
        </button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const e=Cf.C6.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return tt.dy`
      ${t?tt.dy`<wui-text variant="small-400" color="fg-200">
            ${$t.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?tt.dy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:tt.dy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){Ae.Xs.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"})}onBuyToken(){Ae.RouterController.push("OnRampProviders")}};ic.styles=[oae],bl([(0,_t.Cb)()],ic.prototype,"focused",void 0),bl([(0,_t.Cb)()],ic.prototype,"balance",void 0),bl([(0,_t.Cb)()],ic.prototype,"value",void 0),bl([(0,_t.Cb)()],ic.prototype,"price",void 0),bl([(0,_t.Cb)()],ic.prototype,"marketValue",void 0),bl([(0,_t.Cb)()],ic.prototype,"disabled",void 0),bl([(0,_t.Cb)()],ic.prototype,"target",void 0),bl([(0,_t.Cb)()],ic.prototype,"token",void 0),bl([(0,_t.Cb)()],ic.prototype,"onSetAmount",void 0),bl([(0,_t.Cb)()],ic.prototype,"onSetMaxValue",void 0),ic=bl([(0,$t.customElement)("w3m-convert-input")],ic);const aae=tt.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var T_=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};function XP(){const n=Ae.RouterController.state.data?.connector?.name,e=Ae.RouterController.state.data?.wallet?.name,t=Ae.RouterController.state.data?.network?.name,r=e??n,o=Ae.ConnectorController.getConnectors();return{Connect:`Connect ${1===o.length&&"w3m-email"===o[0]?.id?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let ng=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.heading=XP()[Ae.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Ae.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Ae.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Ae.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),Ae.RouterController.push("WhatIsAWallet")}onClose(){return(0,Oe.Z)(function*(){if(Ae.OptionsController.state.isSiweEnabled){const{SIWEController:e}=yield I.e(632).then(I.bind(I,4632));"success"!==e.state.status&&(yield Ae.ConnectionController.disconnect())}Ae.IN.close()})()}titleTemplate(){return tt.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=Ae.RouterController.state,t="Connect"===e;return this.showBack&&"ApproveTransaction"!==e&&"UpgradeToSmartAccount"!==e?tt.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:tt.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?tt.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}onViewChange(e){var t=this;return(0,Oe.Z)(function*(){const r=t.shadowRoot?.querySelector("wui-text");if(r){const o=XP()[e];yield r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,t.heading=o,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}})()}onHistoryChange(){var e=this;return(0,Oe.Z)(function*(){const{history:t}=Ae.RouterController.state,r=e.shadowRoot?.querySelector("#dynamic");t.length>1&&!e.showBack&&r?(yield r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,e.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&e.showBack&&r&&(yield r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,e.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}onGoBack(){"ConnectingSiwe"===Ae.RouterController.state.view?Ae.RouterController.push("Connect"):Ae.RouterController.goBack()}};ng.styles=[aae],T_([(0,_t.SB)()],ng.prototype,"heading",void 0),T_([(0,_t.SB)()],ng.prototype,"buffering",void 0),T_([(0,_t.SB)()],ng.prototype,"showBack",void 0),ng=T_([(0,$t.customElement)("w3m-header")],ng);var ek=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Zx=class extends tt.oi{constructor(){super(...arguments),this.data=[]}render(){return tt.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>tt.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>tt.dy`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ek([(0,_t.Cb)({type:Array})],Zx.prototype,"data",void 0),Zx=ek([(0,$t.customElement)("w3m-help-widget")],Zx);const cae=tt.iv`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var qh=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let sd=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=Ae.WM.state.currencyImages,this.tokenImages=Ae.WM.state.tokenImages,this.unsubscribe.push(Ae.ph.subscribeKey("purchaseCurrency",e=>{!e||"Fiat"===this.type||(this.selectedCurrency=this.formatPurchaseCurrency(e))}),Ae.ph.subscribeKey("paymentCurrency",e=>{!e||"Token"===this.type||(this.selectedCurrency=this.formatPaymentCurrency(e))}),Ae.ph.subscribe(e=>{this.currencies="Fiat"===this.type?e.purchaseCurrencies.map(this.formatPurchaseCurrency):e.paymentCurrencies.map(this.formatPaymentCurrency)}),Ae.WM.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){Ae.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.selectedCurrency?.symbol||"";return tt.dy` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?tt.dy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Ae.IN.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${On(this.currencyImages[e]||this.tokenImages[e])}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:tt.dy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};sd.styles=cae,qh([(0,_t.Cb)({type:String})],sd.prototype,"type",void 0),qh([(0,_t.Cb)({type:Number})],sd.prototype,"value",void 0),qh([(0,_t.SB)()],sd.prototype,"currencies",void 0),qh([(0,_t.SB)()],sd.prototype,"selectedCurrency",void 0),qh([(0,_t.SB)()],sd.prototype,"currencyImages",void 0),qh([(0,_t.SB)()],sd.prototype,"tokenImages",void 0),sd=qh([(0,$t.customElement)("w3m-swap-input")],sd);const lae=tt.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let Gx=class extends tt.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Ae.OptionsController.state;return e||t?tt.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Ae.OptionsController.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Ae.OptionsController.state;return e?tt.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Ae.OptionsController.state;return e?tt.dy`<a href=${e}>Privacy Policy</a>`:null}};Gx.styles=[lae],Gx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-legal-footer")],Gx);const dae=tt.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var tk=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let R_=class extends tt.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:o,homepage:a}=this.wallet,l=Ae.j1.isMobile(),d=Ae.j1.isIos(),p=Ae.j1.isAndroid(),y=[t,r,a,o].filter(Boolean).length>1,O=$t.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return y&&!l?tt.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${()=>Ae.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!y&&a?tt.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&d?tt.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&p?tt.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&Ae.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&Ae.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&Ae.j1.openHref(this.wallet.homepage,"_blank")}};R_.styles=[dae],tk([(0,_t.Cb)({type:Object})],R_.prototype,"wallet",void 0),R_=tk([(0,$t.customElement)("w3m-mobile-download-links")],R_);const fae=tt.iv`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let qx=class extends tt.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Ae.OptionsController.state;return e||t?tt.dy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return tt.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){Ae.RouterController.push("WhatIsABuy")}};qx.styles=[fae],qx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-onramp-providers-footer")],qx);const pae=tt.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var nk=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};const gae={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let O_=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Ae.SnackController.state.open,this.unsubscribe.push(Ae.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=Ae.SnackController.state,r=gae[t];return tt.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Ae.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};O_.styles=pae,nk([(0,_t.SB)()],O_.prototype,"open",void 0),O_=nk([(0,$t.customElement)("w3m-snackbar")],O_);const mae=tt.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var ty=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let Kh=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.formRef=C_(),this.connectors=Ae.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(Ae.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){const e=this.connectors.length>1;return this.connectors.find(r=>"EMAIL"===r.type)?tt.dy`
      <form ${x_(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?tt.dy`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?tt.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?tt.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}onSubmitEmail(e){var t=this;return(0,Oe.Z)(function*(){try{if(t.loading)return;t.loading=!0,e.preventDefault();const r=Ae.ConnectorController.getEmailConnector();if(!r)throw new Error("w3m-email-login-widget: Email connector not found");const{action:o}=yield r.provider.connectEmail({email:t.email});Ae.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===o?(Ae.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Ae.RouterController.push("EmailVerifyOtp",{email:t.email})):"VERIFY_DEVICE"===o&&Ae.RouterController.push("EmailVerifyDevice",{email:t.email})}catch(r){Ae.j1.parseError(r)?.includes("Invalid email")?t.error="Invalid email. Try again.":Ae.SnackController.showError(r)}finally{t.loading=!1}})()}onFocusEvent(){Ae.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Kh.styles=mae,ty([(0,_t.SB)()],Kh.prototype,"connectors",void 0),ty([(0,_t.SB)()],Kh.prototype,"email",void 0),ty([(0,_t.SB)()],Kh.prototype,"loading",void 0),ty([(0,_t.SB)()],Kh.prototype,"error",void 0),Kh=ty([(0,$t.customElement)("w3m-email-login-widget")],Kh);const yae=tt.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var xf=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let su=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.address=Ae.AccountController.state.address,this.profileImage=Ae.AccountController.state.profileImage,this.profileName=Ae.AccountController.state.profileName,this.network=Ae.NetworkController.state.caipNetwork,this.disconnecting=!1,this.balance=Ae.AccountController.state.balance,this.balanceSymbol=Ae.AccountController.state.balanceSymbol,this.unsubscribe.push(Ae.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||Ae.SnackController.showError("Account not found")}),Ae.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ae.fz.getNetworkImage(this.network);return tt.dy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${On(this.address)}
          address=${On(this.address)}
          imageSrc=${On(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${$t.UiHelperUtil.getTruncateString(this.profileName?{string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}:{string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${Ae.j1.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${On(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=Ae.OptionsController.state;return e?tt.dy`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=Ae.MO.getConnectedConnector(),t=Ae.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(Ae.bq.SECURE_SITE)?null:tt.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){Ae.RouterController.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=Ae.AccountController.state;return e?tt.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=Ae.MO.getConnectedConnector(),t=Ae.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;const r=t.provider.getEmail()??"";return tt.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=Ae.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:o})=>o===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(Ae.j1.copyToClopboard(this.address),Ae.SnackController.showSuccess("Address copied"))}catch{Ae.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(Ae.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ae.RouterController.push("Networks"))}onTransactions(){Ae.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),Ae.RouterController.push("Transactions")}onDisconnect(){var e=this;return(0,Oe.Z)(function*(){try{e.disconnecting=!0,yield Ae.ConnectionController.disconnect(),Ae.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ae.IN.close()}catch{Ae.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Ae.SnackController.showError("Failed to disconnect")}finally{e.disconnecting=!1}})()}onExplorer(){const{addressExplorerUrl:e}=Ae.AccountController.state;e&&Ae.j1.openHref(e,"_blank")}onGoToUpgradeView(){Ae.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Ae.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){Ae.RouterController.push("UpdateEmailWallet",{email:e})}};su.styles=yae,xf([(0,_t.SB)()],su.prototype,"address",void 0),xf([(0,_t.SB)()],su.prototype,"profileImage",void 0),xf([(0,_t.SB)()],su.prototype,"profileName",void 0),xf([(0,_t.SB)()],su.prototype,"network",void 0),xf([(0,_t.SB)()],su.prototype,"disconnecting",void 0),xf([(0,_t.SB)()],su.prototype,"balance",void 0),xf([(0,_t.SB)()],su.prototype,"balanceSymbol",void 0),su=xf([(0,$t.customElement)("w3m-account-default-widget")],su);const vae=tt.iv`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,wae_ACCOUNT_TABS=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}];var Af=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let au=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.address=Ae.AccountController.state.address,this.profileImage=Ae.AccountController.state.profileImage,this.profileName=Ae.AccountController.state.profileName,this.smartAccountDeployed=Ae.AccountController.state.smartAccountDeployed,this.network=Ae.NetworkController.state.caipNetwork,this.currentTab=Ae.AccountController.state.currentTab,this.tokenBalance=Ae.AccountController.state.tokenBalance,this.unsubscribe.push(Ae.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed):Ae.IN.close()}),Ae.NetworkController.subscribe(e=>{this.network=e.caipNetwork}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ae.fz.getNetworkImage(this.network);return tt.dy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${On(this.address)}
        networkSrc=${On(e)}
        icon="chevronBottom"
        avatarSrc=${On(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${wae_ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){return 0===this.currentTab?tt.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?tt.dy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?tt.dy`<w3m-account-activity-widget></w3m-account-activity-widget>`:tt.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=Ae.j1.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:r="00"}=Ae.j1.formatTokenBalance(e);return tt.dy`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return tt.dy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){const e=Ae.NetworkController.checkIfSmartAccountEnabled(),t=Di.getPreferredAccountType();return!e||t===Go.ACCOUNT_TYPES.SMART_ACCOUNT||this.smartAccountDeployed?null:tt.dy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){Ae.AccountController.setCurrentTab(e)}onProfileButtonClick(){Ae.RouterController.push("AccountSettings")}onBuyClick(){Ae.RouterController.push("OnRampProviders")}onReceiveClick(){Ae.RouterController.push("WalletReceive")}onSendClick(){Ae.RouterController.push("WalletSend")}onUpdateToSmartAccount(){Ae.RouterController.push("UpgradeToSmartAccount")}};au.styles=vae,Af([(0,_t.SB)()],au.prototype,"address",void 0),Af([(0,_t.SB)()],au.prototype,"profileImage",void 0),Af([(0,_t.SB)()],au.prototype,"profileName",void 0),Af([(0,_t.SB)()],au.prototype,"smartAccountDeployed",void 0),Af([(0,_t.SB)()],au.prototype,"network",void 0),Af([(0,_t.SB)()],au.prototype,"currentTab",void 0),Af([(0,_t.SB)()],au.prototype,"tokenBalance",void 0),au=Af([(0,$t.customElement)("w3m-account-wallet-features-widget")],au);const bae=tt.iv`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;let Kx=class extends tt.oi{render(){return tt.dy`<w3m-activity-list page="account"></w3m-activity-list>`}};Kx.styles=bae,Kx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-account-activity-widget")],Kx);const Eae=tt.iv`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let Yx=class extends tt.oi{render(){return tt.dy`${this.nftTemplate()}`}nftTemplate(){return tt.dy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){Ae.RouterController.push("WalletReceive")}};Yx.styles=Eae,Yx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}([(0,$t.customElement)("w3m-account-nfts-widget")],Yx);const xae=tt.iv`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var rk=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let M_=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=Ae.AccountController.state.tokenBalance,this.unsubscribe.push(Ae.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){Ae.AccountController.fetchTokenBalance()}render(){return tt.dy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?tt.dy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:tt.dy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>tt.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){Ae.RouterController.push("WalletReceive")}onBuyClick(){Ae.RouterController.push("OnRampProviders")}};M_.styles=xae,rk([(0,_t.SB)()],M_.prototype,"tokenBalance",void 0),M_=rk([(0,$t.customElement)("w3m-account-tokens-widget")],M_);const Aae=tt.iv`
  :host {
    height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Yh=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};const N_="last-transaction";let ad=class extends tt.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=Ae.AccountController.state.address,this.transactionsByYear=Ae.sl.state.transactionsByYear,this.loading=Ae.sl.state.loading,this.empty=Ae.sl.state.empty,this.next=Ae.sl.state.next,Ae.sl.clearCursor(),this.unsubscribe.push(Ae.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Ae.sl.resetTransactions(),Ae.sl.fetchTransactions(e.address))}),Ae.sl.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){Ae.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return tt.dy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{const o=r===e.length-1,a=parseInt(t,10);return new Array(12).fill(null).map((d,p)=>p).reverse().map(d=>{const p=$t.TransactionUtil.getTransactionGroupTitle(a,d),y=this.transactionsByYear[a]?.[d];return y?tt.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${p}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(y,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:r,descriptions:o,direction:a,isAllNFT:l,images:d,status:p,transfers:y,type:O}=this.getTransactionListItemProps(e),H=y?.length>1;return 2!==y?.length||l?H?y.map((Ue,He)=>{const Ge=$t.TransactionUtil.getTransferDescription(Ue);return tt.dy` <wui-transaction-list-item
          date=${r}
          direction=${Ue.direction}
          id=${t&&He===y.length-1&&this.next?N_:""}
          status=${p}
          type=${O}
          .onlyDirectionIcon=${!0}
          .images=${[d[He]]}
          .descriptions=${[Ge]}
        ></wui-transaction-list-item>`}):tt.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${a}
        id=${t&&this.next?N_:""}
        status=${p}
        type=${O}
        .images=${d}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `:tt.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${a}
          id=${t&&this.next?N_:""}
          status=${p}
          type=${O}
          .images=${d}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((r,o)=>tt.dy`${this.templateRenderTransaction(r,t&&o===e.length-1)}`)}emptyStateActivity(){return tt.dy`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return tt.dy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?tt.dy`${this.emptyStateAccount()}`:tt.dy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(tt.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){Ae.RouterController.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=Ae.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(Ae.sl.fetchTransactions(this.address),Ae.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${N_}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=Cf.Em.formatDate(e?.metadata?.minedAt),r=$t.TransactionUtil.getTransactionDescriptions(e),o=e?.transfers,a=e?.transfers?.[0],l=!!a&&e?.transfers?.every(p=>!!p.nft_info),d=$t.TransactionUtil.getTransactionImages(o);return{date:t,direction:a?.direction,descriptions:r,isAllNFT:l,images:d,status:e.metadata?.status,transfers:o,type:e.metadata?.operationType}}};ad.styles=Aae,Yh([(0,_t.Cb)()],ad.prototype,"page",void 0),Yh([(0,_t.SB)()],ad.prototype,"address",void 0),Yh([(0,_t.SB)()],ad.prototype,"transactionsByYear",void 0),Yh([(0,_t.SB)()],ad.prototype,"loading",void 0),Yh([(0,_t.SB)()],ad.prototype,"empty",void 0),Yh([(0,_t.SB)()],ad.prototype,"next",void 0),ad=Yh([(0,$t.customElement)("w3m-activity-list")],ad);const Iae=tt.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;var Jx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let ny=class extends tt.oi{render(){return tt.dy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?tt.dy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:tt.dy`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){Ae.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){return this.token&&this.sendTokenAmount?tt.dy`<wui-text variant="small-400" color="fg-200">$${(this.token.price*this.sendTokenAmount).toFixed(2)}</wui-text>`:null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?tt.dy` <wui-text variant="small-400" color="error-100">
          ${$t.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:tt.dy` <wui-text variant="small-400" color="fg-200">
        ${$t.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?tt.dy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:tt.dy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){Ae.Si.setTokenAmount(e.detail)}onMaxClick(){this.token&&Ae.Si.setTokenAmount(Number(this.token?.quantity.numeric))}onBuyClick(){Ae.RouterController.push("OnRampProviders")}};ny.styles=Iae,Jx([(0,_t.Cb)({type:Object})],ny.prototype,"token",void 0),Jx([(0,_t.Cb)({type:Number})],ny.prototype,"sendTokenAmount",void 0),ny=Jx([(0,$t.customElement)("w3m-input-token")],ny);const Dae=tt.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var Qx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let ry=class extends tt.oi{constructor(){super(...arguments),this.inputElementRef=C_(),this.instructionElementRef=C_(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return tt.dy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${x_(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${x_(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}focusInput(){var e=this;return(0,Oe.Z)(function*(){e.instructionElementRef.value&&(e.instructionHidden=!0,yield e.toggleInstructionFocus(!1),e.instructionElementRef.value.style.pointerEvents="none",e.inputElementRef.value?.focus(),e.inputElementRef.value&&(e.inputElementRef.value.selectionStart=e.inputElementRef.value.selectionEnd=e.inputElementRef.value.value.length))})()}focusInstruction(){var e=this;return(0,Oe.Z)(function*(){e.instructionElementRef.value&&(e.instructionHidden=!1,yield e.toggleInstructionFocus(!0),e.instructionElementRef.value.style.pointerEvents="auto",e.inputElementRef.value?.blur())})()}toggleInstructionFocus(e){var t=this;return(0,Oe.Z)(function*(){t.instructionElementRef.value&&(yield t.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished)})()}onBoxClick(){!this.receiverAddress&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}onPasteClick(){return(0,Oe.Z)(function*(){const e=yield navigator.clipboard.readText();Ae.Si.setReceiverAddress(e)})()}onInputChange(e){const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),Ae.Si.setReceiverAddress(t.value)}};ry.styles=Dae,Qx([(0,_t.Cb)()],ry.prototype,"receiverAddress",void 0),Qx([(0,_t.SB)()],ry.prototype,"instructionHidden",void 0),ry=Qx([(0,$t.customElement)("w3m-input-address")],ry);const Tae=tt.iv`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var Xx=function(n,e,t,r){var l,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(o<3?l(a):o>3?l(e,t,a):l(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let iy=class extends tt.oi{render(){return tt.dy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${$t.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?tt.dy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${On(Ae.fz.getNetworkImage(this.caipNetwork))}
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var b=function(D,V,S,A){var ie,N=arguments.length,Y=N<3?V:null===A?A=Object.getOwnPropertyDescriptor(V,S):A;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Y=Reflect.decorate(D,V,S,A);else for(var re=D.length-1;re>=0;re--)(ie=D[re])&&(Y=(N<3?ie(Y):N>3?ie(V,S,Y):ie(V,S))||Y);return N>3&&Y&&Object.defineProperty(V,S,Y),Y};const w="scroll-lock";let T=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=k.IN.state.open,this.caipAddress=k.AccountController.state.caipAddress,this.isSiweEnabled=k.OptionsController.state.isSiweEnabled,this.initializeTheming(),k.ApiController.prefetch(),this.unsubscribe.push(k.IN.subscribeKey("open",V=>V?this.onOpen():this.onClose()),k.AccountController.subscribe(V=>this.onNewAccountState(V))),k.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(V=>V()),this.onRemoveKeyboardListener()}render(){return this.open?R.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(V){var S=this;return(0,v.Z)(function*(){V.target===V.currentTarget&&(yield S.handleClose())})()}handleClose(){var V=this;return(0,v.Z)(function*(){if(V.isSiweEnabled){const{SIWEController:S}=yield I.e(632).then(I.bind(I,4632));"success"!==S.state.status&&(yield k.ConnectionController.disconnect())}k.IN.close()})()}initializeTheming(){const{themeVariables:V,themeMode:S}=k.ThemeController.state,A=x.UiHelperUtil.getColorTheme(S);(0,x.initializeTheming)(V,A)}onClose(){var V=this;return(0,v.Z)(function*(){V.onScrollUnlock(),yield V.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,k.SnackController.hide(),V.open=!1,V.onRemoveKeyboardListener()})()}onOpen(){var V=this;return(0,v.Z)(function*(){V.onScrollLock(),V.open=!0,yield V.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,V.onAddKeyboardListener()})()}onScrollLock(){const V=document.createElement("style");V.dataset.w3m=w,V.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(V)}onScrollUnlock(){const V=document.head.querySelector(`style[data-w3m="${w}"]`);V&&V.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const V=this.shadowRoot?.querySelector("wui-card");V?.focus(),window.addEventListener("keydown",S=>{if("Escape"===S.key)this.handleClose();else if("Tab"===S.key){const{tagName:A}=S.target;A&&!A.includes("W3M-")&&!A.includes("WUI-")&&V?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAccountState(V){var S=this;return(0,v.Z)(function*(){const{isConnected:A,caipAddress:N}=V;if(S.isSiweEnabled){const{SIWEController:Y}=yield I.e(632).then(I.bind(I,4632));A&&!S.caipAddress&&(S.caipAddress=N),A&&N&&S.caipAddress!==N&&(yield Y.signOut(),S.onSiweNavigation(),S.caipAddress=N);try{const ie=yield Y.getSession();ie&&!A?yield Y.signOut():A&&!ie&&S.onSiweNavigation()}catch{A&&S.onSiweNavigation()}}})()}onSiweNavigation(){this.open?k.RouterController.push("ConnectingSiwe"):k.IN.open({view:"ConnectingSiwe"})}};T.styles=C,b([(0,_.SB)()],T.prototype,"open",void 0),b([(0,_.SB)()],T.prototype,"caipAddress",void 0),b([(0,_.SB)()],T.prototype,"isSiweEnabled",void 0),T=b([(0,x.customElement)("w3m-modal")],T)},5174:(Ve,g,I)=>{"use strict";I.d(g,{fl:()=>q,iv:()=>w,Ts:()=>we,Qu:()=>_e});var v=I(5861);const k=globalThis,x=k.ShadowRoot&&(void 0===k.ShadyCSS||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),_=new WeakMap;class C{constructor(ae,ue,le){if(this._$cssResult$=!0,le!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=ae,this.t=ue}get styleSheet(){let ae=this.o;const ue=this.t;if(x&&void 0===ae){const le=void 0!==ue&&1===ue.length;le&&(ae=_.get(ue)),void 0===ae&&((this.o=ae=new CSSStyleSheet).replaceSync(this.cssText),le&&_.set(ue,ae))}return ae}toString(){return this.cssText}}const w=(be,...ae)=>{const ue=1===be.length?be[0]:ae.reduce((le,M,E)=>le+(F=>{if(!0===F._$cssResult$)return F.cssText;if("number"==typeof F)return F;throw Error("Value passed to 'css' function must be a 'css' function result: "+F+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(M)+be[E+1],be[0]);return new C(ue,be,R)},D=x?be=>be:be=>be instanceof CSSStyleSheet?(ae=>{let ue="";for(const le of ae.cssRules)ue+=le.cssText;return(be=>new C("string"==typeof be?be:be+"",void 0,R))(ue)})(be):be,{is:V,defineProperty:S,getOwnPropertyDescriptor:A,getOwnPropertyNames:N,getOwnPropertySymbols:Y,getPrototypeOf:ie}=Object,re=globalThis,Q=re.trustedTypes,Z=Q?Q.emptyScript:"",ee=re.reactiveElementPolyfillSupport,J=(be,ae)=>be,we={toAttribute(be,ae){switch(ae){case Boolean:be=be?Z:null;break;case Object:case Array:be=null==be?be:JSON.stringify(be)}return be},fromAttribute(be,ae){let ue=be;switch(ae){case Boolean:ue=null!==be;break;case Number:ue=null===be?null:Number(be);break;case Object:case Array:try{ue=JSON.parse(be)}catch{ue=null}}return ue}},_e=(be,ae)=>!V(be,ae),B={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:_e};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;class q extends HTMLElement{static addInitializer(ae){this._$Ei(),(this.l??=[]).push(ae)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(ae,ue=B){if(ue.state&&(ue.attribute=!1),this._$Ei(),this.elementProperties.set(ae,ue),!ue.noAccessor){const le=Symbol(),M=this.getPropertyDescriptor(ae,le,ue);void 0!==M&&S(this.prototype,ae,M)}}static getPropertyDescriptor(ae,ue,le){const{get:M,set:E}=A(this.prototype,ae)??{get(){return this[ue]},set(F){this[ue]=F}};return{get(){return M?.call(this)},set(F){const $=M?.call(this);E.call(this,F),this.requestUpdate(ae,$,le)},configurable:!0,enumerable:!0}}static getPropertyOptions(ae){return this.elementProperties.get(ae)??B}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const ae=ie(this);ae.finalize(),void 0!==ae.l&&(this.l=[...ae.l]),this.elementProperties=new Map(ae.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const ue=this.properties,le=[...N(ue),...Y(ue)];for(const M of le)this.createProperty(M,ue[M])}const ae=this[Symbol.metadata];if(null!==ae){const ue=litPropertyMetadata.get(ae);if(void 0!==ue)for(const[le,M]of ue)this.elementProperties.set(le,M)}this._$Eh=new Map;for(const[ue,le]of this.elementProperties){const M=this._$Eu(ue,le);void 0!==M&&this._$Eh.set(M,ue)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(ae){const ue=[];if(Array.isArray(ae)){const le=new Set(ae.flat(1/0).reverse());for(const M of le)ue.unshift(D(M))}else void 0!==ae&&ue.push(D(ae));return ue}static _$Eu(ae,ue){const le=ue.attribute;return!1===le?void 0:"string"==typeof le?le:"string"==typeof ae?ae.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(ae=>this.enableUpdating=ae),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(ae=>ae(this))}addController(ae){(this._$EO??=new Set).add(ae),void 0!==this.renderRoot&&this.isConnected&&ae.hostConnected?.()}removeController(ae){this._$EO?.delete(ae)}_$E_(){const ae=new Map,ue=this.constructor.elementProperties;for(const le of ue.keys())this.hasOwnProperty(le)&&(ae.set(le,this[le]),delete this[le]);ae.size>0&&(this._$Ep=ae)}createRenderRoot(){const ae=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((be,ae)=>{if(x)be.adoptedStyleSheets=ae.map(ue=>ue instanceof CSSStyleSheet?ue:ue.styleSheet);else for(const ue of ae){const le=document.createElement("style"),M=k.litNonce;void 0!==M&&le.setAttribute("nonce",M),le.textContent=ue.cssText,be.appendChild(le)}})(ae,this.constructor.elementStyles),ae}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(ae=>ae.hostConnected?.())}enableUpdating(ae){}disconnectedCallback(){this._$EO?.forEach(ae=>ae.hostDisconnected?.())}attributeChangedCallback(ae,ue,le){this._$AK(ae,le)}_$EC(ae,ue){const le=this.constructor.elementProperties.get(ae),M=this.constructor._$Eu(ae,le);if(void 0!==M&&!0===le.reflect){const E=(void 0!==le.converter?.toAttribute?le.converter:we).toAttribute(ue,le.type);this._$Em=ae,null==E?this.removeAttribute(M):this.setAttribute(M,E),this._$Em=null}}_$AK(ae,ue){const le=this.constructor,M=le._$Eh.get(ae);if(void 0!==M&&this._$Em!==M){const E=le.getPropertyOptions(M),F="function"==typeof E.converter?{fromAttribute:E.converter}:void 0!==E.converter?.fromAttribute?E.converter:we;this._$Em=M,this[M]=F.fromAttribute(ue,E.type),this._$Em=null}}requestUpdate(ae,ue,le){if(void 0!==ae){if(le??=this.constructor.getPropertyOptions(ae),!(le.hasChanged??_e)(this[ae],ue))return;this.P(ae,ue,le)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(ae,ue,le){this._$AL.has(ae)||this._$AL.set(ae,ue),!0===le.reflect&&this._$Em!==ae&&(this._$Ej??=new Set).add(ae)}_$ET(){var ae=this;return(0,v.Z)(function*(){ae.isUpdatePending=!0;try{yield ae._$ES}catch(le){Promise.reject(le)}const ue=ae.scheduleUpdate();return null!=ue&&(yield ue),!ae.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[M,E]of this._$Ep)this[M]=E;this._$Ep=void 0}const le=this.constructor.elementProperties;if(le.size>0)for(const[M,E]of le)!0!==E.wrapped||this._$AL.has(M)||void 0===this[M]||this.P(M,this[M],E)}let ae=!1;const ue=this._$AL;try{ae=this.shouldUpdate(ue),ae?(this.willUpdate(ue),this._$EO?.forEach(le=>le.hostUpdate?.()),this.update(ue)):this._$EU()}catch(le){throw ae=!1,this._$EU(),le}ae&&this._$AE(ue)}willUpdate(ae){}_$AE(ae){this._$EO?.forEach(ue=>ue.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(ae)),this.updated(ae)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(ae){return!0}update(ae){this._$Ej&&=this._$Ej.forEach(ue=>this._$EC(ue,this[ue])),this._$EU()}updated(ae){}firstUpdated(ae){}}q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[J("elementProperties")]=new Map,q[J("finalized")]=new Map,ee?.({ReactiveElement:q}),(re.reactiveElementVersions??=[]).push("2.0.4")},9810:(Ve,g,I)=>{"use strict";I.d(g,{Jb:()=>B,Ld:()=>q,_$LH:()=>j,dy:()=>we,sY:()=>Xe});const v=globalThis,k=v.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:et=>et}):void 0,R="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,C="?"+_,b=`<${C}>`,w=document,T=()=>w.createComment(""),D=et=>null===et||"object"!=typeof et&&"function"!=typeof et,V=Array.isArray,S=et=>V(et)||"function"==typeof et?.[Symbol.iterator],A="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,ie=/>/g,re=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,Z=/"/g,ee=/^(?:script|style|textarea|title)$/i,J=et=>(Ke,...Me)=>({_$litType$:et,strings:Ke,values:Me}),we=J(1),B=(J(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),be=new WeakMap,ae=w.createTreeWalker(w,129);function ue(et,Ke){if(!Array.isArray(et)||!et.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(Ke):Ke}const le=(et,Ke)=>{const Me=et.length-1,Re=[];let ye,P=2===Ke?"<svg>":"",xe=N;for(let Ne=0;Ne<Me;Ne++){const ke=et[Ne];let nt,se,z=-1,te=0;for(;te<ke.length&&(xe.lastIndex=te,se=xe.exec(ke),null!==se);)te=xe.lastIndex,xe===N?"!--"===se[1]?xe=Y:void 0!==se[1]?xe=ie:void 0!==se[2]?(ee.test(se[2])&&(ye=RegExp("</"+se[2],"g")),xe=re):void 0!==se[3]&&(xe=re):xe===re?">"===se[0]?(xe=ye??N,z=-1):void 0===se[1]?z=-2:(z=xe.lastIndex-se[2].length,nt=se[1],xe=void 0===se[3]?re:'"'===se[3]?Z:Q):xe===Z||xe===Q?xe=re:xe===Y||xe===ie?xe=N:(xe=re,ye=void 0);const Ie=xe===re&&et[Ne+1].startsWith("/>")?" ":"";P+=xe===N?ke+b:z>=0?(Re.push(nt),ke.slice(0,z)+R+ke.slice(z)+_+Ie):ke+_+(-2===z?Ne:Ie)}return[ue(et,P+(et[Me]||"<?>")+(2===Ke?"</svg>":"")),Re]};class M{constructor({strings:Ke,_$litType$:Me},Re){let ye;this.parts=[];let P=0,xe=0;const Ne=Ke.length-1,ke=this.parts,[nt,se]=le(Ke,Me);if(this.el=M.createElement(nt,Re),ae.currentNode=this.el.content,2===Me){const z=this.el.content.firstChild;z.replaceWith(...z.childNodes)}for(;null!==(ye=ae.nextNode())&&ke.length<Ne;){if(1===ye.nodeType){if(ye.hasAttributes())for(const z of ye.getAttributeNames())if(z.endsWith(R)){const te=se[xe++],Ie=ye.getAttribute(z).split(_),$e=/([.?@])?(.*)/.exec(te);ke.push({type:1,index:P,name:$e[2],strings:Ie,ctor:"."===$e[1]?ve:"?"===$e[1]?ce:"@"===$e[1]?fe:G}),ye.removeAttribute(z)}else z.startsWith(_)&&(ke.push({type:6,index:P}),ye.removeAttribute(z));if(ee.test(ye.tagName)){const z=ye.textContent.split(_),te=z.length-1;if(te>0){ye.textContent=k?k.emptyScript:"";for(let Ie=0;Ie<te;Ie++)ye.append(z[Ie],T()),ae.nextNode(),ke.push({type:2,index:++P});ye.append(z[te],T())}}}else if(8===ye.nodeType)if(ye.data===C)ke.push({type:2,index:P});else{let z=-1;for(;-1!==(z=ye.data.indexOf(_,z+1));)ke.push({type:7,index:P}),z+=_.length-1}P++}}static createElement(Ke,Me){const Re=w.createElement("template");return Re.innerHTML=Ke,Re}}function E(et,Ke,Me=et,Re){if(Ke===B)return Ke;let ye=void 0!==Re?Me._$Co?.[Re]:Me._$Cl;const P=D(Ke)?void 0:Ke._$litDirective$;return ye?.constructor!==P&&(ye?._$AO?.(!1),void 0===P?ye=void 0:(ye=new P(et),ye._$AT(et,Me,Re)),void 0!==Re?(Me._$Co??=[])[Re]=ye:Me._$Cl=ye),void 0!==ye&&(Ke=E(et,ye._$AS(et,Ke.values),ye,Re)),Ke}class F{constructor(Ke,Me){this._$AV=[],this._$AN=void 0,this._$AD=Ke,this._$AM=Me}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(Ke){const{el:{content:Me},parts:Re}=this._$AD,ye=(Ke?.creationScope??w).importNode(Me,!0);ae.currentNode=ye;let P=ae.nextNode(),xe=0,Ne=0,ke=Re[0];for(;void 0!==ke;){if(xe===ke.index){let nt;2===ke.type?nt=new $(P,P.nextSibling,this,Ke):1===ke.type?nt=new ke.ctor(P,ke.name,ke.strings,this,Ke):6===ke.type&&(nt=new ge(P,this,Ke)),this._$AV.push(nt),ke=Re[++Ne]}xe!==ke?.index&&(P=ae.nextNode(),xe++)}return ae.currentNode=w,ye}p(Ke){let Me=0;for(const Re of this._$AV)void 0!==Re&&(void 0!==Re.strings?(Re._$AI(Ke,Re,Me),Me+=Re.strings.length-2):Re._$AI(Ke[Me])),Me++}}class ${get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(Ke,Me,Re,ye){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=Ke,this._$AB=Me,this._$AM=Re,this.options=ye,this._$Cv=ye?.isConnected??!0}get parentNode(){let Ke=this._$AA.parentNode;const Me=this._$AM;return void 0!==Me&&11===Ke?.nodeType&&(Ke=Me.parentNode),Ke}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(Ke,Me=this){Ke=E(this,Ke,Me),D(Ke)?Ke===q||null==Ke||""===Ke?(this._$AH!==q&&this._$AR(),this._$AH=q):Ke!==this._$AH&&Ke!==B&&this._(Ke):void 0!==Ke._$litType$?this.$(Ke):void 0!==Ke.nodeType?this.T(Ke):S(Ke)?this.k(Ke):this._(Ke)}S(Ke){return this._$AA.parentNode.insertBefore(Ke,this._$AB)}T(Ke){this._$AH!==Ke&&(this._$AR(),this._$AH=this.S(Ke))}_(Ke){this._$AH!==q&&D(this._$AH)?this._$AA.nextSibling.data=Ke:this.T(w.createTextNode(Ke)),this._$AH=Ke}$(Ke){const{values:Me,_$litType$:Re}=Ke,ye="number"==typeof Re?this._$AC(Ke):(void 0===Re.el&&(Re.el=M.createElement(ue(Re.h,Re.h[0]),this.options)),Re);if(this._$AH?._$AD===ye)this._$AH.p(Me);else{const P=new F(ye,this),xe=P.u(this.options);P.p(Me),this.T(xe),this._$AH=P}}_$AC(Ke){let Me=be.get(Ke.strings);return void 0===Me&&be.set(Ke.strings,Me=new M(Ke)),Me}k(Ke){V(this._$AH)||(this._$AH=[],this._$AR());const Me=this._$AH;let Re,ye=0;for(const P of Ke)ye===Me.length?Me.push(Re=new $(this.S(T()),this.S(T()),this,this.options)):Re=Me[ye],Re._$AI(P),ye++;ye<Me.length&&(this._$AR(Re&&Re._$AB.nextSibling,ye),Me.length=ye)}_$AR(Ke=this._$AA.nextSibling,Me){for(this._$AP?.(!1,!0,Me);Ke&&Ke!==this._$AB;){const Re=Ke.nextSibling;Ke.remove(),Ke=Re}}setConnected(Ke){void 0===this._$AM&&(this._$Cv=Ke,this._$AP?.(Ke))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(Ke,Me,Re,ye,P){this.type=1,this._$AH=q,this._$AN=void 0,this.element=Ke,this.name=Me,this._$AM=ye,this.options=P,Re.length>2||""!==Re[0]||""!==Re[1]?(this._$AH=Array(Re.length-1).fill(new String),this.strings=Re):this._$AH=q}_$AI(Ke,Me=this,Re,ye){const P=this.strings;let xe=!1;if(void 0===P)Ke=E(this,Ke,Me,0),xe=!D(Ke)||Ke!==this._$AH&&Ke!==B,xe&&(this._$AH=Ke);else{const Ne=Ke;let ke,nt;for(Ke=P[0],ke=0;ke<P.length-1;ke++)nt=E(this,Ne[Re+ke],Me,ke),nt===B&&(nt=this._$AH[ke]),xe||=!D(nt)||nt!==this._$AH[ke],nt===q?Ke=q:Ke!==q&&(Ke+=(nt??"")+P[ke+1]),this._$AH[ke]=nt}xe&&!ye&&this.j(Ke)}j(Ke){Ke===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,Ke??"")}}class ve extends G{constructor(){super(...arguments),this.type=3}j(Ke){this.element[this.name]=Ke===q?void 0:Ke}}class ce extends G{constructor(){super(...arguments),this.type=4}j(Ke){this.element.toggleAttribute(this.name,!!Ke&&Ke!==q)}}class fe extends G{constructor(Ke,Me,Re,ye,P){super(Ke,Me,Re,ye,P),this.type=5}_$AI(Ke,Me=this){if((Ke=E(this,Ke,Me,0)??q)===B)return;const Re=this._$AH,ye=Ke===q&&Re!==q||Ke.capture!==Re.capture||Ke.once!==Re.once||Ke.passive!==Re.passive,P=Ke!==q&&(Re===q||ye);ye&&this.element.removeEventListener(this.name,this,Re),P&&this.element.addEventListener(this.name,this,Ke),this._$AH=Ke}handleEvent(Ke){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,Ke):this._$AH.handleEvent(Ke)}}class ge{constructor(Ke,Me,Re){this.element=Ke,this.type=6,this._$AN=void 0,this._$AM=Me,this.options=Re}get _$AU(){return this._$AM._$AU}_$AI(Ke){E(this,Ke)}}const j={P:R,A:_,C,M:1,L:le,R:F,D:S,V:E,I:$,H:G,N:ce,U:fe,B:ve,F:ge},Te=v.litHtmlPolyfillSupport;Te?.(M,$),(v.litHtmlVersions??=[]).push("3.1.2");const Xe=(et,Ke,Me)=>{const Re=Me?.renderBefore??Ke;let ye=Re._$litPart$;if(void 0===ye){const P=Me?.renderBefore??null;Re._$litPart$=ye=new $(Ke.insertBefore(T(),P),P,void 0,Me??{})}return ye._$AI(et),ye}},5937:(Ve,g,I)=>{"use strict";I.d(g,{Cb:()=>R,SB:()=>_});var v=I(5174);const k={attribute:!0,type:String,converter:v.Ts,reflect:!1,hasChanged:v.Qu},x=(C=k,b,w)=>{const{kind:T,metadata:D}=w;let V=globalThis.litPropertyMetadata.get(D);if(void 0===V&&globalThis.litPropertyMetadata.set(D,V=new Map),V.set(w.name,C),"accessor"===T){const{name:S}=w;return{set(A){const N=b.get.call(this);b.set.call(this,A),this.requestUpdate(S,N,C)},init(A){return void 0!==A&&this.P(S,void 0,C),A}}}if("setter"===T){const{name:S}=w;return function(A){const N=this[S];b.call(this,A),this.requestUpdate(S,N,C)}}throw Error("Unsupported decorator location: "+T)};function R(C){return(b,w)=>"object"==typeof w?x(C,b,w):((T,D,V)=>{const S=D.hasOwnProperty(V);return D.constructor.createProperty(V,S?{...T,wrapped:!0}:T),S?Object.getOwnPropertyDescriptor(D,V):void 0})(C,b,w)}function _(C){return R({...C,state:!0,attribute:!1})}},6494:(Ve,g,I)=>{"use strict";I.d(g,{oi:()=>x,iv:()=>v.iv,dy:()=>k.dy});var v=I(5174),k=I(9810);class x extends v.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const b=super.createRenderRoot();return this.renderOptions.renderBefore??=b.firstChild,b}update(b){const w=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(b),this._$Do=(0,k.sY)(w,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k.Jb}}x._$litElement$=!0,x.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:x});const R=globalThis.litElementPolyfillSupport;R?.({LitElement:x}),(globalThis.litElementVersions??=[]).push("4.0.4")},7989:(Ve,g,I)=>{"use strict";I.r(g),I.d(g,{TransactionUtil:()=>zp,UiHelperUtil:()=>Ar,WuiAccountButton:()=>os,WuiAllWalletsImage:()=>ih,WuiAvatar:()=>Ua,WuiBalance:()=>qa,WuiBanner:()=>Ac,WuiButton:()=>Ss,WuiCard:()=>In,WuiCardSelect:()=>hi,WuiCardSelectLoader:()=>oh,WuiChip:()=>Ha,WuiChipButton:()=>Tt,WuiCompatibleNetwork:()=>fo,WuiConnectButton:()=>jd,WuiCtaButton:()=>Wt,WuiDetailsGroup:()=>ss,WuiDetailsGroupItem:()=>bc,WuiEmailInput:()=>_o,WuiFlex:()=>uo,WuiGrid:()=>xo,WuiIcon:()=>Qt,WuiIconBox:()=>oa,WuiIconLink:()=>$l,WuiImage:()=>$r,WuiInputAmount:()=>zo,WuiInputElement:()=>hh,WuiInputNumeric:()=>ph,WuiInputText:()=>Is,WuiLink:()=>gh,WuiListAccordion:()=>Or,WuiListContent:()=>Zi,WuiListDescription:()=>da,WuiListItem:()=>aa,WuiListNetwork:()=>Ts,WuiListToken:()=>ua,WuiListWallet:()=>jo,WuiListWalletTransaction:()=>ol,WuiLoadingHexagon:()=>Xr,WuiLoadingSpinner:()=>ai,WuiLoadingThumbnail:()=>rs,WuiLogo:()=>zd,WuiLogoSelect:()=>jl,WuiNetworkButton:()=>Vl,WuiNetworkImage:()=>ki,WuiNoticeCard:()=>Uu,WuiOnRampActivityItem:()=>No,WuiOnRampProviderItem:()=>la,WuiOtp:()=>Za,WuiPreviewItem:()=>Gl,WuiProfileButton:()=>al,WuiPromo:()=>Jd,WuiQrCode:()=>ca,WuiSearchBar:()=>bm,WuiSeparator:()=>wh,WuiShimmer:()=>Jc,WuiSnackbar:()=>rl,WuiTabs:()=>Ga,WuiTag:()=>Si,WuiText:()=>Tu,WuiTokenButton:()=>Zd,WuiTokenListItem:()=>il,WuiTooltip:()=>Gd,WuiTooltipSelect:()=>Qd,WuiTransactionListItem:()=>Ds,WuiTransactionListItemLoader:()=>Wa,WuiTransactionVisual:()=>za,WuiVisual:()=>Ru,WuiVisualThumbnail:()=>Zl,WuiWalletImage:()=>Va,convertInputMaskBottomSvg:()=>ht,convertInputMaskTopSvg:()=>Ct,customElement:()=>Ot,initializeTheming:()=>Jt,setColorTheme:()=>Kn,setThemeVariables:()=>Zr});var v=I(5861);const k=globalThis,x=k.ShadowRoot&&(void 0===k.ShadyCSS||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),_=new WeakMap;class C{constructor(U,me,Se){if(this._$cssResult$=!0,Se!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=U,this.t=me}get styleSheet(){let U=this.o;const me=this.t;if(x&&void 0===U){const Se=void 0!==me&&1===me.length;Se&&(U=_.get(me)),void 0===U&&((this.o=U=new CSSStyleSheet).replaceSync(this.cssText),Se&&_.set(me,U))}return U}toString(){return this.cssText}}const b=Ce=>new C("string"==typeof Ce?Ce:Ce+"",void 0,R),w=(Ce,...U)=>{const me=1===Ce.length?Ce[0]:U.reduce((Se,Le,pe)=>Se+(ze=>{if(!0===ze._$cssResult$)return ze.cssText;if("number"==typeof ze)return ze;throw Error("Value passed to 'css' function must be a 'css' function result: "+ze+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(Le)+Ce[pe+1],Ce[0]);return new C(me,Ce,R)},D=x?Ce=>Ce:Ce=>Ce instanceof CSSStyleSheet?(U=>{let me="";for(const Se of U.cssRules)me+=Se.cssText;return b(me)})(Ce):Ce,{is:V,defineProperty:S,getOwnPropertyDescriptor:A,getOwnPropertyNames:N,getOwnPropertySymbols:Y,getPrototypeOf:ie}=Object,re=globalThis,Q=re.trustedTypes,Z=Q?Q.emptyScript:"",ee=re.reactiveElementPolyfillSupport,J=(Ce,U)=>Ce,we={toAttribute(Ce,U){switch(U){case Boolean:Ce=Ce?Z:null;break;case Object:case Array:Ce=null==Ce?Ce:JSON.stringify(Ce)}return Ce},fromAttribute(Ce,U){let me=Ce;switch(U){case Boolean:me=null!==Ce;break;case Number:me=null===Ce?null:Number(Ce);break;case Object:case Array:try{me=JSON.parse(Ce)}catch{me=null}}return me}},_e=(Ce,U)=>!V(Ce,U),B={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:_e};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;class q extends HTMLElement{static addInitializer(U){this._$Ei(),(this.l??=[]).push(U)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(U,me=B){if(me.state&&(me.attribute=!1),this._$Ei(),this.elementProperties.set(U,me),!me.noAccessor){const Se=Symbol(),Le=this.getPropertyDescriptor(U,Se,me);void 0!==Le&&S(this.prototype,U,Le)}}static getPropertyDescriptor(U,me,Se){const{get:Le,set:pe}=A(this.prototype,U)??{get(){return this[me]},set(ze){this[me]=ze}};return{get(){return Le?.call(this)},set(ze){const Je=Le?.call(this);pe.call(this,ze),this.requestUpdate(U,Je,Se)},configurable:!0,enumerable:!0}}static getPropertyOptions(U){return this.elementProperties.get(U)??B}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const U=ie(this);U.finalize(),void 0!==U.l&&(this.l=[...U.l]),this.elementProperties=new Map(U.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const me=this.properties,Se=[...N(me),...Y(me)];for(const Le of Se)this.createProperty(Le,me[Le])}const U=this[Symbol.metadata];if(null!==U){const me=litPropertyMetadata.get(U);if(void 0!==me)for(const[Se,Le]of me)this.elementProperties.set(Se,Le)}this._$Eh=new Map;for(const[me,Se]of this.elementProperties){const Le=this._$Eu(me,Se);void 0!==Le&&this._$Eh.set(Le,me)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(U){const me=[];if(Array.isArray(U)){const Se=new Set(U.flat(1/0).reverse());for(const Le of Se)me.unshift(D(Le))}else void 0!==U&&me.push(D(U));return me}static _$Eu(U,me){const Se=me.attribute;return!1===Se?void 0:"string"==typeof Se?Se:"string"==typeof U?U.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(U=>this.enableUpdating=U),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(U=>U(this))}addController(U){(this._$EO??=new Set).add(U),void 0!==this.renderRoot&&this.isConnected&&U.hostConnected?.()}removeController(U){this._$EO?.delete(U)}_$E_(){const U=new Map,me=this.constructor.elementProperties;for(const Se of me.keys())this.hasOwnProperty(Se)&&(U.set(Se,this[Se]),delete this[Se]);U.size>0&&(this._$Ep=U)}createRenderRoot(){const U=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((Ce,U)=>{if(x)Ce.adoptedStyleSheets=U.map(me=>me instanceof CSSStyleSheet?me:me.styleSheet);else for(const me of U){const Se=document.createElement("style"),Le=k.litNonce;void 0!==Le&&Se.setAttribute("nonce",Le),Se.textContent=me.cssText,Ce.appendChild(Se)}})(U,this.constructor.elementStyles),U}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(U=>U.hostConnected?.())}enableUpdating(U){}disconnectedCallback(){this._$EO?.forEach(U=>U.hostDisconnected?.())}attributeChangedCallback(U,me,Se){this._$AK(U,Se)}_$EC(U,me){const Se=this.constructor.elementProperties.get(U),Le=this.constructor._$Eu(U,Se);if(void 0!==Le&&!0===Se.reflect){const pe=(void 0!==Se.converter?.toAttribute?Se.converter:we).toAttribute(me,Se.type);this._$Em=U,null==pe?this.removeAttribute(Le):this.setAttribute(Le,pe),this._$Em=null}}_$AK(U,me){const Se=this.constructor,Le=Se._$Eh.get(U);if(void 0!==Le&&this._$Em!==Le){const pe=Se.getPropertyOptions(Le),ze="function"==typeof pe.converter?{fromAttribute:pe.converter}:void 0!==pe.converter?.fromAttribute?pe.converter:we;this._$Em=Le,this[Le]=ze.fromAttribute(me,pe.type),this._$Em=null}}requestUpdate(U,me,Se){if(void 0!==U){if(Se??=this.constructor.getPropertyOptions(U),!(Se.hasChanged??_e)(this[U],me))return;this.P(U,me,Se)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(U,me,Se){this._$AL.has(U)||this._$AL.set(U,me),!0===Se.reflect&&this._$Em!==U&&(this._$Ej??=new Set).add(U)}_$ET(){var U=this;return(0,v.Z)(function*(){U.isUpdatePending=!0;try{yield U._$ES}catch(Se){Promise.reject(Se)}const me=U.scheduleUpdate();return null!=me&&(yield me),!U.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[Le,pe]of this._$Ep)this[Le]=pe;this._$Ep=void 0}const Se=this.constructor.elementProperties;if(Se.size>0)for(const[Le,pe]of Se)!0!==pe.wrapped||this._$AL.has(Le)||void 0===this[Le]||this.P(Le,this[Le],pe)}let U=!1;const me=this._$AL;try{U=this.shouldUpdate(me),U?(this.willUpdate(me),this._$EO?.forEach(Se=>Se.hostUpdate?.()),this.update(me)):this._$EU()}catch(Se){throw U=!1,this._$EU(),Se}U&&this._$AE(me)}willUpdate(U){}_$AE(U){this._$EO?.forEach(me=>me.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(U)),this.updated(U)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(U){return!0}update(U){this._$Ej&&=this._$Ej.forEach(me=>this._$EC(me,this[me])),this._$EU()}updated(U){}firstUpdated(U){}}q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[J("elementProperties")]=new Map,q[J("finalized")]=new Map,ee?.({ReactiveElement:q}),(re.reactiveElementVersions??=[]).push("2.0.4");const be=globalThis,ae=be.trustedTypes,ue=ae?ae.createPolicy("lit-html",{createHTML:Ce=>Ce}):void 0,le="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,E="?"+M,F=`<${E}>`,$=document,G=()=>$.createComment(""),ve=Ce=>null===Ce||"object"!=typeof Ce&&"function"!=typeof Ce,ce=Array.isArray,fe=Ce=>ce(Ce)||"function"==typeof Ce?.[Symbol.iterator],ge="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Xe=/>/g,et=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,Me=/"/g,Re=/^(?:script|style|textarea|title)$/i,ye=Ce=>(U,...me)=>({_$litType$:Ce,strings:U,values:me}),P=ye(1),xe=ye(2),Ne=Symbol.for("lit-noChange"),ke=Symbol.for("lit-nothing"),nt=new WeakMap,se=$.createTreeWalker($,129);function z(Ce,U){if(!Array.isArray(Ce)||!Ce.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ue?ue.createHTML(U):U}const te=(Ce,U)=>{const me=Ce.length-1,Se=[];let Le,pe=2===U?"<svg>":"",ze=j;for(let Je=0;Je<me;Je++){const Vt=Ce[Je];let wr,ei,Sr=-1,Os=0;for(;Os<Vt.length&&(ze.lastIndex=Os,ei=ze.exec(Vt),null!==ei);)Os=ze.lastIndex,ze===j?"!--"===ei[1]?ze=Te:void 0!==ei[1]?ze=Xe:void 0!==ei[2]?(Re.test(ei[2])&&(Le=RegExp("</"+ei[2],"g")),ze=et):void 0!==ei[3]&&(ze=et):ze===et?">"===ei[0]?(ze=Le??j,Sr=-1):void 0===ei[1]?Sr=-2:(Sr=ze.lastIndex-ei[2].length,wr=ei[1],ze=void 0===ei[3]?et:'"'===ei[3]?Me:Ke):ze===Me||ze===Ke?ze=et:ze===Te||ze===Xe?ze=j:(ze=et,Le=void 0);const fa=ze===et&&Ce[Je+1].startsWith("/>")?" ":"";pe+=ze===j?Vt+F:Sr>=0?(Se.push(wr),Vt.slice(0,Sr)+le+Vt.slice(Sr)+M+fa):Vt+M+(-2===Sr?Je:fa)}return[z(Ce,pe+(Ce[me]||"<?>")+(2===U?"</svg>":"")),Se]};class Ie{constructor({strings:U,_$litType$:me},Se){let Le;this.parts=[];let pe=0,ze=0;const Je=U.length-1,Vt=this.parts,[wr,ei]=te(U,me);if(this.el=Ie.createElement(wr,Se),se.currentNode=this.el.content,2===me){const Sr=this.el.content.firstChild;Sr.replaceWith(...Sr.childNodes)}for(;null!==(Le=se.nextNode())&&Vt.length<Je;){if(1===Le.nodeType){if(Le.hasAttributes())for(const Sr of Le.getAttributeNames())if(Sr.endsWith(le)){const Os=ei[ze++],fa=Le.getAttribute(Sr).split(M),Ms=/([.?@])?(.*)/.exec(Os);Vt.push({type:1,index:pe,name:Ms[2],strings:fa,ctor:"."===Ms[1]?st:"?"===Ms[1]?je:"@"===Ms[1]?We:qe}),Le.removeAttribute(Sr)}else Sr.startsWith(M)&&(Vt.push({type:6,index:pe}),Le.removeAttribute(Sr));if(Re.test(Le.tagName)){const Sr=Le.textContent.split(M),Os=Sr.length-1;if(Os>0){Le.textContent=ae?ae.emptyScript:"";for(let fa=0;fa<Os;fa++)Le.append(Sr[fa],G()),se.nextNode(),Vt.push({type:2,index:++pe});Le.append(Sr[Os],G())}}}else if(8===Le.nodeType)if(Le.data===E)Vt.push({type:2,index:pe});else{let Sr=-1;for(;-1!==(Sr=Le.data.indexOf(M,Sr+1));)Vt.push({type:7,index:pe}),Sr+=M.length-1}pe++}}static createElement(U,me){const Se=$.createElement("template");return Se.innerHTML=U,Se}}function $e(Ce,U,me=Ce,Se){if(U===Ne)return U;let Le=void 0!==Se?me._$Co?.[Se]:me._$Cl;const pe=ve(U)?void 0:U._$litDirective$;return Le?.constructor!==pe&&(Le?._$AO?.(!1),void 0===pe?Le=void 0:(Le=new pe(Ce),Le._$AT(Ce,me,Se)),void 0!==Se?(me._$Co??=[])[Se]=Le:me._$Cl=Le),void 0!==Le&&(U=$e(Ce,Le._$AS(Ce,U.values),Le,Se)),U}class Pe{constructor(U,me){this._$AV=[],this._$AN=void 0,this._$AD=U,this._$AM=me}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(U){const{el:{content:me},parts:Se}=this._$AD,Le=(U?.creationScope??$).importNode(me,!0);se.currentNode=Le;let pe=se.nextNode(),ze=0,Je=0,Vt=Se[0];for(;void 0!==Vt;){if(ze===Vt.index){let wr;2===Vt.type?wr=new Ye(pe,pe.nextSibling,this,U):1===Vt.type?wr=new Vt.ctor(pe,Vt.name,Vt.strings,this,U):6===Vt.type&&(wr=new oe(pe,this,U)),this._$AV.push(wr),Vt=Se[++Je]}ze!==Vt?.index&&(pe=se.nextNode(),ze++)}return se.currentNode=$,Le}p(U){let me=0;for(const Se of this._$AV)void 0!==Se&&(void 0!==Se.strings?(Se._$AI(U,Se,me),me+=Se.strings.length-2):Se._$AI(U[me])),me++}}class Ye{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(U,me,Se,Le){this.type=2,this._$AH=ke,this._$AN=void 0,this._$AA=U,this._$AB=me,this._$AM=Se,this.options=Le,this._$Cv=Le?.isConnected??!0}get parentNode(){let U=this._$AA.parentNode;const me=this._$AM;return void 0!==me&&11===U?.nodeType&&(U=me.parentNode),U}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(U,me=this){U=$e(this,U,me),ve(U)?U===ke||null==U||""===U?(this._$AH!==ke&&this._$AR(),this._$AH=ke):U!==this._$AH&&U!==Ne&&this._(U):void 0!==U._$litType$?this.$(U):void 0!==U.nodeType?this.T(U):fe(U)?this.k(U):this._(U)}S(U){return this._$AA.parentNode.insertBefore(U,this._$AB)}T(U){this._$AH!==U&&(this._$AR(),this._$AH=this.S(U))}_(U){this._$AH!==ke&&ve(this._$AH)?this._$AA.nextSibling.data=U:this.T($.createTextNode(U)),this._$AH=U}$(U){const{values:me,_$litType$:Se}=U,Le="number"==typeof Se?this._$AC(U):(void 0===Se.el&&(Se.el=Ie.createElement(z(Se.h,Se.h[0]),this.options)),Se);if(this._$AH?._$AD===Le)this._$AH.p(me);else{const pe=new Pe(Le,this),ze=pe.u(this.options);pe.p(me),this.T(ze),this._$AH=pe}}_$AC(U){let me=nt.get(U.strings);return void 0===me&&nt.set(U.strings,me=new Ie(U)),me}k(U){ce(this._$AH)||(this._$AH=[],this._$AR());const me=this._$AH;let Se,Le=0;for(const pe of U)Le===me.length?me.push(Se=new Ye(this.S(G()),this.S(G()),this,this.options)):Se=me[Le],Se._$AI(pe),Le++;Le<me.length&&(this._$AR(Se&&Se._$AB.nextSibling,Le),me.length=Le)}_$AR(U=this._$AA.nextSibling,me){for(this._$AP?.(!1,!0,me);U&&U!==this._$AB;){const Se=U.nextSibling;U.remove(),U=Se}}setConnected(U){void 0===this._$AM&&(this._$Cv=U,this._$AP?.(U))}}class qe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(U,me,Se,Le,pe){this.type=1,this._$AH=ke,this._$AN=void 0,this.element=U,this.name=me,this._$AM=Le,this.options=pe,Se.length>2||""!==Se[0]||""!==Se[1]?(this._$AH=Array(Se.length-1).fill(new String),this.strings=Se):this._$AH=ke}_$AI(U,me=this,Se,Le){const pe=this.strings;let ze=!1;if(void 0===pe)U=$e(this,U,me,0),ze=!ve(U)||U!==this._$AH&&U!==Ne,ze&&(this._$AH=U);else{const Je=U;let Vt,wr;for(U=pe[0],Vt=0;Vt<pe.length-1;Vt++)wr=$e(this,Je[Se+Vt],me,Vt),wr===Ne&&(wr=this._$AH[Vt]),ze||=!ve(wr)||wr!==this._$AH[Vt],wr===ke?U=ke:U!==ke&&(U+=(wr??"")+pe[Vt+1]),this._$AH[Vt]=wr}ze&&!Le&&this.j(U)}j(U){U===ke?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,U??"")}}class st extends qe{constructor(){super(...arguments),this.type=3}j(U){this.element[this.name]=U===ke?void 0:U}}class je extends qe{constructor(){super(...arguments),this.type=4}j(U){this.element.toggleAttribute(this.name,!!U&&U!==ke)}}class We extends qe{constructor(U,me,Se,Le,pe){super(U,me,Se,Le,pe),this.type=5}_$AI(U,me=this){if((U=$e(this,U,me,0)??ke)===Ne)return;const Se=this._$AH,Le=U===ke&&Se!==ke||U.capture!==Se.capture||U.once!==Se.once||U.passive!==Se.passive,pe=U!==ke&&(Se===ke||Le);Le&&this.element.removeEventListener(this.name,this,Se),pe&&this.element.addEventListener(this.name,this,U),this._$AH=U}handleEvent(U){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,U):this._$AH.handleEvent(U)}}class oe{constructor(U,me,Se){this.element=U,this.type=6,this._$AN=void 0,this._$AM=me,this.options=Se}get _$AU(){return this._$AM._$AU}_$AI(U){$e(this,U)}}const ne={P:le,A:M,C:E,M:1,L:te,R:Pe,D:fe,V:$e,I:Ye,H:qe,N:je,U:We,B:st,F:oe},K=be.litHtmlPolyfillSupport;K?.(Ie,Ye),(be.litHtmlVersions??=[]).push("3.1.2");class Be extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const U=super.createRenderRoot();return this.renderOptions.renderBefore??=U.firstChild,U}update(U){const me=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(U),this._$Do=((Ce,U,me)=>{const Se=me?.renderBefore??U;let Le=Se._$litPart$;if(void 0===Le){const pe=me?.renderBefore??null;Se._$litPart$=Le=new Ye(U.insertBefore(G(),pe),pe,void 0,me??{})}return Le._$AI(Ce),Le})(me,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}}Be._$litElement$=!0,Be.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Be});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:Be}),(globalThis.litElementVersions??=[]).push("4.0.4");const ht=xe`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,Ct=xe`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let Lt,Gt,dn;function Jt(Ce,U){Lt=document.createElement("style"),Gt=document.createElement("style"),dn=document.createElement("style"),Lt.textContent=bn(Ce).core.cssText,Gt.textContent=bn(Ce).dark.cssText,dn.textContent=bn(Ce).light.cssText,document.head.appendChild(Lt),document.head.appendChild(Gt),document.head.appendChild(dn),Kn(U)}function Kn(Ce){Gt&&dn&&("light"===Ce?(Gt.removeAttribute("media"),dn.media="enabled"):(dn.removeAttribute("media"),Gt.media="enabled"))}function Zr(Ce){Lt&&Gt&&dn&&(Lt.textContent=bn(Ce).core.cssText,Gt.textContent=bn(Ce).dark.cssText,dn.textContent=bn(Ce).light.cssText)}function bn(Ce){return{core:w`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${b(Ce?.["--w3m-color-mix-strength"]?`${Ce["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${b(Ce?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${b(Ce?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${b(Ce?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${b(Ce?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:w`
      :root {
        --w3m-color-mix: ${b(Ce?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${b(Ce?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:w`
      :root {
        --w3m-color-mix: ${b(Ce?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${b(Ce?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const St=w`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,nn=w`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,sn=w`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Ot(Ce){return function(me){return"function"==typeof me?function nr(Ce,U){return customElements.get(Ce)||customElements.define(Ce,U),U}(Ce,me):function xn(Ce,U){const{kind:me,elements:Se}=U;return{kind:me,elements:Se,finisher(Le){customElements.get(Ce)||customElements.define(Ce,Le)}}}(Ce,me)}}const $n=w`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let In=class extends Be{render(){return P`<slot></slot>`}};In.styles=[St,$n],In=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe}([Ot("wui-card")],In);const Fn={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:_e},Cr=(Ce=Fn,U,me)=>{const{kind:Se,metadata:Le}=me;let pe=globalThis.litPropertyMetadata.get(Le);if(void 0===pe&&globalThis.litPropertyMetadata.set(Le,pe=new Map),pe.set(me.name,Ce),"accessor"===Se){const{name:ze}=me;return{set(Je){const Vt=U.get.call(this);U.set.call(this,Je),this.requestUpdate(ze,Vt,Ce)},init(Je){return void 0!==Je&&this.P(ze,void 0,Ce),Je}}}if("setter"===Se){const{name:ze}=me;return function(Je){const Vt=this[ze];U.call(this,Je),this.requestUpdate(ze,Vt,Ce)}}throw Error("Unsupported decorator location: "+Se)};function rt(Ce){return(U,me)=>"object"==typeof me?Cr(Ce,U,me):((Se,Le,pe)=>{const ze=Le.hasOwnProperty(pe);return Le.constructor.createProperty(pe,ze?{...Se,wrapped:!0}:Se),ze?Object.getOwnPropertyDescriptor(Le,pe):void 0})(Ce,U,me)}function _n(Ce){return rt({...Ce,state:!0,attribute:!1})}const qr=w`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,jn=xe`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Vn=xe`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Qr=xe`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Kr=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,dr=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,gc=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Yr=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Hn=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,es=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,xi=xe`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,hn=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ra=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,xs=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,zi=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Na=xe`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Pa=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Yn=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ts=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Ur=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Wi=xe`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,ka=xe`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,fr=xe` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,En=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,qc=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Kc=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Pd=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,La=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Bt=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,mc=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Pn=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,_r=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,rm=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,bv=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,im=xe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Yf=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Mo=xe`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,_v=xe`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,om=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,sm=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ia=xe` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,xu=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Ev=xe`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Cv=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,Yc=xe`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,am=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xv=xe`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,cm=xe`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Av=xe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,ns=xe`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,yn=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,lm=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Sv=xe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Jf=xe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,vn=xe`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Sp=xe`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Uo=xe`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Au=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Ip=xe`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Qf=xe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Su=xe`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Iu=xe`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,kd=xe`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Xf=xe`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,Dp=xe`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var gt=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};const Pt={add:ka,allWallets:jn,arrowBottomCircle:Vn,appStore:Qr,apple:Kr,arrowBottom:dr,arrowLeft:gc,arrowRight:Yr,arrowTop:Hn,bank:Iu,browser:es,card:kd,checkmark:xi,chevronBottom:hn,checkmarkBold:xe`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,chevronLeft:ra,chevronRight:xs,chevronTop:zi,chromeStore:Na,clock:Pa,close:Yn,compass:Ur,coinPlaceholder:ts,copy:Wi,cursor:fr,cursorTransparent:Dp,desktop:En,disconnect:qc,discord:Kc,etherscan:Pd,extension:La,externalLink:Bt,facebook:mc,filters:Pn,github:_r,google:rm,helpCircle:bv,infoCircle:im,mail:Yf,mobile:Mo,networkPlaceholder:_v,nftPlaceholder:om,off:sm,playStore:ia,plus:Xf,qrCode:xu,recycleHorizontal:Su,refresh:Ev,search:Cv,send:Yc,swapHorizontal:am,swapHorizontalMedium:cm,swapHorizontalBold:xv,swapVertical:ns,swapHorizontalRoundedBold:Av,telegram:yn,twitch:lm,twitter:Sv,twitterIcon:Jf,verify:vn,verifyFilled:Sp,wallet:Au,walletConnect:Ip,walletPlaceholder:Uo,warningCircle:Qf};let Qt=class extends Be{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,P`${Pt[this.name]}`}};Qt.styles=[St,sn,qr],gt([rt()],Qt.prototype,"size",void 0),gt([rt()],Qt.prototype,"name",void 0),gt([rt()],Qt.prototype,"color",void 0),Qt=gt([Ot("wui-icon")],Qt);const rr=w`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Bn=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let $r=class extends Be{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,P`<img src=${this.src} alt=${this.alt} />`}};$r.styles=[St,sn,rr],Bn([rt()],$r.prototype,"src",void 0),Bn([rt()],$r.prototype,"alt",void 0),Bn([rt()],$r.prototype,"size",void 0),$r=Bn([Ot("wui-image")],$r);const zn=w`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Xr=class extends Be{render(){return P`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Xr.styles=[St,zn],Xr=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe}([Ot("wui-loading-hexagon")],Xr);const qt=w`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var vo=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let ai=class extends Be{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,P`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ai.styles=[St,qt],vo([rt()],ai.prototype,"color",void 0),vo([rt()],ai.prototype,"size",void 0),ai=vo([Ot("wui-loading-spinner")],ai);const $o=w`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var wo=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let rs=class extends Be{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const U=this.radius>50?50:this.radius,Se=36-U;return P`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${U}
          stroke-dasharray="${116+Se} ${245+Se}"
          stroke-dashoffset=${360+1.75*Se}
        />
      </svg>
    `}};rs.styles=[St,$o],wo([rt({type:Number})],rs.prototype,"radius",void 0),rs=wo([Ot("wui-loading-thumbnail")],rs);const As=w`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Ba=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let Jc=class extends Be{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,P`<slot></slot>`}};Jc.styles=[As],Ba([rt()],Jc.prototype,"width",void 0),Ba([rt()],Jc.prototype,"height",void 0),Ba([rt()],Jc.prototype,"borderRadius",void 0),Jc=Ba([Ot("wui-shimmer")],Jc);const Bd=Ce=>(...U)=>({_$litDirective$:Ce,values:U});class nE{constructor(U){}get _$AU(){return this._$AM._$AU}_$AT(U,me,Se){this._$Ct=U,this._$AM=me,this._$Ci=Se}_$AS(U,me){return this.update(U,me)}update(U,me){return this.render(...me)}}const eh=Bd(class extends nE{constructor(Ce){if(super(Ce),1!==Ce.type||"class"!==Ce.name||Ce.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(Ce){return" "+Object.keys(Ce).filter(U=>Ce[U]).join(" ")+" "}update(Ce,[U]){if(void 0===this.st){this.st=new Set,void 0!==Ce.strings&&(this.nt=new Set(Ce.strings.join(" ").split(/\s/).filter(Se=>""!==Se)));for(const Se in U)U[Se]&&!this.nt?.has(Se)&&this.st.add(Se);return this.render(U)}const me=Ce.element.classList;for(const Se of this.st)Se in U||(me.remove(Se),this.st.delete(Se));for(const Se in U){const Le=!!U[Se];Le===this.st.has(Se)||this.nt?.has(Se)||(Le?(me.add(Se),this.st.add(Se)):(me.remove(Se),this.st.delete(Se)))}return Ne}}),um=w`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Du=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let Tu=class extends Be{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const U={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,P`<slot class=${eh(U)}></slot>`}};Tu.styles=[St,um],Du([rt()],Tu.prototype,"variant",void 0),Du([rt()],Tu.prototype,"color",void 0),Du([rt()],Tu.prototype,"align",void 0),Tu=Du([Ot("wui-text")],Tu);const rE=xe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,iE=xe`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Iv=xe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Fd=xe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,oE=xe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Bl=xe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,sE=xe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Dn=xe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Dv=xe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,an=xe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Tp=xe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,dm=xe`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,th=xe`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,aE=xe`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,cE=xe`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,lE=xe`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Qc=xe`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Rp=xe`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,Fa=xe`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,yc=xe`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,xr=xe`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Op=w`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var nh=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};const fm={browser:rE,dao:iE,defi:Iv,defiAlt:Fd,eth:oE,layers:Bl,lock:sE,login:Dn,network:Dv,nft:an,noun:Tp,profile:dm,system:th,coinbase:aE,onrampCard:Rp,moonpay:cE,stripe:lE,paypal:Qc,google:Fa,pencil:yc,lightbulb:xr};let Ru=class extends Be{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--wui-visual-size-${this.size});\n   `,P`${fm[this.name]}`}};Ru.styles=[St,Op],nh([rt()],Ru.prototype,"name",void 0),nh([rt()],Ru.prototype,"size",void 0),Ru=nh([Ot("wui-visual")],Ru);const Qi=Ce=>Ce??ke,Ar={getSpacingStyles:(Ce,U)=>Array.isArray(Ce)?Ce[U]?`var(--wui-spacing-${Ce[U]})`:void 0:"string"==typeof Ce?`var(--wui-spacing-${Ce})`:void 0,getFormattedDate:Ce=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(Ce),getHostName:Ce=>new URL(Ce).hostname,getTruncateString:({string:Ce,charsStart:U,charsEnd:me,truncate:Se})=>Ce.length<=U+me?Ce:"end"===Se?`${Ce.substring(0,U)}...`:"start"===Se?`...${Ce.substring(Ce.length-me)}`:`${Ce.substring(0,Math.floor(U))}...${Ce.substring(Ce.length-Math.floor(me))}`,generateAvatarColors(Ce){const me=Ce.toLowerCase().replace(/^0x/iu,"").substring(0,6),Se=this.hexToRgb(me),Le=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),ze=100-3*Number(Le?.replace("px","")),Je=`${ze}% ${ze}% at 65% 40%`,Vt=[];for(let wr=0;wr<5;wr+=1){const ei=this.tintColor(Se,.15*wr);Vt.push(`rgb(${ei[0]}, ${ei[1]}, ${ei[2]})`)}return`\n    --local-color-1: ${Vt[0]};\n    --local-color-2: ${Vt[1]};\n    --local-color-3: ${Vt[2]};\n    --local-color-4: ${Vt[3]};\n    --local-color-5: ${Vt[4]};\n    --local-radial-circle: ${Je}\n   `},hexToRgb(Ce){const U=parseInt(Ce,16);return[U>>16&255,U>>8&255,255&U]},tintColor(Ce,U){const[me,Se,Le]=Ce;return[Math.round(me+(255-me)*U),Math.round(Se+(255-Se)*U),Math.round(Le+(255-Le)*U)]},isNumber:Ce=>/^[0-9]+$/u.test(Ce),getColorTheme:Ce=>Ce||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(Ce){const U=Ce.split(".");return 2===U.length?[U[0],U[1]]:["0","00"]},roundNumber:(Ce,U,me)=>Math.abs(Ce)>=U?Number(Ce.toFixed(me)):Ce,formatNumberToLocalString:(Ce,U=2)=>void 0===Ce?"0.00":"number"==typeof Ce?Ce.toLocaleString("en-US",{maximumFractionDigits:U,minimumFractionDigits:U}):parseFloat(Ce).toLocaleString("en-US",{maximumFractionDigits:U,minimumFractionDigits:U})},Tv=w`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var is=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let uo=class extends Be{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Ar.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Ar.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Ar.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Ar.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Ar.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Ar.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Ar.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Ar.getSpacingStyles(this.margin,3)};\n    `,P`<slot></slot>`}};uo.styles=[St,Tv],is([rt()],uo.prototype,"flexDirection",void 0),is([rt()],uo.prototype,"flexWrap",void 0),is([rt()],uo.prototype,"flexBasis",void 0),is([rt()],uo.prototype,"flexGrow",void 0),is([rt()],uo.prototype,"flexShrink",void 0),is([rt()],uo.prototype,"alignItems",void 0),is([rt()],uo.prototype,"justifyContent",void 0),is([rt()],uo.prototype,"columnGap",void 0),is([rt()],uo.prototype,"rowGap",void 0),is([rt()],uo.prototype,"gap",void 0),is([rt()],uo.prototype,"padding",void 0),is([rt()],uo.prototype,"margin",void 0),uo=is([Ot("wui-flex")],uo);const Rv=w`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var rh=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let Ua=class extends Be{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return P`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",P`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const U=Ar.generateAvatarColors(this.address);return this.style.cssText=U,null}return this.dataset.variant="default",null}};Ua.styles=[St,Rv],rh([rt()],Ua.prototype,"imageSrc",void 0),rh([rt()],Ua.prototype,"alt",void 0),rh([rt()],Ua.prototype,"address",void 0),Ua=rh([Ot("wui-avatar")],Ua);const Ov=w`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var vc=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let oa=class extends Be{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const U=this.iconSize||this.size,me="lg"===this.size,ze="gray"===this.background,Je="opaque"===this.background,Vt="accent-100"===this.backgroundColor&&Je||"success-100"===this.backgroundColor&&Je||"error-100"===this.backgroundColor&&Je||"inverse-100"===this.backgroundColor&&Je;let wr=`var(--wui-color-${this.backgroundColor})`;return Vt?wr=`var(--wui-icon-box-bg-${this.backgroundColor})`:ze&&(wr=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${wr};\n       --local-bg-mix: ${Vt||ze?"100%":me?"12%":"16%"};\n       --local-border-radius: var(--wui-border-radius-${me?"xxs":"xl"===this.size?"s":"3xl"});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,P` <wui-icon color=${this.iconColor} size=${U} name=${this.icon}></wui-icon> `}};oa.styles=[St,nn,Ov],vc([rt()],oa.prototype,"size",void 0),vc([rt()],oa.prototype,"backgroundColor",void 0),vc([rt()],oa.prototype,"iconColor",void 0),vc([rt()],oa.prototype,"iconSize",void 0),vc([rt()],oa.prototype,"background",void 0),vc([rt({type:Boolean})],oa.prototype,"border",void 0),vc([rt()],oa.prototype,"borderColor",void 0),vc([rt()],oa.prototype,"icon",void 0),oa=vc([Ot("wui-icon-box")],oa);const Mv=w`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var $a=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let os=class extends Be{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return P`
      <button
        ?disabled=${this.disabled}
        class=${Qi(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?Ar.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return P` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const U=this.networkSrc?P`<wui-image src=${this.networkSrc}></wui-image>`:P`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return P`
        ${U}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};os.styles=[St,nn,Mv],$a([rt()],os.prototype,"networkSrc",void 0),$a([rt()],os.prototype,"avatarSrc",void 0),$a([rt()],os.prototype,"balance",void 0),$a([rt({type:Boolean})],os.prototype,"isUnsupportedChain",void 0),$a([rt({type:Boolean})],os.prototype,"disabled",void 0),$a([rt({type:Boolean})],os.prototype,"isProfileName",void 0),$a([rt()],os.prototype,"address",void 0),$a([rt()],os.prototype,"profileName",void 0),$a([rt()],os.prototype,"charsStart",void 0),$a([rt()],os.prototype,"charsEnd",void 0),os=$a([Ot("wui-account-button")],os);const ja=w`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Ou=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let Va=class extends Be{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let U="xxs";return U="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${U});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),P`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?P`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?P`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:P`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Va.styles=[St,ja],Ou([rt()],Va.prototype,"size",void 0),Ou([rt()],Va.prototype,"name",void 0),Ou([rt()],Va.prototype,"imageSrc",void 0),Ou([rt()],Va.prototype,"walletIcon",void 0),Ou([rt({type:Boolean})],Va.prototype,"installed",void 0),Ou([rt()],Va.prototype,"badgeSize",void 0),Va=Ou([Ot("wui-wallet-image")],Va);const uE=w`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Nv=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let ih=class extends Be{constructor(){super(...arguments),this.walletImages=[]}render(){const U=this.walletImages.length<4;return P`${this.walletImages.slice(0,4).map(({src:me,walletName:Se})=>P`
            <wui-wallet-image
              size="inherit"
              imageSrc=${me}
              name=${Qi(Se)}
            ></wui-wallet-image>
          `)}
      ${U?[...Array(4-this.walletImages.length)].map(()=>P` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ih.styles=[St,uE],Nv([rt({type:Array})],ih.prototype,"walletImages",void 0),ih=Nv([Ot("wui-all-wallets-image")],ih);const Pv=w`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var wc=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};const dE={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let Ss=class extends Be{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const U=this.textVariant??dE[this.size];return P`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${U} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?P`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:P``}};Ss.styles=[St,nn,Pv],wc([rt()],Ss.prototype,"size",void 0),wc([rt({type:Boolean})],Ss.prototype,"disabled",void 0),wc([rt({type:Boolean})],Ss.prototype,"fullWidth",void 0),wc([rt({type:Boolean})],Ss.prototype,"loading",void 0),wc([rt()],Ss.prototype,"variant",void 0),wc([rt({type:Boolean})],Ss.prototype,"hasIconLeft",void 0),wc([rt({type:Boolean})],Ss.prototype,"hasIconRight",void 0),wc([rt()],Ss.prototype,"borderRadius",void 0),wc([rt()],Ss.prototype,"textVariant",void 0),Ss=wc([Ot("wui-button")],Ss);const Xc=xe`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,fE=w`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var kv=function(Ce,U,me,Se){var ze,Le=arguments.length,pe=Le<3?U:null===Se?Se=Object.getOwnPropertyDescriptor(U,me):Se;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)pe=Reflect.decorate(Ce,U,me,Se);else for(var Je=Ce.length-1;Je>=0;Je--)(ze=Ce[Je])&&(pe=(Le<3?ze(pe):Le>3?ze(U,me,pe):ze(U,me))||pe);return Le>3&&pe&&Object.defineProperty(U,me,pe),pe};let oh=class extends Be{constructor(){super(...arguments),this.type="wallet"}render(){return P`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?P` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Xc}`:P`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};oh.styles=[St,nn,fE],kv([rt()],oh.prototype,"type",void 0),oh=kv([Ot("wui-card-select-loader")],oh);const sa=xe`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,hE=xe`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Lv=w`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
  }

  wui-icon {
  }
  button {
