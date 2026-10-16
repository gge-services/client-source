Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function SlumSurroundingsVE() {
    var __s3local0 = this;
    __s3local0._slumParts = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumSurroundingsVE, __s1param0);
  SlumSurroundingsVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.dispComponent.cacheDisp = false;
  };
  SlumSurroundingsVE.prototype.addGlow = function () {
    if (this.slumParts != null) {
      for (var __s7local0 = 0, __s7local1 = this.slumParts; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.addGlow();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.getLocalDispPosTopCenter = function () {
    return new __s0local1(-1500, this.dispLayerBounds.top);
  };
  SlumSurroundingsVE.prototype.removeGlow = function () {
    if (this.slumParts != null) {
      for (var __s15local0 = 0, __s15local1 = this.slumParts; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.removeGlow();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onSlumLevelChanged));
  };
  SlumSurroundingsVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onSlumLevelChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SlumSurroundingsVE.prototype.createDisp = function () {
    var __s25local0 = new __s0local0();
    for (var __s25local1 = 0, __s25local2 = this.slumVO.slumParts; __s25local1 < __s25local2.length; __s25local1++) {
      var __s25local3 = __s25local2[__s25local1];
      if (__s25local3 !== undefined) {
        var __s25local4;
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25local3, "SlumBuildingPartBuildingVO")) {
          __s25local4 = new __dep_export_SlumBuildingPartBuildingVE.SlumBuildingPartBuildingVE();
        } else {
          if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25local3, "SlumBuildingPartCharacterVO")) {
            continue;
          }
          __s25local4 = new __dep_export_SlumBuildingPartCharacterVE.SlumBuildingPartCharacterVE();
        }
        __s25local4.init(__s25local3);
        __s25local4.parentVE = this;
        __s25local4.updateDisp();
        __s25local0.addChild(__s25local4.elementContainer);
        this.slumParts.push(__s25local4);
      }
    }
    __dep_export_IsoHelper.IsoHelper.zSort.sortObjects(this.slumParts, __s25local0);
    this.dispComponent.addDisp(__s25local0);
  };
  SlumSurroundingsVE.prototype.destroyDisp = function () {
    if (this.slumParts != null) {
      for (var __s33local0 = 0, __s33local1 = this.slumParts; __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2 !== undefined) {
          __s33local2.destroy();
        }
      }
    }
    this._slumParts.length = 0;
    __s1param0.prototype.destroyDisp.call(this);
  };
  SlumSurroundingsVE.prototype.onMouseClick = function () {
    if (this.slumVO.slumLevel == 0) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleSlumDonateCharacterDialog.CastleSlumDonateCharacterDialog);
    } else {
      switch (this.slumVO.kingdomId) {
        case __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleDessertSlumPackageDialog.CastleDessertSlumPackageDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(null));
          break;
        case __dep_exact_26a421b704832cff_2.WorldVolcano.KINGDOM_ID:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleVolcanoSlumPackageDialog.CastleVolcanoSlumPackageDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(null));
          break;
        case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleIcecreamSlumPackageDialog.CastleIcecreamSlumPackageDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(null));
      }
    }
  };
  SlumSurroundingsVE.prototype.onSlumLevelChanged = function (__s44param0) {
    if (this.slumVO.kingdomId != __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      this.updateDisp();
    }
  };
  Object.defineProperty(SlumSurroundingsVE.prototype, "slumParts", {
    get: function () {
      return this._slumParts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVE.prototype, "slumVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  SlumSurroundingsVE.prototype.preCacheGlow = function () {
    if (this.slumParts != null) {
      for (var __s51local0 = 0, __s51local1 = this.slumParts; __s51local0 < __s51local1.length; __s51local0++) {
        var __s51local2 = __s51local1[__s51local0];
        if (__s51local2 !== undefined) {
          __s51local2.preCacheGlow();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.onCameraZoomChanged = function () {
    __s1param0.prototype.onCameraZoomChanged.call(this);
    if (this.slumParts != null) {
      for (var __s57local0 = 0, __s57local1 = this.slumParts; __s57local0 < __s57local1.length; __s57local0++) {
        var __s57local2 = __s57local1[__s57local0];
        if (__s57local2 !== undefined) {
          __s57local2.onCameraZoomChanged();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.needsReCache = function (__s63param0) {
    if (this._slumParts.length > 0) {
      var __s63local0 = this._slumParts[0].dispComponent.dispContainer;
      return __s63local0.children.length > 0 && __s63local0._cacheScale !== __s63param0;
    }
    return false;
  };
  return SlumSurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.SlumSurroundingsVE = __s0local2;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleSlumDonateCharacterDialog = require("gge-module:export_CastleSlumDonateCharacterDialog");
var __dep_export_CastleDessertSlumPackageDialog = require("gge-module:export_CastleDessertSlumPackageDialog");
var __dep_export_CastleIcecreamSlumPackageDialog = require("gge-module:export_CastleIcecreamSlumPackageDialog");
var __dep_export_CastleVolcanoSlumPackageDialog = require("gge-module:export_CastleVolcanoSlumPackageDialog");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_SlumBuildingPartBuildingVE = require("gge-module:export_SlumBuildingPartBuildingVE");
var __dep_export_SlumBuildingPartCharacterVE = require("gge-module:export_SlumBuildingPartCharacterVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IIngameUICapable");
