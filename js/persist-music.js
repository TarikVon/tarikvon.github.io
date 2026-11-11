document.addEventListener("DOMContentLoaded",(()=>{const t=window.pjax;if(!t?.options?.switches)return;const e=":scope > #content-inner > #aside-content > #netease-music";t.options.switches["#body-wrap"]=function(t,o){let n=t.querySelector(e),s=o.querySelector(e);if(!n||!n.isEqualNode(s))return window.Pjax.switches.outerHTML.call(this,t,o);
// Detaching even an ancestor of an iframe discards its browsing context.
// Keep this branch connected and replace its siblings at each level.
for(;n!==t;){const t=n.parentElement,e=s.parentElement;for(const e of[...t.childNodes])e!==n&&e.remove();let o=n;for(const n of[...e.childNodes])n===s?o=null:t.insertBefore(n,o);
// Butterfly uses the wrapper classes to select the page and sidebar layouts.
for(const o of t.getAttributeNames())e.hasAttribute(o)||t.removeAttribute(o);for(const{name:o,value:n}of e.attributes)t.getAttribute(o)!==n&&t.setAttribute(o,n);n=t,s=e}this.onSwitch()}}));