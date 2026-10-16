Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoEvent = require("gge-module:export_SamuraiDaimyoEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_SamuraiDaimyoEventDialogProperties = require("gge-module:export_SamuraiDaimyoEventDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionDialogDaimyoSublayer(__s3param0) {
    var __s3local0 = this;
    __s3local0._castles = [];
    __s3local0._townships = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionDialogDaimyoSublayer, __s1param0);
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_contracts, this.subLayerDisp.btn_ranking], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.subLayerDisp.btn_info, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_samuraiInvasionDaimyo_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_contracts.txt_text, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceContracts"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_ranking.txt_text, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceRanking"))).autoFitToBounds = true;
    this.subLayerDisp.mc_points.mouseChildren = false;
    this.subLayerDisp.mc_rank.mouseChildren = false;
    this.subLayerDisp.mc_points.toolTipText = "warEffortPoints";
    this.subLayerDisp.mc_rank.toolTipText = "warEffortRanking";
    this._tooltip = new __dep_export_CastleAllianceSamuraiInvasionDaimyoTooltip.CastleAllianceSamuraiInvasionDaimyoTooltip(this.subLayerDisp.mc_castleTooltip);
    this._castles = [];
    for (var __s5local0 = 0; __s5local0 < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++__s5local0) {
      this._castles.push(new __dep_export_CastleAllianceSamuraiInvasionDaimyoCastle.CastleAllianceSamuraiInvasionDaimyoCastle(this.subLayerDisp.getChildByName("mc_enemy" + __s5local0), this.bindFunction(this.onMouseOverArea), this.bindFunction(this.onMouseOutArea)));
    }
    this._townships = [];
    __s5local0 = 0;
    for (; __s5local0 < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++__s5local0) {
      this._townships.push(new __dep_export_CastleAllianceSamuraiInvasionDaimyoCastle.CastleAllianceSamuraiInvasionDaimyoCastle(this.subLayerDisp.getChildByName("mc_ally" + __s5local0), this.bindFunction(this.onMouseOverArea), this.bindFunction(this.onMouseOutArea)));
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._tooltip.onShow();
    if (this._castles != null) {
      for (var __s11local0 = 0, __s11local1 = this._castles; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          __s11local2.onShow();
        }
      }
    }
    for (var __s11local3 = 0, __s11local4 = this._townships; __s11local3 < __s11local4.length; __s11local3++) {
      (__s11local2 = __s11local4[__s11local3]).onShow();
    }
    this.updateRankInfos(true);
    this._tooltip.setVisibility(false);
    if (this._castles != null) {
      for (var __s11local5 = 0, __s11local6 = this._castles; __s11local5 < __s11local6.length; __s11local5++) {
        var __s11local7 = __s11local6[__s11local5];
        if (__s11local7 !== undefined) {
          __s11local7.setVisibility(false);
        }
      }
    }
    for (var __s11local8 = 0, __s11local9 = this._townships; __s11local8 < __s11local9.length; __s11local8++) {
      (__s11local7 = __s11local9[__s11local8]).setVisibility(false);
    }
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.requestGDW();
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.requestGDA();
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.requestGDC();
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._tooltip.onHide();
    if (this._castles != null) {
      for (var __s25local0 = 0, __s25local1 = this._castles; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          __s25local2.onHide();
        }
      }
    }
    for (var __s25local3 = 0, __s25local4 = this._townships; __s25local3 < __s25local4.length; __s25local3++) {
      (__s25local2 = __s25local4[__s25local3]).onHide();
    }
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_samuraiInvasionDaimyo_contestTab"));
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.updateRankInfos = function (__s35param0 = false) {
    if (__s35param0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_points.txt_text, new __dep_exact_92d05af59ee2ff30_3.TextVO("???"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rank.txt_text, new __dep_exact_92d05af59ee2ff30_3.TextVO("???"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_points.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.ownHighscorePoints));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rank.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.ownHighscoreRank));
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.updateAreas = function () {
    if (this._castles != null) {
      for (var __s39local0 = 0, __s39local1 = this._castles; __s39local0 < __s39local1.length; __s39local0++) {
        var __s39local2 = __s39local1[__s39local0];
        if (__s39local2 !== undefined) {
          __s39local2.setVisibility(true);
        }
      }
    }
    for (var __s39local3 = 0, __s39local4 = this._townships; __s39local3 < __s39local4.length; __s39local3++) {
      (__s39local2 = __s39local4[__s39local3]).setVisibility(true);
    }
    for (var __s39local5 = 0; __s39local5 < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++__s39local5) {
      this._castles[__s39local5].updateWithNewVO(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.castles[__s39local5]);
    }
    for (__s39local5 = 0; __s39local5 < CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE; ++__s39local5) {
      this._townships[__s39local5].updateWithNewVO(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.townships[__s39local5]);
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onClick = function (__s51param0) {
    __s1param0.prototype.onClick.call(this, __s51param0);
    switch (__s51param0.target) {
      case this.subLayerDisp.btn_contracts:
        __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog, new __dep_export_SamuraiDaimyoEventDialogProperties.SamuraiDaimyoEventDialogProperties(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog.TAB_CONTRACTS));
        break;
      case this.subLayerDisp.btn_ranking:
        __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog, new __dep_export_SamuraiDaimyoEventDialogProperties.SamuraiDaimyoEventDialogProperties(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog.TAB_RANKING));
        break;
      case this.subLayerDisp.btn_info:
        __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog, new __dep_export_SamuraiDaimyoEventDialogProperties.SamuraiDaimyoEventDialogProperties(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog.TAB_INFO));
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onDataUpdated = function (__s54param0) {
    this.updateRankInfos();
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onAreasUpdated = function (__s56param0) {
    this.updateAreas();
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onMouseOverArea = function (__s58param0) {
    this._tooltip.setVisibility(true);
    this._tooltip.updateWithNewData(__s58param0);
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onMouseOutArea = function (__s60param0) {
    this._tooltip.setVisibility(false);
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.prototype.onContractsUpdated = function (__s62param0) {
    if (this._tooltip.isVisible) {
      this._tooltip.update();
    }
  };
  CastleAllianceSamuraiInvasionDialogDaimyoSublayer.NUMBER_OF_CASTLES_PER_SIDE = 4;
  return CastleAllianceSamuraiInvasionDialogDaimyoSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceSamuraiInvasionDialogDaimyoSublayer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceSamuraiInvasionDaimyoCastle = require("gge-module:export_CastleAllianceSamuraiInvasionDaimyoCastle");
var __dep_export_CastleAllianceSamuraiInvasionDaimyoTooltip = require("gge-module:export_CastleAllianceSamuraiInvasionDaimyoTooltip");
var __dep_export_SamuraiDaimyoEventDialog = require("gge-module:export_SamuraiDaimyoEventDialog");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
