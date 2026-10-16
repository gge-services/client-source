Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleQuestBookMainQuestListVO = require("gge-module:export_CastleQuestBookMainQuestListVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleMainQuestFinishedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMainQuestFinishedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMainQuestFinishedDialog, __s1param0);
  CastleMainQuestFinishedDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    var __s5local0 = __dep_export_CastleQuestBookMainQuestListVO.CastleQuestBookMainQuestListVO.STATUS_FINISH;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_picHolder);
    if (this.dialogProperties.mainQuestID == 5) {
      __s5local0 = __dep_export_CastleQuestBookMainQuestListVO.CastleQuestBookMainQuestListVO.STATUS_RUNNING;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("mainquest_" + this.dialogProperties.mainQuestID + "_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("mainquest_" + this.dialogProperties.mainQuestID + "_copy" + __s5local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_done, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("quest_finished"));
    this.dialogDisp.mc_capter.gotoAndStop(this.dialogProperties.mainQuestID);
    this.dialogDisp.mc_picHolder.addChild(this.getDisplayObject());
  };
  CastleMainQuestFinishedDialog.prototype.getDisplayObject = function () {
    var __s8local0 = __dep_export_CastleQuestBookMainQuestListVO.CastleQuestBookMainQuestListVO.STATUS_FINISH;
    if (this.dialogProperties.mainQuestID == 5) {
      __s8local0 = __dep_export_CastleQuestBookMainQuestListVO.CastleQuestBookMainQuestListVO.STATUS_RUNNING;
    }
    var __s8local1 = "Quest_" + this.dialogProperties.mainQuestID + __s8local0;
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s8local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s8local1), null, 0, false).asDisplayObject();
  };
  CastleMainQuestFinishedDialog.prototype.onClick = function (__s11param0) {
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleMainQuestFinishedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMainQuestFinishedDialog.__initialize_static_members = function () {
    CastleMainQuestFinishedDialog.NAME = "CastleMainQuestFinishedEx";
  };
  return CastleMainQuestFinishedDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMainQuestFinishedDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
