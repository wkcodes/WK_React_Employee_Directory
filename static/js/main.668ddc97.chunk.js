(this.webpackJsonpwk_react_employee_directory=this.webpackJsonpwk_react_employee_directory||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i,a=n(0),c=n(1),r=n.n(c),s=n(7),l=n.n(s),d=(n(13),n(2)),o=n(3),j=n(5),m=n(4),b=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("table",{children:Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name - "}),Object(a.jsx)("th",{children:" Email - "}),Object(a.jsx)("th",{children:" City "})]})})})}}]),n}(c.Component),u=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.props.users.map((function(e){return Object(a.jsx)("table",{className:"table table-bordered",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{id:"name",className:"align-middle",children:e.name}),Object(a.jsx)("td",{id:"email",className:"align-middle",children:e.email}),Object(a.jsx)("td",{id:"city",className:"align-middle",children:e.city})]})})},e.id)}))}}]),n}(c.Component),h=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.props.users.map((function(e){return Object(a.jsx)("table",{className:"table table-bordered",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{id:"name",className:"align-middle",children:e.name}),Object(a.jsx)("td",{id:"email",className:"align-middle",children:e.email}),Object(a.jsx)("td",{id:"city",className:"align-middle",children:e.city})]})})},e.id)}))}}]),n}(c.Component),O=(n(14),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{id:1,name:"Bob",email:"bob@gmail.com",city:"Seattle",us:!0},{id:2,name:"Kristen",email:"kristen@gmail.com",city:"New York",us:!0},{id:3,name:"Hans",email:"hans@gmail.com",city:"Berlin",us:!1},{id:4,name:"Sofia",email:"sofia@gmail.com",city:"Barcelona",us:!1},{id:5,name:"Zach",email:"zach@gmail.com",city:"Portland",us:!0},{id:6,name:"Amelia",email:"amelia@gmail.com",city:"London",us:!1},{id:7,name:"Mikhail",email:"mikhail@gmail.com",city:"Moscow",us:!1}],sorted:!1,filtered:!1},e.sortHandler=function(){e.setState({sorted:!0}),e.state.users.sort((function(e,t){var n=e.name,i=t.name;return n>i?-e:n<i?-1:0}))},e.handlerHelper=function(){},e.filterHandler=function(){e.setState({filtered:!0}),e.tableFilter(),i=Object(a.jsx)(u,{})},e.tableFilter=function(t){for(var n=e.state.users,i=[],a=0;a<n.length;a++)n[a].us&&i.push(n[a]);return i},e}return Object(o.a)(n,[{key:"render",value:function(){if(this.state.filtered){var e=this.tableFilter(this.state.users);i=Object(a.jsx)(u,{users:e})}else i=Object(a.jsx)(h,{users:this.state.users});return Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)("h1",{children:"Employee Directory powered by React!"}),Object(a.jsx)("button",{onClick:this.sortHandler,children:"Sort employees alphabetically"}),Object(a.jsx)("button",{onClick:this.filterHandler,children:"Only show U.S. employees"}),Object(a.jsx)(b,{}),Object(a.jsx)("table",{children:i})]})}}]),n}(c.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.668ddc97.chunk.js.map