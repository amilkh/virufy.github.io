(this.webpackJsonpclinre=this.webpackJsonpclinre||[]).push([[48],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return j}));var r=n(193),a=n(190),o=n(6),c=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function u(e,t){var n=t||"__STATE_MACHINE__",r=c(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function s(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var l=Object(o.createContext)({store:{},updateStore:function(e){return e}}),f=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:c(r,n),currentStoreData:a})};function d(e,t,n){var o=e,u=t.syncStores;if(!u)return o;try{if(Array.isArray(u))u.forEach((function(e){o=f({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(u.externalStoreName&&"function"===typeof u.transform&&"string"===typeof u.externalStoreName)return f({transform:u.transform,externalStoreName:u.externalStoreName,storageType:n,store:o});Object.entries(u).forEach((function(e){var t=Object(a.a)(e,2),u=t[0],i=t[1],s=c(n,u);i.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),s[e])))}))}))}}catch(i){return o}return o}var v,m,p,b="undefined"!==typeof window,g=b?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},O=[];function E(e){g=e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=u(g,n);p=r.getName,v=r.get,m=r.set,O=t.middleWares,s(!1,g,p,v),m(d(v()||e,t,g))}function h(e){var t=Object(o.useState)(v()),n=Object(a.a)(t,2),r=n[0],c=n[1],u=Object(o.useMemo)((function(){return{store:r,updateStore:c}}),[r]);return Object(o.createElement)(l.Provider,Object.assign({value:u},e))}var S=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(v(),e)),m(i(a)?v():a),g.setItem(p(),JSON.stringify(v())),i(t)||t&&!1!==t.shouldReRenderApp){var o=v();Array.isArray(O)&&O.length&&(o=O.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function j(e,t){var n=Object(o.useContext)(l),c=n.store,u=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var c=Object(a.a)(n,2),i=c[0],s=c[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(o.useCallback)(S({options:t,callback:s,updateStore:u}),[])))}),{}),action:function(e){return e},state:c}:{actions:{},action:Object(o.useCallback)(e?S({options:t,callback:e,updateStore:u}):function(){},[]),state:c}}},197:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(6),u=n(42),i=o(n(202));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,o=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,m=e.onOpen,p=e.onClose,b=e.onPortalClick,g=a(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),O=i.default(),E=O.isServer,y=O.isBrowser,h=c.useState(v),S=h[0],j=h[1],w=c.useRef(S),_=c.useCallback((function(e){w.current=e,j(e)}),[]),T=c.useRef(),C=c.useRef(y?document.createElement("div"):null);c.useEffect((function(){y&&!C.current&&(C.current=document.createElement("div"))}),[y,C]);var k=c.useMemo((function(){if(!E)return f&&u.findDOMNode(f)||document.body}),[E,f]),x=function(e){if(!e)return{portal:C,targetEl:T,event:e};var t=e||{};t.persist&&t.persist(),t.portal=C,t.targetEl=T,t.event=e;var n=e.currentTarget;return!T.current&&n&&n!==document&&(T.current=t.currentTarget),t},P=Object.entries(g).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){E||r(x(e))},e}),{}),N=c.useCallback((function(e){if(!E){var n=x(e);if(null==T.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);m&&m(n),_(!0)}}),[E,C,_,T,m]),A=c.useCallback((function(e){if(!E){var t=x(e);p&&w.current&&p(t),w.current&&_(!1)}}),[E,p,_]),M=c.useCallback((function(e){return w.current?A(e):N(e)}),[A,N]),I=c.useCallback((function(e){return"Escape"===e.key&&l?A(e):void 0}),[l,A]),R=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(C)||0!==e.button||!w.current||t(T)||o&&A(e)}),[E,A,o,C]),D=c.useCallback((function(e){if(!E&&C.current instanceof HTMLElement){var t=x(e);C.current.contains(t.target)&&b&&b(t),R(e)}}),[R]),q=c.useRef({});c.useEffect((function(){if(!E&&k instanceof HTMLElement&&C.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=C.current;return k.appendChild(C.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(q.current[t]=function(e){return g[t](x(e))},document.addEventListener(n,q.current[t]))})),document.addEventListener("keydown",I),document.addEventListener("mousedown",D),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];g[t]&&(document.removeEventListener(n,q.current[t]),delete q.current[t])})),document.removeEventListener("keydown",I),document.removeEventListener("mousedown",D),k.removeChild(t)}}}),[E,R,I,k,C]);var H=c.useCallback((function(e){var t=e.children;return null!=C.current?u.createPortal(t,C.current):null}),[C]);return Object.assign([N,A,w.current,H,M,T,C],r(r({isOpen:w.current,openPortal:N,ref:T,closePortal:A,togglePortal:M,Portal:H,portalRef:C},P),{bind:r({ref:T},P)}))}},201:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},202:function(e,t,n){"use strict";var r,a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(r=t.Device||(t.Device={}));var o=r.Browser,c=r.Server,u=r.Native,i=!("undefined"===typeof window||!window.document||!window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?u:i?o:c,l={isBrowser:s===o,isServer:s===c,isNative:s===u,device:s,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:s===o&&!!window.addEventListener,canUseViewport:s===o&&!!window.screen},f=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return a(a({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=f();t.weAreServer=function(){l.isServer=!0,d=f()},t.useSSR=function(){return d},t.default=t.useSSR},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(6),a=n.n(r),o=n(203),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var u=function(e){var t=e.as,n=e.errors,r=e.name,u=e.message,i=e.render,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),l=Object(o.f)(),f=Object(o.c)(n||l.errors,r);if(!f)return null;var d=f.message,v=f.types,m=c(c({},s),{children:d||u});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):i?i({message:d||u,messages:v}):a.a.createElement(a.a.Fragment,c({},m))}},291:function(e,t,n){"use strict";n.r(t);var r=n(205),a=n.n(r),o=n(206),c=n(190),u=n(6),i=n.n(u),s=n(226),l=n(197),f=n.n(l),d=n(819),v=n(203),m=n(192),p=n(214),b=n(204),g=n(215),O=n(198),E=n(225),y=n(199),h=n(211),S=n(63),j=n.n(S),w=n(143),_=n(366),T=n.n(_),C=n(367),k=n.n(C),x=n(189),P=n(188);function N(){var e=Object(x.a)(["\n  font-family: Source Sans Pro;\n  font-size: 14px;\n  line-height: 1.42;\n  color: ",";\n"]);return N=function(){return e},e}function A(){var e=Object(x.a)(["\n  font-family: Source Sans Pro;\n  font-size: 12px;\n  line-height: 1.42;\n  color: ",";\n"]);return A=function(){return e},e}function M(){var e=Object(x.a)(["\n  flex: 1;\n  text-align: left;\n  padding-left: 14px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return M=function(){return e},e}function I(){var e=Object(x.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  padding: 0 19.69px 0 14px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return I=function(){return e},e}function R(){var e=Object(x.a)(["\n  .react-datepicker-wrapper {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return R=function(){return e},e}var D=P.default.div(R()),q=P.default.button(I(),(function(e){return e.theme.colors.lightGray})),H=P.default.div(M()),L=P.default.div(A(),(function(e){return e.theme.colors.darkGray})),B=P.default.div(N(),(function(e){return e.theme.colors.darkBlack})),V=i.a.forwardRef((function(e,t){var n=e.label,r=e.value,a=e.onClick;return i.a.createElement(q,{ref:t,onClick:a},i.a.createElement("img",{alt:"calendar",src:T.a}),i.a.createElement(H,null,i.a.createElement(L,null,n),i.a.createElement(B,null,r)),i.a.createElement("img",{alt:"calendar",src:k.a}))}));V.defaultProps={value:void 0,onClick:void 0};var G=i.a.memo((function(e){var t=e.label,n=e.value,r=e.locale,a=e.onChange,o=i.a.useMemo((function(){return Object(w.default)(new Date)}),[]);return i.a.createElement(D,null,i.a.createElement(j.a,{selected:n,customInput:i.a.createElement(V,{label:t}),onChange:a,dateFormat:"EEE, MMM d, Y",locale:r,maxDate:o}))})),U=n(212),W=n(208),J=n(194),Q=n(195),z=n(210),F=n(101),Y=n(207),K=g.object({pcrTestDate:g.date().required(),pcrTestResult:g.string().required("pcrTestResultRequired")}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.metadata,l=e.storeKey,g=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,S=Object(J.a)(),j=S.setDoGoBack,w=S.setTitle,_=S.setSubtitle,T=S.setType,C=Object(s.g)(),k=Object(d.a)().t,x=Object(m.d)(Object(O.b)(l)),P=x.state,N=x.action,A=Object(s.h)().search,M=i.a.useMemo((function(){return new URLSearchParams(A)}),[A]),I=i.a.useState(!0),R=Object(c.a)(I,2),D=R[0],q=R[1],H=Object(v.e)({mode:"onChange",defaultValues:null===P||void 0===P?void 0:P[l],resolver:Object(p.a)(K)}),L=H.control,B=H.handleSubmit,V=H.formState,X=H.setValue,Z=V.errors,$=V.isValid,ee=i.a.useCallback((function(){q(!1),t?C.push(t):C.goBack()}),[C,t]);Object(u.useEffect)((function(){Object(Q.a)(),w("".concat(k("questionary:headerQuestions"))),_(""),T("primary"),j((function(){return ee}))}),[ee,j,w,T,_,k,r]),Object(u.useEffect)((function(){M.get("pcrresult")&&X("pcrTestResult",M.get("pcrresult"))}),[M,X]);var te=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(N(t),n&&(q(!1),C.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(Y.MainContainer,null,i.a.createElement(E.c,null,k("questionary:title")),i.a.createElement(Y.QuestionNote,null,k("questionary:note")),i.a.createElement(Y.WomanWithPhone,null),i.a.createElement(h.a,{currentStep:null===r||void 0===r?void 0:r.current,totalSteps:null===r||void 0===r?void 0:r.total,progressBar:!0}),i.a.createElement(Y.QuestionText,{extraSpace:!0,first:!0},k("questionary:whenPcrTest")),i.a.createElement(v.a,{control:L,name:"pcrTestDate",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(G,{label:"Date",value:n?new Date(n):null,locale:F.a.language,onChange:t})}}),i.a.createElement(Y.QuestionText,{extraSpace:!0},k("questionary:resultPcrTest.question")),i.a.createElement(v.a,{control:L,name:"pcrTestResult",defaultValue:void 0,render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(U.a,{singleSelection:!0,value:{selected:n?[n]:[]},onChange:function(e){return t(e.selected[0])},items:[{value:"positive",label:k("questionary:resultPcrTest.options.positive")},{value:"negative",label:k("questionary:resultPcrTest.options.negative")},{value:"pending",label:k("questionary:resultPcrTest.options.pending")},{value:"unsure",label:k("questionary:resultPcrTest.options.unsure")}]})}}),i.a.createElement(b.a,{errors:Z,name:"pcrTestResult",render:function(e){var t=e.message;return i.a.createElement(z.TextErrorContainer,null,i.a.createElement(W.a,null),k("main:".concat(t),"Please select an option"))}}),D&&i.a.createElement(g,null,i.a.createElement(y.a,{leftLabel:k("questionary:nextButton"),leftHandler:B(te),leftDisabled:!$,invert:!0})))}))},366:function(e,t,n){e.exports=n.p+"static/media/calendar.ffdaf43c.svg"},367:function(e,t,n){e.exports=n.p+"static/media/chevron.66e5f21f.svg"}}]);
//# sourceMappingURL=48.d099a90b.chunk.js.map