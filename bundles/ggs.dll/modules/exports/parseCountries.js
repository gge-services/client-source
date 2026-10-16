Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b84f427a919a891c = require("gge-module:exact_b84f427a919a891c");
var __dep_class_Country = require("gge-module:class_Country");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.CountryXMLParser");
exports.parseCountries = function (__s1param0) {
  var __s1local0;
  var __s1local1 = [];
  var __s1local2 = new DOMParser().parseFromString(__s1param0, "text/xml").querySelector("countries");
  if (!__s1local2) {
    __s0local0.debug("node 'countries' not found");
    return [];
  }
  if (__s1local2.children && __s1local2.children.length) {
    for (var __s1local3 = 0; __s1local3 < __s1local2.children.length; __s1local3++) {
      __s1local0 = __s0local1(__s1local2.children.item(__s1local3));
      __s1local1.push(__s1local0);
    }
  } else {
    __s0local0.debug("node 'countries' is null or empty");
  }
  return __s1local1;
};
function __s0local1(__s8param0) {
  var __s8local0;
  var __s8local1;
  var __s8local2 = (__s8local0 = __s8param0.querySelector("country")) ? __s8local0.textContent : "";
  var __s8local3 = (__s8local0 = __s8param0.querySelector("lang")) ? __s8local0.textContent : "";
  var __s8local4 = (__s8local0 = __s8param0.querySelector("browserCodes")) ? __s8local0.textContent : "";
  var __s8local5 = (__s8local0 = __s8param0.querySelector("geoIpCodes")) ? __s8local0.textContent : "";
  var __s8local6 = (__s8local0 = __s8param0.querySelector("flashCode")) ? __s8local0.textContent : "";
  var __s8local7 = (__s8local0 = __s8param0.querySelector("timezoneStart")) ? __s8local0.textContent : "";
  var __s8local8 = (__s8local0 = __s8param0.querySelector("timezoneEnd")) ? __s8local0.textContent : "";
  var __s8local9 = (__s8local0 = __s8param0.querySelector("np")) ? __s8local0.textContent : "";
  var __s8local10 = !!(__s8local1 = __s8param0.attributes.getNamedItem("default")) && __s8local1.textContent === "1";
  return new __dep_class_Country.Country(__s8local2, __s8local3, __s0local2(__s8local4), __s0local2(__s8local5), __s0local2(__s8local6), parseFloat(__s8local7), parseFloat(__s8local8), __s0local3(__s8local9), __s8local10);
}
function __s0local2(__s10param0) {
  var __s10local0 = [];
  if (__s10param0 !== "") {
    for (var __s10local1 = 0, __s10local2 = (__s10param0 = (__s10param0 = __s10param0.replace(/\[/, "")).replace(/\]/, "")).split(","); __s10local1 < __s10local2.length; __s10local1++) {
      var __s10local3 = __s10local2[__s10local1];
      __s10local0.push(__s10local3.trim());
    }
  }
  return __s10local0;
}
function __s0local3(__s15param0) {
  switch (__s15param0) {
    case "fb":
      return __dep_exact_b84f427a919a891c.CDN.Fallback;
    case "ak":
      return __dep_exact_b84f427a919a891c.CDN.Akamai;
    case "cd":
      return __dep_exact_b84f427a919a891c.CDN.CDNetworks;
    case "cl":
      return __dep_exact_b84f427a919a891c.CDN.Cloudfront;
    case "ll":
      return __dep_exact_b84f427a919a891c.CDN.Limelight;
    default:
      return __dep_exact_b84f427a919a891c.CDN.None;
  }
}
