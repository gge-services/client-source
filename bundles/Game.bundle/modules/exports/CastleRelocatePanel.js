Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleRelocatePanel() {
    var __s3local0 = this;
    __s3local0.ASSET_NAME = "CastleRelocatePanel";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CastleRelocatePanel", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleRelocatePanel.NAME), null, 0, false)) || this)._screenClip = __s3local0.disp;
    if (__s3local0.externalClip.isLoaded) {
      __s3local0.initAfterLoaded(__s3local0.externalClip);
    } else {
      __s3local0.externalClip.clipLoaded.addOnce(__s3local0.bindFunction(__s3local0.initAfterLoaded));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRelocatePanel, __s1param0);
  Object.defineProperty(CastleRelocatePanel.prototype, "externalClip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocatePanel.prototype.initAfterLoaded = function (__s9param0 = null) {
    var __s9local0 = this.panelDisp.txt_title;
    var __s9local1 = this.panelDisp.txt_desc;
    this.textFieldManager.registerTextField(__s9local0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_relocate_title"));
    this.textFieldManager.registerTextField(__s9local1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_relocate_desc"));
  };
  CastleRelocatePanel.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.panelDisp.btn_cancel:
        __dep_export_CastleModel.CastleModel.worldmapData ||= __dep_export_CastleModel.CastleModel.addModel(__dep_export_CastleModel.CastleModel.worldmapData = new __dep_export_CastleWorldmapData.CastleWorldmapData());
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.renderer.camera.centerArea(__dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle().absAreaPos);
    }
  };
  CastleRelocatePanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.getBounds(null);
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth / 2;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  Object.defineProperty(CastleRelocatePanel.prototype, "panelDisp", {
    get: function () {
      return this._screenClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocatePanel.NAME = "CastleRelocatePanel";
  return CastleRelocatePanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleRelocatePanel = __s0local0;
var __dep_export_CastleWorldmapData = require("gge-module:export_CastleWorldmapData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
