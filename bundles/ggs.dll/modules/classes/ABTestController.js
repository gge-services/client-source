Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_class_ABTestData = require("gge-module:class_ABTestData");
var __dep_exact_14ac9999fc46bb45_1 = require("gge-module:exact_14ac9999fc46bb45");
exports.fatal = __dep_exact_14ac9999fc46bb45_1.fatal;
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __dep_class_ABTest = require("gge-module:class_ABTest");
var __s0local0 = function () {
  function ABTestController() {
    this.enabledTests = [];
    if (ABTestController._instance) {
      throw new Error("this is a singleton. cannot instanciate more than once");
    }
  }
  Object.defineProperty(ABTestController, "instance", {
    get: function () {
      ABTestController._instance ||= new ABTestController();
      return ABTestController._instance;
    },
    enumerable: true,
    configurable: true
  });
  ABTestController.prototype.initialize = function (__s8param0, __s8param1, __s8param2, __s8param3, __s8param4, __s8param5, __s8param6) {
    for (var __s8local0 = 0, __s8local1 = __s8param0.children(); __s8local0 < __s8local1.length; __s8local0++) {
      var __s8local2 = __s8local1[__s8local0];
      var __s8local3 = new __dep_class_ABTestData.ABTestData();
      __s8local3._testID = Number(__s8local2.attribute("id"));
      __s8local3.gameID = __s8param1;
      __s8local3.instanceID = __s8param2;
      __s8local3.networkID = __s8param3;
      __s8local3.accountID = __s8param4;
      __s8local3.playerID = __s8param5;
      __s8local3.referrer = __s8param6;
      this.enabledTests.push(new __dep_class_ABTest.ABTest(__s8local3));
    }
  };
  ABTestController.prototype.getTest = function (__s12param0) {
    for (var __s12local0 = this.enabledTests.length, __s12local1 = 0; __s12local1 < __s12local0; __s12local1++) {
      if (this.enabledTests[__s12local1].testData.testID == __s12param0) {
        return this.enabledTests[__s12local1];
      }
    }
    __dep_exact_14ac9999fc46bb45.fatal("no test with id " + __s12param0 + " available");
    return null;
  };
  ABTestController.prototype.getGlobalTest = function () {
    if (this.enabledTests.length > 0 && this.enabledTests[0]) {
      return this.enabledTests[0];
    } else {
      __dep_exact_14ac9999fc46bb45.fatal("no test with available");
      return null;
    }
  };
  ABTestController.prototype.trackConversion = function (__s21param0, __s21param1, __s21param2, __s21param3) {
    for (var __s21local0 = this.enabledTests.length, __s21local1 = 0; __s21local1 < __s21local0; __s21local1++) {
      if (this.enabledTests[__s21local1].testData.testID == __s21param0) {
        if (this.enabledTests[__s21local1].testData.isValid) {
          this.enabledTests[__s21local1].sendConversion(__s21param1, __s21param2, __s21param3);
        } else {
          __dep_exact_ba3768902da9162c.warn("ab-test with id: " + __s21param0 + " is not valid");
        }
      }
    }
  };
  return ABTestController;
}();
exports.ABTestController = __s0local0;
