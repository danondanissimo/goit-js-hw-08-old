!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(S,t),s?p(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=b();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(S,t),p(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(T(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)(O,500)),j.addEventListener("submit",S);var O=function(e){var t={};t.email=e.currentTarget.elements.email.value,t.message=e.currentTarget.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(localStorage.getItem("feedback-form-state"))},S=function(e){console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}}();
//# sourceMappingURL=03-feedback.d8d07081.js.map
