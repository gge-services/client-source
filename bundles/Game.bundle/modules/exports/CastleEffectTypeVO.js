Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEffectTypeVO(__s3param0 = null) {
    this._combatType = 0;
    if (__s3param0 == null) {
      this._name = "typeUnknown";
      this._type = __dep_export_EffectTypeEnum.EffectTypeEnum.getByID(-1);
    } else {
      var __s3local0 = __dep_exact_f855840627e6e145.int(__s3param0.effectTypeID || "");
      this._name = __s3param0.name || "";
      this._type = __dep_export_EffectTypeEnum.EffectTypeEnum.getByID(__s3local0);
      this._combatType = __dep_exact_f855840627e6e145.int(__s3param0.combatType || "");
      this._effectCategory = parseInt(__s3param0.sortCategory || "");
      this._effectGroup = parseInt(__s3param0.sortGroup || "");
    }
  }
  Object.defineProperty(CastleEffectTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  CastleEffectTypeVO.prototype.toString = function () {
    return this.getClassName() + "." + this._name;
  };
  CastleEffectTypeVO.prototype.getClassName = function () {
    return __dep_exact_81dacdf05bd32292.getQualifiedClassName(this).match("[^:]*$")[0];
  };
  Object.defineProperty(CastleEffectTypeVO.prototype, "id", {
    get: function () {
      return this._type.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "combatType", {
    get: function () {
      return this._combatType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "valueClass", {
    get: function () {
      return this._type.valueClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "effectCategory", {
    get: function () {
      return this._effectCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "effectGroup", {
    get: function () {
      return this._effectGroup;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEffectTypeVO;
}();
exports.CastleEffectTypeVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
