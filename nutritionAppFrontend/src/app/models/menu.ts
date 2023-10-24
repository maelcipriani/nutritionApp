import {Recipe, RecipeJson} from './recipe';

export interface MenuJson {
  id?: number;
  breakfasts?: RecipeJson[];
  meals?: RecipeJson[];
  collations?: RecipeJson[];
  created_at?: string;
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
    public collations: Recipe[],
    public createdAt: Date
  ) {
  }

  static fromJson(json: MenuJson): Menu {
    return new Menu(
      json.id,
      json.breakfasts.map((recipe: any) => Recipe.fromJson(recipe)),
      json.meals.map((recipe: any) => Recipe.fromJson(recipe)),
      json.collations.map((recipe: any) => Recipe.fromJson(recipe)),
      new Date(json.created_at)
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
