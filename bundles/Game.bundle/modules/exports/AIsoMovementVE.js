Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoMovementActionEnum = require("gge-module:export_IsoMovementActionEnum");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_AInteractiveIsoObjectVE = require("gge-module:export_AInteractiveIsoObjectVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AIsoMovementVE() {
    var __s3local0 = this;
    __s3local0._currentActionType = __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.STAND;
    __s3local0._currentRot = -1;
    __s3local0._currentGridPos = new __s0local0();
    __s3local0._clickAmount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoMovementVE, __s1param0);
  AIsoMovementVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.dispComponent.cacheDisp = false;
  };
  AIsoMovementVE.prototype.updateFrameAnimation = function () {
    if (this._dispClip) {
      this.adjustDispFps();
      var __s7local0 = this.getFrameRangeByState(this.movingVO.currentActionType);
      if (__s7local0[0] != __s7local0[1]) {
        this._dispClip.gotoAndPlay(__s7local0[0], __s7local0[1]);
      } else {
        this._dispClip.gotoAndStop(__s7local0[0]);
      }
    }
  };
  AIsoMovementVE.prototype.updateAnimationPlayback = function (__s12param0) {
    if (this._dispClip) {
      if (__s12param0) {
        this._dispClip.play();
      } else {
        this._dispClip.stop();
      }
    }
  };
  AIsoMovementVE.prototype.adjustDispFps = function () {
    var __s17local0 = 1;
    switch (this.movingVO.currentAction.actionType) {
      case __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.WALK:
        __s17local0 = Math.floor(__dep_export_IsoConst.IsoConst.MOVEMENTS_FPS * this.movingVO.currentAction.currentWalkSpeed);
        break;
      case __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.WORK:
        __s17local0 = 10;
    }
    if (this._dispClip) {
      this._dispClip.targetFps = __s17local0;
    }
  };
  AIsoMovementVE.prototype.update = function (__s21param0) {
    if (__dep_export_Iso.Iso.renderer.mouse.isWorldDragging) {
      this.updateAnimationPlayback(false);
    } else {
      __s1param0.prototype.update.call(this, __s21param0);
      this.updateAnimationPlayback(true);
      if (this._dispClip) {
        this._dispClip.alpha = this.movingVO.currentAction.currentTransparency;
      }
      if (this._currentActionType != this.movingVO.currentActionType || this._currentRot != this.movingVO.rotation) {
        this.updateRotation();
        this._currentActionType = this.movingVO.currentActionType;
      }
      this.updatePosition();
      if (this._currentGridPos.x != this.vo.x || this._currentGridPos.y != this.vo.y) {
        this._currentGridPos.x = this.vo.x;
        this._currentGridPos.y = this.vo.y;
        this.adjustDispFps();
        __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(this));
      }
    }
  };
  AIsoMovementVE.prototype.updateDisp = function () {
    __s1param0.prototype.updateDisp.call(this);
    this.updateResourceIcon();
  };
  AIsoMovementVE.prototype.updateResourceIcon = function () {
    var __s30local0 = this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.RESOURCES);
    __s30local0.removeChildren();
    if (this.movingVO.hasResourceItem) {
      __s30local0.addChild(this._resourceDisp = new Library.CastleInterfaceElements.MovingInfoIcon_Ressources());
      this._resourceDisp.mc_Icon.gotoAndStop(this.getResourceIconFrame());
      this._resourceDisp.x = AIsoMovementVE.RESOURCE_ICON_POS.x;
      this._resourceDisp.y = AIsoMovementVE.RESOURCE_ICON_POS.y;
    }
  };
  AIsoMovementVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._dispClip = this.loadExternalClip(this.assetClipName, this.assetFileName, null, 12));
  };
  AIsoMovementVE.prototype.shakeItBaby = function () {
    var __s35local0 = this.getLocalDispPosCenter();
    var __s35local1 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(new __s0local0(__s35local0.x, __s35local0.y).add(new __s0local0(0, 30)), this.uiDisp, this.isoRenderer.layers.transformLayer);
    var __s35local2 = new __dep_export_IsoExplodeEffectVE.IsoExplodeEffectVE(__s35local1);
    __s35local2.init(null);
    this.isoRenderer.camera.shakeCamera();
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandSpawnEffect.IsoCommandSpawnEffect(__s35local2));
    this.isoRenderer.isoData.updater.removeObjectByVO(this.vo);
  };
  AIsoMovementVE.prototype.updateRotation = function () {
    if (this.disp) {
      if (this._currentActionType != this.movingVO.currentActionType || this._currentRot != this.movingVO.rotation) {
        this.updateFrameAnimation();
        this.mirrorDisp(this.disp, this.getMirrorDirection(this.movingVO.rotation));
        this.updateDispOffset();
        this._currentActionType = this.movingVO.currentActionType;
        this._currentRot = __dep_exact_f855840627e6e145.int(this.movingVO.rotation);
      }
    }
  };
  AIsoMovementVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(this.movingVO.precisePos);
  };
  Object.defineProperty(AIsoMovementVE.prototype, "assetClipName", {
    get: function () {
      var __s43local0 = this.vo.name;
      __s43local0 += "_" + (this.movingVO.isMale ? "Male" : "Female");
      return __s43local0 += "_" + this.vo.getAreaKingdomName();
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE.prototype, "assetClipName").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "assetFileName", {
    get: function () {
      return this.assetClipName;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE.prototype, "assetFileName").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVE.prototype.getResourceIconFrame = function () {
    var __s51local0 = __dep_export_CastleModel.CastleModel.resourcePoolData.resourceItem;
    if (!__s51local0) {
      return 0;
    }
    if (__dep_export_CastleModel.CastleModel.resourcePoolData.hasExtraGoods) {
      return 11;
    }
    switch (__s51local0.itemType) {
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        return 1;
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        return 2;
      case __dep_export_CollectableEnum.CollectableEnum.C1:
        return 3;
      case __dep_export_CollectableEnum.CollectableEnum.C2:
        return 4;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        return 5;
      case __dep_export_CollectableEnum.CollectableEnum.COAL:
        return 7;
      case __dep_export_CollectableEnum.CollectableEnum.OIL:
        return 8;
      case __dep_export_CollectableEnum.CollectableEnum.GLASS:
        return 9;
      default:
        return 10;
    }
  };
  AIsoMovementVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS;
  };
  AIsoMovementVE.prototype.getFrameRangeByState = function (__s58param0) {
    var __s58local0 = this.vo.rotation == 0 || this.vo.rotation == 1;
    switch (__s58param0) {
      case __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.STAND:
        if (__s58local0) {
          return this.standFrontFrameRange;
        } else {
          return this.standBackFrameRange;
        }
      case __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.WALK:
        if (__s58local0) {
          return this.walkFrontFrameRange;
        } else {
          return this.walkBackFrameRange;
        }
      case __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.WORK:
        return this.workFrameRange;
    }
    return null;
  };
  Object.defineProperty(AIsoMovementVE.prototype, "standFrontFrameRange", {
    get: function () {
      return [1, 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "standBackFrameRange", {
    get: function () {
      return [10, 10];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "walkFrontFrameRange", {
    get: function () {
      return [2, 9];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "walkBackFrameRange", {
    get: function () {
      return [11, 18];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "workFrameRange", {
    get: function () {
      return [19, 36];
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVE.prototype.onMouseOver = function (__s75param0) {
    __s1param0.prototype.onMouseOver.call(this, __s75param0);
    if (!this.interactiveVO.isClickAvailable) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.movingVO.currentAction, "IsoMovementActionWalk")) {
        this.movingVO.currentAction.giveSpeedBoost();
      }
      this.adjustDispFps();
    }
  };
  AIsoMovementVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.updateFrameAnimation();
  };
  AIsoMovementVE.prototype.onMouseClick = function () {
    if (this.movingVO.hasResourceItem) {
      this.onResourceItemCollected();
    }
    this._clickAmount++;
    if (this._clickAmount == 8) {
      this.shakeItBaby();
    }
  };
  AIsoMovementVE.prototype.onResourceItemCollected = function () {
    __dep_export_Iso.Iso.controller.server.collectResourcePool();
    var __s85local0 = AIsoMovementVE.RESOURCE_ICON_POS;
    var __s85local1 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(new __s0local0(__s85local0.x, __s85local0.y).add(new __s0local0(40, 0)), this.uiDisp, this.isoRenderer.layers.transformLayer);
    this.isoRenderer.isoData.updater.spawnCollectableFadeEffect(__dep_export_CastleModel.CastleModel.resourcePoolData.resourceItem, __s85local1);
    __dep_export_CastleModel.CastleModel.resourcePoolData.registerNewMovementAsOwner(null);
    this.updateResourceIcon();
  };
  Object.defineProperty(AIsoMovementVE.prototype, "movingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVE.prototype.createCacheBahaviour = function () {
    return null;
  };
  AIsoMovementVE.__initialize_static_members = function () {
    AIsoMovementVE.RESOURCE_ICON_POS = new __s0local0(0, -120);
  };
  return AIsoMovementVE;
}(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE);
exports.AIsoMovementVE = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoCommandSpawnEffect = require("gge-module:export_IsoCommandSpawnEffect");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoExplodeEffectVE = require("gge-module:export_IsoExplodeEffectVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
__s0local1.__initialize_static_members();
