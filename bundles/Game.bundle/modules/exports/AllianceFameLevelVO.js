Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceFameLevelVO() {
    this._level = 0;
    this._threshHold = 0;
  }
  AllianceFameLevelVO.prototype.fillFromParamXML = function (__s5param0) {
    this._level = parseInt(__s5param0.fameLevel || "");
    this._threshHold = parseFloat(__s5param0.threshold || "");
    this._awardList = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(parseInt(__s5param0.wood || "")), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(parseInt(__s5param0.stone || "")), new __dep_export_CollectableItemC1VO.CollectableItemC1VO(parseInt(__s5param0.currency1 || "")), new __dep_export_CollectableItemC2VO.CollectableItemC2VO(parseInt(__s5param0.currency2 || "")));
  };
  Object.defineProperty(AllianceFameLevelVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFameLevelVO.prototype, "awardList", {
    get: function () {
      return this._awardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFameLevelVO.prototype, "threshHold", {
    get: function () {
      return this._threshHold;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceFameLevelVO;
}();
exports.AllianceFameLevelVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
