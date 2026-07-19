import{u as c,a as x,j as e,b as n,F as u,a_ as h,I as b,a$ as m,m as g,s as i,B as j}from"./index-DW9kt6oj.js";import{I as w}from"./InputAdornment-Dd3En6YE.js";const I=({handleSubmit:o,searchDefaultValue:r,handleClickCategory:d,filterCategory:s})=>{const l=c(),a=x(l.breakpoints.down("sm"));return e.jsxs(n,{component:"form",onSubmit:o,children:[e.jsx(u,{variant:"outlined",fullWidth:!0,sx:{marginTop:a?2:4,backgroundColor:"white"},children:e.jsx(h,{id:"search",type:"search",placeholder:"동아리 이름을 검색해보세요",defaultValue:r,inputProps:{maxLength:50},sx:{height:a?40:48},endAdornment:e.jsx(w,{position:"end",children:e.jsx(b,{"aria-label":"Search clubs",type:"submit",edge:"end",children:e.jsx(m,{})})})},r)}),e.jsx(k,{children:Object.values(g).map((t,p)=>e.jsx(f,{variant:s===t?"contained":"outlined",size:"small",onClick:d,isMobile:a,"data-value":t,sx:{py:s===t?.6:.5,px:s===t?1.6:1.5},children:t},p+t))})]})},k=i(n)`
  display: flex;
  overflow-x: auto;
  padding: 8px 0;
  gap: 8px;
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`,f=i(j)`
  ${({isMobile:o})=>`
    margin: 1px 1px 0 0;
    height: ${o?"28px":"32px"};
    width: auto;
    white-space: nowrap; 
    display: flex;
    flex-direction: row;
    align-items: center;
    `}
`;export{I as S};
