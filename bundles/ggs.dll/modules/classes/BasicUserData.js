Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function () {
  function BasicUserData() {
    this._userLevel = 1;
    this._email = "";
    this._userID = -1;
    this._playerID = -1;
  }
  BasicUserData.prototype.isGuest = function () {
    return this.playerID === -1;
  };
  Object.defineProperty(BasicUserData.prototype, "userName", {
    get: function () {
      return this._userName || "";
    },
    set: function (__s9param0) {
      this._userName = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "userNameSet", {
    get: function () {
      return this._userName.length > 0 || this._userName !== "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "userLevel", {
    get: function () {
      return this._userLevel;
    },
    set: function (__s15param0) {
      if (this._userLevel !== __s15param0) {
        this._userLevel = __s15param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "loginPwd", {
    get: function () {
      return this._loginPwd;
    },
    set: function (__s20param0) {
      this._loginPwd = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "loginToken", {
    get: function () {
      return this._loginToken;
    },
    set: function (__s24param0) {
      this._loginToken = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "email", {
    get: function () {
      return this._email;
    },
    set: function (__s28param0) {
      this._email = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "userID", {
    get: function () {
      return this._userID;
    },
    set: function (__s32param0) {
      this._userID = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUserData.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    set: function (__s36param0) {
      this._playerID = __s36param0;
      __dep_class_BasicModel.BasicModel.localData.savePlayerID(__s36param0);
    },
    enumerable: true,
    configurable: true
  });
  return BasicUserData;
}();
exports.BasicUserData = __s0local0;
