var __s0local0;
var __s0local1 = this && this.__extends || (__s0local0 = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (__s1param0, __s1param1) {
  __s1param0.__proto__ = __s1param1;
} || function (__s3param0, __s3param1) {
  for (var __s3local0 in __s3param1) {
    if (__s3param1.hasOwnProperty(__s3local0)) {
      __s3param0[__s3local0] = __s3param1[__s3local0];
    }
  }
}, function (__s8param0, __s8param1) {
  function __s8local0() {
    this.constructor = __s8param0;
  }
  __s0local0(__s8param0, __s8param1);
  __s8param0.prototype = __s8param1 === null ? Object.create(__s8param1) : (__s8local0.prototype = __s8param1.prototype, new __s8local0());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
var __dep_exact_74a46a23c18f1e11 = require("gge-module:exact_74a46a23c18f1e11");
exports.create = function create(__s12param0, __s12param1) {
  __s12param1.check = __s12param0;
  __s12param1.validate = validate;
  __s12param1.guard = function guard(__s14param0) {
    return validate(__s14param0).success;
  };
  __s12param1.Or = function __s16local0(__s16param0) {
    return __dep_exact_f5b02bbe07c08b29.Union(__s12param1, __s16param0);
  };
  __s12param1.And = function And(__s18param0) {
    return __dep_exact_f5b02bbe07c08b29.Intersect(__s12param1, __s18param0);
  };
  __s12param1.withConstraint = function withConstraint(__s20param0, __s20param1) {
    return __dep_exact_f5b02bbe07c08b29.Constraint(__s12param1, __s20param0, __s20param1);
  };
  __s12param1.reflect = __s12param1;
  __s12param1.toString = function () {
    return "Runtype<" + __dep_exact_74a46a23c18f1e11.default(__s12param1) + ">";
  };
  return __s12param1;
  function validate(__s24param0) {
    try {
      __s12param0(__s24param0);
      return {
        success: true,
        value: __s24param0
      };
    } catch (__s27local0) {
      return {
        success: false,
        message: __s27local0.message
      };
    }
  }
};
var __s0local2 = function (__s29param0) {
  function ValidationError(__s31param0) {
    return __s29param0.call(this, __s31param0) || this;
  }
  __s0local1(ValidationError, __s29param0);
  return ValidationError;
}(Error);
exports.ValidationError = __s0local2;
exports.validationError = function validationError(__s33param0) {
  return new __s0local2(__s33param0);
};
