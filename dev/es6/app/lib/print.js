//   Module      : print.js
// ----------------------------
//		Description : return a function.
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Here is a longer description of this module
'use strict';

export default ( msg ) => document.body.appendChild( document.createTextNode( msg ) );
