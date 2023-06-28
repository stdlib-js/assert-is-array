// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var l=r&&"symbol"==typeof Symbol.toStringTag?function(r){var l,n,e,y,c;if(null==r)return t.call(r);n=r[a],c=a,l=null!=(y=r)&&o.call(y,c);try{r[a]=void 0}catch(o){return t.call(r)}return e=t.call(r),l?r[a]=n:delete r[a],e}:function(r){return t.call(r)};var n=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};export{n as default};
//# sourceMappingURL=mod.js.map
