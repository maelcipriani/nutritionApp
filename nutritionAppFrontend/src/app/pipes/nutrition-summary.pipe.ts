import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from "../models/recipe";

@Pipe({
  standalone: true,
  name: 'nutritionSummary'
})
export class NutritionSummaryPipe implements PipeTransform {

  transform(recipes: Recipe[]): string[] {
    if (!recipes || recipes.length === 0) {
      return null;
    }

    let totalCalories = 0;
    let totalProteins = 0;
    let totalLipids = 0;
    let totalCarbohydrates = 0;

    recipes.forEach(recipe => {
      totalCalories += Number(recipe.totalCalories);
      totalProteins += Number(recipe.totalProteins);
      totalLipids += Number(recipe.totalLipids);
      totalCarbohydrates += Number(recipe.totalCarbohydrates);
    });

    return [`${totalCalories.toFixed(2)} kcal`, `Proteins: ${totalProteins.toFixed(2)}g `, `Lipids: ${totalLipids.toFixed(2)}g`, `Carbohydrates: ${totalCarbohydrates.toFixed(2)}g`];
  }
}
