/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name dcumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcumax}
*/
setReadOnly( ns, 'dcumax', require( '@stdlib/stats-strided-dcumax' ) );

/**
* @name dcumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcumaxabs}
*/
setReadOnly( ns, 'dcumaxabs', require( '@stdlib/stats-strided-dcumaxabs' ) );

/**
* @name dcumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcumin}
*/
setReadOnly( ns, 'dcumin', require( '@stdlib/stats-strided-dcumin' ) );

/**
* @name dcuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcuminabs}
*/
setReadOnly( ns, 'dcuminabs', require( '@stdlib/stats-strided-dcuminabs' ) );

/**
* @name dmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmax}
*/
setReadOnly( ns, 'dmax', require( '@stdlib/stats-strided-dmax' ) );

/**
* @name dmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmaxabs}
*/
setReadOnly( ns, 'dmaxabs', require( '@stdlib/stats-strided-dmaxabs' ) );

/**
* @name dmaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmaxabssorted}
*/
setReadOnly( ns, 'dmaxabssorted', require( '@stdlib/stats-strided-dmaxabssorted' ) );

/**
* @name dmaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmaxsorted}
*/
setReadOnly( ns, 'dmaxsorted', require( '@stdlib/stats-strided-dmaxsorted' ) );

/**
* @name dmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmean}
*/
setReadOnly( ns, 'dmean', require( '@stdlib/stats-strided-dmean' ) );

/**
* @name dmeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeankbn}
*/
setReadOnly( ns, 'dmeankbn', require( '@stdlib/stats-strided-dmeankbn' ) );

/**
* @name dmeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeankbn2}
*/
setReadOnly( ns, 'dmeankbn2', require( '@stdlib/stats-strided-dmeankbn2' ) );

/**
* @name dmeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanli}
*/
setReadOnly( ns, 'dmeanli', require( '@stdlib/stats-strided-dmeanli' ) );

/**
* @name dmeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanlipw}
*/
setReadOnly( ns, 'dmeanlipw', require( '@stdlib/stats-strided-dmeanlipw' ) );

/**
* @name dmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanors}
*/
setReadOnly( ns, 'dmeanors', require( '@stdlib/stats-strided-dmeanors' ) );

/**
* @name dmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanpn}
*/
setReadOnly( ns, 'dmeanpn', require( '@stdlib/stats-strided-dmeanpn' ) );

/**
* @name dmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanpw}
*/
setReadOnly( ns, 'dmeanpw', require( '@stdlib/stats-strided-dmeanpw' ) );

/**
* @name dmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanstdev}
*/
setReadOnly( ns, 'dmeanstdev', require( '@stdlib/stats-strided-dmeanstdev' ) );

/**
* @name dmeanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanstdevpn}
*/
setReadOnly( ns, 'dmeanstdevpn', require( '@stdlib/stats-strided-dmeanstdevpn' ) );

/**
* @name dmeanvar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanvar}
*/
setReadOnly( ns, 'dmeanvar', require( '@stdlib/stats-strided-dmeanvar' ) );

/**
* @name dmeanvarpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanvarpn}
*/
setReadOnly( ns, 'dmeanvarpn', require( '@stdlib/stats-strided-dmeanvarpn' ) );

/**
* @name dmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanwd}
*/
setReadOnly( ns, 'dmeanwd', require( '@stdlib/stats-strided-dmeanwd' ) );

/**
* @name dmediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmediansorted}
*/
setReadOnly( ns, 'dmediansorted', require( '@stdlib/stats-strided-dmediansorted' ) );

/**
* @name dmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmidrange}
*/
setReadOnly( ns, 'dmidrange', require( '@stdlib/stats-strided-dmidrange' ) );

/**
* @name dmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmin}
*/
setReadOnly( ns, 'dmin', require( '@stdlib/stats-strided-dmin' ) );

/**
* @name dminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dminabs}
*/
setReadOnly( ns, 'dminabs', require( '@stdlib/stats-strided-dminabs' ) );

/**
* @name dminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dminsorted}
*/
setReadOnly( ns, 'dminsorted', require( '@stdlib/stats-strided-dminsorted' ) );

/**
* @name dmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmskmax}
*/
setReadOnly( ns, 'dmskmax', require( '@stdlib/stats-strided-dmskmax' ) );

/**
* @name dmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmskmin}
*/
setReadOnly( ns, 'dmskmin', require( '@stdlib/stats-strided-dmskmin' ) );

/**
* @name dmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmskrange}
*/
setReadOnly( ns, 'dmskrange', require( '@stdlib/stats-strided-dmskrange' ) );

