(function(r){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n]);c&&c(t);while(f.length)f.shift()();return d.push.apply(d,l||[]),e()}function e(){for(var r,t=0;t<d.length;t++){for(var e=d[t],n=!0,i=1;i<e.length;i++){var s=e[i];0!==a[s]&&(n=!1)}n&&(d.splice(t--,1),r=o(o.s=e[0]))}return r}var n={},a={app:0},d=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(r,t,e){o.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},o.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)o.d(e,n,function(t){return r[t]}.bind(null,n));return e},o.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return o.d(t,"a",t),t},o.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},o.p="/trello-board/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;d.push([0,"chunk-vendors"]),e()})({0:function(r,t,e){r.exports=e("56d7")},"034f":function(r,t,e){"use strict";var n=e("85ec"),a=e.n(n);a.a},"508d":function(r,t,e){"use strict";var n=e("7776"),a=e.n(n);a.a},"56d7":function(r,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),a=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{attrs:{id:"app"}},[e("Board")],1)},d=[],o=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"board"},[e("div",{staticClass:"board-list",attrs:{id:"list1"},on:{dragover:r.handleCardDragover,drop:function(t){return r.handleCardDrop(t,r.list1)}}},[e("div",{staticClass:"board-list__header"},[r._v("Doing")]),r._l(r.list1,(function(t,n){return e("div",{key:t.id,staticClass:"board-card",attrs:{id:"card"+t.id,draggable:"","data-index":n},on:{dragstart:function(t){return r.handleCardDragstart(t,n,r.list1)}}},[r._v(r._s(t.name))])}))],2),e("div",{staticClass:"board-list",attrs:{id:"list2"},on:{dragover:r.handleCardDragover,drop:function(t){return r.handleCardDrop(t,r.list2)}}},[e("div",{staticClass:"board-list__header"},[r._v("Done")]),r._l(r.list2,(function(t,n){return e("div",{key:t.id,staticClass:"board-card",attrs:{id:"card"+t.id,draggable:"","data-index":n},on:{dragstart:function(t){return r.handleCardDragstart(t,n,r.list2)}}},[r._v(r._s(t.name))])}))],2)])},i=[],s=(e("a434"),{name:"HelloWorld",data:function(){return{list1:[{id:1,name:"card1"},{id:2,name:"card2"},{id:3,name:"card3"},{id:4,name:"card4"},{id:5,name:"card5"}],list2:[],dragCardList:null,dragCardIndex:null}},methods:{handleCardDragstart:function(r,t,e){console.log(r),this.dragCardIndex=t,this.dragCardList=e},handleCardDragover:function(r){r.preventDefault()},handleCardDrop:function(r,t){console.log("drop");var e=r.target,n=this.dragCardIndex,a=this.dragCardList,d=a[n];if(a!==t)a.splice(n,1),t.push(d);else{var o=e.dataset.index,i=t[o];this.$set(t,o,d),this.$set(t,n,i)}}}}),l=s,c=(e("508d"),e("2877")),u=Object(c["a"])(l,o,i,!1,null,"638ba769",null),f=u.exports,p={name:"App",components:{Board:f}},v=p,h=(e("034f"),Object(c["a"])(v,a,d,!1,null,null,null)),g=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(r){return r(g)}}).$mount("#app")},7776:function(r,t,e){},"85ec":function(r,t,e){}});
//# sourceMappingURL=app.37268ff6.js.map