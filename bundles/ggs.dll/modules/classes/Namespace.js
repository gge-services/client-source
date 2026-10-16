module.exports = Namespace;
var __dep_class_ReflectionObject = require("gge-module:class_ReflectionObject");
((Namespace.prototype = Object.create(__dep_class_ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
var __s0local0;
var __s0local1;
var __s0local2;
var __dep_class_Field = require("gge-module:class_Field");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function arrayToJSON(__s1param0, __s1param1) {
  if (__s1param0 && __s1param0.length) {
    var __s1local0 = {};
    for (var __s1local1 = 0; __s1local1 < __s1param0.length; ++__s1local1) {
      __s1local0[__s1param0[__s1local1].name] = __s1param0[__s1local1].toJSON(__s1param1);
    }
    return __s1local0;
  }
}
function Namespace(__s6param0, __s6param1) {
  __dep_class_ReflectionObject.call(this, __s6param0, __s6param1);
  this.nested = undefined;
  this._nestedArray = null;
}
function clearCache(__s8param0) {
  __s8param0._nestedArray = null;
  return __s8param0;
}
Namespace.fromJSON = function fromJSON(__s10param0, __s10param1) {
  return new Namespace(__s10param0, __s10param1.options).addJSON(__s10param1.nested);
};
Namespace.arrayToJSON = arrayToJSON;
Namespace.isReservedId = function isReservedId(__s12param0, __s12param1) {
  if (__s12param0) {
    for (var __s12local0 = 0; __s12local0 < __s12param0.length; ++__s12local0) {
      if (typeof __s12param0[__s12local0] != "string" && __s12param0[__s12local0][0] <= __s12param1 && __s12param0[__s12local0][1] >= __s12param1) {
        return true;
      }
    }
  }
  return false;
};
Namespace.isReservedName = function isReservedName(__s18param0, __s18param1) {
  if (__s18param0) {
    for (var __s18local0 = 0; __s18local0 < __s18param0.length; ++__s18local0) {
      if (__s18param0[__s18local0] === __s18param1) {
        return true;
      }
    }
  }
  return false;
};
Object.defineProperty(Namespace.prototype, "nestedArray", {
  get: function () {
    return this._nestedArray ||= __dep_exact_2865b4ce4f048b89.toArray(this.nested);
  }
});
Namespace.prototype.toJSON = function toJSON(__s26param0) {
  return __dep_exact_2865b4ce4f048b89.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, __s26param0)]);
};
Namespace.prototype.addJSON = function addJSON(__s28param0) {
  if (__s28param0) {
    var __s28local0;
    for (var __s28local1 = Object.keys(__s28param0), __s28local2 = 0; __s28local2 < __s28local1.length; ++__s28local2) {
      __s28local0 = __s28param0[__s28local1[__s28local2]];
      this.add((__s28local0.fields !== undefined ? __s0local0.fromJSON : __s28local0.values !== undefined ? __s0local2.fromJSON : __s28local0.methods !== undefined ? __s0local1.fromJSON : __s28local0.id !== undefined ? __dep_class_Field.fromJSON : Namespace.fromJSON)(__s28local1[__s28local2], __s28local0));
    }
  }
  return this;
};
Namespace.prototype.get = function get(__s33param0) {
  return this.nested && this.nested[__s33param0] || null;
};
Namespace.prototype.getEnum = function getEnum(__s35param0) {
  if (this.nested && this.nested[__s35param0] instanceof __s0local2) {
    return this.nested[__s35param0].values;
  }
  throw Error("no such enum: " + __s35param0);
};
Namespace.prototype.add = function add(__s38param0) {
  if ((!(__s38param0 instanceof __dep_class_Field) || __s38param0.extend === undefined) && !(__s38param0 instanceof __s0local0) && !(__s38param0 instanceof __s0local2) && !(__s38param0 instanceof __s0local1) && !(__s38param0 instanceof Namespace)) {
    throw TypeError("object must be a valid nested object");
  }
  if (this.nested) {
    var __s38local0 = this.get(__s38param0.name);
    if (__s38local0) {
      if (!(__s38local0 instanceof Namespace) || !(__s38param0 instanceof Namespace) || __s38local0 instanceof __s0local0 || __s38local0 instanceof __s0local1) {
        throw Error("duplicate name '" + __s38param0.name + "' in " + this);
      }
      for (var __s38local1 = __s38local0.nestedArray, __s38local2 = 0; __s38local2 < __s38local1.length; ++__s38local2) {
        __s38param0.add(__s38local1[__s38local2]);
      }
      this.remove(__s38local0);
      this.nested ||= {};
      __s38param0.setOptions(__s38local0.options, true);
    }
  } else {
    this.nested = {};
  }
  this.nested[__s38param0.name] = __s38param0;
  __s38param0.onAdd(this);
  return clearCache(this);
};
Namespace.prototype.remove = function remove(__s47param0) {
  if (!(__s47param0 instanceof __dep_class_ReflectionObject)) {
    throw TypeError("object must be a ReflectionObject");
  }
  if (__s47param0.parent !== this) {
    throw Error(__s47param0 + " is not a member of " + this);
  }
  delete this.nested[__s47param0.name];
  if (!Object.keys(this.nested).length) {
    this.nested = undefined;
  }
  __s47param0.onRemove(this);
  return clearCache(this);
};
Namespace.prototype.define = function define(__s52param0, __s52param1) {
  if (__dep_exact_2865b4ce4f048b89.isString(__s52param0)) {
    __s52param0 = __s52param0.split(".");
  } else if (!Array.isArray(__s52param0)) {
    throw TypeError("illegal path");
  }
  if (__s52param0 && __s52param0.length && __s52param0[0] === "") {
    throw Error("path must be relative");
  }
  var __s52local0 = this;
  for (; __s52param0.length > 0;) {
    var __s52local1 = __s52param0.shift();
    if (__s52local0.nested && __s52local0.nested[__s52local1]) {
      if (!((__s52local0 = __s52local0.nested[__s52local1]) instanceof Namespace)) {
        throw Error("path conflicts with non-namespace objects");
      }
    } else {
      __s52local0.add(__s52local0 = new Namespace(__s52local1));
    }
  }
  if (__s52param1) {
    __s52local0.addJSON(__s52param1);
  }
  return __s52local0;
};
Namespace.prototype.resolveAll = function resolveAll() {
  for (var __s63local0 = this.nestedArray, __s63local1 = 0; __s63local1 < __s63local0.length;) {
    if (__s63local0[__s63local1] instanceof Namespace) {
      __s63local0[__s63local1++].resolveAll();
    } else {
      __s63local0[__s63local1++].resolve();
    }
  }
  return this.resolve();
};
Namespace.prototype.lookup = function lookup(__s69param0, __s69param1, __s69param2) {
  if (typeof __s69param1 == "boolean") {
    __s69param2 = __s69param1;
    __s69param1 = undefined;
  } else if (__s69param1 && !Array.isArray(__s69param1)) {
    __s69param1 = [__s69param1];
  }
  if (__dep_exact_2865b4ce4f048b89.isString(__s69param0) && __s69param0.length) {
    if (__s69param0 === ".") {
      return this.root;
    }
    __s69param0 = __s69param0.split(".");
  } else if (!__s69param0.length) {
    return this;
  }
  if (__s69param0[0] === "") {
    return this.root.lookup(__s69param0.slice(1), __s69param1);
  }
  var __s69local0 = this.get(__s69param0[0]);
  if (__s69local0) {
    if (__s69param0.length === 1) {
      if (!__s69param1 || __s69param1.indexOf(__s69local0.constructor) > -1) {
        return __s69local0;
      }
    } else if (__s69local0 instanceof Namespace && (__s69local0 = __s69local0.lookup(__s69param0.slice(1), __s69param1, true))) {
      return __s69local0;
    }
  } else {
    for (var __s69local1 = 0; __s69local1 < this.nestedArray.length; ++__s69local1) {
      if (this._nestedArray[__s69local1] instanceof Namespace && (__s69local0 = this._nestedArray[__s69local1].lookup(__s69param0, __s69param1, true))) {
        return __s69local0;
      }
    }
  }
  if (this.parent === null || __s69param2) {
    return null;
  } else {
    return this.parent.lookup(__s69param0, __s69param1);
  }
};
Namespace.prototype.lookupType = function lookupType(__s87param0) {
  var __s87local0 = this.lookup(__s87param0, [__s0local0]);
  if (!__s87local0) {
    throw Error("no such type: " + __s87param0);
  }
  return __s87local0;
};
Namespace.prototype.lookupEnum = function lookupEnum(__s90param0) {
  var __s90local0 = this.lookup(__s90param0, [__s0local2]);
  if (!__s90local0) {
    throw Error("no such Enum '" + __s90param0 + "' in " + this);
  }
  return __s90local0;
};
Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(__s93param0) {
  var __s93local0 = this.lookup(__s93param0, [__s0local0, __s0local2]);
  if (!__s93local0) {
    throw Error("no such Type or Enum '" + __s93param0 + "' in " + this);
  }
  return __s93local0;
};
Namespace.prototype.lookupService = function lookupService(__s96param0) {
  var __s96local0 = this.lookup(__s96param0, [__s0local1]);
  if (!__s96local0) {
    throw Error("no such Service '" + __s96param0 + "' in " + this);
  }
  return __s96local0;
};
Namespace._configure = function (__s99param0, __s99param1, __s99param2) {
  __s0local0 = __s99param0;
  __s0local1 = __s99param1;
  __s0local2 = __s99param2;
};
