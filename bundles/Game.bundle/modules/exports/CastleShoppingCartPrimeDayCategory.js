Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleShoppingCartPrimeDayCategory(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._groupId = 0;
    this._categoryMc = __s3param0;
    this._groupId = __s3param1 + 1;
    __s3param0.gotoAndStop(this._groupId);
    this._choosableGroup = new __dep_export_CastleShoppingCartPrimeDayChoosableGroup.CastleShoppingCartPrimeDayChoosableGroup(this, __s3param2);
    this._selectedGroup = new __dep_export_CastleShoppingCartPrimeDaySelectedGroup.CastleShoppingCartPrimeDaySelectedGroup(this, __s3param3);
    if (this._selectedGroup.full()) {
      this._choosableGroup.disable();
    }
  }
  CastleShoppingCartPrimeDayCategory.prototype.checkClick = function (__s6param0) {
    var __s6local0 = this._choosableGroup.checkClick(__s6param0) || this._selectedGroup.checkClick(__s6param0);
    if (this._selectedGroup.full()) {
      this._choosableGroup.disable();
    } else {
      this._choosableGroup.enable();
    }
    return __s6local0;
  };
  CastleShoppingCartPrimeDayCategory.prototype.clear = function () {
    this._choosableGroup.clear();
    this._selectedGroup.clear();
  };
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "categoryMc", {
    get: function () {
      return this._categoryMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "groupId", {
    get: function () {
      return this._groupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "choosableGroup", {
    get: function () {
      return this._choosableGroup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayCategory.prototype, "selectedGroup", {
    get: function () {
      return this._selectedGroup;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayCategory;
}();
exports.CastleShoppingCartPrimeDayCategory = __s0local0;
var __dep_export_CastleShoppingCartPrimeDayChoosableGroup = require("gge-module:export_CastleShoppingCartPrimeDayChoosableGroup");
var __dep_export_CastleShoppingCartPrimeDaySelectedGroup = require("gge-module:export_CastleShoppingCartPrimeDaySelectedGroup");
