(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[24],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return j}));var r=n(213),a=n(206),o=n(9),i=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=i(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var u=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:i(r,n),currentStoreData:a})};function d(e,t,n){var o=e,c=t.syncStores;if(!c)return o;try{if(Array.isArray(c))c.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return f({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:o});Object.entries(c).forEach((function(e){var t=Object(a.a)(e,2),c=t[0],u=t[1],s=i(n,c);u.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),s[e])))}))}))}}catch(u){return o}return o}var p,v,m,b="undefined"!==typeof window,g=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},h=[];function y(e){g=e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(g,n);m=r.getName,p=r.get,v=r.set,h=t.middleWares,s(!1,g,m,p),v(d(p()||e,t,g))}function E(e){var t=Object(o.useState)(p()),n=Object(a.a)(t,2),r=n[0],i=n[1],c=Object(o.useMemo)((function(){return{store:r,updateStore:i}}),[r]);return Object(o.createElement)(l.Provider,Object.assign({value:c},e))}var S=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(p(),e)),v(u(a)?p():a),g.setItem(m(),JSON.stringify(p())),u(t)||t&&!1!==t.shouldReRenderApp){var o=p();Array.isArray(h)&&h.length&&(o=h.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function j(e,t){var n=Object(o.useContext)(l),i=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var i=Object(a.a)(n,2),u=i[0],s=i[1];return Object.assign(Object.assign({},e),Object(r.a)({},u,Object(o.useCallback)(S({options:t,callback:s,updateStore:c}),[])))}),{}),action:function(e){return e},state:i}:{actions:{},action:Object(o.useCallback)(e?S({options:t,callback:e,updateStore:c}):function(){},[]),state:i}}},212:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),c=n(44),u=o(n(220));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,o=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,p=void 0!==d&&d,v=e.onOpen,m=e.onClose,b=e.onPortalClick,g=a(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),h=u.default(),y=h.isServer,O=h.isBrowser,E=i.useState(p),S=E[0],j=E[1],w=i.useRef(S),k=i.useCallback((function(e){w.current=e,j(e)}),[]),_=i.useRef(),T=i.useRef(O?document.createElement("div"):null);i.useEffect((function(){O&&!T.current&&(T.current=document.createElement("div"))}),[O,T]);var x=i.useMemo((function(){if(!y)return f&&c.findDOMNode(f)||document.body}),[y,f]),C=function(e){if(!e)return{portal:T,targetEl:_,event:e};var t=e||{};t.persist&&t.persist(),t.portal=T,t.targetEl=_,t.event=e;var n=e.currentTarget;return!_.current&&n&&n!==document&&(_.current=t.currentTarget),t},A=Object.entries(g).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){y||r(C(e))},e}),{}),N=i.useCallback((function(e){if(!y){var n=C(e);if(null==_.current)throw setTimeout((function(){return k(!0)}),0),Error(t.errorMessage1);v&&v(n),k(!0)}}),[y,T,k,_,v]),P=i.useCallback((function(e){if(!y){var t=C(e);m&&w.current&&m(t),w.current&&k(!1)}}),[y,m,k]),I=i.useCallback((function(e){return w.current?P(e):N(e)}),[P,N]),M=i.useCallback((function(e){return"Escape"===e.key&&l?P(e):void 0}),[l,P]),B=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(T)||0!==e.button||!w.current||t(_)||o&&P(e)}),[y,P,o,T]),D=i.useCallback((function(e){if(!y&&T.current instanceof HTMLElement){var t=C(e);T.current.contains(t.target)&&b&&b(t),B(e)}}),[B]),q=i.useRef({});i.useEffect((function(){if(!y&&x instanceof HTMLElement&&T.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=T.current;return x.appendChild(T.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(q.current[t]=function(e){return g[t](C(e))},document.addEventListener(n,q.current[t]))})),document.addEventListener("keydown",M),document.addEventListener("mousedown",D),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(document.removeEventListener(n,q.current[t]),delete q.current[t])})),document.removeEventListener("keydown",M),document.removeEventListener("mousedown",D),x.removeChild(t)}}}),[y,B,M,x,T]);var H=i.useCallback((function(e){var t=e.children;return null!=T.current?c.createPortal(t,T.current):null}),[T]);return Object.assign([N,P,w.current,H,I,_,T],r(r({isOpen:w.current,openPortal:N,ref:_,closePortal:P,togglePortal:I,Portal:H,portalRef:T},A),{bind:r({ref:_},A)}))}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),a=n.n(r),o=n(214),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,u=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),l=Object(o.f)(),f=Object(o.c)(n||l.errors,r);if(!f)return null;var d=f.message,p=f.types,v=i(i({},s),{children:d||c});return t?a.a.isValidElement(t)?a.a.cloneElement(t,v):a.a.createElement(t,v):u?u({message:d||c,messages:p}):a.a.createElement(a.a.Fragment,i({},v))}},220:function(e,t,n){"use strict";var r,a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var o=r.Browser,i=r.Server,c=r.Native,u=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:u?o:i,l={isBrowser:s===o,isServer:s===i,isNative:s===c,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===o&&!!window.addEventListener,canUseViewport:s===o&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return a(a({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(9),a=n.n(r),o=n(850),i=n(211),c=n(205),u=n(204);function s(){var e=Object(c.a)(["\n  width: 120px;\n  height: 10px;\n  background: ",";\n  position: relative;\n  border-radius: 24px;\n  margin-top: 12px;\n  \n  &:after {\n    content:'';\n    width: ",";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ",";\n    border-radius: 24px;\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  color: ",";\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 700;\n  "]);return l=function(){return e},e}function f(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return f=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return d=function(){return e},e}var p=u.default.div(d(),(function(e){return e.theme.breakpoints.tablet})),v=(u.default.div(f()),u.default.div(l(),(function(e){return e.theme.colors.purple}))),m=u.default.div(s(),(function(e){return e.theme.colors.midGrayBlue}),(function(e){var t=e.currentStep,n=e.totalSteps;return"calc((100%/".concat(n,") * ").concat(t,")")}),(function(e){return e.theme.colors.purple})),b=a.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.radius,c=void 0===r?30:r,u=e.stroke,s=void 0===u?6:u,l=e.currentStep,f=void 0===l?2:l,d=e.totalSteps,b=void 0===d?4:d,g=e.color,h=void 0===g?i.a.green:g,y=e.colorTrack,O=void 0===y?i.a.gray3:y,E=e.progressBar,S=void 0!==E&&E,j=Object(o.a)().t,w=f/b*100,k=c-s/2,_=2*k*Math.PI,T=_-w/100*_;return a.a.createElement(a.a.Fragment,null,S?a.a.createElement(v,null,j("questionary:progressBar",{currentStep:f,totalSteps:b}),a.a.createElement(m,{currentStep:f,totalSteps:b})):a.a.createElement(p,{className:n},a.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},a.a.createElement("circle",{className:"track",stroke:O,fill:"transparent",strokeWidth:s,r:k,cx:c,cy:c}),a.a.createElement("circle",{stroke:h,fill:"transparent",strokeWidth:s,strokeDasharray:"".concat(_," ").concat(_),style:{strokeDashoffset:T},r:k,cx:c,cy:c}),a.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(f,"/").concat(b)))))}))},318:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),i=n(206),c=n(9),u=n.n(c),s=n(240),l=n(212),f=n.n(l),d=n(850),p=n(214),v=n(210),m=n(231),b=n(219),g=n(232),h=n(229),y=n(218),O=n(242),E=n(230),S=n(207),j=n(208),w=n(245),k=n(215),_=n(236),T=g.object({testTaken:g.array().of(g.string().required()).required().default([]).test("SelecteOne","Select one",(function(e){return!(e&&e.length>1&&(e.includes("unsure")||e.includes("neither")))}))}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,l=e.otherSteps,g=e.metadata,x=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,C=Object(S.a)(),A=C.setDoGoBack,N=C.setTitle,P=C.setSubtitle,I=C.setType,M=Object(s.g)(),B=Object(d.a)().t,D=Object(v.d)(Object(y.b)(r)),q=D.state,H=D.action,L=Object(h.d)(),R=u.a.useState(!0),W=Object(i.a)(R,2),V=W[0],G=W[1],J=Object(p.e)({mode:"onChange",defaultValues:null===q||void 0===q?void 0:q[r],resolver:Object(m.a)(T)}),U=J.control,z=J.handleSubmit,F=J.formState,Q=F.errors,K=F.isValid,Y=u.a.useCallback((function(){G(!1),t?M.push(t):M.goBack()}),[M,t]);Object(c.useEffect)((function(){Object(j.a)(),N("".concat(B("questionary:testTaken.title"))),P(""),I("primary"),A((function(){return Y}))}),[Y,A,N,I,P,B,g]);var X=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(r=t.testTaken)&&(o=r.includes("neither"),i=r.includes("unsure"),H(t),(o||i)&&l&&l.noTestStep?(G(!1),M.push(l.noTestStep)):n&&(G(!1),M.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(_.MainContainer,null,u.a.createElement(O.e,null,B("questionary:title")),"Japan"===L&&u.a.createElement(_.QuestionText,{bold:!1},B("questionary:caption")),u.a.createElement(_.WomanWithPhone,null),u.a.createElement(E.a,{currentStep:null===g||void 0===g?void 0:g.current,totalSteps:null===g||void 0===g?void 0:g.total,progressBar:!0}),u.a.createElement(_.QuestionText,null,B("questionary:testTaken.question"),u.a.createElement(_.QuestionAllApply,null,B("questionary:allThatApply"))),u.a.createElement(p.a,{control:U,name:"testTaken",defaultValue:[],render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(w.a,{isCheckbox:!0,value:{selected:n},onChange:function(e){return t(e.selected)},items:[{value:"pcr",label:B("questionary:testTaken.options.pcr")},{value:"antigen",label:B("questionary:testTaken.options.antigen")},{value:"unsure",label:B("questionary:testTaken.options.unsure")},{value:"neither",label:B("questionary:testTaken.options.neither")}],excludableValues:["unsure","neither"]})}}),u.a.createElement("p",null,u.a.createElement(b.a,{errors:Q,name:"name"})),V&&u.a.createElement(x,null,u.a.createElement(k.a,{leftLabel:B("questionary:nextButton"),leftHandler:z(X),leftDisabled:!K,invert:!0})))}))}}]);
//# sourceMappingURL=24.b7ef090d.chunk.js.map