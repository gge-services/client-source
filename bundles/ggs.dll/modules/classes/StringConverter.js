Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function StringConverter() {}
  StringConverter.unescapeString = function (__s5param0) {
    var __s5local0 = "";
    var __s5local1 = 0;
    var __s5local2 = 0;
    var __s5local3 = __s5param0.length;
    do {
      if (!((__s5local1 = __s5param0.indexOf("\\", __s5local2)) >= 0)) {
        __s5local0 += __s5param0.substr(__s5local2);
        break;
      }
      __s5local0 += __s5param0.substr(__s5local2, __s5local1 - __s5local2);
      __s5local2 = __s5local1 + 2;
      var __s5local4 = __s5param0.charAt(__s5local1 + 1);
      switch (__s5local4) {
        case "\"":
        case "\\":
          __s5local0 += __s5local4;
          break;
        case "n":
          __s5local0 += "\n";
          break;
        case "r":
          __s5local0 += "\r";
          break;
        case "t":
          __s5local0 += "\t";
          break;
        case "u":
          var __s5local5 = "";
          var __s5local6 = __s5local2 + 4;
          if (__s5local6 > __s5local3) {
            StringConverter.parseError("Unexpected end of input.  Expecting 4 hex digits after \\u.");
          }
          for (var __s5local7 = __s5local2; __s5local7 < __s5local6; __s5local7++) {
            var __s5local8 = __s5param0.charAt(__s5local7);
            if (!StringConverter.isHexDigit(__s5local8)) {
              StringConverter.parseError("Excepted a hex digit, but found: " + __s5local8);
            }
            __s5local5 += __s5local8;
          }
          __s5local0 += String.fromCharCode(parseInt(__s5local5, 16));
          __s5local2 = __s5local6;
          break;
        case "f":
          __s5local0 += "\f";
          break;
        case "/":
          __s5local0 += "/";
          break;
        case "b":
          __s5local0 += "\b";
          break;
        default:
          __s5local0 += "\\" + __s5local4;
      }
    } while (__s5local2 < __s5local3);
    return __s5local0;
  };
  StringConverter.isDigit = function (__s15param0) {
    return __s15param0 >= "0" && __s15param0 <= "9";
  };
  StringConverter.isHexDigit = function (__s17param0) {
    return StringConverter.isDigit(__s17param0) || __s17param0 >= "A" && __s17param0 <= "F" || __s17param0 >= "a" && __s17param0 <= "f";
  };
  StringConverter.parseError = function (__s19param0) {
    throw new Error(__s19param0);
  };
  return StringConverter;
}();
exports.StringConverter = __s0local0;
