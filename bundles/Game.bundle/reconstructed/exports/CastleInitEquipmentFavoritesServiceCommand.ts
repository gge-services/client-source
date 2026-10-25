import { CastleEquipmentFavoritesMicroservice } from "./CastleEquipmentFavoritesMicroservice";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class CastleInitEquipmentFavoritesServiceCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    CastleEquipmentFavoritesMicroservice.Instance.initialize();
  }
}
