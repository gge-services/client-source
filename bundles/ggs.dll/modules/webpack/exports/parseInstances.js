Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_CountriesManager = require("gge-module:export_CountriesManager");
var __dep_export_NetworkSettings = require("gge-module:export_NetworkSettings");
var __dep_class_NetworkProperties = require("gge-module:class_NetworkProperties");
var __dep_class_NetworkInstance = require("gge-module:class_NetworkInstance");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.NetworkXMLParser");
function readNumberChildTagValue(__s1param0, __s1param1) {
  var __s1local0 = __s1param0.querySelector(__s1param1);
  if (__s1local0) {
    return +__s1local0.textContent;
  } else {
    return 0;
  }
}
function readBooleanChildTagValue(__s5param0, __s5param1) {
  var __s5local0 = __s5param0.querySelector(__s5param1);
  return !!__s5local0 && __s5local0.textContent === "true";
}
exports.parseInstances = function (__s7param0) {
  return __s0local1(__s7param0, "instances");
};
exports.parseTestInstances = function (__s9param0) {
  return __s0local1(__s9param0, "test-instances");
};
function __s0local1(__s11param0, __s11param1) {
  var __s11local0;
  var __s11local1 = new DOMParser().parseFromString(__s11param0, "text/xml").querySelector(__s11param1);
  var __s11local2 = [];
  if (!__s11local1) {
    __s0local0.debug("node '" + __s11param1 + "' not found");
    return [];
  }
  if (__s11local1.children && __s11local1.children.length) {
    for (var __s11local3 = 0; __s11local3 < __s11local1.children.length; __s11local3++) {
      __s11local0 = __s0local2(__s11local1.children.item(__s11local3));
      __s11local2.push(__s11local0);
    }
  } else {
    __s0local0.debug("node '" + __s11param1 + "' is null or empty");
  }
  return __s11local2;
}
function __s0local2(__s18param0) {
  var __s18local0;
  var __s18local1;
  var __s18local2 = new __dep_class_NetworkInstance.NetworkInstance();
  __s18local0 = __s18param0.querySelector("server");
  __s18local2.ip = __s18local0 ? __s18local0.textContent : "";
  __s18local0 = __s18param0.querySelector("port");
  __s18local2.port = __s18local0 ? +__s18local0.textContent : 0;
  __s18local0 = __s18param0.querySelector("zone");
  __s18local2.zone = __s18local0 ? __s18local0.textContent : "";
  __s18local0 = __s18param0.querySelector("zoneId");
  __s18local2.zoneId = __s18local0 ? +__s18local0.textContent : 0;
  __s18local0 = __s18param0.querySelector("instanceName");
  __s18local2.instanceCountID = __s18local0 ? +__s18local0.textContent : 0;
  __s18local0 = __s18param0.querySelector("isInternational");
  __s18local2.isInternational = __s18local0 && __s18local0.textContent === "1";
  __s18local0 = __s18param0.querySelector("isFavorite");
  __s18local2.isFavorite = __s18local0 && __s18local0.textContent === "1";
  __s18local0 = __s18param0.querySelector("defaultcountry");
  __s18local2.defaultcountry = __s18local0 ? __s18local0.textContent : "";
  __s18local0 = __s18param0.querySelector("instanceLocaId");
  __s18local2.instanceLocaId = __s18local0 ? __s18local0.textContent : "";
  __s18local1 = __s18param0.attributes.getNamedItem("value");
  __s18local2.instanceId = __s18local1 ? +__s18local1.textContent : 0;
  var __s18local3 = (__s18local0 = __s18param0.querySelector("countries")) ? __s0local3(__s18local0.textContent) : [];
  if (__s18local3) {
    __s18local2.countries = __s0local4(__s18local3);
  }
  return __s18local2;
}
exports.parseNetworkProperties = function (__s21param0) {
  new DOMParser().parseFromString(__s21param0, "text/xml");
  var __s21local0;
  var __s21local1 = new __dep_class_NetworkProperties.NetworkProperties();
  __s21local0 = __s21param0.attributes.getNamedItem("deployTime");
  __s21local1.deployTime = __s21local0 ? +__s21local0.textContent : 0;
  __s21local0 = __s21param0.attributes.getNamedItem("versionNo");
  __s21local1.versionNumber = __s21local0 ? __s21local0.textContent : "0";
  __s21local0 = __s21param0.attributes.getNamedItem("is_approval");
  __s21local1.isApproval = !!__s21local0 && __s21local0.textContent === "true";
  return __s21local1;
};
exports.parseNetworkSettings = function (__s23param0) {
  var __s23local0 = new DOMParser().parseFromString(__s23param0, "text/xml").querySelector("general");
  return new __dep_export_NetworkSettings.NetworkSettings({
    allowedFullScreen: readBooleanChildTagValue(__s23local0, "allowedfullscreen"),
    defaultInstanceId: readNumberChildTagValue(__s23local0, "defaultinstance"),
    earnCredits: readNumberChildTagValue(__s23local0, "earncredits"),
    enableFeedMessages: readBooleanChildTagValue(__s23local0, "enablefeedmessages"),
    enableLonelyCow: readBooleanChildTagValue(__s23local0, "enablelonelycow"),
    inviteFriends: readBooleanChildTagValue(__s23local0, "invitefriends"),
    maxUsernameLength: readNumberChildTagValue(__s23local0, "maxusernamelength"),
    networkBuddies: readBooleanChildTagValue(__s23local0, "networkbuddies"),
    networkName: function readStringChildTagValue(__s25param0, __s25param1) {
      var __s25local0 = __s25param0.querySelector(__s25param1);
      if (__s25local0) {
        return __s25local0.textContent;
      } else {
        return "";
      }
    }(__s23local0, "networkname"),
    requestPayByJS: readBooleanChildTagValue(__s23local0, "requestpaybyjs"),
    showVersion: readBooleanChildTagValue(__s23local0, "showversion"),
    useExternalLinks: readBooleanChildTagValue(__s23local0, "useexternallinks"),
    useKeyBasedLogin: readBooleanChildTagValue(__s23local0, "usekeybaselogin"),
    usePayment: readBooleanChildTagValue(__s23local0, "usepayment")
  });
};
function __s0local3(__s29param0) {
  var __s29local0 = [];
  if (__s29param0 && __s29param0 !== "" && __s29param0 !== "null" && __s29param0.length >= 6) {
    __s29local0 = JSON.parse(__s29param0);
  }
  return __s29local0;
}
function __s0local4(__s32param0) {
  var __s32local0 = [];
  if (!__s32param0) {
    __s0local0.debug("NetworkXMLParser.createCountries: ggsCountryCodes is empty");
  }
  for (var __s32local1 = 0; __s32local1 < __s32param0.length; __s32local1++) {
    var __s32local2 = __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).getCountryByCountryCode(__s32param0[__s32local1], true);
    if (__s32local2) {
      __s32local0.push(__s32local2);
    }
  }
  return __s32local0;
}
