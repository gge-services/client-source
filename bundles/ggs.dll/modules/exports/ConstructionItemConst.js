// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: ConstructionItemConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local18 = function () {
  function ConstructionItemConst() {}
  ConstructionItemConst.MAX_SLOTS_$LI$ = function () {
    if (ConstructionItemConst.MAX_SLOTS == null) {
      ConstructionItemConst.MAX_SLOTS = ConstructionItemConst.APPEARANCE_SLOT_COUNT + ConstructionItemConst.PRIMARY_SLOT_COUNT + ConstructionItemConst.SECONDARY_SLOT_COUNT;
    }
    return ConstructionItemConst.MAX_SLOTS;
  };
  ConstructionItemConst.SLOT_TYPE_COUNTS_$LI$ = function () {
    if (ConstructionItemConst.SLOT_TYPE_COUNTS == null) {
      ConstructionItemConst.SLOT_TYPE_COUNTS = [ConstructionItemConst.APPEARANCE_SLOT_COUNT, ConstructionItemConst.PRIMARY_SLOT_COUNT, ConstructionItemConst.SECONDARY_SLOT_COUNT];
    }
    return ConstructionItemConst.SLOT_TYPE_COUNTS;
  };
  return ConstructionItemConst;
}();
__s0local18.APPEARANCE_SLOT_TYPE = 0;
__s0local18.PRIMARY_SLOT_TYPE = 1;
__s0local18.SECONDARY_SLOT_TYPE = 2;
__s0local18.APPEARANCE_SLOT_COUNT = 1;
__s0local18.PRIMARY_SLOT_COUNT = 1;
__s0local18.SECONDARY_SLOT_COUNT = 1;
__s0local18.RARENESS_UNIQUE = 0;
__s0local18.RARENESS_COMMON = 1;
__s0local18.RARENESS_RARE = 2;
__s0local18.RARENESS_EPIC = 3;
__s0local18.RARENESS_LEGENDARY = 4;
__s0local18.INVENTORY_SOFTCAP = 5000;
__s0local18.INVENTORY_HARDCAP = 6000;
exports.ConstructionItemConst = __s0local18;
__s0local18.__class = "ConstructionItemConst";
__s0local18.SLOT_TYPE_COUNTS_$LI$();
__s0local18.MAX_SLOTS_$LI$();
