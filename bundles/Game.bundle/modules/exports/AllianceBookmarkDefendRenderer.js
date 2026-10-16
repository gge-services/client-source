Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_AAllianceBookmarkRenderer = require("gge-module:export_AAllianceBookmarkRenderer");
var __s0local0 = function (__s1param0) {
  function AllianceBookmarkDefendRenderer() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceBookmarkDefendRenderer, __s1param0);
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "bookmarkTypeTextID", {
    get: function () {
      return "Bookmarks_worldmap_alliance_supportTarget_tooltip";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "bookmarkTypeTextID").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "isAdditionalDetailsVisible", {
    get: function () {
      return false;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "isAdditionalDetailsVisible").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "backgroundFrame", {
    get: function () {
      return 2;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "backgroundFrame").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBookmarkDefendRenderer.prototype, "bookmarkTypeIconFrame", {
    get: function () {
      return 2;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer.prototype, "bookmarkTypeIconFrame").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBookmarkDefendRenderer.prototype.showSublayer = function (__s21param0) {
    __s21param0.sublayer_attackOrderInfo.visible = false;
    __s21param0.sublayer_defaultInfo.visible = true;
  };
  AllianceBookmarkDefendRenderer.prototype.getSublayer = function (__s23param0) {
    return __s23param0.sublayer_defaultInfo;
  };
  AllianceBookmarkDefendRenderer.__initialize_static_members = function () {
    AllianceBookmarkDefendRenderer.ID = __dep_exact_f855840627e6e145.int(__dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND.typeIndex);
  };
  return AllianceBookmarkDefendRenderer;
}(__dep_export_AAllianceBookmarkRenderer.AAllianceBookmarkRenderer);
exports.AllianceBookmarkDefendRenderer = __s0local0;
__s0local0.__initialize_static_members();
