"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[577],{9577:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(2791),a=n(9434),c=n(4270),l=n(1413),o=n(3366);var s=n(3329),i=["children","onClick"],u=function(e){var t=e.children,n=e.onClick,r=function(e,t){if(null==e)return{};var n,r,a=(0,o.Z)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,i);return(0,s.jsx)("button",(0,l.Z)((0,l.Z)({type:"button",onClick:n},r),{},{children:t}))};u.defaultProps={onClick:function(){return null},children:null};var m,f=u,d="ContactItem_contactsList__item__zfy1W",h="ContactItem_contactsList__button__AhVmY",_="ContactItem_deleteIcon__GKZMX",p=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function x(e,t){var n=e.title,a=e.titleId,c=v(e,p);return r.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,m||(m=r.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",stroke:"none"},r.createElement("path",{d:"M2121 5104 c-83 -22 -165 -71 -224 -133 -99 -104 -137 -210 -137 -383 l0 -107 -487 -3 -488 -3 -67 -32 c-93 -44 -151 -100 -196 -191 l-37 -76 0 -237 c0 -224 1 -239 21 -265 11 -15 33 -37 48 -48 l27 -21 1979 0 1979 0 27 21 c15 11 37 33 48 48 20 26 21 41 21 265 l0 237 -37 76 c-45 91 -103 147 -196 191 l-67 32 -487 3 -488 3 0 107 c0 173 -38 279 -137 383 -61 64 -141 111 -228 134 -84 21 -793 21 -874 -1z m845 -330 c60 -44 69 -67 72 -185 l4 -109 -481 0 -481 0 0 94 c0 102 9 137 43 175 46 50 56 51 449 48 353 -2 368 -3 394 -23z"}),r.createElement("path",{d:"M746 3258 c-12 -20 -5 -208 54 -1433 38 -775 73 -1432 80 -1460 39 -169 193 -317 368 -354 75 -15 2549 -15 2624 0 172 36 318 173 365 343 10 36 34 463 82 1466 60 1230 67 1418 55 1438 l-14 22 -1800 0 -1800 0 -14 -22z m1102 -245 c14 -10 35 -32 46 -47 21 -27 21 -32 21 -1126 0 -1094 0 -1099 -21 -1126 -39 -53 -71 -69 -134 -69 -63 0 -95 16 -134 69 -21 27 -21 35 -24 1099 -1 590 0 1086 3 1104 7 40 49 91 90 109 40 19 120 12 153 -13z m800 0 c14 -10 35 -32 46 -47 21 -27 21 -32 21 -1126 0 -1094 0 -1099 -21 -1126 -39 -53 -71 -69 -134 -69 -63 0 -95 16 -134 69 -21 27 -21 35 -24 1099 -1 590 0 1086 3 1104 7 40 49 91 90 109 40 19 120 12 153 -13z m800 0 c14 -10 35 -32 46 -47 21 -27 21 -32 21 -1126 0 -1094 0 -1099 -21 -1126 -39 -53 -71 -69 -134 -69 -63 0 -95 16 -134 69 -21 27 -21 35 -24 1099 -1 590 0 1086 3 1104 7 40 49 91 90 109 40 19 120 12 153 -13z"}))))}var j=r.forwardRef(x),g=(n.p,n(6052)),y=function(e){var t=e.id,n=e.name,r=e.number,c=(0,a.I0)();return(0,s.jsxs)("li",{className:d,children:[(0,s.jsxs)("p",{children:[n,": ",r]}),(0,s.jsxs)(f,{className:h,onClick:function(){return function(e){return c((0,g.GK)(e))}(t)},children:[(0,s.jsx)(j,{className:_,width:"20",height:"20",fill:"#fff"}),"Delete"]})]},t)},C="ContactList_contactsList__7leRd",w=function(e){return e.contacts.contacts},O=function(e){return e.filter},k=function(e){return e.contacts.isLoading},N=function(){var e=(0,a.v9)(w),t=(0,a.v9)(O).toLowerCase(),n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,s.jsx)("ul",{className:C,children:n.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,s.jsx)(y,{id:t,name:n,number:r},t)}))})},F=n(9439),I="ContactForm_form__dhl+T",z="ContactForm_form__label__8W82B",Z="ContactForm_form__input__VGD4-",L="ContactForm_form__button__MT1Jk";function A(){var e=(0,r.useState)(""),t=(0,F.Z)(e,2),n=t[0],c=t[1],l=(0,r.useState)(""),o=(0,F.Z)(l,2),i=o[0],u=o[1],m=function(e){switch(e.currentTarget.name){case"name":c(e.currentTarget.value);break;case"number":u(e.currentTarget.value);break;default:return}},f=(0,a.I0)(),d=(0,a.v9)(w),h=function(){c(""),u("")};return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.name.value;if(d.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts"));h(),f((0,g.uK)({name:n,number:i})),console.log(i)},className:I,children:[(0,s.jsx)("label",{htmlFor:"name",className:z,children:"Name"})," ",(0,s.jsx)("input",{className:Z,type:"text",onChange:m,value:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,s.jsxs)("label",{htmlFor:"number",className:z,children:["Number"," "]}),(0,s.jsx)("input",{className:Z,type:"tel",onChange:m,value:i,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,s.jsx)("button",{type:"submit",className:L,children:"Add contact"})]})}var E="Filter_filter__vxThR",M="Filter_filter__label__ttfPR",P="Filter_filter__input__toa89",S=n(4808),T=function(){var e=(0,a.I0)(),t=(0,a.v9)(O);return(0,s.jsxs)("div",{className:E,children:[(0,s.jsx)("label",{htmlFor:"user-text",className:M,children:"Find contact by name"}),(0,s.jsx)("input",{className:P,type:"text",value:t,onChange:function(t){return e((0,S.M)(t.target.value))},name:"user-text"})]})};function R(){var e=(0,a.I0)(),t=(0,a.v9)(k);return(0,r.useEffect)((function(){e((0,g.yF)())}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.q,{children:(0,s.jsx)("title",{children:"Your contacts"})}),(0,s.jsx)(A,{}),(0,s.jsx)(T,{}),(0,s.jsx)("div",{children:t&&"Request in progress..."}),(0,s.jsx)(N,{})]})}},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=577.7c16b409.chunk.js.map