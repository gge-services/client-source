Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function BetaTestNewsItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("BetaTestNewsItemMC"))(), __s3param0) || this;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_news_title_" + __s3local0.itemProperties.id)).autoFitToBounds = true;
    var __s3local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._contentMC.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_news_desc_" + __s3local0.itemProperties.id));
    __s3local1.height = __s3local1.textHeight;
    __s3local0._contentMC.bg.height = __s3local1.textHeight + BetaTestNewsItem.CONTENT_TEXT_PADDING_TOP + BetaTestNewsItem.CONTENT_TEXT_PADDING_BOTTOM;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._headerMC, 1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BetaTestNewsItem, __s1param0);
  BetaTestNewsItem.prototype.onClick = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target) && this.isEnabled) {
      switch (__s5param0.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  BetaTestNewsItem.prototype.expand = function (__s9param0, __s9param1, __s9param2 = false) {
    __s1param0.prototype.expand.call(this, __s9param0, __s9param1, __s9param2);
    this._headerMC.gotoAndStop(1 + (this._isExpanded ? 1 : 0));
  };
  Object.defineProperty(BetaTestNewsItem.prototype, "itemProperties", {
    get: function () {
      return this._properties;
    },
    enumerable: true,
    configurable: true
  });
  BetaTestNewsItem.__initialize_static_members = function () {
    BetaTestNewsItem.CONTENT_TEXT_PADDING_TOP = 12;
    BetaTestNewsItem.CONTENT_TEXT_PADDING_BOTTOM = 14;
  };
  return BetaTestNewsItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.BetaTestNewsItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
__s0local0.__initialize_static_members();
