//   Module      : main.js
// ----------------------------
//		Description : kickoff the app.
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Here is a longer description of this module
'use strict';

import Mn from 'marionette';

const app = new Mn.Application();

app.on('start', function() {
  Backbone.history.start();
});

export default app;
