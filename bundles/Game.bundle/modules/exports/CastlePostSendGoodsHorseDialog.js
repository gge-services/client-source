Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __s0local0 = function (__s1param0) {
  function CastlePostSendGoodsHorseDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePostSendGoodsHorseDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostSendGoodsHorseDialog, __s1param0);
  CastlePostSendGoodsHorseDialog.prototype.showLoaded = function (__s5param0 = null) {
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MERCHANT, this.dialogDisp.mc_char, 190, 135);
    this.hideAttackDisplayElements();
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  CastlePostSendGoodsHorseDialog.__initialize_static_members = function () {
    CastlePostSendGoodsHorseDialog.NAME = "CastlePostActionHorse_S";
  };
  return CastlePostSendGoodsHorseDialog;
}(require("gge-module:export_CastlePostSendGoodsDialog").CastlePostSendGoodsDialog);
exports.CastlePostSendGoodsHorseDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
