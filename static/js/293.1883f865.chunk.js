"use strict";(self.webpackChunkklub=self.webpackChunkklub||[]).push([[293],{8710:function(e,n,t){t.d(n,{Z:function(){return j}});var a=t(1413),l=t(1889),i=t(3967),r=t(5193),s=t(7621),c=t(6647),o=t(4554),u=t(9504),d=t(890),h=t(3767),g=t(1918),p=t(3726),Z=t(249),x=t(184),m=function(){var e=["rgba(254, 163, 170, 0.3)","rgba(248, 184, 139, 0.3)","rgba(250, 248, 13, 0.3)","rgba(186, 237, 145, 0.3)","rgba(178, 206, 254, 0.3)","rgba(242, 162, 232, 0.3)"];return e[Math.floor(Math.random()*e.length)]};var f=function(e){var n=e.id,t=e.name,a=e.category,l=e.type,f=(0,i.Z)(),j=(0,r.Z)(f.breakpoints.up("sm"));return(0,x.jsx)(s.Z,{children:(0,x.jsxs)(c.Z,{href:"/club/".concat(n),sx:{display:"flex",flexDirection:j?"column":"row"},children:[(0,x.jsx)(o.Z,{width:j?"100%":"90px",height:"90px",sx:{backgroundColor:m()}}),(0,x.jsxs)(u.Z,{sx:{flex:1},children:[(0,x.jsx)(d.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t}),j&&(0,x.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}),(0,x.jsxs)(h.Z,{direction:"row",justifyContent:"flex-start",spacing:1,sx:{marginTop:f.spacing(1)},children:[(0,x.jsx)(g.Z,{label:Z.Z[l],size:"small",sx:{padding:f.spacing(.5),fontSize:j?13:11}}),(0,x.jsx)(g.Z,{label:p.Z[a],size:"small",sx:{padding:f.spacing(.5),fontSize:j?13:11}})]})]})]})})};var j=function(e){var n=e.clubs;return(0,x.jsx)(l.ZP,{container:!0,spacing:2,children:n&&n.map((function(e){return(0,x.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,x.jsx)(f,(0,a.Z)({},e))},"".concat(e.id," ").concat(e.name))}))})}},8418:function(e,n,t){var a=t(6934),l=t(4554),i=t(1614),r=t(184),s=(0,a.ZP)(l.Z)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(3),";\n")}));n.Z=function(e){var n=e.children;return(0,r.jsx)(s,{className:"MuiPageTitle-wrapper",children:(0,r.jsx)(i.Z,{maxWidth:"lg",children:n})})}},6293:function(e,n,t){t.r(n);var a=t(7762),l=t(1413),i=t(9439),r=t(5403),s=t(3967),c=t(5193),o=t(1889),u=t(890),d=t(4554),h=t(8096),g=t(8029),p=t(3466),Z=t(3400),x=t(1614),m=t(3767),f=t(4925),j=t(5594),v=t(3786),b=t(6088),y=t(3263),C=t(6951),I=t(2791),T=t(298),S=t(6907),k=t(3504),w=t(8710),E=t(8418),P=t(3726),N=t(249),z=t(184);n.default=function(){var e,n,t,L,O,R=(0,k.lr)(),U=(0,i.Z)(R,2),B=U[0],D=U[1],A=(0,I.useState)(null),W=(0,i.Z)(A,2),M=W[0],_=W[1],q=(0,T.cl)(),V=(0,s.Z)(),F=(0,c.Z)(V.breakpoints.up("sm")),G=(0,I.useState)({name:null!==(e=B.get("name"))&&void 0!==e?e:"",category:null!==(n=B.get("category"))&&void 0!==n?n:"",type:null!==(t=B.get("type"))&&void 0!==t?t:"",page:B.has("page")?parseInt(B.get("page")):null}),Y=(0,i.Z)(G,2),H=Y[0],J=Y[1],K=(0,C.Ds)().enqueueSnackbar;return(0,I.useEffect)((function(){var e=Object.assign({},H.name?{name:H.name}:null,H.category?{category:H.category}:null,H.type?{type:H.type}:null,H.page?{page:H.page}:null);D(e)}),[H]),(0,I.useEffect)((function(){var e,n=(0,a.Z)(B);try{for(n.s();!(e=n.n()).done;){var t=(0,i.Z)(e.value,2),l=t[0],r=t[1];B.set(l,encodeURIComponent(r))}}catch(s){n.e(s)}finally{n.f()}y.Z.get("".concat("https://54.243.183.19.nip.io","/search/clubs?").concat(B.toString(),"&count=").concat(encodeURIComponent(F?20:10)),{headers:{Authorization:q()}}).then((function(e){e.data.clubs.length>0?_(e.data):K("\uc8fc\uc5b4\uc9c4 \uc870\uac74\uc5d0 \ud574\ub2f9\ud558\ub294 \ub3d9\uc544\ub9ac\uac00 \uc5c6\uc5b4\uc694 T.T",{variant:"warning"})})).catch((function(e){var n,t;return K(null!==(n=null===(t=e.response.data)||void 0===t?void 0:t.message)&&void 0!==n?n:"\uc11c\ubc84\uc5d0\uc11c \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c \uac83 \uac19\uc544\uc694. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694",{variant:"error"})}))}),[B]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(S.ql,{children:(0,z.jsx)("title",{children:"\uac80\uc0c9 \uacb0\uacfc"})}),(0,z.jsxs)(E.Z,{children:[(0,z.jsx)(o.ZP,{container:!0,alignItems:"center",children:(0,z.jsxs)(o.ZP,{item:!0,children:[(0,z.jsx)(u.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"\uac80\uc0c9 \uacb0\uacfc"}),(0,z.jsx)(u.Z,{variant:"subtitle2",children:"\ud0a4\uc6cc\ub4dc\uc640 \uce74\ud14c\uace0\ub9ac, \ubd84\ub958\ub97c \ud65c\uc6a9\ud574 \uc6d0\ud558\ub294 \ub3d9\uc544\ub9ac\ub97c \ucc3e\uc544\ubcf4\uc138\uc694"})]})}),(0,z.jsx)(d.Z,{component:"form",onSubmit:function(e){e.preventDefault();var n=document.getElementById("search");J((0,l.Z)((0,l.Z)({},H),{},{name:n.value,page:null}))},children:(0,z.jsx)(h.Z,{variant:"outlined",fullWidth:!0,sx:{marginTop:2,backgroundColor:"white"},children:(0,z.jsx)(g.Z,{id:"search",type:"search",placeholder:"\ub3d9\uc544\ub9ac \uc774\ub984\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694",defaultValue:H.name,endAdornment:(0,z.jsx)(p.Z,{position:"end",children:(0,z.jsx)(Z.Z,{"aria-label":"Search clubs",type:"submit",edge:"end",children:(0,z.jsx)(r.Z,{})})})})})})]}),(0,z.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:[(0,z.jsxs)(m.Z,{width:"100%",direction:F?"row":"column",spacing:1,justifyContent:"flex-end",sx:{marginBottom:3},children:[(0,z.jsxs)(h.Z,{size:"small",fullWidth:!F,children:[(0,z.jsx)(f.Z,{id:"category-label",children:"\uce74\ud14c\uace0\ub9ac"}),(0,z.jsxs)(j.Z,{labelId:"category-label",id:"category",label:"\uce74\ud14c\uace0\ub9ac",value:H.category,onChange:function(e){return J((0,l.Z)((0,l.Z)({},H),{},{category:e.target.value,page:null}))},sx:{minWidth:"180px"},children:[(0,z.jsx)(v.Z,{value:"",children:"\uc120\ud0dd\ud558\uc9c0 \uc54a\uc74c"}),P.Z&&Object.keys(P.Z).map((function(e){return(0,z.jsx)(v.Z,{value:e,children:P.Z[e]},e)}))]})]}),(0,z.jsxs)(h.Z,{size:"small",fullWidth:!F,children:[(0,z.jsx)(f.Z,{id:"type-label",children:"\ubd84\ub958"}),(0,z.jsxs)(j.Z,{labelId:"type-label",id:"type",label:"\ubd84\ub958",value:H.type,onChange:function(e){return J((0,l.Z)((0,l.Z)({},H),{},{type:e.target.value,page:null}))},sx:{minWidth:"180px"},children:[(0,z.jsx)(v.Z,{value:"",children:"\uc120\ud0dd\ud558\uc9c0 \uc54a\uc74c"}),N.Z&&Object.keys(N.Z).map((function(e){return(0,z.jsx)(v.Z,{value:e,children:N.Z[e]},e)}))]})]})]}),(0,z.jsx)(w.Z,{clubs:null===M||void 0===M?void 0:M.clubs}),(0,z.jsx)(b.Z,{page:null!==(L=H.page)&&void 0!==L?L:1,count:null!==(O=null===M||void 0===M?void 0:M.numPages)&&void 0!==O?O:1,size:F?"medium":"small",onChange:function(e,n){return J((0,l.Z)((0,l.Z)({},H),{},{page:n}))},sx:{my:3}})]})]})}},3726:function(e,n){n.Z={POLITICS:"\uc815\uce58/\uc0ac\ud68c",RELIGION:"\uc885\uad50",VOLUNTEER:"\ubd09\uc0ac",SCIENCE:"\uc21c\uc218\uacfc\ud559",IT:"IT/\uacf5\ud559",ARTSANDSPORTS:"\uc608\uccb4\ub2a5",STUDY:"\uc2a4\ud130\ub514"}},249:function(e,n){n.Z={UNION_CLUB:"\uc5f0\ud569 \ub3d9\uc544\ub9ac",CENTRAL_CLUB:"\uc911\uc559 \ub3d9\uc544\ub9ac",DEPARTMENT_CLUB:"\uacfc \ub3d9\uc544\ub9ac"}}}]);
//# sourceMappingURL=293.1883f865.chunk.js.map