/**
* @name dnanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmax}
*/
setReadOnly( ns, 'dnanmax', require( '@stdlib/stats-strided-dnanmax' ) );

/**
* @name dnanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmaxabs}
*/
setReadOnly( ns, 'dnanmaxabs', require( '@stdlib/stats-strided-dnanmaxabs' ) );

/**
* @name dnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmean}
*/
setReadOnly( ns, 'dnanmean', require( '@stdlib/stats-strided-dnanmean' ) );

/**
* @name dnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanors}
*/
setReadOnly( ns, 'dnanmeanors', require( '@stdlib/stats-strided-dnanmeanors' ) );

/**
* @name dnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanpn}
*/
setReadOnly( ns, 'dnanmeanpn', require( '@stdlib/stats-strided-dnanmeanpn' ) );

/**
* @name dnanmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanpw}
*/
setReadOnly( ns, 'dnanmeanpw', require( '@stdlib/stats-strided-dnanmeanpw' ) );

/**
* @name dnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanwd}
*/
setReadOnly( ns, 'dnanmeanwd', require( '@stdlib/stats-strided-dnanmeanwd' ) );

/**
* @name dnanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmin}
*/
setReadOnly( ns, 'dnanmin', require( '@stdlib/stats-strided-dnanmin' ) );

/**
* @name dnanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanminabs}
*/
setReadOnly( ns, 'dnanminabs', require( '@stdlib/stats-strided-dnanminabs' ) );

/**
* @name dnanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmskmax}
*/
setReadOnly( ns, 'dnanmskmax', require( '@stdlib/stats-strided-dnanmskmax' ) );

/**
* @name dnanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmskmin}
*/
setReadOnly( ns, 'dnanmskmin', require( '@stdlib/stats-strided-dnanmskmin' ) );

/**
* @name dnanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmskrange}
*/
setReadOnly( ns, 'dnanmskrange', require( '@stdlib/stats-strided-dnanmskrange' ) );

/**
* @name dnanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanrange}
*/
setReadOnly( ns, 'dnanrange', require( '@stdlib/stats-strided-dnanrange' ) );

/**
* @name dnanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdev}
*/
setReadOnly( ns, 'dnanstdev', require( '@stdlib/stats-strided-dnanstdev' ) );

/**
* @name dnanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevch}
*/
setReadOnly( ns, 'dnanstdevch', require( '@stdlib/stats-strided-dnanstdevch' ) );

/**
* @name dnanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevpn}
*/
setReadOnly( ns, 'dnanstdevpn', require( '@stdlib/stats-strided-dnanstdevpn' ) );

/**
* @name dnanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevtk}
*/
setReadOnly( ns, 'dnanstdevtk', require( '@stdlib/stats-strided-dnanstdevtk' ) );

/**
* @name dnanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevwd}
*/
setReadOnly( ns, 'dnanstdevwd', require( '@stdlib/stats-strided-dnanstdevwd' ) );

/**
* @name dnanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevyc}
*/
setReadOnly( ns, 'dnanstdevyc', require( '@stdlib/stats-strided-dnanstdevyc' ) );

/**
* @name dnanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariance}
*/
setReadOnly( ns, 'dnanvariance', require( '@stdlib/stats-strided-dnanvariance' ) );

/**
* @name dnanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancech}
*/
setReadOnly( ns, 'dnanvariancech', require( '@stdlib/stats-strided-dnanvariancech' ) );

/**
* @name dnanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancepn}
*/
setReadOnly( ns, 'dnanvariancepn', require( '@stdlib/stats-strided-dnanvariancepn' ) );

/**
* @name dnanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancetk}
*/
setReadOnly( ns, 'dnanvariancetk', require( '@stdlib/stats-strided-dnanvariancetk' ) );

/**
* @name dnanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancewd}
*/
setReadOnly( ns, 'dnanvariancewd', require( '@stdlib/stats-strided-dnanvariancewd' ) );

/**
* @name dnanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvarianceyc}
*/
setReadOnly( ns, 'dnanvarianceyc', require( '@stdlib/stats-strided-dnanvarianceyc' ) );

/**
* @name drange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/drange}
*/
setReadOnly( ns, 'drange', require( '@stdlib/stats-strided-drange' ) );

/**
* @name dsem
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsem}
*/
setReadOnly( ns, 'dsem', require( '@stdlib/stats-strided-dsem' ) );

