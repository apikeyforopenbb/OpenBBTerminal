"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"balance",description:"OpenBB Terminal Function"},i="balance",s={unversionedId:"reference/stocks/fundamental analysis/balance",id:"reference/stocks/fundamental analysis/balance",title:"balance",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/fundamental analysis/balance.md",sourceDirName:"reference/stocks/fundamental analysis",slug:"/reference/stocks/fundamental analysis/balance",permalink:"/terminal/reference/stocks/fundamental analysis/balance",draft:!1,tags:[],version:"current",frontMatter:{title:"balance",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"analysis",permalink:"/terminal/reference/stocks/fundamental analysis/analysis"},next:{title:"cal",permalink:"/terminal/reference/stocks/fundamental analysis/cal"}},o={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"balance"},"balance"),(0,r.kt)("p",null,"Prints a complete balance sheet statement over time. This can be either quarterly or annually. The following fields are expected: Accepted date, Account payables, Accumulated other comprehensive income loss, Cash and cash equivalents, Cash and short term investments, Common stock, Deferred revenue, Deferred revenue non current, Deferred tax liabilities non current, Filling date, Final link, Goodwill, Goodwill and intangible assets, Intangible assets, Inventory, Link, Long term debt, Long term investments, Net debt, Net receivables, Other assets, Other current assets, Other current liabilities, Other liabilities, Other non current assets, Other non current liabilities, Othertotal stockholders equity, Period, Property plant equipment net, Retained earnings, Short term debt, Short term investments, Tax assets, Tax payables, Total assets, Total current assets, Total current liabilities, Total debt, Total investments, Total liabilities, Total liabilities and stockholders equity, Total non current assets, Total non current liabilities, and Total stockholders equity. ","[Source: Alpha Vantage]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: balance [-q] [-r] [-p column]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b_quarter"),(0,r.kt)("td",{parentName:"tr",align:null},"Quarter fundamental data flag."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ratios"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows percentage change of values."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plot"),(0,r.kt)("td",{parentName:"tr",align:null},"Rows to plot, comma separated. (-1 represents invalid data)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"cash_and_cash_equivalents, other_short-term_investments, total_cash, net_receivables, inventory, other_current_assets, total_current_assets, gross_property, plant_and_equipment, accumulated_depreciation, net_property, plant_and_equipment, equity_and_other_investments, other_long-term_assets, total_non-current_assets, total_assets, current_debt, accounts_payable, deferred_revenues, other_current_liabilities, total_current_liabilities, long-term_debt, deferred_tax_liabilities, deferred_revenues, other_long-term_liabilities, total_non-current_liabilities, total_liabilities, common_stock, retained_earnings, accumulated_other_comprehensive_income, total_stockholders'_equity, total_liabilities_and_stockholders'_equity")))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);