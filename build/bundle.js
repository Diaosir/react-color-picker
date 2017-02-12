/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals __webpack_hash__ */
	if(false) {
		var lastHash;
		var upToDate = function upToDate() {
			return lastHash.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check().then(function(updatedModules) {
				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					return;
				}

				return module.hot.apply({
					ignoreUnaccepted: true,
					ignoreDeclined: true,
					ignoreErrored: true,
					onUnaccepted: function(data) {
						console.warn("Ignored an update to unaccepted module " + data.chain.join(" -> "));
					},
					onDeclined: function(data) {
						console.warn("Ignored an update to declined module " + data.chain.join(" -> "));
					},
					onErrored: function(data) {
						console.warn("Ignored an error while updating module " + data.moduleId + " (" + data.type + ")");
					}
				}).then(function(renewedModules) {
					if(!upToDate()) {
						check();
					}

					require("./log-apply-result")(updatedModules, renewedModules);

					if(upToDate()) {
						console.log("[HMR] App is up to date.");
					}
				});
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					console.warn("[HMR] Cannot check for update. Need to do a full reload!");
					console.warn("[HMR] " + err.stack || err.message);
				} else {
					console.warn("[HMR] Update check failed: " + err.stack || err.message);
				}
			});
		};
		var hotEmitter = require("./emitter");
		hotEmitter.on("webpackHotUpdate", function(currentHash) {
			lastHash = currentHash;
			if(!upToDate()) {
				var status = module.hot.status();
				if(status === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				} else if(["abort", "fail"].indexOf(status) >= 0) {
					console.warn("[HMR] Cannot apply update as a previous update " + status + "ed. Need to do a full reload!");
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var a = {};

/***/ }
/******/ ]);