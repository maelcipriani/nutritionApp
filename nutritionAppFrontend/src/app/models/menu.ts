import { Recipe, RecipeJson } from './recipe';

export interface MenuJson {
  id?: number;
  breakfasts?: RecipeJson[];
  meals?: RecipeJson[];
  collations?: RecipeJson[];
}

export interface MenuJsonSerialized {
  breakfasts_count: number;
  meals_count: number;
  collations_count: number;
}

export class Menu {
  constructor(
    public id: number,
    public breakfasts: Recipe[],
    public meals: Recipe[],
    public collations: Recipe[]
  ) {}

  static fromJson(json: MenuJson): Menu {
    return new Menu(
      json.id,
      json.breakfasts.map((recipe: any) => Recipe.fromJson(recipe)),
      json.meals.map((recipe: any) => Recipe.fromJson(recipe)),
      json.collations.map((recipe: any) => Recipe.fromJson(recipe))
    );
  }

  toJson(): MenuJson {
    return {
      id: this.id,
      breakfasts: this.breakfasts.map(recipe => recipe.toJson()),
      meals: this.meals.map(recipe => recipe.toJson()),
      collations: this.collations.map(recipe => recipe.toJson())
    };
  }
}
