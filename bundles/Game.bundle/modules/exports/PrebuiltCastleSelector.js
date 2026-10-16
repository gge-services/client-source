Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function PrebuiltCastleSelector(__s3param0, __s3param1, __s3param2) {
    this._selectionIndex = 0;
    this.numberOfCastles = 0;
    this.spaceId = 0;
    this.disp = __s3param0;
    this.numberOfCastles = __s3param2;
    this.castleItemAssetName = __s3param1;
    this.camps = [];
    for (var __s3local0 = 0; __s3local0 < __s3param2; ++__s3local0) {
      var __s3local1 = __s3param0[__s3param1 + __s3local0];
      this.camps[__s3local0] = new __dep_export_PrebuiltCastleItem.PrebuiltCastleItem(__s3local1);
    }
  }
  PrebuiltCastleSelector.prototype.show = function (__s7param0) {
    this.spaceId = __s7param0;
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListAvailable));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
  };
  PrebuiltCastleSelector.prototype.onDetailedCastleListAvailable = function (__s9param0) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastles(this.spaceId);
    for (var __s9local1 = 0; __s9local1 < this.numberOfCastles; ++__s9local1) {
      this.camps[__s9local1].show(__s9local0[__s9local1]);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListAvailable));
  };
  PrebuiltCastleSelector.prototype.hide = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    for (var __s13local0 = 0; __s13local0 < this.numberOfCastles; ++__s13local0) {
      this.camps[__s13local0].hide();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListAvailable));
  };
  Object.defineProperty(PrebuiltCastleSelector.prototype, "selectionIndex", {
    get: function () {
      return this._selectionIndex;
    },
    set: function (__s19param0) {
      if (__s19param0 > this.numberOfCastles - 1 || __s19param0 < 0) {
        throw new Error("Selection must be 0.." + (this.numberOfCastles - 1) + ". Passed " + __s19param0);
      }
      this._selectionIndex = __s19param0;
      this.validateSelection();
      this.updateSelectionMark();
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleSelector.prototype.validateSelection = function () {
    for (var __s22local0 = 0, __s22local1 = __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastles(this.spaceId); __s22local1[this._selectionIndex].minLevel > __dep_export_CastleModel.CastleModel.userData.level && __s22local0 <= this.numberOfCastles;) {
      __s22local0++;
      this._selectionIndex = __dep_exact_f855840627e6e145.int((this._selectionIndex + 1) % this.numberOfCastles);
    }
    if (__s22local0 >= this.numberOfCastles) {
      throw new Error("No castle is selectable by the user. How did we even end up in this dialog then?");
    }
  };
  Object.defineProperty(PrebuiltCastleSelector.prototype, "selectionData", {
    get: function () {
      return this.camps[this._selectionIndex].castleItemVO;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleSelector.prototype.updateSelectionMark = function () {
    for (var __s29local0 = 0; __s29local0 < this.numberOfCastles; ++__s29local0) {
      this.camps[__s29local0].selected = __s29local0 == this._selectionIndex;
    }
  };
  PrebuiltCastleSelector.prototype.onClick = function (__s33param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      for (var __s33local0 = 0; __s33local0 < this.numberOfCastles; ++__s33local0) {
        if (__s33param0.target == this.disp[this.castleItemAssetName + __s33local0]) {
          this.selectionIndex = __s33local0;
          return;
        }
      }
    }
  };
  return PrebuiltCastleSelector;
}();
exports.PrebuiltCastleSelector = __s0local1;
var __dep_export_PrebuiltCastleItem = require("gge-module:export_PrebuiltCastleItem");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
