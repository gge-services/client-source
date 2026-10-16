Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_EffectValueSimple = require("gge-module:export_EffectValueSimple");
var __s0local0 = function () {
  function EffectValueWodID() {
    this._firstWodID = -1;
    this._wodIdToValueDict = new Map();
  }
  EffectValueWodID.prototype.parseFromValueString = function (__s5param0) {
    this._wodIdToValueDict = new Map();
    var __s5local0;
    var __s5local1 = __s5param0.split("#");
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          if ((__s5local0 = __s5local4.split(",")).length < 2) {
            __s5local0 = __s5local4.split("+");
          }
          var __s5local5 = isNaN(parseInt(__s5local0[EffectValueWodID.VALUE_POSITION])) || parseFloat(__s5local0[EffectValueWodID.VALUE_POSITION]) == undefined ? __s5local0[EffectValueWodID.VALUE_POSITION] : parseFloat(__s5local0[EffectValueWodID.VALUE_POSITION]);
          var __s5local6 = Number(__s5local0[EffectValueWodID.WOD_ID_POSITION]);
          if (!isNaN(__s5local6)) {
            this._wodIdToValueDict.set(__s5local6, __s5local5);
            if (this._firstWodID == -1) {
              this._firstWodID = __s5local6;
            }
          }
        }
      }
    }
    return this;
  };
  EffectValueWodID.prototype.parseFromValueArray = function (__s14param0) {
    this._wodIdToValueDict = new Map();
    if (__s14param0 != null) {
      if (__s14param0.length > 0 && !Array.isArray(__s14param0[0])) {
        for (var __s14local0 = 0; __s14local0 + 1 < __s14param0.length; __s14local0 += 2) {
          var __s14local1 = Number(__s14param0[__s14local0]);
          var __s14local2 = Number(__s14param0[__s14local0 + 1]);
          if (!isNaN(__s14local1)) {
            this._wodIdToValueDict.set(__s14local1, __s14local2);
            if (this._firstWodID == -1 || isNaN(this._firstWodID)) {
              this._firstWodID = __s14local1;
            }
          }
        }
      } else {
        for (var __s14local3 = 0, __s14local4 = __s14param0; __s14local3 < __s14local4.length; __s14local3++) {
          var __s14local5 = __s14local4[__s14local3];
          if (__s14local5 !== undefined) {
            this._wodIdToValueDict.set(Number(__s14local5[EffectValueWodID.WOD_ID_POSITION]), Number(__s14local5[EffectValueWodID.VALUE_POSITION]));
            if (this._firstWodID == -1 || isNaN(this._firstWodID)) {
              this._firstWodID = Number(__s14local5[EffectValueWodID.WOD_ID_POSITION]);
            }
          }
        }
      }
    }
    return this;
  };
  EffectValueWodID.prototype.hasWodId = function (__s27param0) {
    return this._wodIdToValueDict.get(__s27param0) !== undefined;
  };
  EffectValueWodID.prototype.getValueforWodId = function (__s29param0) {
    if (this._wodIdToValueDict.get(__s29param0)) {
      return this._wodIdToValueDict.get(__s29param0);
    } else {
      return 0;
    }
  };
  EffectValueWodID.prototype.clone = function () {
    return new __dep_export_EffectValueSimple.EffectValueSimple().parseFromValueArray(this.rawValues);
  };
  Object.defineProperty(EffectValueWodID.prototype, "strength", {
    get: function () {
      return this._wodIdToValueDict.get(this.firstWodID) || 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueWodID.prototype, "isNegative", {
    get: function () {
      return this._wodIdToValueDict.get(this.firstWodID) < 0;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueWodID.prototype.add = function (__s39param0, __s39param1) {
    if (__s39param0.rawValues.length == 0) {
      return this;
    }
    for (var __s39local0 = 0, __s39local1 = __s39param0.rawValues; __s39local0 < __s39local1.length; __s39local0++) {
      var __s39local2 = __s39local1[__s39local0];
      if (__s39local2 !== undefined && __s39local2.length == 2) {
        if (this._wodIdToValueDict.get(__s39local2[EffectValueWodID.WOD_ID_POSITION])) {
          this._wodIdToValueDict.set(Number(__s39local2[EffectValueWodID.WOD_ID_POSITION]), this._wodIdToValueDict.get(__s39local2[EffectValueWodID.WOD_ID_POSITION]) + __s39local2[EffectValueWodID.VALUE_POSITION]);
        } else {
          this._wodIdToValueDict.set(Number(__s39local2[EffectValueWodID.WOD_ID_POSITION]), __s39local2[EffectValueWodID.VALUE_POSITION]);
          if (this._firstWodID == -1) {
            this._firstWodID = __dep_exact_f855840627e6e145.int(__s39local2[EffectValueWodID.WOD_ID_POSITION]);
          }
        }
      }
    }
    if (__s39param0.rawValues.length == 1 && typeof __s39param0.rawValues[0] == "number" && this._firstWodID > -1) {
      this._wodIdToValueDict.set(this._firstWodID, this._wodIdToValueDict.get(this._firstWodID) + __s39param0.rawValues[0]);
    }
    if (this._firstWodID <= 0) {
      throw new Error("added wodID is invalid " + __dep_export_ClientConstUtils.ClientConstUtils.map2String(this._wodIdToValueDict));
    }
    return this;
  };
  Object.defineProperty(EffectValueWodID.prototype, "textReplacements", {
    get: function () {
      return [__dep_exact_9e901e8e2483a22f.MathBase.round(Math.abs(this._wodIdToValueDict.get(this.firstWodID)), 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueWodID.prototype, "rawValues", {
    get: function () {
      var __s52local0 = [];
      if (this._wodIdToValueDict != null) {
        for (var __s52local1 = 0, __s52local2 = Array.from(this._wodIdToValueDict.keys()); __s52local1 < __s52local2.length; __s52local1++) {
          var __s52local3 = __s52local2[__s52local1];
          if (__s52local3 !== undefined) {
            __s52local0.push([__s52local3, this._wodIdToValueDict.get(__s52local3)]);
          }
        }
      }
      return __s52local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueWodID.prototype, "firstWodID", {
    get: function () {
      return this._firstWodID;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueWodID.prototype.getContextTextReplacements = function (__s60param0) {
    return this.textReplacements;
  };
  EffectValueWodID.WOD_ID_POSITION = 0;
  EffectValueWodID.VALUE_POSITION = 1;
  return EffectValueWodID;
}();
exports.EffectValueWodID = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
