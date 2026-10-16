module.exports = Type;
var __dep_class_Namespace = require("gge-module:class_Namespace");
((Type.prototype = Object.create(__dep_class_Namespace.prototype)).constructor = Type).className = "Type";
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_class_OneOf = require("gge-module:class_OneOf");
var __dep_class_Field = require("gge-module:class_Field");
var __dep_class_MapField = require("gge-module:class_MapField");
var __dep_exact_aaea423cf3e0c2a5 = require("gge-module:exact_aaea423cf3e0c2a5");
var __dep_class_Message = require("gge-module:class_Message");
var __dep_class_Reader = require("gge-module:class_Reader");
var __dep_class_State = require("gge-module:class_State");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
var __dep_exact_3f705ba351daacce = require("gge-module:exact_3f705ba351daacce");
var __dep_exact_990738874e22c2f3 = require("gge-module:exact_990738874e22c2f3");
var __dep_exact_6cd95b2bb4e1b013 = require("gge-module:exact_6cd95b2bb4e1b013");
var __dep_class_Long = require("gge-module:class_Long");
var __dep_exact_36b1427459f24dc7 = require("gge-module:exact_36b1427459f24dc7");
function Type(__s1param0, __s1param1) {
  __dep_class_Namespace.call(this, __s1param0, __s1param1);
  this.fields = {};
  this.oneofs = undefined;
  this.extensions = undefined;
  this.reserved = undefined;
  this.group = undefined;
  this._fieldsById = null;
  this._fieldsArray = null;
  this._oneofsArray = null;
  this._ctor = null;
}
function clearCache(__s3param0) {
  __s3param0._fieldsById = __s3param0._fieldsArray = __s3param0._oneofsArray = null;
  delete __s3param0.encode;
  delete __s3param0.decode;
  delete __s3param0.verify;
  return __s3param0;
}
Object.defineProperties(Type.prototype, {
  fieldsById: {
    get: function () {
      if (this._fieldsById) {
        return this._fieldsById;
      }
      this._fieldsById = {};
      for (var __s5local0 = Object.keys(this.fields), __s5local1 = 0; __s5local1 < __s5local0.length; ++__s5local1) {
        var __s5local2 = this.fields[__s5local0[__s5local1]];
        var __s5local3 = __s5local2.id;
        if (this._fieldsById[__s5local3]) {
          throw Error("duplicate id " + __s5local3 + " in " + this);
        }
        this._fieldsById[__s5local3] = __s5local2;
      }
      return this._fieldsById;
    }
  },
  fieldsArray: {
    get: function () {
      return this._fieldsArray ||= __dep_exact_2865b4ce4f048b89.toArray(this.fields);
    }
  },
  oneofsArray: {
    get: function () {
      return this._oneofsArray ||= __dep_exact_2865b4ce4f048b89.toArray(this.oneofs);
    }
  },
  ctor: {
    get: function () {
      return this._ctor || (this.ctor = Type.generateConstructor(this)());
    },
    set: function (__s17param0) {
      var __s17local0 = __s17param0.prototype;
      if (!(__s17local0 instanceof __dep_class_Message)) {
        (__s17param0.prototype = new __dep_class_Message()).constructor = __s17param0;
        __dep_exact_2865b4ce4f048b89.merge(__s17param0.prototype, __s17local0);
      }
      __s17param0.$type = __s17param0.prototype.$type = this;
      __dep_exact_2865b4ce4f048b89.merge(__s17param0, __dep_class_Message, true);
      this._ctor = __s17param0;
      for (var __s17local1 = 0; __s17local1 < this.fieldsArray.length; ++__s17local1) {
        this._fieldsArray[__s17local1].resolve();
      }
      var __s17local2 = {};
      for (__s17local1 = 0; __s17local1 < this.oneofsArray.length; ++__s17local1) {
        __s17local2[this._oneofsArray[__s17local1].resolve().name] = {
          get: __dep_exact_2865b4ce4f048b89.oneOfGetter(this._oneofsArray[__s17local1].oneof),
          set: __dep_exact_2865b4ce4f048b89.oneOfSetter(this._oneofsArray[__s17local1].oneof)
        };
      }
      if (__s17local1) {
        Object.defineProperties(__s17param0.prototype, __s17local2);
      }
    }
  }
});
Type.generateConstructor = function generateConstructor(__s25param0) {
  var __s25local0;
  var __s25local1 = __dep_exact_2865b4ce4f048b89.codegen(["p"], __s25param0.name);
  for (var __s25local2 = 0; __s25local2 < __s25param0.fieldsArray.length; ++__s25local2) {
    if ((__s25local0 = __s25param0._fieldsArray[__s25local2]).map) {
      __s25local1("this%s={}", __dep_exact_2865b4ce4f048b89.safeProp(__s25local0.name));
    } else if (__s25local0.repeated) {
      __s25local1("this%s=[]", __dep_exact_2865b4ce4f048b89.safeProp(__s25local0.name));
    }
  }
  return __s25local1("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
};
Type.fromJSON = function fromJSON(__s31param0, __s31param1) {
  var __s31local0 = new Type(__s31param0, __s31param1.options);
  __s31local0.extensions = __s31param1.extensions;
  __s31local0.reserved = __s31param1.reserved;
  for (var __s31local1 = Object.keys(__s31param1.fields), __s31local2 = 0; __s31local2 < __s31local1.length; ++__s31local2) {
    __s31local0.add((__s31param1.fields[__s31local1[__s31local2]].keyType !== undefined ? __dep_class_MapField.fromJSON : __dep_class_Field.fromJSON)(__s31local1[__s31local2], __s31param1.fields[__s31local1[__s31local2]]));
  }
  if (__s31param1.oneofs) {
    __s31local1 = Object.keys(__s31param1.oneofs);
    __s31local2 = 0;
    for (; __s31local2 < __s31local1.length; ++__s31local2) {
      __s31local0.add(__dep_class_OneOf.fromJSON(__s31local1[__s31local2], __s31param1.oneofs[__s31local1[__s31local2]]));
    }
  }
  if (__s31param1.nested) {
    __s31local1 = Object.keys(__s31param1.nested);
    __s31local2 = 0;
    for (; __s31local2 < __s31local1.length; ++__s31local2) {
      var __s31local3 = __s31param1.nested[__s31local1[__s31local2]];
      __s31local0.add((__s31local3.id !== undefined ? __dep_class_Field.fromJSON : __s31local3.fields !== undefined ? Type.fromJSON : __s31local3.values !== undefined ? __dep_class_Enum.fromJSON : __s31local3.methods !== undefined ? __dep_exact_aaea423cf3e0c2a5.fromJSON : __dep_class_Namespace.fromJSON)(__s31local1[__s31local2], __s31local3));
    }
  }
  if (__s31param1.extensions && __s31param1.extensions.length) {
    __s31local0.extensions = __s31param1.extensions;
  }
  if (__s31param1.reserved && __s31param1.reserved.length) {
    __s31local0.reserved = __s31param1.reserved;
  }
  if (__s31param1.group) {
    __s31local0.group = true;
  }
  if (__s31param1.comment) {
    __s31local0.comment = __s31param1.comment;
  }
  return __s31local0;
};
Type.prototype.toJSON = function toJSON(__s45param0) {
  var __s45local0 = __dep_class_Namespace.prototype.toJSON.call(this, __s45param0);
  var __s45local1 = !!__s45param0 && Boolean(__s45param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["options", __s45local0 && __s45local0.options || undefined, "oneofs", __dep_class_Namespace.arrayToJSON(this.oneofsArray, __s45param0), "fields", __dep_class_Namespace.arrayToJSON(this.fieldsArray.filter(function (__s47param0) {
    return !__s47param0.declaringField;
  }), __s45param0) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", __s45local0 && __s45local0.nested || undefined, "comment", __s45local1 ? this.comment : undefined]);
};
Type.prototype.resolveAll = function resolveAll() {
  for (var __s49local0 = this.fieldsArray, __s49local1 = 0; __s49local1 < __s49local0.length;) {
    __s49local0[__s49local1++].resolve();
  }
  var __s49local2 = this.oneofsArray;
  for (__s49local1 = 0; __s49local1 < __s49local2.length;) {
    __s49local2[__s49local1++].resolve();
  }
  return __dep_class_Namespace.prototype.resolveAll.call(this);
};
Type.prototype.get = function get(__s55param0) {
  return this.fields[__s55param0] || this.oneofs && this.oneofs[__s55param0] || this.nested && this.nested[__s55param0] || null;
};
Type.prototype.add = function add(__s57param0) {
  if (this.get(__s57param0.name)) {
    throw Error("duplicate name '" + __s57param0.name + "' in " + this);
  }
  if (__s57param0 instanceof __dep_class_Field && __s57param0.extend === undefined) {
    if (this._fieldsById ? this._fieldsById[__s57param0.id] : this.fieldsById[__s57param0.id]) {
      throw Error("duplicate id " + __s57param0.id + " in " + this);
    }
    if (this.isReservedId(__s57param0.id)) {
      throw Error("id " + __s57param0.id + " is reserved in " + this);
    }
    if (this.isReservedName(__s57param0.name)) {
      throw Error("name '" + __s57param0.name + "' is reserved in " + this);
    }
    if (__s57param0.parent) {
      __s57param0.parent.remove(__s57param0);
    }
    this.fields[__s57param0.name] = __s57param0;
    __s57param0.message = this;
    __s57param0.onAdd(this);
    return clearCache(this);
  }
  if (__s57param0 instanceof __dep_class_OneOf) {
    this.oneofs ||= {};
    this.oneofs[__s57param0.name] = __s57param0;
    __s57param0.onAdd(this);
    return clearCache(this);
  } else {
    return __dep_class_Namespace.prototype.add.call(this, __s57param0);
  }
};
Type.prototype.remove = function remove(__s67param0) {
  if (__s67param0 instanceof __dep_class_Field && __s67param0.extend === undefined) {
    if (!this.fields || this.fields[__s67param0.name] !== __s67param0) {
      throw Error(__s67param0 + " is not a member of " + this);
    }
    delete this.fields[__s67param0.name];
    __s67param0.parent = null;
    __s67param0.onRemove(this);
    return clearCache(this);
  }
  if (__s67param0 instanceof __dep_class_OneOf) {
    if (!this.oneofs || this.oneofs[__s67param0.name] !== __s67param0) {
      throw Error(__s67param0 + " is not a member of " + this);
    }
    delete this.oneofs[__s67param0.name];
    __s67param0.parent = null;
    __s67param0.onRemove(this);
    return clearCache(this);
  }
  return __dep_class_Namespace.prototype.remove.call(this, __s67param0);
};
Type.prototype.isReservedId = function isReservedId(__s73param0) {
  return __dep_class_Namespace.isReservedId(this.reserved, __s73param0);
};
Type.prototype.isReservedName = function isReservedName(__s75param0) {
  return __dep_class_Namespace.isReservedName(this.reserved, __s75param0);
};
Type.prototype.create = function create(__s77param0) {
  return new this.ctor(__s77param0);
};
Type.prototype.setup = function setup() {
  var __s79local0 = this.fullName;
  var __s79local1 = [];
  for (var __s79local2 = 0; __s79local2 < this.fieldsArray.length; ++__s79local2) {
    __s79local1.push(this._fieldsArray[__s79local2].resolve().resolvedType);
  }
  this.encode = __dep_exact_3f705ba351daacce(this)({
    Writer: __dep_class_State,
    types: __s79local1,
    util: __dep_exact_2865b4ce4f048b89
  });
  this.decode = __dep_exact_990738874e22c2f3(this)({
    Reader: __dep_class_Reader,
    types: __s79local1,
    util: __dep_exact_2865b4ce4f048b89
  });
  this.verify = __dep_exact_6cd95b2bb4e1b013(this)({
    types: __s79local1,
    util: __dep_exact_2865b4ce4f048b89
  });
  this.fromObject = __dep_class_Long.fromObject(this)({
    types: __s79local1,
    util: __dep_exact_2865b4ce4f048b89
  });
  this.toObject = __dep_class_Long.toObject(this)({
    types: __s79local1,
    util: __dep_exact_2865b4ce4f048b89
  });
  var __s79local3 = __dep_exact_36b1427459f24dc7[__s79local0];
  if (__s79local3) {
    var __s79local4 = Object.create(this);
    __s79local4.fromObject = this.fromObject;
    this.fromObject = __s79local3.fromObject.bind(__s79local4);
    __s79local4.toObject = this.toObject;
    this.toObject = __s79local3.toObject.bind(__s79local4);
  }
  return this;
};
Type.prototype.encode = function encode_setup(__s84param0, __s84param1) {
  return this.setup().encode(__s84param0, __s84param1);
};
Type.prototype.encodeDelimited = function encodeDelimited(__s86param0, __s86param1) {
  return this.encode(__s86param0, __s86param1 && __s86param1.len ? __s86param1.fork() : __s86param1).ldelim();
};
Type.prototype.decode = function decode_setup(__s88param0, __s88param1) {
  return this.setup().decode(__s88param0, __s88param1);
};
Type.prototype.decodeDelimited = function decodeDelimited(__s90param0) {
  if (!(__s90param0 instanceof __dep_class_Reader)) {
    __s90param0 = __dep_class_Reader.create(__s90param0);
  }
  return this.decode(__s90param0, __s90param0.uint32());
};
Type.prototype.verify = function verify_setup(__s93param0) {
  return this.setup().verify(__s93param0);
};
Type.prototype.fromObject = function fromObject(__s95param0) {
  return this.setup().fromObject(__s95param0);
};
Type.prototype.toObject = function toObject(__s97param0, __s97param1) {
  return this.setup().toObject(__s97param0, __s97param1);
};
Type.d = function decorateType(__s99param0) {
  return function typeDecorator(__s101param0) {
    __dep_exact_2865b4ce4f048b89.decorateType(__s101param0, __s99param0);
  };
};
