Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoObjectRotationEnum = require("gge-module:export_IsoObjectRotationEnum");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Point;
var __s0local3 = createjs.Rectangle;
var __s0local4 = function (__s1param0) {
  function VEContainer(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.veRef = __s3param0;
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      __s3local0.doubleClickEnabled = true;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VEContainer, __s1param0);
  return VEContainer;
}(__s0local1);
exports.VEContainer = __s0local4;
var __s0local5 = function (__s6param0) {
  function AIsoObjectVE() {
    var __s8local0 = this;
    __s8local0._layers = new __dep_export_IsoObjectLayerManager.IsoObjectLayerManager();
    __s8local0._dispComponent = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    __s8local0._additionalClips = new __dep_export_IsoAdditionalClipManager.IsoAdditionalClipManager();
    __s8local0._statusIcons = new __dep_export_IsoStatusIconManager.IsoStatusIconManager();
    __s8local0._hasRingMenu = false;
    __s8local0._dispLayerBounds = new __s0local3();
    CONSTRUCTOR_HACK;
    return __s8local0 = __s6param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoObjectVE, __s6param0);
  AIsoObjectVE.prototype.init = function (__s10param0) {
    this._vo = __s10param0;
    if (!this._objectType || this._objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.UNKNOWN) {
      this._objectType = this._vo ? this._vo.objectType : __dep_export_IsoObjectEnum.IsoObjectEnum.getTypeByViewClass(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this));
    }
    this.dispComponent.cacheBehaviour = this.createCacheBahaviour();
    this.initElementContainer();
    this.layers.init(this);
    this.dispComponent.init(this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP));
    this.additionalClips.init(this);
    this.statusIcons.init(this);
  };
  AIsoObjectVE.prototype.initElementContainer = function () {
    this._elementContainer = new __s0local4(this);
    var __s13local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(this);
    this.elementContainer.name = __s13local0.slice(__s13local0.lastIndexOf(":") + 1);
    this.elementContainer.mouseChildren = false;
  };
  AIsoObjectVE.prototype.destroy = function () {
    this.dispComponent.onLoadedSignal.removeAll();
    this.removeEventListener();
    this.destroyDisp();
    this.layers.destroy();
    if (this.elementContainer) {
      this.elementContainer.removeChildren();
      if (this.elementContainer.parent) {
        this.elementContainer.parent.removeChild(this.elementContainer);
      }
      this._elementContainer.veRef = null;
      this._elementContainer = null;
    }
    if (this._vo) {
      this._vo.destroy();
    }
  };
  AIsoObjectVE.prototype.updateDispBounds = function () {
    var __s20local0 = this.uiDisp;
    if (__s20local0) {
      this._dispLayerBounds = __s20local0.getBounds(null);
    }
  };
  AIsoObjectVE.prototype.addEventListener = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
  };
  AIsoObjectVE.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
  };
  AIsoObjectVE.prototype.onSpecialEventUpdated = function (__s27param0) {};
  AIsoObjectVE.prototype.updateDisp = function () {
    if (this.elementContainer) {
      this.destroyDisp();
      this.dispComponent.switchCreationState(true);
      this.createDisp();
      this.dispComponent.onLoadedSignal.add(this.bindFunction(this.onAllDispClipsLoaded));
      this.dispComponent.switchCreationState(false);
      this.updatePosition();
      if (this.vo && this.vo.rotationType != __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._4GfxFor4Dir && this.vo.rotationType != __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.NONE) {
        this.updateRotation();
      }
      this.additionalClips.updatePositions();
      this.statusIcons.updatePosition();
      this.addEventListener();
      if (this.elementContainer.stage == __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage) {
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
      }
    }
  };
  AIsoObjectVE.prototype.destroyDisp = function () {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.stopAllMovies(this.elementContainer);
    this.removeEventListener();
    this.additionalClips.reset();
    this.statusIcons.reset();
    this.dispComponent.reset();
    if (this._elementContainer) {
      this._elementContainer.x = this._elementContainer.y = 0;
    }
    if (this._debugCenterCross) {
      this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DEBUG_CROSS).removeChild(this._debugCenterCross);
      this._debugCenterCross = null;
    }
  };
  AIsoObjectVE.prototype.createDisp = function () {};
  Object.defineProperty(AIsoObjectVE.prototype, "dispOffset", {
    get: function () {
      return new __s0local2(-__dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x / 2, 0);
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.loadExternalClip = function (__s42param0, __s42param1 = null, __s42param2 = null, __s42param3 = 0, __s42param4 = false, __s42param5 = null, __s42param6 = false, __s42param7 = 1, __s42param8 = false, __s42param9 = false, __s42param10 = false) {
    var __s42local0 = __s42param0 == null ? this.assetClipName : __s42param0;
    var __s42local1 = __s42param1 == null ? this.assetFileName : __s42param1;
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s42local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s42local1), __s42param2, __s42param3, __s42param4 && __dep_export_IsoHelper.IsoHelper.view.areAnimationsActive, __s42param5, __s42param6, __s42param7, __s42param8, __s42param9, __s42param10, this.delayLoadingUntilFree);
  };
  AIsoObjectVE.prototype.updateAdditionalClips = function () {
    this.additionalClips.removeAllClips();
    this.createAdditionalClips();
  };
  AIsoObjectVE.prototype.createAdditionalClips = function () {};
  AIsoObjectVE.prototype.updateStatusIcon = function () {
    this.statusIcons.removeAllIcons();
    this.createStatusIcons();
  };
  AIsoObjectVE.prototype.createStatusIcons = function () {};
  AIsoObjectVE.prototype.updatePosition = function () {
    if (this.elementContainer) {
      if (this.vo && this.vo.isInBuildingDistrict) {
        var __s52local0 = Math.abs(this.vo.width - this.vo.height) / 2;
        var __s52local1 = 10 - (this.vo.width + this.vo.height) / 2;
        this.elementContainer.x = (__s52local0 - 0.5) * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * (this.vo.rotation % 2 == 0 ? 1 : -1);
        this.elementContainer.y = __s52local1 * __dep_export_IsoConst.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y;
      } else {
        var __s52local2 = this.getScreenPos();
        this.elementContainer.x = __s52local2.x;
        this.elementContainer.y = __s52local2.y;
        this.updateDispOffset();
      }
    }
  };
  AIsoObjectVE.prototype.updateDispOffset = function () {
    if (this.disp) {
      var __s57local0 = this.dispOffset;
      __s57local0 ||= new __s0local2();
      if (this.vo) {
        switch (this.vo.rotationType) {
          case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir:
          case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir:
            if (this.vo.rotation == 1 || this.vo.rotation == 3) {
              __s57local0.x *= -1;
            }
        }
      }
      this.disp.x = __s57local0.x;
      this.disp.y = __s57local0.y;
    }
  };
  AIsoObjectVE.prototype.updateRotation = function () {
    this.changeDispRotation(this.disp, this.vo.rotation);
    this.updateDispOffset();
    this.additionalClips.updatePositions();
    this.updateDispBounds();
  };
  AIsoObjectVE.prototype.changeDispRotation = function (__s65param0, __s65param1) {
    if (__s65param0) {
      var __s65local0 = this.getMirrorDirection(__s65param1);
      switch (this.vo.rotationType) {
        case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir:
          this.switchDispFrame(__s65param0, 1);
          this.mirrorDisp(__s65param0, __s65local0);
          break;
        case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir:
          this.switchDispFrame(__s65param0, __s65param1 == 0 || __s65param1 == 1 ? 2 : 1);
          this.mirrorDisp(__s65param0, __s65local0);
          break;
        case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._4FramesFor4Dir:
          this.switchDispFrame(__s65param0, __s65param1 + 1);
          break;
        case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._4GfxFor4Dir:
          this.updateDisp();
      }
    }
  };
  AIsoObjectVE.prototype.mirrorDisp = function (__s69param0, __s69param1) {
    if (__s69param0.scaleX != __s69param1) {
      __s69param0.scaleX *= -1;
    }
  };
  AIsoObjectVE.prototype.getMirrorDirection = function (__s72param0) {
    switch (this.vo.rotationType) {
      case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir:
      case __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir:
        if (__s72param0 == 0 || __s72param0 == 2) {
          return 1;
        } else {
          return -1;
        }
      default:
        return 1;
    }
  };
  AIsoObjectVE.prototype.switchDispFrame = function (__s77param0, __s77param1) {
    if (__s77param0) {
      var __s77local0 = false;
      if (__s77param0 instanceof __s0local0) {
        var __s77local1 = __s77param0;
        if (__s77local1.currentFrame !== __s77param1 && !__s77local1.isPlaying) {
          __s77local1.gotoAndStop(__s77param1);
          __s77local0 = true;
        }
      } else if (__s77param0 instanceof __dep_exact_9e901e8e2483a22f.AbstractGoodgameClip) {
        var __s77local2 = __s77param0;
        if (__s77local2.currentFrame !== __s77param1 && !__s77local2.running) {
          __s77local2.gotoAndStop(__s77param1);
          __s77local0 = true;
        }
      }
      if (__s77local0 && this.dispComponent.cacheDisp) {
        this.dispComponent.updateCache();
      }
    }
  };
  AIsoObjectVE.prototype.update = function (__s85param0) {
    this.statusIcons.update(__s85param0);
  };
  AIsoObjectVE.prototype.updateColorChange = function () {
    var __s87local0 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getChildrenByAnyName(this.elementContainer, this.getFlagStrings());
    var __s87local1 = !!this.vo && (this.vo.rotationType == __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir || this.vo.rotationType == __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir) && this.vo.rotation == 1;
    var __s87local2 = this.getCrestVO();
    if (__s87local0 && __s87local0.length) {
      for (var __s87local3 = 0, __s87local4 = __s87local0; __s87local3 < __s87local4.length; __s87local3++) {
        var __s87local5 = __s87local4[__s87local3];
        if (__s87local5 !== undefined) {
          var __s87local6 = __s87local5;
          if (__s87local6 && __s87local6.visible) {
            __dep_export_FlagHelper.FlagHelper.colorFlag(__s87local6, __s87local2, __s87local1);
            if (this.dispComponent.cacheDisp) {
              this.dispComponent.updateCache();
            }
          }
        }
      }
    }
  };
  AIsoObjectVE.prototype.getFlagStrings = function () {
    return ["flag", "flag0"];
  };
  AIsoObjectVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.UNKNOWN;
  };
  AIsoObjectVE.prototype.getScreenPos = function () {
    var __s99local0 = this.vo ? new __s0local2(this.vo.x, this.vo.y) : new __s0local2();
    return this.isoRenderer.camera.getScreenPosByGridPos(__s99local0);
  };
  AIsoObjectVE.prototype.getCrestVO = function () {
    var __s101local0;
    if (this.vo && this.vo.isoData && this.vo.isoData.areaData && this.vo.isoData.areaData.areaInfo) {
      __s101local0 = this.vo.isoData.areaData.areaInfo;
    }
    if (!this.vo || __s101local0 && __dep_export_CastleModel.CastleModel.userData && __s101local0.isOwnMapobject) {
      return __dep_export_CastleModel.CastleModel.userData.playerCrest;
    } else if (__s101local0 && __s101local0.ownerInfo && __s101local0.ownerInfo.crest) {
      return __s101local0.ownerInfo.crest;
    } else {
      return __dep_export_CrestVO.CrestVO.createDummyCrest();
    }
  };
  AIsoObjectVE.prototype.getFlagClipColor = function () {
    var __s107local0 = [];
    var __s107local1 = (this.vo.rotationType == __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._1FrameFor2Dir || this.vo.rotationType == __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._2FramesFor4Dir) && this.vo.rotation == 1;
    var __s107local2 = this.getCrestVO();
    if (!__s107local2) {
      return __s107local0;
    }
    if (__s107local1) {
      var __s107local3 = [];
      __s107local3[0] = __s107local2.colorsFour[1];
      __s107local3[1] = __s107local2.colorsFour[0];
      __s107local3[2] = __s107local2.colorsFour[3];
      __s107local3[3] = __s107local2.colorsFour[2];
      __s107local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", __s107local3));
    } else {
      __s107local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", __s107local2.colorsFour));
    }
    return __s107local0;
  };
  AIsoObjectVE.prototype.getDispClipColor = function () {
    var __s112local0 = [];
    __s112local0.push(new __dep_exact_9e901e8e2483a22f_1.ClipColor("flag", this.getCrestVO().colorsTwo));
    return __s112local0;
  };
  Object.defineProperty(AIsoObjectVE.prototype, "assetFileName", {
    get: function () {
      var __s114local0 = this.vo.getVisualClassName();
      if (this.canUseEventSkin()) {
        __s114local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return __s114local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "assetClipName", {
    get: function () {
      var __s119local0 = this.vo.getVisualClassName();
      if (this.canUseEventSkin()) {
        __s119local0 += "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return __s119local0;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.canUseEventSkin = function () {
    return __dep_export_IsoHelper.IsoHelper.view.canUseIsoEventSkin() && __dep_export_IsoHelper.IsoHelper.view.doesAssetFileExist(this.vo.getVisualClassName() + "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix());
  };
  AIsoObjectVE.prototype.getLocalDispPosTopCenter = function () {
    return new __s0local2(0, this.dispLayerBounds.top);
  };
  AIsoObjectVE.prototype.getGlobalDispPosTopCenter = function () {
    return __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(this.getLocalDispPosTopCenter(), this.uiDisp, this.isoRenderer.layers.transformLayer);
  };
  AIsoObjectVE.prototype.getLocalDispPosCenter = function () {
    return new __s0local2(this.dispLayerBounds.left + this.dispLayerBounds.width * 0.5, this.dispLayerBounds.top + this.dispLayerBounds.height * 0.5);
  };
  Object.defineProperty(AIsoObjectVE.prototype, "hasRingMenu", {
    get: function () {
      return this._hasRingMenu;
    },
    set: function (__s132param0) {
      this._hasRingMenu = __s132param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "uiPos", {
    get: function () {
      return this.getLocalDispPosCenter();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "uiDisp", {
    get: function () {
      return this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "uiBounds", {
    get: function () {
      return this.dispLayerBounds;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.onAllDispClipsLoaded = function () {
    this.dispComponent.onLoadedSignal.remove(this.bindFunction(this.onAllDispClipsLoaded));
    this.additionalClips.reset();
    this.updateAdditionalClips();
    this.updateStatusIcon();
    if (this.vo && this.vo.rotationType != __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum._4GfxFor4Dir && this.vo.rotationType != __dep_export_IsoObjectRotationEnum.IsoObjectRotationEnum.NONE) {
      this.updateRotation();
    }
    this.updateColorChange();
    this.updatePosition();
    this.updateDispBounds();
    this.additionalClips.updatePositions();
    this.statusIcons.updatePosition();
  };
  AIsoObjectVE.prototype.onCrestColorUpdated = function (__s143param0) {
    this.updateColorChange();
    if (this.additionalClips.containsClipsByType(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.FLAG)) {
      this.additionalClips.removeClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.FLAG);
    }
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.FLAG, 24, 1, true);
    this.disp.glowCache &&= null;
  };
  AIsoObjectVE.prototype.onMyAllianceInfoUpdated = function (__s146param0) {};
  AIsoObjectVE.prototype.onRenderStrategyChanged = function (__s148param0) {};
  AIsoObjectVE.prototype.onAnimationOptionChanged = function (__s150param0) {
    this.additionalClips.onAnimationOptionChanged();
  };
  Object.defineProperty(AIsoObjectVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "isoRenderer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "additionalClips", {
    get: function () {
      return this._additionalClips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "renderStrategy", {
    get: function () {
      return this.isoRenderer.strategies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "objectInteractions", {
    get: function () {
      return this.isoRenderer.mouse;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "statusIcons", {
    get: function () {
      return this._statusIcons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "dispComponent", {
    get: function () {
      return this._dispComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "elementContainer", {
    get: function () {
      return this._elementContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "disp", {
    get: function () {
      return this.dispComponent.dispContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "layers", {
    get: function () {
      return this._layers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "dispLayerBounds", {
    get: function () {
      return this._dispLayerBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.onCameraZoomChanged = function () {
    this.dispComponent.updateCache();
  };
  AIsoObjectVE.prototype.createCacheBahaviour = function () {
    return new __dep_export_IsoDispCreatorCacheBehaviour.IsoDispCreatorCacheBehaviour();
  };
  AIsoObjectVE.prototype.needsReCache = function (__s180param0) {
    var __s180local0 = !this.vo || !this.vo.isInBuildingDistrict;
    return this.dispComponent.cacheDisp && this.disp.children.length > 0 && this.disp._cacheScale !== __s180param0 && __s180local0;
  };
  return AIsoObjectVE;
}(__dep_export_CastleComponent.CastleComponent);
exports.AIsoObjectVE = __s0local5;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_IsoDispCreatorCacheBehaviour = require("gge-module:export_IsoDispCreatorCacheBehaviour");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoAdditionalClipManager = require("gge-module:export_IsoAdditionalClipManager");
var __dep_export_IsoObjectLayerManager = require("gge-module:export_IsoObjectLayerManager");
var __dep_export_IsoStatusIconManager = require("gge-module:export_IsoStatusIconManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local5, "ICollectableRendererList", "IIngameUICapable");
