(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[13],{210:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(240);t.a=function(){var e=o.a.useContext(a.a),t=e.title,n=e.setTitle,r=e.subtitle,i=e.setSubtitle,c=e.type,u=e.setType,l=e.logoSize,s=e.setLogoSize,f=e.setDoGoBack;return{title:t,setTitle:n,subtitle:r,setSubtitle:i,type:c,setType:u,logoSize:l,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:f}}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){window.scrollTo({top:0,behavior:"smooth"})}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),o=n.n(r),a=n(228),i=n(206);function c(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return e},e}var u=n(205).default.div(c(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),l=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,i=e.leftDisabled,c=e.leftHandler,l=e.rightLabel,s=e.rightDisabled,f=e.rightHandler;return o.a.createElement(u,null,o.a.createElement(a.a,{dark:n,disabled:i,onClick:c},r),l&&f&&o.a.createElement(a.a,{dark:!n,disabled:s,onClick:f},l))})),s=o.a.memo(l)},219:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),c=n(44),u=a(n(258));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,l=e.closeOnEsc,s=void 0===l||l,f=e.bindTo,p=e.isOpen,d=void 0!==p&&p,m=e.onOpen,b=e.onClose,h=e.onPortalClick,v=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=u.default(),g=y.isServer,O=y.isBrowser,E=i.useState(d),j=E[0],w=E[1],x=i.useRef(j),k=i.useCallback((function(e){x.current=e,w(e)}),[]),S=i.useRef(),P=i.useRef(O?document.createElement("div"):null);i.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var C=i.useMemo((function(){if(!g)return f&&c.findDOMNode(f)||document.body}),[g,f]),T=function(e){if(!e)return{portal:P,targetEl:S,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=S,t.event=e;var n=e.currentTarget;return!S.current&&n&&n!==document&&(S.current=t.currentTarget),t},B=Object.entries(v).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(T(e))},e}),{}),L=i.useCallback((function(e){if(!g){var n=T(e);if(null==S.current)throw setTimeout((function(){return k(!0)}),0),Error(t.errorMessage1);m&&m(n),k(!0)}}),[g,P,k,S,m]),D=i.useCallback((function(e){if(!g){var t=T(e);b&&x.current&&b(t),x.current&&k(!1)}}),[g,b,k]),V=i.useCallback((function(e){return x.current?D(e):L(e)}),[D,L]),I=i.useCallback((function(e){return"Escape"===e.key&&s?D(e):void 0}),[s,D]),N=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!x.current||t(S)||a&&D(e)}),[g,D,a,P]),_=i.useCallback((function(e){if(!g&&P.current instanceof HTMLElement){var t=T(e);P.current.contains(t.target)&&h&&h(t),N(e)}}),[N]),M=i.useRef({});i.useEffect((function(){if(!g&&C instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return C.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];v[t]&&(M.current[t]=function(e){return v[t](T(e))},document.addEventListener(n,M.current[t]))})),document.addEventListener("keydown",I),document.addEventListener("mousedown",_),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];v[t]&&(document.removeEventListener(n,M.current[t]),delete M.current[t])})),document.removeEventListener("keydown",I),document.removeEventListener("mousedown",_),C.removeChild(t)}}}),[g,N,I,C,P]);var z=i.useCallback((function(e){var t=e.children;return null!=P.current?c.createPortal(t,P.current):null}),[P]);return Object.assign([L,D,x.current,z,V,S,P],r(r({isOpen:x.current,openPortal:L,ref:S,closePortal:D,togglePortal:V,Portal:z,portalRef:P},B),{bind:r({ref:S},B)}))}},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(236),o=n(9),a=n.n(o),i=n(206),c=n(205),u=n(225);function l(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return l=function(){return e},e}var s=c.default.button(l(),(function(e){var t=e.dark,n=e.disabled?u.a.purple_50:u.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),f=a.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return a.a.createElement(s,Object.assign({type:"button"},n),t)}))},229:function(e,t,n){var r=n(79);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},230:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},231:function(e,t,n){e.exports={parse:n(232),stringify:n(235)}},232:function(e,t,n){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(233),a=Object.create?Object.create(null):{};function i(e,t,n,r,o){var a=t.indexOf("<",r),i=t.slice(r,-1===a?void 0:a);/^\s*$/.test(i)&&(i=" "),(!o&&a>-1&&n+e.length>=0||" "!==i)&&e.push({type:"text",content:i})}e.exports=function(e,t){t||(t={}),t.components||(t.components=a);var n,c=[],u=-1,l=[],s={},f=!1;return e.replace(r,(function(r,a){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),m=0===r.indexOf("\x3c!--"),b=a+r.length,h=e.charAt(b);d&&!m&&(u++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!h||"<"===h||i(n.children,e,u,b,t.ignoreWhitespace),s[n.tagName]=n,0===u&&c.push(n),(p=l[u-1])&&p.children.push(n),l[u]=n),(m||!d||n.voidElement)&&(m||u--,!f&&"<"!==h&&h&&i(p=-1===u?c:l[u].children,e,u,b,t.ignoreWhitespace))})),!c.length&&e.length&&i(c,e,0,0,t.ignoreWhitespace),c}},233:function(e,t,n){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(234);e.exports=function(e){var t,n=0,a=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return a=!0,void n++;a?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(i.attrs[t]=t),t=r),n++,a=!1})),i}},234:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},235:function(e,t){function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},236:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(229),o=n.n(r),a=n(230),i=n.n(a),c=n(12),u=n.n(c),l=n(9),s=n.n(l),f=n(231),p=n.n(f),d=n(187),m=n(246);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function y(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function g(e){return Array.isArray(e)?e:[e]}function O(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){g(t).forEach((function(t){"string"!==typeof t&&(v(t)?e(y(t)):"object"!==i()(t)||s.a.isValidElement(t)||Object.assign(u,t))}))}(e);var l=n.services.interpolator.interpolate(t,h(h({},u),o),n.language),f=p.a.parse("<0>".concat(l,"</0>"));function d(e,t,n){var r=y(e),o=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s.a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r){e.dummy&&(e.children=t),n.push(s.a.cloneElement(e,h(h({},e.props),{},{key:r}),t))}function b(t,n,o){var u=g(t);return g(n).reduce((function(t,n,l){var f=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var p=u[parseInt(n.name,10)];!p&&1===o.length&&o[0][n.name]&&(p=o[0][n.name]),p||(p={});var y=0!==Object.keys(n.attrs).length?function(e,t){var n=h({},t);return n.props=Object.assign(e.props,t.props),n}({props:n.attrs},p):p,g=s.a.isValidElement(y),O=g&&v(n,!0)&&!n.voidElement,E=c&&"object"===i()(y)&&y.dummy&&!g,j="object"===i()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof y)t.push(y);else if(v(y)||O){m(y,d(y,n,o),t,l)}else if(E){var w=b(u,n.children,o);t.push(s.a.cloneElement(y,h(h({},y.props),{},{key:l}),w))}else if(Number.isNaN(parseFloat(n.name))){if(j)m(y,d(y,n,o),t,l);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var x=b(u,n.children,o);t.push(s.a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},x))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=b(u,n.children,o);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}}else if("object"!==i()(y)||g)1===n.children.length&&f?t.push(s.a.cloneElement(y,h(h({},y.props),{},{key:l}),f)):t.push(s.a.cloneElement(y,h(h({},y.props),{},{key:l})));else{var S=n.children[0]?f:null;S&&t.push(S)}}else"text"===n.type&&t.push(n.content);return t}),[])}return y(b([{dummy:!0,children:e}],f,g(e||[]))[0])}function E(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,c=e.tOptions,u=e.values,f=e.defaults,p=e.components,b=e.ns,v=e.i18n,y=e.t,E=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=Object(l.useContext)(d.a)||{},w=j.i18n,x=j.defaultNS,k=v||w||Object(d.d)();if(!k)return Object(m.d)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var S=y||k.t.bind(k)||function(e){return e},P=h(h({},Object(d.c)()),k.options&&k.options.react),C=b||S.ns||x||k.options&&k.options.defaultNS;C="string"===typeof C?[C]:C||["translation"];var T=f||function e(t,n){if(!t)return"";var r="",a=g(t),c=n.transKeepBasicHtmlNodesFor||[];return a.forEach((function(t,a){if("string"===typeof t)r+="".concat(t);else if(s.a.isValidElement(t)){var u=Object.keys(t.props).length,l=c.indexOf(t.type)>-1,f=t.props.children;if(!f&&l&&0===u)r+="<".concat(t.type,"/>");else if(f||l&&0===u)if(t.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(l&&1===u&&"string"===typeof f)r+="<".concat(t.type,">").concat(f,"</").concat(t.type,">");else{var p=e(f,n);r+="<".concat(a,">").concat(p,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===i()(t)){var d=t.format,b=o()(t,["format"]),h=Object.keys(b);if(1===h.length){var v=d?"".concat(h[0],", ").concat(d):h[0];r+="{{".concat(v,"}}")}else Object(m.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else Object(m.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}(t,P)||P.transEmptyNodeValue||a,B=P.hashTransKey,L=a||(B?B(T):T),D=u?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},V=h(h(h(h({},c),{},{count:n},u),D),{},{defaultValue:T,ns:C}),I=O(p||t,L?S(L,V):T,k,P,V),N=void 0!==r?r:P.defaultTransParent;return N?s.a.createElement(N,E,I):I}},258:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,i=r.Server,c=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),l="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:u?a:i,s={isBrowser:l===a,isServer:l===i,isNative:l===c,device:l,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:l===a&&!!window.addEventListener,canUseViewport:l===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=s,Object.keys(e).map((function(t){return e[t]})),s));var e},p=f();t.weAreServer=function(){s.isServer=!0,p=f()},t.useSSR=function(){return p},t.default=t.useSSR},377:function(e,t,n){"use strict";n.r(t);var r=n(204),o=n(9),a=n.n(o),i=n(242),c=n(863),u=n(255),l=n(219),s=n.n(l),f=n(252),p=n(210),d=n(215),m=n(237),b=n(211),h=n(220),v=n(263);t.default=a.a.memo((function(e){var t=s()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,n=Object(i.g)(),l=Object(p.a)(),y=l.setType,g=l.setDoGoBack,O=l.setLogoSize,E=l.setSubtitle,j=Object(c.a)().t,w=Object(o.useState)(!0),x=Object(r.a)(w,2),k=x[0],S=x[1],P=Object(h.d)(),C=a.a.useCallback((function(){e.nextStep&&n.push(e.nextStep)}),[n,e.nextStep]),T=Object(o.useCallback)((function(){y("none"),e.previousStep?(S(!1),n.push(e.previousStep)):n.goBack()}),[]);return Object(o.useEffect)((function(){Object(b.a)(),g((function(){return T})),O("regular"),E(j("helpVirufy:title")),y("secondary")}),[T,g,O,y,E,j]),a.a.createElement(v.WelcomeStyledFormAlternative,null,a.a.createElement(v.ContainerShapeDown,{isMobile:f.isMobile},a.a.createElement(v.InnerContainerShapeDown,null,a.a.createElement(v.AboutUsSVG,null))),a.a.createElement(v.WelcomeContent,{maxWidth:470,mt:0},a.a.createElement(m.b,{mt:0,textCenter:!0},a.a.createElement(u.a,{i18nKey:"helpVirufy:aboutBeforeText"},a.a.createElement("p",null,"Before we begin, please tell us a little about us and the content of our research. I will explain it in about 5 minutes."))),a.a.createElement(v.BoldBlackText,{mb:0},j("helpVirufy:aboutTitle","Organization overview")),a.a.createElement(m.b,{mt:0},a.a.createElement(u.a,{i18nKey:"helpVirufy:aboutParagraph"},a.a.createElement("p",null,"Virufy, a non-profit organization that develops an artificial intelligence (AI) app that can determine whether cough sounds are similar to those of patients suffering from COVID-19 and seasonal influenza, is We are conducting clinical research to collect cough sounds (audio collection for AI learning) in preparation for the launch of the app in Japan. ",a.a.createElement("br",null),a.a.createElement("br",null),"Virufy is a California nonprofit organization recognized as a tax-exempt public benefit corporation under Section 501(c)(3) of the Internal Revenue Code. We were established in March 2020 as a project of Stanford University's COVID-19 Innovation Response Lab, and have been active globally, including in Japan. With the help of leading researchers and experts from around the world and more than 50 organizations including medical institutions, law firms, technology companies, university groups, and global NGOs, we have collected over 400,000 cough audio records. We collect samples and develop AI apps based on algorithms we independently built using machine learning.")))),k&&a.a.createElement(t,null,a.a.createElement(d.a,{invert:!0,leftLabel:j("Japan"===P?"helpVirufy:followingPage":"helpVirufy:nextButton"),leftHandler:C})))}))}}]);
//# sourceMappingURL=13.cbd3061b.chunk.js.map