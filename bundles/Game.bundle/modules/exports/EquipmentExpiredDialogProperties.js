Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ExpiredEquipmentVO = require("gge-module:export_ExpiredEquipmentVO");
var __s0local0 = function (__s1param0) {
  function EquipmentExpiredDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._generals = [];
    __s3local0._barons = [];
    __s3local0._lordList = [];
    __s3local0._numberOfLords = 0;
    __s3local0._numberOfEquipments = 0;
    __s3local0.parseData(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentExpiredDialogProperties, __s1param0);
  EquipmentExpiredDialogProperties.prototype.parseData = function (__s5param0) {
    this._generals = [];
    this._barons = [];
    this._lordList = [];
    this._numberOfLords = 0;
    this._numberOfEquipments = 0;
    for (var __s5local0 = 0; __s5local0 < __s5param0[__dep_exact_26a421b704832cff.CommKeys.COMMANDERS].length; ++__s5local0) {
      var __s5local1 = new __dep_export_ExpiredEquipmentVO.ExpiredEquipmentVO();
      __s5local1.parseData(__s5param0[__dep_exact_26a421b704832cff.CommKeys.COMMANDERS][__s5local0]);
      this._generals.push(__s5local1);
    }
    for (__s5local0 = 0; __s5local0 < __s5param0.B.length; ++__s5local0) {
      (__s5local1 = new __dep_export_ExpiredEquipmentVO.ExpiredEquipmentVO()).parseData(__s5param0.B[__s5local0]);
      this._barons.push(__s5local1);
    }
    for (var __s5local2 = 0, __s5local3 = this._generals; __s5local2 < __s5local3.length; __s5local2++) {
      __s5local1 = __s5local3[__s5local2];
      this.lordList.push(__s5local1.lordVO);
    }
    for (var __s5local4 = 0, __s5local5 = this._barons; __s5local4 < __s5local5.length; __s5local4++) {
      __s5local1 = __s5local5[__s5local4];
      this.lordList.push(__s5local1.lordVO);
    }
    this._numberOfLords = __dep_exact_f855840627e6e145.int(this._generals.length + this._barons.length);
    for (var __s5local6 = 0, __s5local7 = this._generals; __s5local6 < __s5local7.length; __s5local6++) {
      __s5local1 = __s5local7[__s5local6];
      this._numberOfEquipments += __dep_exact_f855840627e6e145.int(__s5local1.equipments.length);
    }
    for (var __s5local8 = 0, __s5local9 = this._barons; __s5local8 < __s5local9.length; __s5local8++) {
      __s5local1 = __s5local9[__s5local8];
      this._numberOfEquipments += __dep_exact_f855840627e6e145.int(__s5local1.equipments.length);
    }
  };
  EquipmentExpiredDialogProperties.prototype.getExpiredEquipmentVOByLord = function (__s19param0) {
    if (this._generals != null) {
      for (var __s19local0 = 0, __s19local1 = this._generals; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined && __s19local2.lordVO.id == __s19param0) {
          return __s19local2;
        }
      }
    }
    for (var __s19local3 = 0, __s19local4 = this._barons; __s19local3 < __s19local4.length; __s19local3++) {
      if ((__s19local2 = __s19local4[__s19local3]).lordVO.id == __s19param0) {
        return __s19local2;
      }
    }
    return null;
  };
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "generals", {
    get: function () {
      return this._generals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "barons", {
    get: function () {
      return this._barons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "lordList", {
    get: function () {
      return this._lordList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "numberOfLords", {
    get: function () {
      return this._numberOfLords;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpiredDialogProperties.prototype, "numberOfEquipments", {
    get: function () {
      return this._numberOfEquipments;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentExpiredDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.EquipmentExpiredDialogProperties = __s0local0;
