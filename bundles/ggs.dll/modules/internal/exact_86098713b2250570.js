var __s0local0 = Set.prototype.add;
Object.assign(Set.prototype, {
  add: function (__s1param0) {
    __s0local0.call(this, __s1param0);
    return true;
  },
  remove: Set.prototype.delete,
  toArray: function () {
    return Array.from(this.values());
  }
});
