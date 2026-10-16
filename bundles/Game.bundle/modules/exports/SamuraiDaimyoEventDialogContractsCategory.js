Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogContractsCategory(__s3param0, __s3param1) {
    var __s3local0;
    var __s3local1 = this;
    __s3local1._contractItems = [];
    __s3local1._currentSelectedIndex = -1;
    __s3local1._onContractSelected = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local1 = __s1param0.call(this, (__s3local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(SamuraiDaimyoEventDialogContractsCategory.ASSET_CLIP_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog.NAME))).currentshownDisplayObject, __s3param1) || this)._clip = __s3local0;
    __s3local1._contractType = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local1._headerMC, 1);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local1._headerMC.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s3param0 == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "contracts_daimyoCastle" : "contracts_township"))).autoFitToBounds = true;
    __s3local1._headerMC.mc_icon.gotoAndStop(__s3param0 == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? 1 : 2);
    return __s3local1;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogContractsCategory, __s1param0);
  SamuraiDaimyoEventDialogContractsCategory.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._clip = null;
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._contractItems != null) {
      for (var __s7local0 = 0, __s7local1 = this._contractItems; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this.updateItems();
    this.expand(true, false);
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onHide = function () {
    if (this._contractItems != null) {
      for (var __s13local0 = 0, __s13local1 = this._contractItems; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.updateItems = function () {
    this._contractItems = [];
    if (this._contractItems != null) {
      for (var __s19local0 = 0, __s19local1 = this._contractItems; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.destroy();
        }
      }
    }
    var __s19local3 = this.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.contractsCastles : __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.contractsTownships;
    var __s19local4 = 0;
    if (__s19local3 != null) {
      for (var __s19local5 = 0, __s19local6 = __s19local3; __s19local5 < __s19local6.length; __s19local5++) {
        var __s19local7 = __s19local6[__s19local5];
        if (__s19local7 !== undefined) {
          (__s19local2 = new __dep_export_SamuraiDaimyoEventDialogContractsItem.SamuraiDaimyoEventDialogContractsItem(this.contractType, __s19local7, this.bindFunction(this.onItemClicked))).onShow();
          this.disp.contentMC.addChild(__s19local2.disp);
          this._contractItems.push(__s19local2);
          __s19local2.disp.x = 0;
          __s19local2.disp.y = __s19local4;
          __s19local4 += __s19local2.disp.height + SamuraiDaimyoEventDialogContractsCategory.ITEM_PADDING_Y;
        }
      }
    }
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMaskFromMovieClip(this._contentMC, this._contentMC);
    this._contentMC.visible = true;
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.applyStateChange = function () {
    __s1param0.prototype.applyStateChange.call(this);
    this._headerMC.mc_arrow.gotoAndStop(this.isExpanded ? 2 : 1);
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.resetSelection = function () {
    this._currentSelectedIndex = -1;
    if (this._contractItems != null) {
      for (var __s31local0 = 0, __s31local1 = this._contractItems; __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined) {
          __s31local2.setSelection(false);
        }
      }
    }
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.getSelectedItem = function () {
    if (this._currentSelectedIndex >= 0) {
      return this._contractItems[this._currentSelectedIndex];
    } else {
      return null;
    }
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onClick = function (__s41param0) {
    __s1param0.prototype.onClick.call(this, __s41param0);
    if (__s41param0.target == this._headerMC) {
      this.expand(!this.isExpanded, false);
    }
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onItemClicked = function (__s44param0) {
    this._currentSelectedIndex = __dep_exact_f855840627e6e145.int(this._contractItems.indexOf(__s44param0));
    if (this._contractItems != null) {
      for (var __s44local0 = 0, __s44local1 = this._contractItems; __s44local0 < __s44local1.length; __s44local0++) {
        var __s44local2 = __s44local1[__s44local0];
        if (__s44local2 !== undefined) {
          __s44local2.setSelection(false);
        }
      }
    }
    __s44param0.setSelection(true);
    this._onContractSelected.dispatch(this);
  };
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "clip", {
    get: function () {
      return this._clip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "contractType", {
    get: function () {
      return this._contractType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "onContractSelected", {
    get: function () {
      return this._onContractSelected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "currentSelectedIndex", {
    get: function () {
      return this._currentSelectedIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "contractItems", {
    get: function () {
      return this._contractItems;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoEventDialogContractsCategory.ASSET_CLIP_NAME = "SamuraiDaimyoEvent_QuestItem";
  SamuraiDaimyoEventDialogContractsCategory.ITEM_PADDING_Y = 4;
  return SamuraiDaimyoEventDialogContractsCategory;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.SamuraiDaimyoEventDialogContractsCategory = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SamuraiDaimyoEventDialog = require("gge-module:export_SamuraiDaimyoEventDialog");
var __dep_export_SamuraiDaimyoEventDialogContractsItem = require("gge-module:export_SamuraiDaimyoEventDialogContractsItem");
