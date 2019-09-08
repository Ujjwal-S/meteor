// This file contains a package.json for the dependencies of the command-line
// tool.

// We put this in a JS file so that it can contain comments. It is processed
// into a package.json file by generate-dev-bundle.sh.

var packageJson = {
  name: "meteor-dev-bundle-tool",
  private: true,
  dependencies: {
    // Explicit dependency because we are replacing it with a bundled version
    // and we want to make sure there are no dependencies on a higher version
    npm: "6.11.3",
    pacote: "https://github.com/meteor/pacote/tarball/00b3b094e6074e45fc221d5bd96419d07ea34c6a",
    "node-gyp": "5.0.1",
    "node-pre-gyp": "0.13.0",
    typescript: "3.6.2",
    "meteor-babel": "7.6.0",
    // Keep the versions of these packages consistent with the versions
    // found in dev-bundle-server-package.js.
    "meteor-promise": "0.8.7",
    fibers: "4.0.1",
    reify: "0.20.12",
    // So that Babel can emit require("@babel/runtime/helpers/...") calls.
    "@babel/runtime": "7.6.0",
    // For backwards compatibility with isopackets that still depend on
    // babel-runtime rather than @babel/runtime.
    "babel-runtime": "7.0.0-beta.3",
    "@types/underscore": "1.9.2",
    underscore: "1.9.1",
    "source-map-support": "https://github.com/meteor/node-source-map-support/tarball/1912478769d76e5df4c365e147f25896aee6375e",
    "@types/semver": "5.4.0",
    semver: "5.4.1",
    request: "2.88.0",
    uuid: "3.3.2",
    "graceful-fs": "4.2.2",
    fstream: "https://github.com/meteor/fstream/tarball/cf4ea6c175355cec7bee38311e170d08c4078a5d",
    tar: "2.2.1",
    json5: "2.1.0",
    // Fork of kexec@3.0.0 with my Node.js 12 compatibility PR
    // https://github.com/jprichardson/node-kexec/pull/37 applied.
    kexec: "https://github.com/meteor/node-kexec/tarball/f29f54037c7db6ad29e1781463b182e5929215a0",
    "source-map": "0.5.7",
    chalk: "0.5.1",
    // Latest master version of sqlite3, based on version 4.0.6.
    sqlite3: "https://github.com/mapbox/node-sqlite3/tarball/4f5b9963161c4ab8abd255f22d226361aa434cf4",
    "http-proxy": "1.16.2",
    "is-reachable": "3.1.0",
    "wordwrap": "0.0.2",
    "moment": "2.20.1",
    "rimraf": "2.6.2",
    "glob": "7.1.2",
    ignore: "3.3.7",
    // XXX: When we update this, see if it fixes this Github issue:
    // https://github.com/jgm/CommonMark/issues/276 . If it does, remove the
    // workaround from the tool.
    "commonmark": "0.15.0",
    escope: "3.6.0",
    split2: "2.2.0",
    multipipe: "2.0.1",
    pathwatcher: "8.1.0",
    // The @wry/context package version must be compatible with the
    // version constraint imposed by optimism/package.json.
    optimism: "0.10.2",
    "@wry/context": "0.4.4",
    'lru-cache': '4.1.3'
  }
};

if (process.platform === 'win32') {
  // Remove dependencies that do not work on Windows
  delete packageJson.dependencies.netroute;
  delete packageJson.dependencies.kexec;
}

process.stdout.write(JSON.stringify(packageJson, null, 2) + '\n');
