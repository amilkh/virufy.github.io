(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[72],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return y}));var r=n(214),a=n(204),o=n(9),u=function(e,t){var n=e.getItem(t);try{return n?JSON.parse(n):void 0}catch(r){return}};function c(e,t){var n=t||"__STATE_MACHINE__",r=u(e,n);return{set:function(e){r=e},get:function(){return r},getName:function(){return n}}}var i=function(e){return void 0===e};function l(e,t,n,r){"undefined"!==typeof window&&e&&(window.STATE_MACHINE_DEBUG=function(e){return t.setItem("___STATE_MACHINE_DEBUG__",e)},window.STATE_MACHINE_RESET=function(){return t.clear()},window.STATE_MACHINE_GET_STORE=function(){return t.getItem(n())},window.STATE_MACHINE_SAVE_TO=function(e){return window.localStorage.setItem(e,JSON.stringify(r()))},window.STATE_MACHINE_LOAD=function(e){var r=e.storeName,a=e.data;return t.setItem(n()||"___STATE_MACHINE_DEBUG__",a||window.localStorage.getItem(r)||"")})}var s=Object(o.createContext)({store:{},updateStore:function(e){return e}}),d=function(e){var t=e.transform,n=e.externalStoreName,r=e.storageType,a=e.store;return t({externalStoreData:u(r,n),currentStoreData:a})};function f(e,t,n){var o=e,c=t.syncStores;if(!c)return o;try{if(Array.isArray(c))c.forEach((function(e){o=d({transform:e.transform,externalStoreName:e.externalStoreName,storageType:n,store:o})}));else{if(c.externalStoreName&&"function"===typeof c.transform&&"string"===typeof c.externalStoreName)return d({transform:c.transform,externalStoreName:c.externalStoreName,storageType:n,store:o});Object.entries(c).forEach((function(e){var t=Object(a.a)(e,2),c=t[0],i=t[1],l=u(n,c);i.forEach((function(e){o=Object.assign(Object.assign({},o),Object(r.a)({},e,Object.assign(Object.assign({},o[e]),l[e])))}))}))}}catch(i){return o}return o}var p,m,b,h="undefined"!==typeof window,v=h?window.sessionStorage:{getItem:function(e){return e},setItem:function(e){return e},clear:function(){},length:0,key:function(e){return e.toString()},removeItem:function(){}},g=[];function O(e){v=e}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"__STATE_MACHINE__",middleWares:[],syncStores:void 0},n=t?t.name:"__STATE_MACHINE__",r=c(v,n);b=r.getName,p=r.get,m=r.set,g=t.middleWares,l(!1,v,b,p),m(f(p()||e,t,v))}function S(e){var t=Object(o.useState)(p()),n=Object(a.a)(t,2),r=n[0],u=n[1],c=Object(o.useMemo)((function(){return{store:r,updateStore:u}}),[r]);return Object(o.createElement)(s.Provider,Object.assign({value:c},e))}var E=function(e){var t=e.options,n=e.callback,r=e.updateStore;return function(e){var a;n&&n.name;if(n&&(a=n(p(),e)),m(i(a)?p():a),v.setItem(b(),JSON.stringify(p())),i(t)||t&&!1!==t.shouldReRenderApp){var o=p();Array.isArray(g)&&g.length&&(o=g.reduce((function(e,t){return t(e)||e}),o)),r(o)}}};function y(e,t){var n=Object(o.useContext)(s),u=n.store,c=n.updateStore;return e&&Object.keys(e).length?{actions:Object.entries(e).reduce((function(e,n){var u=Object(a.a)(n,2),i=u[0],l=u[1];return Object.assign(Object.assign({},e),Object(r.a)({},i,Object(o.useCallback)(E({options:t,callback:l,updateStore:c}),[])))}),{}),action:function(e){return e},state:u}:{actions:{},action:Object(o.useCallback)(e?E({options:t,callback:e,updateStore:c}):function(){},[]),state:u}}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),a=n.n(r),o=n(209),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=function(e){var t=e.as,n=e.errors,r=e.name,c=e.message,i=e.render,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["as","errors","name","message","render"]),s=Object(o.f)(),d=Object(o.c)(n||s.errors,r);if(!d)return null;var f=d.message,p=d.types,m=u(u({},l),{children:f||c});return t?a.a.isValidElement(t)?a.a.cloneElement(t,m):a.a.createElement(t,m):i?i({message:f||c,messages:p}):a.a.createElement(a.a.Fragment,u({},m))}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(226),a=n(204),o=n(9),u=n.n(o),c=n(206),i=n(205);function l(){var e=Object(c.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(c.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(c.a)(["\n  width: 22px;\n  height: 22px; \n  border-radius: ",";\n  border: 3px solid ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 14px;\n  margin-right: 29px;\n  \n  @media screen and (","){\n    margin-right: 31px;\n  }\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: ","; \n    top: ",";\n    height: ",";\n    width: ",";\n    border-radius: ",";\n    background-color: ","; \n    display: ",";\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0005 2L6.00018 10L2 6.00018' stroke='%233578DE' stroke-width='2.18192' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n  font-weight: bold;\n"]);return f=function(){return e},e}function p(){var e=Object(c.a)(["\n  display: block;\n  width: 250px;\n  @media screen and (","){\n    width: auto;\n    text-align: left;\n    margin: auto;\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(c.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  padding: 0 20px;\n  margin: 3px auto;\n  border: none;\n  border-radius: 10px;\n  background-color: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: left;\n  }\n"]);return m=function(){return e},e}var b=i.default.button(m(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.purple_10:e.theme.colors.mercury}),(function(e){return e.theme.breakpoints.tablet})),h=i.default.span(p(),(function(e){return e.theme.breakpoints.tablet})),v=Object(i.default)(b)(f()),g=i.default.div(d(),(function(e){return e.checkbox?"10%":"50%"}),(function(e){return e.isSelected?e.theme.colors.purple:"#C1C1C1"}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"0%":"50%"}),(function(e){return e.checkbox?e.theme.colors.purple_10:e.theme.colors.purple}),(function(e){return e.isSelected?"block":"none"})),O=i.default.div(s(),(function(e){return e.theme.breakpoints.tablet})),x=i.default.input(l(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),S={selected:[],other:""},E=function(e){var t=e.value,n=void 0===t?S:t,c=e.items,i=e.excludableValues,l=e.singleSelection,s=e.isCheckbox,d=e.onChange,f=e.allowAddOther,p=e.addOtherLabel,m=e.enableOther,E=e.otherPlaceholder,y=Object(o.useState)(!1),k=Object(a.a)(y,2),j=k[0],w=k[1];Object(o.useEffect)((function(){w(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var _=function(e){var t,r=n.selected;t=l||i&&r.some((function(e){return i.includes(e)}))?[]:r,d&&d({selected:t,other:e}),e||w(!1)};return u.a.createElement(u.a.Fragment,null,c.map((function(e,t){var a,o=null===n||void 0===n||null===(a=n.selected)||void 0===a?void 0:a.includes(e.value);return u.a.createElement(b,{key:e.value,lastItem:c.length===t+1&&!f&&!m,onClick:function(){return function(e){var t,a,o=n.selected,u=n.other,c=o.indexOf(e.value);c>=0?(t=[].concat(Object(r.a)(o.slice(0,c)),Object(r.a)(o.slice(c+1))),a=u):l||(null===i||void 0===i?void 0:i.includes(e.value))||i&&o.some((function(e){return i.includes(e)}))?(t=[e.value],a=void 0):(t=[].concat(Object(r.a)(o),[e.value]),a=u),d&&d({selected:t,other:a})}(e)},isSelected:o},u.a.createElement(h,null,e.label),u.a.createElement(g,{isSelected:o,checkbox:s}))})),f&&!j&&u.a.createElement(v,{onClick:function(){w(!0)},lastItem:!0},p),j&&u.a.createElement(O,null,u.a.createElement(x,{placeholder:E,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return _(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&u.a.createElement(g,null)))};E.defaultProps={value:S,excludableValues:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var y=u.a.memo(E)},299:function(e,t,n){"use strict";n.r(t);var r=n(216),a=n.n(r),o=n(217),u=n(204),c=n(9),i=n.n(c),l=n(242),s=n(219),d=n.n(s),f=n(863),p=n(209),m=n(207),b=n(221),h=n(213),v=n(222),g=n(220),O=n(208),x=n(237),S=n(227),E=n(210),y=n(211),k=n(218),j=n(215),w=n(224),_=v.object({testTaken:v.array().of(v.string().required()).required().default([]).test("SelecteOne","Select one",(function(e){return!(e&&e.length>1&&(e.includes("unsure")||e.includes("neither")))}))}).defined();t.default=i.a.memo((function(e){var t=e.previousStep,n=e.nextStep,r=e.storeKey,s=e.otherSteps,v=e.metadata,T=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,A=Object(E.a)(),C=A.setDoGoBack,I=A.setTitle,N=A.setSubtitle,q=A.setType,B=Object(l.g)(),M=Object(f.a)().t,P=Object(m.d)(Object(O.b)(r)),H=P.state,D=P.action,V=Object(g.d)(),G=i.a.useState(!0),J=Object(u.a)(G,2),L=J[0],R=J[1],W=Object(p.e)({mode:"onChange",defaultValues:null===H||void 0===H?void 0:H[r],resolver:Object(b.a)(_)}),z=W.control,Q=W.handleSubmit,U=W.formState,F=U.errors,K=U.isValid,X=i.a.useCallback((function(){R(!1),t?B.push(t):B.goBack()}),[B,t]);Object(c.useEffect)((function(){Object(y.a)(),I("".concat(M("questionary:testTaken.title"))),N(""),q("primary"),C((function(){return X}))}),[X,C,I,q,N,M,v]);var Y=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(r=t.testTaken)&&(o=r.includes("neither"),u=r.includes("unsure"),D(t),(o||u)&&s&&s.noTestStep?(R(!1),B.push(s.noTestStep)):n&&(R(!1),B.push(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(w.MainContainer,null,i.a.createElement(x.g,null,M("questionary:title")),"Japan"===V&&i.a.createElement(w.QuestionText,{bold:!1},M("questionary:caption")),i.a.createElement(w.WomanWithPhone,null),i.a.createElement(S.a,{currentStep:null===v||void 0===v?void 0:v.current,totalSteps:null===v||void 0===v?void 0:v.total,progressBar:!0}),i.a.createElement(w.QuestionText,null,M("questionary:testTaken.question"),i.a.createElement(w.QuestionAllApply,null,M("questionary:allThatApply"))),i.a.createElement(p.a,{control:z,name:"testTaken",defaultValue:[],render:function(e){var t=e.onChange,n=e.value;return i.a.createElement(k.a,{isCheckbox:!0,value:{selected:n},onChange:function(e){return t(e.selected)},items:[{value:"pcr",label:M("questionary:testTaken.options.pcr")},{value:"antigen",label:M("questionary:testTaken.options.antigen")},{value:"unsure",label:M("questionary:testTaken.options.unsure")},{value:"neither",label:M("questionary:testTaken.options.neither")}],excludableValues:["unsure","neither"]})}}),i.a.createElement(h.a,{errors:F,name:"testTaken",render:function(e){var t=e.message;return i.a.createElement("p",null,t)}}),L&&i.a.createElement(T,null,i.a.createElement(j.a,{leftLabel:M("questionary:nextButton"),leftHandler:Q(Y),leftDisabled:!K,invert:!0})))}))}}]);
//# sourceMappingURL=72.b9d0506a.chunk.js.map