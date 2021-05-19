(self.webpackChunkwedding_template=self.webpackChunkwedding_template||[]).push([[890,997,49,420],{838:function(e,t,n){"use strict";var a=n(1253),r=n(2122),o=n(7294),i=n(5505),c=n(882),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=o.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,p=e.className,u=e.component,m=void 0===u?"div":u,g=e.container,h=void 0!==g&&g,f=e.direction,x=void 0===f?"row":f,y=e.item,v=void 0!==y&&y,b=e.justify,w=void 0===b?"flex-start":b,Z=e.lg,E=void 0!==Z&&Z,S=e.md,N=void 0!==S&&S,C=e.sm,j=void 0!==C&&C,W=e.spacing,k=void 0===W?0:W,B=e.wrap,I=void 0===B?"wrap":B,M=e.xl,z=void 0!==M&&M,R=e.xs,A=void 0!==R&&R,G=e.zeroMinWidth,D=void 0!==G&&G,P=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=(0,i.Z)(d.root,p,h&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],v&&d.item,D&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==j&&d["grid-sm-".concat(String(j))],!1!==N&&d["grid-md-".concat(String(N))],!1!==E&&d["grid-lg-".concat(String(E))],!1!==z&&d["grid-xl-".concat(String(z))]);return o.createElement(m,(0,r.Z)({className:T,ref:t},P))})),u=(0,c.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.Z=u},8063:function(e,t,n){"use strict";var a=n(1253),r=n(2122),o=n(7294),i=n(5505),c=n(882),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,p=void 0!==d&&d,u=e.elevation,m=void 0===u?1:u,g=e.variant,h=void 0===g?"elevation":g,f=(0,a.Z)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(l,(0,r.Z)({className:(0,i.Z)(n.root,c,"outlined"===h?n.outlined:n["elevation".concat(m)],!p&&n.rounded),ref:t},f))}));t.Z=(0,c.Z)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),(0,r.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},453:function(e,t,n){"use strict";var a=n(2122),r=n(1253),o=n(7294),i=n(5505),c=n(882),s=n(1664),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=o.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,d=e.classes,p=e.className,u=e.color,m=void 0===u?"initial":u,g=e.component,h=e.display,f=void 0===h?"initial":h,x=e.gutterBottom,y=void 0!==x&&x,v=e.noWrap,b=void 0!==v&&v,w=e.paragraph,Z=void 0!==w&&w,E=e.variant,S=void 0===E?"body1":E,N=e.variantMapping,C=void 0===N?l:N,j=(0,r.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),W=g||(Z?"p":C[S]||l[S])||"span";return o.createElement(W,(0,a.Z)({className:(0,i.Z)(d.root,p,"inherit"!==S&&d[S],"initial"!==m&&d["color".concat((0,s.Z)(m))],b&&d.noWrap,y&&d.gutterBottom,Z&&d.paragraph,"inherit"!==c&&d["align".concat((0,s.Z)(c))],"initial"!==f&&d["display".concat((0,s.Z)(f))]),ref:t},j))}));t.Z=(0,c.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},1664:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(2192);function r(e){if("string"!=typeof e)throw new Error((0,a.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},5733:function(e,t,n){"use strict";n.r(t);var a=n(838),r=n(7294);t.default=function(){return r.createElement(a.Z,{item:!0,container:!0,xs:12,md:6,alignItems:"center",justify:"center",className:"photo-box"},r.createElement(a.Z,{item:!0,className:"box"},r.createElement("img",{className:"photo photo1"})),r.createElement(a.Z,{item:!0,className:"box"},r.createElement("img",{className:"photo photo2"})),r.createElement(a.Z,{item:!0,className:"box"},r.createElement("img",{className:"photo photo3"})))}},8675:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(8063),o=n(453);t.default=function(e){return a.createElement(r.Z,{className:"paper"},a.createElement(o.Z,{variant:"h2",color:"secondary"},"Schedule"),e.schedule?e.schedule.map((function(e){return a.createElement("h4",{className:"schedule-body-text"},e.time," - ",e.event)})):null)}},5143:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(838),o=n(5733),i=n(8675);t.default=function(e){return e?a.createElement("section",{id:"schedule"},a.createElement(r.Z,{container:!0,alignItems:"center",justify:"center",direction:"row",className:"schedule-row"},a.createElement(r.Z,{item:!0,xs:12,md:6},a.createElement(i.default,{schedule:e.schedule})),a.createElement(o.default,null))):null}}}]);
//# sourceMappingURL=component---src-pages-components-schedule-section-js-ee9bb0ae1092be356f7a.js.map