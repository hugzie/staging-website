import{_ as t,r as n,a as r,b as a,c as e,d as s,i as c,s as o,e as u,S as i,f,g as p,m as l,h as d,t as h,j as m,k as v}from"./client.1f2d113d.js";import"./index.browser.2b797c0a.js";import"./section.fe195af2.js";import{A as $}from"./about.109255c4.js";function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=a(t);if(n){var c=a(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return e(this,r)}}function g(t){var n,r=new $({props:{path:"/sr/about",lng:"sr",data:t[0]}});return{c:function(){f(r.$$.fragment)},l:function(t){p(r.$$.fragment,t)},m:function(t,a){l(r,t,a),n=!0},p:function(t,n){var a={};1&d(n,1)[0]&&(a.data=t[0]),r.$set(a)},i:function(t){n||(h(r.$$.fragment,t),n=!0)},o:function(t){m(r.$$.fragment,t),n=!1},d:function(t){v(r,t)}}}function y(){return j.apply(this,arguments)}function j(){return(j=t(n.mark((function t(){var r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("about/about.json?lng=sr");case 2:return r=t.sent,t.next=5,r.json();case 5:return a=t.sent,t.abrupt("return",{data:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function x(t,n,r){var a=n.data;return t.$set=function(t){"data"in t&&r(0,a=t.data)},[a]}var R=function(t){r(a,i);var n=b(a);function a(t){var r;return s(this,a),r=n.call(this),c(u(r),t,x,g,o,{data:0}),r}return a}();export default R;export{y as preload};
