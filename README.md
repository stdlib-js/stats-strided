<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Statistics

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Statistical operations for strided arrays.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/stats-strided/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing APIs for performing statistical operations on strided arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`covarmtk( N, correction, meanx, x, strideX, meany, y, strideY )`][@stdlib/stats/strided/covarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two strided arrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dcovarmtk( N, correction, meanx, x, strideX, meany, y, strideY )`][@stdlib/stats/strided/dcovarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dcovmatmtk( order, orient, uplo, M, N, correction, means, strideM, A, LDA, B, LDB )`][@stdlib/stats/strided/dcovmatmtk]</span><span class="delimiter">: </span><span class="description">compute the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assign the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dcumax( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumin( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`distances`][@stdlib/stats/strided/distances]</span><span class="delimiter">: </span><span class="description">distance metrics for strided arrays.</span>
-   <span class="signature">[`dmax( N, x, strideX )`][@stdlib/stats/strided/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabs( N, x, strideX )`][@stdlib/stats/strided/dmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabssorted( N, x, strideX )`][@stdlib/stats/strided/dmaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxsorted( N, x, strideX )`][@stdlib/stats/strided/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmean( N, x, strideX )`][@stdlib/stats/strided/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeankbn( N, x, strideX )`][@stdlib/stats/strided/dmeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeankbn2( N, x, strideX )`][@stdlib/stats/strided/dmeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeanli( N, x, strideX )`][@stdlib/stats/strided/dmeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dmeanlipw( N, x, strideX )`][@stdlib/stats/strided/dmeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`dmeanors( N, x, strideX )`][@stdlib/stats/strided/dmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`dmeanpn( N, x, strideX )`][@stdlib/stats/strided/dmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dmeanpw( N, x, strideX )`][@stdlib/stats/strided/dmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`dmeanstdev( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/strided/dmeanstdev]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanstdevpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/strided/dmeanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmeanvar( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/strided/dmeanvar]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanvarpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/strided/dmeanvarpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmeanwd( N, x, strideX )`][@stdlib/stats/strided/dmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dmediansorted( N, x, strideX )`][@stdlib/stats/strided/dmediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmidrange( N, x, strideX )`][@stdlib/stats/strided/dmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmin( N, x, strideX )`][@stdlib/stats/strided/dmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminabs( N, x, strideX )`][@stdlib/stats/strided/dminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminsorted( N, x, strideX )`][@stdlib/stats/strided/dminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskmaxabs( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskmidrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dnanmax( N, x, strideX )`][@stdlib/stats/strided/dnanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmaxabs( N, x, strideX )`][@stdlib/stats/strided/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmean( N, x, strideX )`][@stdlib/stats/strided/dnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmeanors( N, x, strideX )`][@stdlib/stats/strided/dnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnanmeanpn( N, x, strideX )`][@stdlib/stats/strided/dnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dnanmeanpw( N, x, strideX )`][@stdlib/stats/strided/dnanmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnanmeanwd( N, x, strideX )`][@stdlib/stats/strided/dnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmidrange( N, x, strideX )`][@stdlib/stats/strided/dnanmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmin( N, x, strideX )`][@stdlib/stats/strided/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanminabs( N, x, strideX )`][@stdlib/stats/strided/dnanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dnanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmidrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dnanmskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dnanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dnanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanrange( N, x, strideX )`][@stdlib/stats/strided/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdev( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dnanvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`drange( N, x, strideX )`][@stdlib/stats/strided/drange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`drangeabs( N, x, strideX )`][@stdlib/stats/strided/drangeabs]</span><span class="delimiter">: </span><span class="description">compute the range of absolute values of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsem( N, correction, x, strideX )`][@stdlib/stats/strided/dsem]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsemch( N, correction, x, strideX )`][@stdlib/stats/strided/dsemch]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dsempn( N, correction, x, strideX )`][@stdlib/stats/strided/dsempn]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dsemtk( N, correction, x, strideX )`][@stdlib/stats/strided/dsemtk]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dsemwd( N, correction, x, strideX )`][@stdlib/stats/strided/dsemwd]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dsemyc( N, correction, x, strideX )`][@stdlib/stats/strided/dsemyc]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsmean( N, x, strideX )`][@stdlib/stats/strided/dsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanors( N, x, strideX )`][@stdlib/stats/strided/dsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpn( N, x, strideX )`][@stdlib/stats/strided/dsmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpw( N, x, strideX )`][@stdlib/stats/strided/dsmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanwd( N, x, strideX )`][@stdlib/stats/strided/dsmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmean( N, x, strideX )`][@stdlib/stats/strided/dsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanors( N, x, strideX )`][@stdlib/stats/strided/dsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanpn( N, x, strideX )`][@stdlib/stats/strided/dsnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanwd( N, x, strideX )`][@stdlib/stats/strided/dsnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using Welford's algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dstdev( N, correction, x, strideX )`][@stdlib/stats/strided/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dsvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dsvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/dvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dvarm( N, correction, mean, x, strideX )`][@stdlib/stats/strided/dvarm]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean.</span>
-   <span class="signature">[`dvarmpn( N, correction, mean, x, strideX )`][@stdlib/stats/strided/dvarmpn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.</span>
-   <span class="signature">[`dvarmtk( N, correction, mean, x, strideX )`][@stdlib/stats/strided/dvarmtk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dztest( N, alternative, alpha, mu, sigma, x, strideX, out )`][@stdlib/stats/strided/dztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a double-precision floating-point strided array.</span>
-   <span class="signature">[`dztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out )`][@stdlib/stats/strided/dztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two double-precision floating-point strided arrays.</span>
-   <span class="signature">[`maxBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/max-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function.</span>
-   <span class="signature">[`max( N, x, strideX )`][@stdlib/stats/strided/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="signature">[`maxabs( N, x, strideX )`][@stdlib/stats/strided/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="signature">[`maxsorted( N, x, strideX )`][@stdlib/stats/strided/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted strided array.</span>
-   <span class="signature">[`mean( N, x, strideX )`][@stdlib/stats/strided/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array.</span>
-   <span class="signature">[`meankbn( N, x, strideX )`][@stdlib/stats/strided/meankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( N, x, strideX )`][@stdlib/stats/strided/meankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( N, x, strideX )`][@stdlib/stats/strided/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( N, x, strideX )`][@stdlib/stats/strided/meanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( N, x, strideX )`][@stdlib/stats/strided/meanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using pairwise summation.</span>
-   <span class="signature">[`meanwd( N, x, strideX )`][@stdlib/stats/strided/meanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`mediansorted( N, x, strideX )`][@stdlib/stats/strided/mediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted strided array.</span>
-   <span class="signature">[`midrangeBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/midrange-by]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a strided array via a callback function.</span>
-   <span class="signature">[`midrange( N, x, strideX )`][@stdlib/stats/strided/midrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a strided array.</span>
-   <span class="signature">[`minBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/min-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function.</span>
-   <span class="signature">[`min( N, x, strideX )`][@stdlib/stats/strided/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="signature">[`minabs( N, x, strideX )`][@stdlib/stats/strided/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array.</span>
-   <span class="signature">[`minsorted( N, x, strideX )`][@stdlib/stats/strided/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted strided array.</span>
-   <span class="signature">[`mskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask.</span>
-   <span class="signature">[`mskmaxabs( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/mskmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array according to a mask.</span>
-   <span class="signature">[`mskmidrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/mskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a strided array according to a mask.</span>
-   <span class="signature">[`mskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask.</span>
-   <span class="signature">[`mskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask.</span>
-   <span class="signature">[`nanmaxBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( N, x, strideX )`][@stdlib/stats/strided/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( N, x, strideX )`][@stdlib/stats/strided/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmean( N, x, strideX )`][@stdlib/stats/strided/nanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmeanors( N, x, strideX )`][@stdlib/stats/strided/nanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`nanmeanpn( N, x, strideX )`][@stdlib/stats/strided/nanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`nanmeanwd( N, x, strideX )`][@stdlib/stats/strided/nanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanmidrangeBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/nanmidrange-by]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmidrange( N, x, strideX )`][@stdlib/stats/strided/nanmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( N, x, strideX )`][@stdlib/stats/strided/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( N, x, strideX )`][@stdlib/stats/strided/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmidrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrangeBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/nanrange-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( N, x, strideX )`][@stdlib/stats/strided/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdev( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/nanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`nanvariance( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/nanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`rangeBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/strided/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function.</span>
-   <span class="signature">[`range( N, x, strideX )`][@stdlib/stats/strided/range]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array.</span>
-   <span class="signature">[`rangeabs( N, x, strideX )`][@stdlib/stats/strided/rangeabs]</span><span class="delimiter">: </span><span class="description">calculate the range of absolute values of a strided array.</span>
-   <span class="signature">[`scovarmtk( N, correction, meanx, x, strideX, meany, y, strideY )`][@stdlib/stats/strided/scovarmtk]</span><span class="delimiter">: </span><span class="description">calculate the covariance of two single-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`scumax( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumin( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`sdsmean( N, x, strideX )`][@stdlib/stats/strided/sdsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation.</span>
-   <span class="signature">[`sdsmeanors( N, x, strideX )`][@stdlib/stats/strided/sdsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( N, x, strideX )`][@stdlib/stats/strided/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smax( N, x, strideX )`][@stdlib/stats/strided/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabs( N, x, strideX )`][@stdlib/stats/strided/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabssorted( N, x, strideX )`][@stdlib/stats/strided/smaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxsorted( N, x, stride )`][@stdlib/stats/strided/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smean( N, x, strideX )`][@stdlib/stats/strided/smean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smeankbn( N, x, strideX )`][@stdlib/stats/strided/smeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( N, x, strideX )`][@stdlib/stats/strided/smeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanli( N, x, strideX )`][@stdlib/stats/strided/smeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`smeanlipw( N, x, strideX )`][@stdlib/stats/strided/smeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( N, x, strideX )`][@stdlib/stats/strided/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`smeanpn( N, x, strideX )`][@stdlib/stats/strided/smeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`smeanpw( N, x, strideX )`][@stdlib/stats/strided/smeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`smeanwd( N, x, strideX )`][@stdlib/stats/strided/smeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`smediansorted( N, x, strideX )`][@stdlib/stats/strided/smediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smidrange( N, x, strideX )`][@stdlib/stats/strided/smidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smin( N, x, strideX )`][@stdlib/stats/strided/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminabs( N, x, strideX )`][@stdlib/stats/strided/sminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminsorted( N, x, strideX )`][@stdlib/stats/strided/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskmaxabs( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskmidrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`snanmax( N, x, strideX )`][@stdlib/stats/strided/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmaxabs( N, x, strideX )`][@stdlib/stats/strided/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmean( N, x, strideX )`][@stdlib/stats/strided/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmeanors( N, x, strideX )`][@stdlib/stats/strided/snanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snanmeanpn( N, x, strideX )`][@stdlib/stats/strided/snanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`snanmeanwd( N, x, strideX )`][@stdlib/stats/strided/snanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanmidrange( N, x, strideX )`][@stdlib/stats/strided/snanmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmin( N, x, strideX )`][@stdlib/stats/strided/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanminabs( N, x, strideX )`][@stdlib/stats/strided/snanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmidrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/snanmskmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/snanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/snanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`snanrange( N, x, strideX )`][@stdlib/stats/strided/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`srange( N, x, strideX )`][@stdlib/stats/strided/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`srangeabs( N, x, strideX )`][@stdlib/stats/strided/srangeabs]</span><span class="delimiter">: </span><span class="description">compute the range of absolute values of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdev( N, correction, x, strideX )`][@stdlib/stats/strided/sstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`sstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`sstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`sstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`sstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`stdev( N, correction, x, strideX )`][@stdlib/stats/strided/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array.</span>
-   <span class="signature">[`stdevch( N, correction, x, strideX )`][@stdlib/stats/strided/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`svariance( N, correction, x, strideX )`][@stdlib/stats/strided/svariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array.</span>
-   <span class="signature">[`svariancech( N, correction, x, strideX )`][@stdlib/stats/strided/svariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`svariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/svariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`svariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/svariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`svariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/svariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`svarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/svarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`sztest( N, alternative, alpha, mu, sigma, x, strideX, out )`][@stdlib/stats/strided/sztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a single-precision floating-point strided array.</span>
-   <span class="signature">[`sztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out )`][@stdlib/stats/strided/sztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test for two single-precision floating-point strided arrays.</span>
-   <span class="signature">[`variance( N, correction, x, strideX )`][@stdlib/stats/strided/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array.</span>
-   <span class="signature">[`variancech( N, correction, x, strideX )`][@stdlib/stats/strided/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`variancepn( N, correction, x, strideX )`][@stdlib/stats/strided/variancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`variancetk( N, correction, x, strideX )`][@stdlib/stats/strided/variancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`variancewd( N, correction, x, strideX )`][@stdlib/stats/strided/variancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`varianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/varianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`ztest( N, alternative, alpha, mu, sigma, x, strideX, out )`][@stdlib/stats/strided/ztest]</span><span class="delimiter">: </span><span class="description">compute a one-sample Z-test for a strided array.</span>
-   <span class="signature">[`ztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out )`][@stdlib/stats/strided/ztest2]</span><span class="delimiter">: </span><span class="description">compute a two-sample Z-test.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@v0.1.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided

[test-image]: https://github.com/stdlib-js/stats-strided/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-strided/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/strided/covarmtk]: https://github.com/stdlib-js/stats-strided-covarmtk/tree/umd

[@stdlib/stats/strided/dcovarmtk]: https://github.com/stdlib-js/stats-strided-dcovarmtk/tree/umd

[@stdlib/stats/strided/dcovmatmtk]: https://github.com/stdlib-js/stats-strided-dcovmatmtk/tree/umd

[@stdlib/stats/strided/dcumax]: https://github.com/stdlib-js/stats-strided-dcumax/tree/umd

[@stdlib/stats/strided/dcumaxabs]: https://github.com/stdlib-js/stats-strided-dcumaxabs/tree/umd

[@stdlib/stats/strided/dcumin]: https://github.com/stdlib-js/stats-strided-dcumin/tree/umd

[@stdlib/stats/strided/dcuminabs]: https://github.com/stdlib-js/stats-strided-dcuminabs/tree/umd

[@stdlib/stats/strided/distances]: https://github.com/stdlib-js/stats-strided-distances/tree/umd

[@stdlib/stats/strided/dmax]: https://github.com/stdlib-js/stats-strided-dmax/tree/umd

[@stdlib/stats/strided/dmaxabs]: https://github.com/stdlib-js/stats-strided-dmaxabs/tree/umd

[@stdlib/stats/strided/dmaxabssorted]: https://github.com/stdlib-js/stats-strided-dmaxabssorted/tree/umd

[@stdlib/stats/strided/dmaxsorted]: https://github.com/stdlib-js/stats-strided-dmaxsorted/tree/umd

[@stdlib/stats/strided/dmean]: https://github.com/stdlib-js/stats-strided-dmean/tree/umd

[@stdlib/stats/strided/dmeankbn]: https://github.com/stdlib-js/stats-strided-dmeankbn/tree/umd

[@stdlib/stats/strided/dmeankbn2]: https://github.com/stdlib-js/stats-strided-dmeankbn2/tree/umd

[@stdlib/stats/strided/dmeanli]: https://github.com/stdlib-js/stats-strided-dmeanli/tree/umd

[@stdlib/stats/strided/dmeanlipw]: https://github.com/stdlib-js/stats-strided-dmeanlipw/tree/umd

[@stdlib/stats/strided/dmeanors]: https://github.com/stdlib-js/stats-strided-dmeanors/tree/umd

[@stdlib/stats/strided/dmeanpn]: https://github.com/stdlib-js/stats-strided-dmeanpn/tree/umd

[@stdlib/stats/strided/dmeanpw]: https://github.com/stdlib-js/stats-strided-dmeanpw/tree/umd

[@stdlib/stats/strided/dmeanstdev]: https://github.com/stdlib-js/stats-strided-dmeanstdev/tree/umd

[@stdlib/stats/strided/dmeanstdevpn]: https://github.com/stdlib-js/stats-strided-dmeanstdevpn/tree/umd

[@stdlib/stats/strided/dmeanvar]: https://github.com/stdlib-js/stats-strided-dmeanvar/tree/umd

[@stdlib/stats/strided/dmeanvarpn]: https://github.com/stdlib-js/stats-strided-dmeanvarpn/tree/umd

[@stdlib/stats/strided/dmeanwd]: https://github.com/stdlib-js/stats-strided-dmeanwd/tree/umd

[@stdlib/stats/strided/dmediansorted]: https://github.com/stdlib-js/stats-strided-dmediansorted/tree/umd

[@stdlib/stats/strided/dmidrange]: https://github.com/stdlib-js/stats-strided-dmidrange/tree/umd

[@stdlib/stats/strided/dmin]: https://github.com/stdlib-js/stats-strided-dmin/tree/umd

[@stdlib/stats/strided/dminabs]: https://github.com/stdlib-js/stats-strided-dminabs/tree/umd

[@stdlib/stats/strided/dminsorted]: https://github.com/stdlib-js/stats-strided-dminsorted/tree/umd

[@stdlib/stats/strided/dmskmax]: https://github.com/stdlib-js/stats-strided-dmskmax/tree/umd

[@stdlib/stats/strided/dmskmaxabs]: https://github.com/stdlib-js/stats-strided-dmskmaxabs/tree/umd

[@stdlib/stats/strided/dmskmidrange]: https://github.com/stdlib-js/stats-strided-dmskmidrange/tree/umd

[@stdlib/stats/strided/dmskmin]: https://github.com/stdlib-js/stats-strided-dmskmin/tree/umd

[@stdlib/stats/strided/dmskrange]: https://github.com/stdlib-js/stats-strided-dmskrange/tree/umd

[@stdlib/stats/strided/dnanmax]: https://github.com/stdlib-js/stats-strided-dnanmax/tree/umd

[@stdlib/stats/strided/dnanmaxabs]: https://github.com/stdlib-js/stats-strided-dnanmaxabs/tree/umd

[@stdlib/stats/strided/dnanmean]: https://github.com/stdlib-js/stats-strided-dnanmean/tree/umd

[@stdlib/stats/strided/dnanmeanors]: https://github.com/stdlib-js/stats-strided-dnanmeanors/tree/umd

[@stdlib/stats/strided/dnanmeanpn]: https://github.com/stdlib-js/stats-strided-dnanmeanpn/tree/umd

[@stdlib/stats/strided/dnanmeanpw]: https://github.com/stdlib-js/stats-strided-dnanmeanpw/tree/umd

[@stdlib/stats/strided/dnanmeanwd]: https://github.com/stdlib-js/stats-strided-dnanmeanwd/tree/umd

[@stdlib/stats/strided/dnanmidrange]: https://github.com/stdlib-js/stats-strided-dnanmidrange/tree/umd

[@stdlib/stats/strided/dnanmin]: https://github.com/stdlib-js/stats-strided-dnanmin/tree/umd

[@stdlib/stats/strided/dnanminabs]: https://github.com/stdlib-js/stats-strided-dnanminabs/tree/umd

[@stdlib/stats/strided/dnanmskmax]: https://github.com/stdlib-js/stats-strided-dnanmskmax/tree/umd

[@stdlib/stats/strided/dnanmskmidrange]: https://github.com/stdlib-js/stats-strided-dnanmskmidrange/tree/umd

[@stdlib/stats/strided/dnanmskmin]: https://github.com/stdlib-js/stats-strided-dnanmskmin/tree/umd

[@stdlib/stats/strided/dnanmskrange]: https://github.com/stdlib-js/stats-strided-dnanmskrange/tree/umd

[@stdlib/stats/strided/dnanrange]: https://github.com/stdlib-js/stats-strided-dnanrange/tree/umd

[@stdlib/stats/strided/dnanstdev]: https://github.com/stdlib-js/stats-strided-dnanstdev/tree/umd

[@stdlib/stats/strided/dnanstdevch]: https://github.com/stdlib-js/stats-strided-dnanstdevch/tree/umd

[@stdlib/stats/strided/dnanstdevpn]: https://github.com/stdlib-js/stats-strided-dnanstdevpn/tree/umd

[@stdlib/stats/strided/dnanstdevtk]: https://github.com/stdlib-js/stats-strided-dnanstdevtk/tree/umd

[@stdlib/stats/strided/dnanstdevwd]: https://github.com/stdlib-js/stats-strided-dnanstdevwd/tree/umd

[@stdlib/stats/strided/dnanstdevyc]: https://github.com/stdlib-js/stats-strided-dnanstdevyc/tree/umd

[@stdlib/stats/strided/dnanvariance]: https://github.com/stdlib-js/stats-strided-dnanvariance/tree/umd

[@stdlib/stats/strided/dnanvariancech]: https://github.com/stdlib-js/stats-strided-dnanvariancech/tree/umd

[@stdlib/stats/strided/dnanvariancepn]: https://github.com/stdlib-js/stats-strided-dnanvariancepn/tree/umd

[@stdlib/stats/strided/dnanvariancetk]: https://github.com/stdlib-js/stats-strided-dnanvariancetk/tree/umd

[@stdlib/stats/strided/dnanvariancewd]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/tree/umd

[@stdlib/stats/strided/dnanvarianceyc]: https://github.com/stdlib-js/stats-strided-dnanvarianceyc/tree/umd

[@stdlib/stats/strided/drange]: https://github.com/stdlib-js/stats-strided-drange/tree/umd

[@stdlib/stats/strided/drangeabs]: https://github.com/stdlib-js/stats-strided-drangeabs/tree/umd

[@stdlib/stats/strided/dsem]: https://github.com/stdlib-js/stats-strided-dsem/tree/umd

[@stdlib/stats/strided/dsemch]: https://github.com/stdlib-js/stats-strided-dsemch/tree/umd

[@stdlib/stats/strided/dsempn]: https://github.com/stdlib-js/stats-strided-dsempn/tree/umd

[@stdlib/stats/strided/dsemtk]: https://github.com/stdlib-js/stats-strided-dsemtk/tree/umd

[@stdlib/stats/strided/dsemwd]: https://github.com/stdlib-js/stats-strided-dsemwd/tree/umd

[@stdlib/stats/strided/dsemyc]: https://github.com/stdlib-js/stats-strided-dsemyc/tree/umd

[@stdlib/stats/strided/dsmean]: https://github.com/stdlib-js/stats-strided-dsmean/tree/umd

[@stdlib/stats/strided/dsmeanors]: https://github.com/stdlib-js/stats-strided-dsmeanors/tree/umd

[@stdlib/stats/strided/dsmeanpn]: https://github.com/stdlib-js/stats-strided-dsmeanpn/tree/umd

[@stdlib/stats/strided/dsmeanpw]: https://github.com/stdlib-js/stats-strided-dsmeanpw/tree/umd

[@stdlib/stats/strided/dsmeanwd]: https://github.com/stdlib-js/stats-strided-dsmeanwd/tree/umd

[@stdlib/stats/strided/dsnanmean]: https://github.com/stdlib-js/stats-strided-dsnanmean/tree/umd

[@stdlib/stats/strided/dsnanmeanors]: https://github.com/stdlib-js/stats-strided-dsnanmeanors/tree/umd

[@stdlib/stats/strided/dsnanmeanpn]: https://github.com/stdlib-js/stats-strided-dsnanmeanpn/tree/umd

[@stdlib/stats/strided/dsnanmeanwd]: https://github.com/stdlib-js/stats-strided-dsnanmeanwd/tree/umd

[@stdlib/stats/strided/dstdev]: https://github.com/stdlib-js/stats-strided-dstdev/tree/umd

[@stdlib/stats/strided/dstdevch]: https://github.com/stdlib-js/stats-strided-dstdevch/tree/umd

[@stdlib/stats/strided/dstdevpn]: https://github.com/stdlib-js/stats-strided-dstdevpn/tree/umd

[@stdlib/stats/strided/dstdevtk]: https://github.com/stdlib-js/stats-strided-dstdevtk/tree/umd

[@stdlib/stats/strided/dstdevwd]: https://github.com/stdlib-js/stats-strided-dstdevwd/tree/umd

[@stdlib/stats/strided/dstdevyc]: https://github.com/stdlib-js/stats-strided-dstdevyc/tree/umd

[@stdlib/stats/strided/dsvariance]: https://github.com/stdlib-js/stats-strided-dsvariance/tree/umd

[@stdlib/stats/strided/dsvariancepn]: https://github.com/stdlib-js/stats-strided-dsvariancepn/tree/umd

[@stdlib/stats/strided/dvariance]: https://github.com/stdlib-js/stats-strided-dvariance/tree/umd

[@stdlib/stats/strided/dvariancech]: https://github.com/stdlib-js/stats-strided-dvariancech/tree/umd

[@stdlib/stats/strided/dvariancepn]: https://github.com/stdlib-js/stats-strided-dvariancepn/tree/umd

[@stdlib/stats/strided/dvariancetk]: https://github.com/stdlib-js/stats-strided-dvariancetk/tree/umd

[@stdlib/stats/strided/dvariancewd]: https://github.com/stdlib-js/stats-strided-dvariancewd/tree/umd

[@stdlib/stats/strided/dvarianceyc]: https://github.com/stdlib-js/stats-strided-dvarianceyc/tree/umd

[@stdlib/stats/strided/dvarm]: https://github.com/stdlib-js/stats-strided-dvarm/tree/umd

[@stdlib/stats/strided/dvarmpn]: https://github.com/stdlib-js/stats-strided-dvarmpn/tree/umd

[@stdlib/stats/strided/dvarmtk]: https://github.com/stdlib-js/stats-strided-dvarmtk/tree/umd

[@stdlib/stats/strided/dztest]: https://github.com/stdlib-js/stats-strided-dztest/tree/umd

[@stdlib/stats/strided/dztest2]: https://github.com/stdlib-js/stats-strided-dztest2/tree/umd

[@stdlib/stats/strided/max-by]: https://github.com/stdlib-js/stats-strided-max-by/tree/umd

[@stdlib/stats/strided/max]: https://github.com/stdlib-js/stats-strided-max/tree/umd

[@stdlib/stats/strided/maxabs]: https://github.com/stdlib-js/stats-strided-maxabs/tree/umd

[@stdlib/stats/strided/maxsorted]: https://github.com/stdlib-js/stats-strided-maxsorted/tree/umd

[@stdlib/stats/strided/mean]: https://github.com/stdlib-js/stats-strided-mean/tree/umd

[@stdlib/stats/strided/meankbn]: https://github.com/stdlib-js/stats-strided-meankbn/tree/umd

[@stdlib/stats/strided/meankbn2]: https://github.com/stdlib-js/stats-strided-meankbn2/tree/umd

[@stdlib/stats/strided/meanors]: https://github.com/stdlib-js/stats-strided-meanors/tree/umd

[@stdlib/stats/strided/meanpn]: https://github.com/stdlib-js/stats-strided-meanpn/tree/umd

[@stdlib/stats/strided/meanpw]: https://github.com/stdlib-js/stats-strided-meanpw/tree/umd

[@stdlib/stats/strided/meanwd]: https://github.com/stdlib-js/stats-strided-meanwd/tree/umd

[@stdlib/stats/strided/mediansorted]: https://github.com/stdlib-js/stats-strided-mediansorted/tree/umd

[@stdlib/stats/strided/midrange-by]: https://github.com/stdlib-js/stats-strided-midrange-by/tree/umd

[@stdlib/stats/strided/midrange]: https://github.com/stdlib-js/stats-strided-midrange/tree/umd

[@stdlib/stats/strided/min-by]: https://github.com/stdlib-js/stats-strided-min-by/tree/umd

[@stdlib/stats/strided/min]: https://github.com/stdlib-js/stats-strided-min/tree/umd

[@stdlib/stats/strided/minabs]: https://github.com/stdlib-js/stats-strided-minabs/tree/umd

[@stdlib/stats/strided/minsorted]: https://github.com/stdlib-js/stats-strided-minsorted/tree/umd

[@stdlib/stats/strided/mskmax]: https://github.com/stdlib-js/stats-strided-mskmax/tree/umd

[@stdlib/stats/strided/mskmaxabs]: https://github.com/stdlib-js/stats-strided-mskmaxabs/tree/umd

[@stdlib/stats/strided/mskmidrange]: https://github.com/stdlib-js/stats-strided-mskmidrange/tree/umd

[@stdlib/stats/strided/mskmin]: https://github.com/stdlib-js/stats-strided-mskmin/tree/umd

[@stdlib/stats/strided/mskrange]: https://github.com/stdlib-js/stats-strided-mskrange/tree/umd

[@stdlib/stats/strided/nanmax-by]: https://github.com/stdlib-js/stats-strided-nanmax-by/tree/umd

[@stdlib/stats/strided/nanmax]: https://github.com/stdlib-js/stats-strided-nanmax/tree/umd

[@stdlib/stats/strided/nanmaxabs]: https://github.com/stdlib-js/stats-strided-nanmaxabs/tree/umd

[@stdlib/stats/strided/nanmean]: https://github.com/stdlib-js/stats-strided-nanmean/tree/umd

[@stdlib/stats/strided/nanmeanors]: https://github.com/stdlib-js/stats-strided-nanmeanors/tree/umd

[@stdlib/stats/strided/nanmeanpn]: https://github.com/stdlib-js/stats-strided-nanmeanpn/tree/umd

[@stdlib/stats/strided/nanmeanwd]: https://github.com/stdlib-js/stats-strided-nanmeanwd/tree/umd

[@stdlib/stats/strided/nanmidrange-by]: https://github.com/stdlib-js/stats-strided-nanmidrange-by/tree/umd

[@stdlib/stats/strided/nanmidrange]: https://github.com/stdlib-js/stats-strided-nanmidrange/tree/umd

[@stdlib/stats/strided/nanmin-by]: https://github.com/stdlib-js/stats-strided-nanmin-by/tree/umd

[@stdlib/stats/strided/nanmin]: https://github.com/stdlib-js/stats-strided-nanmin/tree/umd

[@stdlib/stats/strided/nanminabs]: https://github.com/stdlib-js/stats-strided-nanminabs/tree/umd

[@stdlib/stats/strided/nanmskmax]: https://github.com/stdlib-js/stats-strided-nanmskmax/tree/umd

[@stdlib/stats/strided/nanmskmidrange]: https://github.com/stdlib-js/stats-strided-nanmskmidrange/tree/umd

[@stdlib/stats/strided/nanmskmin]: https://github.com/stdlib-js/stats-strided-nanmskmin/tree/umd

[@stdlib/stats/strided/nanmskrange]: https://github.com/stdlib-js/stats-strided-nanmskrange/tree/umd

[@stdlib/stats/strided/nanrange-by]: https://github.com/stdlib-js/stats-strided-nanrange-by/tree/umd

[@stdlib/stats/strided/nanrange]: https://github.com/stdlib-js/stats-strided-nanrange/tree/umd

[@stdlib/stats/strided/nanstdev]: https://github.com/stdlib-js/stats-strided-nanstdev/tree/umd

[@stdlib/stats/strided/nanstdevch]: https://github.com/stdlib-js/stats-strided-nanstdevch/tree/umd

[@stdlib/stats/strided/nanstdevpn]: https://github.com/stdlib-js/stats-strided-nanstdevpn/tree/umd

[@stdlib/stats/strided/nanstdevtk]: https://github.com/stdlib-js/stats-strided-nanstdevtk/tree/umd

[@stdlib/stats/strided/nanstdevwd]: https://github.com/stdlib-js/stats-strided-nanstdevwd/tree/umd

[@stdlib/stats/strided/nanstdevyc]: https://github.com/stdlib-js/stats-strided-nanstdevyc/tree/umd

[@stdlib/stats/strided/nanvariance]: https://github.com/stdlib-js/stats-strided-nanvariance/tree/umd

[@stdlib/stats/strided/nanvariancech]: https://github.com/stdlib-js/stats-strided-nanvariancech/tree/umd

[@stdlib/stats/strided/nanvariancepn]: https://github.com/stdlib-js/stats-strided-nanvariancepn/tree/umd

[@stdlib/stats/strided/nanvariancetk]: https://github.com/stdlib-js/stats-strided-nanvariancetk/tree/umd

[@stdlib/stats/strided/nanvariancewd]: https://github.com/stdlib-js/stats-strided-nanvariancewd/tree/umd

[@stdlib/stats/strided/nanvarianceyc]: https://github.com/stdlib-js/stats-strided-nanvarianceyc/tree/umd

[@stdlib/stats/strided/range-by]: https://github.com/stdlib-js/stats-strided-range-by/tree/umd

[@stdlib/stats/strided/range]: https://github.com/stdlib-js/stats-strided-range/tree/umd

[@stdlib/stats/strided/rangeabs]: https://github.com/stdlib-js/stats-strided-rangeabs/tree/umd

[@stdlib/stats/strided/scovarmtk]: https://github.com/stdlib-js/stats-strided-scovarmtk/tree/umd

[@stdlib/stats/strided/scumax]: https://github.com/stdlib-js/stats-strided-scumax/tree/umd

[@stdlib/stats/strided/scumaxabs]: https://github.com/stdlib-js/stats-strided-scumaxabs/tree/umd

[@stdlib/stats/strided/scumin]: https://github.com/stdlib-js/stats-strided-scumin/tree/umd

[@stdlib/stats/strided/scuminabs]: https://github.com/stdlib-js/stats-strided-scuminabs/tree/umd

[@stdlib/stats/strided/sdsmean]: https://github.com/stdlib-js/stats-strided-sdsmean/tree/umd

[@stdlib/stats/strided/sdsmeanors]: https://github.com/stdlib-js/stats-strided-sdsmeanors/tree/umd

[@stdlib/stats/strided/sdsnanmeanors]: https://github.com/stdlib-js/stats-strided-sdsnanmeanors/tree/umd

[@stdlib/stats/strided/smax]: https://github.com/stdlib-js/stats-strided-smax/tree/umd

[@stdlib/stats/strided/smaxabs]: https://github.com/stdlib-js/stats-strided-smaxabs/tree/umd

[@stdlib/stats/strided/smaxabssorted]: https://github.com/stdlib-js/stats-strided-smaxabssorted/tree/umd

[@stdlib/stats/strided/smaxsorted]: https://github.com/stdlib-js/stats-strided-smaxsorted/tree/umd

[@stdlib/stats/strided/smean]: https://github.com/stdlib-js/stats-strided-smean/tree/umd

[@stdlib/stats/strided/smeankbn]: https://github.com/stdlib-js/stats-strided-smeankbn/tree/umd

[@stdlib/stats/strided/smeankbn2]: https://github.com/stdlib-js/stats-strided-smeankbn2/tree/umd

[@stdlib/stats/strided/smeanli]: https://github.com/stdlib-js/stats-strided-smeanli/tree/umd

[@stdlib/stats/strided/smeanlipw]: https://github.com/stdlib-js/stats-strided-smeanlipw/tree/umd

[@stdlib/stats/strided/smeanors]: https://github.com/stdlib-js/stats-strided-smeanors/tree/umd

[@stdlib/stats/strided/smeanpn]: https://github.com/stdlib-js/stats-strided-smeanpn/tree/umd

[@stdlib/stats/strided/smeanpw]: https://github.com/stdlib-js/stats-strided-smeanpw/tree/umd

[@stdlib/stats/strided/smeanwd]: https://github.com/stdlib-js/stats-strided-smeanwd/tree/umd

[@stdlib/stats/strided/smediansorted]: https://github.com/stdlib-js/stats-strided-smediansorted/tree/umd

[@stdlib/stats/strided/smidrange]: https://github.com/stdlib-js/stats-strided-smidrange/tree/umd

[@stdlib/stats/strided/smin]: https://github.com/stdlib-js/stats-strided-smin/tree/umd

[@stdlib/stats/strided/sminabs]: https://github.com/stdlib-js/stats-strided-sminabs/tree/umd

[@stdlib/stats/strided/sminsorted]: https://github.com/stdlib-js/stats-strided-sminsorted/tree/umd

[@stdlib/stats/strided/smskmax]: https://github.com/stdlib-js/stats-strided-smskmax/tree/umd

[@stdlib/stats/strided/smskmaxabs]: https://github.com/stdlib-js/stats-strided-smskmaxabs/tree/umd

[@stdlib/stats/strided/smskmidrange]: https://github.com/stdlib-js/stats-strided-smskmidrange/tree/umd

[@stdlib/stats/strided/smskmin]: https://github.com/stdlib-js/stats-strided-smskmin/tree/umd

[@stdlib/stats/strided/smskrange]: https://github.com/stdlib-js/stats-strided-smskrange/tree/umd

[@stdlib/stats/strided/snanmax]: https://github.com/stdlib-js/stats-strided-snanmax/tree/umd

[@stdlib/stats/strided/snanmaxabs]: https://github.com/stdlib-js/stats-strided-snanmaxabs/tree/umd

[@stdlib/stats/strided/snanmean]: https://github.com/stdlib-js/stats-strided-snanmean/tree/umd

[@stdlib/stats/strided/snanmeanors]: https://github.com/stdlib-js/stats-strided-snanmeanors/tree/umd

[@stdlib/stats/strided/snanmeanpn]: https://github.com/stdlib-js/stats-strided-snanmeanpn/tree/umd

[@stdlib/stats/strided/snanmeanwd]: https://github.com/stdlib-js/stats-strided-snanmeanwd/tree/umd

[@stdlib/stats/strided/snanmidrange]: https://github.com/stdlib-js/stats-strided-snanmidrange/tree/umd

[@stdlib/stats/strided/snanmin]: https://github.com/stdlib-js/stats-strided-snanmin/tree/umd

[@stdlib/stats/strided/snanminabs]: https://github.com/stdlib-js/stats-strided-snanminabs/tree/umd

[@stdlib/stats/strided/snanmskmax]: https://github.com/stdlib-js/stats-strided-snanmskmax/tree/umd

[@stdlib/stats/strided/snanmskmidrange]: https://github.com/stdlib-js/stats-strided-snanmskmidrange/tree/umd

[@stdlib/stats/strided/snanmskmin]: https://github.com/stdlib-js/stats-strided-snanmskmin/tree/umd

[@stdlib/stats/strided/snanmskrange]: https://github.com/stdlib-js/stats-strided-snanmskrange/tree/umd

[@stdlib/stats/strided/snanrange]: https://github.com/stdlib-js/stats-strided-snanrange/tree/umd

[@stdlib/stats/strided/srange]: https://github.com/stdlib-js/stats-strided-srange/tree/umd

[@stdlib/stats/strided/srangeabs]: https://github.com/stdlib-js/stats-strided-srangeabs/tree/umd

[@stdlib/stats/strided/sstdev]: https://github.com/stdlib-js/stats-strided-sstdev/tree/umd

[@stdlib/stats/strided/sstdevch]: https://github.com/stdlib-js/stats-strided-sstdevch/tree/umd

[@stdlib/stats/strided/sstdevpn]: https://github.com/stdlib-js/stats-strided-sstdevpn/tree/umd

[@stdlib/stats/strided/sstdevtk]: https://github.com/stdlib-js/stats-strided-sstdevtk/tree/umd

[@stdlib/stats/strided/sstdevwd]: https://github.com/stdlib-js/stats-strided-sstdevwd/tree/umd

[@stdlib/stats/strided/sstdevyc]: https://github.com/stdlib-js/stats-strided-sstdevyc/tree/umd

[@stdlib/stats/strided/stdev]: https://github.com/stdlib-js/stats-strided-stdev/tree/umd

[@stdlib/stats/strided/stdevch]: https://github.com/stdlib-js/stats-strided-stdevch/tree/umd

[@stdlib/stats/strided/stdevpn]: https://github.com/stdlib-js/stats-strided-stdevpn/tree/umd

[@stdlib/stats/strided/stdevtk]: https://github.com/stdlib-js/stats-strided-stdevtk/tree/umd

[@stdlib/stats/strided/stdevwd]: https://github.com/stdlib-js/stats-strided-stdevwd/tree/umd

[@stdlib/stats/strided/stdevyc]: https://github.com/stdlib-js/stats-strided-stdevyc/tree/umd

[@stdlib/stats/strided/svariance]: https://github.com/stdlib-js/stats-strided-svariance/tree/umd

[@stdlib/stats/strided/svariancech]: https://github.com/stdlib-js/stats-strided-svariancech/tree/umd

[@stdlib/stats/strided/svariancepn]: https://github.com/stdlib-js/stats-strided-svariancepn/tree/umd

[@stdlib/stats/strided/svariancetk]: https://github.com/stdlib-js/stats-strided-svariancetk/tree/umd

[@stdlib/stats/strided/svariancewd]: https://github.com/stdlib-js/stats-strided-svariancewd/tree/umd

[@stdlib/stats/strided/svarianceyc]: https://github.com/stdlib-js/stats-strided-svarianceyc/tree/umd

[@stdlib/stats/strided/sztest]: https://github.com/stdlib-js/stats-strided-sztest/tree/umd

[@stdlib/stats/strided/sztest2]: https://github.com/stdlib-js/stats-strided-sztest2/tree/umd

[@stdlib/stats/strided/variance]: https://github.com/stdlib-js/stats-strided-variance/tree/umd

[@stdlib/stats/strided/variancech]: https://github.com/stdlib-js/stats-strided-variancech/tree/umd

[@stdlib/stats/strided/variancepn]: https://github.com/stdlib-js/stats-strided-variancepn/tree/umd

[@stdlib/stats/strided/variancetk]: https://github.com/stdlib-js/stats-strided-variancetk/tree/umd

[@stdlib/stats/strided/variancewd]: https://github.com/stdlib-js/stats-strided-variancewd/tree/umd

[@stdlib/stats/strided/varianceyc]: https://github.com/stdlib-js/stats-strided-varianceyc/tree/umd

[@stdlib/stats/strided/ztest]: https://github.com/stdlib-js/stats-strided-ztest/tree/umd

[@stdlib/stats/strided/ztest2]: https://github.com/stdlib-js/stats-strided-ztest2/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
