Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function AllianceCrestVO() {
    this._layoutID = -1;
    this._colorIDs = [];
    this._colors = [];
    this._frameID = 1;
    this._isEmpty = false;
    this._isEmpty = true;
  }
  Object.defineProperty(AllianceCrestVO.prototype, "layoutID", {
    get: function () {
      return this._layoutID;
    },
    set: function (__s7param0) {
      this._layoutID = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "layoutVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.allianceCrestData.getLayoutVOById(this._layoutID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "colors", {
    get: function () {
      if (this._colors.length == 0) {
        for (var __s11local0 = 0; __s11local0 < this._colorIDs.length; __s11local0++) {
          var __s11local1 = __dep_exact_f855840627e6e145.int(this._colorIDs[__s11local0]);
          var __s11local2 = __dep_export_CastleModel.CastleModel.allianceCrestData.getColorVOById(__s11local1);
          if (__s11local2) {
            this._colors.push(__s11local2);
          }
        }
      }
      return this._colors;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestVO.prototype.resetColors = function () {
    this._colorIDs = [];
    this._colors = [];
  };
  Object.defineProperty(AllianceCrestVO.prototype, "colorIDs", {
    get: function () {
      return this._colorIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "frameID", {
    get: function () {
      return this._frameID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestVO.prototype, "isEmpty", {
    get: function () {
      return this._isEmpty;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestVO.prototype.getParamObject = function () {
    var __s25local0 = [];
    for (var __s25local1 = 0; __s25local1 < this.layoutVO.noofColors; __s25local1++) {
      __s25local0.push(this._colorIDs[__s25local1]);
    }
    return {
      ACLI: this._layoutID,
      ACCS: __s25local0
    };
  };
  AllianceCrestVO.prototype.cloneFromVO = function (__s29param0) {
    this.fillWithData(__s29param0.getParamObject());
  };
  AllianceCrestVO.prototype.fillWithData = function (__s31param0) {
    if (!__s31param0) {
      var __s31local0 = __dep_export_CastleModel.CastleModel.allianceCrestData.createRandomCrest();
      __s31param0 = {
        ACLI: __s31local0.layoutID,
        ACCS: __s31local0.colorIDs
      };
    }
    if (__s31param0) {
      this._layoutID = __dep_exact_f855840627e6e145.int(__s31param0.ACLI);
      this._colorIDs = __s31param0.ACCS;
      this._colors = [];
      this._isEmpty = false;
    } else {
      this._isEmpty = true;
    }
  };
  AllianceCrestVO.prototype.fillFromArray = function (__s36param0) {
    var __s36local0 = {
      ACLI: __s36param0[0],
      ACCS: __s36param0[1]
    };
    this.fillWithData(__s36local0);
  };
  AllianceCrestVO.prototype.isClonedAEVOChanged = function (__s38param0) {
    return this.layoutID != __s38param0.layoutID || this._colorIDs.length > 0 && this._colorIDs[0] != __s38param0.colorIDs[0] || this._colorIDs.length > 1 && this._colorIDs[1] != __s38param0.colorIDs[1] || this._colorIDs.length > 2 && this._colorIDs[2] != __s38param0.colorIDs[2];
  };
  AllianceCrestVO.prototype.randomize = function () {
    var __s40local0 = __dep_export_CastleModel.CastleModel.allianceCrestData.createRandomCrest();
    this.cloneFromVO(__s40local0);
  };
  AllianceCrestVO.prototype.setColorAtIndex = function (__s42param0, __s42param1) {
    this._colorIDs[__s42param1] = __s42param0;
    this._colors = [];
  };
  return AllianceCrestVO;
}();
exports.AllianceCrestVO = __s0local0;
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
