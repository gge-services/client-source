Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleCommunicationForum(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentCategory = CastleCommunicationForum.CAT_NONE;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._subLayers = new Map();
    __s3local0._subLayers.set(CastleCommunicationForum.CAT_OVERVIEW, new __dep_export_CastleForumOverview.CastleForumOverview(__s3local0.subLayerDisp.cat_overview, __s3local0));
    __s3local0._subLayers.set(CastleCommunicationForum.CAT_NEW_TOPIC, new __dep_export_CastleForumNewTopic.CastleForumNewTopic(__s3local0.subLayerDisp.cat_newTopic, __s3local0));
    __s3local0._subLayers.set(CastleCommunicationForum.CAT_VIEW_TOPIC, new __dep_export_CastleForumViewTopic.CastleForumViewTopic(__s3local0.subLayerDisp.cat_viewTopic, __s3local0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCommunicationForum, __s1param0);
  CastleCommunicationForum.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.changeCategory(CastleCommunicationForum.CAT_OVERVIEW);
  };
  CastleCommunicationForum.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._currentCategory != CastleCommunicationForum.CAT_NONE) {
      this._subLayers.get(this._currentCategory).hide();
    }
  };
  CastleCommunicationForum.prototype.changeCategory = function (__s10param0) {
    if (this._currentCategory != CastleCommunicationForum.CAT_NONE) {
      this._subLayers.get(this._currentCategory).hide();
    }
    this._currentCategory = __s10param0;
    this._subLayers.get(__s10param0).show(this._params);
  };
  CastleCommunicationForum.prototype.showHelp = function () {
    var __s13local0 = "";
    switch (this._currentCategory) {
      case CastleCommunicationForum.CAT_NEW_TOPIC:
        __s13local0 = "help_forum_newTopic";
        break;
      case CastleCommunicationForum.CAT_OVERVIEW:
        __s13local0 = "help_forum_overview";
        break;
      case CastleCommunicationForum.CAT_VIEW_TOPIC:
        __s13local0 = "help_forum_topicAnswer";
    }
    if (__s13local0 != "") {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(__s13local0));
    }
  };
  CastleCommunicationForum.__initialize_static_members = function () {
    CastleCommunicationForum.CAT_OVERVIEW = "cat_overview";
    CastleCommunicationForum.CAT_NEW_TOPIC = "cat_newTopic";
    CastleCommunicationForum.CAT_VIEW_TOPIC = "cat_viewTopic";
    CastleCommunicationForum.CAT_NONE = "cat_none";
  };
  return CastleCommunicationForum;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleCommunicationForum = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleForumNewTopic = require("gge-module:export_CastleForumNewTopic");
var __dep_export_CastleForumOverview = require("gge-module:export_CastleForumOverview");
var __dep_export_CastleForumViewTopic = require("gge-module:export_CastleForumViewTopic");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
