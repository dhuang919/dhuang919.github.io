(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,a,t){"use strict";t.r(a);t(362);var n=t(0),r=t.n(n),c=t(152),i=(t(363),t(364)),o=t.n(i),s=t(365),d=t.n(s),l=t(366),u=t.n(l),m=t(367),p=t.n(m),f=t(368),h=t.n(f),g=t(369),y=t.n(g),v=t(370),b=t.n(v),E=t(371),x=t.n(E),w=t(372),N=t.n(w),k=t(373),j=t.n(k),T=[{name:"Helen Kim",photo:o.a},{name:"Jennifer Kim",photo:d.a},{name:"Rachel Song",photo:p.a},{name:"Sue Choi",photo:u.a},{name:"Madeline Li",photo:h.a}],q=[{name:"Tom Hsu",photo:y.a},{name:"Tony Ng",photo:b.a},{name:"Thomas Kim",photo:N.a},{name:"David Chun",photo:x.a},{name:"Marcus Huang",photo:j.a}];a.default=function(e){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"wedding-party"},r.a.createElement("div",{className:"wedding-party-hero"},r.a.createElement("div",{className:"wedding-party-hero-img"},r.a.createElement("span",{className:"wedding-party-hero-text"},"Wedding Party"))),r.a.createElement("div",{className:"wedding-party-content"},r.a.createElement("div",{className:"party"},r.a.createElement("div",{className:"party-header"},"Bridesmaids"),T.map(function(e,a){return r.a.createElement(r.a.Fragment,null,"Madeline Li"===e.name&&r.a.createElement("div",{className:"party-header",style:{marginTop:"20px"}},"Flower Girl"),r.a.createElement("div",{key:a,className:"person person-"+(a+1)},r.a.createElement("div",{className:"person-name"},e.name),r.a.createElement("img",{className:"person-photo",alt:"bridesmaid",src:e.photo})))})),r.a.createElement("div",{className:"party"},r.a.createElement("div",{className:"party-header"},"Groomsmen"),q.map(function(e,a){return r.a.createElement(r.a.Fragment,null,"Marcus Huang"===e.name&&r.a.createElement("div",{className:"party-header",style:{marginTop:"20px"}},"Ring Bearer"),r.a.createElement("div",{key:a,className:"person person-"+(a+1)},r.a.createElement("div",{className:"person-name"},e.name),r.a.createElement("img",{className:"person-photo",alt:"groomsman",src:e.photo})))})))))}},146:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},147:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),c=t(4),i=t.n(c),o=t(145),s=t.n(o);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var d=t(146),l=t.n(d);t.d(a,"PageRenderer",function(){return l.a});var u=t(32);t.d(a,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),c=t(4),i=t.n(c),o=t(51),s=t(2),d=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=d},149:function(e,a,t){},150:function(e,a,t){e.exports=t.p+"static/favicon-11db61ff9882ebc7b8628998815611ee.ico"},151:function(e,a,t){},152:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(4),i=t.n(c),o=t(155),s=t.n(o),d=t(147),l=(t(149),[{href:"/venue",text:"venue"},{href:"/engagement",text:"engagement"},{href:"/wedding-party",text:"wedding party"},{href:"/schedule",text:"schedule"},{href:"/contact",text:"contact"}]),u=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"names"},r.a.createElement(d.Link,{className:"home-link",to:"/"},"Janet & Derek"),r.a.createElement("div",{className:"hashtag"},"#dejahu")),r.a.createElement("div",{className:"nav"},l.map(function(e,a){return r.a.createElement("span",{key:a,className:"nav-link-wrapper"},r.a.createElement(d.Link,{className:"nav-link",to:e.href},e.text))})))},m=t(150),p=t.n(m),f=(t(151),[{name:"description",content:"The website for the wedding of Janet and Derek Huang"}]),h=[{rel:"shortcut icon",type:"image/x-icon",href:""+p.a}],g=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"Janet & Derek",meta:f,link:h},r.a.createElement("html",{lang:"en"})),r.a.createElement(u,{siteTitle:"Janet & Derek"}),r.a.createElement("div",{id:"app"},a))};g.propTypes={children:i.a.node.isRequired};a.a=g},362:function(e,a,t){var n=t(25).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||t(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},363:function(e,a,t){},364:function(e,a,t){e.exports=t.p+"static/helen-fdab291b8fa5dc7055637fdd2cad516a.jpg"},365:function(e,a,t){e.exports=t.p+"static/jennifer-312e2df373bc1e16b83e08a9d9b82780.jpg"},366:function(e,a,t){e.exports=t.p+"static/sue-7d2934d1147e283ae15b0bdfc2f63cca.jpg"},367:function(e,a,t){e.exports=t.p+"static/rachel-2c4cde955ca7a2cbc5d5bcfd417c40b6.jpg"},368:function(e,a,t){e.exports=t.p+"static/mady-01df4dd36e7e9134aa499074af9bd2f2.jpeg"},369:function(e,a,t){e.exports=t.p+"static/tom-7f8f814a63bf999c06c161b30e3b9de7.jpg"},370:function(e,a,t){e.exports=t.p+"static/tony-285501ede31a49aed4b394aaa9a4fc20.jpg"},371:function(e,a,t){e.exports=t.p+"static/dchun-e0e413c64137d0b2ae3a8d806795aee2.jpg"},372:function(e,a,t){e.exports=t.p+"static/thomas-31c8953710138accba60a897cb2a5474.jpg"},373:function(e,a,t){e.exports=t.p+"static/marcus-ea548a7442cdef6f0d3d07206ca84c3e.jpg"}}]);
//# sourceMappingURL=component---src-pages-wedding-party-js-fab36d7f578de3d9353a.js.map