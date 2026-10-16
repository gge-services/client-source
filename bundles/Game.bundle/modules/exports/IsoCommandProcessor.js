Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function IsoCommandProcessor() {
    this._queue = [];
  }
  IsoCommandProcessor.prototype.addPackageToQueue = function (__s5param0) {
    var __s5local0 = __s5param0.createCommandList();
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          this.addCommandToQueue(__s5local3);
        }
      }
    }
  };
  IsoCommandProcessor.prototype.addCommandToQueue = function (__s11param0) {
    this._queue.push(__s11param0);
  };
  IsoCommandProcessor.prototype.executeQueue = function (__s13param0 = true) {
    if (!(this._queue.length <= 0)) {
      if (__s13param0) {
        this.optimizeQueue(this._queue);
      }
      if (this._queue != null) {
        for (var __s13local0 = 0, __s13local1 = this._queue; __s13local0 < __s13local1.length; __s13local0++) {
          var __s13local2 = __s13local1[__s13local0];
          if (__s13local2 !== undefined) {
            this.executeCommand(__s13local2);
          }
        }
      }
      this._queue.length = 0;
    }
  };
  IsoCommandProcessor.prototype.executeCommand = function (__s21param0) {
    if (!__s21param0.isExecuted) {
      __s21param0.execute();
      __s21param0.isExecuted = true;
    }
  };
  IsoCommandProcessor.prototype.executePackage = function (__s24param0, __s24param1 = true) {
    var __s24local0 = __s24param0.createCommandList();
    if (__s24local0 && !(__s24local0.length <= 0) && (__s24param1 && this.optimizeQueue(__s24local0), __s24local0 != null)) {
      for (var __s24local1 = 0, __s24local2 = __s24local0; __s24local1 < __s24local2.length; __s24local1++) {
        var __s24local3 = __s24local2[__s24local1];
        if (__s24local3 !== undefined) {
          this.executeCommand(__s24local3);
        }
      }
    }
  };
  IsoCommandProcessor.prototype.optimizeQueue = function (__s30param0) {
    this.removeDuplicatedCommandsByClass(__s30param0, __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated);
    this.removeDuplicatedCommandsByClass(__s30param0, __dep_export_IsoCommandGridUpdate.IsoCommandGridUpdate);
    this.removeDuplicatedCommandsByClass(__s30param0, __dep_export_IsoCommandZSortAll.IsoCommandZSortAll);
  };
  IsoCommandProcessor.prototype.removeDuplicatedCommandsByClass = function (__s32param0, __s32param1) {
    var __s32local0 = this.getIndicesOfCommands(__s32param0, __s32param1);
    for (var __s32local1 = __dep_exact_f855840627e6e145.int(__s32local0.length - 2); __s32local1 >= 0; --__s32local1) {
      __s32param0.splice(__s32local0[__s32local1], 1);
    }
  };
  IsoCommandProcessor.prototype.getIndicesOfCommands = function (__s36param0, __s36param1) {
    var __s36local0 = [];
    for (var __s36local1 = 0; __s36local1 < __s36param0.length; ++__s36local1) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s36param0[__s36local1], __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s36param1))) {
        __s36local0.push(__s36local1);
      }
    }
    return __s36local0;
  };
  return IsoCommandProcessor;
}();
exports.IsoCommandProcessor = __s0local0;
var __dep_export_IsoCommandAreaDataUpdated = require("gge-module:export_IsoCommandAreaDataUpdated");
var __dep_export_IsoCommandGridUpdate = require("gge-module:export_IsoCommandGridUpdate");
var __dep_export_IsoCommandZSortAll = require("gge-module:export_IsoCommandZSortAll");
