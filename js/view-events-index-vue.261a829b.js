(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-events-index-vue"],{"05b0":function(t,e,n){t.exports=n.p+"img/ag-rec.6e52e156.png"},5874:function(t,e,n){t.exports=n.p+"img/ds-bst.16327127.png"},"5c6a":function(t,e,n){"use strict";var s=n("cbbc"),i=n.n(s);i.a},b0c0:function(t,e,n){var s=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,r="name";s&&!(r in o)&&i(o,r,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b293:function(t,e,n){t.exports=n.p+"img/ds-hash.2ce3d2b1.png"},c03b:function(t,e,n){t.exports=n.p+"img/ml.aa7cda9a.png"},c3a9:function(t,e,n){t.exports=n.p+"img/ds-array.57b5c83c.png"},cbbc:function(t,e,n){},d8de:function(t,e,n){t.exports=n.p+"img/ds-queue.0fbb153e.png"},f19f:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-bottom":"70px"}},[n("b-container",[n("van-list",{attrs:{finished:t.finished,"finished-text":"No more events","loading-text":"Loading..."},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("b-row",[n("b-col",{attrs:{cols:"6",lg:"6",md:"6","no-gutters":"true",sm:"6"}},[n("b-row",t._l(t.eventList,(function(e,s){return n("b-col",{key:s,style:{padding:"0px",margin:"0px"},attrs:{cols:"12",lg:"6",md:"12","no-gutters":"true",sm:"12",xl:"6"}},[n("div",{staticClass:"cr-van-card"},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.imgUrl}}),n("div",[t._v(t._s(e.name))]),n("p",{staticClass:"event-desc"},[t._v(t._s(e.desc))]),n("van-button",{attrs:{block:"",color:"#8ba38d",text:"More"},on:{click:function(n){return t.viewQuestions(e.id)}}})],1)])})),1)],1),n("b-col",{attrs:{cols:"6",lg:"6",md:"6","no-gutters":"true",sm:"6"}},[n("b-row",t._l(t.eventList2,(function(e,s){return n("b-col",{key:s,style:{padding:"0px",margin:"0px"},attrs:{cols:"12",lg:"6",md:"12","no-gutters":"true",sm:"12",xl:"6"}},[n("div",{staticClass:"cr-van-card"},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.imgUrl}}),n("div",[t._v(t._s(e.name))]),n("p",{staticClass:"event-desc"},[t._v(t._s(e.desc))]),n("van-button",{attrs:{block:"",color:"#8ba38d",text:"More"},on:{click:function(n){return t.viewQuestions(e.id)}}})],1)])})),1)],1)],1)],1)],1)],1)},i=[],o=(n("b0c0"),n("56d7")),a=n("a18c"),c={data:function(){return{imageList:[n("b293"),n("d8de"),n("c03b"),n("05b0"),n("c3a9"),n("5874")],eventList:[],eventList2:[],loading:!1,finished:!1,maxEventNum:0,username:""}},mounted:function(){o["default"].login?this.username=o["default"].username:a["a"].push("/login")},methods:{viewQuestions:function(t){this.$router.push({path:"/events/view/"+t})},onLoad:function(){var t=this,e=10;this.eventList.length+this.eventList2.length>0&&this.eventList.length+this.eventList2.length+e>this.maxEventNum&&(e=this.maxEventNum-this.eventList.length-this.eventList2.length),console.log(e),console.log(this.username),console.log(this.eventList.length+this.eventList2.length),this.$axios({method:"post",url:"/greener-ml/get-event-recommendation",data:{userid:this.username,numEvent:e,offset:this.eventList.length+this.eventList2.length},withCredentials:!1}).then((function(e){console.log(t.$axios.data),console.log(e),t.maxEventNum=e.data.numEvents;var n=e.data.recommendations;for(var s in n){var i=n[s],o={name:i.name,rating:5*i.score,id:i._id,desc:i.details,date:i.date,time:i.time,host:i.host,location:i.location,imgUrl:t.imageList[Math.floor(6*Math.random())]};s%2===0?t.eventList.push(o):t.eventList2.push(o)}t.eventList.length+t.eventList2.length>=t.maxEventNum?(console.log(t.maxEventNum),t.loading=!1,t.finished=!0):t.onLoad()}))}}},r=c,l=(n("5c6a"),n("2877")),u=Object(l["a"])(r,s,i,!1,null,"2637cc84",null);e["default"]=u.exports}}]);
//# sourceMappingURL=view-events-index-vue.261a829b.js.map