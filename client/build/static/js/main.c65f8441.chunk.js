(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(t,e,n){},90:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),s=(n(70),n(32)),i=n(33),u=n(39),d=n(38),l=n(58),p=n(57),h=n(15),f=n.n(h),v=n(29),b=n(30),j=n.n(b),m="https://dutodo-list.herokuapp.com/api/todos";function x(t){return j.a.post(m,t)}function O(t,e){return j.a.put(m+"/"+t,e)}function g(t){return j.a.delete(m+"/"+t)}var k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],currentTodo:""},t.handleChange=function(e){var n=e.currentTarget;t.setState({currentTodo:n.value})},t.handleSubmit=function(){var e=Object(v.a)(f.a.mark((function e(n){var r,a,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.state.todos,e.prev=2,e.next=5,x({todo:t.state.currentTodo});case 5:a=e.sent,c=a.data,(o=r).push(c),t.setState({todos:o,currentTodo:""}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),t.handleUpdate=function(){var e=Object(v.a)(f.a.mark((function e(n){var r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state.todos,e.prev=1,a=Object(p.a)(r),c=a.findIndex((function(t){return t._id===n})),a[c]=Object(l.a)({},a[c]),a[c].completed=!a[c].completed,t.setState({todos:a}),e.next=9,O(n,{completed:a[c].completed});case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({todos:r}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),t.handleDelete=function(){var e=Object(v.a)(f.a.mark((function e(n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state.todos,e.prev=1,a=r.filter((function(t){return t._id!==n})),t.setState({todos:a}),e.next=6,g(n);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({todos:r}),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(v.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(m);case 3:e=t.sent,n=e.data,this.setState({todos:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()}]),n}(r.Component),y=n(123),w=n(128),S=n(127),T=n(129),N=(n(90),n.p+"static/media/to-do-list.10fed675.jpg"),_=n(11),C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],currentTodo:""},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.todos;return Object(_.jsx)("div",{className:"App flex",style:{backgroundImage:"url(".concat(N,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(_.jsxs)(y.a,{elevation:3,className:"container",children:[Object(_.jsx)("div",{className:"heading",children:"TODO-LIST"}),Object(_.jsxs)("form",{onSubmit:this.handleSubmit,className:"flex",style:{margin:"15px 0"},children:[Object(_.jsx)(w.a,{variant:"outlined",size:"small",style:{width:"80%"},value:this.state.currentTodo,required:!0,onChange:this.handleChange,placeholder:"Add New TO-DO"}),Object(_.jsx)(S.a,{style:{height:"40px",marginLeft:"10px"},color:"primary",variant:"outlined",type:"submit",children:"Add todo"})]}),Object(_.jsx)("div",{children:e.map((function(e){return Object(_.jsxs)(y.a,{className:"flex todo_container",children:[Object(_.jsx)(T.a,{checked:e.completed,onClick:function(){return t.handleUpdate(e._id)},color:"primary"}),Object(_.jsx)("div",{className:e.completed?"todo line_through":"todo",children:e.todo}),Object(_.jsx)(S.a,{onClick:function(){return t.handleDelete(e._id)},color:"secondary",children:"delete"})]},e._id)}))})]})})}}]),n}(k);o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.c65f8441.chunk.js.map