(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9952"],{"8dc3":function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return O}));var o=n("9ab4"),r=n("7fd0"),i=new WeakMap,a=function(e,t,n,o){void 0===o&&(o=0),i.has(e)!==n&&(n?u(e,t,o):s(e,t))},c=function(e){return e===e.getRootNode().activeElement},u=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);var a=e.ownerDocument,c="rtl"===a.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+c+"px,"+n+"px,0) scale(0)"},s=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},l=function(e,t,n){if(!n||!t)return function(){};var o=function(n){c(t)&&a(e,t,n)},i=function(){return a(e,t,!1)},u=function(){return o(!0)},s=function(){return o(!1)};return Object(r["a"])(n,"ionScrollStart",u),Object(r["a"])(n,"ionScrollEnd",s),t.addEventListener("blur",i),function(){Object(r["b"])(n,"ionScrollStart",u),Object(r["b"])(n,"ionScrollEnd",s),t.addEventListener("ionBlur",i)}},d="input, textarea, [no-blur], [contenteditable]",f=function(){var e=!0,t=!1,n=document,o=function(){t=!0},i=function(){e=!0},a=function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(d)){var i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}};return Object(r["a"])(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1),function(){Object(r["b"])(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",a,!1)}},v=.3,m=function(e,t,n){var o=e.closest("ion-item,[ion-item]")||e;return p(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},p=function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,c=Math.min(t.bottom,o-n),u=a+15,s=.75*c,l=s-i,d=u-r,f=Math.round(l<0?-l:d>0?-d:0),m=Math.min(f,r-a),p=Math.abs(m),b=p/v,h=Math.min(400,Math.max(150,b));return{scrollAmount:m,scrollDuration:h,scrollPadding:n,inputSafeY:4-(r-u)}},b=function(e,t,n,o,i){var a,u=function(e){a=Object(r["o"])(e)},s=function(u){if(a){var s=Object(r["o"])(u);w(6,a,s)||c(t)||(u.stopPropagation(),h(e,t,n,o,i))}};return e.addEventListener("touchstart",u,!0),e.addEventListener("touchend",s,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",s,!0)}},h=function(e,t,n,i,c){return Object(o["a"])(void 0,void 0,void 0,(function(){var u,s,l,d,f,v;return Object(o["c"])(this,(function(p){switch(p.label){case 0:return n||i?(u=m(e,n||i,c),n&&Math.abs(u.scrollAmount)<4?(t.focus(),[2]):(a(e,t,!0,u.inputSafeY),t.focus(),Object(r["p"])((function(){return e.click()})),"undefined"===typeof window?[3,3]:(l=function(){return Object(o["a"])(void 0,void 0,void 0,(function(){return Object(o["c"])(this,(function(o){switch(o.label){case 0:return void 0!==s&&clearTimeout(s),window.removeEventListener("ionKeyboardDidShow",d),window.removeEventListener("ionKeyboardDidShow",l),n?[4,n.scrollByPoint(0,u.scrollAmount,u.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(e,t,!1,u.inputSafeY),t.focus(),[2]}}))}))},d=function(){window.removeEventListener("ionKeyboardDidShow",d),window.addEventListener("ionKeyboardDidShow",l)},n?[4,n.getScrollElement()]:[3,2]))):[2];case 1:if(f=p.sent(),v=f.scrollHeight-f.clientHeight,u.scrollAmount>v-f.scrollTop)return"password"===t.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",d)):window.addEventListener("ionKeyboardDidShow",l),s=setTimeout(l,1e3),[2];p.label=2;case 2:l(),p.label=3;case 3:return[2]}}))}))},w=function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},E="$ionPaddingTimer",g=function(e){var t=document,n=function(t){y(t.target,e)},o=function(e){y(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),function(){t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},y=function(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&(!e.parentElement||!e.parentElement.parentElement||"ION-SEARCHBAR"!==e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n[E];o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n[E]=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},S=!0,L=!0,O=function(e){var t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",!0),a=e.getBoolean("inputBlurring",!0),c=e.getBoolean("scrollPadding",!0),u=Array.from(t.querySelectorAll("ion-input, ion-textarea")),s=new WeakMap,d=new WeakMap,v=function(e){return Object(o["a"])(void 0,void 0,void 0,(function(){var t,a,c,u,f;return Object(o["c"])(this,(function(o){switch(o.label){case 0:return e.componentOnReady?[4,e.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return t=e.shadowRoot||e,a=t.querySelector("input")||t.querySelector("textarea"),c=e.closest("ion-content"),u=c?null:e.closest("ion-footer"),a?(c&&i&&!s.has(e)&&(f=l(e,a,c),s.set(e,f)),(c||u)&&r&&!d.has(e)&&(f=b(e,a,c,u,n),d.set(e,f)),[2]):[2]}}))}))},m=function(e){if(i){var t=s.get(e);t&&t(),s.delete(e)}if(r){t=d.get(e);t&&t(),d.delete(e)}};a&&S&&f(),c&&L&&g(n);for(var p=0,h=u;p<h.length;p++){var w=h[p];v(w)}t.addEventListener("ionInputDidLoad",(function(e){v(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){m(e.detail)}))}}}]);
//# sourceMappingURL=chunk-2d0e9952.989cef77.js.map