!function(){var t={9662:function(t,e,n){var r=n(7854),o=n(614),i=n(6330),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(7854),o=n(614),i=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),s=r("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},9670:function(t,e,n){var r=n(7854),o=n(111),i=r.String,s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),s=function(t){return function(e,n,s){var a,u=r(e),c=i(u),f=o(s,c);if(t&&n!=n){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),s=n(3070);t.exports=function(t,e){for(var n=o(e),a=s.f,u=i.f,c=0;c<n.length;c++){var f=n[c];r(t,f)||a(t,f,u(e,f))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,n){"use strict";var r=n(3383).IteratorPrototype,o=n(30),i=n(9114),s=n(8003),a=n(7497),u=function(){return this};t.exports=function(t,e,n){var c=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),s(t,c,!1,!0),a[c]=u,t}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},654:function(t,e,n){"use strict";var r=n(2109),o=n(6916),i=n(1913),s=n(6530),a=n(614),u=n(4994),c=n(9518),f=n(7674),l=n(8003),p=n(8880),h=n(1320),d=n(5112),v=n(7497),m=n(3383),y=s.PROPER,g=s.CONFIGURABLE,x=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=d("iterator"),S="keys",O="values",T="entries",L=function(){return this};t.exports=function(t,e,n,s,d,m,j){u(n,e,s);var E,M,P,C=function(t){if(t===d&&D)return D;if(!b&&t in I)return I[t];switch(t){case S:case O:case T:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",k=!1,I=t.prototype,_=I[w]||I["@@iterator"]||d&&I[d],D=!b&&_||C(d),F="Array"==e&&I.entries||_;if(F&&(E=c(F.call(new t)))!==Object.prototype&&E.next&&(i||c(E)===x||(f?f(E,x):a(E[w])||h(E,w,L)),l(E,A,!0,!0),i&&(v[A]=L)),y&&d==O&&_&&_.name!==O&&(!i&&g?p(I,"name",O):(k=!0,D=function(){return o(_,this)})),d)if(M={values:C(O),keys:m?D:C(S),entries:C(T)},j)for(P in M)(b||k||!(P in I))&&h(I,P,M[P]);else r({target:e,proto:!0,forced:b||k},M);return i&&!j||I[w]===D||h(I,w,D,{name:d}),v[e]=D,M}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),s=n(8113),a=i.process,u=i.Deno,c=a&&a.versions||u&&u.version,f=c&&c.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),s=n(1320),a=n(3505),u=n(9920),c=n(4705);t.exports=function(t,e){var n,f,l,p,h,d=t.target,v=t.global,m=t.stat;if(n=v?r:m?r[d]||a(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(n,f))&&h.value:n[f],!c(v?f:d+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),s(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},1702:function(t){var e=Function.prototype,n=e.bind,r=e.call,o=n&&n.bind(r);t.exports=n?function(t){return t&&o(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),o=n(1702),i=n(7293),s=n(4326),a=r.Object,u=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?u(t,""):a(t)}:a},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,s=n(8536),a=n(7854),u=n(1702),c=n(111),f=n(8880),l=n(2597),p=n(5465),h=n(6200),d=n(3501),v="Object already initialized",m=a.TypeError,y=a.WeakMap;if(s||p.state){var g=p.state||(p.state=new y),x=u(g.get),b=u(g.has),w=u(g.set);r=function(t,e){if(b(g,t))throw new m(v);return e.facade=t,w(g,t,e),e},o=function(t){return x(g,t)||{}},i=function(t){return b(g,t)}}else{var S=h("state");d[S]=!0,r=function(t,e){if(l(t,S))throw new m(v);return e.facade=t,f(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,s=function(t,e){var n=u[a(t)];return n==f||n!=c&&(o(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=s.data={},c=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),o=n(5005),i=n(614),s=n(7976),a=n(3307),u=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,u(t))}},3383:function(t,e,n){"use strict";var r,o,i,s=n(7293),a=n(614),u=n(30),c=n(9518),f=n(1320),l=n(5112),p=n(1913),h=l("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):d=!0),null==r||s((function(){var t={};return r[h].call(t)!==t}))?r={}:p&&(r=u(r)),a(r[h])||f(r,h,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},7497:function(t){t.exports={}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),s=r.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},30:function(t,e,n){var r,o=n(9670),i=n(6048),s=n(748),a=n(3501),u=n(490),c=n(317),f=n(6200),l=f("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;v="undefined"!=typeof document?document.domain&&r?d(r):((e=c("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F):d(r);for(var n=s.length;n--;)delete v.prototype[s[n]];return v()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3070),i=n(9670),s=n(5656),a=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=s(e),u=a(e),c=u.length,f=0;c>f;)o.f(t,n=u[f++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),o=n(9781),i=n(4664),s=n(9670),a=n(4948),u=r.TypeError,c=Object.defineProperty;e.f=o?c:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),s=n(9114),a=n(5656),u=n(4948),c=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=a(t),e=u(e),f)try{return l(t,e)}catch(t){}if(c(t,e))return s(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),o=n(2597),i=n(614),s=n(7908),a=n(6200),u=n(8544),c=a("IE_PROTO"),f=r.Object,l=f.prototype;t.exports=u?f.getPrototypeOf:function(t){var e=s(t);if(o(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof f?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,a=n(3501),u=r([].push);t.exports=function(t,e){var n,r=i(t),c=0,f=[];for(n in r)!o(a,n)&&o(r,n)&&u(f,n);for(;e.length>c;)o(r,n=e[c++])&&(~s(f,n)||u(f,n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(7854),o=n(6916),i=n(614),s=n(111),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!s(r=o(n,t)))return r;if(i(n=t.valueOf)&&!s(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!s(r=o(n,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),s=n(5181),a=n(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=s.f;return n?u(e,n(t)):e}},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(2597),s=n(8880),a=n(3505),u=n(2788),c=n(9909),f=n(6530).CONFIGURABLE,l=c.get,p=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,u){var c,l=!!u&&!!u.unsafe,d=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet,m=u&&void 0!==u.name?u.name:e;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==m)&&s(n,"name",m),(c=p(n)).source||(c.source=h.join("string"==typeof m?m:""))),t!==r?(l?!v&&t[e]&&(d=!0):delete t[e],d?t[e]=n:s(t,e,n)):d?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},4488:function(t,e,n){var r=n(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},8003:function(t,e,n){var r=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),o=n(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,n){var r=n(7854),o=n(6916),i=n(111),s=n(2190),a=n(8173),u=n(2140),c=n(5112),f=r.TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,r=a(t,l);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||s(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t,e,n){var r=n(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),s=n(9711),a=n(133),u=n(3307),c=o("wks"),f=r.Symbol,l=f&&f.for,p=u?f:f&&f.withoutSetter||s;t.exports=function(t){if(!i(c,t)||!a&&"string"!=typeof c[t]){var e="Symbol."+t;a&&i(f,t)?c[t]=f[t]:c[t]=u&&l?l(e):p(e)}return c[t]}},6992:function(t,e,n){"use strict";var r=n(5656),o=n(1223),i=n(7497),s=n(9909),a=n(654),u="Array Iterator",c=s.set,f=s.getterFor(u);t.exports=a(Array,"Array",(function(t,e){c(this,{type:u,target:r(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},3948:function(t,e,n){var r=n(7854),o=n(8324),i=n(8509),s=n(6992),a=n(8880),u=n(5112),c=u("iterator"),f=u("toStringTag"),l=s.values,p=function(t,e){if(t){if(t[c]!==l)try{a(t,c,l)}catch(e){t[c]=l}if(t[f]||a(t,f,e),o[e])for(var n in s)if(t[n]!==s[n])try{a(t,n,s[n])}catch(e){t[n]=s[n]}}};for(var h in o)p(r[h]&&r[h].prototype,h);p(i,"DOMTokenList")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";class t extends Winter.Module{constructor(t,e,n,r){super(t),this.message=e,this.type=n||"default",this.duration=r||7,this.clear(),this.timer=null,this.flashTimer=null,this.create()}dependencies(){return["transition"]}destructor(){null!==this.timer&&window.clearTimeout(this.timer),this.flash&&(this.flashTimer.remove(),this.flash.remove(),this.flash=null,this.flashTimer=null),super.destructor()}create(){this.flash=document.createElement("DIV"),this.flashTimer=document.createElement("DIV"),this.flash.innerHTML=this.message,this.flash.classList.add("flash-message",this.type),this.flashTimer.classList.add("flash-timer"),this.flash.removeAttribute("data-control"),this.flash.addEventListener("click",(()=>this.remove())),this.flash.addEventListener("mouseover",(()=>this.stopTimer())),this.flash.addEventListener("mouseout",(()=>this.startTimer())),this.flash.appendChild(this.flashTimer),document.body.appendChild(this.flash),this.winter.transition(this.flash,"show",(()=>{this.startTimer()}))}remove(){this.stopTimer(),this.winter.transition(this.flash,"hide",(()=>{this.flash.remove(),this.flash=null,this.destructor()}))}clear(){document.querySelectorAll("body > div.flash-message").forEach((t=>t.remove()))}startTimer(){this.timerTrans=this.winter.transition(this.flashTimer,"timeout",null,"".concat(this.duration,".0s"),!0),this.timer=window.setTimeout((()=>this.remove()),1e3*this.duration)}stopTimer(){this.timerTrans&&this.timerTrans.cancel(),window.clearTimeout(this.timer)}}class e extends Winter.Singleton{dependencies(){return["flash"]}listens(){return{ready:"ready",ajaxErrorMessage:"ajaxErrorMessage"}}ready(){document.querySelectorAll('[data-control="flash-message"]').forEach((t=>{this.winter.flash(t.innerHTML,t.dataset.flashType,t.dataset.flashDuration)}))}ajaxErrorMessage(t){return this.winter.flash(t,"error"),!1}}var r;n(3948);class o extends Winter.Module{constructor(t,e,n,r,o,i){if(super(t),e instanceof HTMLElement==!1)throw new Error("A HTMLElement must be provided for transitioning");if(this.element=e,"string"!=typeof n)throw new Error("Transition name must be specified as a string");if(this.transition=n,r&&"function"!=typeof r)throw new Error("Callback must be a valid function");this.callback=r,this.duration=o?this.parseDuration(o):null,this.trailTo=!0===i,this.doTransition()}eventClasses(){const t=Array.from(arguments),e={in:"".concat(this.transition,"-in"),active:"".concat(this.transition,"-active"),out:"".concat(this.transition,"-out")};if(0===t.length)return Object.values(e);const n=[];for(const[r,o]of Object.entries(e))-1!==t.indexOf(r)&&n.push(o);return n}doTransition(){null!==this.duration&&(this.element.style.transitionDuration=this.duration),this.resetClasses(),this.eventClasses("in","active").forEach((t=>{this.element.classList.add(t)})),window.requestAnimationFrame((()=>{"0s"!==window.getComputedStyle(this.element)["transition-duration"]?(this.element.addEventListener("transitionend",(()=>this.onTransitionEnd()),{once:!0}),window.requestAnimationFrame((()=>{this.element.classList.remove(this.eventClasses("in")[0]),this.element.classList.add(this.eventClasses("out")[0])}))):(this.resetClasses(),this.callback&&this.callback.apply(this.element),this.destructor())}))}onTransitionEnd(){this.eventClasses("active",this.trailTo?"":"out").forEach((t=>{this.element.classList.remove(t)})),this.callback&&this.callback.apply(this.element),null!==this.duration&&(this.element.style.transitionDuration=null),this.destructor()}cancel(){this.element.removeEventListener("transitionend",(()=>this.onTransitionEnd),{once:!0}),this.resetClasses(),null!==this.duration&&(this.element.style.transitionDuration=null),this.destructor()}resetClasses(){this.eventClasses().forEach((t=>{this.element.classList.remove(t)}))}parseDuration(t){const e=/^([0-9]+(\.[0-9]+)?)(m?s)?$/.exec(t),n=Number(e[1]);return"sec"===("s"===e[3]?"sec":"msec")?1e3*n+"ms":Math.floor(n)+"ms"}}class i extends Winter.Singleton{dependencies(){return["request"]}listens(){return{ajaxStart:"ajaxStart",ajaxDone:"ajaxDone"}}ajaxStart(t){if(t.element)if("FORM"===t.element.tagName){const e=t.element.querySelectorAll("[data-attach-loading]");e.length>0&&e.forEach((t=>{t.classList.add(this.getLoadingClass(t))}))}else void 0!==t.element.dataset.attachLoading&&t.element.classList.add(this.getLoadingClass(t.element))}ajaxDone(t){if(t.element)if("FORM"===t.element.tagName){const e=t.element.querySelectorAll("[data-attach-loading]");e.length>0&&e.forEach((t=>{t.classList.remove(this.getLoadingClass(t))}))}else void 0!==t.element.dataset.attachLoading&&t.element.classList.remove(this.getLoadingClass(t.element))}getLoadingClass(t){return void 0!==t.dataset.attachLoading&&""!==t.dataset.attachLoading?t.dataset.attachLoading:"wn-loading"}}(r=window.winter).addModule("transition",o),r.addModule("flash",t),r.addModule("flashListener",e),r.addModule("attachLoading",i)}()}();