module.exports = Root;
var __dep_class_Namespace = require("gge-module:class_Namespace");
((Root.prototype = Object.create(__dep_class_Namespace.prototype)).constructor = Root).className = "Root";
var __s0local0;
var __s0local1;
var __s0local2;
var __dep_class_Field = require("gge-module:class_Field");
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_class_OneOf = require("gge-module:class_OneOf");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function Root(__s1param0) {
  __dep_class_Namespace.call(this, "", __s1param0);
  this.deferred = [];
  this.files = [];
}
function SYNC() {}
Root.fromJSON = function fromJSON(__s5param0, __s5param1) {
  __s5param1 ||= new Root();
  if (__s5param0.options) {
    __s5param1.setOptions(__s5param0.options);
  }
  return __s5param1.addJSON(__s5param0.nested);
};
Root.prototype.resolvePath = __dep_exact_2865b4ce4f048b89.path.resolve;
Root.prototype.load = function load(__s8param0, __s8param1, __s8param2) {
  if (typeof __s8param1 == "function") {
    __s8param2 = __s8param1;
    __s8param1 = undefined;
  }
  var __s8local0 = this;
  if (!__s8param2) {
    return __dep_exact_2865b4ce4f048b89.asPromise(load, __s8local0, __s8param0, __s8param1);
  }
  var __s8local1 = __s8param2 === SYNC;
  function finish(__s12param0, __s12param1) {
    if (__s8param2) {
      var __s12local0 = __s8param2;
      __s8param2 = null;
      if (__s8local1) {
        throw __s12param0;
      }
      __s12local0(__s12param0, __s12param1);
    }
  }
  function process(__s16param0, __s16param1) {
    try {
      if (__dep_exact_2865b4ce4f048b89.isString(__s16param1) && __s16param1.charAt(0) === "{") {
        __s16param1 = JSON.parse(__s16param1);
      }
      if (__dep_exact_2865b4ce4f048b89.isString(__s16param1)) {
        __s0local1.filename = __s16param0;
        var __s16local0;
        var __s16local1 = __s0local1(__s16param1, __s8local0, __s8param1);
        var __s16local2 = 0;
        if (__s16local1.imports) {
          for (; __s16local2 < __s16local1.imports.length; ++__s16local2) {
            if (__s16local0 = __s8local0.resolvePath(__s16param0, __s16local1.imports[__s16local2])) {
              fetch(__s16local0);
            }
          }
        }
        if (__s16local1.weakImports) {
          for (__s16local2 = 0; __s16local2 < __s16local1.weakImports.length; ++__s16local2) {
            if (__s16local0 = __s8local0.resolvePath(__s16param0, __s16local1.weakImports[__s16local2])) {
              fetch(__s16local0, true);
            }
          }
        }
      } else {
        __s8local0.setOptions(__s16param1.options).addJSON(__s16param1.nested);
      }
    } catch (__s30local0) {
      finish(__s30local0);
    }
    if (!__s8local1 && !__s8local2) {
      finish(null, __s8local0);
    }
  }
  function fetch(__s33param0, __s33param1) {
    var __s33local0 = __s33param0.lastIndexOf("google/protobuf/");
    if (__s33local0 > -1) {
      var __s33local1 = __s33param0.substring(__s33local0);
      if (__s33local1 in __s0local2) {
        __s33param0 = __s33local1;
      }
    }
    if (!(__s8local0.files.indexOf(__s33param0) > -1)) {
      __s8local0.files.push(__s33param0);
      if (__s33param0 in __s0local2) {
        if (__s8local1) {
          process(__s33param0, __s0local2[__s33param0]);
        } else {
          ++__s8local2;
          setTimeout(function () {
            --__s8local2;
            process(__s33param0, __s0local2[__s33param0]);
          });
        }
      } else if (__s8local1) {
        var __s33local2;
        try {
          __s33local2 = __dep_exact_2865b4ce4f048b89.fs.readFileSync(__s33param0).toString("utf8");
        } catch (__s45local0) {
          if (!__s33param1) {
            finish(__s45local0);
          }
          return;
        }
        process(__s33param0, __s33local2);
      } else {
        ++__s8local2;
        __dep_exact_2865b4ce4f048b89.fetch(__s33param0, function (__s49param0, __s49param1) {
          --__s8local2;
          if (__s8param2) {
            if (__s49param0) {
              if (__s33param1) {
                if (!__s8local2) {
                  finish(null, __s8local0);
                }
              } else {
                finish(__s49param0);
              }
            } else {
              process(__s33param0, __s49param1);
            }
          }
        });
      }
    }
  }
  var __s8local2 = 0;
  if (__dep_exact_2865b4ce4f048b89.isString(__s8param0)) {
    __s8param0 = [__s8param0];
  }
  var __s8local3;
  for (var __s8local4 = 0; __s8local4 < __s8param0.length; ++__s8local4) {
    if (__s8local3 = __s8local0.resolvePath("", __s8param0[__s8local4])) {
      fetch(__s8local3);
    }
  }
  if (__s8local1) {
    return __s8local0;
  }
  if (!__s8local2) {
    finish(null, __s8local0);
  }
};
Root.prototype.loadSync = function loadSync(__s63param0, __s63param1) {
  if (!__dep_exact_2865b4ce4f048b89.isNode) {
    throw Error("not supported");
  }
  return this.load(__s63param0, __s63param1, SYNC);
};
Root.prototype.resolveAll = function resolveAll() {
  if (this.deferred.length) {
    throw Error("unresolvable extensions: " + this.deferred.map(function (__s69param0) {
      return "'extend " + __s69param0.extend + "' in " + __s69param0.parent.fullName;
    }).join(", "));
  }
  return __dep_class_Namespace.prototype.resolveAll.call(this);
};
var __s0local3 = /^[A-Z]/;
function tryHandleExtension(__s71param0, __s71param1) {
  var __s71local0 = __s71param1.parent.lookup(__s71param1.extend);
  if (__s71local0) {
    var __s71local1 = new __dep_class_Field(__s71param1.fullName, __s71param1.id, __s71param1.type, __s71param1.rule, undefined, __s71param1.options);
    __s71local1.declaringField = __s71param1;
    __s71param1.extensionField = __s71local1;
    __s71local0.add(__s71local1);
    return true;
  }
  return false;
}
Root.prototype._handleAdd = function _handleAdd(__s74param0) {
  if (__s74param0 instanceof __dep_class_Field) {
    if (__s74param0.extend !== undefined && !__s74param0.extensionField && !tryHandleExtension(0, __s74param0)) {
      this.deferred.push(__s74param0);
    }
  } else if (__s74param0 instanceof __dep_class_Enum) {
    if (__s0local3.test(__s74param0.name)) {
      __s74param0.parent[__s74param0.name] = __s74param0.values;
    }
  } else if (!(__s74param0 instanceof __dep_class_OneOf)) {
    if (__s74param0 instanceof __s0local0) {
      for (var __s74local0 = 0; __s74local0 < this.deferred.length;) {
        if (tryHandleExtension(0, this.deferred[__s74local0])) {
          this.deferred.splice(__s74local0, 1);
        } else {
          ++__s74local0;
        }
      }
    }
    for (var __s74local1 = 0; __s74local1 < __s74param0.nestedArray.length; ++__s74local1) {
      this._handleAdd(__s74param0._nestedArray[__s74local1]);
    }
    if (__s0local3.test(__s74param0.name)) {
      __s74param0.parent[__s74param0.name] = __s74param0;
    }
  }
};
Root.prototype._handleRemove = function _handleRemove(__s89param0) {
  if (__s89param0 instanceof __dep_class_Field) {
    if (__s89param0.extend !== undefined) {
      if (__s89param0.extensionField) {
        __s89param0.extensionField.parent.remove(__s89param0.extensionField);
        __s89param0.extensionField = null;
      } else {
        var __s89local0 = this.deferred.indexOf(__s89param0);
        if (__s89local0 > -1) {
          this.deferred.splice(__s89local0, 1);
        }
      }
    }
  } else if (__s89param0 instanceof __dep_class_Enum) {
    if (__s0local3.test(__s89param0.name)) {
      delete __s89param0.parent[__s89param0.name];
    }
  } else if (__s89param0 instanceof __dep_class_Namespace) {
    for (var __s89local1 = 0; __s89local1 < __s89param0.nestedArray.length; ++__s89local1) {
      this._handleRemove(__s89param0._nestedArray[__s89local1]);
    }
    if (__s0local3.test(__s89param0.name)) {
      delete __s89param0.parent[__s89param0.name];
    }
  }
};
Root._configure = function (__s102param0, __s102param1, __s102param2) {
  __s0local0 = __s102param0;
  __s0local1 = __s102param1;
  __s0local2 = __s102param2;
};
