"use strict";(self.webpackChunkklub=self.webpackChunkklub||[]).push([[700],{8418:function(n,e,i){var t=i(6934),a=i(4554),s=i(1614),c=i(184),l=(0,t.ZP)(a.Z)((function(n){var e=n.theme;return"\n        padding: ".concat(e.spacing(3),";\n")}));e.Z=function(n){var e=n.children;return(0,c.jsx)(l,{className:"MuiPageTitle-wrapper",children:(0,c.jsx)(s.Z,{maxWidth:"lg",children:e})})}},6700:function(n,e,i){i.r(e);var t=i(9439),a=i(3967),s=i(5193),c=i(1889),l=i(890),r=i(4554),d=i(1918),o=i(1614),h=i(7621),u=i(6151),x=i(3263),Z=i(6951),j=i(2791),p=i(298),g=i(6907),f=i(6871),m=i(8418),v=i(249),b=i(184);e.default=function(){var n,e=(0,j.useState)(),i=(0,t.Z)(e,2),y=i[0],D=i[1],w=(0,j.useState)(),C=(0,t.Z)(w,2),k=C[0],L=C[1],S=(0,f.UO)(),z=(0,f.s0)(),A=(0,Z.Ds)().enqueueSnackbar,I=(0,a.Z)(),N=(0,s.Z)(I.breakpoints.up("sm")),P=(0,p.fC)(),T=k?new Date(k.startAt):new Date,U=k?new Date(k.endAt):new Date,_=new Date,B=k?new Date(k.endAt):new Date;B.setDate(B.getDate()+1);var E=!!k&&(T<=_&&_<=B),q=(null===(n=P())||void 0===n?void 0:n.clubs.filter((function(n){return n.id===parseInt(S.id)})).length)>0;return(0,j.useEffect)((function(){x.Z.get("".concat("https://54.243.183.19.nip.io","/club?clubId=").concat(S.id)).then((function(n){D(n.data)})).catch((function(n){var e;A("".concat(null===(e=n.response.data)||void 0===e?void 0:e.message),{variant:"error"}),z(-1)})),x.Z.get("".concat("https://54.243.183.19.nip.io","/club/recruit?clubId=").concat(S.id)).then((function(n){L(n.data)})).catch((function(n){var e;A("".concat(null===(e=n.response.data)||void 0===e?void 0:e.message),{variant:"error"})}))}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.ql,{children:(0,b.jsx)("title",{children:"\ud504\ub85c\ud544"})}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Z,{children:(0,b.jsxs)(c.ZP,{container:!0,children:[y&&(0,b.jsxs)(c.ZP,{item:!0,xs:12,md:9,children:[(0,b.jsx)(l.Z,{variant:"h3",children:y.name}),(0,b.jsx)(l.Z,{variant:"subtitle2",gutterBottom:!0,children:y.description}),(0,b.jsxs)(r.Z,{children:[v.Z[y.type]&&(0,b.jsx)(d.Z,{label:v.Z[y.type],size:"small",sx:{padding:I.spacing(.5),fontSize:N?13:11}}),y.category&&(0,b.jsx)(d.Z,{label:y.category,size:"small",sx:{padding:I.spacing(.5),fontSize:N?13:11,marginLeft:1}}),y.location&&(0,b.jsx)(d.Z,{label:y.location,size:"small",sx:{padding:I.spacing(.5),fontSize:N?13:11,marginLeft:1}})]})]}),k&&(0,b.jsxs)(c.ZP,{item:!0,xs:12,md:3,mt:1,display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,b.jsx)(r.Z,{children:(0,b.jsxs)(l.Z,{variant:"h4",children:["\ubaa8\uc9d1 \uc2dc\uc791 ",(0,b.jsx)(l.Z,{display:"inline",children:T.toLocaleDateString()})]})}),(0,b.jsx)(r.Z,{children:(0,b.jsxs)(l.Z,{variant:"h4",display:"inline",children:["\ubaa8\uc9d1 \uc885\ub8cc ",(0,b.jsx)(l.Z,{display:"inline",children:U.toLocaleDateString()})]})}),(0,b.jsx)(r.Z,{children:(0,b.jsxs)(l.Z,{variant:"h4",display:"inline",children:["\uc815\uc6d0 ",(0,b.jsxs)(l.Z,{display:"inline",children:[k.limit,"\uba85"]})]})}),(0,b.jsx)(d.Z,{label:E?"\ubaa8\uc9d1 \uc911":"\ubaa8\uc9d1 \uae30\uac04\uc774 \uc544\ub2c8\uc5d0\uc694",sx:{padding:I.spacing(.5),marginY:1},color:E?"success":"warning"})]})]})}),(0,b.jsx)(o.Z,{maxWidth:"md",children:k&&k.contents?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,{children:(0,b.jsx)(r.Z,{p:2,overflow:"auto",children:(0,b.jsx)("div",{className:"view ql-editor",dangerouslySetInnerHTML:{__html:k.contents}})})}),(0,b.jsx)(r.Z,{textAlign:"center",my:2,children:(0,b.jsx)(u.Z,{variant:"contained",disabled:!E||q,sx:{paddingX:5},onClick:function(){return z("apply")},children:"\uc9c0\uc6d0\ud558\uae30"})})]}):(0,b.jsx)(h.Z,{children:(0,b.jsx)(r.Z,{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",children:(0,b.jsx)(l.Z,{variant:"h4",children:"\ub3d9\uc544\ub9ac\uc5d0\uc11c \uc62c\ub9b0 \uc18c\uac1c\uae00\uc774 \uc5c6\uc5b4\uc694 \u3160.\u3160"})})})})]})]})}},249:function(n,e){e.Z={UNION_CLUB:"\uc5f0\ud569 \ub3d9\uc544\ub9ac",CENTRAL_CLUB:"\uc911\uc559 \ub3d9\uc544\ub9ac",DEPARTMENT_CLUB:"\uacfc \ub3d9\uc544\ub9ac"}}}]);
//# sourceMappingURL=700.9eb1a972.chunk.js.map