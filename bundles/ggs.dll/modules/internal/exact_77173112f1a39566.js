var __s0local0 = new Map([["a", 1], ["b", 2], ["c", 3]]);
var __s0local1 = Array.from(__s0local0.values());
if (__s0local1.length != 3 || __s0local1[0] != 1 || __s0local1[1] != 2 || __s0local1[2] != 3) {
  Map.prototype.values = function () {
    var __s2local0 = [];
    this.forEach(function (__s4param0) {
      __s2local0.push(__s4param0);
    });
    return __s2local0.values();
  };
}
Object.assign(Map.prototype, {
  toArray: function () {
    return Array.from(this.values());
  },
  hasKey: function (__s8param0) {
    return this.has(__s8param0);
  },
  add: function (__s10param0, __s10param1) {
    this.set(__s10param0, __s10param1);
    return true;
  }
});
