Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LocalStorageFactory = require("gge-module:export_LocalStorageFactory");
var __s0local0 = function () {
  function AbstractCookie(__s3param0) {
    this._initialized = false;
    if (__s3param0 === undefined || __s3param0 === null || __s3param0 === "") {
      throw new Error("Section cannot be null or empty");
    }
    this._localStorage = __dep_export_LocalStorageFactory.LocalStorageFactory.createLocalStorage(__s3param0);
  }
  AbstractCookie.prototype.initialize = function () {
    var __s6local0 = this;
    return new Promise(function (__s8param0, __s8param1) {
      if (__s6local0._initialized) {
        __s8param0();
      } else {
        __s6local0._localStorage.read().then(function (__s12param0) {
          __s6local0._initialized = true;
          __s6local0.readLocalStorage();
          __s8param0();
        }).catch(function (__s14param0) {
          __s6local0._initialized = true;
          __s6local0.readLocalStorage();
          __s8param0();
        });
      }
    });
  };
  AbstractCookie.prototype.readLocalStorage = function () {};
  AbstractCookie.prototype.writeLocalStorage = function () {
    this._localStorage.write();
  };
  AbstractCookie.prototype.isInitialized = function () {
    if (!this._initialized) {
      throw new Error("Local Storage is not initialized.");
    }
  };
  AbstractCookie.prototype.setAttribute = function (__s23param0, __s23param1, __s23param2 = true) {
    this.isInitialized();
    this._localStorage.setAttribute(__s23param0, __s23param1);
    if (__s23param2) {
      this.writeLocalStorage();
    }
  };
  AbstractCookie.prototype.getAttribute = function (__s26param0) {
    this.isInitialized();
    return this._localStorage.getAttribute(__s26param0);
  };
  AbstractCookie.prototype.getAttributeAsString = function (__s28param0) {
    this.isInitialized();
    var __s28local0 = this.getAttribute(__s28param0);
    return String(__s28local0 !== undefined ? __s28local0 : "");
  };
  AbstractCookie.prototype.getAttributeAsBoolean = function (__s30param0) {
    this.isInitialized();
    var __s30local0 = this.getAttributeAsString(__s30param0);
    if (isNaN(Number(__s30local0))) {
      return __s30local0.toLowerCase() === "true";
    } else {
      return __s30local0 !== "0";
    }
  };
  AbstractCookie.prototype.getAttributeAsInt = function (__s34param0) {
    this.isInitialized();
    return this.getAttributeAsNumber(__s34param0);
  };
  AbstractCookie.prototype.getAttributeAsUint = function (__s36param0) {
    this.isInitialized();
    return this.getAttributeAsNumber(__s36param0);
  };
  AbstractCookie.prototype.getAttributeAsNumber = function (__s38param0) {
    this.isInitialized();
    return Number(this.getAttribute(__s38param0));
  };
  AbstractCookie.prototype.deleteAttribute = function (__s40param0, __s40param1 = true) {
    this.isInitialized();
    if (this.hasAttribute(__s40param0)) {
      this._localStorage.deleteAttribute(__s40param0);
      if (__s40param1) {
        this.writeLocalStorage();
      }
    }
  };
  AbstractCookie.prototype.hasAttribute = function (__s44param0) {
    this.isInitialized();
    return this._localStorage.hasAttribute(__s44param0);
  };
  AbstractCookie.prototype.getAttributes = function () {
    this.isInitialized();
    return this._localStorage.getAttributes();
  };
  return AbstractCookie;
}();
exports.AbstractCookie = __s0local0;
