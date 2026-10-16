Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CheatBotCollectionDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatBotCollectionDialogItem, __s1param0);
  CheatBotCollectionDialogItem.prototype.fill = function () {
    this.itemMc.mouseChildren = false;
    this.itemMc.actLikeButton = true;
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.itemMc, 1.05, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.headerMC.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.name)).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.headerMC.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(this.description)).autoFitToBounds = true;
  };
  CheatBotCollectionDialogItem.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    new this.command().execute();
  };
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "name", {
    get: function () {
      return this.data.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "description", {
    get: function () {
      return this.data.description;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CheatBotCollectionDialogItem.prototype, "command", {
    get: function () {
      return this.data.command;
    },
    enumerable: true,
    configurable: true
  });
  return CheatBotCollectionDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CheatBotCollectionDialogItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
