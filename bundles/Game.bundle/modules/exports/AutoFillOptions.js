Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function () {
  function AutoFillOptions() {
    this._fillLeftFlank = true;
    this._fillMiddleFlank = true;
    this._fillRightFlank = true;
    this._fillCurrentWave = false;
    this._toolFilter = new Map();
    this._unitFilter = new Map();
    this._toolFilter = this.createNewToolFilter();
    this._unitFilter = this.createNewUnitFilter();
  }
  AutoFillOptions.prototype.setToolFilter = function (__s5param0, __s5param1) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._toolFilter, __s5param0)) {
      this._toolFilter.set(__s5param0, __s5param1);
    }
  };
  AutoFillOptions.prototype.setUnitFilter = function (__s8param0, __s8param1) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._unitFilter, __s8param0)) {
      this._unitFilter.set(__s8param0, __s8param1);
    }
  };
  AutoFillOptions.prototype.setAllToolFilters = function (__s11param0) {
    if (this._toolFilter != null) {
      for (var __s11local0 = 0, __s11local1 = Array.from(this._toolFilter.keys()); __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        this._toolFilter.set(__s11local2, __s11param0);
      }
    }
  };
  AutoFillOptions.prototype.setAllUnitFilters = function (__s16param0) {
    if (this._unitFilter != null) {
      for (var __s16local0 = 0, __s16local1 = Array.from(this._unitFilter.keys()); __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        this._unitFilter.set(__s16local2, __s16param0);
      }
    }
  };
  AutoFillOptions.prototype.isToolFilterActive = function (__s21param0) {
    return !!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._toolFilter, __s21param0) && !!this._toolFilter.get(__s21param0);
  };
  AutoFillOptions.prototype.isUnitFilterActive = function (__s23param0) {
    return !!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this._unitFilter, __s23param0) && !!this._unitFilter.get(__s23param0);
  };
  AutoFillOptions.prototype.createNewToolFilter = function () {
    var __s25local0 = new Map();
    if (AutoFillOptions.TOOL_FILTER_TYPES != null) {
      for (var __s25local1 = 0, __s25local2 = AutoFillOptions.TOOL_FILTER_TYPES; __s25local1 < __s25local2.length; __s25local1++) {
        var __s25local3 = __s25local2[__s25local1];
        if (__s25local3 !== undefined) {
          __s25local0.set(__s25local3, true);
        }
      }
    }
    return __s25local0;
  };
  AutoFillOptions.prototype.createNewUnitFilter = function () {
    var __s31local0 = new Map();
    if (AutoFillOptions.UNIT_FILTER_TYPES != null) {
      for (var __s31local1 = 0, __s31local2 = AutoFillOptions.UNIT_FILTER_TYPES; __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        if (__s31local3 !== undefined) {
          __s31local0.set(__s31local3, true);
        }
      }
    }
    return __s31local0;
  };
  AutoFillOptions.prototype.isAnyToolFilterInactive = function () {
    if (this._toolFilter != null) {
      for (var __s37local0 = 0, __s37local1 = Array.from(this._toolFilter.values()); __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined && !__s37local2) {
          return false;
        }
      }
    }
    return true;
  };
  AutoFillOptions.prototype.isAnyUnitFilterInactive = function () {
    if (this._unitFilter != null) {
      for (var __s43local0 = 0, __s43local1 = Array.from(this._unitFilter.values()); __s43local0 < __s43local1.length; __s43local0++) {
        var __s43local2 = __s43local1[__s43local0];
        if (__s43local2 !== undefined && !__s43local2) {
          return false;
        }
      }
    }
    return true;
  };
  AutoFillOptions.prototype.getActiveToolFilter = function () {
    var __s49local0 = [];
    if (AutoFillOptions.TOOL_FILTER_TYPES != null) {
      for (var __s49local1 = 0, __s49local2 = AutoFillOptions.TOOL_FILTER_TYPES; __s49local1 < __s49local2.length; __s49local1++) {
        var __s49local3 = __s49local2[__s49local1];
        if (__s49local3 !== undefined && this.isToolFilterActive(__s49local3)) {
          __s49local0.push(__s49local3);
        }
      }
    }
    return __s49local0;
  };
  AutoFillOptions.prototype.getActiveUnitFilter = function () {
    var __s55local0 = [];
    if (AutoFillOptions.UNIT_FILTER_TYPES != null) {
      for (var __s55local1 = 0, __s55local2 = AutoFillOptions.UNIT_FILTER_TYPES; __s55local1 < __s55local2.length; __s55local1++) {
        var __s55local3 = __s55local2[__s55local1];
        if (__s55local3 !== undefined && this.isUnitFilterActive(__s55local3)) {
          __s55local0.push(__s55local3);
        }
      }
    }
    return __s55local0;
  };
  AutoFillOptions.prototype.isAnyFlankActive = function () {
    return this.fillLeftFlank || this.fillMiddleFlank || this.fillRightFlank;
  };
  Object.defineProperty(AutoFillOptions.prototype, "fillLeftFlank", {
    get: function () {
      return this._fillLeftFlank;
    },
    set: function (__s65param0) {
      this._fillLeftFlank = __s65param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "fillMiddleFlank", {
    get: function () {
      return this._fillMiddleFlank;
    },
    set: function (__s69param0) {
      this._fillMiddleFlank = __s69param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "fillRightFlank", {
    get: function () {
      return this._fillRightFlank;
    },
    set: function (__s73param0) {
      this._fillRightFlank = __s73param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "fillCurrentWave", {
    get: function () {
      return this._fillCurrentWave;
    },
    set: function (__s77param0) {
      this._fillCurrentWave = __s77param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "toolFilter", {
    get: function () {
      return this._toolFilter;
    },
    set: function (__s81param0) {
      this._toolFilter = __s81param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoFillOptions.prototype, "unitFilter", {
    get: function () {
      return this._unitFilter;
    },
    set: function (__s85param0) {
      this._unitFilter = __s85param0;
    },
    enumerable: true,
    configurable: true
  });
  AutoFillOptions.TOOL_FILTER_BASIC = "basic";
  AutoFillOptions.TOOL_FILTER_PREMIUM = "premium";
  AutoFillOptions.TOOL_FILTER_ELITE = "elite";
  AutoFillOptions.TOOL_FILTER_EVENT = "event";
  AutoFillOptions.TOOL_FILTER_COMBO = "combo";
  AutoFillOptions.UNIT_FILTER_MELEE = "melee";
  AutoFillOptions.UNIT_FILTER_RANGE = "range";
  AutoFillOptions.UNIT_FILTER_C1 = "c1";
  AutoFillOptions.UNIT_FILTER_C2 = "c2";
  AutoFillOptions.UNIT_FILTER_MEAD = "mead";
  AutoFillOptions.UNIT_FILTER_BEEF = "beef";
  AutoFillOptions.UNIT_FILTER_TYPES = [AutoFillOptions.UNIT_FILTER_MELEE, AutoFillOptions.UNIT_FILTER_RANGE, AutoFillOptions.UNIT_FILTER_C1, AutoFillOptions.UNIT_FILTER_C2, AutoFillOptions.UNIT_FILTER_MEAD, AutoFillOptions.UNIT_FILTER_BEEF];
  AutoFillOptions.TOOL_FILTER_TYPES = [AutoFillOptions.TOOL_FILTER_BASIC, AutoFillOptions.TOOL_FILTER_PREMIUM, AutoFillOptions.TOOL_FILTER_ELITE, AutoFillOptions.TOOL_FILTER_EVENT, AutoFillOptions.TOOL_FILTER_COMBO];
  return AutoFillOptions;
}();
exports.AutoFillOptions = __s0local0;
