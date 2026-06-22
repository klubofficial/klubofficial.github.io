import{x,y as w,r as _,z as R,_ as S,J as o,j as U,K as $,N as j,s as M,ay as A,bi as u,bj as b}from"./index-C6Y0IZBl.js";function N(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function K(t){return x("MuiSkeleton",t)}w("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=["animation","className","component","height","style","variant","width"];let r=t=>t,p,m,g,f;const E=t=>{const{classes:e,variant:a,animation:i,hasChildren:n,width:l,height:s}=t;return j({root:["root",a,i,n&&"withChildren",n&&!l&&"fitContent",n&&!s&&"heightAuto"]},K,e)},F=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),P=b(m||(m=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),T=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=N(t.shape.borderRadius)||"px",i=X(t.shape.borderRadius);return o({display:"block",backgroundColor:A(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(g||(g=r`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),F),({ownerState:t,theme:e})=>t.animation==="wave"&&u(f||(f=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),P,e.palette.action.hover)),z=_.forwardRef(function(e,a){const i=R({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:l,component:s="span",height:h,style:C,variant:k="text",width:v}=i,d=S(i,B),c=o({},i,{animation:n,component:s,variant:k,hasChildren:!!d.children}),y=E(c);return U.jsx(T,o({as:s,ref:a,className:$(y.root,l),ownerState:c},d,{style:o({width:v,height:h},C)}))});export{z as S};
