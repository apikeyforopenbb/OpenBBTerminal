"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40220],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),c=a,b=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(b,o(o({ref:e},p),{},{components:n})):r.createElement(b,o({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90122:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(65099),o=n(85162);const i={title:"topbuys",description:"OpenBB SDK Function"},u="topbuys",s={unversionedId:"reference/stocks/gov/topbuys",id:"reference/stocks/gov/topbuys",title:"topbuys",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/gov/topbuys.md",sourceDirName:"reference/stocks/gov",slug:"/reference/stocks/gov/topbuys",permalink:"/sdk/reference/stocks/gov/topbuys",draft:!1,tags:[],version:"current",frontMatter:{title:"topbuys",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"qtrcontracts",permalink:"/sdk/reference/stocks/gov/qtrcontracts"},next:{title:"toplobbying",permalink:"/sdk/reference/stocks/gov/toplobbying"}},p={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:m};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topbuys"},"topbuys"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get top buy government trading ","[Source: quiverquant.com]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L227"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.gov.topbuys(gov_type: str = "congress", past_transactions_months: int = 6)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gov_type"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of government data between: congress, senate and house"),(0,a.kt)("td",{parentName:"tr",align:null},"congress"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of months to get trading for"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"DataFrame of top government buy trading")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Top buy government trading ","[Source: quiverquant.com]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L79"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.gov.topbuys_chart(gov_type: str = "congress", past_transactions_months: int = 6, limit: int = 10, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gov_type"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of government data between: congress, senate and house"),(0,a.kt)("td",{parentName:"tr",align:null},"congress"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of months to get trading for"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of tickers to show"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Display raw data"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}c.isMDXComponent=!0},85162:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:n,className:o}=t;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},e)}},65099:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),s=n(12466);const p="tabItem_hGfb";var m=n(16550);function d(t){var e;const{lazy:n,block:o,defaultValue:d,values:c,groupId:b,className:k}=t,g=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??g.map((t=>{let{props:{value:e,label:n,attributes:r}}=t;return{value:e,label:n,attributes:r}})),y=(0,i.l)(f,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(e=g.find((t=>t.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==h&&!f.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[T,x]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=b){const t=v[b];null!=t&&t!==T&&f.some((e=>e.value===t))&&x(t)}const E=t=>{const e=t.currentTarget,n=O.indexOf(e),r=f[n].value;r!==T&&(w(e),x(r),null!=b&&N(b,String(r)))},D=t=>{var e;let n=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;n=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;n=O[e]??O[O.length-1];break}}null==(e=n)||e.focus()},{pathname:_}=(0,m.TH)();return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((t=>{let{value:e,label:n,attributes:o}=t;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>O.push(t),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",p,null==o?void 0:o.className,{"border-b-2 pointer-events-none":T===e,"cursor-pointer":T!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":T===e&&_.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":T===e&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":T!==e&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":T!==e&&_.startsWith("/terminal")})}),n??e)})),a.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),n?(0,a.cloneElement)(g.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function c(t){const e=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}}}]);