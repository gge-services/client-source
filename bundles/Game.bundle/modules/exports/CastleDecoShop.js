Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleDecoShop() {
    this.buildDecoShop();
  }
  CastleDecoShop.prototype.buildDecoShop = function () {
    this._civil = [];
    this._military = [];
    this._deco = [];
    this._defence = [];
    this._tutorial = [];
    this._only_in_event = [];
    for (var __s5local0 = 0, __s5local1 = Array.from(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).values()); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined && (__s5local2.group == __dep_export_ClientConstCastle.ClientConstCastle.GROUP_BUILDING || __s5local2.group == __dep_export_ClientConstCastle.ClientConstCastle.GROUP_DEFENCE || __s5local2.group == __dep_export_ClientConstCastle.ClientConstCastle.GROUP_MOAT)) {
        var __s5local3 = __s5local2;
        if (__s5local3.shopCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
          continue;
        }
        switch (__s5local3.shopCategory) {
          case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL:
            this._civil.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            break;
          case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MILITARY:
            this._military.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            break;
          case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DECO:
            this._deco.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            break;
          case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE:
            this._defence.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            break;
          case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_TUTORIAL:
            this._tutorial.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            break;
          case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_SEASONEVENT:
            if (__s5local2.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.DECO) {
              this._deco.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            } else {
              this._only_in_event.push(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local2.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING));
            }
        }
      }
    }
  };
  Object.defineProperty(CastleDecoShop.prototype, "storage", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "defence", {
    get: function () {
      return this._defence;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "civil", {
    get: function () {
      return this._civil;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "military", {
    get: function () {
      return this._military;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "deco", {
    get: function () {
      return this._deco;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "tutorial", {
    get: function () {
      return this._tutorial;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShop.prototype, "only_in_event", {
    get: function () {
      return this._only_in_event;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDecoShop;
}();
exports.CastleDecoShop = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
