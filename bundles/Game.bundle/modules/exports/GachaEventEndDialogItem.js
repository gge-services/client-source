Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaEventEndDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaEventEndDialogItem, __s1param0);
  GachaEventEndDialogItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_empty.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("noRewards"));
    this._itxt_type = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_type, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  };
  GachaEventEndDialogItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    if (this.rank > 0) {
      this._itxt_type.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("yourRankingPlaceholder", [this.rank]);
    } else {
      this._itxt_type.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_dailyQuests_questPoints", [this.currentScore]);
    }
    if (this.rewards.length <= 0) {
      this.getItemMc().mc_empty.visible = true;
    } else {
      this.getItemMc().mc_empty.visible = false;
      var __s7local0 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.getItemMc(), "mc_item");
      var __s7local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(65, 65));
      __s7local0.addItemMcs("mc_item").addInfoBtns("parent.btn_info").addIconMcs("mc_item.mc_icon").addTextfields("mc_item.txt_text").addTextfieldBgMcs("mc_item.mc_textBackground").addBuildingLevelMc("mc_item.mc_buildingLevel");
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, __s7local0, this.rewards, __s7local1, this.bindFunction(this.afterRenderFunc));
    }
  };
  GachaEventEndDialogItem.prototype.afterRenderFunc = function (__s13param0) {
    var __s13local0 = __s13param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
    if (__s13param0.itemVO && __s13param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.BUILDING) {
      __s13local0.transform.offset.y = -3;
    }
    if (__s13param0.itemVO && __s13param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE) {
      __s13local0.transform.offset.y = 0;
    }
  };
  Object.defineProperty(GachaEventEndDialogItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaEventEndDialogItem.prototype, "rank", {
    get: function () {
      return this.data.rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaEventEndDialogItem.prototype, "currentScore", {
    get: function () {
      return this.data.score;
    },
    enumerable: true,
    configurable: true
  });
  return GachaEventEndDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.GachaEventEndDialogItem = __s0local1;
