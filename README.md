<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# forEach

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invokes a function for each character in a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import forEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-for-each@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-for-each/tags). For example,

```javascript
import forEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-for-each@v0.2.3-deno/mod.js';
```

#### forEach( str, \[options,] clbk\[, thisArg ] )

Invokes a function for each character in a string.

```javascript
function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEach( 'Beep!', log );
/* =>
    0: B
    1: e
    2: e
    3: p
    4: !
*/
```

The invoked function is provided three arguments:

-   **value**: character.
-   **index**: starting character index.
-   **str**: input string.

To set the function execution context, provide a `thisArg`.

```javascript
function clbk() {
    this.count += 1;
}

var str = 'Hello, world!';

var ctx = {
    'count': 0
};

forEach( str, clbk, ctx );

var bool = ( str.length === ctx.count );
// returns true
```

The function supports the following options:

-   **mode**: type of characters over which to iterate. Must be one of the following:

    -   `'grapheme'`: grapheme clusters. Appropriate for strings containing visual characters which can span multiple Unicode code points (e.g., emoji).
    -   `'code_point'`: Unicode code points. Appropriate for strings containing visual characters which are comprised of more than one Unicode code unit (e.g., ideographic symbols and punctuation and mathematical alphanumerics).
    -   `'code_unit'`: UTF-16 code units. Appropriate for strings containing visual characters drawn from the basic multilingual plane (BMP) (e.g., common characters, such as those from the Latin, Greek, and Cyrillic alphabets).

    Default: `'grapheme'`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   By default, the function assumes the general case in which an input string may contain an arbitrary number of grapheme clusters. This assumption comes with a performance cost. Accordingly, if an input string is known to only contain visual characters of a particular type (e.g., only alphanumeric), one can achieve better performance by specifying the appropriate `mode` option.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import forEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-for-each@deno/mod.js';

function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEach( 'presidential election', log );
forEach( 'Iñtërnâtiônàlizætiøn', log );
forEach( '🌷🍕', log );
forEach( '\uD834\uDD1E', log );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-for-each.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-for-each

[test-image]: https://github.com/stdlib-js/string-for-each/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/string-for-each/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-for-each/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-for-each?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-for-each.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-for-each/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-for-each/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-for-each/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-for-each/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-for-each/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-for-each/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-for-each/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-for-each/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-for-each/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
