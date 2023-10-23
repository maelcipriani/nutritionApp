import { Recipe, RecipeJson } from './recipe';

export interface SelectionJson {
  id: number;
  recipes: RecipeJson[];
}

export class Selection {
  constructor(
    public id?: number,
    public recipes?: Recipe[]
  ) {}

  static fromJson(json: SelectionJson): Selection {
    return new Selection(json.id ?? null, json.recipes?.map(recipeJson => Recipe.fromJson(recipeJson)) ?? []);
  }
}
