module.exports = ReflectionObject;
ReflectionObject.className = "ReflectionObject";
var __s0local0;
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function ReflectionObject(__s1param0, __s1param1) {
  if (!__dep_exact_2865b4ce4f048b89.isString(__s1param0)) {
    throw TypeError("name must be a string");
  }
  if (__s1param1 && !__dep_exact_2865b4ce4f048b89.isObject(__s1param1)) {
    throw TypeError("options must be an object");
  }
  this.options = __s1param1;
  this.name = __s1param0;
  this.parent = null;
  this.resolved = false;
  this.comment = null;
  this.filename = null;
}
Object.defineProperties(ReflectionObject.prototype, {
  root: {
    get: function () {
      for (var __s5local0 = this; __s5local0.parent !== null;) {
        __s5local0 = __s5local0.parent;
      }
      return __s5local0;
    }
  },
  fullName: {
    get: function () {
      var __s9local0 = [this.name];
      for (var __s9local1 = this.parent; __s9local1;) {
        __s9local0.unshift(__s9local1.name);
        __s9local1 = __s9local1.parent;
      }
      return __s9local0.join(".");
    }
  }
});
ReflectionObject.prototype.toJSON = function toJSON() {
  throw Error();
};
ReflectionObject.prototype.onAdd = function onAdd(__s15param0) {
  if (this.parent && this.parent !== __s15param0) {
    this.parent.remove(this);
  }
  this.parent = __s15param0;
  this.resolved = false;
  var __s15local0 = __s15param0.root;
  if (__s15local0 instanceof __s0local0) {
    __s15local0._handleAdd(this);
  }
};
ReflectionObject.prototype.onRemove = function onRemove(__s19param0) {
  var __s19local0 = __s19param0.root;
  if (__s19local0 instanceof __s0local0) {
    __s19local0._handleRemove(this);
  }
  this.parent = null;
  this.resolved = false;
};
ReflectionObject.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  } else {
    if (this.root instanceof __s0local0) {
      this.resolved = true;
    }
    return this;
  }
};
ReflectionObject.prototype.getOption = function getOption(__s27param0) {
  if (this.options) {
    return this.options[__s27param0];
  }
};
ReflectionObject.prototype.setOption = function setOption(__s30param0, __s30param1, __s30param2) {
  if (!__s30param2 || !this.options || this.options[__s30param0] === undefined) {
    (this.options ||= {})[__s30param0] = __s30param1;
  }
  return this;
};
ReflectionObject.prototype.setOptions = function setOptions(__s33param0, __s33param1) {
  if (__s33param0) {
    for (var __s33local0 = Object.keys(__s33param0), __s33local1 = 0; __s33local1 < __s33local0.length; ++__s33local1) {
      this.setOption(__s33local0[__s33local1], __s33param0[__s33local0[__s33local1]], __s33param1);
    }
  }
  return this;
};
ReflectionObject.prototype.toString = function toString() {
  var __s38local0 = this.constructor.className;
  var __s38local1 = this.fullName;
  if (__s38local1.length) {
    return __s38local0 + " " + __s38local1;
  } else {
    return __s38local0;
  }
};
ReflectionObject._configure = function (__s42param0) {
  __s0local0 = __s42param0;
};
