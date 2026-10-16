function __s0local0(__s1param0, __s1param1) {
  return (__s0local0 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (__s3param0, __s3param1) {
    __s3param0.__proto__ = __s3param1;
  } || function (__s5param0, __s5param1) {
    for (var __s5local0 in __s5param1) {
      if (__s5param1.hasOwnProperty(__s5local0)) {
        __s5param0[__s5local0] = __s5param1[__s5local0];
      }
    }
  })(__s1param0, __s1param1);
}
export function __extends(__s10param0, __s10param1) {
  function __s10local0() {
    this.constructor = __s10param0;
  }
  __s0local0(__s10param0, __s10param1);
  __s10param0.prototype = __s10param1 === null ? Object.create(__s10param1) : (__s10local0.prototype = __s10param1.prototype, new __s10local0());
}
export function __assign() {
  return (__assign = Object.assign || function __assign(__s16param0) {
    var __s16local0;
    for (var __s16local1 = 1, __s16local2 = arguments.length; __s16local1 < __s16local2; __s16local1++) {
      for (var __s16local3 in __s16local0 = arguments[__s16local1]) {
        if (Object.prototype.hasOwnProperty.call(__s16local0, __s16local3)) {
          __s16param0[__s16local3] = __s16local0[__s16local3];
        }
      }
    }
    return __s16param0;
  }).apply(this, arguments);
}
export function __rest(__s23param0, __s23param1) {
  var __s23local0 = {};
  for (var __s23local1 in __s23param0) {
    if (Object.prototype.hasOwnProperty.call(__s23param0, __s23local1) && __s23param1.indexOf(__s23local1) < 0) {
      __s23local0[__s23local1] = __s23param0[__s23local1];
    }
  }
  if (__s23param0 != null && typeof Object.getOwnPropertySymbols == "function") {
    var __s23local2 = 0;
    for (__s23local1 = Object.getOwnPropertySymbols(__s23param0); __s23local2 < __s23local1.length; __s23local2++) {
      if (__s23param1.indexOf(__s23local1[__s23local2]) < 0 && Object.prototype.propertyIsEnumerable.call(__s23param0, __s23local1[__s23local2])) {
        __s23local0[__s23local1[__s23local2]] = __s23param0[__s23local1[__s23local2]];
      }
    }
  }
  return __s23local0;
}
export function __decorate(__s32param0, __s32param1, __s32param2, __s32param3) {
  var __s32local0;
  var __s32local1 = arguments.length;
  var __s32local2 = __s32local1 < 3 ? __s32param1 : __s32param3 === null ? __s32param3 = Object.getOwnPropertyDescriptor(__s32param1, __s32param2) : __s32param3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    __s32local2 = Reflect.decorate(__s32param0, __s32param1, __s32param2, __s32param3);
  } else {
    for (var __s32local3 = __s32param0.length - 1; __s32local3 >= 0; __s32local3--) {
      if (__s32local0 = __s32param0[__s32local3]) {
        __s32local2 = (__s32local1 < 3 ? __s32local0(__s32local2) : __s32local1 > 3 ? __s32local0(__s32param1, __s32param2, __s32local2) : __s32local0(__s32param1, __s32param2)) || __s32local2;
      }
    }
  }
  if (__s32local1 > 3 && __s32local2) {
    Object.defineProperty(__s32param1, __s32param2, __s32local2);
  }
  return __s32local2;
}
export function __param(__s40param0, __s40param1) {
  return function (__s42param0, __s42param1) {
    __s40param1(__s42param0, __s42param1, __s40param0);
  };
}
export function __metadata(__s44param0, __s44param1) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
    return Reflect.metadata(__s44param0, __s44param1);
  }
}
export function __awaiter(__s47param0, __s47param1, __s47param2, __s47param3) {
  return new (__s47param2 ||= Promise)(function (__s49param0, __s49param1) {
    function fulfilled(__s51param0) {
      try {
        step(__s47param3.next(__s51param0));
      } catch (__s54local0) {
        __s49param1(__s54local0);
      }
    }
    function rejected(__s56param0) {
      try {
        step(__s47param3.throw(__s56param0));
      } catch (__s59local0) {
        __s49param1(__s59local0);
      }
    }
    function step(__s61param0) {
      if (__s61param0.done) {
        __s49param0(__s61param0.value);
      } else {
        (function adopt(__s65param0) {
          if (__s65param0 instanceof __s47param2) {
            return __s65param0;
          } else {
            return new __s47param2(function (__s69param0) {
              __s69param0(__s65param0);
            });
          }
        })(__s61param0.value).then(fulfilled, rejected);
      }
    }
    step((__s47param3 = __s47param3.apply(__s47param0, __s47param1 || [])).next());
  });
}
export function __generator(__s71param0, __s71param1) {
  var __s71local0;
  var __s71local1;
  var __s71local2;
  var __s71local3;
  var __s71local4 = {
    label: 0,
    sent: function () {
      if (__s71local2[0] & 1) {
        throw __s71local2[1];
      }
      return __s71local2[1];
    },
    trys: [],
    ops: []
  };
  __s71local3 = {
    next: verb(0),
    throw: verb(1),
    return: verb(2)
  };
  if (typeof Symbol == "function") {
    __s71local3[Symbol.iterator] = function () {
      return this;
    };
  }
  return __s71local3;
  function verb(__s79param0) {
    return function (__s81param0) {
      return function step(__s83param0) {
        if (__s71local0) {
          throw new TypeError("Generator is already executing.");
        }
        while (__s71local4) {
          try {
            __s71local0 = 1;
            if (__s71local1 && (__s71local2 = __s83param0[0] & 2 ? __s71local1.return : __s83param0[0] ? __s71local1.throw || ((__s71local2 = __s71local1.return) && __s71local2.call(__s71local1), 0) : __s71local1.next) && !(__s71local2 = __s71local2.call(__s71local1, __s83param0[1])).done) {
              return __s71local2;
            }
            __s71local1 = 0;
            if (__s71local2) {
              __s83param0 = [__s83param0[0] & 2, __s71local2.value];
            }
            switch (__s83param0[0]) {
              case 0:
              case 1:
                __s71local2 = __s83param0;
                break;
              case 4:
                __s71local4.label++;
                return {
                  value: __s83param0[1],
                  done: false
                };
              case 5:
                __s71local4.label++;
                __s71local1 = __s83param0[1];
                __s83param0 = [0];
                continue;
              case 7:
                __s83param0 = __s71local4.ops.pop();
                __s71local4.trys.pop();
                continue;
              default:
                if (!(__s71local2 = (__s71local2 = __s71local4.trys).length > 0 && __s71local2[__s71local2.length - 1]) && (__s83param0[0] === 6 || __s83param0[0] === 2)) {
                  __s71local4 = 0;
                  continue;
                }
                if (__s83param0[0] === 3 && (!__s71local2 || __s83param0[1] > __s71local2[0] && __s83param0[1] < __s71local2[3])) {
                  __s71local4.label = __s83param0[1];
                  break;
                }
                if (__s83param0[0] === 6 && __s71local4.label < __s71local2[1]) {
                  __s71local4.label = __s71local2[1];
                  __s71local2 = __s83param0;
                  break;
                }
                if (__s71local2 && __s71local4.label < __s71local2[2]) {
                  __s71local4.label = __s71local2[2];
                  __s71local4.ops.push(__s83param0);
                  break;
                }
                if (__s71local2[2]) {
                  __s71local4.ops.pop();
                }
                __s71local4.trys.pop();
                continue;
            }
            __s83param0 = __s71param1.call(__s71param0, __s71local4);
          } catch (__s97local0) {
            __s83param0 = [6, __s97local0];
            __s71local1 = 0;
          } finally {
            __s71local0 = __s71local2 = 0;
          }
        }
        if (__s83param0[0] & 5) {
          throw __s83param0[1];
        }
        return {
          value: __s83param0[0] ? __s83param0[1] : undefined,
          done: true
        };
      }([__s79param0, __s81param0]);
    };
  }
}
export function __createBinding(__s101param0, __s101param1, __s101param2, __s101param3 = __s101param2) {
  __s101param0[__s101param3] = __s101param1[__s101param2];
}
export function __exportStar(__s103param0, __s103param1) {
  for (var __s103local0 in __s103param0) {
    if (__s103local0 !== "default" && !__s103param1.hasOwnProperty(__s103local0)) {
      __s103param1[__s103local0] = __s103param0[__s103local0];
    }
  }
}
export function __values(__s108param0) {
  var __s108local0 = typeof Symbol == "function" && Symbol.iterator;
  var __s108local1 = __s108local0 && __s108param0[__s108local0];
  var __s108local2 = 0;
  if (__s108local1) {
    return __s108local1.call(__s108param0);
  }
  if (__s108param0 && typeof __s108param0.length == "number") {
    return {
      next: function () {
        if (__s108param0 && __s108local2 >= __s108param0.length) {
          __s108param0 = undefined;
        }
        return {
          value: __s108param0 && __s108param0[__s108local2++],
          done: !__s108param0
        };
      }
    };
  }
  throw new TypeError(__s108local0 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
export function __read(__s115param0, __s115param1) {
  var __s115local0 = typeof Symbol == "function" && __s115param0[Symbol.iterator];
  if (!__s115local0) {
    return __s115param0;
  }
  var __s115local1;
  var __s115local2;
  var __s115local3 = __s115local0.call(__s115param0);
  var __s115local4 = [];
  try {
    while ((__s115param1 === undefined || __s115param1-- > 0) && !(__s115local1 = __s115local3.next()).done) {
      __s115local4.push(__s115local1.value);
    }
  } catch (__s121local0) {
    __s115local2 = {
      error: __s121local0
    };
  } finally {
    try {
      if (__s115local1 && !__s115local1.done && (__s115local0 = __s115local3.return)) {
        __s115local0.call(__s115local3);
      }
    } finally {
      if (__s115local2) {
        throw __s115local2.error;
      }
    }
  }
  return __s115local4;
}
export function __spread() {
  var __s128local0 = [];
  for (var __s128local1 = 0; __s128local1 < arguments.length; __s128local1++) {
    __s128local0 = __s128local0.concat(__read(arguments[__s128local1]));
  }
  return __s128local0;
}
export function __spreadArrays() {
  var __s132local0 = 0;
  for (var __s132local1 = 0, __s132local2 = arguments.length; __s132local1 < __s132local2; __s132local1++) {
    __s132local0 += arguments[__s132local1].length;
  }
  var __s132local3 = Array(__s132local0);
  var __s132local4 = 0;
  for (__s132local1 = 0; __s132local1 < __s132local2; __s132local1++) {
    var __s132local5 = arguments[__s132local1];
    for (var __s132local6 = 0, __s132local7 = __s132local5.length; __s132local6 < __s132local7; __s132local6++, __s132local4++) {
      __s132local3[__s132local4] = __s132local5[__s132local6];
    }
  }
  return __s132local3;
}
export function __await(__s140param0) {
  if (this instanceof __await) {
    this.v = __s140param0;
    return this;
  } else {
    return new __await(__s140param0);
  }
}
export function __asyncGenerator(__s144param0, __s144param1, __s144param2) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var __s144local0;
  var __s144local1 = __s144param2.apply(__s144param0, __s144param1 || []);
  var __s144local2 = [];
  __s144local0 = {};
  verb("next");
  verb("throw");
  verb("return");
  __s144local0[Symbol.asyncIterator] = function () {
    return this;
  };
  return __s144local0;
  function verb(__s149param0) {
    if (__s144local1[__s149param0]) {
      __s144local0[__s149param0] = function (__s152param0) {
        return new Promise(function (__s154param0, __s154param1) {
          if (!(__s144local2.push([__s149param0, __s152param0, __s154param0, __s154param1]) > 1)) {
            resume(__s149param0, __s152param0);
          }
        });
      };
    }
  }
  function resume(__s157param0, __s157param1) {
    try {
      (function step(__s160param0) {
        if (__s160param0.value instanceof __await) {
          Promise.resolve(__s160param0.value.v).then(fulfill, reject);
        } else {
          settle(__s144local2[0][2], __s160param0);
        }
      })(__s144local1[__s157param0](__s157param1));
    } catch (__s164local0) {
      settle(__s144local2[0][3], __s164local0);
    }
  }
  function fulfill(__s166param0) {
    resume("next", __s166param0);
  }
  function reject(__s168param0) {
    resume("throw", __s168param0);
  }
  function settle(__s170param0, __s170param1) {
    __s170param0(__s170param1);
    __s144local2.shift();
    if (__s144local2.length) {
      resume(__s144local2[0][0], __s144local2[0][1]);
    }
  }
}
export function __asyncDelegator(__s173param0) {
  var __s173local0;
  var __s173local1;
  __s173local0 = {};
  verb("next");
  verb("throw", function (__s175param0) {
    throw __s175param0;
  });
  verb("return");
  __s173local0[Symbol.iterator] = function () {
    return this;
  };
  return __s173local0;
  function verb(__s179param0, __s179param1) {
    __s173local0[__s179param0] = __s173param0[__s179param0] ? function (__s181param0) {
      if (__s173local1 = !__s173local1) {
        return {
          value: __await(__s173param0[__s179param0](__s181param0)),
          done: __s179param0 === "return"
        };
      } else if (__s179param1) {
        return __s179param1(__s181param0);
      } else {
        return __s181param0;
      }
    } : __s179param1;
  }
}
export function __asyncValues(__s186param0) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var __s186local0;
  var __s186local1 = __s186param0[Symbol.asyncIterator];
  if (__s186local1) {
    return __s186local1.call(__s186param0);
  } else {
    __s186param0 = __values(__s186param0);
    __s186local0 = {};
    verb("next");
    verb("throw");
    verb("return");
    __s186local0[Symbol.asyncIterator] = function () {
      return this;
    };
    return __s186local0;
  }
  function verb(__s193param0) {
    __s186local0[__s193param0] = __s186param0[__s193param0] && function (__s195param0) {
      return new Promise(function (__s197param0, __s197param1) {
        (function settle(__s199param0, __s199param1, __s199param2, __s199param3) {
          Promise.resolve(__s199param3).then(function (__s201param0) {
            __s199param0({
              value: __s201param0,
              done: __s199param2
            });
          }, __s199param1);
        })(__s197param0, __s197param1, (__s195param0 = __s186param0[__s193param0](__s195param0)).done, __s195param0.value);
      });
    };
  }
}
export function __makeTemplateObject(__s203param0, __s203param1) {
  if (Object.defineProperty) {
    Object.defineProperty(__s203param0, "raw", {
      value: __s203param1
    });
  } else {
    __s203param0.raw = __s203param1;
  }
  return __s203param0;
}
export function __importStar(__s207param0) {
  if (__s207param0 && __s207param0.__esModule) {
    return __s207param0;
  }
  var __s207local0 = {};
  if (__s207param0 != null) {
    for (var __s207local1 in __s207param0) {
      if (Object.hasOwnProperty.call(__s207param0, __s207local1)) {
        __s207local0[__s207local1] = __s207param0[__s207local1];
      }
    }
  }
  __s207local0.default = __s207param0;
  return __s207local0;
}
export function __importDefault(__s214param0) {
  if (__s214param0 && __s214param0.__esModule) {
    return __s214param0;
  } else {
    return {
      default: __s214param0
    };
  }
}
export function __classPrivateFieldGet(__s218param0, __s218param1) {
  if (!__s218param1.has(__s218param0)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return __s218param1.get(__s218param0);
}
export function __classPrivateFieldSet(__s221param0, __s221param1, __s221param2) {
  if (!__s221param1.has(__s221param0)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  __s221param1.set(__s221param0, __s221param2);
  return __s221param2;
}
