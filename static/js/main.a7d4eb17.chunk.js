(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),o=n.n(r),s=(n(29),n(23)),l=n(7),i=n(6),d=n(5),j=n(2),u=n(1),b=function(e){var t=e.className,n=e.backgroundColor,c=e.color,a=e.text,r=e.onClick;return Object(u.jsx)("button",{className:"button ".concat(t),style:{color:c,backgroundColor:n},onClick:r,children:a})};b.defaultProps={color:"white",backgroundColor:"black",text:"Add"};var h=b,O=function(e){var t=e.showAddTask,n=e.onToggle;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:"Task Tracker"}),Object(u.jsx)(h,{backgroundColor:t?"Red":"Green",text:t?"Close":"Add",onClick:n})]})},x=n(24),m=function(e){var t=e.className,n=e.label,c=e.type,a=e.placeholder,r=e.value,o=e.onChange,s=Object(x.a)(e,["className","label","type","placeholder","value","onChange"]);return Object(u.jsxs)("div",{className:"form-control ".concat(t),children:[Object(u.jsx)("label",{children:n}),Object(u.jsx)("input",Object(l.a)({type:c,placeholder:a,value:r,onChange:o},s))]})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),d=l[0],j=l[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),x=O[0],f=O[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),""!==r?(t({name:r,day:d,reminder:x}),o(""),j(""),f(!1)):alert("Please fill needed inputs")},children:[Object(u.jsx)(m,{className:"",label:"Name",type:"text",placeholder:"Sample Activity",value:r,onChange:function(e){return o(e.target.value)}}),Object(u.jsx)(m,{className:"",label:"Day",type:"text",placeholder:"Name of a Day",value:d,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)(m,{className:"form-control-check",label:"Set Reminder",type:"checkbox",checked:x,value:x,onChange:function(e){return f(e.target.checked)}}),Object(u.jsx)(h,{className:"form-control-button",backgroundColor:"Green",text:"Add Task",onClick:null})]})},k=n(22),g=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder&&"reminder"),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.name,Object(u.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})},p=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)("div",{className:"task-list",children:t.length?t.map((function(e){return Object(u.jsx)(g,{task:e,onToggle:c,onDelete:n},e.id)})):Object(u.jsx)("h3",{children:"No Tasks to show."})})},v=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("p",{children:"Copyright \xa9 2021"}),Object(u.jsx)(d.b,{to:"/about",children:"About"})]})},y=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Version 1.0.0"}),Object(u.jsx)(d.b,{to:"/task-tracker",children:"Go Back"})]})},C=(n(36),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([{id:0,name:"Do Laundry",day:"Monday",reminder:!0},{id:1,name:"Do Grocery",day:"Tuesday",reminder:!0},{id:2,name:"Do Clean Shoes",day:"Wednesday",reminder:!0}]),o=Object(i.a)(r,2),b=o[0],h=o[1],x=function(e){console.log(e);var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);h([].concat(Object(s.a)(b),[n]))},m=function(e){h(b.filter((function(t){return t.id!==e})))},k=function(e){h(b.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))};return Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(O,{onToggle:function(){return a(!n)},showAddTask:n}),Object(u.jsx)(j.a,{path:"/task-tracker",render:function(e){return Object(u.jsxs)("div",{children:[n&&Object(u.jsx)(f,{onAdd:x}),Object(u.jsx)(p,{tasks:b,onToggle:k,onDelete:m})]})}}),Object(u.jsx)(j.a,{path:"/about",component:y,exact:!0}),Object(u.jsx)(v,{})]})})}),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.a7d4eb17.chunk.js.map