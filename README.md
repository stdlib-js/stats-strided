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

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-strided/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@v0.1.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { covarmtk, dcovarmtk, dcovmatmtk, dcumax, dcumaxabs, dcumin, dcuminabs, distances, dmax, dmaxabs, dmaxabssorted, dmaxsorted, dmean, dmeankbn, dmeankbn2, dmeanli, dmeanlipw, dmeanors, dmeanpn, dmeanpw, dmeanstdev, dmeanstdevpn, dmeanvar, dmeanvarpn, dmeanwd, dmediansorted, dmidrange, dmin, dminabs, dminsorted, dmskmax, dmskmaxabs, dmskmidrange, dmskmin, dmskrange, dnanmax, dnanmaxabs, dnanmean, dnanmeanors, dnanmeanpn, dnanmeanpw, dnanmeanwd, dnanmidrange, dnanmin, dnanminabs, dnanmskmax, dnanmskmidrange, dnanmskmin, dnanmskrange, dnanrange, dnanstdev, dnanstdevch, dnanstdevpn, dnanstdevtk, dnanstdevwd, dnanstdevyc, dnanvariance, dnanvariancech, dnanvariancepn, dnanvariancetk, dnanvariancewd, dnanvarianceyc, drange, drangeabs, dsem, dsemch, dsempn, dsemtk, dsemwd, dsemyc, dsmean, dsmeanors, dsmeanpn, dsmeanpw, dsmeanwd, dsnanmean, dsnanmeanors, dsnanmeanpn, dsnanmeanwd, dstdev, dstdevch, dstdevpn, dstdevtk, dstdevwd, dstdevyc, dsvariance, dsvariancepn, dvariance, dvariancech, dvariancepn, dvariancetk, dvariancewd, dvarianceyc, dvarm, dvarmpn, dvarmtk, dztest, dztest2, max, maxBy, maxabs, maxsorted, mean, meankbn, meankbn2, meanors, meanpn, meanpw, meanwd, mediansorted, midrange, midrangeBy, min, minBy, minabs, minsorted, mskmax, mskmaxabs, mskmidrange, mskmin, mskrange, nanmax, nanmaxBy, nanmaxabs, nanmean, nanmeanors, nanmeanpn, nanmeanwd, nanmidrange, nanmidrangeBy, nanmin, nanminBy, nanminabs, nanmskmax, nanmskmidrange, nanmskmin, nanmskrange, nanrange, nanrangeBy, nanstdev, nanstdevch, nanstdevpn, nanstdevtk, nanstdevwd, nanstdevyc, nanvariance, nanvariancech, nanvariancepn, nanvariancetk, nanvariancewd, nanvarianceyc, range, rangeBy, rangeabs, scovarmtk, scumax, scumaxabs, scumin, scuminabs, sdsmean, sdsmeanors, sdsnanmeanors, smax, smaxabs, smaxabssorted, smaxsorted, smean, smeankbn, smeankbn2, smeanli, smeanlipw, smeanors, smeanpn, smeanpw, smeanwd, smediansorted, smidrange, smin, sminabs, sminsorted, smskmax, smskmaxabs, smskmidrange, smskmin, smskrange, snanmax, snanmaxabs, snanmean, snanmeanors, snanmeanpn, snanmeanwd, snanmidrange, snanmin, snanminabs, snanmskmax, snanmskmidrange, snanmskmin, snanmskrange, snanrange, srange, srangeabs, sstdev, sstdevch, sstdevpn, sstdevtk, sstdevwd, sstdevyc, stdev, stdevch, stdevpn, stdevtk, stdevwd, stdevyc, svariance, svariancech, svariancepn, svariancetk, svariancewd, svarianceyc, sztest, sztest2, variance, variancech, variancepn, variancetk, variancewd, varianceyc, ztest, ztest2 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@deno/mod.js';
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

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided@deno/mod.js';

console.log( objectKeys( ns ) );
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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided

[test-image]: https://github.com/stdlib-js/stats-strided/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-strided/actions/workflows/test.yml?query=branch:v0.1.1

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

[@stdlib/stats/strided/covarmtk]: https://github.com/stdlib-js/stats-strided-covarmtk/tree/deno

[@stdlib/stats/strided/dcovarmtk]: https://github.com/stdlib-js/stats-strided-dcovarmtk/tree/deno

[@stdlib/stats/strided/dcovmatmtk]: https://github.com/stdlib-js/stats-strided-dcovmatmtk/tree/deno

[@stdlib/stats/strided/dcumax]: https://github.com/stdlib-js/stats-strided-dcumax/tree/deno

[@stdlib/stats/strided/dcumaxabs]: https://github.com/stdlib-js/stats-strided-dcumaxabs/tree/deno

[@stdlib/stats/strided/dcumin]: https://github.com/stdlib-js/stats-strided-dcumin/tree/deno

[@stdlib/stats/strided/dcuminabs]: https://github.com/stdlib-js/stats-strided-dcuminabs/tree/deno

[@stdlib/stats/strided/distances]: https://github.com/stdlib-js/stats-strided-distances/tree/deno

[@stdlib/stats/strided/dmax]: https://github.com/stdlib-js/stats-strided-dmax/tree/deno

[@stdlib/stats/strided/dmaxabs]: https://github.com/stdlib-js/stats-strided-dmaxabs/tree/deno

[@stdlib/stats/strided/dmaxabssorted]: https://github.com/stdlib-js/stats-strided-dmaxabssorted/tree/deno

[@stdlib/stats/strided/dmaxsorted]: https://github.com/stdlib-js/stats-strided-dmaxsorted/tree/deno

[@stdlib/stats/strided/dmean]: https://github.com/stdlib-js/stats-strided-dmean/tree/deno

[@stdlib/stats/strided/dmeankbn]: https://github.com/stdlib-js/stats-strided-dmeankbn/tree/deno

[@stdlib/stats/strided/dmeankbn2]: https://github.com/stdlib-js/stats-strided-dmeankbn2/tree/deno

[@stdlib/stats/strided/dmeanli]: https://github.com/stdlib-js/stats-strided-dmeanli/tree/deno

[@stdlib/stats/strided/dmeanlipw]: https://github.com/stdlib-js/stats-strided-dmeanlipw/tree/deno

[@stdlib/stats/strided/dmeanors]: https://github.com/stdlib-js/stats-strided-dmeanors/tree/deno

[@stdlib/stats/strided/dmeanpn]: https://github.com/stdlib-js/stats-strided-dmeanpn/tree/deno

[@stdlib/stats/strided/dmeanpw]: https://github.com/stdlib-js/stats-strided-dmeanpw/tree/deno

[@stdlib/stats/strided/dmeanstdev]: https://github.com/stdlib-js/stats-strided-dmeanstdev/tree/deno

[@stdlib/stats/strided/dmeanstdevpn]: https://github.com/stdlib-js/stats-strided-dmeanstdevpn/tree/deno

[@stdlib/stats/strided/dmeanvar]: https://github.com/stdlib-js/stats-strided-dmeanvar/tree/deno

[@stdlib/stats/strided/dmeanvarpn]: https://github.com/stdlib-js/stats-strided-dmeanvarpn/tree/deno

[@stdlib/stats/strided/dmeanwd]: https://github.com/stdlib-js/stats-strided-dmeanwd/tree/deno

[@stdlib/stats/strided/dmediansorted]: https://github.com/stdlib-js/stats-strided-dmediansorted/tree/deno

[@stdlib/stats/strided/dmidrange]: https://github.com/stdlib-js/stats-strided-dmidrange/tree/deno

[@stdlib/stats/strided/dmin]: https://github.com/stdlib-js/stats-strided-dmin/tree/deno

[@stdlib/stats/strided/dminabs]: https://github.com/stdlib-js/stats-strided-dminabs/tree/deno

[@stdlib/stats/strided/dminsorted]: https://github.com/stdlib-js/stats-strided-dminsorted/tree/deno

[@stdlib/stats/strided/dmskmax]: https://github.com/stdlib-js/stats-strided-dmskmax/tree/deno

[@stdlib/stats/strided/dmskmaxabs]: https://github.com/stdlib-js/stats-strided-dmskmaxabs/tree/deno

[@stdlib/stats/strided/dmskmidrange]: https://github.com/stdlib-js/stats-strided-dmskmidrange/tree/deno

[@stdlib/stats/strided/dmskmin]: https://github.com/stdlib-js/stats-strided-dmskmin/tree/deno

[@stdlib/stats/strided/dmskrange]: https://github.com/stdlib-js/stats-strided-dmskrange/tree/deno

[@stdlib/stats/strided/dnanmax]: https://github.com/stdlib-js/stats-strided-dnanmax/tree/deno

[@stdlib/stats/strided/dnanmaxabs]: https://github.com/stdlib-js/stats-strided-dnanmaxabs/tree/deno

[@stdlib/stats/strided/dnanmean]: https://github.com/stdlib-js/stats-strided-dnanmean/tree/deno

[@stdlib/stats/strided/dnanmeanors]: https://github.com/stdlib-js/stats-strided-dnanmeanors/tree/deno

[@stdlib/stats/strided/dnanmeanpn]: https://github.com/stdlib-js/stats-strided-dnanmeanpn/tree/deno

[@stdlib/stats/strided/dnanmeanpw]: https://github.com/stdlib-js/stats-strided-dnanmeanpw/tree/deno

[@stdlib/stats/strided/dnanmeanwd]: https://github.com/stdlib-js/stats-strided-dnanmeanwd/tree/deno

[@stdlib/stats/strided/dnanmidrange]: https://github.com/stdlib-js/stats-strided-dnanmidrange/tree/deno

[@stdlib/stats/strided/dnanmin]: https://github.com/stdlib-js/stats-strided-dnanmin/tree/deno

[@stdlib/stats/strided/dnanminabs]: https://github.com/stdlib-js/stats-strided-dnanminabs/tree/deno

[@stdlib/stats/strided/dnanmskmax]: https://github.com/stdlib-js/stats-strided-dnanmskmax/tree/deno

[@stdlib/stats/strided/dnanmskmidrange]: https://github.com/stdlib-js/stats-strided-dnanmskmidrange/tree/deno

[@stdlib/stats/strided/dnanmskmin]: https://github.com/stdlib-js/stats-strided-dnanmskmin/tree/deno

[@stdlib/stats/strided/dnanmskrange]: https://github.com/stdlib-js/stats-strided-dnanmskrange/tree/deno

[@stdlib/stats/strided/dnanrange]: https://github.com/stdlib-js/stats-strided-dnanrange/tree/deno

[@stdlib/stats/strided/dnanstdev]: https://github.com/stdlib-js/stats-strided-dnanstdev/tree/deno

[@stdlib/stats/strided/dnanstdevch]: https://github.com/stdlib-js/stats-strided-dnanstdevch/tree/deno

[@stdlib/stats/strided/dnanstdevpn]: https://github.com/stdlib-js/stats-strided-dnanstdevpn/tree/deno

[@stdlib/stats/strided/dnanstdevtk]: https://github.com/stdlib-js/stats-strided-dnanstdevtk/tree/deno

[@stdlib/stats/strided/dnanstdevwd]: https://github.com/stdlib-js/stats-strided-dnanstdevwd/tree/deno

[@stdlib/stats/strided/dnanstdevyc]: https://github.com/stdlib-js/stats-strided-dnanstdevyc/tree/deno

[@stdlib/stats/strided/dnanvariance]: https://github.com/stdlib-js/stats-strided-dnanvariance/tree/deno

[@stdlib/stats/strided/dnanvariancech]: https://github.com/stdlib-js/stats-strided-dnanvariancech/tree/deno

[@stdlib/stats/strided/dnanvariancepn]: https://github.com/stdlib-js/stats-strided-dnanvariancepn/tree/deno

[@stdlib/stats/strided/dnanvariancetk]: https://github.com/stdlib-js/stats-strided-dnanvariancetk/tree/deno

[@stdlib/stats/strided/dnanvariancewd]: https://github.com/stdlib-js/stats-strided-dnanvariancewd/tree/deno

[@stdlib/stats/strided/dnanvarianceyc]: https://github.com/stdlib-js/stats-strided-dnanvarianceyc/tree/deno

[@stdlib/stats/strided/drange]: https://github.com/stdlib-js/stats-strided-drange/tree/deno

[@stdlib/stats/strided/drangeabs]: https://github.com/stdlib-js/stats-strided-drangeabs/tree/deno

[@stdlib/stats/strided/dsem]: https://github.com/stdlib-js/stats-strided-dsem/tree/deno

[@stdlib/stats/strided/dsemch]: https://github.com/stdlib-js/stats-strided-dsemch/tree/deno

[@stdlib/stats/strided/dsempn]: https://github.com/stdlib-js/stats-strided-dsempn/tree/deno

[@stdlib/stats/strided/dsemtk]: https://github.com/stdlib-js/stats-strided-dsemtk/tree/deno

[@stdlib/stats/strided/dsemwd]: https://github.com/stdlib-js/stats-strided-dsemwd/tree/deno

[@stdlib/stats/strided/dsemyc]: https://github.com/stdlib-js/stats-strided-dsemyc/tree/deno

[@stdlib/stats/strided/dsmean]: https://github.com/stdlib-js/stats-strided-dsmean/tree/deno

[@stdlib/stats/strided/dsmeanors]: https://github.com/stdlib-js/stats-strided-dsmeanors/tree/deno

[@stdlib/stats/strided/dsmeanpn]: https://github.com/stdlib-js/stats-strided-dsmeanpn/tree/deno

[@stdlib/stats/strided/dsmeanpw]: https://github.com/stdlib-js/stats-strided-dsmeanpw/tree/deno

[@stdlib/stats/strided/dsmeanwd]: https://github.com/stdlib-js/stats-strided-dsmeanwd/tree/deno

[@stdlib/stats/strided/dsnanmean]: https://github.com/stdlib-js/stats-strided-dsnanmean/tree/deno

[@stdlib/stats/strided/dsnanmeanors]: https://github.com/stdlib-js/stats-strided-dsnanmeanors/tree/deno

[@stdlib/stats/strided/dsnanmeanpn]: https://github.com/stdlib-js/stats-strided-dsnanmeanpn/tree/deno

[@stdlib/stats/strided/dsnanmeanwd]: https://github.com/stdlib-js/stats-strided-dsnanmeanwd/tree/deno

[@stdlib/stats/strided/dstdev]: https://github.com/stdlib-js/stats-strided-dstdev/tree/deno

[@stdlib/stats/strided/dstdevch]: https://github.com/stdlib-js/stats-strided-dstdevch/tree/deno

[@stdlib/stats/strided/dstdevpn]: https://github.com/stdlib-js/stats-strided-dstdevpn/tree/deno

[@stdlib/stats/strided/dstdevtk]: https://github.com/stdlib-js/stats-strided-dstdevtk/tree/deno

[@stdlib/stats/strided/dstdevwd]: https://github.com/stdlib-js/stats-strided-dstdevwd/tree/deno

[@stdlib/stats/strided/dstdevyc]: https://github.com/stdlib-js/stats-strided-dstdevyc/tree/deno

[@stdlib/stats/strided/dsvariance]: https://github.com/stdlib-js/stats-strided-dsvariance/tree/deno

[@stdlib/stats/strided/dsvariancepn]: https://github.com/stdlib-js/stats-strided-dsvariancepn/tree/deno

[@stdlib/stats/strided/dvariance]: https://github.com/stdlib-js/stats-strided-dvariance/tree/deno

[@stdlib/stats/strided/dvariancech]: https://github.com/stdlib-js/stats-strided-dvariancech/tree/deno

[@stdlib/stats/strided/dvariancepn]: https://github.com/stdlib-js/stats-strided-dvariancepn/tree/deno

[@stdlib/stats/strided/dvariancetk]: https://github.com/stdlib-js/stats-strided-dvariancetk/tree/deno

[@stdlib/stats/strided/dvariancewd]: https://github.com/stdlib-js/stats-strided-dvariancewd/tree/deno

[@stdlib/stats/strided/dvarianceyc]: https://github.com/stdlib-js/stats-strided-dvarianceyc/tree/deno

[@stdlib/stats/strided/dvarm]: https://github.com/stdlib-js/stats-strided-dvarm/tree/deno

[@stdlib/stats/strided/dvarmpn]: https://github.com/stdlib-js/stats-strided-dvarmpn/tree/deno

[@stdlib/stats/strided/dvarmtk]: https://github.com/stdlib-js/stats-strided-dvarmtk/tree/deno

[@stdlib/stats/strided/dztest]: https://github.com/stdlib-js/stats-strided-dztest/tree/deno

[@stdlib/stats/strided/dztest2]: https://github.com/stdlib-js/stats-strided-dztest2/tree/deno

[@stdlib/stats/strided/max-by]: https://github.com/stdlib-js/stats-strided-max-by/tree/deno

[@stdlib/stats/strided/max]: https://github.com/stdlib-js/stats-strided-max/tree/deno

[@stdlib/stats/strided/maxabs]: https://github.com/stdlib-js/stats-strided-maxabs/tree/deno

[@stdlib/stats/strided/maxsorted]: https://github.com/stdlib-js/stats-strided-maxsorted/tree/deno

[@stdlib/stats/strided/mean]: https://github.com/stdlib-js/stats-strided-mean/tree/deno

[@stdlib/stats/strided/meankbn]: https://github.com/stdlib-js/stats-strided-meankbn/tree/deno

[@stdlib/stats/strided/meankbn2]: https://github.com/stdlib-js/stats-strided-meankbn2/tree/deno

[@stdlib/stats/strided/meanors]: https://github.com/stdlib-js/stats-strided-meanors/tree/deno

[@stdlib/stats/strided/meanpn]: https://github.com/stdlib-js/stats-strided-meanpn/tree/deno

[@stdlib/stats/strided/meanpw]: https://github.com/stdlib-js/stats-strided-meanpw/tree/deno

[@stdlib/stats/strided/meanwd]: https://github.com/stdlib-js/stats-strided-meanwd/tree/deno

[@stdlib/stats/strided/mediansorted]: https://github.com/stdlib-js/stats-strided-mediansorted/tree/deno

[@stdlib/stats/strided/midrange-by]: https://github.com/stdlib-js/stats-strided-midrange-by/tree/deno

[@stdlib/stats/strided/midrange]: https://github.com/stdlib-js/stats-strided-midrange/tree/deno

[@stdlib/stats/strided/min-by]: https://github.com/stdlib-js/stats-strided-min-by/tree/deno

[@stdlib/stats/strided/min]: https://github.com/stdlib-js/stats-strided-min/tree/deno

[@stdlib/stats/strided/minabs]: https://github.com/stdlib-js/stats-strided-minabs/tree/deno

[@stdlib/stats/strided/minsorted]: https://github.com/stdlib-js/stats-strided-minsorted/tree/deno

[@stdlib/stats/strided/mskmax]: https://github.com/stdlib-js/stats-strided-mskmax/tree/deno

[@stdlib/stats/strided/mskmaxabs]: https://github.com/stdlib-js/stats-strided-mskmaxabs/tree/deno

[@stdlib/stats/strided/mskmidrange]: https://github.com/stdlib-js/stats-strided-mskmidrange/tree/deno

[@stdlib/stats/strided/mskmin]: https://github.com/stdlib-js/stats-strided-mskmin/tree/deno

[@stdlib/stats/strided/mskrange]: https://github.com/stdlib-js/stats-strided-mskrange/tree/deno

[@stdlib/stats/strided/nanmax-by]: https://github.com/stdlib-js/stats-strided-nanmax-by/tree/deno

[@stdlib/stats/strided/nanmax]: https://github.com/stdlib-js/stats-strided-nanmax/tree/deno

[@stdlib/stats/strided/nanmaxabs]: https://github.com/stdlib-js/stats-strided-nanmaxabs/tree/deno

[@stdlib/stats/strided/nanmean]: https://github.com/stdlib-js/stats-strided-nanmean/tree/deno

[@stdlib/stats/strided/nanmeanors]: https://github.com/stdlib-js/stats-strided-nanmeanors/tree/deno

[@stdlib/stats/strided/nanmeanpn]: https://github.com/stdlib-js/stats-strided-nanmeanpn/tree/deno

[@stdlib/stats/strided/nanmeanwd]: https://github.com/stdlib-js/stats-strided-nanmeanwd/tree/deno

[@stdlib/stats/strided/nanmidrange-by]: https://github.com/stdlib-js/stats-strided-nanmidrange-by/tree/deno

[@stdlib/stats/strided/nanmidrange]: https://github.com/stdlib-js/stats-strided-nanmidrange/tree/deno

[@stdlib/stats/strided/nanmin-by]: https://github.com/stdlib-js/stats-strided-nanmin-by/tree/deno

[@stdlib/stats/strided/nanmin]: https://github.com/stdlib-js/stats-strided-nanmin/tree/deno

[@stdlib/stats/strided/nanminabs]: https://github.com/stdlib-js/stats-strided-nanminabs/tree/deno

[@stdlib/stats/strided/nanmskmax]: https://github.com/stdlib-js/stats-strided-nanmskmax/tree/deno

[@stdlib/stats/strided/nanmskmidrange]: https://github.com/stdlib-js/stats-strided-nanmskmidrange/tree/deno

[@stdlib/stats/strided/nanmskmin]: https://github.com/stdlib-js/stats-strided-nanmskmin/tree/deno

[@stdlib/stats/strided/nanmskrange]: https://github.com/stdlib-js/stats-strided-nanmskrange/tree/deno

[@stdlib/stats/strided/nanrange-by]: https://github.com/stdlib-js/stats-strided-nanrange-by/tree/deno

[@stdlib/stats/strided/nanrange]: https://github.com/stdlib-js/stats-strided-nanrange/tree/deno

[@stdlib/stats/strided/nanstdev]: https://github.com/stdlib-js/stats-strided-nanstdev/tree/deno

[@stdlib/stats/strided/nanstdevch]: https://github.com/stdlib-js/stats-strided-nanstdevch/tree/deno

[@stdlib/stats/strided/nanstdevpn]: https://github.com/stdlib-js/stats-strided-nanstdevpn/tree/deno

[@stdlib/stats/strided/nanstdevtk]: https://github.com/stdlib-js/stats-strided-nanstdevtk/tree/deno

[@stdlib/stats/strided/nanstdevwd]: https://github.com/stdlib-js/stats-strided-nanstdevwd/tree/deno

[@stdlib/stats/strided/nanstdevyc]: https://github.com/stdlib-js/stats-strided-nanstdevyc/tree/deno

[@stdlib/stats/strided/nanvariance]: https://github.com/stdlib-js/stats-strided-nanvariance/tree/deno

[@stdlib/stats/strided/nanvariancech]: https://github.com/stdlib-js/stats-strided-nanvariancech/tree/deno

[@stdlib/stats/strided/nanvariancepn]: https://github.com/stdlib-js/stats-strided-nanvariancepn/tree/deno

[@stdlib/stats/strided/nanvariancetk]: https://github.com/stdlib-js/stats-strided-nanvariancetk/tree/deno

[@stdlib/stats/strided/nanvariancewd]: https://github.com/stdlib-js/stats-strided-nanvariancewd/tree/deno

[@stdlib/stats/strided/nanvarianceyc]: https://github.com/stdlib-js/stats-strided-nanvarianceyc/tree/deno

[@stdlib/stats/strided/range-by]: https://github.com/stdlib-js/stats-strided-range-by/tree/deno

[@stdlib/stats/strided/range]: https://github.com/stdlib-js/stats-strided-range/tree/deno

[@stdlib/stats/strided/rangeabs]: https://github.com/stdlib-js/stats-strided-rangeabs/tree/deno

[@stdlib/stats/strided/scovarmtk]: https://github.com/stdlib-js/stats-strided-scovarmtk/tree/deno

[@stdlib/stats/strided/scumax]: https://github.com/stdlib-js/stats-strided-scumax/tree/deno

[@stdlib/stats/strided/scumaxabs]: https://github.com/stdlib-js/stats-strided-scumaxabs/tree/deno

[@stdlib/stats/strided/scumin]: https://github.com/stdlib-js/stats-strided-scumin/tree/deno

[@stdlib/stats/strided/scuminabs]: https://github.com/stdlib-js/stats-strided-scuminabs/tree/deno

[@stdlib/stats/strided/sdsmean]: https://github.com/stdlib-js/stats-strided-sdsmean/tree/deno

[@stdlib/stats/strided/sdsmeanors]: https://github.com/stdlib-js/stats-strided-sdsmeanors/tree/deno

[@stdlib/stats/strided/sdsnanmeanors]: https://github.com/stdlib-js/stats-strided-sdsnanmeanors/tree/deno

[@stdlib/stats/strided/smax]: https://github.com/stdlib-js/stats-strided-smax/tree/deno

[@stdlib/stats/strided/smaxabs]: https://github.com/stdlib-js/stats-strided-smaxabs/tree/deno

[@stdlib/stats/strided/smaxabssorted]: https://github.com/stdlib-js/stats-strided-smaxabssorted/tree/deno

[@stdlib/stats/strided/smaxsorted]: https://github.com/stdlib-js/stats-strided-smaxsorted/tree/deno

[@stdlib/stats/strided/smean]: https://github.com/stdlib-js/stats-strided-smean/tree/deno

[@stdlib/stats/strided/smeankbn]: https://github.com/stdlib-js/stats-strided-smeankbn/tree/deno

[@stdlib/stats/strided/smeankbn2]: https://github.com/stdlib-js/stats-strided-smeankbn2/tree/deno

[@stdlib/stats/strided/smeanli]: https://github.com/stdlib-js/stats-strided-smeanli/tree/deno

[@stdlib/stats/strided/smeanlipw]: https://github.com/stdlib-js/stats-strided-smeanlipw/tree/deno

[@stdlib/stats/strided/smeanors]: https://github.com/stdlib-js/stats-strided-smeanors/tree/deno

[@stdlib/stats/strided/smeanpn]: https://github.com/stdlib-js/stats-strided-smeanpn/tree/deno

[@stdlib/stats/strided/smeanpw]: https://github.com/stdlib-js/stats-strided-smeanpw/tree/deno

[@stdlib/stats/strided/smeanwd]: https://github.com/stdlib-js/stats-strided-smeanwd/tree/deno

[@stdlib/stats/strided/smediansorted]: https://github.com/stdlib-js/stats-strided-smediansorted/tree/deno

[@stdlib/stats/strided/smidrange]: https://github.com/stdlib-js/stats-strided-smidrange/tree/deno

[@stdlib/stats/strided/smin]: https://github.com/stdlib-js/stats-strided-smin/tree/deno

[@stdlib/stats/strided/sminabs]: https://github.com/stdlib-js/stats-strided-sminabs/tree/deno

[@stdlib/stats/strided/sminsorted]: https://github.com/stdlib-js/stats-strided-sminsorted/tree/deno

[@stdlib/stats/strided/smskmax]: https://github.com/stdlib-js/stats-strided-smskmax/tree/deno

[@stdlib/stats/strided/smskmaxabs]: https://github.com/stdlib-js/stats-strided-smskmaxabs/tree/deno

[@stdlib/stats/strided/smskmidrange]: https://github.com/stdlib-js/stats-strided-smskmidrange/tree/deno

[@stdlib/stats/strided/smskmin]: https://github.com/stdlib-js/stats-strided-smskmin/tree/deno

[@stdlib/stats/strided/smskrange]: https://github.com/stdlib-js/stats-strided-smskrange/tree/deno

[@stdlib/stats/strided/snanmax]: https://github.com/stdlib-js/stats-strided-snanmax/tree/deno

[@stdlib/stats/strided/snanmaxabs]: https://github.com/stdlib-js/stats-strided-snanmaxabs/tree/deno

[@stdlib/stats/strided/snanmean]: https://github.com/stdlib-js/stats-strided-snanmean/tree/deno

[@stdlib/stats/strided/snanmeanors]: https://github.com/stdlib-js/stats-strided-snanmeanors/tree/deno

[@stdlib/stats/strided/snanmeanpn]: https://github.com/stdlib-js/stats-strided-snanmeanpn/tree/deno

[@stdlib/stats/strided/snanmeanwd]: https://github.com/stdlib-js/stats-strided-snanmeanwd/tree/deno

[@stdlib/stats/strided/snanmidrange]: https://github.com/stdlib-js/stats-strided-snanmidrange/tree/deno

[@stdlib/stats/strided/snanmin]: https://github.com/stdlib-js/stats-strided-snanmin/tree/deno

[@stdlib/stats/strided/snanminabs]: https://github.com/stdlib-js/stats-strided-snanminabs/tree/deno

[@stdlib/stats/strided/snanmskmax]: https://github.com/stdlib-js/stats-strided-snanmskmax/tree/deno

[@stdlib/stats/strided/snanmskmidrange]: https://github.com/stdlib-js/stats-strided-snanmskmidrange/tree/deno

[@stdlib/stats/strided/snanmskmin]: https://github.com/stdlib-js/stats-strided-snanmskmin/tree/deno

[@stdlib/stats/strided/snanmskrange]: https://github.com/stdlib-js/stats-strided-snanmskrange/tree/deno

[@stdlib/stats/strided/snanrange]: https://github.com/stdlib-js/stats-strided-snanrange/tree/deno

[@stdlib/stats/strided/srange]: https://github.com/stdlib-js/stats-strided-srange/tree/deno

[@stdlib/stats/strided/srangeabs]: https://github.com/stdlib-js/stats-strided-srangeabs/tree/deno

[@stdlib/stats/strided/sstdev]: https://github.com/stdlib-js/stats-strided-sstdev/tree/deno

[@stdlib/stats/strided/sstdevch]: https://github.com/stdlib-js/stats-strided-sstdevch/tree/deno

[@stdlib/stats/strided/sstdevpn]: https://github.com/stdlib-js/stats-strided-sstdevpn/tree/deno

[@stdlib/stats/strided/sstdevtk]: https://github.com/stdlib-js/stats-strided-sstdevtk/tree/deno

[@stdlib/stats/strided/sstdevwd]: https://github.com/stdlib-js/stats-strided-sstdevwd/tree/deno

[@stdlib/stats/strided/sstdevyc]: https://github.com/stdlib-js/stats-strided-sstdevyc/tree/deno

[@stdlib/stats/strided/stdev]: https://github.com/stdlib-js/stats-strided-stdev/tree/deno

[@stdlib/stats/strided/stdevch]: https://github.com/stdlib-js/stats-strided-stdevch/tree/deno

[@stdlib/stats/strided/stdevpn]: https://github.com/stdlib-js/stats-strided-stdevpn/tree/deno

[@stdlib/stats/strided/stdevtk]: https://github.com/stdlib-js/stats-strided-stdevtk/tree/deno

[@stdlib/stats/strided/stdevwd]: https://github.com/stdlib-js/stats-strided-stdevwd/tree/deno

[@stdlib/stats/strided/stdevyc]: https://github.com/stdlib-js/stats-strided-stdevyc/tree/deno

[@stdlib/stats/strided/svariance]: https://github.com/stdlib-js/stats-strided-svariance/tree/deno

[@stdlib/stats/strided/svariancech]: https://github.com/stdlib-js/stats-strided-svariancech/tree/deno

[@stdlib/stats/strided/svariancepn]: https://github.com/stdlib-js/stats-strided-svariancepn/tree/deno

[@stdlib/stats/strided/svariancetk]: https://github.com/stdlib-js/stats-strided-svariancetk/tree/deno

[@stdlib/stats/strided/svariancewd]: https://github.com/stdlib-js/stats-strided-svariancewd/tree/deno

[@stdlib/stats/strided/svarianceyc]: https://github.com/stdlib-js/stats-strided-svarianceyc/tree/deno

[@stdlib/stats/strided/sztest]: https://github.com/stdlib-js/stats-strided-sztest/tree/deno

[@stdlib/stats/strided/sztest2]: https://github.com/stdlib-js/stats-strided-sztest2/tree/deno

[@stdlib/stats/strided/variance]: https://github.com/stdlib-js/stats-strided-variance/tree/deno

[@stdlib/stats/strided/variancech]: https://github.com/stdlib-js/stats-strided-variancech/tree/deno

[@stdlib/stats/strided/variancepn]: https://github.com/stdlib-js/stats-strided-variancepn/tree/deno

[@stdlib/stats/strided/variancetk]: https://github.com/stdlib-js/stats-strided-variancetk/tree/deno

[@stdlib/stats/strided/variancewd]: https://github.com/stdlib-js/stats-strided-variancewd/tree/deno

[@stdlib/stats/strided/varianceyc]: https://github.com/stdlib-js/stats-strided-varianceyc/tree/deno

[@stdlib/stats/strided/ztest]: https://github.com/stdlib-js/stats-strided-ztest/tree/deno

[@stdlib/stats/strided/ztest2]: https://github.com/stdlib-js/stats-strided-ztest2/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
