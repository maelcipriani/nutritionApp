import {Pipe, PipeTransform} from '@angular/core';
import {RecipeType} from "../enums/recipe-type.enum";

@Pipe({
  standalone: true,
  name: 'recipeType'
})
export class RecipeTypePipe implements PipeTransform {

  transform(type: RecipeType): string {
    switch (type) {
      case RecipeType.BREAKFAST:
        return "Petit Déjeuner";
      case RecipeType.COLLATION:
        return "Collation";
      case RecipeType.MEAL:
        return "Repas";
      default:
        return "";
    }
  }
}
