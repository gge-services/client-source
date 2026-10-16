Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AModernInfoCatalogDialogSublayer(__s3param0) {
    var __s3local0 = this;
    __s3local0._pages = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AModernInfoCatalogDialogSublayer, __s1param0);
  AModernInfoCatalogDialogSublayer.prototype.init = function () {
    this._topics = new __dep_export_InfoCatalogTopicComponent.InfoCatalogTopicComponent(this.subLayerDisp.mc_topic);
  };
  AModernInfoCatalogDialogSublayer.prototype.addPage = function (__s7param0, __s7param1, __s7param2) {
    this._pages.set(__s7param0, new __s7param1(__s7param2));
  };
  AModernInfoCatalogDialogSublayer.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this._topics.onTopicChanged.add(this.bindFunction(this.onTopicChanged));
    this._topics.onShow();
    if (this._pages != null) {
      for (var __s9local0 = 0, __s9local1 = Array.from(this._pages.values()); __s9local0 < __s9local1.length; __s9local0++) {
        __s9local1[__s9local0].onShow();
      }
    }
  };
  AModernInfoCatalogDialogSublayer.prototype.hide = function () {
    this._topics.onTopicChanged.remove(this.bindFunction(this.onTopicChanged));
    this._topics.onHide();
    if (this._pages != null) {
      for (var __s14local0 = 0, __s14local1 = Array.from(this._pages.values()); __s14local0 < __s14local1.length; __s14local0++) {
        __s14local1[__s14local0].onHide();
      }
    }
    __s1param0.prototype.hide.call(this);
  };
  AModernInfoCatalogDialogSublayer.prototype.updateInfoPages = function () {
    for (var __s19local0 = this.getInfoPagesMc(), __s19local1 = 0; __s19local1 < __s19local0.numChildren; ++__s19local1) {
      __s19local0.getChildAt(__s19local1).visible = false;
    }
    var __s19local2 = this._topics.getSelectedTopic().topicType;
    var __s19local3 = this.getInfoPage(__s19local2.pageName);
    if (__s19local3) {
      __s19local3.setVisibility(true);
    }
    this.updateInfoPage(__s19local3, this.topics.getSelectedTopic());
  };
  AModernInfoCatalogDialogSublayer.prototype.updateInfoPage = function (__s24param0, __s24param1) {};
  AModernInfoCatalogDialogSublayer.prototype.getInfoPagesMc = function () {
    return this.subLayerDisp.mc_pages;
  };
  AModernInfoCatalogDialogSublayer.prototype.getInfoPage = function (__s28param0) {
    return this._pages.get(__s28param0);
  };
  AModernInfoCatalogDialogSublayer.prototype.onTopicChanged = function () {
    this.updateInfoPages();
  };
  Object.defineProperty(AModernInfoCatalogDialogSublayer.prototype, "topics", {
    get: function () {
      return this._topics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernInfoCatalogDialogSublayer.prototype, "pages", {
    get: function () {
      return this._pages;
    },
    enumerable: true,
    configurable: true
  });
  return AModernInfoCatalogDialogSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.AModernInfoCatalogDialogSublayer = __s0local0;
var __dep_export_InfoCatalogTopicComponent = require("gge-module:export_InfoCatalogTopicComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
