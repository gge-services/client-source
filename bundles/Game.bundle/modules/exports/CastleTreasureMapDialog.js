Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTreasureHuntEvent = require("gge-module:export_CastleTreasureHuntEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTreasureBuyPieceDialogProperties = require("gge-module:export_CastleTreasureBuyPieceDialogProperties");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = function (__s1param0) {
  function CastleTreasureMapDialog() {
    var __s3local0 = this;
    __s3local0.currentDisplayedMapId = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTreasureMapDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapDialog, __s1param0);
  CastleTreasureMapDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_buyPieces, this.dialogDisp.btn_close]);
    this.loadTreasuremap();
  };
  CastleTreasureMapDialog.prototype.loadTreasuremap = function () {
    this.partsLoadingItem = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.loadVersionedItemAsset(CastleTreasureMapDialog.TREASUREMAP_PARTS);
    if (this.partsLoadingItem._isLoaded) {
      this.onPartsLoaded();
    } else {
      this.partsLoadingItem.addEventListener(__s0local1.COMPLETE, this.bindFunction(this.onPartsLoaded));
    }
  };
  CastleTreasureMapDialog.prototype.onPartsLoaded = function () {
    this.loadMap();
  };
  CastleTreasureMapDialog.prototype.loadMap = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO;
    if (__s13local0) {
      this.loadingMap = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.loadVersionedItemAsset(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.generateTreasureMapAssetName(__s13local0.mapID));
      if (this.loadingMap.isLoaded) {
        this.onMapLoaded();
      } else {
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mapLayer);
        if (this.itxt_mapName && this.itxt_mapDesc) {
          this.textFieldManager.unregisterTextFieldByReference(this.itxt_mapName);
          this.textFieldManager.unregisterTextFieldByReference(this.itxt_mapDesc);
        }
        this.loadingMap.addEventListener(__s0local1.COMPLETE, this.bindFunction(this.onMapLoaded));
      }
    }
  };
  CastleTreasureMapDialog.prototype.onMapLoaded = function (__s19param0 = null) {
    if (this.loadingMap.isLoaded && this.partsLoadingItem.isLoaded) {
      this.createMap();
      this.currentDisplayedMapId = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.treasureHuntData.currentMapID);
      this.dialogDisp.txt_mapName.defaultCacheScale = 2;
      this.dialogDisp.txt_mapDesc.defaultCacheScale = 2;
      this.itxt_mapName = this.textFieldManager.registerTextField(this.dialogDisp.txt_mapName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("treasuremap_chest_" + __dep_export_CastleModel.CastleModel.treasureHuntData.currentMapID + "_title"));
      this.itxt_mapDesc = this.textFieldManager.registerTextField(this.dialogDisp.txt_mapDesc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("treasuremap_chest_" + __dep_export_CastleModel.CastleModel.treasureHuntData.currentMapID + "_copy"));
    }
  };
  CastleTreasureMapDialog.prototype.createMap = function () {
    this.mapIdPieces = this.treasureMapVO.getShuffledPieces();
    this.mapPieces = Array(this.mapIdPieces.length).fill(null);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mapLayer);
    var __s22local0 = new __s0local0();
    this._missingPartClass = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("TreasureMapMissingPartInfo");
    var __s22local1 = __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.getMovieClipByClassName("TreasureMapType" + this.treasureMapVO.mapType + "_MissingParts");
    __s22local0.addChild(__s22local1);
    for (var __s22local2 = 0, __s22local3 = __s22local1.children; __s22local2 < __s22local3.length; __s22local2++) {
      var __s22local4 = __s22local3[__s22local2];
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s22local4, __dep_exact_81dacdf05bd32292_2.getQualifiedClassName(this._missingPartClass))) {
        __s22local4.toolTipText = this.getToolTipTextID();
        __s22local4.actLikeButton = true;
        __s22local4.mouseChildren = false;
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(__s22local4);
      }
    }
    var __s22local5 = __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.getMovieClipByClassName("TreasureMap_" + this.treasureMapVO.mapID);
    __s22local0.addChild(__s22local5);
    var __s22local6 = __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.getMovieClipByClassName("TreasureMapType" + this.treasureMapVO.mapType + "_Detail");
    __s22local6.mouseEnabled = true;
    __s22local5.addChild(__s22local6);
    this.maskLayer = new __s0local0();
    __s22local5.addChild(this.maskLayer);
    __s22local5.mask = this.maskLayer;
    var __s22local7 = new __s0local0();
    __s22local0.addChild(__s22local7);
    if (this.castleTreasureMapRenderer) {
      this.castleTreasureMapRenderer.destroy();
    }
    this.castleTreasureMapRenderer = new __dep_export_CastleTreasureMapRenderer.CastleTreasureMapRenderer();
    this.castleTreasureMapRenderer.init(__s22local5, __s22local7);
    this.castleTreasureMapRenderer.setMapActivity = this.treasureMapVO.hasAllPieces;
    this.dialogDisp.mapLayer.addChild(__s22local0);
    this.maskLayer.addChild(new createjs.MovieClip());
    this.updatePiecesFound();
  };
  CastleTreasureMapDialog.prototype.applyPropertiesLoaded = function (__s28param0 = null) {
    if (this.treasureMapVO) {
      this.updateBuyPieceButton();
      this.setRewardIcon();
    }
  };
  CastleTreasureMapDialog.prototype.updateBuyPieceButton = function () {
    this.dialogDisp.btn_buyPieces.visible = !this.treasureMapVO.hasAllPieces;
  };
  CastleTreasureMapDialog.prototype.setRewardIcon = function () {
    this.decoObject = this.treasureMapVO.endNodeRewards()[0].getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING).buildingVO;
    __dep_export_WodPicHelper.WodPicHelper.addWodPic(this.decoObject, this.dialogDisp.mc_reward.mc_placeHolder, 100, 100);
    this.dialogDisp.mc_reward.mc_placeHolder.mouseChildren = false;
  };
  CastleTreasureMapDialog.prototype.onTreasureHuntDataUpdated = function (__s35param0) {
    this.loadTreasuremap();
  };
  CastleTreasureMapDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    __dep_export_CastleModel.CastleModel.treasureHuntData.addEventListener(__dep_export_CastleTreasureHuntEvent.CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED, this.bindFunction(this.onTreasureHuntDataUpdated));
  };
  CastleTreasureMapDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    __dep_export_CastleModel.CastleModel.treasureHuntData.removeEventListener(__dep_export_CastleTreasureHuntEvent.CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED, this.bindFunction(this.onTreasureHuntDataUpdated));
  };
  CastleTreasureMapDialog.prototype.showLoaded = function (__s41param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s41param0);
    if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID) && __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.treasureMapVO.kingdomID) != null) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_buyPieces, true);
      this.dialogDisp.btn_buyPieces.toolTipText = "dialog_treasureMap_buyPieces";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_buyPieces, false);
      this.dialogDisp.btn_buyPieces.toolTipText = this.getToolTipTextID();
    }
    this.loadTreasuremap();
  };
  CastleTreasureMapDialog.prototype.hideLoaded = function (__s45param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s45param0);
    if (this.castleTreasureMapRenderer) {
      this.castleTreasureMapRenderer.destroy();
    }
  };
  CastleTreasureMapDialog.prototype.onTreasureMapDataUpdated = function (__s48param0) {
    if (__s48param0 && __s48param0.treasureMapVO && __s48param0.treasureMapVO.mapID == __dep_export_CastleModel.CastleModel.treasureHuntData.currentMapID) {
      var __s48local0 = __s48param0.treasureMapVO;
      if (__s48local0.progressType == __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE || __s48local0.progressType == __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_NEW_MAP) {
        this.hide();
      } else {
        this.updateBuyPieceButton();
        this.updatePiecesFound();
        this.castleTreasureMapRenderer.setMapActivity = __s48local0.hasAllPieces;
      }
    }
  };
  CastleTreasureMapDialog.prototype.onClick = function (__s53param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      __s1param0.prototype.onClick.call(this, __s53param0);
      switch (__s53param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_buyPieces:
          if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID)) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureBuyPieceDialog.CastleTreasureBuyPieceDialog, new __dep_export_CastleTreasureBuyPieceDialogProperties.CastleTreasureBuyPieceDialogProperties(this.treasureMapVO));
          }
          break;
        default:
          if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s53param0.target, __dep_exact_81dacdf05bd32292_2.getQualifiedClassName(this._missingPartClass))) {
            if (!__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID) || !__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_buyPieces)) {
              return;
            }
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureBuyPieceDialog.CastleTreasureBuyPieceDialog, new __dep_export_CastleTreasureBuyPieceDialogProperties.CastleTreasureBuyPieceDialogProperties(this.treasureMapVO));
          }
      }
    }
  };
  CastleTreasureMapDialog.prototype.onMouseOver = function (__s60param0) {
    if (__s60param0.target == this.dialogDisp.mc_reward.mc_placeHolder) {
      __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(__s60param0.target, this.decoObject, 0, -20);
    }
    if (this._missingPartClass != null) {
      if (__s60param0.target instanceof this._missingPartClass) {
        var __s60local0 = __s60param0.target;
        __s60local0.toolTipText = this.getToolTipTextID();
        __s60local0.actLikeButton = true;
      }
      __s1param0.prototype.onMouseOver.call(this, __s60param0);
    }
  };
  CastleTreasureMapDialog.prototype.getToolTipTextID = function () {
    var __s65local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_treasureMap_PieceTooltip");
    var __s65local1 = "dialog_treasureMap_unlockReal";
    switch (this.treasureMapVO.kingdomID) {
      case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
        __s65local1 += "_icecream";
        __s65local0 += "_ice";
        break;
      case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
        __s65local1 += "_dessert";
        __s65local0 += "_dessert";
    }
    var __s65local2 = __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID);
    var __s65local3 = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_buyPieces);
    if (__s65local2 && __s65local3) {
      return __s65local0;
    } else {
      return __s65local1;
    }
  };
  CastleTreasureMapDialog.prototype.updatePiecesFound = function () {
    if (this.mapPieces) {
      for (var __s70local0 = 0; __s70local0 < this.mapPieces.length; __s70local0++) {
        if (__s70local0 + 1 <= this.treasureMapVO.piecesFound && !this.mapPieces[__s70local0]) {
          var __s70local1 = __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.getMovieClipByClassName("TreasureMapType" + this.treasureMapVO.mapType + "_part" + this.mapIdPieces[__s70local0]);
          this.maskLayer.addChild(__s70local1);
          this.mapPieces[__s70local0] = __s70local1;
        } else if (this.mapPieces[__s70local0] && __s70local0 + 1 > this.treasureMapVO.piecesFound) {
          this.maskLayer.removeChild(this.mapPieces[__s70local0]);
          this.mapPieces[__s70local0] = null;
        }
      }
    }
  };
  CastleTreasureMapDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s77local0 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width || this.disp.stage.stageWidth > this.dispBounds.width) {
        __s77local0 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * __s77local0) {
        __s77local0 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      __s77local0 = Math.min(__s77local0, 1.5);
      this.disp.x = -this.dispBounds.left * __s77local0 - this.dispBounds.width * __s77local0 / 2 + this.disp.stage.stageWidth / 2;
      this.disp.y = -this.dispBounds.top * __s77local0 - this.dispBounds.height * __s77local0 / 2 + this.disp.stage.stageHeight / 2;
      this.disp.scaleX = this.disp.scaleY = __s77local0;
    }
  };
  Object.defineProperty(CastleTreasureMapDialog.prototype, "treasureMapVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapDialog.NAME = "CastleTreasureMap";
  CastleTreasureMapDialog.TREASUREMAP_PARTS = "Treasuremap_Parts";
  return CastleTreasureMapDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTreasureMapDialog = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleTreasureMapRenderer = require("gge-module:export_CastleTreasureMapRenderer");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleTreasureBuyPieceDialog = require("gge-module:export_CastleTreasureBuyPieceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
