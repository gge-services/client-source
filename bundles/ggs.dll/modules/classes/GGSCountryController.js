Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __dep_exact_96cf9add7e28ef3a = require("gge-module:exact_96cf9add7e28ef3a");
var __s0local0 = function () {
  function GGSCountryController() {
    this._currentCountryChanged = new __dep_exact_becd07da092f4a09.Signal(__dep_exact_96cf9add7e28ef3a.Country);
    if (GGSCountryController._instance) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  Object.defineProperty(GGSCountryController, "instance", {
    get: function () {
      GGSCountryController._instance ||= new GGSCountryController();
      return GGSCountryController._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSCountryController.prototype, "activeCountries", {
    get: function () {
      return window.ggs.worldAssignment.facade.activeCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSCountryController.prototype, "currentCountry", {
    get: function () {
      return window.ggs.worldAssignment.facade.currentCountry;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSCountryController.prototype, "currentCountryChanged", {
    get: function () {
      return this._currentCountryChanged;
    },
    enumerable: true,
    configurable: true
  });
  return GGSCountryController;
}();
exports.GGSCountryController = __s0local0;
