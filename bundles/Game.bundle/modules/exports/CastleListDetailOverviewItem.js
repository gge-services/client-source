Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_KingdomCrestsAndSymbolsHelper = require("gge-module:export_KingdomCrestsAndSymbolsHelper");
var __dep_export_CastleUpgradeLaboratoryDialogProperties = require("gge-module:export_CastleUpgradeLaboratoryDialogProperties");
var __dep_export_CastleUpgradeLandmarkDialogProperties = require("gge-module:export_CastleUpgradeLandmarkDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleListDetailOverviewItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_castleName = __s3local0.textFieldManager.registerTextField(__s3param0.mc_castle.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_castleName.autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewItem, __s1param0);
  CastleListDetailOverviewItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.itxt_castleName.textContentVO.stringValue = this.wmo.areaNameString;
    __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addCrestToMC(this.disp.mc_castle.mc_kingdomCrest, this.wmo.kingdomID, new __s0local0(52, 52));
    this.disp.mc_castle.mc_kingdomCrest.gotoAndStop(this.wmo.kingdomID + 1);
    this.updateVisitButton();
    this.updateCastleIcon();
  };
  CastleListDetailOverviewItem.prototype.updateVisitButton = function () {
    this.disp.btn_visitCastle.visible = !this.isKingstower && (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP || this.wmo.objectId != __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId || this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP);
    this.disp.btn_visitCastle.gotoAndStop(this.isLaboratory ? 3 : this.isMonument ? 2 : 1);
    this.disp.btn_visitCastle.mouseChildren = false;
    if (this.isMonument) {
      this.disp.btn_visitCastle.toolTipText = "dialog_monument_upgradeMonument_title";
    } else if (this.isLaboratory) {
      this.disp.btn_visitCastle.toolTipText = "dialog_laboratory_upgradeLaboratory_title";
    } else {
      this.disp.btn_visitCastle.toolTipText = "ringmenu_visit_castle";
    }
  };
  CastleListDetailOverviewItem.prototype.updateCastleIcon = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.disp.mc_castle.castleHolder);
    var __s12local0 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.wmo, new __s0local0(60, 60));
    __s12local0.toolTipText = __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30_1.Localize.text("Bookmarks_Menu_jumpTo_copy"), this.wmo.areaNameString]);
    this.disp.mc_castle.castleHolder.addChild(__s12local0);
  };
  CastleListDetailOverviewItem.prototype.onMouseClick = function (__s14param0) {
    __s1param0.prototype.onMouseClick.call(this, __s14param0);
    switch (__s14param0.target) {
      case this.disp.btn_visitCastle:
        if (this.isMonument) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleUpgradeLandmarkDialog.CastleUpgradeLandmarkDialog, new __dep_export_CastleUpgradeLandmarkDialogProperties.CastleUpgradeLandmarkDialogProperties(this.wmo));
        } else if (this.isLaboratory) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleUpgradeLandmarkDialog.CastleUpgradeLandmarkDialog, new __dep_export_CastleUpgradeLaboratoryDialogProperties.CastleUpgradeLaboratoryDialogProperties(this.wmo));
        } else if (!this.isKingstower) {
          __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, this.wmo);
        }
    }
  };
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "isKingstower", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "KingstowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "isMonument", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "MonumentMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "isLaboratory", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.wmo, "LaboratoryMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "wmo", {
    get: function () {
      return this.castleDetailScrollItemVO.wmoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "castleDetailScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleListDetailOverviewItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastleListDetailOverviewItem = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleUpgradeLandmarkDialog = require("gge-module:export_CastleUpgradeLandmarkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
