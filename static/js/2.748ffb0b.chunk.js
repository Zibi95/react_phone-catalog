/*! For license information please see 2.748ffb0b.chunk.js.LICENSE.txt */
(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[2,8],Array(51).concat([function(t,e,c){var n;!function(){"use strict";var c={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&t.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var i in n)c.call(n,i)&&n[i]&&t.push(i)}}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},function(t,e,c){"use strict";e.a=c.p+"static/media/r_arrow.4240ad0e.svg"},function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var n=c(51),r=c.n(n),a=(c(55),c(1)),s=function(t){var e=t.width,c=t.height,n=t.children,s=t.onClick,i=t.isActive;return Object(a.jsx)("button",{onClick:s,style:{width:e,height:c},className:r()("cart-button",{"cart-button--selected":i}),type:"button",children:i?"Added to cart":n})}},function(t,e,c){"use strict";e.a=c.p+"static/media/l_arrow.081ebe62.svg"},function(t,e,c){},function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var n=c(5),r=(c(64),c(1)),a=function(t){var e=t.specifications,c=t.style,a=void 0===c?{fontSize:12,fontWeight:600}:c,s=t.specCount;return Object(r.jsx)("table",{className:"specification-table",children:Object(r.jsx)("tbody",{style:a,className:"specification-table__body",children:Object.entries(e).map((function(t,e){var c=Object(n.a)(t,2),a=c[0],i=c[1];return s&&s<=e?null:Object(r.jsxs)("tr",{className:"specification-table__row",children:[Object(r.jsx)("td",{className:"specification-table__details",children:a}),Object(r.jsx)("td",{children:Array.isArray(i)?i.join(", "):i})]},a)}))})})}},function(t,e,c){"use strict";e.a=c.p+"static/media/home.1816ab2c.svg"},function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));c(61);var n=c(1),r=function(t){var e=t.onClick,c=t.svg,r=t.alt,a=t.isDisabled,s=void 0!==a&&a,i=t.height,o=void 0===i?32:i,l=t.children;return Object(n.jsx)("button",{style:{height:o},className:"button",type:"button",onClick:e,disabled:s,children:l||Object(n.jsx)("img",{className:"button__icon",src:c,alt:r})})}},function(t,e,c){"use strict";c.d(e,"e",(function(){return n})),c.d(e,"a",(function(){return r})),c.d(e,"c",(function(){return a})),c.d(e,"b",(function(){return s})),c.d(e,"d",(function(){return i}));var n=function(t,e){switch(e){case"age":return t.sort((function(t,e){return e.year-t.year}));case"name":return t.sort((function(t,e){return t.name.localeCompare(e.name)}));case"price":return t.sort((function(t,e){return t.price-e.price}));default:return t}},r=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},a=function(t){return t.sort((function(t,e){var c=t.fullPrice-t.price;return e.fullPrice-e.price-c})).slice(0,16)},s=function(t){return t.sort((function(t,e){return e.year-t.year})).slice(0,16)},i=function(t){return Array.from({length:16},(function(){return t[Math.floor(Math.random()*t.length)]}))}},function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(51),r=c.n(n),a=c(29),s=c.p+"static/media/heart_red.a3b711b5.svg",i=c(21),o=(c(63),c(1)),l=function(t){var e=t.size,c=t.product,n=t.productId,l=Object(i.b)(),u=l.addFavItem,d=l.deleteFavItem,j=l.favItems.some((function(t){return t.itemId===n}));return Object(o.jsx)("button",{onClick:function(){return j?d(n):u(c)},style:{width:e,height:e},type:"button",className:"fav-button","data-cy":!j&&"addToFavorite",children:Object(o.jsx)("img",{className:r()("fav-button__icon",{"fav-button__icon--liked":j}),src:j?s:a.a,alt:j?"Delete from favorites":"Add to favorites"})})}},function(t,e,c){},function(t,e,c){"use strict";c.d(e,"a",(function(){return u}));var n=c(0),r=c(8),a=c(53),s=c(60),i=c(56),o=c(20),l=(c(65),c(1)),u=Object(n.memo)((function(t){var e=t.product,c=e.image,n=e.name,u=e.price,d=e.screen,j=e.capacity,b=e.ram,f=e.fullPrice,p=e.itemId,m=e.category,O=Object(o.b)(),h=O.addCartItem,x=O.cartItems.some((function(t){return t.id===p})),_={Screen:d,Capacity:j,RAM:b};return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsxs)(r.b,{to:"/".concat(m,"/").concat(p),className:"product-card__link",children:[Object(l.jsx)("img",{className:"product-card__image",src:c,alt:n}),Object(l.jsx)("p",{className:"product-card__name",children:n})]}),Object(l.jsxs)("p",{className:"product-card__price",children:["$".concat(u),f-u>0&&Object(l.jsx)("span",{className:"product-card__price--strike",children:"$".concat(f)})]}),Object(l.jsx)("div",{className:"product-card__spec",children:Object(l.jsx)(i.a,{specifications:_})}),Object(l.jsxs)("div",{className:"product-card__controls",children:[Object(l.jsx)(a.a,{onClick:function(){return h(e)},width:176,height:40,isActive:x,children:"Add to cart"}),Object(l.jsx)(s.a,{product:e,productId:p,size:40})]})]})}))},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(3),r=c(8),a=c(14),s=c(57),i=c(52),o=(c(67),c(1)),l=function(){var t=Object(n.n)().pathname.slice(1).split("/");return Object(o.jsxs)("nav",{className:"bread-crumbs","data-cy":"breadCrumbs",children:[Object(o.jsx)(r.b,{to:"/home",children:Object(o.jsx)("img",{className:"bread-crumbs__icon",src:s.a,alt:"Home icon"})}),t.map((function(e,c){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"bread-crumbs__icon--color-gray",src:i.a,alt:""}),c===t.length-1?Object(o.jsx)("span",{children:Object(a.a)(e)}):Object(o.jsx)(r.b,{className:"bread-crumbs__link",to:"/".concat(e),children:Object(a.a)(e)})]},e)}))]})}},function(t,e,c){},function(t,e,c){},,function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));c(72);var n=c(1),r=function(t){var e=t.slide,c=t.gap,r=t.children;return Object(n.jsx)("div",{className:"slider",children:Object(n.jsx)("div",{className:"slider__wrapper",style:{transform:"translateX(".concat(-100*e,"%)"),gap:c},"data-cy":"cardsContainer",children:r})})}},function(t,e,c){"use strict";c.r(e);var n=c(8),r=c(57),a=(c(68),c(1));e.default=function(t){var e=t.title;return Object(a.jsxs)("section",{className:"not-found",children:[Object(a.jsx)("h1",{className:"not-found__title",children:e}),Object(a.jsxs)(n.b,{className:"not-found__link",to:"/home",children:[Object(a.jsx)("img",{className:"not-found__image",src:r.a,alt:"Go to home page"}),"Go back to home page"]})]})}},function(t,e,c){},function(t,e,c){"use strict";c.d(e,"a",(function(){return j}));var n=c(5),r=c(0),a=c(62),s=c(70),i=c(58),o=c(54),l=c(52),u=(c(74),c(30)),d=c(1),j=function(t){var e=t.title,c=t.products,j=Object(r.useState)(0),b=Object(n.a)(j,2),f=b[0],p=b[1],m=c.length/Object(u.a)()-1,O=Object(r.useCallback)((function(t){p((function(e){var c=e+t;return 1===t?Math.min(m,c):Math.max(0,c)}))}),[m]);return Object(r.useEffect)((function(){p(0)}),[m]),Object(d.jsxs)("div",{className:"cards-container",children:[Object(d.jsxs)("div",{className:"cards-container__header",children:[Object(d.jsx)("h1",{className:"cards-container__title",children:e}),Object(d.jsxs)("div",{className:"cards-container__controls",children:[Object(d.jsx)(i.a,{onClick:function(){return O(-1)},svg:o.a,isDisabled:0===f,alt:"Slide left"}),Object(d.jsx)(i.a,{onClick:function(){return O(1)},svg:l.a,isDisabled:f===m,alt:"Slide right"})]})]}),Object(d.jsx)(s.a,{slide:f,gap:16,children:c.map((function(t){return Object(d.jsx)(a.a,{product:t},t.itemId)}))})]})}},function(t,e,c){},function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var n=c(3),r=c(54),a=(c(76),c(1)),s=function(){var t=Object(n.p)();return Object(a.jsxs)("button",{"data-cy":"backButton",onClick:function(){return t(-1)},type:"button",className:"back",children:[Object(a.jsx)("img",{className:"back__icon",src:r.a,alt:"Go back"}),Object(a.jsx)("span",{className:"back__text",children:"Back"})]})}},function(t,e,c){},,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},,,,,,,,,function(t,e,c){"use strict";c.r(e);var n=c(5),r=c(9),a=c(0),s=c(3),i=c(75),o=c(66),l=c(35),u=c(56),d=(c(83),c(1)),j=function(t){var e=t.description;return Object(d.jsxs)("article",{className:"about",children:[Object(d.jsx)("h2",{className:"about__title",children:"About"}),Object(d.jsx)("ul",{className:"about__description",children:e.map((function(t){var e=t.title,c=t.text;return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{className:"about__description-title",children:e}),Object(d.jsx)("div",{className:"about__description-text-container",children:c.map((function(t){return Object(d.jsx)("p",{className:"about__description-text",children:t},t)}))})]},e)}))})]})},b=c(32),f=c(20),p=c(22),m=c(60),O=c(53),h=c(8),x=(c(84),function(t){var e=t.title,c=t.children;return Object(d.jsxs)("div",{className:"spec-picker",children:[Object(d.jsx)("p",{className:"spec-picker__title",children:e}),Object(d.jsx)("ul",{className:"spec-picker__list",children:c})]})}),_=c(14),v=(c(85),function(t){var e=t.productId,c=t.capacities;return Object(d.jsx)(x,{title:"Select capacity",children:c.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{replace:!0,className:Object(_.c)("capacity"),to:"../".concat(Object(_.b)(e,-2,t)),children:t})},t)}))})}),g=(c(86),function(t){switch(t){case"midnightgreen":return"#28372A";case"spacegray":return"#717378";case"rosegold":return"#B76E79";default:return t}}),N=function(t){var e=t.productId,c=t.colors;return Object(d.jsx)(x,{title:"Available colors",children:c.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(h.c,{replace:!0,className:Object(_.c)("color"),to:"../".concat(Object(_.b)(e,-1,t)),children:Object(d.jsx)("div",{className:"color__container",style:{backgroundColor:g(t)}})})},t)}))})},y=(c(87),c(51)),k=c.n(y),w=function(t){var e=t.images,c=t.name,r=Object(a.useState)(null),s=Object(n.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(e.length),u=Object(n.a)(l,2),j=u[0],f=u[1];return Object(a.useEffect)((function(){o(null),0===j&&o(e[0])}),[j]),Object(d.jsxs)("div",{className:"product-gallery",children:[Object(d.jsx)("ul",{className:"product-gallery__slides",children:e.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:k()("product-gallery__button",{"product-gallery__button--active":t===i}),type:"button",onClick:function(){return o(t)},children:Object(d.jsx)("img",{className:"product-gallery__slide-image",src:t,alt:"",onLoad:function(){return f((function(t){return t-1}))}})})},t)}))}),Object(d.jsx)("div",{className:"product-gallery__wrapper",children:i?Object(d.jsx)("img",{className:"product-gallery__selected-image",src:i,alt:c},i):Object(d.jsx)(b.a,{width:150})})]})},C=(c(88),function(t){var e=t.selectedProduct,c=e.id,n=e.images,r=e.name,a=e.colorsAvailable,s=e.capacityAvailable,i=e.priceDiscount,o=e.priceRegular,l=Object(f.b)(),j=l.addCartItem,b=l.cartItems.some((function(t){return t.id===c}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{images:n,name:r},c),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)(N,{colors:a,productId:c}),Object(d.jsx)(v,{capacities:s,productId:c}),Object(d.jsxs)("p",{className:"details__price",children:["$".concat(i),Object(d.jsx)("span",{className:"details__price--strike",children:"$".concat(o)})]}),Object(d.jsxs)("div",{className:"details__controls",children:[Object(d.jsx)(O.a,{isActive:b,onClick:function(){return j(e)},width:263,height:48,children:"Add to cart"}),Object(d.jsx)(m.a,{product:e,productId:c,size:48})]}),Object(d.jsx)(u.a,{specifications:Object(p.a)(e),specCount:4})]})]})}),A=c(36),I=c(71),S=(c(89),c(59)),P=c(31),L=c(73),D=function(t,e){switch(e.type){case"loading":return Object(r.a)(Object(r.a)({},t),{},{isLoading:!0,error:""});case"selectedProduct/loaded":return Object(r.a)(Object(r.a)({},t),{},{isLoading:!1,selectedProduct:e.payload});case"failed":return"404"===e.payload?Object(r.a)(Object(r.a)({},t),{},{isLoading:!1,error:"Phone was not found"}):Object(r.a)(Object(r.a)({},t),{},{isLoading:!1,error:"Something went wrong, try again later"});default:return t}},M={selectedProduct:null,isLoading:!1,error:""};e.default=function(){var t=Object(a.useReducer)(D,M),e=Object(n.a)(t,2),c=e[0],r=c.selectedProduct,f=c.isLoading,m=c.error,O=e[1],h=Object(s.r)().productId,x=void 0===h?"":h,_=Object(P.b)().products,v=Object(a.useMemo)((function(){return Object(S.d)(_.phones)}),[r]),g=r||{},N=g.name,y=void 0===N?"":N,k=g.description,w=void 0===k?[]:k;return Object(a.useEffect)((function(){var t=new AbortController,e=t.signal;return O({type:"loading"}),Object(l.a)(x,e).then((function(t){return O({type:"selectedProduct/loaded",payload:t})})).catch((function(t){return O({type:"failed",payload:t.message})})),function(){return t.abort()}}),[x]),m?Object(d.jsx)(I.default,{title:m}):Object(d.jsxs)("div",{className:"product-details",children:[Object(d.jsx)(o.a,{}),Object(d.jsx)(i.a,{}),r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{className:"product-details__name",children:[y,f&&Object(d.jsx)(b.a,{width:25})]}),Object(d.jsxs)("section",{className:"product-details__info",children:[Object(d.jsx)(C,{selectedProduct:r}),Object(d.jsx)("p",{className:"product-details__id",children:"ID: ".concat(x)})]}),Object(d.jsxs)("section",{className:"product-details__info",children:[Object(d.jsx)(j,{description:w}),Object(d.jsxs)("div",{className:"product-details__specs",children:[Object(d.jsx)("h2",{className:"product-details__title",children:"Tech Specs"}),Object(d.jsx)(u.a,{style:{fontSize:14,fontWeight:500},specifications:Object(p.a)(r)})]})]}),Object(d.jsx)("section",{className:"product-details__slider",children:Object(d.jsx)(L.a,{title:"You may also like",products:v})})]}):Object(d.jsx)(A.a,{})]})}}])]);
//# sourceMappingURL=2.748ffb0b.chunk.js.map