Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AreaDataModel() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataModel, __s1param0);
  AreaDataModel.prototype.reset = function () {
    if (this._activeArea) {
      this._activeArea.destroy();
      this._activeArea = null;
    }
  };
  AreaDataModel.prototype.addArea = function (__s8param0) {
    if (this._activeArea) {
      this._activeArea.destroy();
    }
    this._activeArea = __s8param0;
  };
  AreaDataModel.prototype.changePosOfOwnArea = function (__s11param0) {
    this._activeArea.areaInfo.absAreaPosX = __s11param0.x;
    this._activeArea.areaInfo.absAreaPosY = __s11param0.y;
  };
  Object.defineProperty(AreaDataModel.prototype, "activeArea", {
    get: function () {
      return this._activeArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeAreaInfo", {
    get: function () {
      if (this.activeArea) {
        return this.activeArea.areaInfo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeOwnerInfo", {
    get: function () {
      if (this.activeArea && this.activeArea.areaInfo) {
        return this.activeArea.areaInfo.ownerInfo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeIsoData", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.ISO_DATA);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeCommonInfo", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.COMMON_INFO);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeStorage", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.STORAGE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeMorality", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.MORALITY);
    },
    enumerable: true,
    configurable: true
  });
  AreaDataModel.prototype.getActiveStorageItem = function (__s31param0) {
    if (this.activeStorage) {
      return this.activeStorage.getItem(__s31param0);
    } else {
      return null;
    }
  };
  Object.defineProperty(AreaDataModel.prototype, "activeConstructionList", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.CONSTRUCTION_LIST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeConstructionItems", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.CONSTRUCTION_ITEMS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataModel.prototype, "activeSlum", {
    get: function () {
      return this.getActiveDataSave(__dep_export_AreaDataEnum.AreaDataEnum.SLUM);
    },
    enumerable: true,
    configurable: true
  });
  AreaDataModel.prototype.getActiveDataSave = function (__s41param0) {
    var __s41local0 = this.activeArea;
    if (__s41local0) {
      return __s41local0.getData(__s41param0);
    } else {
      return null;
    }
  };
  return AreaDataModel;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.AreaDataModel = __s0local0;
var __dep_export_AreaDataEnum = require("gge-module:export_AreaDataEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
