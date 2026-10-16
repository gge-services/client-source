var __s0local0 = require("gge-module:exact_a684528dc58f6488").Buffer;
var __s0local1 = __s0local0.isEncoding || function (__s1param0) {
  switch ((__s1param0 = "" + __s1param0) && __s1param0.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function StringDecoder(__s4param0) {
  var __s4local0;
  this.encoding = function normalizeEncoding(__s6param0) {
    var __s6local0 = function _normalizeEncoding(__s8param0) {
      if (!__s8param0) {
        return "utf8";
      }
      var __s8local0;
      for (;;) {
        switch (__s8param0) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return __s8param0;
          default:
            if (__s8local0) {
              return;
            }
            __s8param0 = ("" + __s8param0).toLowerCase();
            __s8local0 = true;
        }
      }
    }(__s6param0);
    if (typeof __s6local0 != "string" && (__s0local0.isEncoding === __s0local1 || !__s0local1(__s6param0))) {
      throw new Error("Unknown encoding: " + __s6param0);
    }
    return __s6local0 || __s6param0;
  }(__s4param0);
  switch (this.encoding) {
    case "utf16le":
      this.text = utf16Text;
      this.end = utf16End;
      __s4local0 = 4;
      break;
    case "utf8":
      this.fillLast = utf8FillLast;
      __s4local0 = 4;
      break;
    case "base64":
      this.text = base64Text;
      this.end = base64End;
      __s4local0 = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = __s0local0.allocUnsafe(__s4local0);
}
function utf8CheckByte(__s17param0) {
  if (__s17param0 <= 127) {
    return 0;
  } else if (__s17param0 >> 5 == 6) {
    return 2;
  } else if (__s17param0 >> 4 == 14) {
    return 3;
  } else if (__s17param0 >> 3 == 30) {
    return 4;
  } else if (__s17param0 >> 6 == 2) {
    return -1;
  } else {
    return -2;
  }
}
function utf8FillLast(__s25param0) {
  var __s25local0 = this.lastTotal - this.lastNeed;
  var __s25local1 = function utf8CheckExtraBytes(__s27param0, __s27param1, __s27param2) {
    if ((__s27param1[0] & 192) != 128) {
      __s27param0.lastNeed = 0;
      return "�";
    }
    if (__s27param0.lastNeed > 1 && __s27param1.length > 1) {
      if ((__s27param1[1] & 192) != 128) {
        __s27param0.lastNeed = 1;
        return "�";
      }
      if (__s27param0.lastNeed > 2 && __s27param1.length > 2 && (__s27param1[2] & 192) != 128) {
        __s27param0.lastNeed = 2;
        return "�";
      }
    }
  }(this, __s25param0);
  if (__s25local1 !== undefined) {
    return __s25local1;
  } else if (this.lastNeed <= __s25param0.length) {
    __s25param0.copy(this.lastChar, __s25local0, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  } else {
    __s25param0.copy(this.lastChar, __s25local0, 0, __s25param0.length);
    this.lastNeed -= __s25param0.length;
    return;
  }
}
function utf16Text(__s36param0, __s36param1) {
  if ((__s36param0.length - __s36param1) % 2 == 0) {
    var __s36local0 = __s36param0.toString("utf16le", __s36param1);
    if (__s36local0) {
      var __s36local1 = __s36local0.charCodeAt(__s36local0.length - 1);
      if (__s36local1 >= 55296 && __s36local1 <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = __s36param0[__s36param0.length - 2];
        this.lastChar[1] = __s36param0[__s36param0.length - 1];
        return __s36local0.slice(0, -1);
      }
    }
    return __s36local0;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = __s36param0[__s36param0.length - 1];
  return __s36param0.toString("utf16le", __s36param1, __s36param0.length - 1);
}
function utf16End(__s41param0) {
  var __s41local0 = __s41param0 && __s41param0.length ? this.write(__s41param0) : "";
  if (this.lastNeed) {
    var __s41local1 = this.lastTotal - this.lastNeed;
    return __s41local0 + this.lastChar.toString("utf16le", 0, __s41local1);
  }
  return __s41local0;
}
function base64Text(__s44param0, __s44param1) {
  var __s44local0 = (__s44param0.length - __s44param1) % 3;
  if (__s44local0 === 0) {
    return __s44param0.toString("base64", __s44param1);
  } else {
    this.lastNeed = 3 - __s44local0;
    this.lastTotal = 3;
    if (__s44local0 === 1) {
      this.lastChar[0] = __s44param0[__s44param0.length - 1];
    } else {
      this.lastChar[0] = __s44param0[__s44param0.length - 2];
      this.lastChar[1] = __s44param0[__s44param0.length - 1];
    }
    return __s44param0.toString("base64", __s44param1, __s44param0.length - __s44local0);
  }
}
function base64End(__s50param0) {
  var __s50local0 = __s50param0 && __s50param0.length ? this.write(__s50param0) : "";
  if (this.lastNeed) {
    return __s50local0 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  } else {
    return __s50local0;
  }
}
function simpleWrite(__s54param0) {
  return __s54param0.toString(this.encoding);
}
function simpleEnd(__s56param0) {
  if (__s56param0 && __s56param0.length) {
    return this.write(__s56param0);
  } else {
    return "";
  }
}
exports.StringDecoder = StringDecoder;
StringDecoder.prototype.write = function (__s60param0) {
  if (__s60param0.length === 0) {
    return "";
  }
  var __s60local0;
  var __s60local1;
  if (this.lastNeed) {
    if ((__s60local0 = this.fillLast(__s60param0)) === undefined) {
      return "";
    }
    __s60local1 = this.lastNeed;
    this.lastNeed = 0;
  } else {
    __s60local1 = 0;
  }
  if (__s60local1 < __s60param0.length) {
    if (__s60local0) {
      return __s60local0 + this.text(__s60param0, __s60local1);
    } else {
      return this.text(__s60param0, __s60local1);
    }
  } else {
    return __s60local0 || "";
  }
};
StringDecoder.prototype.end = function utf8End(__s70param0) {
  var __s70local0 = __s70param0 && __s70param0.length ? this.write(__s70param0) : "";
  if (this.lastNeed) {
    return __s70local0 + "�";
  } else {
    return __s70local0;
  }
};
StringDecoder.prototype.text = function utf8Text(__s74param0, __s74param1) {
  var __s74local0 = function utf8CheckIncomplete(__s76param0, __s76param1, __s76param2) {
    var __s76local0 = __s76param1.length - 1;
    if (__s76local0 < __s76param2) {
      return 0;
    }
    var __s76local1 = utf8CheckByte(__s76param1[__s76local0]);
    if (__s76local1 >= 0) {
      if (__s76local1 > 0) {
        __s76param0.lastNeed = __s76local1 - 1;
      }
      return __s76local1;
    }
    if (--__s76local0 < __s76param2 || __s76local1 === -2) {
      return 0;
    }
    if ((__s76local1 = utf8CheckByte(__s76param1[__s76local0])) >= 0) {
      if (__s76local1 > 0) {
        __s76param0.lastNeed = __s76local1 - 2;
      }
      return __s76local1;
    }
    if (--__s76local0 < __s76param2 || __s76local1 === -2) {
      return 0;
    }
    if ((__s76local1 = utf8CheckByte(__s76param1[__s76local0])) >= 0) {
      if (__s76local1 > 0) {
        if (__s76local1 === 2) {
          __s76local1 = 0;
        } else {
          __s76param0.lastNeed = __s76local1 - 3;
        }
      }
      return __s76local1;
    }
    return 0;
  }(this, __s74param0, __s74param1);
  if (!this.lastNeed) {
    return __s74param0.toString("utf8", __s74param1);
  }
  this.lastTotal = __s74local0;
  var __s74local1 = __s74param0.length - (__s74local0 - this.lastNeed);
  __s74param0.copy(this.lastChar, 0, __s74local1);
  return __s74param0.toString("utf8", __s74param1, __s74local1);
};
StringDecoder.prototype.fillLast = function (__s90param0) {
  if (this.lastNeed <= __s90param0.length) {
    __s90param0.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  __s90param0.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, __s90param0.length);
  this.lastNeed -= __s90param0.length;
};
