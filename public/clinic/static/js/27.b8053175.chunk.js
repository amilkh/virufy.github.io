(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[27],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return j}));var r=n(213),o=n(206),a=n(9),i=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=i(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var u=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,o=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",o||window.localStorage.getItem(r)||"")})}var l=Object(a.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,o=e.store;return t({externalStoreData:i(r,n),currentStoreData:o})};function d(e,t,n){var a=e,c=t.syncStores;if(!c)return a;try{if(Array.isArray(c))c.forEach((function(e){a=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:a})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:a});Object.entries(c).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],u=t[1],s=i(n,c);u.forEach((function(e){a=Object.assign(Object.assign({},a),Object(r.a)({},e,Object.assign(Object.assign({},a[e]),s[e])))}))}))}}catch(u){return a}return a}var v,p,m,b="undefined"!==typeof window,g=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},O=[];function y(e){g=e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(g,n);m=r.getName,v=r.get,p=r.set,O=t.middleWares,s(!1,g,m,v),p(d(v()||e,t,g))}function E(e){var t=Object(a.useState)(v()),n=Object(o.a)(t,2),r=n[0],i=n[1],c=Object(a.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(a.createElement)(l.Provider,Object.assign({value:c},e))}var S=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var o;n&&n.name;if(n&&(o=n(v(),e)),p(u(o)?v():o),g.setItem(m(),JSON.stringify(v())),u(t)||t&&!1!==t.shouldReRenderApp){var a=v();Array.isArray(O)&&O.length&&(a=O.reduce((function(e,t){return t(e)||e}),a)),r(a)}}};function j(e,t){var n=Object(a.useContext)(l),i=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var i=Object(o.a)(n,2),u=i[0],s=i[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(a.useCallback)(S({options:t,callback:s,updateStore:c}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(a.useCallback)(e?S({options:t,callback:e,updateStore:c}):function(){},[]),state:i}}},212:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),c=n(44),u=a(n(220));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,a=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,p=e.onOpen,m=e.onClose,b=e.onPortalClick,g=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),O=u.default(),y=O.isServer,h=O.isBrowser,E=i.useState(v),S=E[0],j=E[1],w=i.useRef(S),_=i.useCallback((function(e){w.current=e,j(e)}),[]),x=i.useRef(),k=i.useRef(h?document.createElement("div"):null);i.useEffect((function(){h&&!k.current&&(k.current=document.createElement("div"))}),[h,k]);var T=i.useMemo((function(){if(!y)return f&&c.findDOMNode(f)||document.body}),[y,f]),C=function(e){if(!e)return{portal:k,targetEl:x,event:e};var t=e||{};t.persist&&t.persist(),t.portal=k,t.targetEl=x,t.event=e;var n=e.currentTarget;return!x.current&&n&&n!==document&&(x.current=t.currentTarget),t},N=Object.entries(g).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(C(e))},e}),{}),A=i.useCallback((function(e){if(!y){var n=C(e);if(null==x.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);p&&p(n),_(!0)}}),[y,k,_,x,p]),I=i.useCallback((function(e){if(!y){var t=C(e);m&&w.current&&m(t),w.current&&_(!1)}}),[y,m,_]),P=i.useCallback((function(e){return w.current?I(e):A(e)}),[I,A]),M=i.useCallback((function(e){return"Escape"===e.key&&l?I(e):void 0}),[l,I]),B=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(k)||0!==e.button||!w.current||t(x)||a&&I(e)}),[y,I,a,k]),D=i.useCallback((function(e){if(!y&&k.current instanceof HTMLElement){var t=C(e);k.current.contains(t.target)&&b&&b(t),B(e)}}),[B]),H=i.useRef({});i.useEffect((function(){if(!y&&T instanceof HTMLElement&&k.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=k.current;return T.appendChild(k.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(H.current[t]=function(e){return g[t](C(e))},document.addEventListener(n,H.current[t]))})),document.addEventListener("keydown",M),document.addEventListener("mousedown",D),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(document.removeEventListener(n,H.current[t]),delete H.current[t])})),document.removeEventListener("keydown",M),document.removeEventListener("mousedown",D),T.removeChild(t)}}}),[y,B,M,T,k]);var L=i.useCallback((function(e){var t=e.children;return null!=k.current?c.createPortal(t,k.current):null}),[k]);return Object.assign([A,I,w.current,L,P,x,k],r(r({isOpen:w.current,openPortal:A,ref:x,closePortal:I,togglePortal:P,Portal:L,portalRef:k},N),{bind:r({ref:x},N)}))}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),o=n.n(r),a=n(214),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,u=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["as","errors","name","message","render"]),l=Object(a.f)(),f=Object(a.c)(n||l.errors,r);if(!f)return null;var d=f.message,v=f.types,p=i(i({},s),{children:d||c});return t?o.a.isValidElement(t)?o.a.cloneElement(t,p):o.a.createElement(t,p):u?u({message:d||c,messages:v}):o.a.createElement(o.a.Fragment,i({},p))}},220:function(e,t,n){"use strict";var r,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var a=r.Browser,i=r.Server,c=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:u?a:i,l={isBrowser:s===a,isServer:s===i,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===a&&!!window.addEventListener,canUseViewport:s===a&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return o(o({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(9),o=n.n(r),a=n(850),i=n(211),c=n(205),u=n(204);function s(){var e=Object(c.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return l=function(){return e},e}function f(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return f=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var v=u.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),p=(u.default.div(f()),u.default.div(l(),(function(e){return e.theme.colors.purple}))),m=u.default.div(s(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),b=o.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.radius,c=void 0===r?30:r,u=e.stroke,s=void 0===u?6:u,l=e.currentStep,f=void 0===l?2:l,d=e.totalSteps,b=void 0===d?4:d,g=e.color,O=void 0===g?i.a.green:g,y=e.colorTrack,h=void 0===y?i.a.gray3:y,E=e.progressBar,S=void 0!==E&&E,j=Object(a.a)().t,w=f/b*100,_=c-s/2,x=2*_*Math.PI,k=x-w/100*x;return o.a.createElement(o.a.Fragment,null,S?o.a.createElement(p,null,j("questionary:progressBar",{currentStep:f,totalSteps:b}),o.a.createElement(m,{currentStep:f,totalSteps:b})):o.a.createElement(v,{className:n},o.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},o.a.createElement("circle",{className:"track",stroke:h,fill:"transparent",strokeWidth:s,r:_,cx:c,cy:c}),o.a.createElement("circle",{stroke:O,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(x," ").concat(x),style:{strokeDashoffset:k},r:_,cx:c,cy:c}),o.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(f,"/").concat(b)))))}))},328:function(e,t,n){"use strict";n.r(t);var r=n(216),o=n.n(r),a=n(217),i=n(206),c=n(9),u=n.n(c),s=n(240),l=n(212),f=n.n(l),d=n(850),v=n(214),p=n(210),m=n(231),b=n(219),g=n(232),O=n(218),y=n(207),h=n(208),E=n(230),S=n(245),j=n(215),w=n(236),_=g.object({biologicalSex:g.string()}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.metadata,g=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,x=Object(y.a)(),k=x.setDoGoBack,T=x.setTitle,C=x.setType,N=Object(s.g)(),A=Object(d.a)().t,I=Object(p.d)(Object(O.b)(r)),P=I.state,M=I.action,B=u.a.useState(!0),D=Object(i.a)(B,2),H=D[0],L=D[1],R=Object(v.e)({mode:"onChange",defaultValues:null===P||void 0===P?void 0:P[r],resolver:Object(m.a)(_)}),q=R.control,W=R.handleSubmit,G=R.formState,U=G.errors,V=G.isValid,J=u.a.useCallback((function(){L(!1),t?N.push(t):N.goBack()}),[N,t]);Object(c.useEffect)((function(){Object(h.a)(),T("".concat(A("questionary:biologicalSex.title"))),C("primary"),k((function(){return J}))}),[J,k,T,C,l,A]);var z=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(M(t),n&&(L(!1),N.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(w.MainContainer,null,u.a.createElement(E.a,{currentStep:null===l||void 0===l?void 0:l.current,totalSteps:null===l||void 0===l?void 0:l.total,progressBar:!0}),u.a.createElement(w.QuestionText,{first:!0,hasNote:!0},A("questionary:biologicalSex.question")),u.a.createElement(w.QuestionNote,null,A("questionary:biologicalSex.note")),u.a.createElement(v.a,{control:q,name:"biologicalSex",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(S.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"male",label:A("questionary:biologicalSex.options.male")},{value:"female",label:A("questionary:biologicalSex.options.female")},{value:"notToSay",label:A("questionary:biologicalSex.options.notToSay")}]})}}),u.a.createElement("p",null,u.a.createElement(b.a,{errors:U,name:"name"})),H&&u.a.createElement(g,null,u.a.createElement(j.a,{leftLabel:A("questionary:nextButton"),leftHandler:W(z),leftDisabled:!V,invert:!0})))}))}}]);
//# sourceMappingURL=27.b8053175.chunk.js.map