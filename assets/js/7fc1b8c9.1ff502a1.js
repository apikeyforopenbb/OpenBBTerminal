"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62432],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,s(s({ref:e},p),{},{components:n})):a.createElement(k,s({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44747:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Sector and Industry Analysis",keywords:["sector, stock, industry, analysis, country, pie, chart, analyze"],excerpt:"This guide introduces the SIA SDK in the context of the OpenBB SDK."},s=void 0,o={unversionedId:"guides/guides/stocks/sia",id:"guides/guides/stocks/sia",title:"Sector and Industry Analysis",description:"The SIA module provides programmatic access to the commands from within the",source:"@site/content/sdk/guides/guides/stocks/sia.md",sourceDirName:"guides/guides/stocks",slug:"/guides/guides/stocks/sia",permalink:"/sdk/guides/guides/stocks/sia",draft:!1,tags:[],version:"current",frontMatter:{title:"Sector and Industry Analysis",keywords:["sector, stock, industry, analysis, country, pie, chart, analyze"],excerpt:"This guide introduces the SIA SDK in the context of the OpenBB SDK."},sidebar:"tutorialSidebar",previous:{title:"Quantitative Analysis",permalink:"/sdk/guides/guides/stocks/quantitative-analysis"},next:{title:"Technical Analysis",permalink:"/sdk/guides/guides/ta"}},l={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"cpci_chart",id:"cpci_chart",level:3},{value:"industries",id:"industries",level:3},{value:"stocks_data",id:"stocks_data",level:3}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The SIA module provides programmatic access to the commands from within the\nOpenBB Terminal. Import the OpenBB SDK module, and then access the functions\nsimilarly to how the Terminal menus are navigated. The code completion will be\nactivated upon entering ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb.sia")," \u200b"),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"\u200b The examples provided below will assume that the following import block is\nincluded at the beginning of the Python script or Notebook file: \u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,r.kt)("p",null,"\u200b A brief description below highlights the main Functions and Modules available\nin the SIA SDK"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.filter_stocks"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"generates a list of tickers filtered on inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.cpci"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"companies per Country based on Industry and Market Cap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.cpcs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"companies per Country based on Sector and Market Cap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.cpic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"companies per Industry based on Country and Market Cap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.cpis"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"companies per Industry based on Sector and Market Cap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.cps"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"companies per Sector based on Country and Market Cap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.countries"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"lists all countries valid for selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.industries"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"lists all industries valid for selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.maketcap"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"lists all marketcaps valid for selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.sectors"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"lists all sectors valid for selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.sia.stocks_data"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"historics financial statement information")))),(0,r.kt)("p",null,"Alteratively you can print the contents of the SIA SDK with: \u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.sia)\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"cpci_chart"},"cpci_chart"),(0,r.kt)("p",null,"\u200b Creates a pie chart with information about the sector and market cap provided.\nThis allows you to better understand which countries the sector is centered in \u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.sia.cpci_chart()\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72827203/202655235-eb4bf75e-852b-4128-8680-d99864358c73.png",alt:"CPCI Chart"})),(0,r.kt)("h3",{id:"industries"},"industries"),(0,r.kt)("p",null,"Creates a list of all industries that can be selected for other commands. Also\nallows users to filter based on certain characteristics \u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.sia.industries(country="Germany", sector="Healthcare")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"['Biotechnology', 'Diagnostics & Research', 'Drug Manufacturers - General',\n 'Drug Manufacturers - Major', 'Drug Manufacturers - Specialty & Generic', 'Drugs - Generic',\n 'Health Information Services', 'Hospitals', 'Medical Care Facilities',\n 'Medical Devices', 'Medical Distribution', 'Medical Instruments & Supplies']\n")),(0,r.kt)("h3",{id:"stocks_data"},"stocks_data"),(0,r.kt)("p",null,"Creates a list of tickers filtered based on the given parameters \u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.sia.filter_stocks(country="Germany", industry="Auto Parts")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"['CTTAF', 'CTTAY', 'HLKHF', 'HLLGY', 'KNRRY', 'VOAXF']\n")))}d.isMDXComponent=!0}}]);