Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AutoRecruitmentCopyListItemVO(__s3param0) {
    this._areaId = 0;
    this._kingdomId = 0;
    this._errorId = 0;
    this._costs = new __dep_export_AutoRecruitmentCosts.AutoRecruitmentCosts();
    this._recruitmentTime = 0;
    this._isSelected = false;
    this._data = __s3param0;
    this._areaId = __dep_exact_f855840627e6e145.int(__s3param0.AID);
    this._kingdomId = __dep_exact_f855840627e6e145.int(__s3param0.SID);
    this._errorId = __dep_exact_f855840627e6e145.int(__s3param0.EID);
    this.costs.fillByServerData(__s3param0);
    this._recruitmentTime = __dep_exact_f855840627e6e145.int(__s3param0.ART);
  }
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "hasError", {
    get: function () {
      return this.errorId != __dep_exact_26a421b704832cff.ERROR.ALL_OK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (__s9param0) {
      this._isSelected = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "areaId", {
    get: function () {
      return this._areaId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "errorId", {
    get: function () {
      return this._errorId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListItemVO.prototype, "recruitmentTime", {
    get: function () {
      return this._recruitmentTime;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyListItemVO;
}();
exports.AutoRecruitmentCopyListItemVO = __s0local0;
var __dep_export_AutoRecruitmentCosts = require("gge-module:export_AutoRecruitmentCosts");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
