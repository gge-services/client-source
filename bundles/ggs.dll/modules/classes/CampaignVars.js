Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_paramToBool = require("gge-module:export_paramToBool");
var __dep_class_HTMLEscaper = require("gge-module:class_HTMLEscaper");
var __dep_class_CampaignConstants = require("gge-module:class_CampaignConstants");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("CampaignVars");
var __s0local1 = function () {
  function CampaignVars() {
    this._isInitialized = false;
  }
  CampaignVars.prototype.initialize = function (__s5param0) {
    var __s5local0 = __s5param0.data;
    __s0local0.debug("Client:" + __s5param0.clientObjectClassName + ", context: " + __s5param0.contextDescription + ", vars: " + __s5param0.data + ", initialized: " + this._isInitialized);
    if (__s5local0) {
      if (!this._isInitialized) {
        try {
          this._partnerId = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.PARTNER_ID), "-1"));
          this._lpPartnerId = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.LP_PARTNER_ID), "-1"));
          this._channelId = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.CHANNEL_ID)));
          this._trafficSource = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.TRAFFIC_SOURCE)));
          var __s5local1 = __dep_export_paramToBool.paramToNum(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.CREATIVE), -1);
          this._creative = __s5local1 > 0 ? this.parseAttribute(__s5local1.toString()) : "-1";
          this._placement = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.PLACEMENT)));
          this._keyword = this.convertToHexString(this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.KEYWORD))));
          this._network = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.NETWORK)));
          var __s5local2 = __dep_export_paramToBool.paramToNum(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.LP), -1);
          this._lp = __s5local2 > 0 ? this.parseAttribute(__s5local2.toString()) : "-1";
          var __s5local3 = __dep_export_paramToBool.paramToNum(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.AID), -1);
          this._aid = __s5local3 > 0 ? this.parseAttribute(__s5local3.toString()) : "-1";
          this._camp = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.CAMP), "-1"));
          this._adgr = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.ADGR), "-1"));
          this._ad_click_id = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.AD_CLICK_ID)));
          this._matchtype = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.MATCHTYPE)));
          this._lang = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.LANGUAGE)));
          this._country = this.parseAttribute(__dep_export_paramToBool.paramToString(__s5local0.get(__dep_class_CampaignConstants.CampaignConstants.COUNTRY)));
          if (this.isValid()) {
            this._isInitialized = true;
          }
          __s0local0.debug("initialization done. Vars:" + toString());
        } catch (__s11local0) {
          __s0local0.warn("Failed constructing campaign vars.");
        }
      }
    } else {
      __s0local0.debug("CampaignVars, initialize(): vars are null");
    }
  };
  CampaignVars.prototype.convertToHexString = function (__s14param0) {
    var __s14local0 = "";
    for (var __s14local1 = 0; __s14local1 < __s14param0.length; __s14local1++) {
      __s14local0 += __s14param0.charCodeAt(__s14local1).toString(16);
    }
    return __s14local0;
  };
  CampaignVars.prototype.parseAttribute = function (__s18param0) {
    if (__s18param0 && __s18param0 !== "") {
      return __dep_class_HTMLEscaper.HTMLEscaper.unescape(__s18param0);
    } else {
      return "";
    }
  };
  CampaignVars.prototype.toObject = function () {
    var __s22local0 = {
      [__dep_class_CampaignConstants.CampaignConstants.PARTNER_ID]: this._partnerId,
      [__dep_class_CampaignConstants.CampaignConstants.LP_PARTNER_ID]: this._lpPartnerId,
      [__dep_class_CampaignConstants.CampaignConstants.CHANNEL_ID]: this._channelId,
      [__dep_class_CampaignConstants.CampaignConstants.TRAFFIC_SOURCE]: this._trafficSource,
      [__dep_class_CampaignConstants.CampaignConstants.CREATIVE]: this._creative,
      [__dep_class_CampaignConstants.CampaignConstants.PLACEMENT]: this._placement,
      [__dep_class_CampaignConstants.CampaignConstants.KEYWORD]: this._keyword,
      [__dep_class_CampaignConstants.CampaignConstants.NETWORK]: this._network,
      [__dep_class_CampaignConstants.CampaignConstants.LP]: this._lp,
      [__dep_class_CampaignConstants.CampaignConstants.AID]: this._aid,
      [__dep_class_CampaignConstants.CampaignConstants.CAMP]: this._camp,
      [__dep_class_CampaignConstants.CampaignConstants.ADGR]: this._adgr,
      [__dep_class_CampaignConstants.CampaignConstants.MATCHTYPE]: this._matchtype,
      [__dep_class_CampaignConstants.CampaignConstants.LANGUAGE]: this._lang,
      [__dep_class_CampaignConstants.CampaignConstants.COUNTRY]: this._country,
      [__dep_class_CampaignConstants.CampaignConstants.AD_CLICK_ID]: this._ad_click_id
    };
    return __s22local0;
  };
  CampaignVars.prototype.toString = function () {
    return ["partnerId: " + this.partnerId, "channelId: " + this.channelId, "trafficSource: " + this.trafficSource, "creative: " + this.creative, "placement: " + this.placement, "keyword: " + this.keyword, "network: " + this.network, "lp: " + this.lp, "aid: " + this.aid, "camp: " + this.camp, "adgr: " + this.adgr, "matchtype: " + this.matchtype, "lang: " + this.lang, "country: " + this.country].join(", ");
  };
  Object.defineProperty(CampaignVars.prototype, "isInitialized", {
    get: function () {
      return this._isInitialized;
    },
    enumerable: true,
    configurable: true
  });
  CampaignVars.prototype.isValid = function () {
    var __s28local0;
    var __s28local1 = parseInt(this._partnerId);
    if (!isNaN(__s28local1) && __s28local1 >= 0) {
      __s28local0 = true;
    }
    return __s28local0;
  };
  Object.defineProperty(CampaignVars.prototype, "channelId", {
    get: function () {
      return this._channelId || "";
    },
    set: function (__s33param0) {
      this._channelId = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "trafficSource", {
    get: function () {
      return this._trafficSource || "";
    },
    set: function (__s37param0) {
      this._trafficSource = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "partnerId", {
    get: function () {
      return this._partnerId || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "lpPartnerID", {
    get: function () {
      return this._lpPartnerId || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "extendedPartnerID", {
    get: function () {
      if (this.partnerId !== "-1") {
        return this.partnerId;
      } else if (this.lpPartnerID !== "-1") {
        return this.lpPartnerID;
      } else {
        return "-1";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "creative", {
    get: function () {
      return this._creative || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "placement", {
    get: function () {
      return this._placement || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "keyword", {
    get: function () {
      return this._keyword || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "network", {
    get: function () {
      return this._network || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "lp", {
    get: function () {
      return this._lp || "-1";
    },
    set: function (__s58param0) {
      this._lp = __s58param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "aid", {
    get: function () {
      return this._aid || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "camp", {
    get: function () {
      return this._camp || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "adgr", {
    get: function () {
      return this._adgr || "-1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "matchtype", {
    get: function () {
      return this._matchtype || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "lang", {
    get: function () {
      return this._lang || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "ad_click_id", {
    get: function () {
      return this._ad_click_id || "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CampaignVars.prototype, "country", {
    get: function () {
      return this._country || "";
    },
    enumerable: true,
    configurable: true
  });
  CampaignVars.DEFAULT_DELIMITER = ";";
  return CampaignVars;
}();
exports.CampaignVars = __s0local1;
