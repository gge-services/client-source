function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
function isFunction(__s3param0) {
  return typeof __s3param0 == "function";
}
function isObject(__s5param0) {
  return typeof __s5param0 == "object" && __s5param0 !== null;
}
function isUndefined(__s7param0) {
  return __s7param0 === undefined;
}
module.exports = EventEmitter;
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
EventEmitter.defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function (__s9param0) {
  if (!function isNumber(__s11param0) {
    return typeof __s11param0 == "number";
  }(__s9param0) || __s9param0 < 0 || isNaN(__s9param0)) {
    throw TypeError("n must be a positive number");
  }
  this._maxListeners = __s9param0;
  return this;
};
EventEmitter.prototype.emit = function (__s14param0) {
  var __s14local0;
  var __s14local1;
  var __s14local2;
  var __s14local3;
  var __s14local4;
  var __s14local5;
  this._events ||= {};
  if (__s14param0 === "error" && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
    if ((__s14local0 = arguments[1]) instanceof Error) {
      throw __s14local0;
    }
    var __s14local6 = new Error("Uncaught, unspecified \"error\" event. (" + __s14local0 + ")");
    __s14local6.context = __s14local0;
    throw __s14local6;
  }
  if (isUndefined(__s14local1 = this._events[__s14param0])) {
    return false;
  }
  if (isFunction(__s14local1)) {
    switch (arguments.length) {
      case 1:
        __s14local1.call(this);
        break;
      case 2:
        __s14local1.call(this, arguments[1]);
        break;
      case 3:
        __s14local1.call(this, arguments[1], arguments[2]);
        break;
      default:
        __s14local3 = Array.prototype.slice.call(arguments, 1);
        __s14local1.apply(this, __s14local3);
    }
  } else if (isObject(__s14local1)) {
    __s14local3 = Array.prototype.slice.call(arguments, 1);
    __s14local2 = (__s14local5 = __s14local1.slice()).length;
    __s14local4 = 0;
    for (; __s14local4 < __s14local2; __s14local4++) {
      __s14local5[__s14local4].apply(this, __s14local3);
    }
  }
  return true;
};
EventEmitter.prototype.addListener = function (__s24param0, __s24param1) {
  var __s24local0;
  if (!isFunction(__s24param1)) {
    throw TypeError("listener must be a function");
  }
  this._events ||= {};
  if (this._events.newListener) {
    this.emit("newListener", __s24param0, isFunction(__s24param1.listener) ? __s24param1.listener : __s24param1);
  }
  if (this._events[__s24param0]) {
    if (isObject(this._events[__s24param0])) {
      this._events[__s24param0].push(__s24param1);
    } else {
      this._events[__s24param0] = [this._events[__s24param0], __s24param1];
    }
  } else {
    this._events[__s24param0] = __s24param1;
  }
  if (isObject(this._events[__s24param0]) && !this._events[__s24param0].warned && (__s24local0 = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) && __s24local0 > 0 && this._events[__s24param0].length > __s24local0) {
    this._events[__s24param0].warned = true;
    console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[__s24param0].length);
    if (typeof console.trace == "function") {
      console.trace();
    }
  }
  return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function (__s34param0, __s34param1) {
  if (!isFunction(__s34param1)) {
    throw TypeError("listener must be a function");
  }
  var __s34local0 = false;
  function __s34local1() {
    this.removeListener(__s34param0, __s34local1);
    if (!__s34local0) {
      __s34local0 = true;
      __s34param1.apply(this, arguments);
    }
  }
  __s34local1.listener = __s34param1;
  this.on(__s34param0, __s34local1);
  return this;
};
EventEmitter.prototype.removeListener = function (__s40param0, __s40param1) {
  var __s40local0;
  var __s40local1;
  var __s40local2;
  var __s40local3;
  if (!isFunction(__s40param1)) {
    throw TypeError("listener must be a function");
  }
  if (!this._events || !this._events[__s40param0]) {
    return this;
  }
  __s40local2 = (__s40local0 = this._events[__s40param0]).length;
  __s40local1 = -1;
  if (__s40local0 === __s40param1 || isFunction(__s40local0.listener) && __s40local0.listener === __s40param1) {
    delete this._events[__s40param0];
    if (this._events.removeListener) {
      this.emit("removeListener", __s40param0, __s40param1);
    }
  } else if (isObject(__s40local0)) {
    for (__s40local3 = __s40local2; __s40local3-- > 0;) {
      if (__s40local0[__s40local3] === __s40param1 || __s40local0[__s40local3].listener && __s40local0[__s40local3].listener === __s40param1) {
        __s40local1 = __s40local3;
        break;
      }
    }
    if (__s40local1 < 0) {
      return this;
    }
    if (__s40local0.length === 1) {
      __s40local0.length = 0;
      delete this._events[__s40param0];
    } else {
      __s40local0.splice(__s40local1, 1);
    }
    if (this._events.removeListener) {
      this.emit("removeListener", __s40param0, __s40param1);
    }
  }
  return this;
};
EventEmitter.prototype.removeAllListeners = function (__s54param0) {
  var __s54local0;
  var __s54local1;
  if (!this._events) {
    return this;
  }
  if (!this._events.removeListener) {
    if (arguments.length === 0) {
      this._events = {};
    } else if (this._events[__s54param0]) {
      delete this._events[__s54param0];
    }
    return this;
  }
  if (arguments.length === 0) {
    for (__s54local0 in this._events) {
      if (__s54local0 !== "removeListener") {
        this.removeAllListeners(__s54local0);
      }
    }
    this.removeAllListeners("removeListener");
    this._events = {};
    return this;
  }
  if (isFunction(__s54local1 = this._events[__s54param0])) {
    this.removeListener(__s54param0, __s54local1);
  } else if (__s54local1) {
    while (__s54local1.length) {
      this.removeListener(__s54param0, __s54local1[__s54local1.length - 1]);
    }
  }
  delete this._events[__s54param0];
  return this;
};
EventEmitter.prototype.listeners = function (__s68param0) {
  if (this._events && this._events[__s68param0]) {
    if (isFunction(this._events[__s68param0])) {
      return [this._events[__s68param0]];
    } else {
      return this._events[__s68param0].slice();
    }
  } else {
    return [];
  }
};
EventEmitter.prototype.listenerCount = function (__s74param0) {
  if (this._events) {
    var __s74local0 = this._events[__s74param0];
    if (isFunction(__s74local0)) {
      return 1;
    }
    if (__s74local0) {
      return __s74local0.length;
    }
  }
  return 0;
};
EventEmitter.listenerCount = function (__s79param0, __s79param1) {
  return __s79param0.listenerCount(__s79param1);
};
