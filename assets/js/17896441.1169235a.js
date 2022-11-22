"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27918],{69830:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ne});var n=a(67294),l=a(1944),s=a(902);const r=n.createContext(null);function c(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:l},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new s.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=o();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(86010),m=a(87524),u=a(87462),b=a(95999),p=a(39960);function g(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return n.createElement(p.Z,{className:(0,d.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function h(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(g,(0,u.Z)({},t,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(g,(0,u.Z)({},a,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=o();return n.createElement(h,{previous:e.previous,next:e.next})}var E=a(52263),f=a(94104),k=a(35281),N=a(60373),Z=a(74477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=L[e.versionMetadata.banner];return n.createElement(t,e)}function C(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(b.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(p.Z,{to:a,onClick:l},n.createElement(b.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:s}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,N.J)(s),{latestDocSuggestion:c,latestVersionSuggestion:o}=(0,f.Jo)(s),i=c??(m=o).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,k.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(_,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(C,{versionLabel:o.label,to:i.path,onClick:()=>r(o.name)})))}function x(e){let{className:t}=e;const a=(0,Z.E)();return a.banner?n.createElement(T,{className:t,versionMetadata:a}):null}function B(e){let{className:t}=e;const a=(0,Z.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,k.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(b.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){let{lastUpdatedBy:t}=e;return n.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:k.k.common.lastUpdated},n.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function H(e){let{className:t,...a}=e;return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(A,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function M(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:k.k.common.editThisPage},n.createElement(H,null),n.createElement(b.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const P="tag_zVej",I="tagRegular_sFm0",V="tagWithCount_h2kH";function S(e){let{permalink:t,label:a,count:l}=e;return n.createElement(p.Z,{href:t,className:(0,d.Z)(P,l?V:I)},a,l&&n.createElement("span",null,l))}const O="tags_jXut",D="tag_QGVx";function F(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(O,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:D},n.createElement(S,{label:t,permalink:a}))}))))}const z="lastUpdated_vwxv";function G(e){return n.createElement("div",{className:(0,d.Z)(k.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(F,e)))}function R(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,d.Z)(k.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(M,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",z)},(a||l)&&n.createElement(U,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:l})))}function W(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:s,tags:r}=e,c=r.length>0,i=!!(t||a||s);return c||i?n.createElement("footer",{className:(0,d.Z)(k.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(G,{tags:r}),i&&n.createElement(R,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:l})):null}var j=a(86043),q=a(38769);const $="tocCollapsibleButton_TO0P",J="tocCollapsibleButtonExpanded_MG3E";function Q(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",$,!t&&J,a.className)}),n.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const X="tocCollapsible_ETCw",K="tocCollapsibleContent_vkbj",Y="tocCollapsibleExpanded_sAul";function ee(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:s}=e;const{collapsed:r,toggleCollapsed:c}=(0,j.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(X,!r&&Y,a)},n.createElement(Q,{collapsed:r,onClick:c}),n.createElement(j.z,{lazy:!0,className:K,collapsed:r},n.createElement(q.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:s})))}const te="tocMobile_bxCs";var ae=a(16550);function ne(){const{toc:e,frontMatter:t}=o(),{pathname:a}=(0,ae.TH)();return a.startsWith("/sdk/reference/")?null:n.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(k.k.docs.docTocMobile,te)})}var le=a(70541);function se(){const{toc:e,frontMatter:t}=o();return n.createElement(le.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:k.k.docs.docTocDesktop})}var re=a(92503),ce=a(53458);function oe(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=o();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(k.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(re.Z,{as:"h1"},a)),n.createElement(ce.Z,null,t))}var ie=a(53438),de=a(48596),me=a(44996);function ue(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const be={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function pe(e){let{children:t,href:a,isLast:l}=e;const s="breadcrumbs__link";return l?n.createElement("span",{className:s,itemProp:"name"},t):a?n.createElement(p.Z,{className:s,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:s},t)}function ge(e){let{children:t,active:a,index:l,addMicrodata:s}=e;return n.createElement("li",(0,u.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function he(){const e=(0,me.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(p.Z,{"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",be.breadcrumbsItemLink),href:e},n.createElement(ue,{className:be.breadcrumbHomeIcon})))}function ve(){const e=(0,ie.s1)(),t=(0,de.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(k.k.docs.docBreadcrumbs,be.breadcrumbsContainer),"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(he,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(ge,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(pe,{href:t.href,isLast:l},t.label))})))):null}const Ee="docItemContainer_Djhp",fe="docItemCol_VOVn";function ke(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=o(),a=(0,m.i)(),l=e.hide_table_of_contents,s=!l&&t.length>0;return{hidden:l,mobile:s?n.createElement(ne,null):void 0,desktop:!s||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(se,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&fe)},n.createElement(x,null),n.createElement("div",{className:Ee},n.createElement("article",null,n.createElement(ve,null),n.createElement(B,null),a.mobile,n.createElement(oe,null,t),n.createElement(W,null)),n.createElement(v,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function Ne(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(c,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ke,null,n.createElement(a,null))))}},74477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>r});var n=a(67294),l=a(902);const s=n.createContext(null);function r(e){let{children:t,version:a}=e;return n.createElement(s.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(s);if(null===e)throw new l.i6("DocsVersionProvider");return e}},77362:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(86010),s=a(66505),r=a(19500);function c(e){let{children:t,className:a}=e;return n.createElement(s.Z,{as:"pre",tabIndex:0,className:(0,l.Z)(r.Z.codeBlockStandalone,"thin-scrollbar",a)},n.createElement("code",{className:r.Z.codeBlockLines},t))}},56918:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(67294),s=a(86010),r=a(86668),c=a(66412),o=a(37016),i=a(85448),d=a(23746),m=a(78397),u=a(15291),b=a(12601),p=a(66505),g=a(19500);function h(e){let{children:t,className:a="",metastring:h,title:v,showLineNumbers:E,language:f}=e;const{prism:{defaultLanguage:k,magicComments:N}}=(0,r.L)(),Z=f??(0,o.Vo)(a)??k,L=(0,c.p)(),_=(0,i.F)(),C=(0,o.bc)(h)||v,{lineClassNames:T,code:x}=(0,o.nZ)(t,{metastring:h,language:Z,magicComments:N}),B=E??(0,o.nt)(h);return l.createElement(p.Z,{as:"div",className:(0,s.Z)(a,Z&&!a.includes(`language-${Z}`)&&`language-${Z}`)},C&&l.createElement("div",{className:g.Z.codeBlockTitle},C),l.createElement("div",{className:g.Z.codeBlockContent},l.createElement(d.ZP,(0,n.Z)({},d.lG,{theme:L,code:x,language:Z??"text"}),(e=>{let{className:t,tokens:a,getLineProps:n,getTokenProps:r}=e;return l.createElement("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,s.Z)(t,g.Z.codeBlock,"thin-scrollbar")},l.createElement("code",{className:(0,s.Z)(g.Z.codeBlockLines,B&&g.Z.codeBlockLinesWithNumbering)},a.map(((e,t)=>l.createElement(m.Z,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:T[t],showLineNumbers:B})))))})),l.createElement("div",{className:g.Z.buttonGroup},(_.isEnabled||_.isCodeScrollable)&&l.createElement(b.Z,{className:g.Z.codeButton,onClick:()=>_.toggle(),isEnabled:_.isEnabled}),l.createElement(u.Z,{className:g.Z.codeButton,code:x}))))}},70541:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),s=a(86010),r=a(38769);const c="tableOfContents_jeP5";var o=a(16550);function i(e){let{className:t,...a}=e;const{pathname:i}=(0,o.TH)();return i.startsWith("/sdk/reference/")?null:l.createElement("div",{className:(0,s.Z)(c,"thin-scrollbar text-sm mt-[48px] xl:max-w-[216px]",t)},l.createElement("p",{className:"uppercase text-sm font-bold text-grey-600 dark:text-grey-200 tracking-widest mb-2"},"On this page"),l.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"text-grey-400 capitalize !no-underline",linkActiveClassName:"!text-white"})))}},38769:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),s=a(86668),r=a(39665),c=a(96841),o=a(86010);function i(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?"list-none ml-1 border-l border-grey-300 dark:border-grey-600 mt-2":"border-l border-grey-300 dark:border-grey-600 list-none pl-4"},t.map(((e,t)=>l.createElement("li",{key:e.id,className:(0,o.Z)({"pb-1":0===t,"py-1":0!==t,"pl-3":s})},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const d=l.memo(i);function m(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...b}=e;const p=(0,s.L)(),g=m??p.tableOfContents.minHeadingLevel,h=u??p.tableOfContents.maxHeadingLevel,v=(0,r.b)({toc:t,minHeadingLevel:g,maxHeadingLevel:h}),E=(0,l.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:g,maxHeadingLevel:h}}),[o,i,g,h]);return(0,c.S)(E),l.createElement(d,(0,n.Z)({toc:v,className:a,linkClassName:o},b))}},19500:(e,t,a)=>{a.d(t,{Z:()=>n});const n={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);