Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClip = require("gge-module:export_CastleMovieClip");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function EquipmentGemSocket(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._enableExtractBehaviour = false;
    __s3local0._equipmentVO = __s3param0;
    __s3local0._enableExtractBehaviour = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0);
    __s3local0._gemClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_SocketTop_Relicus", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_SocketTop_Relicus"), null, 0, true);
    if (__s3local0._gemClip.isLoaded) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addGem(__s3local0._gemClip, __s3local0._equipmentVO)(__s3local0._gemClip);
      __s3local0.onLoaded(__s3local0._gemClip);
    } else {
      __s3local0._gemClip.clipLoaded.addOnce(__dep_export_EquipmentIconHelper.EquipmentIconHelper.addGem(__s3local0._gemClip, __s3local0._equipmentVO));
      __s3local0._gemClip.clipLoaded.addOnce(__s3local0.bindFunction(__s3local0.onLoaded));
    }
    __s3local0.addChild(__s3local0._gemClip.asDisplayObject());
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentGemSocket, __s1param0);
  EquipmentGemSocket.prototype.onLoaded = function (__s7param0) {
    this.toolTipText = "dialog_gemExtract_tooltip";
    this.showArrow(false);
    this.mouseEnabled = this._enableExtractBehaviour;
  };
  EquipmentGemSocket.prototype.showArrow = function (__s9param0) {};
  Object.defineProperty(EquipmentGemSocket.prototype, "disp", {
    get: function () {
      return this._gemClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentGemSocket.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentGemSocket.ANIM_DURATION = 0.4;
  EquipmentGemSocket.MASK_POSITIONS = [-39, 7];
  EquipmentGemSocket.GEM_POSITIONS = [-16.55, 15];
  return EquipmentGemSocket;
}(__dep_export_CastleMovieClip.CastleMovieClip);
exports.EquipmentGemSocket = __s0local0;
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
