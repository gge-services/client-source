Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function () {
  function CastlePrivateResourceVillageRenderHelper() {}
  CastlePrivateResourceVillageRenderHelper.renderVillage = function (__s5param0, __s5param1, __s5param2 = 36, __s5param3 = 30) {
    var __s5local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("PrivateResourceVillage");
    var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("PrivateResourceVillage", __s5local0, null, 0, false);
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s5param1);
    __s5param1.addChild(__s5local1);
    __s5local1.doWhenLoaded(function (__s7param0) {
      __s7param0.currentshownDisplayObject.gotoAndStop(__s5param0 + 1);
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s7param0, __s5param2, __s5param3);
    });
    return __s5local1;
  };
  CastlePrivateResourceVillageRenderHelper.fillResourceBonus = function (__s9param0, __s9param1, __s9param2, __s9param3 = 36, __s9param4 = 30) {
    CastlePrivateResourceVillageRenderHelper.textFieldManager.registerTextField(__s9param0.txt_resourceBonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s9param2]));
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(__s9param0.mc_iconHolder);
    __dep_export_WodPicHelper.WodPicHelper.addIcon(CastlePrivateResourceVillageRenderHelper.getProductivityIconClass(__s9param1), __s9param0.mc_iconHolder, __s9param3, __s9param4);
    __s9param0.mouseChildren = false;
    __s9param0.toolTipText = CastlePrivateResourceVillageRenderHelper.getBonusToolTip(__s9param1);
  };
  CastlePrivateResourceVillageRenderHelper.getBonusToolTip = function (__s11param0) {
    return __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(__s11param0).toLowerCase() + "Bonus";
  };
  CastlePrivateResourceVillageRenderHelper.getProductivityIconClass = function (__s13param0) {
    switch (__s13param0) {
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_FOOD:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_COAL:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_OIL:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_GLASS:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_IRON:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourIron;
      default:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood;
    }
  };
  Object.defineProperty(CastlePrivateResourceVillageRenderHelper, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrivateResourceVillageRenderHelper;
}();
exports.CastlePrivateResourceVillageRenderHelper = __s0local0;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
