Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FightPresetVO() {
    this.index = 0;
    this.unlocked = false;
  }
  FightPresetVO.prototype.update = function (__s5param0) {
    this.name = __s5param0.SN || this.defaultName;
    if (__s5param0.A) {
      this.deserialize(__s5param0.A);
    }
  };
  FightPresetVO.prototype.reset = function () {
    this.name = this.defaultName;
    this.unlocked = false;
    this._units = [];
  };
  Object.defineProperty(FightPresetVO.prototype, "defaultName", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("playerTitle_composition_prefix", ["dialog_troopPreset_preset_tt", this.humanReadableIndex]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "humanReadableIndex", {
    get: function () {
      return this.index + 1;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetVO.prototype.deserialize = function (__s14param0) {
    try {
      this._units = JSON.parse(__s14param0);
    } catch (__s17local0) {}
  };
  Object.defineProperty(FightPresetVO.prototype, "label", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("commander_index", [this.humanReadableIndex, this.unlocked ? new __dep_exact_92d05af59ee2ff30_1.TextVO(this.name) : FightPresetVO.TEXT_LOCKED]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "data", {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "unitsAsString", {
    get: function () {
      return JSON.stringify(this._units) || "";
    },
    enumerable: true,
    configurable: true
  });
  FightPresetVO.prototype.getUnitWodId = function (__s25param0, __s25param1) {
    var __s25local0 = __s25param1 << 1;
    if (this._units && this._units[__s25param0] && this._units[__s25param0][__s25local0] != null) {
      return __dep_exact_f855840627e6e145.int(this._units[__s25param0][__s25local0]);
    } else {
      return -1;
    }
  };
  FightPresetVO.prototype.getSupportTools = function () {
    if (this._units && this._units.length == 7) {
      return this._units[6];
    } else {
      return [-1, -1, -1];
    }
  };
  FightPresetVO.prototype.getUnitCount = function (__s33param0, __s33param1) {
    var __s33local0 = 1 + (__s33param1 << 1);
    if (this._units && this._units[__s33param0] && this._units[__s33param0][__s33local0] != null) {
      return __dep_exact_f855840627e6e145.int(this._units[__s33param0][__s33local0]);
    } else {
      return 0;
    }
  };
  FightPresetVO.prototype.setContentFromWave = function (__s37param0, __s37param1) {
    this._units = [];
    if (__s37param0) {
      for (var __s37local0 = 0; __s37local0 < __s37param0.flanks.length; __s37local0++) {
        for (var __s37local1 = __s37param0.flanks[__s37local0], __s37local2 = [], __s37local3 = 0; __s37local3 < __s37local1.items.length; __s37local3++) {
          var __s37local4 = __s37local1.items[__s37local3];
          if (__s37local4.getWodId() != -1) {
            __s37local2.push(__s37local4.getWodId(), __s37local4.getAmount());
          }
        }
        this._units.push(__s37local2);
      }
    }
  };
  Object.defineProperty(FightPresetVO.prototype, "hasContent", {
    get: function () {
      return this._units != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetVO.prototype, "locked", {
    get: function () {
      return !this.unlocked;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetVO.TEXT_LOCKED = "dialog_troopPreset_presetLocked_tt";
  return FightPresetVO;
}();
exports.FightPresetVO = __s0local0;
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
