(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/check.4b93446c.svg"},12:function(e,t,a){e.exports=a.p+"static/media/pointerRight.28c75ad0.svg"},13:function(e,t,a){e.exports=a.p+"static/media/close.6a02d93e.svg"},15:function(e,t,a){e.exports=a(33)},21:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(9),r=a.n(s),o=(a(21),a(1)),c=a(2),m=a(5),l=a(3),d=a(6),u=a(4),h=a.n(u),_=a(10),g=a.n(_),v=a(11),p=a.n(v),E=a(12),N=a.n(E),L=a(14),f=a(7),b=a.n(f),S=a(13),w=a.n(S),O=function(e){return n.a.createElement("div",{className:"todoList__container--item"},n.a.createElement("div",{className:"todoList__container--item-textwrap"},n.a.createElement("div",{className:"todoList__container--item-textwrap-text"}," ",e.item),n.a.createElement("span",{className:"todoList__container--item-textwrap-date"},"Added at ",e.time)),n.a.createElement("div",{className:"todoList__container--item-btnwrap"},n.a.createElement("img",{src:w.a,alt:"",className:"todoList__container--item-btnwrap-remove",onClick:e.removeTodo})))},y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState(Object(L.a)({},a.state,{item:t}))},a.addTodo=function(){var e=a.state.item,t=new Date,i=("0"+t.getMinutes()).slice(-2),n=t.getHours()+":"+i;if(0===e.length)a.setState({itemError:!0});else{var s=JSON.parse(localStorage.getItem("List"));s.length<0?localStorage.setItem("List",JSON.stringify([e])):(s.push({item:e,time:n}),localStorage.setItem("List",JSON.stringify(s))),a.setState({List:s,item:"",itemError:!1})}},a.removeTodo=function(e){var t=JSON.parse(localStorage.getItem("List"));t.splice(e,1),localStorage.setItem("List",JSON.stringify(t)),a.setState({List:t})},a.state={List:JSON.parse(localStorage.getItem("List"))||[{item:"",time:""}],item:"",time:"",editedItem:"",itemError:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.List.map(function(t,a){return n.a.createElement(O,{item:t.item,time:t.time,List:e.state.List,onChange:e.itemChange,removeTodo:e.removeTodo.bind(e,a),key:a})});return 0===this.state.List.length?n.a.createElement("div",{className:"todoList"},n.a.createElement("div",{className:"todoList__empty"},"Add a new Task!"),n.a.createElement("div",{className:"todoList__container"},n.a.createElement("div",{className:this.state.itemError?"todoList__container--error-visible":"todoList__container--error"},"Todo Field can`t be empty"),n.a.createElement("div",{className:"todoList__container--wrap"},n.a.createElement("input",{className:"todoList__container--wrap-input",placeholder:"Task",onChange:this.handleChange,value:this.state.item}),n.a.createElement("img",{src:b.a,alt:"add",className:"todoList__container--wrap-add",onClick:this.addTodo})))):n.a.createElement("div",{className:"todoList"},n.a.createElement("div",{className:"todoList__header"},n.a.createElement("div",{className:"todoList__header--amount"},"You have ",this.state.List.length," things to do")),n.a.createElement("div",{className:"todoList__container"},n.a.createElement("div",{className:this.state.itemError?"todoList__container--error-visible":"todoList__container--error"},"Todo Field can`t be empty"),t,n.a.createElement("div",{className:"todoList__container--wrap"},n.a.createElement("input",{className:"todoList__container--wrap-input",placeholder:"Task",onChange:this.handleChange,value:this.state.item}),n.a.createElement("img",{src:b.a,alt:"add",className:"todoList__container--wrap-add",onClick:this.addTodo}))))}}]),t}(n.a.Component),C=function(){return n.a.createElement("div",{className:"user"},n.a.createElement("div",{className:"user__main"},n.a.createElement(p.a,{className:"user__main--time",format:"HH:mm",ticking:!0,timezone:"Europe/Kiev"}),n.a.createElement("div",{className:"user__main--container"},n.a.createElement("img",{src:h.a,alt:"robot",className:"user__main--container-img"}),n.a.createElement("div",{className:"user__main--container-header"},"Glad to see you ",localStorage.getItem("name"),"!")),n.a.createElement("div",{className:"user__main--subheader"},n.a.createElement("div",{className:"user__main--subheader-text"},"Here`s your ToDo list"),n.a.createElement("img",{src:N.a,alt:"Right",className:"user__main--subheader-img"}))),n.a.createElement(y,null))},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({name:t})},a.handleVerify=function(){localStorage.setItem("name",a.state.name),a.setState({authShow:!a.state.authShow})},a.state={name:"",authShow:!0},localStorage.getItem("List")||localStorage.setItem("List",JSON.stringify([])),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return localStorage.getItem("name")?n.a.createElement(C,null):n.a.createElement("div",{className:this.state.authShow?"main":"main-hidden"},n.a.createElement("div",{className:"main__header"},n.a.createElement("img",{src:h.a,alt:"robot",className:"main__header--img"}),n.a.createElement("div",{className:"main__header--text"},"Hello,I am your ToDo helper")),n.a.createElement("div",{className:"main__subheader"},"How can I call You?"),n.a.createElement("div",{className:"main__container"},n.a.createElement("input",{className:"main__container--input",onChange:this.handleChange,placeholder:"Your Name"}),n.a.createElement("img",{src:g.a,alt:"check",onClick:this.handleVerify,className:this.state.name.length>2?"main__container--proceed-visible":"main__container--proceed"})))}}]),t}(n.a.Component);r.a.render(n.a.createElement(k,null),document.querySelector("#root"))},4:function(e,t,a){e.exports=a.p+"static/media/robot.3e100566.svg"},7:function(e,t,a){e.exports=a.p+"static/media/add.f7f08c38.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.fceeb82d.chunk.js.map