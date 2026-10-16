Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleFightItemVO() {
    this.slotType = 0;
    this.itemLevel = 0;
    this.unlockLevel = -1;
    this.unlockSkillID = -1;
    this.locked = false;
    this.outline = 0;
  }
  CastleFightItemVO.prototype.isUnlocked = function () {
    if (this.unlockLevel >= 0) {
      return this.unlockLevel >= this.itemLevel;
    } else {
      return __dep_export_CastleModel.CastleModel.legendSkillData.isSkillActive(__dep_export_CastleModel.CastleModel.legendSkillData.getSkillByID(this.unlockSkillID));
    }
  };
  CastleFightItemVO.prototype.isLegendSlot = function () {
    return this.unlockSkillID >= 0;
  };
  CastleFightItemVO.prototype.isFree = function () {
    return this.unitVO == null;
  };
  CastleFightItemVO.prototype.isSameType = function (__s13param0) {
    return !!this.unitVO && this.unitVO.type == __s13param0.type;
  };
  CastleFightItemVO.prototype.getWodId = function () {
    return __dep_exact_f855840627e6e145.int(this.unitVO ? this.unitVO.wodId : -1);
  };
  CastleFightItemVO.prototype.getAmount = function () {
    return __dep_exact_f855840627e6e145.int(this.unitVO ? this.unitVO.inventoryAmount : 0);
  };
  Object.defineProperty(CastleFightItemVO.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (__s21param0) {
      this._unitVO = __s21param0;
      this.outline = CastleFightItemVO.OUTLINE_NONE;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemVO.__initialize_static_members = function () {
    CastleFightItemVO.OUTLINE_NONE = 0;
    CastleFightItemVO.OUTLINE_ORANGE = 1;
    CastleFightItemVO.OUTLINE_RED = 2;
  };
  return CastleFightItemVO;
}();
exports.CastleFightItemVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__s0local0.__initialize_static_members();
