(self.webpackChunkwedding_template=self.webpackChunkwedding_template||[]).push([[215],{1293:function(e,t,a){"use strict";var o=a(2122),n=a(1253),i=a(6156),r=a(7294),l=a(5505),s=a(882),p=a(1664),c=r.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,c=void 0===s?"div":s,d=e.disableGutters,u=void 0!==d&&d,h=e.fixed,m=void 0!==h&&h,g=e.maxWidth,y=void 0===g?"lg":g,b=(0,n.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(c,(0,o.Z)({className:(0,l.Z)(a.root,i,m&&a.fixed,u&&a.disableGutters,!1!==y&&a["maxWidth".concat((0,p.Z)(String(y)))]),ref:t},b))}));t.Z=(0,s.Z)((function(e){return{root:(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var o=e.breakpoints.values[a];return 0!==o&&(t[e.breakpoints.up(a)]={maxWidth:o}),t}),{}),maxWidthXs:(0,i.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,i.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,i.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,i.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,i.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(c)},4850:function(e,t,a){"use strict";var o=a(2122),n=a(1253),i=a(7294),r=a(5505),l=a(1664),s=a(882),p=a(4095),c=a(1291),d=a(453),u=i.forwardRef((function(e,t){var a=e.classes,s=e.className,u=e.color,h=void 0===u?"primary":u,m=e.component,g=void 0===m?"a":m,y=e.onBlur,b=e.onFocus,f=e.TypographyClasses,v=e.underline,x=void 0===v?"hover":v,Z=e.variant,k=void 0===Z?"inherit":Z,w=(0,n.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),W=(0,p.Z)(),N=W.isFocusVisible,B=W.onBlurVisible,E=W.ref,R=i.useState(!1),C=R[0],S=R[1],L=(0,c.Z)(t,E);return i.createElement(d.Z,(0,o.Z)({className:(0,r.Z)(a.root,a["underline".concat((0,l.Z)(x))],s,C&&a.focusVisible,"button"===g&&a.button),classes:f,color:h,component:g,onBlur:function(e){C&&(B(),S(!1)),y&&y(e)},onFocus:function(e){N(e)&&S(!0),b&&b(e)},ref:L,variant:k},w))}));t.Z=(0,s.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(u)},453:function(e,t,a){"use strict";var o=a(2122),n=a(1253),i=a(7294),r=a(5505),l=a(882),s=a(1664),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},c=i.forwardRef((function(e,t){var a=e.align,l=void 0===a?"inherit":a,c=e.classes,d=e.className,u=e.color,h=void 0===u?"initial":u,m=e.component,g=e.display,y=void 0===g?"initial":g,b=e.gutterBottom,f=void 0!==b&&b,v=e.noWrap,x=void 0!==v&&v,Z=e.paragraph,k=void 0!==Z&&Z,w=e.variant,W=void 0===w?"body1":w,N=e.variantMapping,B=void 0===N?p:N,E=(0,n.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),R=m||(k?"p":B[W]||p[W])||"span";return i.createElement(R,(0,o.Z)({className:(0,r.Z)(c.root,d,"inherit"!==W&&c[W],"initial"!==h&&c["color".concat((0,s.Z)(h))],x&&c.noWrap,f&&c.gutterBottom,k&&c.paragraph,"inherit"!==l&&c["align".concat((0,s.Z)(l))],"initial"!==y&&c["display".concat((0,s.Z)(y))]),ref:t},E))}));t.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(c)},886:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var o=a(7294),n=a(1293),i=a(453),r=a(4850),l=a(5454),s=function(){return"undefined"!=typeof window?window.location.pathname:""},p=function(){var e=s();return o.createElement("footer",null,o.createElement(n.Z,{className:"footer-container"},o.createElement(l.default,null),o.createElement(i.Z,{className:"footer-text",variant:"body1"},"Chris VL-Wanek © ",(new Date).getFullYear()),o.createElement(r.Z,{href:"https://github.com/crvlwanek/wedding-template",underline:"none"},o.createElement(i.Z,{className:"footer-text",variant:"body1"},"View the GitHub Repo")),o.createElement(r.Z,{href:e+"#",underline:"none"},o.createElement(i.Z,{className:"footer-text",variant:"body1"},"Back to top"))))}}}]);
//# sourceMappingURL=component---src-pages-components-footer-js-9743d2f037104feb4dc5.js.map