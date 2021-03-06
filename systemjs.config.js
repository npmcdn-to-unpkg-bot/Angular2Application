/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

  //map tells the System loader where to look for things
  var map = {
    'app': 'build',

    '@angular': 'node_modules/@angular', // sufficient if we didn't pin the version
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api', // get latest
    'rxjs': 'node_modules/rxjs',
    'ts': 'node_modules/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'node_modules/typescript@1.8.10/lib/typescript.js',
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function (pkgName) {
    map['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  // Add package entries for angular packages
  ngPackageNames.forEach(function (pkgName) {

    // Bundled (~40 requests):   
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },

    map: map,
    packages: packages
  }

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/