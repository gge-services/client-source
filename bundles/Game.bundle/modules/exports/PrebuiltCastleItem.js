Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function PrebuiltCastleItem(__s3param0) {
    this._selected = false;
    this.backgroundFrame = 0;
    this._collectableRenderList = [];
    this._selected = false;
    this._disp = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0);
    __s3param0.mouseChildren = false;
    PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_costsFree, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("free"));
    PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_costs2.txt_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost"));
    PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_costs4.txt_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost"));
    this._txt_discount = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE));
    this._txt_ribbon = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_ribbon, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._txt_title = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._txt_info = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_contentsBig, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._txt_lock = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_lock.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
  }
  Object.defineProperty(PrebuiltCastleItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItem.prototype, "castleItemVO", {
    get: function () {
      return this._castleItemVO;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItem.prototype.show = function (__s9param0) {
    this._castleItemVO = __s9param0;
    this.updatePicture();
    this.updateBackground();
    this.updateRibbon();
    this.updateCampDescription();
    this.updateCosts();
    this.updateDiscount();
    this.updateLock();
    this.updateTooltip();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  PrebuiltCastleItem.prototype.hide = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.destroyCollectableRenderList();
  };
  PrebuiltCastleItem.prototype.onLevelUp = function (__s13param0) {
    this.updateLock();
    this.updateTooltip();
  };
  PrebuiltCastleItem.prototype.updateDiscount = function () {
    this._disp.mc_discount.visible = this._castleItemVO.shownDiscount > 0 && this._castleItemVO.isPremium();
    this._txt_discount.textContentVO.textReplacements = [this._castleItemVO.shownDiscount];
  };
  PrebuiltCastleItem.prototype.updateLock = function () {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this._disp);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp, !this.isLocked());
    this._disp.mc_lock.visible = this.isLocked();
    if (this._txt_lock.textContentVO) {
      this._txt_lock.textContentVO.numberValue = this._castleItemVO.minLevel;
    }
    this._disp.doCache();
  };
  PrebuiltCastleItem.prototype.updateTooltip = function () {
    if (this.isLocked()) {
      this._disp.toolTipText = {
        t: "dialog_kingdomteaser_copy4_v2",
        p: [this._castleItemVO.minLevel]
      };
    } else if (this._selected) {
      this._disp.toolTipText = "dialog_kingdomStart_prebuiltCastle_chooseCastle_selected_tooltip";
    } else {
      this._disp.toolTipText = "dialog_kingdomStart_prebuiltCastle_chooseCastle_unselected_tooltip";
    }
  };
  PrebuiltCastleItem.prototype.isLocked = function () {
    return __dep_export_CastleModel.CastleModel.userData.level < this._castleItemVO.minLevel;
  };
  PrebuiltCastleItem.prototype.updatePicture = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this._disp.mc_picture);
    var __s27local0 = "PrebuiltCastlePicture_" + this._castleItemVO.id;
    var __s27local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s27local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s27local0));
    __s27local1.recycleAsset = false;
    __s27local1.doWhenLoaded(this.bindFunction(this.onLoaded));
    this._disp.mc_picture.addChild(__s27local1.asDisplayObject());
  };
  PrebuiltCastleItem.prototype.onLoaded = function (__s29param0 = null) {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this._disp);
    this._disp.doCache();
  };
  PrebuiltCastleItem.prototype.updateBackground = function () {
    this.backgroundFrame = __dep_exact_f855840627e6e145.int(PrebuiltCastleItem.setBit(this.backgroundFrame, PrebuiltCastleItem.BACKGROUND_FRAME_GOLDEN_BIT, this._castleItemVO.isPremium()));
    this._disp.mc_bg.gotoAndStop(this.backgroundFrame + 1);
  };
  PrebuiltCastleItem.prototype.updateRibbon = function () {
    var __s33local0;
    if (this._castleItemVO.isFree()) {
      __s33local0 = "dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree";
      this._disp.mc_ribbon.gotoAndStop(PrebuiltCastleItem.RIBBON_FRAME_DEFAULT);
    } else if (this._castleItemVO.isPremium()) {
      __s33local0 = "dialog_kingdomStart_prebuiltCastle_chooseCastle_premiumHeader";
      this._disp.mc_ribbon.gotoAndStop(PrebuiltCastleItem.RIBBON_FRAME_GOLDEN);
    } else {
      __s33local0 = "";
      this._disp.mc_ribbon.gotoAndStop(PrebuiltCastleItem.RIBBON_FRAME_NONE);
    }
    if (this._txt_ribbon.textContentVO) {
      this._txt_ribbon.textContentVO.textId = __s33local0;
    }
  };
  PrebuiltCastleItem.prototype.updateCosts = function () {
    var __s39local0 = __dep_exact_f855840627e6e145.int(this._castleItemVO.primaryCosts.length);
    if (__s39local0 > 4) {
      throw new Error("The asset can only display up to four resources. The PrebuiltCastle " + this._castleItemVO.id + " has more.");
    }
    this.destroyCollectableRenderList();
    this._disp.txt_costsFree.visible = !__s39local0;
    this._disp.mc_costs2.visible = __s39local0 < 3;
    this._disp.mc_costs4.visible = __s39local0 > 2;
    if (__s39local0) {
      var __s39local1 = __s39local0 > 2;
      this.backgroundFrame = __dep_exact_f855840627e6e145.int(PrebuiltCastleItem.setBit(this.backgroundFrame, PrebuiltCastleItem.BACKGROUND_FRAME_4PRICE_BIT, __s39local1));
      this._disp.mc_bg.gotoAndStop(this.backgroundFrame + 1);
      var __s39local2 = __s39local1 ? this._disp.mc_costs4 : this._disp.mc_costs2;
      for (var __s39local3 = __dep_exact_f855840627e6e145.int(__s39local1 ? 4 : 2), __s39local4 = 0; __s39local4 < __s39local3; ++__s39local4) {
        var __s39local5 = __s39local2["mc_res" + __s39local4];
        var __s39local6 = this._castleItemVO.primaryCosts.getItemByIndexSave(__s39local4);
        __s39local5.visible = __s39local6 != null;
        if (__s39local6) {
          this.renderCost(__s39local6, __s39local5);
        }
      }
    }
  };
  PrebuiltCastleItem.setBit = function (__s46param0, __s46param1, __s46param2) {
    return (__s46param0 | 1 << __s46param1) ^ (__s46param2 ? 0 : 1) << __s46param1;
  };
  PrebuiltCastleItem.prototype.renderCost = function (__s48param0, __s48param1) {
    var __s48local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s48local0.addItemMc(__s48param1);
    __s48local0.addIconMc(__s48param1.mc_icon);
    __s48local0.addTextfield(__s48param1.txt_value);
    var __s48local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    var __s48local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, PrebuiltCastleItem.RESOURCE_COST_SIZE);
    __s48local2.costTextfield.useOtherResourceStorage = __s48local1.getResourcesAsCollectableList();
    var __s48local3 = new __dep_export_CollectableRenderer.CollectableRenderer(__s48local0, __s48local2);
    __s48local3.updateWithNewVO(__s48param0);
    this._collectableRenderList.push(__s48local3);
  };
  PrebuiltCastleItem.prototype.updateCampDescription = function () {
    var __s50local0 = "dialog_prebuiltCastle" + this._castleItemVO.id + "_info";
    var __s50local1 = "dialog_prebuiltCastle" + this._castleItemVO.id + "_name";
    if (this._txt_title.textContentVO) {
      this._txt_title.textContentVO.textId = __s50local1;
    }
    if (this._txt_info.textContentVO) {
      this._txt_info.textContentVO.textId = __s50local0;
    }
  };
  Object.defineProperty(PrebuiltCastleItem.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (__s56param0) {
      this._selected = __s56param0;
      this._disp.mc_selectionMark.visible = this._selected;
      if (this.castleItemVO) {
        this.updateTooltip();
      }
      this.onLoaded();
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList != null) {
      for (var __s59local0 = 0, __s59local1 = this._collectableRenderList; __s59local0 < __s59local1.length; __s59local0++) {
        var __s59local2 = __s59local1[__s59local0];
        if (__s59local2 !== undefined) {
          __s59local2.destroy();
        }
      }
    }
    this._collectableRenderList = [];
  };
  PrebuiltCastleItem.__initialize_static_members = function () {
    PrebuiltCastleItem.RIBBON_FRAME_NONE = 1;
    PrebuiltCastleItem.RIBBON_FRAME_DEFAULT = 2;
    PrebuiltCastleItem.RIBBON_FRAME_GOLDEN = 3;
    PrebuiltCastleItem.BACKGROUND_FRAME_GOLDEN_BIT = 0;
    PrebuiltCastleItem.BACKGROUND_FRAME_4PRICE_BIT = 1;
    PrebuiltCastleItem.RESOURCE_COST_SIZE = new __s0local0(18, 18);
  };
  return PrebuiltCastleItem;
}();
exports.PrebuiltCastleItem = __s0local1;
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__s0local1.__initialize_static_members();
