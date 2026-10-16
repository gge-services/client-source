Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function MysteryBoxOpeningDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._lootBoxVO = __s3param0;
    __s3local0._selectedKey = __s3param1;
    __s3local0._progressValue = __s3param2;
    __s3local0._oldProgressValue = __s3param3;
    __s3local0.barTimesFilled = __s3param4;
    __s3local0._rewards = __s3param5;
    __s3local0._rewardIds = __s3param6;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MysteryBoxOpeningDialogProperties, __s1param0);
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "boxId", {
    get: function () {
      return this._lootBoxVO.lootBoxID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "boxRarity", {
    get: function () {
      return this._lootBoxVO.rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "boxName", {
    get: function () {
      return this._lootBoxVO.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "tombolaId", {
    get: function () {
      return this._lootBoxVO.lootBoxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "selectedKey", {
    get: function () {
      return this._selectedKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "progressValue", {
    get: function () {
      return this._progressValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "oldProgressValue", {
    get: function () {
      return this._oldProgressValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  return MysteryBoxOpeningDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.MysteryBoxOpeningDialogProperties = __s0local0;
