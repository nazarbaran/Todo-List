(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/check.4b93446c.svg"},13:function(e,t,a){e.exports=a.p+"static/media/pointerRight.28c75ad0.svg"},15:function(e,t,a){e.exports=a.p+"static/media/close.6a02d93e.svg"},18:function(e,t,a){e.exports=a(38)},24:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),o=(a(24),a(1)),c=a(2),m=a(5),l=a(3),d=a(6),u=a(4),h=a.n(u),_=a(11),g=a.n(_),v=a(12),p=a.n(v),E=a(13),N=a.n(E),L=a(7),f=a.n(L),b=a(16),S=a(14),w=a(17),O=a(8),k=a.n(O),y=a(15),C=a.n(y),T=function(e){return i.a.createElement("div",{className:"todoList__container--item"},i.a.createElement("div",{className:"todoList__container--item-text"},e.item),i.a.createElement("img",{src:C.a,alt:"",className:"todoList__container--item-done",onClick:e.removeTodo}))},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState(Object(w.a)({},a.state,{item:t}))},a.addTodo=Object(S.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=a.state.item).length){e.next=5;break}a.setState({itemError:!0}),e.next=9;break;case 5:return 0===(n=JSON.parse(localStorage.getItem("List"))).length?localStorage.setItem("List",JSON.stringify([t])):(n.push(t),localStorage.setItem("List",JSON.stringify(n))),e.next=9,a.setState(function(e){return{List:[].concat(Object(b.a)(e.List),[t]),item:"",itemError:!1}});case 9:case"end":return e.stop()}},e,this)})),a.removeTodo=function(e){var t=JSON.parse(localStorage.getItem("List"));t.splice(e,1),localStorage.setItem("List",JSON.stringify(t)),a.setState({List:t})},a.state={List:JSON.parse(localStorage.getItem("List"))||[],item:"",itemError:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.List.map(function(t,a){return i.a.createElement(T,{item:t,List:e.state.List,removeTodo:e.removeTodo.bind(e,a),key:a})});return 0===this.state.List.length?i.a.createElement("div",{className:"todoList"},i.a.createElement("div",{className:"todoList__empty"},"Add a new Task!"),i.a.createElement("div",{className:"todoList__container"},i.a.createElement("div",{className:this.state.itemError?"todoList__container--error-visible":"todoList__container--error"},"Todo Field can`t be empty"),i.a.createElement("div",{className:"todoList__container--wrap"},i.a.createElement("input",{className:"todoList__container--wrap-input",placeholder:"Task",onChange:this.handleChange,value:this.state.item}),i.a.createElement("img",{src:k.a,alt:"add",className:"todoList__container--wrap-add",onClick:this.addTodo})))):i.a.createElement("div",{className:"todoList"},i.a.createElement("div",{className:"todoList__header"},i.a.createElement("div",{className:"todoList__header--amount"},"You have ",this.state.List.length," things to do")),i.a.createElement("div",{className:"todoList__container"},i.a.createElement("div",{className:this.state.itemError?"todoList__container--error-visible":"todoList__container--error"},"Todo Field can`t be empty"),t,i.a.createElement("div",{className:"todoList__container--wrap"},i.a.createElement("input",{className:"todoList__container--wrap-input",placeholder:"Task",onChange:this.handleChange,value:this.state.item}),i.a.createElement("img",{src:k.a,alt:"add",className:"todoList__container--wrap-add",onClick:this.addTodo}))))}}]),t}(i.a.Component),x=function(){return i.a.createElement("div",{className:"user"},i.a.createElement("div",{className:"user__main"},i.a.createElement(p.a,{className:"user__main--time",format:"HH:mm",ticking:!0,timezone:"Europe/Kiev"}),i.a.createElement("div",{className:"user__main--container"},i.a.createElement("img",{src:h.a,alt:"robot",className:"user__main--container-img"}),i.a.createElement("div",{className:"user__main--container-header"},"Glad to see you ",localStorage.getItem("name"),"!")),i.a.createElement("div",{className:"user__main--subheader"},i.a.createElement("div",{className:"user__main--subheader-text"},"Here`s your ToDo list"),i.a.createElement("img",{src:N.a,alt:"Right",className:"user__main--subheader-img"}))),i.a.createElement(j,null))},I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({name:t})},a.handleVerify=function(){localStorage.setItem("name",a.state.name),a.setState({authShow:!a.state.authShow})},a.state={name:"",authShow:!0},localStorage.getItem("List")||localStorage.setItem("List",JSON.stringify([])),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return localStorage.getItem("name")?i.a.createElement(x,null):i.a.createElement("div",{className:this.state.authShow?"main":"main-hidden"},i.a.createElement("div",{className:"main__header"},i.a.createElement("img",{src:h.a,alt:"robot",className:"main__header--img"}),i.a.createElement("div",{className:"main__header--text"},"Hello,I am your ToDo helper")),i.a.createElement("div",{className:"main__subheader"},"How can I call You?"),i.a.createElement("div",{className:"main__container"},i.a.createElement("input",{className:"main__container--input",onChange:this.handleChange,placeholder:"Your Name"}),i.a.createElement("img",{src:g.a,alt:"check",onClick:this.handleVerify,className:this.state.name.length>2?"main__container--proceed-visible":"main__container--proceed"})))}}]),t}(i.a.Component);r.a.render(i.a.createElement(I,null),document.querySelector("#root"))},4:function(e,t,a){e.exports=a.p+"static/media/robot.3e100566.svg"},8:function(e,t,a){e.exports=a.p+"static/media/add.f7f08c38.svg"}},[[18,1,2]]]);
//# sourceMappingURL=main.09b6395e.chunk.js.map