/**
* @name dsemch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemch}
*/
setReadOnly( ns, 'dsemch', require( '@stdlib/stats-strided-dsemch' ) );

/**
* @name dsempn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsempn}
*/
setReadOnly( ns, 'dsempn', require( '@stdlib/stats-strided-dsempn' ) );

/**
* @name dsemtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemtk}
*/
setReadOnly( ns, 'dsemtk', require( '@stdlib/stats-strided-dsemtk' ) );

/**
* @name dsemwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemwd}
*/
setReadOnly( ns, 'dsemwd', require( '@stdlib/stats-strided-dsemwd' ) );

/**
* @name dsemyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemyc}
*/
setReadOnly( ns, 'dsemyc', require( '@stdlib/stats-strided-dsemyc' ) );

/**
* @name dsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmean}
*/
setReadOnly( ns, 'dsmean', require( '@stdlib/stats-strided-dsmean' ) );

/**
* @name dsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanors}
*/
setReadOnly( ns, 'dsmeanors', require( '@stdlib/stats-strided-dsmeanors' ) );

/**
* @name dsmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanpn}
*/
setReadOnly( ns, 'dsmeanpn', require( '@stdlib/stats-strided-dsmeanpn' ) );

/**
* @name dsmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanpw}
*/
setReadOnly( ns, 'dsmeanpw', require( '@stdlib/stats-strided-dsmeanpw' ) );

/**
* @name dsmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanwd}
*/
setReadOnly( ns, 'dsmeanwd', require( '@stdlib/stats-strided-dsmeanwd' ) );

/**
* @name dsnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmean}
*/
setReadOnly( ns, 'dsnanmean', require( '@stdlib/stats-strided-dsnanmean' ) );

/**
* @name dsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmeanors}
*/
setReadOnly( ns, 'dsnanmeanors', require( '@stdlib/stats-strided-dsnanmeanors' ) );

/**
* @name dsnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmeanpn}
*/
setReadOnly( ns, 'dsnanmeanpn', require( '@stdlib/stats-strided-dsnanmeanpn' ) );

/**
* @name dsnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmeanwd}
*/
setReadOnly( ns, 'dsnanmeanwd', require( '@stdlib/stats-strided-dsnanmeanwd' ) );

/**
* @name dstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdev}
*/
setReadOnly( ns, 'dstdev', require( '@stdlib/stats-strided-dstdev' ) );

/**
* @name dstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevch}
*/
setReadOnly( ns, 'dstdevch', require( '@stdlib/stats-strided-dstdevch' ) );

/**
* @name dstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevpn}
*/
setReadOnly( ns, 'dstdevpn', require( '@stdlib/stats-strided-dstdevpn' ) );

/**
* @name dstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevtk}
*/
setReadOnly( ns, 'dstdevtk', require( '@stdlib/stats-strided-dstdevtk' ) );

/**
* @name dstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevwd}
*/
setReadOnly( ns, 'dstdevwd', require( '@stdlib/stats-strided-dstdevwd' ) );

/**
* @name dstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevyc}
*/
setReadOnly( ns, 'dstdevyc', require( '@stdlib/stats-strided-dstdevyc' ) );

/**
* @name dsvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsvariance}
*/
setReadOnly( ns, 'dsvariance', require( '@stdlib/stats-strided-dsvariance' ) );

/**
* @name dsvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsvariancepn}
*/
setReadOnly( ns, 'dsvariancepn', require( '@stdlib/stats-strided-dsvariancepn' ) );

/**
* @name dvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariance}
*/
setReadOnly( ns, 'dvariance', require( '@stdlib/stats-strided-dvariance' ) );

/**
* @name dvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancech}
*/
setReadOnly( ns, 'dvariancech', require( '@stdlib/stats-strided-dvariancech' ) );

/**
* @name dvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancepn}
*/
setReadOnly( ns, 'dvariancepn', require( '@stdlib/stats-strided-dvariancepn' ) );

/**
* @name dvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancetk}
*/
setReadOnly( ns, 'dvariancetk', require( '@stdlib/stats-strided-dvariancetk' ) );

/**
* @name dvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancewd}
*/
setReadOnly( ns, 'dvariancewd', require( '@stdlib/stats-strided-dvariancewd' ) );

/**
* @name dvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarianceyc}
*/
setReadOnly( ns, 'dvarianceyc', require( '@stdlib/stats-strided-dvarianceyc' ) );

/**
* @name dvarm
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarm}
*/
setReadOnly( ns, 'dvarm', require( '@stdlib/stats-strided-dvarm' ) );

