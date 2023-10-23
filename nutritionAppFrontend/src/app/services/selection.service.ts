import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Recipe, RecipeJson } from '../models/recipe';
import { Selection, SelectionJson } from '../models/selection.model';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private resourceUrl = `${environment.API_URL}/selections/`;

  constructor(private readonly http: HttpClient) {}

  getSelection(): Observable<Selection> {
    return this.http.get<SelectionJson[]>(this.resourceUrl).pipe(
      tap(selectionJson => console.log(selectionJson)),
      map(selectionJson => Selection.fromJson(selectionJson[0]))
    );
  }

  updateSelection(selection: Selection): Observable<Selection> {
    const url = `${this.resourceUrl + selection.id}/`;
    const body = { recipe_ids: selection.recipes.map(recipe => recipe.id) };

    return this.http.patch<SelectionJson>(url, body).pipe(map(selectionJson => Selection.fromJson(selectionJson)));
  }
}
