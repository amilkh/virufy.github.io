(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[25],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return j}));var r=n(213),a=n(206),o=n(9),c=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function i(e,t){var n=t||"__STATE_MACHINE__",r=c(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var u=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:c(r,n),currentStoreData:a})};function d(e,t,n){var o=e,i=t.syncStores;if(!i)return o;try{if(Array.isArray(i))i.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(i.externalStoreName&&"function"===typeof i.transform&&"string"===typeof i.externalStoreName)return f({transform:i.transform,externalStoreName:i.externalStoreName,storageType:n,store:o});Object.entries(i).forEach((function(e){var t=Object(a.a)(e,2),i=t[0],u=t[1],s=c(n,i);u.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),s[e])))}))}))}}catch(u){return o}return o}var v,p,m,b="undefined"!==typeof window,g=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},y=[];function O(e){g=e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=i(g,n);m=r.getName,v=r.get,p=r.set,y=t.middleWares,s(!1,g,m,v),p(d(v()||e,t,g))}function E(e){var t=Object(o.useState)(v()),n=Object(a.a)(t,2),r=n[0],c=n[1],i=Object(o.useMemo)((function(){return{store:r,updateStore:c}}),[r]);return Object(o.createElement)(l.Provider,Object.assign({value:i},e))}var S=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(v(),e)),p(u(a)?v():a),g.setItem(m(),JSON.stringify(v())),u(t)||t&&!1!==t.shouldReRenderApp){var o=v();Array.isArray(y)&&y.length&&(o=y.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function j(e,t){var n=Object(o.useContext)(l),c=n.store,i=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var c=Object(a.a)(n,2),u=c[0],s=c[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(o.useCallback)(S({options:t,callback:s,updateStore:i}),[])))}),{}),action:function(e){return e},state:c}:{actions:{},action:Object(o.useCallback)(e?S({options:t,callback:e,updateStore:i}):function(){},[]),state:c}}},212:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(9),i=n(44),u=o(n(220));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,o=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,p=e.onOpen,m=e.onClose,b=e.onPortalClick,g=a(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),y=u.default(),O=y.isServer,h=y.isBrowser,E=c.useState(v),S=E[0],j=E[1],w=c.useRef(S),_=c.useCallback((function(e){w.current=e,j(e)}),[]),k=c.useRef(),x=c.useRef(h?document.createElement("div"):null);c.useEffect((function(){h&&!x.current&&(x.current=document.createElement("div"))}),[h,x]);var T=c.useMemo((function(){if(!O)return f&&i.findDOMNode(f)||document.body}),[O,f]),C=function(e){if(!e)return{portal:x,targetEl:k,event:e};var t=e||{};t.persist&&t.persist(),t.portal=x,t.targetEl=k,t.event=e;var n=e.currentTarget;return!k.current&&n&&n!==document&&(k.current=t.currentTarget),t},N=Object.entries(g).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){O||r(C(e))},e}),{}),A=c.useCallback((function(e){if(!O){var n=C(e);if(null==k.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);p&&p(n),_(!0)}}),[O,x,_,k,p]),I=c.useCallback((function(e){if(!O){var t=C(e);m&&w.current&&m(t),w.current&&_(!1)}}),[O,m,_]),M=c.useCallback((function(e){return w.current?I(e):A(e)}),[I,A]),P=c.useCallback((function(e){return"Escape"===e.key&&l?I(e):void 0}),[l,I]),B=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(x)||0!==e.button||!w.current||t(k)||o&&I(e)}),[O,I,o,x]),D=c.useCallback((function(e){if(!O&&x.current instanceof HTMLElement){var t=C(e);x.current.contains(t.target)&&b&&b(t),B(e)}}),[B]),q=c.useRef({});c.useEffect((function(){if(!O&&T instanceof HTMLElement&&x.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=x.current;return T.appendChild(x.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(q.current[t]=function(e){return g[t](C(e))},document.addEventListener(n,q.current[t]))})),document.addEventListener("keydown",P),document.addEventListener("mousedown",D),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(document.removeEventListener(n,q.current[t]),delete q.current[t])})),document.removeEventListener("keydown",P),document.removeEventListener("mousedown",D),T.removeChild(t)}}}),[O,B,P,T,x]);var H=c.useCallback((function(e){var t=e.children;return null!=x.current?i.createPortal(t,x.current):null}),[x]);return Object.assign([A,I,w.current,H,M,k,x],r(r({isOpen:w.current,openPortal:A,ref:k,closePortal:I,togglePortal:M,Portal:H,portalRef:x},N),{bind:r({ref:k},N)}))}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9),a=n.n(r),o=n(214),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var i=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,u=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),l=Object(o.f)(),f=Object(o.c)(n||l.errors,r);if(!f)return null;var d=f.message,v=f.types,p=c(c({},s),{children:d||i});return t?a.a.isValidElement(t)?a.a.cloneElement(t,p):a.a.createElement(t,p):u?u({message:d||i,messages:v}):a.a.createElement(a.a.Fragment,c({},p))}},220:function(e,t,n){"use strict";var r,a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var o=r.Browser,c=r.Server,i=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:u?o:c,l={isBrowser:s===o,isServer:s===c,isNative:s===i,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===o&&!!window.addEventListener,canUseViewport:s===o&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return a(a({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(9),a=n.n(r),o=n(850),c=n(211),i=n(205),u=n(204);function s(){var e=Object(i.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return l=function(){return e},e}function f(){var e=Object(i.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return f=function(){return e},e}function d(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var v=u.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),p=(u.default.div(f()),u.default.div(l(),(function(e){return e.theme.colors.purple}))),m=u.default.div(s(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),b=a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.radius,i=void 0===r?30:r,u=e.stroke,s=void 0===u?6:u,l=e.currentStep,f=void 0===l?2:l,d=e.totalSteps,b=void 0===d?4:d,g=e.color,y=void 0===g?c.a.green:g,O=e.colorTrack,h=void 0===O?c.a.gray3:O,E=e.progressBar,S=void 0!==E&&E,j=Object(o.a)().t,w=f/b*100,_=i-s/2,k=2*_*Math.PI,x=k-w/100*k;return a.a.createElement(a.a.Fragment,null,S?a.a.createElement(p,null,j("questionary:progressBar",{currentStep:f,totalSteps:b}),a.a.createElement(m,{currentStep:f,totalSteps:b})):a.a.createElement(v,{className:n},a.a.createElement("svg",{width:2*i,height:2*i,viewBox:"0 0 ".concat(2*i," ").concat(2*i)},a.a.createElement("circle",{className:"track",stroke:h,fill:"transparent",strokeWidth:s,r:_,cx:i,cy:i}),a.a.createElement("circle",{stroke:y,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(k," ").concat(k),style:{strokeDashoffset:x},r:_,cx:i,cy:i}),a.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(f,"/").concat(b)))))}))},322:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),c=n(206),i=n(9),u=n.n(i),s=n(240),l=n(212),f=n.n(l),d=n(850),v=n(214),p=n(210),m=n(231),b=n(219),g=n(232),y=n(218),O=n(245),h=n(230),E=n(229),S=n(207),j=n(208),w=n(215),_=n(236),k=g.object({vaccine:g.string()}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.otherSteps,g=e.metadata,x=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,T=Object(S.a)(),C=T.setDoGoBack,N=T.setTitle,A=T.setSubtitle,I=T.setType,M=Object(s.g)(),P=Object(d.a)().t,B=Object(E.e)(),D=Object(p.d)(Object(y.b)(r)),q=D.state,H=D.action,L=Object(E.d)(),R=u.a.useState(!0),W=Object(c.a)(R,2),G=W[0],J=W[1],U=Object(v.e)({mode:"onChange",defaultValues:null===q||void 0===q?void 0:q[r],resolver:Object(m.a)(k)}),V=U.control,z=U.handleSubmit,F=U.formState,K=F.errors,Q=u.a.useCallback((function(){if(J(!1),q["submit-steps"]&&!B){var e=q["submit-steps"].testTaken;(e.includes("unsure")||e.includes("neither"))&&l?M.push(l.noTestStep):t?M.push(t):M.goBack()}else t?M.push(t):M.goBack()}),[q,M,l,t,B]),Y=F.isValid;Object(i.useEffect)((function(){Object(j.a)(),N("".concat(P("questionary:vaccine.title"))),I("primary"),A(""),C((function(){return Q}))}),[Q,C,N,A,I,g,P]);var X=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(H(t),n&&(J(!1),M.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=u.a.useMemo((function(){return"Japan"===L?[{value:"one",label:P("questionary:vaccine.options.1")},{value:"two",label:P("questionary:vaccine.options.2")},{value:"three",label:P("questionary:vaccine.options.3")},{value:"four",label:P("questionary:vaccine.options.4")},{value:"false",label:P("questionary:vaccine.options.no")},{value:"decline",label:P("questionary:vaccine.options.decline")}]:[{value:"true",label:P("questionary:vaccine.options.yes")},{value:"false",label:P("questionary:vaccine.options.no")},{value:"decline",label:P("questionary:vaccine.options.decline")}]}),[L,P]);return u.a.createElement(_.MainContainer,null,u.a.createElement(h.a,{currentStep:null===g||void 0===g?void 0:g.current,totalSteps:null===g||void 0===g?void 0:g.total,progressBar:!0}),u.a.createElement(_.QuestionText,{first:!0},P("questionary:vaccine.question")),u.a.createElement(v.a,{control:V,name:"vaccine",defaultValue:"",render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(O.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:Z})}}),u.a.createElement("p",null,u.a.createElement(b.a,{errors:K,name:"name"})),G&&u.a.createElement(x,null,u.a.createElement(w.a,{leftLabel:P("questionary:nextButton"),leftHandler:z(X),leftDisabled:!Y,invert:!0})))}))}}]);
//# sourceMappingURL=25.b9487414.chunk.js.map