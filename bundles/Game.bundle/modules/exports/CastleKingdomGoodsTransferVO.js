Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleKingdomGoodsTransferVO() {
    this._resources = new __dep_export_CollectableList.CollectableList();
    this._endTime = 0;
    this._targetKingdomID = 0;
  }
  CastleKingdomGoodsTransferVO.prototype.fillFromParamObject = function (__s5param0) {
    this._resources = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.G);
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.RS);
    this._endTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._targetKingdomID = __dep_exact_f855840627e6e145.int(__s5param0.KID);
  };
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max((this._endTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "totalTravelTimeInSeconds", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._targetKingdomID).ressourceTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "progressPercent", {
    get: function () {
      return 1 - Math.max(this.remainingTimeInSeconds / this.totalTravelTimeInSeconds, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "toolTipText", {
    get: function () {
      return this._resources.getShortTooltip();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "targetKingdomID", {
    get: function () {
      return this._targetKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomGoodsTransferVO;
}();
exports.CastleKingdomGoodsTransferVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
