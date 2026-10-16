module.exports = MapField;
var __dep_class_Field = require("gge-module:class_Field");
((MapField.prototype = Object.create(__dep_class_Field.prototype)).constructor = MapField).className = "MapField";
var __dep_exact_e445b2ca0584aabe = require("gge-module:exact_e445b2ca0584aabe");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function MapField(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4, __s1param5) {
  __dep_class_Field.call(this, __s1param0, __s1param1, __s1param3, undefined, undefined, __s1param4, __s1param5);
  if (!__dep_exact_2865b4ce4f048b89.isString(__s1param2)) {
    throw TypeError("keyType must be a string");
  }
  this.keyType = __s1param2;
  this.resolvedKeyType = null;
  this.map = true;
}
MapField.fromJSON = function fromJSON(__s4param0, __s4param1) {
  return new MapField(__s4param0, __s4param1.id, __s4param1.keyType, __s4param1.type, __s4param1.options, __s4param1.comment);
};
MapField.prototype.toJSON = function toJSON(__s6param0) {
  var __s6local0 = !!__s6param0 && Boolean(__s6param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", __s6local0 ? this.comment : undefined]);
};
MapField.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  }
  if (__dep_exact_e445b2ca0584aabe.mapKey[this.keyType] === undefined) {
    throw Error("invalid key type: " + this.keyType);
  }
  return __dep_class_Field.prototype.resolve.call(this);
};
MapField.d = function decorateMapField(__s12param0, __s12param1, __s12param2) {
  if (typeof __s12param2 == "function") {
    __s12param2 = __dep_exact_2865b4ce4f048b89.decorateType(__s12param2).name;
  } else if (__s12param2 && typeof __s12param2 == "object") {
    __s12param2 = __dep_exact_2865b4ce4f048b89.decorateEnum(__s12param2).name;
  }
  return function mapFieldDecorator(__s16param0, __s16param1) {
    __dep_exact_2865b4ce4f048b89.decorateType(__s16param0.constructor).add(new MapField(__s16param1, __s12param0, __s12param1, __s12param2));
  };
};
