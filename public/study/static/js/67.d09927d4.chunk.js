(this["webpackJsonpvirufy-study"]=this["webpackJsonpvirufy-study"]||[]).push([[67],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(226),i=n(204),o=n(9),r=n.n(o),l=n(206),u=n(205);function c(){var e=Object(l.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return c=function(){return e},e}function s(){var e=Object(l.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(l.a)(["\n  width: 22px;\n  height: 22px; \n  border-radius: ",";\n  border: 3px solid ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 14px;\n  margin-right: 29px;\n  \n  @media screen and (","){\n    margin-right: 31px;\n  }\n\n  &:after{\n    content: '';\n    position: absolute; \n    left: ","; \n    top: ",";\n    height: ",";\n    width: ",";\n    border-radius: ",";\n    background-color: ","; \n    display: ",";\n    background-image: url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0005 2L6.00018 10L2 6.00018' stroke='%233578DE' stroke-width='2.18192' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(l.a)(["\n  font-weight: bold;\n"]);return p=function(){return e},e}function v(){var e=Object(l.a)(["\n  display: block;\n  width: 250px;\n  @media screen and (","){\n    width: auto;\n    text-align: left;\n    margin: auto;\n  }\n"]);return v=function(){return e},e}function m(){var e=Object(l.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  padding: 0 20px;\n  margin: 3px auto;\n  border: none;\n  border-radius: 10px;\n  background-color: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: left;\n  }\n"]);return m=function(){return e},e}var b=u.default.button(m(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.purple_10:e.theme.colors.mercury}),(function(e){return e.theme.breakpoints.tablet})),h=u.default.span(v(),(function(e){return e.theme.breakpoints.tablet})),f=Object(u.default)(b)(p()),g=u.default.div(d(),(function(e){return e.checkbox?"10%":"50%"}),(function(e){return e.isSelected?e.theme.colors.purple:"#C1C1C1"}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"0%":"2px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"16px":"12px"}),(function(e){return e.checkbox?"0%":"50%"}),(function(e){return e.checkbox?e.theme.colors.purple_10:e.theme.colors.purple}),(function(e){return e.isSelected?"block":"none"})),y=u.default.div(s(),(function(e){return e.theme.breakpoints.tablet})),x=u.default.input(c(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),S={selected:[],other:""},O=function(e){var t=e.value,n=void 0===t?S:t,l=e.items,u=e.excludableValues,c=e.singleSelection,s=e.isCheckbox,d=e.onChange,p=e.allowAddOther,v=e.addOtherLabel,m=e.enableOther,O=e.otherPlaceholder,k=Object(o.useState)(!1),C=Object(i.a)(k,2),j=C[0],T=C[1];Object(o.useEffect)((function(){T(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var w=function(e){var t,a=n.selected;t=c||u&&a.some((function(e){return u.includes(e)}))?[]:a,d&&d({selected:t,other:e}),e||T(!1)};return r.a.createElement(r.a.Fragment,null,l.map((function(e,t){var i,o=null===n||void 0===n||null===(i=n.selected)||void 0===i?void 0:i.includes(e.value);return r.a.createElement(b,{key:e.value,lastItem:l.length===t+1&&!p&&!m,onClick:function(){return function(e){var t,i,o=n.selected,r=n.other,l=o.indexOf(e.value);l>=0?(t=[].concat(Object(a.a)(o.slice(0,l)),Object(a.a)(o.slice(l+1))),i=r):c||(null===u||void 0===u?void 0:u.includes(e.value))||u&&o.some((function(e){return u.includes(e)}))?(t=[e.value],i=void 0):(t=[].concat(Object(a.a)(o),[e.value]),i=r),d&&d({selected:t,other:i})}(e)},isSelected:o},r.a.createElement(h,null,e.label),r.a.createElement(g,{isSelected:o,checkbox:s}))})),p&&!j&&r.a.createElement(f,{onClick:function(){T(!0)},lastItem:!0},v),j&&r.a.createElement(y,null,r.a.createElement(x,{placeholder:O,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return w(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&r.a.createElement(g,null)))};O.defaultProps={value:S,excludableValues:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var k=r.a.memo(O)},223:function(e,t,n){"use strict";var a=n(9),i=n(207),o=n(208);t.a=function(e,t){var n=Object(i.d)(Object(o.b)(e)).state,r=Object(a.useMemo)((function(){var a={total:null===t||void 0===t?void 0:t.total,current:null===t||void 0===t?void 0:t.current};if(n[e]){var i,o,r,l,u,c,s=null===(i=n["submit-steps"])||void 0===i||null===(o=i.typeCovidFlu)||void 0===o?void 0:o.selected.includes("antigenTaken"),d=null===(r=n["submit-steps"])||void 0===r||null===(l=r.typeCovidFlu)||void 0===l?void 0:l.selected.includes("PCRTaken"),p=null===(u=n["submit-steps"])||void 0===u||null===(c=u.typeCovidFlu)||void 0===c?void 0:c.selected.includes("fluTaken");switch(!0){case s&&!d&&!p:a.total=(null===t||void 0===t?void 0:t.total)-2-2,a.current=(null===t||void 0===t?void 0:t.current)-2-2;break;case s&&d&&!p||s&&!d&&p:a.total=(null===t||void 0===t?void 0:t.total)-2,a.current=(null===t||void 0===t?void 0:t.current)-2;break;case!s&&!d&&!p:a.total=(null===t||void 0===t?void 0:t.total)-1-2-2,a.current=(null===t||void 0===t?void 0:t.current)-1-2-2;break;case!s&&d&&p:a.total=(null===t||void 0===t?void 0:t.total)-1,a.current=(null===t||void 0===t?void 0:t.current)-1;break;case!s&&!d&&p||!s&&d&&!p:a.total=(null===t||void 0===t?void 0:t.total)-1-2,a.current=(null===t||void 0===t?void 0:t.current)-1-2}}return a}),[n,t,e]),l=Object(a.useMemo)((function(){if(n[e]){var t,a,i,o=null===(t=n["submit-steps"].typeCovidFlu)||void 0===t?void 0:t.selected.includes("PCRTaken"),l=null===(a=n["submit-steps"].typeCovidFlu)||void 0===a?void 0:a.selected.includes("antigenTaken"),u=null===(i=n["submit-steps"].typeCovidFlu)||void 0===i?void 0:i.selected.includes("fluTaken");return o&&!l&&!u||o&&l&&!u?r.current+2:r.current}return 0}),[n,e,r]);return{customSteps:r,customCurrentStepPCR:l}}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(9),i=n.n(a),o=n(260),r=n(863),l=n(17),u=n(206);function c(){var e=Object(u.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return c=function(){return e},e}var s=n(205).default.div(c()),d=function(e){var t=e.onChange,n=e.setRecaptchaAvailable,a=Object(r.a)().i18n;return i.a.createElement(s,null,i.a.createElement(o.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,onErrored:function(){n(!1),l.a("Error on ReCAPTCHA")},hl:a.language}))}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(278),i=n.n(a).a.create({baseURL:"https://lwdzsrlhnk.execute-api.us-east-2.amazonaws.com/prod"});function o(){return i}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(216),i=n.n(a),o=n(217),r=n(250),l=n(220),u=n(252),c=function(){return{isBrowser:u.isBrowser?Object(u.deviceDetect)():null,isMobile:u.isMobile?Object(u.deviceDetect)():null,isSmartTv:u.isSmartTV?Object(u.deviceDetect)():null,isConsole:u.isConsole?Object(u.deviceDetect)():null,isTablet:u.isTablet?Object(u.deviceDetect)():null,isWearable:u.isWearable?Object(u.deviceDetect)():null}};function s(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(i.a.mark((function e(t){var n,a,o,u,s,d,p,v,m,b,h,f,g,y,x,S,O,k,C,j,T,w,q,E,D,A,F,I,R,B,M,P,J,H,V,L,z,_,G,K,W,Y,N,U,Q,Z,X,$,ee,te,ne,ae,ie,oe,re,le,ue,ce;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,o=t.captchaValue,u=t.action,s=t.nextStep,d=t.setActiveStep,p=t.history,v=t.userCookie,e.prev=1,n(null),x=a.welcome,S=x.language,O=x.country,k=x.region,C=x.patientId,j=x.agreedConsentTerms,T=x.agreedPolicyTerms,w=x.agreedCovidDetection,q=x.agreedCovidCollection,E=x.agreedTrainingArtificial,D=x.agreedBiometric,A=a["submit-steps"],F=A.recordYourCough,I=A.recordYourBreath,R=A.recordYourSpeech,B=A.typeCovidFlu,M=A.testTaken,P=A.pcrTestDate,J=A.pcrTestResult,H=A.antigenTestDate,V=A.whatAntigenTestResult,L=A.antigenTestResult,z=A.vaccine,_=A.ageGroup,G=A.gender,K=A.ethnicity,W=A.biologicalSex,Y=A.smokeLastSixMonths,N=A.currentSymptoms,U=A.symptomsStartedDate,Q=A.currentRespiratoryCondition,Z=A.currentMedicalCondition,X=A.covidTimes,$=A.lastTimeCovidMonths,ee=A.fluTestDate,te=A.fluTestResult,ne=A.whenFluShot,(ae=new FormData).append("device",JSON.stringify(c())),ae.append("language",S),ae.append("country",O),k&&ae.append("region",k),C&&ae.append("patientId",C),window.sourceCampaign&&ae.append("source",window.sourceCampaign),v&&ae.append("userCookie",JSON.stringify(v)),ae.append("agreedConsentTerms",j),ae.append("agreedPolicyTerms",T),ae.append("agreedCovidCollection",q),ae.append("agreedCovidDetection",w),ae.append("agreedTrainingArtificial",E),ae.append("agreedBiometric",D),ie=F.recordingFile||F.uploadedFile,ae.append("cough",ie,ie.name||"filename.wav"),oe=I.recordingFile||I.uploadedFile,ae.append("breath",oe,oe.name||"filename_breath.wav"),l.b.includes(O)&&(re=R.recordingFile||R.uploadedFile,ae.append("voice",re,re.name||"filename_voice.wav")),(null===B||void 0===B||null===(m=B.selected)||void 0===m?void 0:m.length)>0&&ae.append("typeCovidFlu",B.selected.join(",")),M&&ae.append("testTaken",M.join(",")),M&&M.includes("pcr")&&(ae.append("pcrTestDate",P.toISOString()),ae.append("pcrTestResult",J)),M&&M.includes("antigen")&&(ae.append("antigenTestDate",H.toISOString()),ae.append("antigenTestResult",L),ae.append("whatAntigenTestResult",V)),z&&ae.append("vaccine",z),_&&ae.append("ageGroup",_),le=G.other||G.selected[0],(null===K||void 0===K||null===(b=K.selected)||void 0===b?void 0:b.length)>0&&ae.append("ethnicity",K.selected.join(",")),le&&ae.append("gender",le),W&&ae.append("biologicalSex",W),Y&&ae.append("smokeLastSixMonths",Y),(null===N||void 0===N||null===(h=N.selected)||void 0===h?void 0:h.length)>0&&ae.append("currentSymptoms",N.selected.join(",")),U&&ae.append("symptomsStartedDate",U),(null===Q||void 0===Q||null===(f=Q.selected)||void 0===f?void 0:f.length)>0&&ae.append("currentRespiratoryCondition",Q.selected.join(",")),(null===Z||void 0===Z||null===(g=Z.selected)||void 0===g?void 0:g.length)>0&&ae.append("currentMedicalCondition",Z.selected.join(",")),(null===N||void 0===N?void 0:N.other)&&ae.append("otherSymptoms",null===N||void 0===N?void 0:N.other),(null===Q||void 0===Q?void 0:Q.other)&&ae.append("otherRespiratoryConditions",null===Q||void 0===Q?void 0:Q.other),(null===Z||void 0===Z?void 0:Z.other)&&ae.append("otherMedicalConditions",null===Z||void 0===Z?void 0:Z.other),H&&ae.append("antigenTestDate",H.toISOString()),L&&ae.append("antigenTestResult",L),P&&(ae.append("pcrTestDate",P.toISOString()),ae.append("pcrTestResult",J)),X&&ae.append("covidTimes",X),$&&ae.append("lastTimeCovidMonths",$),ee&&ae.append("fluTestDate",ee.toISOString()),te&&ae.append("fluTestResult",te),ne&&ae.append("whenFluShot",ne),o&&ae.append("captchaValue",o),e.next=53,r.a.post("saveSurvey",ae,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 53:ue=e.sent,u({}),s&&(null===(y=ue.data)||void 0===y?void 0:y.submissionId)&&(d(!1),p.push(s,{submissionId:null===(ce=ue.data)||void 0===ce?void 0:ce.submissionId})),e.next=62;break;case 58:e.prev=58,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 62:case"end":return e.stop()}}),e,null,[[1,58]])})))).apply(this,arguments)}},310:function(e,t,n){"use strict";n.r(t);var a=n(216),i=n.n(a),o=n(241),r=n(217),l=n(204),u=n(9),c=n.n(u),s=n(242),d=n(219),p=n.n(d),v=n(863),m=n(255),b=n(865),h=n(209),f=n(207),g=n(221),y=n(213),x=n(222),S=n(208),O=n(245),k=n(227),C=n(210),j=n(220),T=n(223),w=n(211),q=n(281),E=n(218),D=n(215),A=n(224),F=x.object({currentMedicalCondition:x.object({selected:x.array().required()})}).defined();t.default=c.a.memo((function(e){var t=e.previousStep,n=e.nextStep,a=e.storeKey,d=e.metadata,x=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,I=Object(C.a)(),R=I.setDoGoBack,B=I.setTitle,M=I.setType,P=Object(s.g)(),J=Object(v.a)().t,H=Object(f.d)(Object(S.b)(a)),V=H.state,L=H.action,z=Object(j.e)(),_=Object(j.d)(),G=Object(b.a)(["virufy-study-user"]),K=Object(l.a)(G,1)[0],W=Object(T.a)(a,d).customSteps,Y=K["virufy-study-user"],N=c.a.useState(!0),U=Object(l.a)(N,2),Q=U[0],Z=U[1],X=Object(h.e)({mode:"onChange",defaultValues:null===V||void 0===V?void 0:V[a],resolver:Object(g.a)(F)}),$=X.control,ee=X.handleSubmit,te=X.formState,ne=te.errors,ae=te.isValid,ie=c.a.useState(null),oe=Object(l.a)(ie,2),re=oe[0],le=oe[1],ue=c.a.useState(null),ce=Object(l.a)(ue,2),se=ce[0],de=ce[1],pe=c.a.useState(!0),ve=Object(l.a)(pe,2),me=ve[0],be=ve[1],he=te.isSubmitting;Object(u.useEffect)((function(){se||le(null)}),[se]);var fe=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||"Japan"===_){e.next=3;break}return e.next=3,Object(q.a)({setSubmitError:function(e){return le(e?J(e):null)},state:Object(o.a)(Object(o.a)({},V),{},{"submit-steps":Object(o.a)(Object(o.a)({},V["submit-steps"]),t)}),captchaValue:se,action:L,nextStep:n,setActiveStep:Z,history:P,userCookie:Y});case 3:t&&(L(t),n&&(Z(!1),P.push(n)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=c.a.useCallback((function(){Z(!1),t?P.push(t):P.goBack()}),[P,t]),ye=c.a.useCallback((function(){return J("Japan"!==_||z?he?"questionary:submitting":"beforeSubmit:submitButton":"questionary:nextButton")}),[_,he,z,J]),xe=c.a.useMemo((function(){return"Japan"!==_||z?"Colombia"!==_?he||me&&!se:he:!ae}),[se,_,he,z,me,ae]);Object(u.useEffect)((function(){Object(w.a)(),B(J("Japan"===_?"questionary:medical.title":"questionary:respiration.title")),M("primary"),R((function(){return ge}))}),[ge,R,B,M,d,J,_]);var Se=c.a.useMemo((function(){return"Japan"===_?[{value:"none",label:J("questionary:medical.options.none")},{value:"respiratorySystem",label:J("questionary:medical.options.respiratorySystem")},{value:"chronicKidney",label:J("questionary:medical.options.chronicKidney")},{value:"diabetes",label:J("questionary:medical.options.diabetes")},{value:"highBloodPressure",label:J("questionary:medical.options.highBloodPressure")},{value:"dislipidemia",label:J("questionary:medical.options.dislipidemia")},{value:"extremeObesity",label:J("questionary:medical.options.obesity")},{value:"pregnancy",label:J("questionary:medical.options.pregnancy")},{value:"hivAidsOrImpairedImmuneSystem",label:J("questionary:medical.options.hiv")},{value:"cancer",label:J("questionary:medical.options.cancer")},{value:"congestiveHeartDisease",label:J("questionary:medical.options.congestiveHeartDisease")},{value:"cerebrovascular",label:J("questionary:medical.options.cerebrovascular")},{value:"valvularHeart",label:J("questionary:medical.options.valvularHeart")},{value:"congestiveHeart",label:J("questionary:medical.options.congestiveHeart")},{value:"sinusitis",label:J("questionary:medical.options.sinusitis")},{value:"immunosuppressiveTherapy",label:J("questionary:medical.options.immunosuppressiveTherapy")},{value:"immunodeficiency",label:J("questionary:medical.options.immunodeficiency")},{value:"other",label:J("questionary:medical.options.other")}]:[{value:"none",label:J("questionary:medical.options.none")},{value:"allergies",label:J("questionary:medical.options.allergies")},{value:"asthma",label:J("questionary:medical.options.asthma")},{value:"bronchitis",label:J("questionary:medical.options.bronchitis")},{value:"congestiveHeartFailure",label:J("questionary:medical.options.congestiveHeart")},{value:"copdEmphysema",label:J("questionary:medical.options.emphysema")},{value:"extremeObesity",label:J("questionary:medical.options.obesity")},{value:"heartDisease",label:J("questionary:medical.options.heartDisease")},{value:"hivAidsOrImpairedImmuneSystem",label:J("questionary:medical.options.hiv")},{value:"lungCancer",label:J("questionary:medical.options.lungCancer")},{value:"otherChronic",label:J("questionary:medical.options.otherChronic")},{value:"pneumonia",label:J("questionary:medical.options.pneumonia")},{value:"pulmonaryFibrosis",label:J("questionary:medical.options.pulmonary")},{value:"reflux",label:J("questionary:medical.options.reflux")},{value:"sinusitis",label:J("questionary:medical.options.sinusitis")},{value:"tuberculosis",label:J("questionary:medical.options.tuberculosis")},{value:"other",label:J("questionary:medical.options.other")}]}),[_,J]);return c.a.createElement(A.MainContainer,null,c.a.createElement(k.a,{currentStep:W.current,totalSteps:W.total,progressBar:!0}),c.a.createElement(A.QuestionText,{extraSpace:!0,first:!0},c.a.createElement(m.a,{i18nKey:"questionary:medical.question"},c.a.createElement("strong",null,"Which of the below medical conditions do you currently have?")),c.a.createElement(A.QuestionAllApply,null,J("questionary:allThatApply"))),c.a.createElement(h.a,{control:$,name:"currentMedicalCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return c.a.createElement(E.a,{isCheckbox:!0,value:n,onChange:function(e){return t(e)},items:Se,excludableValues:["none"]})}}),c.a.createElement(y.a,{errors:ne,name:"currentMedicalCondition",render:function(e){var t=e.message;return c.a.createElement("p",null,t)}}),Q&&c.a.createElement(x,null,(!z||z&&"Colombia"!==_)&&!z&&"Japan"!==_&&c.a.createElement(O.a,{onChange:de,setRecaptchaAvailable:be}),re&&c.a.createElement(A.TempBeforeSubmitError,null,re),c.a.createElement(D.a,{invert:!0,leftLabel:ye(),leftDisabled:xe,leftHandler:ee(z?function(){n&&(Z(!1),P.push(n))}:fe)})))}))}}]);
//# sourceMappingURL=67.d09927d4.chunk.js.map