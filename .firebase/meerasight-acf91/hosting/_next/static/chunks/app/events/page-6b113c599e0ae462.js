(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{3107:(t,e,r)=>{Promise.resolve().then(r.bind(r,8998)),Promise.resolve().then(r.bind(r,1348)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,6031,23))},8998:(t,e,r)=>{"use strict";r.d(e,{default:()=>f});var n=r(2115),o=r(3463),i=r(3166),a=r(1157),l=r(2611),s=r(2879),p=r(5155),u=r(2795),h=r(9617),g=r(6366);let y=(0,r(1045).A)("MuiBox",["root"]),c=(0,h.A)(),f=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:e,defaultTheme:r,defaultClassName:u="MuiBox-root",generateClassName:h}=t,g=(0,i.Ay)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(a.A);return n.forwardRef(function(t,n){let i=(0,s.A)(r),{className:a,component:y="div",...c}=(0,l.A)(t);return(0,p.jsx)(g,{as:y,ref:n,className:(0,o.A)(a,h?h(u):u),theme:e&&i[e]||i,...c})})}({themeId:g.A,defaultTheme:c,defaultClassName:y.root,generateClassName:u.A.generate})},1348:(t,e,r)=>{"use strict";r.d(e,{default:()=>x});var n=r(2115),o=r(3463),i=r(7123),a=r(2611),l=r(5155),s=r(2710),p=r(8330),u=r(314),h=r(7410),g=r(1628),y=r(1045),c=r(7157);function f(t){return(0,c.Ay)("MuiTypography",t)}(0,y.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);let d={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},m=a.A,A=t=>{let{align:e,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:l}=t,s={root:["root",a,"inherit"!==t.align&&"align".concat((0,h.A)(e)),r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,i.A)(s,f,l)},v=(0,s.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e["align".concat((0,h.A)(r.align))],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((0,p.A)(t=>{var e;let{theme:r}=t;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(t=>{let[e,r]=t;return"inherit"!==e&&r&&"object"==typeof r}).map(t=>{let[e,r]=t;return{props:{variant:e},style:r}}),...Object.entries(r.palette).filter((0,g.A)()).map(t=>{let[e]=t;return{props:{color:e},style:{color:(r.vars||r).palette[e].main}}}),...Object.entries((null===(e=r.palette)||void 0===e?void 0:e.text)||{}).filter(t=>{let[,e]=t;return"string"==typeof e}).map(t=>{let[e]=t;return{props:{color:"text".concat((0,h.A)(e))},style:{color:(r.vars||r).palette.text[e]}}}),{props:t=>{let{ownerState:e}=t;return"inherit"!==e.align},style:{textAlign:"var(--Typography-textAlign)"}},{props:t=>{let{ownerState:e}=t;return e.noWrap},style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:t=>{let{ownerState:e}=t;return e.gutterBottom},style:{marginBottom:"0.35em"}},{props:t=>{let{ownerState:e}=t;return e.paragraph},style:{marginBottom:16}}]}})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x=n.forwardRef(function(t,e){let{color:r,...n}=(0,u.b)({props:t,name:"MuiTypography"}),i=!d[r],a=m({...n,...i&&{color:r}}),{align:s="inherit",className:p,component:h,gutterBottom:g=!1,noWrap:y=!1,paragraph:c=!1,variant:f="body1",variantMapping:x=b,...w}=a,P={...a,align:s,color:r,className:p,component:h,gutterBottom:g,noWrap:y,paragraph:c,variant:f,variantMapping:x},B=h||(c?"p":x[f]||b[f])||"span",O=A(P);return(0,l.jsx)(v,{as:B,ref:e,className:(0,o.A)(O.root,p),...w,ownerState:P,style:{..."inherit"!==s&&{"--Typography-textAlign":s},...w.style}})})},7410:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=r(1999).A},1628:(t,e,r)=>{"use strict";function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e=>{let[,r]=e;return r&&function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("string"!=typeof t.main)return!1;for(let r of e)if(!t.hasOwnProperty(r)||"string"!=typeof t[r])return!1;return!0}(r,t)}}r.d(e,{A:()=>n})},2611:(t,e,r)=>{"use strict";r.d(e,{A:()=>a});var n=r(2181),o=r(3943);let i=t=>{let e={systemProps:{},otherProps:{}},r=t?.theme?.unstable_sxConfig??o.A;return Object.keys(t).forEach(n=>{r[n]?e.systemProps[n]=t[n]:e.otherProps[n]=t[n]}),e};function a(t){let e;let{sx:r,...o}=t,{systemProps:a,otherProps:l}=i(o);return e=Array.isArray(r)?[a,...r]:"function"==typeof r?(...t)=>{let e=r(...t);return(0,n.Q)(e)?{...a,...e}:a}:{...a,...r},{...l,sx:e}}},2879:(t,e,r)=>{"use strict";r.d(e,{A:()=>s});var n=r(5212),o=r(2115),i=r(896);let a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=o.useContext(i.T);return e&&0!==Object.keys(e).length?e:t},l=(0,n.A)(),s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return a(t)}},6031:()=>{}},t=>{var e=e=>t(t.s=e);t.O(0,[294,882,173,441,517,358],()=>e(3107)),_N_E=t.O()}]);