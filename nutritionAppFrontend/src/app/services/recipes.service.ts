import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Recipe, RecipeJson} from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipesUrl = `${environment.API_URL}/recipes/`;

  constructor(
    private http: HttpClient
  ) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<RecipeJson[]>(this.recipesUrl)
      .pipe(map(recipes => recipes.map(recipe => Recipe.fromJson(recipe))));
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    const body = recipe.toJson();
    return this.http.post<RecipeJson>(this.recipesUrl, body).pipe(map(recipe => Recipe.fromJson(recipe)));
  }

  updateRecipeImage(recipeId: number, file: File): Observable<void> {
    const url = `${this.recipesUrl}${recipeId}/update-image/`;
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.http.patch<void>(url, formData);
  }
}
