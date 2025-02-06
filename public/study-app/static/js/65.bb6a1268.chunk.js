(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[65],{208:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l}));var a=t(214),o=t(241),r=t(238);function i(e){return function(n,t){return Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},e,Object(o.a)(Object(o.a)({},n[e]),t)))}}function l(){return function(e){var n={welcome:{language:e.welcome.language}};return r.a&&(n.welcome.country=e.welcome.country,n.welcome.region=e.welcome.region,n.welcome.hospitalId=e.welcome.hospitalId),n}}},210:function(e,n,t){"use strict";var a=t(9),o=t.n(a),r=t(240);n.a=function(){var e=o.a.useContext(r.a),n=e.title,t=e.setTitle,a=e.subtitle,i=e.setSubtitle,l=e.type,c=e.setType,u=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:n,setTitle:t,subtitle:a,setSubtitle:i,type:l,setType:c,logoSize:u,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},211:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(){window.scrollTo({top:0,behavior:"smooth"})}},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(9),o=t.n(a),r=t(228),i=t(206);function l(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return l=function(){return e},e}var c=t(205).default.div(l(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),u=o.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,a=e.leftLabel,i=e.leftDisabled,l=e.leftHandler,u=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return o.a.createElement(c,null,o.a.createElement(r.a,{dark:t,disabled:i,onClick:l},a),u&&d&&o.a.createElement(r.a,{dark:!t,disabled:s,onClick:d},u))})),s=o.a.memo(u)},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(236),o=t(9),r=t.n(o),i=t(206),l=t(205),c=t(225);function u(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var s=l.default.button(u(),(function(e){var n=e.dark,t=e.disabled?c.a.purple_50:c.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),d=r.a.memo((function(e){var n=e.children,t=Object(a.a)(e,["children"]);return r.a.createElement(s,Object.assign({type:"button"},t),n)}))},319:function(e,n,t){"use strict";t.r(n);var a=t(216),o=t.n(a),r=t(217),i=t(204),l=t(9),c=t.n(l),u=t(242),s=t(863),d=t(255),m=t(219),f=t.n(m),g=t(252),h=t(209),b=t(207),p=t(221),v=t(213),y=t(222),C=t(215),w=t(386),E=t(206),x=t(205),O=t(425);function k(){var e=Object(E.a)(["\n  margin: auto;\n  margin-left:  ","px;\n  margin-right: 20px;\n"]);return k=function(){return e},e}function B(){var e=Object(E.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  left: ","px;\n  outline: 0;\n  position:absolute;\n  width: 18px;\n  border: 0;\n  border-radius: 0;\n  transform: translateY(4px);\n\n  &:checked{\n    height: 18px;\n    width: 28px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  }\n"]);return B=function(){return e},e}function j(){var e=Object(E.a)(["font-weight: ",";"]);return j=function(){return e},e}function L(){var e=Object(E.a)(['\n  display: flex;\n  font-family: "Source Sans Pro";\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  ',"\n  padding: 0 0 16px 0;\n  position: relative;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: auto;\n    width: 100%;\n  }\n"]);return L=function(){return e},e}var S=Object(x.default)(O.a)(L(),(function(e){var n=e.fontWeight;return n&&Object(x.css)(j(),n)}),(function(e){return e.theme.breakpoints.tablet})),P=x.default.input.attrs((function(){return{type:"checkbox"}}))(B(),(function(e){return e.checkboxLeftOffsetPosition})),T=x.default.label(k(),(function(e){return e.checkboxLeftOffsetPosition+32})),V=function(e){var n=e.label,t=e.id,a=e.name,o=e.value,r=e.fontWeight,i=void 0===r?400:r,l=e.margin,u=void 0===l?"auto":l,s=e.checkboxLeftOffsetPosition,d=void 0===s?20:s,m=e.onChange;return c.a.createElement(S,{isChecked:o,fontWeight:i,margin:u},c.a.createElement(P,{onChange:m,checkboxLeftOffsetPosition:d,id:t,name:a,checked:o}),c.a.createElement(T,{htmlFor:t,checkboxLeftOffsetPosition:d},n))},z=t(237),F=t(212);function I(){var e=Object(E.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return I=function(){return e},e}function D(){var e=Object(E.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return D=function(){return e},e}var M=Object(x.default)(F.b)(D(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),H=x.default.a(I(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),q=function(e){var n=e.children,t=e.to,a=e.target,o=void 0===a?"_self":a,r=e.isBold,i=void 0===r||r;return"_blank"===o?c.a.createElement(H,{href:t,target:"_blank",rel:"noopener noreferrer",isBold:i},n):c.a.createElement(M,{to:t,isBold:i},n)},A=t(208),_=t(210),K=t(493),G=t.n(K)()(window),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=Object(l.useState)(!1),t=Object(i.a)(n,2),a=t[0],o=t[1],r=Object(l.useState)(""),c=Object(i.a)(r,2),u=c[0],s=c[1];return Object(l.useEffect)((function(){o(!0),fetch(e,{mode:"no-cors"}).then((function(e){return e.text()})).then((function(e){o(!1),s(e)}))}),[e]),{file:G.sanitize(u,{ADD_ATTR:["target"]}),isLoadingFile:a}},W={Argentina:{consentLang:["default.html"]},Bolivia:{consentLang:["default.html"]},Brazil:{consentLang:["default.html"]},Colombia:{consentLang:["default.html"]},Global:{consentLang:["default.html"]},Greece:{consentLang:["default.html"]},Japan:{consentLang:["default.html"]},Mexico:{consentLang:["default.html"]},Pakistan:{consentLang:["default.html"]},Peru:{consentLang:["default.html"]},"United States":{consentLang:["default.html"]}},J=t(211),U={Argentina:"https://drive.google.com/file/d/1slccHiR-vCc5mUHZgklTynejddO_IoCT/view",Bolivia:"https://drive.google.com/file/d/1nTzfJAOHQwefCdqwNBBEqzeRc66RYbYf/view",Brazil:"https://drive.google.com/file/d/1YMtfTiFdpg9tXhdWlQF8kh8Vu4q5RL1U/view",Colombia:"https://drive.google.com/file/d/1YMtfTiFdpg9tXhdWlQF8kh8Vu4q5RL1U/view",Greece:"https://drive.google.com/file/d/1lMVygBx3pV_lZBhFtZe5go4UM4mFt0qP/view",Peru:"https://drive.google.com/file/d/1nb9CbF4l6RF2IJQbzWY9YDnomQWMixbT/view",Mexico:"https://drive.google.com/file/d/16_0GEMA5uApVuf9K9YlYD7ukPAS2_8wn/view",Japan:"https://drive.google.com/file/d/11RTMmnHW4SqHNf7htr3xuSi-o2v2vWlp/view","United States":"https://drive.google.com/file/d/166Fu8RKluJdkRaxPDfWPyCpM7BUIzmnE/view",Global:"https://drive.google.com/file/d/1hnxvDJ5qHBnUi7cnkNdyD4PuWMz8Ntss/view"},Y=t(263),Z=y.object().shape({agreedConsentTerms:y.boolean().required().default(!1).oneOf([!0]),agreedPolicyTerms:y.boolean().required().default(!1).oneOf([!0]),agreedCovidCollection:y.boolean().when("$country",{is:"Brazil",then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])}),agreedCovidDetection:y.boolean().when("$country",{is:"Colombia",then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])}),agreedTrainingArtificial:y.boolean().when("$country",{is:function(e){return["Brazil","Colombia"].includes(e)},then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])}),agreedBiometric:y.boolean().when("$country",{is:"Colombia",then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])})});n.default=c.a.memo((function(e){var n=f()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,t=Object(s.a)().t,a=Object(u.g)(),m=Object(b.d)(Object(A.b)(e.storeKey)),y=m.state,E=m.action,x=c.a.useState(!0),O=Object(i.a)(x,2),k=O[0],B=O[1],j=Object(_.a)(),L=j.setType,S=j.setDoGoBack,P=j.setSubtitle,T=null===y||void 0===y?void 0:y[e.storeKey],F=Object(l.useMemo)((function(){return["Argentina","Bolivia","Colombia","Greece","Peru","Mexico","Brazil","United States","Japan"].includes(y.welcome.country)?y.welcome.country:"Global"}),[y.welcome.country]),I=Object(h.e)({defaultValues:T,resolver:Object(p.a)(Z),context:{country:F},mode:"onChange"}),D=I.control,M=I.handleSubmit,H=I.formState,K=H.errors,G=H.isValid,Q=R(function(e,n){var t="".concat("https://virufy.org/study","/static/consent"),a=W[e].consentLang.indexOf("".concat(n,".html"));if(-1!==a)return"".concat(t,"/").concat(e,"/").concat(W[e].consentLang[a]);var o=W[e].consentLang.indexOf("default.html");return"".concat(t,"/").concat(e,"/").concat(W[e].consentLang[o])}(F,y.welcome.language)),N=Q.isLoadingFile,$=Q.file,X=function(){var n=Object(r.a)(o.a.mark((function n(t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(E(t),e.nextStep&&(B(!1),a.push(e.nextStep)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ee=Object(l.useCallback)((function(){e.previousStep?(B(!1),a.push(e.previousStep)):a.goBack()}),[]);Object(l.useEffect)((function(){Object(J.a)(),S((function(){return ee})),L("secondary"),P(t("consent:title"))}),[ee,S,L,P,t]);var ne=function(e){return"Brazil"===e?"pt":"Greece"===e?"el":"Japan"===e?"ja":"Global"===e||"United States"===e?"en":"es"};return c.a.createElement(Y.WelcomeStyledFormAlternative,null,c.a.createElement(Y.ContainerShapeDown,{isMobile:g.isMobile},c.a.createElement(Y.InnerContainerShapeDown,null,c.a.createElement(z.b,null,c.a.createElement(d.a,{i18nKey:"consent:paragraph1"},"Virufy cares about your privacy and is advised by licensed data privacy experts. The information and recordings you provide will only be used for the purposes described in our",c.a.createElement(q,{to:"https://virufy.org/privacy_policy",target:"_blank"},"Privacy Policy")," and consent form. Please read the consent Form:")))),c.a.createElement(Y.WelcomeContent,null,c.a.createElement(Y.WelcomeConsentForm,{dangerouslySetInnerHTML:{__html:N?"Loading...":$}}),c.a.createElement(z.b,null,c.a.createElement(d.a,{i18nKey:"consent:paragraph3"},"By checking the below boxes, you are granting your explicit, freely given, and informed consent to Virufy to collect, process, and share your information for the purposes indicated above and as provided in greater detail in our Privacy Policy. You can print a copy of this Consent Form for your personal records by accessing ",c.a.createElement(w.a,{to:U[F],target:"_blank"},"Consent Form"))),c.a.createElement(Y.CheckboxTitle,null,t("consent:pleaseConfirm","Please confirm the following:")),c.a.createElement(h.a,{control:D,name:"agreedConsentTerms",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value;return c.a.createElement(V,{id:"Step2-ConsentTerms",label:"Brazil"!==F?c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:certify"},"I certify that I am at least 18 years old and agree to the terms of this Consent Form."):c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:certifyBrazil"},"I certify that I am at least 18 years old and agree to the terms of this Consent Form, hereby expressly consenting to the collection and processing of my personal information, biometric information, and health information."),name:"agreedConsentTerms",onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(v.a,{errors:K,name:"agreedConsentTerms",render:function(e){var n=e.message;return c.a.createElement("p",null,n)}}),c.a.createElement(h.a,{control:D,name:"agreedPolicyTerms",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value;return c.a.createElement(V,{id:"Step2-PolicyTerms",label:c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:agree"},"I have read, understood, and agree to the terms of the ",c.a.createElement(q,{to:"https://virufy.org/privacy_policy",target:"_blank"},"Virufy Privacy Policy"),"."),name:"agreedPolicyTerms",onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(v.a,{errors:K,name:"agreedPolicyTerms",render:function(e){var n=e.message;return c.a.createElement("p",null,n)}}),"Brazil"!==F&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{control:D,name:"agreedCovidCollection",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,a=e.name;return c.a.createElement(V,{id:"Step2-CollectionCovid",label:"Colombia"!==F?c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:collection"},"I hereby expressly consent to the collection and processing of my personal information, biometric information, and health information."):c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:collectionColombia"},"I hereby expressly consent to the collection, processing and transfer of my personal information, biometric information, and health information."),name:a,onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(v.a,{errors:K,name:"agreedCovidCollection",render:function(e){var n=e.message;return c.a.createElement("p",null,n)}})),"Colombia"!==F&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{control:D,name:"agreedCovidDetection",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,a=e.name;return c.a.createElement(V,{id:"Step2-DetectionCovid",label:"Brazil"!==F?c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:detection"},"I hereby acknowledge and agree that processing shall be done for the purposes indicated above and, in particular but without limitation, for research and compiling a dataset needed for the development of artificial intelligence algorithms for device-based COVID-19 detection."):c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:detectionBrazil"},"I hereby acknowledge and agree that the processing shall be done for the purposes indicated above, and in particular, but without limitation, for the research and compilation of a data set necessary for the development of artificial intelligence algorithms for device-based device-based COVID-19 detection, to train artificial intelligence algorithms to analyze cough audio recordings to better determine COVID-19 signals."),name:a,onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(v.a,{errors:K,name:"agreedCovidDetection",render:function(e){var n=e.message;return c.a.createElement("p",null,n)}})),"Colombia"!==F&&"Brazil"!==F&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{control:D,name:"agreedTrainingArtificial",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,a=e.name;return c.a.createElement(V,{id:"Step2-TrainingArtificial",label:c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:signs"},"I hereby acknowledge and agree that processing shall be done for the purposes indicated above and, in particular but without limitation, for training artificial intelligence algorithms to analyze cough audio recordings to better determine signs of COVID-19."),name:a,onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(v.a,{errors:K,name:"agreedTrainingArtificial",render:function(e){var n=e.message;return c.a.createElement("p",null,n)}})),"Colombia"!==F&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{control:D,name:"agreedBiometric",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,a=e.name;return c.a.createElement(V,{id:"Step2-Biometric",label:c.a.createElement(d.a,{tOptions:{lng:ne(F)},i18nKey:"consent:biometric"},"I hereby expressly consent to the sharing of my personal information, biometric information, and health information with third parties as described in this Consent Form and/or the Virufy Privacy Policy."),name:a,onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(v.a,{errors:K,name:"agreedBiometric",render:function(e){var n=e.message;return c.a.createElement("p",null,n)}})),k&&c.a.createElement(n,null,c.a.createElement(C.a,{invert:!0,leftLabel:t("consent:nextButton"),leftHandler:M(X),leftDisabled:!G}))))}))}}]);
//# sourceMappingURL=65.bb6a1268.chunk.js.map