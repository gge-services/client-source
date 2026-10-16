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
      if (__s23param1.indexOf(__s23local1[__s23local2]) < 0) {
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
        new __s47param2(function (__s65param0) {
          __s65param0(__s61param0.value);
        }).then(fulfilled, rejected);
      }
    }
    step((__s47param3 = __s47param3.apply(__s47param0, __s47param1 || [])).next());
  });
}
export function __generator(__s67param0, __s67param1) {
  var __s67local0;
  var __s67local1;
  var __s67local2;
  var __s67local3;
  var __s67local4 = {
    label: 0,
    sent: function () {
      if (__s67local2[0] & 1) {
        throw __s67local2[1];
      }
      return __s67local2[1];
    },
    trys: [],
    ops: []
  };
  __s67local3 = {
    next: verb(0),
    throw: verb(1),
    return: verb(2)
  };
  if (typeof Symbol == "function") {
    __s67local3[Symbol.iterator] = function () {
      return this;
    };
  }
  return __s67local3;
  function verb(__s75param0) {
    return function (__s77param0) {
      return function step(__s79param0) {
        if (__s67local0) {
          throw new TypeError("Generator is already executing.");
        }
        while (__s67local4) {
          try {
            __s67local0 = 1;
            if (__s67local1 && (__s67local2 = __s79param0[0] & 2 ? __s67local1.return : __s79param0[0] ? __s67local1.throw || ((__s67local2 = __s67local1.return) && __s67local2.call(__s67local1), 0) : __s67local1.next) && !(__s67local2 = __s67local2.call(__s67local1, __s79param0[1])).done) {
              return __s67local2;
            }
            __s67local1 = 0;
            if (__s67local2) {
              __s79param0 = [__s79param0[0] & 2, __s67local2.value];
            }
            switch (__s79param0[0]) {
              case 0:
              case 1:
                __s67local2 = __s79param0;
                break;
              case 4:
                __s67local4.label++;
                return {
                  value: __s79param0[1],
                  done: false
                };
              case 5:
                __s67local4.label++;
                __s67local1 = __s79param0[1];
                __s79param0 = [0];
                continue;
              case 7:
                __s79param0 = __s67local4.ops.pop();
                __s67local4.trys.pop();
                continue;
              default:
                if (!(__s67local2 = (__s67local2 = __s67local4.trys).length > 0 && __s67local2[__s67local2.length - 1]) && (__s79param0[0] === 6 || __s79param0[0] === 2)) {
                  __s67local4 = 0;
                  continue;
                }
                if (__s79param0[0] === 3 && (!__s67local2 || __s79param0[1] > __s67local2[0] && __s79param0[1] < __s67local2[3])) {
                  __s67local4.label = __s79param0[1];
                  break;
                }
                if (__s79param0[0] === 6 && __s67local4.label < __s67local2[1]) {
                  __s67local4.label = __s67local2[1];
                  __s67local2 = __s79param0;
                  break;
                }
                if (__s67local2 && __s67local4.label < __s67local2[2]) {
                  __s67local4.label = __s67local2[2];
                  __s67local4.ops.push(__s79param0);
                  break;
                }
                if (__s67local2[2]) {
                  __s67local4.ops.pop();
                }
                __s67local4.trys.pop();
                continue;
            }
            __s79param0 = __s67param1.call(__s67param0, __s67local4);
          } catch (__s93local0) {
            __s79param0 = [6, __s93local0];
            __s67local1 = 0;
          } finally {
            __s67local0 = __s67local2 = 0;
          }
        }
        if (__s79param0[0] & 5) {
          throw __s79param0[1];
        }
        return {
          value: __s79param0[0] ? __s79param0[1] : undefined,
          done: true
        };
      }([__s75param0, __s77param0]);
    };
  }
}
export function __exportStar(__s97param0, __s97param1) {
  for (var __s97local0 in __s97param0) {
    if (!__s97param1.hasOwnProperty(__s97local0)) {
      __s97param1[__s97local0] = __s97param0[__s97local0];
    }
  }
}
export function __values(__s102param0) {
  var __s102local0 = typeof Symbol == "function" && __s102param0[Symbol.iterator];
  var __s102local1 = 0;
  if (__s102local0) {
    return __s102local0.call(__s102param0);
  } else {
    return {
      next: function () {
        if (__s102param0 && __s102local1 >= __s102param0.length) {
          __s102param0 = undefined;
        }
        return {
          value: __s102param0 && __s102param0[__s102local1++],
          done: !__s102param0
        };
      }
    };
  }
}
export function __read(__s109param0, __s109param1) {
  var __s109local0 = typeof Symbol == "function" && __s109param0[Symbol.iterator];
  if (!__s109local0) {
    return __s109param0;
  }
  var __s109local1;
  var __s109local2;
  var __s109local3 = __s109local0.call(__s109param0);
  var __s109local4 = [];
  try {
    while ((__s109param1 === undefined || __s109param1-- > 0) && !(__s109local1 = __s109local3.next()).done) {
      __s109local4.push(__s109local1.value);
    }
  } catch (__s115local0) {
    __s109local2 = {
      error: __s115local0
    };
  } finally {
    try {
      if (__s109local1 && !__s109local1.done && (__s109local0 = __s109local3.return)) {
        __s109local0.call(__s109local3);
      }
    } finally {
      if (__s109local2) {
        throw __s109local2.error;
      }
    }
  }
  return __s109local4;
}
export function __spread() {
  var __s122local0 = [];
  for (var __s122local1 = 0; __s122local1 < arguments.length; __s122local1++) {
    __s122local0 = __s122local0.concat(__read(arguments[__s122local1]));
  }
  return __s122local0;
}
export function __await(__s126param0) {
  if (this instanceof __await) {
    this.v = __s126param0;
    return this;
  } else {
    return new __await(__s126param0);
  }
}
export function __asyncGenerator(__s130param0, __s130param1, __s130param2) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var __s130local0;
  var __s130local1 = __s130param2.apply(__s130param0, __s130param1 || []);
  var __s130local2 = [];
  __s130local0 = {};
  verb("next");
  verb("throw");
  verb("return");
  __s130local0[Symbol.asyncIterator] = function () {
    return this;
  };
  return __s130local0;
  function verb(__s135param0) {
    if (__s130local1[__s135param0]) {
      __s130local0[__s135param0] = function (__s138param0) {
        return new Promise(function (__s140param0, __s140param1) {
          if (!(__s130local2.push([__s135param0, __s138param0, __s140param0, __s140param1]) > 1)) {
            resume(__s135param0, __s138param0);
          }
        });
      };
    }
  }
  function resume(__s143param0, __s143param1) {
    try {
      (function step(__s146param0) {
        if (__s146param0.value instanceof __await) {
          Promise.resolve(__s146param0.value.v).then(fulfill, reject);
        } else {
          settle(__s130local2[0][2], __s146param0);
        }
      })(__s130local1[__s143param0](__s143param1));
    } catch (__s150local0) {
      settle(__s130local2[0][3], __s150local0);
    }
  }
  function fulfill(__s152param0) {
    resume("next", __s152param0);
  }
  function reject(__s154param0) {
    resume("throw", __s154param0);
  }
  function settle(__s156param0, __s156param1) {
    __s156param0(__s156param1);
    __s130local2.shift();
    if (__s130local2.length) {
      resume(__s130local2[0][0], __s130local2[0][1]);
    }
  }
}
export function __asyncDelegator(__s159param0) {
  var __s159local0;
  var __s159local1;
  __s159local0 = {};
  verb("next");
  verb("throw", function (__s161param0) {
    throw __s161param0;
  });
  verb("return");
  __s159local0[Symbol.iterator] = function () {
    return this;
  };
  return __s159local0;
  function verb(__s165param0, __s165param1) {
    __s159local0[__s165param0] = __s159param0[__s165param0] ? function (__s167param0) {
      if (__s159local1 = !__s159local1) {
        return {
          value: __await(__s159param0[__s165param0](__s167param0)),
          done: __s165param0 === "return"
        };
      } else if (__s165param1) {
        return __s165param1(__s167param0);
      } else {
        return __s167param0;
      }
    } : __s165param1;
  }
}
export function __asyncValues(__s172param0) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var __s172local0;
  var __s172local1 = __s172param0[Symbol.asyncIterator];
  if (__s172local1) {
    return __s172local1.call(__s172param0);
  } else {
    __s172param0 = __values(__s172param0);
    __s172local0 = {};
    verb("next");
    verb("throw");
    verb("return");
    __s172local0[Symbol.asyncIterator] = function () {
      return this;
    };
    return __s172local0;
  }
  function verb(__s179param0) {
    __s172local0[__s179param0] = __s172param0[__s179param0] && function (__s181param0) {
      return new Promise(function (__s183param0, __s183param1) {
        (function settle(__s185param0, __s185param1, __s185param2, __s185param3) {
          Promise.resolve(__s185param3).then(function (__s187param0) {
            __s185param0({
              value: __s187param0,
              done: __s185param2
            });
          }, __s185param1);
        })(__s183param0, __s183param1, (__s181param0 = __s172param0[__s179param0](__s181param0)).done, __s181param0.value);
      });
    };
  }
}
export function __makeTemplateObject(__s189param0, __s189param1) {
  if (Object.defineProperty) {
    Object.defineProperty(__s189param0, "raw", {
      value: __s189param1
    });
  } else {
    __s189param0.raw = __s189param1;
  }
  return __s189param0;
}
export function __importStar(__s193param0) {
  if (__s193param0 && __s193param0.__esModule) {
    return __s193param0;
  }
  var __s193local0 = {};
  if (__s193param0 != null) {
    for (var __s193local1 in __s193param0) {
      if (Object.hasOwnProperty.call(__s193param0, __s193local1)) {
        __s193local0[__s193local1] = __s193param0[__s193local1];
      }
    }
  }
  __s193local0.default = __s193param0;
  return __s193local0;
}
export function __importDefault(__s200param0) {
  if (__s200param0 && __s200param0.__esModule) {
    return __s200param0;
  } else {
    return {
      default: __s200param0
    };
  }
}
