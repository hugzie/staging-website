import{S as a,i as t,s,c as e,a as r,m as n,t as o,b as p,d as i}from"./client.148aa59b.js";import"./index.browser.8433ddc4.js";import"./store-item.4fe71c20.js";import"./page-pagination.77f1afaa.js";import{S as c}from"./stickers.910effd8.js";function m(a){let t;const s=new c({props:{path:"/store/stickers/"+a[0].page.number,lng:"en",data:a[0]}});return{c(){e(s.$$.fragment)},l(a){r(s.$$.fragment,a)},m(a,e){n(s,a,e),t=!0},p(a,[t]){const e={};1&t&&(e.path="/store/stickers/"+a[0].page.number),1&t&&(e.data=a[0]),s.$set(e)},i(a){t||(o(s.$$.fragment,a),t=!0)},o(a){p(s.$$.fragment,a),t=!1},d(a){i(s,a)}}}async function f(a){const t=await this.fetch(`store/stickers/${a.params.page}.json?lng=en&page=${a.params.page}`),s=await t.json();return s.page.number=parseInt(a.params.page,10),{data:s}}function d(a,t,s){let{data:e}=t;return a.$set=a=>{"data"in a&&s(0,e=a.data)},[e]}export default class extends a{constructor(a){super(),t(this,a,d,m,s,{data:0})}}export{f as preload};
