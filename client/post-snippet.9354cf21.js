import{S as s,i as a,s as t,l as e,c as r,k as i,G as l,o as c,p as o,a as n,j as p,n as h,H as f,q as v,f as d,A as m,m as g,J as q,t as u,b as $,d as b}from"./client.148aa59b.js";import{I}from"./index.browser.8433ddc4.js";function k(s){let a,t,k,y,w,z,P,E,j,x,D,U=s[1].title+"",V=s[1].description+"";const A=new I({props:{style:"position: relative; top: -50%; width: 100%;",src:s[1].coverImageUri,alt:s[1].title,width:350}});return{c(){a=e("a"),t=e("div"),r(A.$$.fragment),k=i(),y=e("div"),w=l(U),z=i(),P=e("div"),E=l(V),this.h()},l(s){a=c(s,"A",{rel:!0,href:!0,class:!0});var e=o(a);t=c(e,"DIV",{class:!0});var r=o(t);n(A.$$.fragment,r),r.forEach(p),k=h(e),y=c(e,"DIV",{class:!0});var i=o(y);w=f(i,U),i.forEach(p),z=h(e),P=c(e,"DIV",{class:!0});var l=o(P);E=f(l,V),l.forEach(p),e.forEach(p),this.h()},h(){v(t,"class","image-wrapper svelte-qzy4qk"),v(y,"class","title svelte-qzy4qk"),v(P,"class","description svelte-qzy4qk"),v(a,"rel","prefetch"),v(a,"href",j=s[0]+"/"+s[1].slug),v(a,"class",x="post-snippet "+s[2]+" svelte-qzy4qk")},m(s,e){d(s,a,e),m(a,t),g(A,t,null),m(a,k),m(a,y),m(y,w),m(a,z),m(a,P),m(P,E),D=!0},p(s,[t]){const e={};2&t&&(e.src=s[1].coverImageUri),2&t&&(e.alt=s[1].title),A.$set(e),(!D||2&t)&&U!==(U=s[1].title+"")&&q(w,U),(!D||2&t)&&V!==(V=s[1].description+"")&&q(E,V),(!D||3&t&&j!==(j=s[0]+"/"+s[1].slug))&&v(a,"href",j),(!D||4&t&&x!==(x="post-snippet "+s[2]+" svelte-qzy4qk"))&&v(a,"class",x)},i(s){D||(u(A.$$.fragment,s),D=!0)},o(s){$(A.$$.fragment,s),D=!1},d(s){s&&p(a),b(A)}}}function y(s,a,t){let{basePath:e=""}=a,{post:r={title:"",description:"",coverImageUri:"#",slug:""}}=a,{class:i=""}=a;return s.$set=s=>{"basePath"in s&&t(0,e=s.basePath),"post"in s&&t(1,r=s.post),"class"in s&&t(2,i=s.class)},[e,r,i]}class w extends s{constructor(s){super(),a(this,s,y,k,t,{basePath:0,post:1,class:2})}}export{w as P};
