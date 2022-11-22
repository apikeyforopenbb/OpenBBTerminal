"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4503],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},S={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},D=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),D=p(t),s=a,m=D["".concat(o,".").concat(s)]||D[s]||S[s]||c;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=D;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<c;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}D.displayName="MDXCreateElement"},48851:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>S,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const c={title:"price",description:"OpenBB Terminal Function"},l="price",i={unversionedId:"reference/cryptocurrency/price",id:"reference/cryptocurrency/price",title:"price",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/cryptocurrency/price.md",sourceDirName:"reference/cryptocurrency",slug:"/reference/cryptocurrency/price",permalink:"/terminal/reference/cryptocurrency/price",draft:!1,tags:[],version:"current",frontMatter:{title:"price",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"wfpe",permalink:"/terminal/reference/cryptocurrency/overview/wfpe"},next:{title:"prt",permalink:"/terminal/reference/cryptocurrency/prt"}},o={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function S(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"price"},"price"),(0,a.kt)("p",null,"Display price and interval of confidence in real-time. ","[Source: Pyth]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: price -s SYMBOL\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol of coin to load data for, ~100 symbols are available"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"AAVE-USD, ADA-USD, ALGO-USD, ANC-USD, APE-USD, ATLAS-USD, ATOM-USD, AVAX-USD, BCH-USD, BETH-USD, BNB-USD, BRZ-USD, BTC-USD, BUSD-USD, C98-USD, COPE-USD, CUSD-USD, DOGE-USD, DOT-USD, ETH-USD, FIDA-USD, FTM-USD, FTT-USD, GMT-USD, GOFX-USD, HXRO-USD, INJ-USD, JET-USD, LTC-USD, LUNA-USD, LUNC-USD, MATIC-USD, MER-USD, MIR-USD, MNGO-USD, MSOL-USD, NEAR-USD, ONE-USD, ORCA-USD, PAI-USD, PORT-USD, RAY-USD, SBR-USD, SCNSOL-USD, SLND-USD, SNY-USD, SOL-USD, SRM-USD, STEP-USD, STSOL-USD, TUSD-USD, USDC-USD, USDT-USD, USTC-USD, VAI-USD, XVS-USD, ZBC-USD")))),(0,a.kt)("hr",null))}S.isMDXComponent=!0}}]);