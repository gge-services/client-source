Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_KingdomCrestsAndSymbolsHelper = require("gge-module:export_KingdomCrestsAndSymbolsHelper");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceLandmarksDialogItemRenderer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.btn_jumpTo.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s3param0.btn_jumpTo, true);
    __s3param0.mc_userName.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s3param0.mc_userName, true);
    __s3local0._defaultHolderPosition = new __s0local0(__s3param0.mc_castleHolder.x, __s3param0.mc_castleHolder.y);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceLandmarksDialogItemRenderer, __s1param0);
  CastleAllianceLandmarksDialogItemRenderer.prototype.onClick = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      switch (__s5param0.target) {
        case this.disp.mc_userName:
          if (this._worldmapObjectVO && this._worldmapObjectVO.ownerInfo && this._worldmapObjectVO.ownerInfo.playerID > 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this._worldmapObjectVO.ownerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.disp.btn_jumpTo:
          this.onJumpTo();
      }
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.onJumpTo = function () {
    if (this.isKingstower || this.isMonument || this.isLaboratory) {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.worldmapObjectVO.kingdomID, this.worldmapObjectVO.absAreaPos.x, this.worldmapObjectVO.absAreaPos.y]);
    } else {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, this.worldmapObjectVO);
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.hasCastleInKingdom = function (__s14param0) {
    var __s14local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getFilteredList(__s14param0);
    return !!__s14local0 && __s14local0.length > 0;
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateDisp = function () {
    if (this.worldmapObjectVO && this.worldmapObjectVO.ownerInfo) {
      this.disp.visible = true;
      this.updateTexts();
      this.updateCastleIcon();
      this.updateKingdomIcon();
      this.updateJumpToButton();
    } else {
      this.disp.visible = false;
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateJumpToButton = function () {
    this.disp.btn_jumpTo.gotoAndStop(this.neededFrame);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_jumpTo, this.hasCastleInKingdom(this.worldmapObjectVO.kingdomID));
    this.setTooltip(this.disp.btn_jumpTo);
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.setTooltip = function (__s22param0) {
    __s22param0.toolTipText = this.getTooltip();
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.getTooltip = function () {
    if (this.hasCastleInKingdom(this.worldmapObjectVO.kingdomID)) {
      if (this.isKingstower) {
        return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("tooltip_visit_kingtower");
      } else if (this.isMonument) {
        return "tooltip_visit_monument";
      } else if (this.isLaboratory) {
        return "tooltip_visit_laboratory";
      } else if (this.isMetropol) {
        return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("panel_action_jumpToMetropol");
      } else if (this.isCapital) {
        return "panel_action_jumpToCapital";
      } else {
        return __dep_exact_92d05af59ee2ff30_1.Localize.text("panel_action_jumpTo", [this.worldmapObjectVO.areaNameString]);
      }
    } else {
      return "not_unlocked";
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateTexts = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_userName.txt_userName, new __dep_exact_92d05af59ee2ff30.TextVO(this.worldmapObjectVO.ownerInfo.playerName));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO("" + this.worldmapObjectVO.ownerInfo.playerLevel));
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateCastleIcon = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_castleHolder);
    var __s36local0 = __dep_exact_92d05af59ee2ff30_1.Localize.text(this.getTooltip());
    this.disp.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.worldmapObjectVO, new __s0local0(85, 70), true, false, true, __s36local0));
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "KingstowerMapobjectVO")) {
      this.disp.mc_castleHolder.x = this._defaultHolderPosition.x - 7;
    } else {
      this.disp.mc_castleHolder.x = this._defaultHolderPosition.x;
    }
  };
  CastleAllianceLandmarksDialogItemRenderer.prototype.updateKingdomIcon = function () {
    var __s40local0 = null;
    switch (this.worldmapObjectVO.kingdomID) {
      case __dep_exact_26a421b704832cff_3.WorldClassic.KINGDOM_ID:
        __s40local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdomName_Classic");
        break;
      case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
        __s40local0 = "kingdomName_Icecream";
        break;
      case __dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID:
        __s40local0 = "kingdomName_Dessert";
        break;
      case __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID:
        __s40local0 = "kingdomName_Volcano";
    }
    __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addCrestToMC(this.disp.mc_kingdom, this.worldmapObjectVO.kingdomID, new __s0local0(48, 48));
    this.disp.mc_kingdom.toolTipText = __s40local0;
  };
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "neededFrame", {
    get: function () {
      if (this.isKingstower) {
        return 2;
      } else if (this.isMonument) {
        return 3;
      } else if (this.isLaboratory) {
        return 4;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isKingstower", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "KingstowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isMonument", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "MonumentMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isLaboratory", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "LaboratoryMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isMetropol", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "isCapital", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceLandmarksDialogItemRenderer.prototype, "worldmapObjectVO", {
    get: function () {
      return this._worldmapObjectVO;
    },
    set: function (__s61param0) {
      this._worldmapObjectVO = __s61param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceLandmarksDialogItemRenderer;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleAllianceLandmarksDialogItemRenderer = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
