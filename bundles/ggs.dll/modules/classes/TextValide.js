var __dep_class_Item = require("gge-module:class_Item");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TextValide() {}
  TextValide.isSmartFoxValide = function (__s5param0) {
    if (__s5param0.trim() == "") {
      return false;
    }
    for (var __s5local0 = 0, __s5local1 = TextValide.invalidChars; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5param0.indexOf(__s5local2) >= 0) {
        return false;
      }
    }
    return true;
  };
  TextValide.isUsernameValide = function (__s11param0) {
    if (__dep_class_Item.env.DEBUG) {
      __s11param0 = __s11param0.replace("|", "");
    }
    if (__s11param0.trim() == "") {
      return false;
    }
    if (!TextValide.isSmartFoxValide(__s11param0)) {
      return false;
    }
    for (var __s11local0 = 0, __s11local1 = TextValide.invalidUsernameChars; __s11local0 < __s11local1.length; __s11local0++) {
      var __s11local2 = __s11local1[__s11local0];
      if (__s11param0.indexOf(__s11local2) >= 0) {
        return false;
      }
    }
    return true;
  };
  TextValide.getValidUsername = function (__s19param0) {
    for (var __s19local0 = 0, __s19local1 = TextValide.invalidUsernameChars; __s19local0 < __s19local1.length; __s19local0++) {
      var __s19local2 = __s19local1[__s19local0];
      var __s19local3 = new RegExp("\\" + __s19local2, "gim");
      __s19param0 = __s19param0.replace(__s19local3, "");
    }
    for (var __s19local4 = 0, __s19local5 = TextValide.invalidChars; __s19local4 < __s19local5.length; __s19local4++) {
      var __s19local6 = __s19local5[__s19local4];
      var __s19local7 = new RegExp("\\" + __s19local6, "gim");
      __s19param0 = __s19param0.replace(__s19local7, "");
    }
    return TextValide.getValideSmartFoxText(__s19param0);
  };
  TextValide.getSmartFoxInvalideChar = function (__s25param0) {
    var __s25local0 = "";
    if (__s25param0.trim() == "") {
      return __s25local0;
    }
    for (var __s25local1 = 0, __s25local2 = TextValide.invalidChars; __s25local1 < __s25local2.length; __s25local1++) {
      var __s25local3 = __s25local2[__s25local1];
      if (__s25param0.indexOf(__s25local3) >= 0) {
        __s25local0 += __s25local3;
      }
    }
    return __s25local0;
  };
  TextValide.getCleanText = function (__s31param0) {
    for (var __s31local0 = 0, __s31local1 = TextValide.invalidChars; __s31local0 < __s31local1.length; __s31local0++) {
      var __s31local2 = __s31local1[__s31local0];
      var __s31local3 = new RegExp("\\" + __s31local2, "gim");
      __s31param0 = __s31param0.replace(__s31local3, "");
    }
    return TextValide.getValideSmartFoxText(__s31param0);
  };
  TextValide.getCleanChatText = function (__s35param0) {
    for (var __s35local0 = 0, __s35local1 = TextValide.invalidChatChars; __s35local0 < __s35local1.length; __s35local0++) {
      var __s35local2 = __s35local1[__s35local0];
      var __s35local3 = new RegExp("\\" + __s35local2, "gm");
      __s35param0 = __s35param0.replace(__s35local3, "");
    }
    return TextValide.getValideSmartFoxText(__s35param0);
  };
  TextValide.getValideSmartFoxText = function (__s39param0) {
    return __s39param0 = (__s39param0 = __s39param0.replace(/%/g, TextValide.SUBST_PERCENT)).replace(/'/g, "");
  };
  TextValide.getValideSmartFoxJSONTextMessage = function (__s41param0) {
    return __s41param0 = (__s41param0 = (__s41param0 = (__s41param0 = (__s41param0 = (__s41param0 = (__s41param0 = __s41param0.replace(TextValide.pattern1, TextValide.SUBST_PERCENT)).replace(TextValide.pattern2, TextValide.SUBST_APOSTROPHE)).replace(TextValide.pattern3, TextValide.SUBST_QUOTE)).replace(TextValide.pattern4, TextValide.SUBST_NEWLINE)).replace(TextValide.pattern5, TextValide.SUBST_BACKSLASH)).replace(TextValide.pattern6, TextValide.SUBST_NEWLINE)).replace(TextValide.pattern7, " ");
  };
  TextValide.parseChatMessage = function (__s43param0) {
    return __s43param0 = __s43param0.replace(/&percnt;/g, "%");
  };
  TextValide.parseChatJSONMessage = function (__s45param0) {
    if (!__s45param0) {
      return "";
    }
    return __s45param0 = __s45param0.replace(/&percnt;/g, "%").replace(/&quot;/g, "\"").replace(/&145;/g, "'").replace(/<br \/>/g, "\n").replace(/%5C/g, "\\").replace(/(\[|\])/g, " ");
  };
  TextValide.isEmailString = function (__s48param0) {
    return /^[A-Za-z0-9\-+_]+(\.[A-Za-z0-9\-+_]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$/.test(__s48param0);
  };
  TextValide.trimPassword = function (__s50param0) {
    return __s50param0.trim();
  };
  TextValide.SUBST_PERCENT = "&percnt;";
  TextValide.SUBST_QUOTE = "&quot;";
  TextValide.SUBST_APOSTROPHE = "&145;";
  TextValide.SUBST_NEWLINE = "<br />";
  TextValide.SUBST_BACKSLASH = "%5C";
  TextValide.invalidChars = ["%", "&", "*", "/", "(", ")", "[", "]", "{", "}", "\"", "'", "\\", "´", "`", "^", "°", "§", "€", "²", "³", ",", ";", "µ", "$"];
  TextValide.invalidChatChars = ["\\+", "#", "<", ">", "\"", "\\$"];
  TextValide.invalidUsernameChars = ["!", "=", "?", "+", "#", "<", ">", "|"];
  TextValide.pattern1 = /%/g;
  TextValide.pattern2 = /'/g;
  TextValide.pattern3 = /"/g;
  TextValide.pattern4 = /\r/g;
  TextValide.pattern5 = /\\/g;
  TextValide.pattern6 = /\n/g;
  TextValide.pattern7 = /\t/g;
  return TextValide;
}();
exports.TextValide = __s0local0;
