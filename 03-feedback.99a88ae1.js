function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(O,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function O(){var e=g();if(w(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function h(e){return u=void 0,v&&o?b(e):(o=r=void 0,a)}function j(){var e=g(),n=w(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},j.flush=function(){return void 0===u?a:h(g())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("input[name = email]"),S=document.querySelector("textarea[name = message]"),w=document.querySelector(".feedback-form"),O={email:b,message:S};w.addEventListener("input",e(t)((function(e){O.email=b.value,O.message=S.value,O[e.target.name]=e.target.value,console.log(O),localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),w.addEventListener("submit",(e=>{e.preventDefault(),console.log(O),localStorage.removeItem("feedback-form-state"),b.value=null,S.value=null})),window.addEventListener("DOMContentLoaded",(()=>{try{b.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,S.value=JSON.parse(localStorage.getItem("feedback-form-state")).message}catch(e){console.log(e.name),console.log(e.message)}}));
//# sourceMappingURL=03-feedback.99a88ae1.js.map