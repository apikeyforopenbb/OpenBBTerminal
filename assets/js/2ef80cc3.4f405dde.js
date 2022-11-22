"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Introduction to the Technical Analysis Menu",keywords:["technical","analysis","ta","t/a","intraday","daily","indicators","signals","average","moving","exponential","rsi","fibonacci","retracement","bollinger","heltner","accumulation","distribution","obv","on-balance","volume","volatility","trend","momentum","overlap","crypto","stocks","funds","etf","etfs"],date:"2022-06-17",type:"guides",status:"publish",excerpt:"This guide introduces the Technical Analysis menu, which is common across many sections of the OpenBB Terminal."},o=void 0,l={unversionedId:"guides/common/ta",id:"guides/common/ta",title:"Introduction to the Technical Analysis Menu",description:"The Technical Analysis menu offers the user a suite of tools for analyzing the",source:"@site/content/terminal/guides/common/ta.md",sourceDirName:"guides/common",slug:"/guides/common/ta",permalink:"/terminal/guides/common/ta",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction to the Technical Analysis Menu",keywords:["technical","analysis","ta","t/a","intraday","daily","indicators","signals","average","moving","exponential","rsi","fibonacci","retracement","bollinger","heltner","accumulation","distribution","obv","on-balance","volume","volatility","trend","momentum","overlap","crypto","stocks","funds","etf","etfs"],date:"2022-06-17",type:"guides",status:"publish",excerpt:"This guide introduces the Technical Analysis menu, which is common across many sections of the OpenBB Terminal."},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Quantitative Analysis Menu",permalink:"/terminal/guides/common/qa"},next:{title:"Introduction to Cryptocurrency",permalink:"/terminal/guides/crypto/"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Technical Analysis menu offers the user a suite of tools for analyzing the\ntechnical components of an asset's trading history. The menu can be found in\nmost wings of the Terminal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/cryptocurrency/",target:"_blank"},"Crypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Stocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/",target:"_blank"},"ETF")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/forex/",target:"blank"},"ForEx"))),(0,r.kt)("p",null,"The commands are divided by categories that define their purpose for\ngeneral-use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overlap - Moving averages"),(0,r.kt)("li",{parentName:"ul"},"Momentum - Oscillating signals"),(0,r.kt)("li",{parentName:"ul"},"Trend - Directional strength"),(0,r.kt)("li",{parentName:"ul"},"Volatility - Width of the price bands"),(0,r.kt)("li",{parentName:"ul"},"Volume - Singling out volume"),(0,r.kt)("li",{parentName:"ul"},"Custom - Fibonacci retracements")),(0,r.kt)("p",null,"All commands in this menu will rely on the interval and window chosen when"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/load/",target:"_blank"},"loading an asset for analysis"),". Refer to the directory tree on the left side of the page for information on individual commands. To get a better understanding of what these features are, and the formulas behind them, a number of sources should be consulted; but, a good starting point is",(0,r.kt)("a",{href:"https://www.investopedia.com/terms/t/technicalanalysis.asp",target:"_blank"},"Investopedia"),".",(0,r.kt)("h2",null,"How to use the Technical Analysis Menu"),(0,r.kt)("p",null,"To begin, enter the menu from one of the menus listed above by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"ta"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499113-02648936-f8d1-40ca-8ba3-036fb4324666.png",alt:"The Technical Analysis menu, with BTC loaded"})),(0,r.kt)("p",null,"Choose a beginning and end date to see a volume-weighted average price chart of\nthe loaded ticker. ",(0,r.kt)("inlineCode",{parentName:"p"},"vwap --start 2022-01-01 --end 2022-06-17")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499127-cc20f16c-dd68-4ce3-9d10-cd6ce762a346.png",alt:"BTC VWAP YTD"})),(0,r.kt)("p",null,"The Fibonacci retracements are drawn with"),(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Fibonacci_number",target:"_blank"},"`fib`"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499173-5d3dbdb7-8147-459b-88d3-7caae9102aa5.png",alt:"SPY Fibonacci retracement from the recent lower high"})),(0,r.kt)("p",null,"See the"),(0,r.kt)("a",{href:"https://www.investopedia.com/terms/o/onbalancevolume.asp",target:"_blank"},"on-balance volume")," for the time-period loaded.",(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499183-42d246d9-0a0f-4c76-8c4e-de22ad2e396d.png",alt:"OBV for ARKK YTD"})),(0,r.kt)("p",null,"The help dialogue for any feature is printed by attaching ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," to the command."),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recom")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"summary")," are commands available only with a stock loaded as the\nasset. ",(0,r.kt)("inlineCode",{parentName:"p"},"summary")," is a text description of the technical conditions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ta/ $ summary\nMSFT price has changed 1.29% in the last 3 days and 1.09% yesterday.\nRSI is less than 30 and the indicator is pointing downwards.\nAsset is in the oversold area.\nMACD is in the Bearish area and the histogram is moving upwards.\nMSFT price is trading below the 200-day SMA line and the SMA is trending down.\nThe asset price is between the Middle and the Lower Bollinger Bands.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recom")," projects buy & sell signals for the short-term."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499195-9d4f8604-dec9-453f-815d-6c89f2b8b216.png",alt:"Recommendations from T/A"})),(0,r.kt)("p",null,"Bollinger Bands with a 1-minute resolution for AMZN - ",(0,r.kt)("inlineCode",{parentName:"p"},"bbands")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499209-ec7eb606-bc86-4cb3-8375-a24b2c235085.png",alt:"AMZN Bollinger Bands"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499232-63412ad9-e74c-4f44-a0f3-8722d98a27c6.png",alt:"AMZN Bollinger Bands"})),(0,r.kt)("p",null,"The Accumulation/Distribution line of AMZN - ",(0,r.kt)("inlineCode",{parentName:"p"},"ad")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499247-e63f8f57-a06a-446b-bca3-0fe89258fd4b.png",alt:"AMZN Accumulation/Distribution Line"})),(0,r.kt)("p",null,"To play a demonstration of this menu in the OpenBB Terminal run,\n",(0,r.kt)("inlineCode",{parentName:"p"},"exe ta_demo.openbb"),", from the main menu."),(0,r.kt)("p",null,"Back to the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Introduction to Stocks"),".")}p.isMDXComponent=!0}}]);