//   Module      : app.js
// ----------------------------
//		Description : kickoff the app.
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
'use strict';

import config from 'config';
import Mn from 'marionette';
import Bb from 'backbone';

const app = new Mn.Application();

app.backbone = Bb;

app.on( 'start', () => { Bb.history.start(); } );

// Attach to the window for debugging
if ( config.ENV === 'development' ) {
	window.app = app;
}

export default app;
