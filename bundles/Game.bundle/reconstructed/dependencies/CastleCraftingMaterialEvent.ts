export class CastleCraftingMaterialEvent extends createjs.Event {
  static MATERIAL_INVENTORY_UPDATED: any;
  constructor(argument0, argument1 = false, argument2 = false) {
    CONSTRUCTOR_HACK;
    super(argument0, argument1, argument2);
  }
  static __initialize_static_members() {
    CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED = "materialInventoryUpdated";
  }
}
CastleCraftingMaterialEvent.__initialize_static_members();
