Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function () {
  function CastleProfiler() {
    this.rootMeasure = new __s0local1("root");
    this.measureStack = [];
    this.measureStack.push(this.rootMeasure);
  }
  CastleProfiler.prototype.start = function (__s5param0) {
    var __s5local0 = this.measureStack[this.measureStack.length - 1].getSubMeasurer(__s5param0);
    this.measureStack.push(__s5local0);
    __s5local0.startTimer();
  };
  CastleProfiler.prototype.stop = function () {
    this.measureStack.pop().stopTimer();
  };
  CastleProfiler.prototype.output = function () {
    return this.rootMeasure.getResult();
  };
  CastleProfiler.prototype.save = function (__s11param0 = "measures.csv") {
    new __dep_exact_81dacdf05bd32292.FileReference().save(this.output(), __s11param0);
  };
  return CastleProfiler;
}();
exports.CastleProfiler = __s0local0;
var __s0local1 = function () {
  function Measurer(__s15param0) {
    this.measurers = new Map();
    this.count = 0;
    this.totalTime = 0;
    this.lastMeasureStarted = 0;
    this.id = __s15param0;
  }
  Measurer.prototype.startTimer = function () {
    this.lastMeasureStarted = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
  };
  Measurer.prototype.stopTimer = function () {
    this.count++;
    this.totalTime += __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.lastMeasureStarted);
  };
  Measurer.prototype.getSubMeasurer = function (__s21param0) {
    if (this.measurers.get(__s21param0) == undefined) {
      this.measurers.set(__s21param0, new Measurer(__s21param0));
    }
    return this.measurers.get(__s21param0);
  };
  Measurer.prototype.addResult = function (__s24param0 = "") {
    var __s24local0 = __s24param0 + this.id + Measurer.DELIMITER + this.totalTime + Measurer.DELIMITER + this.count + "\n";
    var __s24local1 = this.totalTime;
    var __s24local2 = __s24param0 + "    ";
    var __s24local3 = true;
    if (this.measurers != null) {
      for (var __s24local4 = 0, __s24local5 = Array.from(this.measurers.values()); __s24local4 < __s24local5.length; __s24local4++) {
        var __s24local6 = __s24local5[__s24local4];
        if (__s24local6 !== undefined) {
          __s24local0 += __s24local6.addResult(__s24local2);
          __s24local1 -= __s24local6.totalTime;
          __s24local3 = false;
        }
      }
    }
    if (!__s24local3 && __s24local1 > 0) {
      __s24local0 += __s24local2 + "(other)" + Measurer.DELIMITER + __s24local1 + Measurer.DELIMITER + this.count + "\n";
    }
    return __s24local0;
  };
  Measurer.prototype.getResult = function () {
    return this.addResult("");
  };
  Measurer.__initialize_static_members = function () {
    Measurer.DELIMITER = "\t";
  };
  return Measurer;
}();
__s0local1.__initialize_static_members();
