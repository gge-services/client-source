Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __s0local0 = function (__s1param0) {
  function PlagueareaMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "Shadow";
    __s3local0._isVisibleOnMap = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlagueareaMapobjectVO, __s1param0);
  PlagueareaMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s5local1 = this.assetFileURL("ShadowEvent");
    var __s5local2 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local3 = __s5local0 == "Classic" ? "ShadowMapObjectBackground_" : "ShadowCampBackground_";
    __s5local2.addItem(this.getAsExternalClip(__s5local3 + __s5local0, __s5local1));
    __s5local2.addItem(this.getAsExternalClip("Shadow_Mapobject", __s5local1));
    __s5local2.asDisplayObject().scaleX = __s5local2.asDisplayObject().scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
    return __s5local2;
  };
  PlagueareaMapobjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this._areaType = __s7param0[0];
    this._absAreaPosX = __s7param0[1];
    this._absAreaPosY = __s7param0[2];
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7param0[3] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = __s7param0[4];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(PlagueareaMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("PlaguemonkCamp");
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return PlagueareaMapobjectVO;
}(require("gge-module:export_ContainerBuilderMapobjectVO").ContainerBuilderMapobjectVO);
exports.PlagueareaMapobjectVO = __s0local0;
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
