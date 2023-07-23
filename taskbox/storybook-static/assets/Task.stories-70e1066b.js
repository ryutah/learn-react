import{r as A}from"./index-f1f749bf.js";import{p as o}from"./index-4d501b15.js";var l={},N={get exports(){return l},set exports(e){l=e}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=A,I=Symbol.for("react.element"),O=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,j=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var s,n={},d=null,k=null;a!==void 0&&(d=""+a),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(k=t.ref);for(s in t)D.call(t,s)&&!P.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)n[s]===void 0&&(n[s]=t[s]);return{$$typeof:I,type:e,key:d,ref:k,props:n,_owner:j.current}}u.Fragment=O;u.jsx=S;u.jsxs=S;(function(e){e.exports=u})(N);const i=l.jsx,f=l.jsxs;function m({task:{id:e,title:t,state:a},onArchiveTask:s,onPinTask:n}){return f("div",{className:`list-item ${a}`,children:[f("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[i("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED"}),i("span",{className:"checkbox-custom",onClick:()=>s(e)})]}),i("label",{htmlFor:"title","aria-label":t,className:"title",children:i("input",{type:"text",value:t,readOnly:!0,name:"title",placeholder:"Input title"})}),a!=="TASK_ARCHIVED"&&i("button",{className:"pin-button",onClick:()=>n(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:i("span",{className:"icon-star"})},`pinTask-${e}`)]})}m.propTypes={task:o.shape({id:o.string.isRequired,title:o.string.isRequired,state:o.string.isRequired}),onArchiveTask:o.func,onPinTask:o.func};m.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"}}};const q={component:m,title:"Task",tags:["autodocs"]},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...r.args.task,state:"TASK_PINNED"}}},p={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var _,h,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var g,v,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,b,E;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(E=(b=p.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const C=["Default","Pinned","Archived"],w=Object.freeze(Object.defineProperty({__proto__:null,Archived:p,Default:r,Pinned:c,__namedExportsOrder:C,default:q},Symbol.toStringTag,{value:"Module"}));export{r as D,m as T,f as a,w as b,i as j};
//# sourceMappingURL=Task.stories-70e1066b.js.map
