"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"contracts",description:"OpenBB Terminal Function"},i="contracts",l={unversionedId:"reference/cryptocurrency/overview/contracts",id:"reference/cryptocurrency/overview/contracts",title:"contracts",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/cryptocurrency/overview/contracts.md",sourceDirName:"reference/cryptocurrency/overview",slug:"/reference/cryptocurrency/overview/contracts",permalink:"/terminal/reference/cryptocurrency/overview/contracts",draft:!1,tags:[],version:"current",frontMatter:{title:"contracts",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"ch",permalink:"/terminal/reference/cryptocurrency/overview/ch"},next:{title:"cr",permalink:"/terminal/reference/cryptocurrency/overview/cr"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contracts"},"contracts"),(0,a.kt)("p",null,"Gets all contract addresses for given platform. Provide platform id with -p/--platform parameter You can display only N number of smart contracts with --limit parameter. You can sort data by id, type, active, balance --sortby parameter and also with --reverse flag to sort descending. Displays: id, type, active, balance"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: contracts\n                 [-p {btc-bitcoin,eos-eos,eth-ethereum,xrp-xrp,bch-bitcoin-cash,xem-nem,neo-neo,xlm-stellar,etc-ethereum-classic,qtum-qtum,zec-zcash,vet-vechain,bts-bitshares,waves-waves,nxt-nxt,act-achain,ubq-ubiq,xcp-counterparty,ppc-peercoin,etp-metaverse-etp,signa-signa,omni-omni,trx-tron,bnb-binance-coin,ardr-ardor,ht-huobi-token,wan-wanchain,ftm-fantom,matic-polygon,afcash-africunia-bank,avax-avalanche,sol-solana,blvr-believer,cake-pancakeswap,bcna-bitcanna831,fsxu-flashx-ultra,chik-chickenkebab-finance,jgn-juggernaut7492,crx-cryptex,whirl-whirl-finance,etl-etherlite,eubi-eubi-token,swam-swapmatic-token,shells-shells,levelg-levelg,lyr-lyra,ants-fireants,berry-berry,drc-deracoin,sxcc-southxchange-coin,vega-vega-coin,xgk-goldkash,ptd-peseta-digital,mmt-moments-market,gems-algogems,kilt-kilt-protocol,harl-harmonylauncher,alph-alephium,ride-holoride,fcon-spacefalcon,love-diamond-love,kint-kintsugi,astr-astar,chum-chum-coin,polyx-polymesh,kfl-kaafila,evmos-evmos,wtip-worktips9618,xeta-xana,arn-arenum,fayre-fayre,mart-artmeta,azit-azit,fcd-freshcut-diamond,pbt-property-blockchain-trade,fww-farmers-world-wood,cand-canary-dollar,srs-sirius-finance,xden-xiden,arz-arize,hash-provenance-blockchain,joy-drawshop-kingdom-reverse-joystick,orbc-orbis,b3x-bnext-b3x,xmp-maptcoin,gomt-gomeat,pro-proton-coin,slrr-solarr,xgbl-xungible,utg-ultronglow,oxp-onxrp,algx-algodex,bridge-octus-bridge,cvshot-cvshots,xspectar-xspectar,blkz-blocksworkz,sva-solvia,bdlt-bdlt,ogy-origyn-foundation,digau-dignity-gold,trx3l-trx3l,eth3s-eth3s,intr-interlay,crom-crome,tutl-tutela,cc-cloudcoin,ztg-zeitgeist,film-filmcredits,znt-zenith-finance,bnd-bened,mddn-modden234234234,wei-wei,dcrn-decred-next,omc-omchain,turn-big-turn,cmp-caduceus,pmg-pmg-coin,xx-xx-network,neer-metaversenetwork-pioneer,tao-fusotao,cic-crazy-internet-coin,bsx-basilisk,cuc-cuprum-coin,ulx-ultron,fury-fanfury,vxxl-vxxl,spex-stepex,log-logos,metal-metal-blockchain,nai-natiol,ling-lingose}]\n                 [-l LIMIT] [-s {id,type,active}] [-r]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platform"),(0,a.kt)("td",{parentName:"tr",align:null},"Blockchain platform like eth-ethereum"),(0,a.kt)("td",{parentName:"tr",align:null},"eth-ethereum"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"btc-bitcoin, eos-eos, eth-ethereum, xrp-xrp, bch-bitcoin-cash, xem-nem, neo-neo, xlm-stellar, etc-ethereum-classic, qtum-qtum, zec-zcash, vet-vechain, bts-bitshares, waves-waves, nxt-nxt, act-achain, ubq-ubiq, xcp-counterparty, ppc-peercoin, etp-metaverse-etp, signa-signa, omni-omni, trx-tron, bnb-binance-coin, ardr-ardor, ht-huobi-token, wan-wanchain, ftm-fantom, matic-polygon, afcash-africunia-bank, avax-avalanche, sol-solana, blvr-believer, cake-pancakeswap, bcna-bitcanna831, fsxu-flashx-ultra, chik-chickenkebab-finance, jgn-juggernaut7492, crx-cryptex, whirl-whirl-finance, etl-etherlite, eubi-eubi-token, swam-swapmatic-token, shells-shells, levelg-levelg, lyr-lyra, ants-fireants, berry-berry, drc-deracoin, sxcc-southxchange-coin, vega-vega-coin, xgk-goldkash, ptd-peseta-digital, mmt-moments-market, gems-algogems, kilt-kilt-protocol, harl-harmonylauncher, alph-alephium, ride-holoride, fcon-spacefalcon, love-diamond-love, kint-kintsugi, astr-astar, chum-chum-coin, polyx-polymesh, kfl-kaafila, evmos-evmos, wtip-worktips9618, xeta-xana, arn-arenum, fayre-fayre, mart-artmeta, azit-azit, fcd-freshcut-diamond, pbt-property-blockchain-trade, fww-farmers-world-wood, cand-canary-dollar, srs-sirius-finance, xden-xiden, arz-arize, hash-provenance-blockchain, joy-drawshop-kingdom-reverse-joystick, orbc-orbis, b3x-bnext-b3x, xmp-maptcoin, gomt-gomeat, pro-proton-coin, slrr-solarr, xgbl-xungible, utg-ultronglow, oxp-onxrp, algx-algodex, bridge-octus-bridge, cvshot-cvshots, xspectar-xspectar, blkz-blocksworkz, sva-solvia, bdlt-bdlt, ogy-origyn-foundation, digau-dignity-gold, trx3l-trx3l, eth3s-eth3s, intr-interlay, crom-crome, tutl-tutela, cc-cloudcoin, ztg-zeitgeist, film-filmcredits, znt-zenith-finance, bnd-bened, mddn-modden234234234, wei-wei, dcrn-decred-next, omc-omchain, turn-big-turn, cmp-caduceus, pmg-pmg-coin, xx-xx-network, neer-metaversenetwork-pioneer, tao-fusotao, cic-crazy-internet-coin, bsx-basilisk, cuc-cuprum-coin, ulx-ultron, fury-fanfury, vxxl-vxxl, spex-stepex, log-logos, metal-metal-blockchain, nai-natiol, ling-lingose")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"display N number records"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column"),(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"id, type, active")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in ascending order by default. Reverse flag will sort it in an descending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);