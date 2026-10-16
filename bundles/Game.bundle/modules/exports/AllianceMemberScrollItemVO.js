Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __s0local0 = function (__s1param0) {
  function AllianceMemberScrollItemVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = false, __s3param5 = false, __s3param6 = true) {
    var __s3local0 = this;
    __s3local0._selected = false;
    __s3local0._distanceToTarget = 0;
    __s3local0._legendXPShown = false;
    __s3local0._honorShown = false;
    __s3local0._coinShown = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._legendXPShown = !!__s3param4;
    __s3local0._honorShown = !!__s3param5;
    __s3local0._coinShown = !!__s3param6;
    __s3local0._additionalMemberInfoVO = __s3param1;
    __s3local0._ownerInfoVO = __s3param0;
    var __s3local1 = __s3param0.getMainCastlePositionByKingdomID(__s3param3);
    __s3local0._distanceToTarget = __dep_export_MapHelper.MapHelper.getShortestDistance(__s3param2, __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMemberScrollItemVO, __s1param0);
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (__s7param0) {
      this._selected = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "distanceToTarget", {
    get: function () {
      return this._distanceToTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "ownerInfoVO", {
    get: function () {
      return this._ownerInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "additionalMemberInfoVO", {
    get: function () {
      return this._additionalMemberInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "legendXPShown", {
    get: function () {
      return this._legendXPShown;
    },
    set: function (__s17param0) {
      this._legendXPShown = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "honorShown", {
    get: function () {
      return this._honorShown;
    },
    set: function (__s21param0) {
      this._honorShown = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItemVO.prototype, "coinShown", {
    get: function () {
      return this._coinShown;
    },
    set: function (__s25param0) {
      this._coinShown = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceMemberScrollItemVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.AllianceMemberScrollItemVO = __s0local0;