/**
* @name dvarmpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarmpn}
*/
setReadOnly( ns, 'dvarmpn', require( '@stdlib/stats-strided-dvarmpn' ) );

/**
* @name dvarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarmtk}
*/
setReadOnly( ns, 'dvarmtk', require( '@stdlib/stats-strided-dvarmtk' ) );

/**
* @name dztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dztest}
*/
setReadOnly( ns, 'dztest', require( '@stdlib/stats-strided-dztest' ) );

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/max}
*/
setReadOnly( ns, 'max', require( '@stdlib/stats-strided-max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/max-by}
*/
setReadOnly( ns, 'maxBy', require( '@stdlib/stats-strided-max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/maxabs}
*/
setReadOnly( ns, 'maxabs', require( '@stdlib/stats-strided-maxabs' ) );

/**
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( '@stdlib/stats-strided-maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mean}
*/
setReadOnly( ns, 'mean', require( '@stdlib/stats-strided-mean' ) );

/**
* @name meankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meankbn}
*/
setReadOnly( ns, 'meankbn', require( '@stdlib/stats-strided-meankbn' ) );

/**
* @name meankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meankbn2}
*/
setReadOnly( ns, 'meankbn2', require( '@stdlib/stats-strided-meankbn2' ) );

/**
* @name meanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanors}
*/
setReadOnly( ns, 'meanors', require( '@stdlib/stats-strided-meanors' ) );

/**
* @name meanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanpn}
*/
setReadOnly( ns, 'meanpn', require( '@stdlib/stats-strided-meanpn' ) );

/**
* @name meanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanpw}
*/
setReadOnly( ns, 'meanpw', require( '@stdlib/stats-strided-meanpw' ) );

/**
* @name meanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanwd}
*/
setReadOnly( ns, 'meanwd', require( '@stdlib/stats-strided-meanwd' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( '@stdlib/stats-strided-mediansorted' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/min}
*/
setReadOnly( ns, 'min', require( '@stdlib/stats-strided-min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/min-by}
*/
setReadOnly( ns, 'minBy', require( '@stdlib/stats-strided-min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/minabs}
*/
setReadOnly( ns, 'minabs', require( '@stdlib/stats-strided-minabs' ) );

/**
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/minsorted}
*/
setReadOnly( ns, 'minsorted', require( '@stdlib/stats-strided-minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mskmax}
*/
setReadOnly( ns, 'mskmax', require( '@stdlib/stats-strided-mskmax' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mskmin}
*/
setReadOnly( ns, 'mskmin', require( '@stdlib/stats-strided-mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mskrange}
*/
setReadOnly( ns, 'mskrange', require( '@stdlib/stats-strided-mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmax}
*/
setReadOnly( ns, 'nanmax', require( '@stdlib/stats-strided-nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( '@stdlib/stats-strided-nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( '@stdlib/stats-strided-nanmaxabs' ) );

/**
* @name nanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmean}
*/
setReadOnly( ns, 'nanmean', require( '@stdlib/stats-strided-nanmean' ) );

/**
* @name nanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmeanors}
*/
setReadOnly( ns, 'nanmeanors', require( '@stdlib/stats-strided-nanmeanors' ) );

/**
* @name nanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmeanpn}
*/
setReadOnly( ns, 'nanmeanpn', require( '@stdlib/stats-strided-nanmeanpn' ) );

/**
* @name nanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmeanwd}
*/
setReadOnly( ns, 'nanmeanwd', require( '@stdlib/stats-strided-nanmeanwd' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmin}
*/
setReadOnly( ns, 'nanmin', require( '@stdlib/stats-strided-nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( '@stdlib/stats-strided-nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( '@stdlib/stats-strided-nanminabs' ) );

/**
* @name nanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmskmax}
*/
setReadOnly( ns, 'nanmskmax', require( '@stdlib/stats-strided-nanmskmax' ) );

/**
* @name nanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmskmin}
*/
setReadOnly( ns, 'nanmskmin', require( '@stdlib/stats-strided-nanmskmin' ) );

/**
* @name nanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmskrange}
*/
setReadOnly( ns, 'nanmskrange', require( '@stdlib/stats-strided-nanmskrange' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanrange}
*/
setReadOnly( ns, 'nanrange', require( '@stdlib/stats-strided-nanrange' ) );

/**
* @name nanrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanrange-by}
*/
setReadOnly( ns, 'nanrangeBy', require( '@stdlib/stats-strided-nanrange-by' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/range}
*/
setReadOnly( ns, 'range', require( '@stdlib/stats-strided-range' ) );

/**
* @name rangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/range-by}
*/
setReadOnly( ns, 'rangeBy', require( '@stdlib/stats-strided-range-by' ) );

/**
* @name scumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scumax}
*/
setReadOnly( ns, 'scumax', require( '@stdlib/stats-strided-scumax' ) );

/**
* @name scumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scumaxabs}
*/
setReadOnly( ns, 'scumaxabs', require( '@stdlib/stats-strided-scumaxabs' ) );

/**
* @name scumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scumin}
*/
setReadOnly( ns, 'scumin', require( '@stdlib/stats-strided-scumin' ) );

/**
* @name scuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scuminabs}
*/
setReadOnly( ns, 'scuminabs', require( '@stdlib/stats-strided-scuminabs' ) );

/**
* @name sdsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sdsmean}
*/
setReadOnly( ns, 'sdsmean', require( '@stdlib/stats-strided-sdsmean' ) );

/**
* @name sdsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sdsmeanors}
*/
setReadOnly( ns, 'sdsmeanors', require( '@stdlib/stats-strided-sdsmeanors' ) );

/**
* @name smax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smax}
*/
setReadOnly( ns, 'smax', require( '@stdlib/stats-strided-smax' ) );

/**
* @name smaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smaxabs}
*/
setReadOnly( ns, 'smaxabs', require( '@stdlib/stats-strided-smaxabs' ) );

/**
* @name smaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smaxabssorted}
*/
setReadOnly( ns, 'smaxabssorted', require( '@stdlib/stats-strided-smaxabssorted' ) );

/**
* @name smaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smaxsorted}
*/
setReadOnly( ns, 'smaxsorted', require( '@stdlib/stats-strided-smaxsorted' ) );

/**
* @name smean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smean}
*/
setReadOnly( ns, 'smean', require( '@stdlib/stats-strided-smean' ) );

/**
* @name smeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeankbn}
*/
setReadOnly( ns, 'smeankbn', require( '@stdlib/stats-strided-smeankbn' ) );

/**
* @name smeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeankbn2}
*/
setReadOnly( ns, 'smeankbn2', require( '@stdlib/stats-strided-smeankbn2' ) );

/**
* @name smeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanli}
*/
setReadOnly( ns, 'smeanli', require( '@stdlib/stats-strided-smeanli' ) );

/**
* @name smeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanlipw}
*/
setReadOnly( ns, 'smeanlipw', require( '@stdlib/stats-strided-smeanlipw' ) );

/**
* @name smeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanors}
*/
setReadOnly( ns, 'smeanors', require( '@stdlib/stats-strided-smeanors' ) );

/**
* @name smeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanpn}
*/
setReadOnly( ns, 'smeanpn', require( '@stdlib/stats-strided-smeanpn' ) );

/**
* @name smeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanpw}
*/
setReadOnly( ns, 'smeanpw', require( '@stdlib/stats-strided-smeanpw' ) );

/**
* @name smeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanwd}
*/
setReadOnly( ns, 'smeanwd', require( '@stdlib/stats-strided-smeanwd' ) );

/**
* @name smediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smediansorted}
*/
setReadOnly( ns, 'smediansorted', require( '@stdlib/stats-strided-smediansorted' ) );

/**
* @name smidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smidrange}
*/
setReadOnly( ns, 'smidrange', require( '@stdlib/stats-strided-smidrange' ) );

/**
* @name smin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smin}
*/
setReadOnly( ns, 'smin', require( '@stdlib/stats-strided-smin' ) );

/**
* @name sminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sminabs}
*/
setReadOnly( ns, 'sminabs', require( '@stdlib/stats-strided-sminabs' ) );

/**
* @name sminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sminsorted}
*/
setReadOnly( ns, 'sminsorted', require( '@stdlib/stats-strided-sminsorted' ) );

/**
* @name smskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smskmax}
*/
setReadOnly( ns, 'smskmax', require( '@stdlib/stats-strided-smskmax' ) );

/**
* @name smskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smskmin}
*/
setReadOnly( ns, 'smskmin', require( '@stdlib/stats-strided-smskmin' ) );

/**
* @name smskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smskrange}
*/
setReadOnly( ns, 'smskrange', require( '@stdlib/stats-strided-smskrange' ) );

/**
* @name snanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmax}
*/
setReadOnly( ns, 'snanmax', require( '@stdlib/stats-strided-snanmax' ) );

/**
* @name snanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmaxabs}
*/
setReadOnly( ns, 'snanmaxabs', require( '@stdlib/stats-strided-snanmaxabs' ) );

/**
* @name snanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmeanors}
*/
setReadOnly( ns, 'snanmeanors', require( '@stdlib/stats-strided-snanmeanors' ) );

/**
* @name snanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmeanpn}
*/
setReadOnly( ns, 'snanmeanpn', require( '@stdlib/stats-strided-snanmeanpn' ) );

/**
* @name snanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmeanwd}
*/
setReadOnly( ns, 'snanmeanwd', require( '@stdlib/stats-strided-snanmeanwd' ) );

/**
* @name snanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmin}
*/
setReadOnly( ns, 'snanmin', require( '@stdlib/stats-strided-snanmin' ) );

/**
* @name snanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanminabs}
*/
setReadOnly( ns, 'snanminabs', require( '@stdlib/stats-strided-snanminabs' ) );

/**
* @name snanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmskmax}
*/
setReadOnly( ns, 'snanmskmax', require( '@stdlib/stats-strided-snanmskmax' ) );

/**
* @name snanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmskmin}
*/
setReadOnly( ns, 'snanmskmin', require( '@stdlib/stats-strided-snanmskmin' ) );

/**
* @name snanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmskrange}
*/
setReadOnly( ns, 'snanmskrange', require( '@stdlib/stats-strided-snanmskrange' ) );

/**
* @name snanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanrange}
*/
setReadOnly( ns, 'snanrange', require( '@stdlib/stats-strided-snanrange' ) );

/**
* @name srange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/srange}
*/
setReadOnly( ns, 'srange', require( '@stdlib/stats-strided-srange' ) );

/**
* @name sstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdev}
*/
setReadOnly( ns, 'sstdev', require( '@stdlib/stats-strided-sstdev' ) );

/**
* @name sstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevch}
*/
setReadOnly( ns, 'sstdevch', require( '@stdlib/stats-strided-sstdevch' ) );

/**
* @name sstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevpn}
*/
setReadOnly( ns, 'sstdevpn', require( '@stdlib/stats-strided-sstdevpn' ) );

/**
* @name sstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevtk}
*/
setReadOnly( ns, 'sstdevtk', require( '@stdlib/stats-strided-sstdevtk' ) );

/**
* @name sstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevyc}
*/
setReadOnly( ns, 'sstdevyc', require( '@stdlib/stats-strided-sstdevyc' ) );

/**
* @name svariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariance}
*/
setReadOnly( ns, 'svariance', require( '@stdlib/stats-strided-svariance' ) );

/**
* @name svariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancech}
*/
setReadOnly( ns, 'svariancech', require( '@stdlib/stats-strided-svariancech' ) );

/**
* @name svariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancepn}
*/
setReadOnly( ns, 'svariancepn', require( '@stdlib/stats-strided-svariancepn' ) );

/**
* @name svariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancetk}
*/
setReadOnly( ns, 'svariancetk', require( '@stdlib/stats-strided-svariancetk' ) );

/**
* @name svariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancewd}
*/
setReadOnly( ns, 'svariancewd', require( '@stdlib/stats-strided-svariancewd' ) );

/**
* @name svarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svarianceyc}
*/
setReadOnly( ns, 'svarianceyc', require( '@stdlib/stats-strided-svarianceyc' ) );

/**
* @name sztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sztest}
*/
setReadOnly( ns, 'sztest', require( '@stdlib/stats-strided-sztest' ) );

/**
* @name variance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variance}
*/
setReadOnly( ns, 'variance', require( '@stdlib/stats-strided-variance' ) );

/**
* @name variancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancech}
*/
setReadOnly( ns, 'variancech', require( '@stdlib/stats-strided-variancech' ) );

/**
* @name variancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancepn}
*/
setReadOnly( ns, 'variancepn', require( '@stdlib/stats-strided-variancepn' ) );

/**
* @name variancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancetk}
*/
setReadOnly( ns, 'variancetk', require( '@stdlib/stats-strided-variancetk' ) );

/**
* @name variancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancewd}
*/
setReadOnly( ns, 'variancewd', require( '@stdlib/stats-strided-variancewd' ) );

/**
* @name varianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/varianceyc}
*/
setReadOnly( ns, 'varianceyc', require( '@stdlib/stats-strided-varianceyc' ) );

/**
* @name ztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/ztest}
*/
setReadOnly( ns, 'ztest', require( '@stdlib/stats-strided-ztest' ) );


// EXPORTS //

module.exports = ns;
