(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(6)),s=n(3),i=(n(15),n(16),n(0)),r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=(n(18),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.defaultYear,onChange:function(t){e.onYearFiltered(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})}),d=n(1),j=(n(19),n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{month:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:"expense-date__year",children:a}),Object(i.jsx)("div",{className:"expense-date__day",children:n})]})}),o=function(e){return Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(j,{date:e.expense.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.expense.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.expense.amount]})]})]})},b=(n(21),function(e){return 0===e.items.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found."}):Object(i.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(i.jsx)(o,{expense:e},e.id)}))})}),x=n(9),O=(n(22),n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(v,{dataPoints:n})},m=function(e){var t=Object(d.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.expenses.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(u,{defaultYear:a,onYearFiltered:function(e){c(e)}}),Object(i.jsx)(h,{expenses:l}),Object(i.jsx)(b,{items:l})]})})})},p=n(2),f=(n(24),function(e){var t=Object(d.useState)({enteredTitle:"",enteredAmount:"",enteredDate:""}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a.enteredTitle,amount:+a.enteredAmount,date:new Date(a.enteredDate)};e.onSaveExpenseData(n),c({enteredTitle:"",enteredDate:"",enteredAmount:""})},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",value:a.enteredTitle,onChange:function(e){c((function(t){return Object(p.a)(Object(p.a)({},t),{},{enteredTitle:e.target.value})}))}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:a.enteredAmount,onChange:function(e){c((function(t){return Object(p.a)(Object(p.a)({},t),{},{enteredAmount:e.target.value})}))}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:a.enteredDate,onChange:function(e){c((function(t){return Object(p.a)(Object(p.a)({},t),{},{enteredDate:e.target.value})}))}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(i.jsx)("button",{type:"Submit",children:"Add Expense"})]})]})}),N=(n(25),function(e){var t=Object(d.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(f,{onCancel:function(){c(!1)},onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddNewExpense(n),c(!1)}})]})});var _=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],t=Object(d.useState)(e),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{onAddNewExpense:function(e){c((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(m,{expenses:a})]})};c.a.render(Object(i.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.43b263d8.chunk.js.map