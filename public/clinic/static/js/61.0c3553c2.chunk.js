(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[61],{207:function(e,n,t){"use strict";var o=t(9),a=t.n(o),r=t(235);n.a=function(){var e=a.a.useContext(r.a),n=e.title,t=e.setTitle,o=e.subtitle,i=e.setSubtitle,l=e.type,c=e.setType,u=e.logoSize,s=e.setLogoSize,d=e.setDoGoBack;return{title:n,setTitle:t,subtitle:o,setSubtitle:i,type:l,setType:c,logoSize:u,setLogoSize:s,doGoBack:e.doGoBack,setDoGoBack:d}}},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var o=function(){window.scrollTo({top:0,behavior:"smooth"})}},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t(9),a=t.n(o),r=t(228),i=t(205);function l(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return l=function(){return e},e}var c=t(204).default.div(l(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),u=a.a.memo((function(e){var n=e.invert,t=void 0!==n&&n,o=e.leftLabel,i=e.leftDisabled,l=e.leftHandler,u=e.rightLabel,s=e.rightDisabled,d=e.rightHandler;return a.a.createElement(c,null,a.a.createElement(r.a,{dark:t,disabled:i,onClick:l},o),u&&d&&a.a.createElement(r.a,{dark:!t,disabled:s,onClick:d},u))})),s=a.a.memo(u)},218:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l}));var o=t(213),a=t(237),r=t(234);function i(e){return function(n,t){return Object(a.a)(Object(a.a)({},n),{},Object(o.a)({},e,Object(a.a)(Object(a.a)({},n[e]),t)))}}function l(){return function(e){var n={welcome:{language:e.welcome.language}};return r.a&&(n.welcome.country=e.welcome.country,n.welcome.region=e.welcome.region,n.welcome.hospitalId=e.welcome.hospitalId),n}}},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var o=t(233),a=t(9),r=t.n(a),i=t(205),l=t(204),c=t(211);function u(){var e=Object(i.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var s=l.default.button(u(),(function(e){var n=e.dark,t=e.disabled?c.a.purple_50:c.a.purple;return n?"\n    background-color: ".concat(t,";\n    color: ").concat(c.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(c.a.white,";\n    color: ").concat(t,";\n    border: 1px solid ").concat(t,";\n  ")})),d=r.a.memo((function(e){var n=e.children,t=Object(o.a)(e,["children"]);return r.a.createElement(s,Object.assign({type:"button"},t),n)}))},303:function(e,n,t){"use strict";t.r(n);var o=t(216),a=t.n(o),r=t(217),i=t(206),l=t(9),c=t.n(l),u=t(240),s=t(850),d=t(246),f=t(212),m=t.n(f),h=t(247),g=t(214),b=t(210),p=t(231),v=t(219),y=t(232),w=t(215),C=t(365),x=t(205),O=t(204),E=t(404);function k(){var e=Object(x.a)(["\n  margin: auto;\n  margin-left:  ","px;\n  margin-right: 20px;\n"]);return k=function(){return e},e}function j(){var e=Object(x.a)(["\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  height: 18px;\n  left: ","px;\n  outline: 0;\n  position:absolute;\n  width: 18px;\n  border: 0;\n  border-radius: 0;\n  transform: translateY(4px);\n\n  &:checked{\n    height: 18px;\n    width: 28px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z' fill='%2321242C'/%3E%3C/svg%3E%0A\");\n  }\n"]);return j=function(){return e},e}function B(){var e=Object(x.a)(["font-weight: ",";"]);return B=function(){return e},e}function L(){var e=Object(x.a)(['\n  display: flex;\n  font-family: "Source Sans Pro";\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  ',"\n  padding: 0 0 16px 0;\n  position: relative;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: auto;\n    width: 100%;\n  }\n"]);return L=function(){return e},e}var S=Object(O.default)(E.a)(L(),(function(e){var n=e.fontWeight;return n&&Object(O.css)(B(),n)}),(function(e){return e.theme.breakpoints.tablet})),P=O.default.input.attrs((function(){return{type:"checkbox"}}))(j(),(function(e){return e.checkboxLeftOffsetPosition})),T=O.default.label(k(),(function(e){return e.checkboxLeftOffsetPosition+32})),V=function(e){var n=e.label,t=e.id,o=e.name,a=e.value,r=e.fontWeight,i=void 0===r?400:r,l=e.margin,u=void 0===l?"auto":l,s=e.checkboxLeftOffsetPosition,d=void 0===s?20:s,f=e.onChange;return c.a.createElement(S,{isChecked:a,fontWeight:i,margin:u},c.a.createElement(P,{onChange:f,checkboxLeftOffsetPosition:d,id:t,name:o,checked:a}),c.a.createElement(T,{htmlFor:t,checkboxLeftOffsetPosition:d},n))},z=t(242),I=t(308),D=t(218),M=t(207),F=t(473),H=t.n(F)()(window),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=Object(l.useState)(!1),t=Object(i.a)(n,2),o=t[0],a=t[1],r=Object(l.useState)(""),c=Object(i.a)(r,2),u=c[0],s=c[1];return Object(l.useEffect)((function(){a(!0),fetch(e,{mode:"no-cors"}).then((function(e){return e.text()})).then((function(e){a(!1),s(e)}))}),[e]),{file:H.sanitize(u,{ADD_ATTR:["target"]}),isLoadingFile:o}},A={Argentina:{consentLang:["default.html"]},Bolivia:{consentLang:["default.html"]},Brazil:{consentLang:["default.html"]},Colombia:{consentLang:["default.html"]},Global:{consentLang:["default.html"]},Greece:{consentLang:["default.html"]},Japan:{consentLang:["default.html"]},Mexico:{consentLang:["default.html"]},Pakistan:{consentLang:["default.html"]},Peru:{consentLang:["default.html"]},"United States":{consentLang:["default.html"]}},_=t(208),K={Argentina:"https://drive.google.com/file/d/1slccHiR-vCc5mUHZgklTynejddO_IoCT/view",Bolivia:"https://drive.google.com/file/d/1nTzfJAOHQwefCdqwNBBEqzeRc66RYbYf/view",Brazil:"https://drive.google.com/file/d/1YMtfTiFdpg9tXhdWlQF8kh8Vu4q5RL1U/view",Colombia:"https://drive.google.com/file/d/1YMtfTiFdpg9tXhdWlQF8kh8Vu4q5RL1U/view",Greece:"https://drive.google.com/file/d/1lMVygBx3pV_lZBhFtZe5go4UM4mFt0qP/view",Peru:"https://drive.google.com/file/d/1nb9CbF4l6RF2IJQbzWY9YDnomQWMixbT/view",Mexico:"https://drive.google.com/file/d/16_0GEMA5uApVuf9K9YlYD7ukPAS2_8wn/view",Japan:"https://drive.google.com/file/d/11RTMmnHW4SqHNf7htr3xuSi-o2v2vWlp/view","United States":"https://drive.google.com/file/d/166Fu8RKluJdkRaxPDfWPyCpM7BUIzmnE/view",Global:"https://drive.google.com/file/d/1hnxvDJ5qHBnUi7cnkNdyD4PuWMz8Ntss/view"},G=t(259),R=y.object().shape({agreedConsentTerms:y.boolean().required().default(!1).oneOf([!0]),agreedPolicyTerms:y.boolean().required().default(!1).oneOf([!0]),agreedCovidCollection:y.boolean().when("$country",{is:"Brazil",then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])}),agreedCovidDetection:y.boolean().when("$country",{is:"Colombia",then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])}),agreedTrainingArtificial:y.boolean().when("$country",{is:function(e){return["Brazil","Colombia"].includes(e)},then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])}),agreedBiometric:y.boolean().when("$country",{is:"Colombia",then:y.boolean().notRequired(),otherwise:y.boolean().required().default(!1).oneOf([!0])})});n.default=c.a.memo((function(e){var n=m()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,t=c.a.useState(!0),o=Object(i.a)(t,2),f=o[0],y=o[1],x=Object(M.a)(),O=x.setType,E=x.setDoGoBack,k=x.setSubtitle,j=Object(b.d)(Object(D.b)(e.storeKey)),B=j.state,L=j.action,S=null===B||void 0===B?void 0:B[e.storeKey],P=Object(l.useMemo)((function(){return["Argentina","Bolivia","Colombia","Greece","Peru","Mexico","Brazil","United States","Japan"].includes(B.welcome.country)?B.welcome.country:"Global"}),[B.welcome.country]),T=Object(g.e)({defaultValues:S,resolver:Object(p.a)(R),context:{country:P},mode:"onChange"}),F=T.control,H=T.handleSubmit,W=T.formState,J=W.errors,U=W.isValid,Y=Object(u.g)(),Z=q(function(e,n){var t="".concat("https://virufy.org/clinic","/static/consent"),o=A[e].consentLang.indexOf("".concat(n,".html"));if(-1!==o)return"".concat(t,"/").concat(e,"/").concat(A[e].consentLang[o]);var a=A[e].consentLang.indexOf("default.html");return"".concat(t,"/").concat(e,"/").concat(A[e].consentLang[a])}(P,B.welcome.language)),Q=Z.isLoadingFile,N=Z.file,$=function(){var n=Object(r.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(L(t),e.nextStep&&(y(!1),Y.push(e.nextStep)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),X=Object(l.useCallback)((function(){e.previousStep?(y(!1),Y.push(e.previousStep)):Y.goBack()}),[]),ee=Object(s.a)().t;Object(l.useEffect)((function(){Object(_.a)(),E((function(){return X})),O("secondary"),k(ee("consent:title"))}),[X,E,O,k,ee]);var ne=function(e){return"Brazil"===e?"pt":"Greece"===e?"el":"Japan"===e?"ja":"Global"===e||"United States"===e?"en":"es"};return c.a.createElement(G.WelcomeStyledFormAlternative,null,c.a.createElement(G.ContainerShapeDown,{isMobile:h.isMobile},c.a.createElement(G.InnerContainerShapeDown,null,c.a.createElement(z.a,null,c.a.createElement(d.a,{i18nKey:"consent:paragraph1"},"Virufy cares about your privacy and is advised by licensed data privacy experts. The information and recordings you provide will only be used for the purposes described in our",c.a.createElement(I.a,{to:"https://virufy.org/privacy_policy",target:"_blank"},"Privacy Policy")," and consent form. Please read the consent Form:")))),c.a.createElement(G.WelcomeContent,null,c.a.createElement(G.WelcomeConsentForm,{dangerouslySetInnerHTML:{__html:Q?"Loading...":N}}),c.a.createElement(z.a,null,c.a.createElement(d.a,{i18nKey:"consent:paragraph3"},"By checking the below boxes, you are granting your explicit, freely given, and informed consent to Virufy to collect, process, and share your information for the purposes indicated above and as provided in greater detail in our Privacy Policy. You can print a copy of this Consent Form for your personal records by accessing ",c.a.createElement(C.a,{to:K[P],target:"_blank"},"Consent Form"))),c.a.createElement(G.CheckboxTitle,null,ee("consent:pleaseConfirm","Please confirm the following:")),c.a.createElement(g.a,{control:F,name:"agreedConsentTerms",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value;return c.a.createElement(V,{id:"Step2-ConsentTerms",label:"Brazil"!==P?c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:certify"},"I certify that I am at least 18 years old and agree to the terms of this Consent Form."):c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:certifyBrazil"},"I certify that I am at least 18 years old and agree to the terms of this Consent Form, hereby expressly consenting to the collection and processing of my personal information, biometric information, and health information."),name:"agreedConsentTerms",onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement(g.a,{control:F,name:"agreedPolicyTerms",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value;return c.a.createElement(V,{id:"Step2-PolicyTerms",label:c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:agree"},"I have read, understood, and agree to the terms of the ",c.a.createElement(I.a,{to:"https://virufy.org/privacy_policy",target:"_blank"},"Virufy Privacy Policy"),"."),name:"agreedPolicyTerms",onChange:function(e){return n(e.target.checked)},value:t})}}),"Brazil"!==P&&c.a.createElement(g.a,{control:F,name:"agreedCovidCollection",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,o=e.name;return c.a.createElement(V,{id:"Step2-CollectionCovid",label:"Colombia"!==P?c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:collection"},"I hereby expressly consent to the collection and processing of my personal information, biometric information, and health information."):c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:collectionColombia"},"I hereby expressly consent to the collection, processing and transfer of my personal information, biometric information, and health information."),name:o,onChange:function(e){return n(e.target.checked)},value:t})}}),"Colombia"!==P&&c.a.createElement(g.a,{control:F,name:"agreedCovidDetection",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,o=e.name;return c.a.createElement(V,{id:"Step2-DetectionCovid",label:"Brazil"!==P?c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:detection"},"I hereby acknowledge and agree that processing shall be done for the purposes indicated above and, in particular but without limitation, for research and compiling a dataset needed for the development of artificial intelligence algorithms for device-based COVID-19 detection."):c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:detectionBrazil"},"I hereby acknowledge and agree that the processing shall be done for the purposes indicated above, and in particular, but without limitation, for the research and compilation of a data set necessary for the development of artificial intelligence algorithms for device-based device-based COVID-19 detection, to train artificial intelligence algorithms to analyze cough audio recordings to better determine COVID-19 signals."),name:o,onChange:function(e){return n(e.target.checked)},value:t})}}),"Colombia"!==P&&"Brazil"!==P&&c.a.createElement(g.a,{control:F,name:"agreedTrainingArtificial",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,o=e.name;return c.a.createElement(V,{id:"Step2-TrainingArtificial",label:c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:signs"},"I hereby acknowledge and agree that processing shall be done for the purposes indicated above and, in particular but without limitation, for training artificial intelligence algorithms to analyze cough audio recordings to better determine signs of COVID-19."),name:o,onChange:function(e){return n(e.target.checked)},value:t})}}),"Colombia"!==P&&c.a.createElement(g.a,{control:F,name:"agreedBiometric",defaultValue:!1,render:function(e){var n=e.onChange,t=e.value,o=e.name;return c.a.createElement(V,{id:"Step2-Biometric",label:c.a.createElement(d.a,{tOptions:{lng:ne(P)},i18nKey:"consent:biometric"},"I hereby expressly consent to the sharing of my personal information, biometric information, and health information with third parties as described in this Consent Form and/or the Virufy Privacy Policy."),name:o,onChange:function(e){return n(e.target.checked)},value:t})}}),c.a.createElement("p",null,c.a.createElement(v.a,{errors:J,name:"name"})),f&&c.a.createElement(n,null,c.a.createElement(w.a,{invert:!0,leftLabel:ee("consent:nextButton"),leftHandler:H($),leftDisabled:!U}))))}))},308:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var o=t(9),a=t.n(o),r=t(205),i=t(204),l=t(209);function c(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: ",";\n  text-decoration: underline;\n\n  &:active, :visited {\n    color: ",";\n  } \n"]);return u=function(){return e},e}var s=Object(i.default)(l.b)(u(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),d=i.default.a(c(),(function(e){return e.theme.colors.purple}),(function(e){return e.isBold?700:400}),(function(e){return e.theme.colors.purple})),f=function(e){var n=e.children,t=e.to,o=e.target,r=void 0===o?"_self":o,i=e.isBold,l=void 0===i||i;return"_blank"===r?a.a.createElement(d,{href:t,target:"_blank",rel:"noopener noreferrer",isBold:l},n):a.a.createElement(s,{to:t,isBold:l},n)}}}]);
//# sourceMappingURL=61.0c3553c2.chunk.js.map