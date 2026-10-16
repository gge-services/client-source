Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function AAllianceBookmarkRenderer() {}
  AAllianceBookmarkRenderer.prototype.render = function (__s5param0, __s5param1) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s5param0.mc_placeHolder);
    var __s5local0 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s5param1.worldmapObjectVO, AAllianceBookmarkRenderer.WMO_ICON_SIZE, true, false, false);
    __s5param0.mc_placeHolder.addChild(__s5local0);
    __s5param0.bg.gotoAndStop(this.backgroundFrame);
    this.showSublayer(__s5param0);
    var __s5local1 = this.getSublayer(__s5param0);
    this.textFieldManager.registerTextField(__s5local1.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_2.TextValide.parseChatJSONMessage(__s5param1.name)));
    __s5local1.mc_bookmarkType.gotoAndStop(this.bookmarkTypeIconFrame);
    __s5local1.mc_bookmarkType.mouseChildren = false;
    __s5local1.mc_bookmarkType.toolTipText = this.bookmarkTypeTextID;
    this.renderAdditionalInfos(__s5local1, __s5param1);
  };
  AAllianceBookmarkRenderer.prototype.showSublayer = function (__s7param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AAllianceBookmarkRenderer.prototype.renderAdditionalInfos = function (__s13param0, __s13param1) {};
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "backgroundFrame", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceBookmarkRenderer.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AAllianceBookmarkRenderer.prototype.getSublayer = function (__s21param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AAllianceBookmarkRenderer.__initialize_static_members = function () {
    AAllianceBookmarkRenderer.WMO_ICON_SIZE = new __s0local0(100, 100);
  };
  return AAllianceBookmarkRenderer;
}();
exports.AAllianceBookmarkRenderer = __s0local1;
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
__s0local1.__initialize_static_members();
