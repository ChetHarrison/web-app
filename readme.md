# Web-App #
A Marionette scaffold using the following libs:

* Marionette - Backbone view library
* Backbone - MV* library on top of jQuery and Underscore
* RxJs - Reactive event streams

Web-App uses a Grunt task runner and the following tasks

* compass - compile SASS to css
* babel - transpile ES6 to ES5
* docco - auto documentation
* plato - complexity analysis
* jasmine - unit testing
* istanbul - test coverage
* requirejs - js concatenation optimization and minification
* imagemin - image optimization
* connect - create servers

It includes 2 bash scripts `bash start` and `bash stop` that will
fire up web pages with dev and prod versions of the app along with
reports about the app. Web-App uses JSCS to enforce code style.

## Use ##

* Clone the repo
* Install NPM deps
* Install Bower deps
* Build the project
* The default grunt task will watch file changes
* Start reporting servers with `bash start`


## Grunt ##
The gruntfile will probably look dramatically different from the
ones you typically find out there. It builds the typically extensive
task configuration from a sequence of configuration files stored at
`grunt/config`. It registers tasks from files in the `grunt/register-task`
directory.

## Testing ##
This app is set up to test with [Jasmine](https://github.com/jasmine/jasmine),
using [Sinon](https://github.com/sinonjs/sinon) for faking
`XMLHttpRequest`s and [Jasmine-jQuery](https://github.com/velesin/jasmine-jquery) for working with
fixtures.

## Test Goals ##
Source: “Backbone.js Testing.” iBooks

### Models ###

* Objects can be instantiated with supplied and/or default values
* Data can be synchronized with a backing datastore (for example, localStorage or a REST server)
* Custom and built-in events fire and/or are consumed on appropriate state changes
* Validation logic accurately distinguishes the correctness of attribute data”

### Collections ###

* Collection objects can be created with or without an array of model objects
* Model objects can be added and removed from a collection
* Events are triggered on container and model changes
* Data is appropriately synchronized with the backend

### Templates ###

* Template objects render the appropriate HTML output with the provided data
* Complex data structures such as arrays and objects are correctly interpolated in the template output

### Views ###

* Views can render the target HTML, binding model data to a template string
* View objects provided with an el property get added to the DOM on creation
* View methods correctly bind to DOM and Backbone.js events, and respond appropriately
* Objects contained by a view (for example, subviews and models) are properly disposed on the view removal

### Routers ###

* URL routes are accurately matched to appropriate views or other actions
* A router maintains the browser history correctly after navigation events
