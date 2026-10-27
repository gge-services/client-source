import { CastleEquipmentFavoritesMicroservice } from "./CastleEquipmentFavoritesMicroservice";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class CastleInitEquipmentFavoritesServiceCommand extends SimpleCommand {
  execute(argument0 = null) {
    CastleEquipmentFavoritesMicroservice.Instance.initialize();
  }
}
