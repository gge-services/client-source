var __s0local0;
var __s0local1;
var __s0local2 = module.exports = {};
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(__s5param0) {
  if (__s0local0 === setTimeout) {
    return setTimeout(__s5param0, 0);
  }
  if ((__s0local0 === defaultSetTimout || !__s0local0) && setTimeout) {
    __s0local0 = setTimeout;
    return setTimeout(__s5param0, 0);
  }
  try {
    return __s0local0(__s5param0, 0);
  } catch (__s10local0) {
    try {
      return __s0local0.call(null, __s5param0, 0);
    } catch (__s13local0) {
      return __s0local0.call(this, __s5param0, 0);
    }
  }
}
(function () {
  try {
    __s0local0 = typeof setTimeout == "function" ? setTimeout : defaultSetTimout;
  } catch (__s18local0) {
    __s0local0 = defaultSetTimout;
  }
  try {
    __s0local1 = typeof clearTimeout == "function" ? clearTimeout : defaultClearTimeout;
  } catch (__s21local0) {
    __s0local1 = defaultClearTimeout;
  }
})();
var __s0local3;
var __s0local4 = [];
var __s0local5 = false;
var __s0local6 = -1;
function cleanUpNextTick() {
  if (__s0local5 && __s0local3) {
    __s0local5 = false;
    if (__s0local3.length) {
      __s0local4 = __s0local3.concat(__s0local4);
    } else {
      __s0local6 = -1;
    }
    if (__s0local4.length) {
      drainQueue();
    }
  }
}
function drainQueue() {
  if (!__s0local5) {
    var __s29local0 = runTimeout(cleanUpNextTick);
    __s0local5 = true;
    for (var __s29local1 = __s0local4.length; __s29local1;) {
      __s0local3 = __s0local4;
      __s0local4 = [];
      while (++__s0local6 < __s29local1) {
        if (__s0local3) {
          __s0local3[__s0local6].run();
        }
      }
      __s0local6 = -1;
      __s29local1 = __s0local4.length;
    }
    __s0local3 = null;
    __s0local5 = false;
    (function runClearTimeout(__s37param0) {
      if (__s0local1 === clearTimeout) {
        return clearTimeout(__s37param0);
      }
      if ((__s0local1 === defaultClearTimeout || !__s0local1) && clearTimeout) {
        __s0local1 = clearTimeout;
        return clearTimeout(__s37param0);
      }
      try {
        return __s0local1(__s37param0);
      } catch (__s42local0) {
        try {
          return __s0local1.call(null, __s37param0);
        } catch (__s45local0) {
          return __s0local1.call(this, __s37param0);
        }
      }
    })(__s29local0);
  }
}
function Item(__s47param0, __s47param1) {
  this.fun = __s47param0;
  this.array = __s47param1;
}
function noop() {}
__s0local2.nextTick = function (__s51param0) {
  var __s51local0 = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var __s51local1 = 1; __s51local1 < arguments.length; __s51local1++) {
      __s51local0[__s51local1 - 1] = arguments[__s51local1];
    }
  }
  __s0local4.push(new Item(__s51param0, __s51local0));
  if (__s0local4.length === 1 && !__s0local5) {
    runTimeout(drainQueue);
  }
};
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
__s0local2.title = "browser";
__s0local2.browser = true;
__s0local2.env = {};
__s0local2.argv = [];
__s0local2.version = "";
__s0local2.versions = {};
__s0local2.on = noop;
__s0local2.addListener = noop;
__s0local2.once = noop;
__s0local2.off = noop;
__s0local2.removeListener = noop;
__s0local2.removeAllListeners = noop;
__s0local2.emit = noop;
__s0local2.prependListener = noop;
__s0local2.prependOnceListener = noop;
__s0local2.listeners = function (__s59param0) {
  return [];
};
__s0local2.binding = function (__s61param0) {
  throw new Error("process.binding is not supported");
};
__s0local2.cwd = function () {
  return "/";
};
__s0local2.chdir = function (__s65param0) {
  throw new Error("process.chdir is not supported");
};
__s0local2.umask = function () {
  return 0;
};
