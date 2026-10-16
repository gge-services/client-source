Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __dep_export_AVisualVO = require("gge-module:export_AVisualVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AIsoObjectVO() {
    var __s3local0 = this;
    __s3local0._objectType = __dep_export_IsoObjectEnum.IsoObjectEnum.UNKNOWN;
    __s3local0._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.NONE;
    __s3local0._rotation = 0;
    __s3local0._x2 = 0;
    __s3local0._y2 = 0;
    __s3local0._width = 1;
    __s3local0._height = 1;
    __s3local0._walkmap = [];
    __s3local0._walkmapOffset = new __s0local0(0, 0);
    __s3local0._spawnPoints = [];
    __s3local0._isMovable = false;
    __s3local0._inDistrictID = 0;
    __s3local0._districtSlotID = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoObjectVO, __s1param0);
  AIsoObjectVO.prototype.init = function (__s5param0 = null) {
    this._isoData = __s5param0;
    if (this._objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.UNKNOWN) {
      this._objectType = __dep_export_IsoObjectEnum.IsoObjectEnum.getTypeByDataClass(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this));
    }
  };
  AIsoObjectVO.prototype.update = function (__s8param0) {};
  AIsoObjectVO.prototype.updateData = function () {
    this.updateBounds();
    this.updateWalkmap();
    this.updateSpawnPoints();
  };
  AIsoObjectVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
  };
  AIsoObjectVO.prototype.updateWalkmap = function () {
    this._walkmap = __dep_export_IsoHelper.IsoHelper.walkmap.createWalkmapFullBlocked(this.dimension);
  };
  AIsoObjectVO.prototype.updateBounds = function () {
    if (this._rotation % 2 == 0) {
      this._x2 = __dep_exact_f855840627e6e145.int(this._x + this._width - 1);
      this._y2 = __dep_exact_f855840627e6e145.int(this._y + this._height - 1);
    } else {
      this._x2 = __dep_exact_f855840627e6e145.int(this._x + this._height - 1);
      this._y2 = __dep_exact_f855840627e6e145.int(this._y + this._width - 1);
    }
  };
  AIsoObjectVO.prototype.rotate = function () {
    var __s20local0 = 0;
    switch (this.rotationType) {
      case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir:
        __s20local0 = this.rotation == 0 ? 1 : 0;
        break;
      case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir:
      case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._4FramesFor4Dir:
      case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._4GfxFor4Dir:
        if ((__s20local0 = this.rotation - 1) < 0) {
          __s20local0 = 3;
        }
    }
    this.rotation = __s20local0;
  };
  AIsoObjectVO.prototype.parseXmlNode = function (__s24param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s24param0);
    this._rotationType = __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.getTypeById(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rotateType", __s24param0, 2));
    this._width = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("width", __s24param0));
    this._height = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("height", __s24param0));
    this._isMovable = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isMovable", __s24param0, true);
  };
  AIsoObjectVO.prototype.parseServerObject = function (__s26param0) {
    __s1param0.prototype.parseServerObject.call(this, __s26param0);
    this._inDistrictID = __dep_exact_f855840627e6e145.int(__s26param0[10]);
    this._districtSlotID = __dep_exact_f855840627e6e145.int(__s26param0[11]);
    var __s26local0 = __dep_exact_f855840627e6e145.int(__s26param0.shift());
    this.rotation = __dep_exact_f855840627e6e145.int(this.isInBuildingDistrict ? 1 : __s26local0);
  };
  AIsoObjectVO.prototype.cloneFrom = function (__s28param0) {
    this._rotation = __s28param0._rotation;
    this.updateData();
  };
  AIsoObjectVO.prototype.getAreaKingdomName = function () {
    var __s30local0 = 0;
    var __s30local1 = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE;
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.areaInfo) {
      __s30local0 = this.isoData.areaData.areaInfo.kingdomID;
      __s30local1 = this.isoData.areaData.areaInfo.areaType;
    }
    return __dep_export_IsoHelper.IsoHelper.data.getAreaKingdomName(__s30local0, __s30local1);
  };
  Object.defineProperty(AIsoObjectVO.prototype, "canBeRotated", {
    get: function () {
      return this._rotationType != __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.NONE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "usesColorFourCrest", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "wodDataType", {
    get: function () {
      return __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AVisualVO.AVisualVO.prototype, "wodDataType").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVO.prototype.getViewClass = function () {
    if (this.objectType) {
      return this.objectType.viewClass;
    } else {
      return null;
    }
  };
  AIsoObjectVO.prototype.getInfoTooltipLine1 = function () {
    return "";
  };
  AIsoObjectVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  AIsoObjectVO.prototype.getInfoTooltipLine3 = function () {
    return "";
  };
  Object.defineProperty(AIsoObjectVO.prototype, "rotatedWidth", {
    get: function () {
      if (this._rotation % 2 == 0) {
        return this._width;
      } else {
        return this._height;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "rotatedHeight", {
    get: function () {
      if (this._rotation % 2 == 0) {
        return this._height;
      } else {
        return this._width;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "rotation", {
    get: function () {
      return this._rotation;
    },
    set: function (__s61param0) {
      if (__s61param0 != this._rotation) {
        this._rotation = __s61param0;
        this.updateData();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "x2", {
    get: function () {
      return this._x2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "y2", {
    get: function () {
      return this._y2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (__s70param0) {
      this._width = __s70param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    set: function (__s74param0) {
      this._height = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isMovable", {
    get: function () {
      return this._isMovable;
    },
    set: function (__s78param0) {
      this._isMovable = __s78param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "walkmap", {
    get: function () {
      return this._walkmap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "rotationType", {
    get: function () {
      return this._rotationType;
    },
    set: function (__s84param0) {
      this._rotationType = __s84param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isoData", {
    get: function () {
      return __dep_export_Iso.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "spawnPoints", {
    get: function () {
      return this._spawnPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "dimension", {
    get: function () {
      return new __s0local0(this.rotatedWidth, this.rotatedHeight);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isOwnArea", {
    get: function () {
      return !!this.isoData && !!this.isoData.areaData && !!this.isoData.areaData.areaInfo && this.isoData.areaData.areaInfo.isOwnMapobject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "walkmapOffset", {
    get: function () {
      return this._walkmapOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "inDistrictID", {
    get: function () {
      return this._inDistrictID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isInBuildingDistrict", {
    get: function () {
      return this._inDistrictID > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "districtSlotID", {
    get: function () {
      return this._districtSlotID;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVO.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._isoData = null;
  };
  return AIsoObjectVO;
}(__dep_export_AVisualVO.AVisualVO);
exports.AIsoObjectVO = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
