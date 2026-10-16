function inquire(moduleName) {
  try {
    var mod = eval("quire".replace(/^/, "re"))(moduleName);
    if (mod && (mod.length || Object.keys(mod).length)) {
      return mod;
    }
  } catch (__s5local0) {}
  return null;
}
module.exports = inquire;
