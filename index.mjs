// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";function n(n,i,o){var m,d,l;if(!r(n))throw new TypeError(t("null3R",n));if(!s(i))throw new TypeError(t("null2S",i));for(m=n.length,d=0;d<m;)-1===(l=e(n,d))&&(l=m),i.call(o,n.substring(d,l),d,n),d=l;return n}export{n as default};
//# sourceMappingURL=index.mjs.map
