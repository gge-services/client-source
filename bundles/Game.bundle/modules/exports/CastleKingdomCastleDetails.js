Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleKingdomCastleDetails(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.onBack = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_back, __s3local0.subLayerDisp.btn_previous, __s3local0.subLayerDisp.btn_next]);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_back.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_detailsDialog_backButton"));
    __s3local0.sublayers = new __dep_export_SublayerSwitcher.SublayerSwitcher(__s3local0.bindFunction(__s3local0.createSublayerParam));
    __s3local0.sublayers.add(CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_FREE, null, new __dep_export_UnlockPrebuiltCastleForFree.UnlockPrebuiltCastleForFree(__s3local0.subLayerDisp.sublayer_unlockForFree, __s3param2));
    __s3local0.sublayers.add(CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_RESOURCES, null, new __dep_export_UnlockPrebuiltCastleForResourcesOrRubies.UnlockPrebuiltCastleForResourcesOrRubies(__s3local0.subLayerDisp.sublayer_unlockWithResources, __s3param2));
    __s3local0.sublayers.add(CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_C2, null, new __dep_export_UnlockPrebuiltCastleForRubies.UnlockPrebuiltCastleForRubies(__s3local0.subLayerDisp.sublayer_unlockWithRubies, __s3param2));
    __s3local0.txt_name = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.txt_name.autoFitToBounds = true;
    __s3local0.txt_description = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.textScroll = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(__s3local0.subLayerDisp.txt_description, __s3local0.subLayerDisp.btn_up, __s3local0.subLayerDisp.btn_down));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomCastleDetails, __s1param0);
  CastleKingdomCastleDetails.prototype.createSublayerParam = function (__s5param0) {
    return __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId)[this.props.castleSelectionIndex];
  };
  CastleKingdomCastleDetails.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.props = __s7param0;
    this.update();
    this.textScroll.onShow();
    this.sublayers.show();
  };
  CastleKingdomCastleDetails.prototype.update = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_previous, this.findPreviousSelectableCastleIndex() != -1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_next, this.findNextSelectableCastleIndex() != -1);
    var __s9local1 = __s9local0[this.props.castleSelectionIndex];
    this.txt_name.textContentVO.textId = "dialog_prebuiltCastle" + __s9local1.id + "_name";
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_picture);
    var __s9local2 = "PrebuiltCastlePicture_" + __s9local1.id;
    var __s9local3 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s9local2, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s9local2));
    this.subLayerDisp.mc_picture.addChild(__s9local3.asDisplayObject());
    this.switchToSublayerAndUpdate(__s9local1);
  };
  CastleKingdomCastleDetails.prototype.switchToSublayerAndUpdate = function (__s11param0) {
    var __s11local0 = __dep_exact_f855840627e6e145.int(CastleKingdomCastleDetails.getSublayerForCastle(__s11param0));
    var __s11local1 = this.sublayers.activeTab;
    var __s11local2 = this.sublayers.getSublayerByID(__s11local0);
    if (__s11local0 != __s11local1) {
      this.sublayers.switchTo(__s11local0);
    } else {
      __s11local2.update(__s11param0);
    }
    var __s11local3 = "dialog_prebuiltCastle_" + __s11local2.unlockTypeTextId + __s11param0.textIdName() + "_description";
    var __s11local4 = CastleKingdomCastleDetails.getCastleContentsText(__s11param0);
    this.txt_description.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__s11local3, [__s11local4]);
  };
  CastleKingdomCastleDetails.prototype.findNextSelectableCastleIndex = function () {
    for (var __s15local0 = __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId), __s15local1 = this.props.castleSelectionIndex + 1; __s15local1 < __s15local0.length; ++__s15local1) {
      if (__s15local0[__s15local1].minLevel <= __dep_export_CastleModel.CastleModel.userData.level) {
        return __s15local1;
      }
    }
    return -1;
  };
  CastleKingdomCastleDetails.prototype.findPreviousSelectableCastleIndex = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId);
    for (var __s20local1 = this.props.castleSelectionIndex - 1; __s20local1 >= 0; --__s20local1) {
      if (__s20local0[__s20local1].minLevel <= __dep_export_CastleModel.CastleModel.userData.level) {
        return __s20local1;
      }
    }
    return -1;
  };
  CastleKingdomCastleDetails.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_prebuiltCastle_detailsDialog_" + this.props.name));
  };
  CastleKingdomCastleDetails.getCastleContentsText = function (__s27param0) {
    var __s27local0 = new __dep_exact_81dacdf05bd32292.StringBuffer();
    for (var __s27local1 = 0; __s27local1 < __s27param0.buildings.length; __s27local1++) {
      var __s27local2 = __s27param0.buildings[__s27local1];
      if (__s27local2 !== undefined) {
        var __s27local3 = __s27local2.buildingVO;
        __s27local0.append(__s27local2.amount + "x ");
        __s27local0.append(__dep_exact_92d05af59ee2ff30.Localize.text(__s27local3.getNameString()));
        if (__s27local3.level > 1 || __s27local3.hasUpgrade) {
          __s27local0.append(" " + __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [__s27local3.level]));
        }
        if (__s27local1 < __s27param0.buildings.length - 1) {
          __s27local0.append("\n");
        }
      }
    }
    return __s27local0.toString();
  };
  CastleKingdomCastleDetails.getSublayerForCastle = function (__s34param0) {
    if (__s34param0.isPremium()) {
      return CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_C2;
    } else if (__s34param0.isFree()) {
      return CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_FREE;
    } else {
      return CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_RESOURCES;
    }
  };
  CastleKingdomCastleDetails.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.textScroll.onHide();
    this.sublayers.hide();
  };
  CastleKingdomCastleDetails.prototype.onClick = function (__s41param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s41param0.target)) {
      switch (__s41param0.target) {
        case this.subLayerDisp.btn_back:
          this.onBack(this.props.castleSelectionIndex);
          break;
        case this.subLayerDisp.btn_previous:
          this.props.castleSelectionIndex = this.findPreviousSelectableCastleIndex();
          this.update();
          break;
        case this.subLayerDisp.btn_next:
          this.props.castleSelectionIndex = this.findNextSelectableCastleIndex();
          this.update();
      }
    }
  };
  CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_FREE = 0;
  CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_RESOURCES = 1;
  CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_C2 = 2;
  return CastleKingdomCastleDetails;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleKingdomCastleDetails = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_UnlockPrebuiltCastleForFree = require("gge-module:export_UnlockPrebuiltCastleForFree");
var __dep_export_UnlockPrebuiltCastleForResourcesOrRubies = require("gge-module:export_UnlockPrebuiltCastleForResourcesOrRubies");
var __dep_export_UnlockPrebuiltCastleForRubies = require("gge-module:export_UnlockPrebuiltCastleForRubies");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
