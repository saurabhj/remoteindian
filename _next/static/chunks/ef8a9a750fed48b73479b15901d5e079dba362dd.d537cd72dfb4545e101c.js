(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Sva":function(t){t.exports=JSON.parse('[{"title":"Random Numbers: Are they?","description":"Learn how they are generated and why they may not be truly random.","url":"/guides/random-numbers","fileName":"random-numbers","featured":true,"author":"kamranahmedse","updatedAt":"2020-03-15T15:48:21.191Z","createdAt":"2020-03-15T15:48:21.191Z"},{"title":"Big-O Notation","description":"Easy to understand explanation of Big-O notation without any fancy terms","url":"/guides/big-o-notation","fileName":"big-o-notation","featured":true,"author":"kamranahmedse","updatedAt":"2020-03-14T15:48:21.191Z","createdAt":"2020-03-14T15:48:21.191Z"}]')},"/a9y":function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),c=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var s=n("TqRt");e.__esModule=!0,e.default=void 0;var p=s(n("q1tI")),u=s(n("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},f=function(t){i(n,t);var e=l(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||d[t]||"An unexpected error has occurred";return p.default.createElement("div",{style:m.error},p.default.createElement(u.default,null,p.default.createElement("title",null,t,": ",e)),p.default.createElement("div",null,p.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?p.default.createElement("h1",{style:m.h1},t):null,p.default.createElement("div",{style:m.desc},p.default.createElement("h2",{style:m.h2},e,"."))))}}],[{key:"getInitialProps",value:function(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}}]),n}(p.default.Component);e.default=f,f.displayName="ErrorPage";var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"0NY6":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("IP2g"),o=n("8tEE"),c=n("7T8v"),l=n("vOnD"),s=l.a.div.withConfig({displayName:"style__ShareIconsList",componentId:"sc-1y2a2l6-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;position:sticky;top:65px;"]),p=l.a.div.withConfig({displayName:"style__ShareWrap",componentId:"sc-1y2a2l6-1"})(["display:flex;align-items:center;flex-direction:column;position:absolute;padding:0 0;top:0;left:-40px;min-height:100%;"]),u=l.a.a.withConfig({displayName:"share-icon__ShareIcon",componentId:"sc-4wyxg0-0"})(["display:block;width:22px;height:22px;margin-bottom:8px;text-align:center;svg{height:22px !important;width:22px !important;color:#757575;transition:all 0.2s;vertical-align:top;}&:hover svg{color:#000000}"]),d=a.a.createElement;e.a=function(t){var e=t.url,n=t.title,r=t.twitterUsername;return d(p,null,d(s,{className:"d-none d-sm-flex"},d(u,{href:Object(c.d)({text:"".concat(n," ").concat(r?"by @".concat(r):""),url:e}),target:"_blank"},d(i.a,{icon:o.f})),d(u,{href:Object(c.a)({text:n,url:e}),target:"_blank"},d(i.a,{icon:o.a})),d(u,{href:Object(c.b)({text:n,url:e}),target:"_blank"},d(i.a,{icon:o.c})),d(u,{href:Object(c.c)({text:n,url:e}),target:"_blank"},d(i.a,{icon:o.d}))))}},"7T8v":function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return s}));var r=n("4dTo"),a=function(t){return/^\//.test(t)?"".concat(r.url.web).concat(t):t},i=function(t){return"https://twitter.com/".concat(t)},o=function(t){var e=t.text,n=t.url;return"https://twitter.com/intent/tweet?text=".concat(e,"&url=").concat(encodeURI(a(n)))},c=function(t){var e=t.text,n=t.url;return"https://www.facebook.com/sharer/sharer.php?quote=".concat(e,"&u=").concat(encodeURI(a(n)))},l=function(t){var e=t.text,n=t.url;return"https://www.reddit.com/submit?title=".concat(e,"&url=").concat(encodeURI(a(n)))},s=function(t){var e=t.text,n=t.url;return"https://news.ycombinator.com/submitlink?t=".concat(e,"&u=").concat(a(n))}},"7ljp":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return h}));var r=n("q1tI"),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a.a.createContext({}),p=function(t){var e=a.a.useContext(s),n=e;return t&&(n="function"===typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},d="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return n?a.a.createElement(m,c(c({ref:e},s),{},{components:n})):a.a.createElement(m,c({ref:e},s))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[d]="string"===typeof t?t:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return r}))},Ff58:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("IP2g"),o=n("8tEE"),c=n("w4Ln"),l=n("7T8v"),s=n("vOnD"),p=s.a.div.withConfig({displayName:"style__FooterWrap",componentId:"xsq3o5-0"})(["display:block;margin-top:50px;"]),u=s.a.div.withConfig({displayName:"style__FooterContainer",componentId:"xsq3o5-1"})(["max-width:750px;margin:0 auto;padding:0 20px;"]),d=s.a.div.withConfig({displayName:"style__FooterBg",componentId:"xsq3o5-2"})([""]),f=s.a.div.withConfig({displayName:"style__ShareWrap",componentId:"xsq3o5-3"})(["padding:17px 0px;align-items:center;justify-content:center;display:flex;a{display:flex;align-items:center;color:#101010;svg{height:18px !important;width:18px !important;color:#757575;margin-left:7px;transition:all 0.2s ease;}&:hover{svg{color:#101010;}}}"]),m=s.a.div.withConfig({displayName:"style__ContributeIcon",componentId:"xsq3o5-4"})(["display:flex;align-items:center;justify-content:center;margin:",";span{margin-right:4px;}a{color:#757575;font-size:14px;transition:all 0.2s ease;&:hover{color:#101010;}}"],(function(t){return t.hasMargins?"0 30px":"0"})),h=s.a.div.withConfig({displayName:"style__ShareIcons",componentId:"xsq3o5-5"})(["display:flex;align-items:center;color:#757575;font-size:14px;span{margin-right:4px;}"]),g=s.a.div.withConfig({displayName:"style__AuthorInfoWrap",componentId:"xsq3o5-6"})(["display:flex;align-items:center;padding:40px 0;h4{position:relative;font-size:22px;margin:10px 0;line-height:17px;a{font-weight:700;color:#101010;}}.author-description{margin-bottom:14px;}"]),y=s.a.p.withConfig({displayName:"style__AuthorBio",componentId:"xsq3o5-7"})(["font-size:15px;line-height:24px;color:#757575;margin-bottom:0;a{font-weight:500;}"]),b=s.a.img.withConfig({displayName:"style__AuthorImg",componentId:"xsq3o5-8"})(["border-radius:100%;height:100px !important;width:100px !important;margin-right:22px;display:block;"]),x=s.a.div.withConfig({displayName:"style__AuthorMeta",componentId:"xsq3o5-9"})(["display:flex;justify-content:center;flex-direction:column;flex:1;"]),v=a.a.createElement;e.a=function(t){var e=t.guide,n=t.guide,r=(n=void 0===n?{}:n).author,a=void 0===r?{}:r;return v(p,null,v(d,{className:"border-top"},v(u,null,v(f,null,v(m,null,v("a",{href:Object(c.b)(e),target:"_blank"},v("span",{className:"d-none d-sm-none d-md-inline d-lg-inline d-xl-inline"},"Improve this Guide "),v("span",{className:"d-inline d-sm-inline d-md-none d-lg-none d-xl-none"},"Contribute "),v(i.a,{icon:o.b}))),v(m,{hasMargins:!0},v("a",{href:Object(l.e)(a.twitter),target:"_blank"},v("span",{className:"d-none d-sm-none d-md-inline d-lg-inline d-xl-inline"},"Follow the author "),v("span",{className:"d-inline d-sm-inline d-md-none d-lg-none d-xl-none"},"Author "),v(i.a,{icon:o.e}))),v(h,null,v("span",{className:"d-none d-sm-none d-md-none d-lg-inline d-xl-inline"},"Help spread the word"),v("span",{className:"d-inline d-sm-inline d-md-inline d-lg-none d-xl-none"},"Share"),v("a",{href:Object(l.d)({text:"".concat(e.title," by @").concat(a.twitter),url:e.url}),target:"_blank"},v(i.a,{icon:o.f})),v("a",{href:Object(l.a)({text:e.title,url:e.url}),target:"_blank"},v(i.a,{icon:o.a})),v("a",{href:Object(l.c)({text:e.title,url:e.url}),target:"_blank"},v(i.a,{icon:o.d})),v("a",{href:Object(l.b)({text:e.title,url:e.url}),target:"_blank"},v(i.a,{icon:o.c})))))),v(d,{className:"border-top"},v(u,null,v(g,null,v(b,{src:a.picture,alt:a.name}),v(x,null,v("h4",null,v("a",{href:Object(l.e)(a.twitter),target:"_blank"},a.name)),v(y,null,a.bio))))))}},NGGp:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("7ljp"),o=n("rePB"),c=n("vOnD"),l=c.a.p.withConfig({displayName:"p__P",componentId:"sc-1y4l1mk-0"})(["color:inherit;font-size:16px;font-weight:400;line-height:26px;margin:0 0 12px;img + em{text-align:center;color:#666666;font-style:normal;font-size:14px;margin:5px 0 10px;display:block;}"]);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var p=r.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"});var u=function(t){return r.createElement("svg",s({width:16,height:16,"aria-hidden":"true"},t),p)},d=a.a.createElement,f=function(t){return function(e){var n=e.children,r=n.toLowerCase&&n.toLowerCase().replace(/[^\x00-\x7F]/g,"").replace(/\s+/g,"-").replace(/[?!]/g,"");return d(t,{id:r},d(m,{href:"#".concat(r)},d(u,null)),e.children)}},m=c.a.a.withConfig({displayName:"heading__HeaderLink",componentId:"kkifkx-0"})(["position:absolute;top:0;left:-25px;width:25px;display:none;height:100%;align-items:center;justify-content:flex-start;"]),h=c.a.h1.withConfig({displayName:"heading__H1",componentId:"kkifkx-1"})(["position:relative;font-size:42px;font-weight:700;margin:32px 0 10px !important;&:hover ","{display:flex;}"],m),g=Object(c.a)(h).attrs({as:"h2"}).withConfig({displayName:"heading__H2",componentId:"kkifkx-2"})(["font-size:32px;"]),y=Object(c.a)(h).attrs({as:"h3"}).withConfig({displayName:"heading__H3",componentId:"kkifkx-3"})(["margin:22px 0 8px;font-size:30px;"]),b=Object(c.a)(h).attrs({as:"h4"}).withConfig({displayName:"heading__H4",componentId:"kkifkx-4"})(["margin:18px 0 8px;font-size:24px;"]),x=Object(c.a)(h).attrs({as:"h5"}).withConfig({displayName:"heading__H5",componentId:"kkifkx-5"})(["margin:14px 0 8px;font-size:18px;"]),v=Object(c.a)(h).attrs({as:"h6"}).withConfig({displayName:"heading__H6",componentId:"kkifkx-6"})(["margin:12px 0 8px;font-size:18px;"]),w={h1:f(h),h2:f(g),h3:f(y),h4:f(b),h5:f(x),h6:f(v)},O=c.a.pre.withConfig({displayName:"pre__Pre",componentId:"sc-1gnj06y-0"})(["margin:25px -25px 25px -25px !important;padding:20px 25px !important;border-radius:10px;line-height:1.5 !important;code{background:transparent;}"]),_=c.a.blockquote.withConfig({displayName:"blockquote__BlockQuote",componentId:"sc-1i1t56e-0"})(["padding:16px 20px;position:relative;background:#e8e8e8;border-radius:5px;h1,h2,h3,h4,h5,h6{margin-top:0;}p + h4{margin-top:15px;}p{margin:0;& + p{margin-top:10px;}}"]),j=c.a.table.withConfig({displayName:"table__Table",componentId:"sc-1jnzta6-0"})(["border-collapse:separate;width:100%;border-spacing:0;margin:20px 0;th{color:#666;font-size:12px;font-weight:400;background:#FAFAFA;text-transform:uppercase;height:40px;vertical-align:middle;padding:5px 10px;}td{font-size:14px;padding:10px;border-bottom:1px solid #EAEAEA;}"]),k=c.a.iframe.withConfig({displayName:"iframe__IFrame",componentId:"w9c39-0"})(["display:block;width:100%;border:none;margin:30px auto;"]),I=c.a.img.withConfig({displayName:"img__Img",componentId:"a1chtr-0"})(["max-width:100%;margin:25px auto;display:block;"]),N=a.a.createElement,C=c.a.a.withConfig({displayName:"a__Link",componentId:"sc-109lmtc-0"})(["font-weight:600;"]),E=function(t){return N(C,{href:t.href,target:/^http(s)?:\/\//.test(t.href)?"_blank":"_self"},t.children)},P=a.a.createElement;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var q=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({p:l},w,{pre:O,blockquote:_,a:E,table:j,iframe:k,img:I,BadgeLink:function(t){var e=t.target,n=void 0===e?"_blank":e,r=t.variant,a=void 0===r?"success":r,i=t.badgeText,o=t.href,c=t.children;return P("p",{className:"mb-0"},P("a",{href:o,target:n},P("span",{style:{position:"relative",top:"-2px"},className:"badge badge-".concat(a)},i)," ",c))}}),A=a.a.createElement;e.a=function(t){return A(i.a,{components:q},t.children)}},UWcr:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("sWYD"),o=n("vOnD"),c=o.a.div.withConfig({displayName:"style__HeaderWrap",componentId:"sc-165229q-0"})(["padding:80px 15px 45px;text-align:center;margin-bottom:35px;"]),l=o.a.h1.withConfig({displayName:"style__GuideTitle",componentId:"sc-165229q-1"})(["font-weight:700;font-size:46px;margin:12px 0;"]),s=o.a.p.withConfig({displayName:"style__GuideSubtitle",componentId:"sc-165229q-2"})(["margin-bottom:0;font-size:16px;color:#444;"]),p=o.a.p.withConfig({displayName:"style__GuideMeta",componentId:"sc-165229q-3"})(["margin-bottom:0;color:#757575;font-size:13px;font-weight:400;"]),u=o.a.span.withConfig({displayName:"style__GuideDate",componentId:"sc-165229q-4"})(["margin-left:7px;margin-right:7px;"]),d=o.a.a.withConfig({displayName:"style__GuideAuthor",componentId:"sc-165229q-5"})(["margin-right:7px;font-weight:500;color:#101010;&:hover{color:#101010;}"]),f=o.a.img.withConfig({displayName:"style__AuthorImage",componentId:"sc-165229q-6"})(["width:22px;height:22px;border-radius:100%;margin-right:10px;"]),m=o.a.a.withConfig({displayName:"style__EditGuide",componentId:"sc-165229q-7"})(["margin-left:7px;"]),h=o.a.div.withConfig({displayName:"style__ActionItems",componentId:"sc-165229q-8"})([""]),g=n("w4Ln"),y=n("7T8v"),b=n("wHSu"),x=n("fSH9"),v=n("IP2g"),w=a.a.createElement;e.a=function(t){var e=t.guide,n=t.guide,r=(n=void 0===n?{}:n).author,a=void 0===r?{}:r;return w(c,{className:"border-bottom"},w(p,null,w(d,{href:Object(y.e)(a.twitter),target:"_blank"},w(f,{src:a.picture}),a.name),"\xb7",w(u,null,Object(i.a)(new Date(e.createdAt),"EEEE, MMMM d yyyy")),"\xb7",w(m,{href:Object(g.b)(e),target:"_blank"},"Improve this Guide")),w(l,null,e.title),w(s,null,e.description),w(h,null,w(x.b,{className:"mt-4"},w(x.a,{href:"/guides"},w(x.d,null,w(v.a,{icon:b.a}),"Other Guides")),w(x.a,{href:"/signup"},w(x.c,null,w(v.a,{icon:b.b}),"Send me Updates")))))}},a4XJ:function(t,e,n){"use strict";var r=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),o=n("md7G"),c=n("foSv"),l=n("q1tI"),s=n.n(l),p=n("tc1D"),u=n("sDeB"),d=n("3dwh"),f=s.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var h=function(t){Object(i.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props.children;return f(p.a,null,f(u.a,null),t,f(d.a,null))}}]),n}(s.a.Component);e.a=h},eomm:function(t,e,n){t.exports=n("/a9y")},o9J2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("o0o1"),a=n.n(r),i=function(t){return function(e){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",__NEXT_DATA__.props.pageProps);case 2:return n.next=4,a.a.awrap(t(e));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),null,null,null,Promise)}}},w4Ln:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return u}));var r=n("rePB"),a=n("/Sva"),i=n("9rpV"),o=n("4dTo");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l=function(){return a.filter((function(t){return!t.draft})).sort((function(t,e){return new Date(e.updatedAt)-new Date(t.updatedAt)}))},s=function(){return l().filter((function(t){return t.featured}))},p=function(t){var e=a.find((function(e){return e.url===t.url}));if(!e)return null;try{return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{author:i.find((function(t){return t.username===e.author}))||{}})}catch(n){console.log(n)}return null},u=function(t){return"".concat(o.url.repoData).concat(t.url,".md")}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))}}]);