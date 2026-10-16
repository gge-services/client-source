Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function NetworkCookie() {
    return __s1param0.call(this, "nc") || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(NetworkCookie, __s1param0);
  NetworkCookie.prototype.saveLoginData = function (__s5param0, __s5param1) {
    this.setAttribute(NetworkCookie.ATTRIBUTE_USERNAME, __s5param0, false);
    this.setAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, __s5param1, false);
    this.writeLocalStorage();
  };
  NetworkCookie.prototype.deleteLoginData = function () {
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_USERNAME, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, false);
    this.writeLocalStorage();
  };
  NetworkCookie.prototype.clear = function () {
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_USERNAME, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_EMAIL, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_COUNTRY, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_PLAYER_ID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_ZONE_ID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_UID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_CLIENT_VERSION, false);
    this.writeLocalStorage();
  };
  Object.defineProperty(NetworkCookie.prototype, "username", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_USERNAME);
    },
    set: function (__s13param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_USERNAME, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "loginToken", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN);
    },
    set: function (__s17param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "email", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_EMAIL);
    },
    set: function (__s21param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_EMAIL, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "country", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_COUNTRY)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_COUNTRY);
      } else {
        return "";
      }
    },
    set: function (__s27param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_COUNTRY, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "playerId", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_PLAYER_ID)) {
        return this.getAttributeAsNumber(NetworkCookie.ATTRIBUTE_PLAYER_ID);
      } else {
        return 0;
      }
    },
    set: function (__s33param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_PLAYER_ID, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "instanceId", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID)) {
        return this.getAttributeAsNumber(NetworkCookie.ATTRIBUTE_INSTANCE_ID);
      } else {
        return 0;
      }
    },
    set: function (__s39param0) {
      if (__s39param0 <= -1) {
        __s39param0 = 0;
      }
      this.setAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "hasInstanceId", {
    get: function () {
      return this.hasAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID) && this.getAttributeAsInt(NetworkCookie.ATTRIBUTE_INSTANCE_ID) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "zoneId", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_ZONE_ID)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_ZONE_ID);
      } else {
        return "";
      }
    },
    set: function (__s48param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_ZONE_ID, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "facebookUID", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_UID)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_FACEBOOK_UID);
      } else {
        return "";
      }
    },
    set: function (__s54param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_UID, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "facebookAccessToken", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN);
      } else {
        return "";
      }
    },
    set: function (__s60param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN, __s60param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "clientVersion", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_CLIENT_VERSION + (this.hasInstanceId ? this.instanceId : ""));
    },
    set: function (__s64param0) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_CLIENT_VERSION + (this.hasInstanceId ? this.instanceId : ""), __s64param0);
    },
    enumerable: true,
    configurable: true
  });
  NetworkCookie.prototype.isEmpty = function () {
    return this._localStorage.getAttributes().length == 0;
  };
  NetworkCookie.ATTRIBUTE_USERNAME = "p_username";
  NetworkCookie.ATTRIBUTE_EMAIL = "p_email";
  NetworkCookie.ATTRIBUTE_LOGIN_TOKEN = "p_loginToken";
  NetworkCookie.ATTRIBUTE_COUNTRY = "country";
  NetworkCookie.ATTRIBUTE_PLAYER_ID = "playerID";
  NetworkCookie.ATTRIBUTE_INSTANCE_ID = "instanceId";
  NetworkCookie.ATTRIBUTE_ZONE_ID = "zoneId";
  NetworkCookie.ATTRIBUTE_FACEBOOK_UID = "facebookUID";
  NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN = "facebook_accessToken";
  NetworkCookie.ATTRIBUTE_CLIENT_VERSION = "clientVersion";
  NetworkCookie.ATTRIBUTES = [NetworkCookie.ATTRIBUTE_USERNAME, NetworkCookie.ATTRIBUTE_EMAIL, NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, NetworkCookie.ATTRIBUTE_COUNTRY, NetworkCookie.ATTRIBUTE_PLAYER_ID, NetworkCookie.ATTRIBUTE_INSTANCE_ID, NetworkCookie.ATTRIBUTE_ZONE_ID, NetworkCookie.ATTRIBUTE_FACEBOOK_UID, NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN, NetworkCookie.ATTRIBUTE_CLIENT_VERSION];
  return NetworkCookie;
}(require("gge-module:class_AbstractCookie").AbstractCookie);
exports.NetworkCookie = __s0local0;
