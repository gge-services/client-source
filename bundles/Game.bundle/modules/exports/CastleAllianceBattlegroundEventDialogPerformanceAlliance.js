Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogPerformanceAlliance(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.currentSorting = "";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).mainDialog = __s3param1;
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__s3local0.scrollListItemClass, __s3local0.scrollListItemAssetName, __dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME);
    __s3local1.itemPaddingY = 2;
    __s3local1.useSmoothScroll = true;
    __s3local0._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addMaskMc(__s3local0.subLayerDisp.mc_list.mc_mask).addSliderMc(__s3local0.subLayerDisp.mc_list.mc_slider).addItemContainerMc(__s3local0.subLayerDisp.mc_list.mc_items), __s3local1);
    __s3local0.subLayerDisp.mc_top_bg.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("ABG_AlliancePerformance_BG_" + __dep_export_ABGHelper.ABGHelper.skinName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_left, __s3local0.subLayerDisp.btn_right]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogPerformanceAlliance, __s1param0);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemAssetName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "sortTypes", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "defaultSortType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.show = function (__s13param0) {
    __s1param0.prototype.show.call(this, __s13param0);
    if (this.currentSorting == "") {
      this.currentSorting = this.defaultSortType;
    }
    this.subLayerDisp.mc_level.toolTipText = "level";
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("generic_playerName")));
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_right.actLikeButton = true;
    this.subLayerDisp.btn_left.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(1);
    this.subLayerDisp.btn_player.gotoAndStop(2);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    this.subLayerDisp.btn_right.mouseChildren = false;
    this.subLayerDisp.btn_left.mouseChildren = false;
    if (this.subLayerDisp.btn_tower) {
      if (this.subLayerDisp.btn_tower.txt_text) {
        this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
      } else if (this.subLayerDisp.btn_tower.txt_text1) {
        this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
      }
    }
    if (this.subLayerDisp.btn_alliance.txt_text) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    }
    if (this.subLayerDisp.btn_alliance.txt_text1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    }
    if (this.subLayerDisp.btn_player.txt_text) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    }
    if (this.subLayerDisp.btn_player.txt_text1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    }
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED, this.bindFunction(this.onInformationArrived));
    this.sendPerformanceCommand();
    this._scrollList.onShow();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.sendPerformanceCommand = function () {};
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.updateDialogElements = function () {};
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED, this.bindFunction(this.onInformationArrived));
    this._scrollList.onHide();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onInformationArrived = function (__s29param0) {
    this.alliancePerformanceVOs = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.alliancePerformanceVOs;
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.updateDialog = function () {
    this.updateItems();
    this.updateDialogElements();
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_top, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("topContributor_colon"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_top_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.alliancePerformanceVOs[0].playerName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_top_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.getPointsFromVO(this.alliancePerformanceVOs[0])));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, this.alliancePerformanceVOs[0].crestVO);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.updateItems = function () {
    var __s33local0 = [];
    this.sortPerformances();
    for (var __s33local1 = 0; __s33local1 < this.alliancePerformanceVOs.length; __s33local1++) {
      var __s33local2 = {
        vo: this.alliancePerformanceVOs[__s33local1],
        rank: __s33local1 + 1
      };
      __s33local2.points = this.getPointsFromVO(this.alliancePerformanceVOs[__s33local1]);
      __s33local0.push(__s33local2);
    }
    this._scrollList.updateWithNewData(__s33local0);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.sortPerformances = function () {};
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.getPointsFromVO = function (__s39param0) {
    return 0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onClick = function (__s41param0) {
    __s1param0.prototype.onClick.call(this, __s41param0);
    switch (__s41param0.target) {
      case this.subLayerDisp.btn_left:
        this.onClickLeft();
        break;
      case this.subLayerDisp.btn_right:
        this.onClickRight();
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onClickLeft = function () {
    var __s44local0 = __dep_exact_f855840627e6e145.int(this.sortTypes.indexOf(this.currentSorting));
    this.currentSorting = __s44local0 == 0 ? this.sortTypes[this.sortTypes.length - 1] : this.sortTypes[__s44local0 - 1];
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onClickRight = function () {
    var __s46local0 = __dep_exact_f855840627e6e145.int(this.sortTypes.indexOf(this.currentSorting));
    if (__s46local0 == this.sortTypes.length - 1) {
      this.currentSorting = this.sortTypes[0];
    } else {
      this.currentSorting = this.sortTypes[__s46local0 + 1];
    }
    this.updateDialog();
  };
  return CastleAllianceBattlegroundEventDialogPerformanceAlliance;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformanceAlliance = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
