Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __s0local0 = function () {
  function AEquipableDragMovement(__s3param0, __s3param1) {
    this._sourceLocation = __s3param1;
    this._draggedEquipableVO = __s3param0;
    this.createEquipableMC(__s3param0);
  }
  AEquipableDragMovement.prototype.createFavoriteIcon = function () {
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_Favorite", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_Favorite"), null, 0, false);
    if (__s5local0.isLoaded) {
      this.onFavoriteClipLoaded(__s5local0);
    } else {
      __s5local0.clipLoaded.add(this.bindFunction(this.onFavoriteClipLoaded));
    }
  };
  AEquipableDragMovement.prototype.onFavoriteClipLoaded = function (__s9param0) {
    if (__s9param0) {
      __s9param0.clipLoaded.remove(this.bindFunction(this.onFavoriteClipLoaded));
      this._draggedEquipableMC.favoriteDisp = __s9param0.children[0];
      this._draggedEquipableMC.addChild(__s9param0.asDisplayObject());
    }
    if (this._draggedEquipableMC.favoriteDisp) {
      this._draggedEquipableMC.favoriteDisp.mc_star_small.visible = this._draggedEquipableVO.isFavorite;
      this._draggedEquipableMC.favoriteDisp.mc_hover.visible = false;
      this._draggedEquipableMC.favoriteDisp.mc_star_active.visible = false;
      this._draggedEquipableMC.favoriteDisp.mc_star_inactive.visible = false;
    }
  };
  AEquipableDragMovement.prototype.createEquipableMC = function (__s13param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableDragMovement.prototype.startDrag = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AEquipableDragMovement.prototype.stopDrag = function (__s17param0, __s17param1 = null) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AEquipableDragMovement.prototype, "sourceLocation", {
    get: function () {
      return this._sourceLocation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableDragMovement.prototype, "draggedEquipableVO", {
    get: function () {
      return this._draggedEquipableVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableDragMovement.prototype, "sourceSlotMC", {
    get: function () {
      return this._sourceSlotMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableDragMovement, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AEquipableDragMovement.MAX_WIDTH = 53;
  AEquipableDragMovement.MAX_HEIGHT = 53;
  return AEquipableDragMovement;
}();
exports.AEquipableDragMovement = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
