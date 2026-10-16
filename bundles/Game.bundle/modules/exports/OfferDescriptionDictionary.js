Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function OfferDescriptionDictionary() {
    this._dict = new Map();
  }
  OfferDescriptionDictionary.prototype.addEntry = function (__s5param0, __s5param1) {
    if (this._dict.get(__s5param0) === undefined) {
      this._dict.set(__s5param0, __s5param1.constructor);
      return true;
    }
    throw new Error("Offer Description already exists duplicates not allowed. Typename: " + __s5param0);
  };
  OfferDescriptionDictionary.prototype.removeEntry = function (__s8param0) {
    var __s8local0 = this._dict.get(__s8param0);
    if (__s8local0) {
      this._dict.delete(__s8param0);
    }
    return __s8local0;
  };
  OfferDescriptionDictionary.prototype.clear = function () {
    this._dict = new Map();
  };
  OfferDescriptionDictionary.prototype.getEntry = function (__s13param0) {
    return this._dict.get(__s13param0);
  };
  OfferDescriptionDictionary.prototype.hasEntry = function (__s15param0) {
    return this._dict.get(__s15param0) !== undefined;
  };
  OfferDescriptionDictionary.prototype.traceAllEntries = function () {
    var __s17local0;
    __dep_exact_9e901e8e2483a22f.info("---- OfferDescriptionDictonary ----");
    if (this._dict != null) {
      for (var __s17local1 = 0, __s17local2 = Array.from(this._dict.keys()); __s17local1 < __s17local2.length; __s17local1++) {
        if ((__s17local0 = __s17local2[__s17local1]) !== undefined) {
          __dep_exact_9e901e8e2483a22f.info("      " + __s17local0 + " ---> " + this._dict.get(__s17local0).toString());
        }
      }
    }
  };
  return OfferDescriptionDictionary;
}();
exports.OfferDescriptionDictionary = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
