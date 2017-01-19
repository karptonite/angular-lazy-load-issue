# An issue with AoT Compiling with code splitting and lazy loading

This repository demonstrates an issue with AoT compiling, code splitting and lazy loading with @ngtools/webpack.

I'm not sure if the issue is something I'm doing wrong, or a bug in the library.

In the first commit, which works, a moduler called SharedModule is imported a module called CommonLayoutModule, which is in turn imported by the main AppModule.

In the second commit, the SharedModule is also imported by the SubscriptionsModule, a module that is used to lazy load the subscriptions component.

However, the code for the SharedModule is split out into its own bundle, one that is not loaded with the main page, causing an error, `bootstrap 7eb915a…:52Uncaught TypeError: Cannot read property 'call' of undefined at __webpack_require__`

This example is based on the useful example of adding code splitting to an Angular project, here: https://github.com/vsavkin/router_lazyloading
