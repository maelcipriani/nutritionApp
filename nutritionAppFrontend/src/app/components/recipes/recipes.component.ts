import { Component, OnInit, signal } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesService } from '../../services/recipes.service';
import { filter, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CalculateItemPricePipe } from '../../pipes/calculate-item-price.pipe';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddRecipeDialogComponent, AddRecipeDialogResponse } from './add-recipe-dialog/add-recipe-dialog.component';
import { RecipeForm } from '../../forms/recipe.form';
import { SelectionService } from '../../services/selection.service';
import { Selection } from '../../models/selection.model';
import { IsInFilteredArrayPipe } from '../../pipes/is-in-filtered-array.pipe';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CalculateItemPricePipe,
    RecipeCardComponent,
    MatButtonModule,
    MatDialogModule,
    IsInFilteredArrayPipe,
    RecipesListComponent
  ],
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes = signal<Recipe[]>([]);
  selection = signal<Selection>(new Selection(null, []));

  selectedFile: File | null = null;

  constructor(
    private readonly recipesService: RecipesService,
    private readonly selectionService: SelectionService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getRecipes();
    this.getSelection();
  }

  openAddRecipeDialog(): void {
    this.dialog
      .open<AddRecipeDialogComponent, AddRecipeDialogResponse>(AddRecipeDialogComponent, {
        width: '800px'
      })
      .afterClosed()
      .pipe(
        filter(value => value),
        tap(value => console.log(value)),
        switchMap((value: AddRecipeDialogResponse) =>
          this.recipesService.createRecipe(value.form.toRecipe()).pipe(
            switchMap(recipe => {
              return this.recipesService.updateRecipeImage(recipe.id, value.file);
            })
          )
        ),
        tap(() => this.getRecipes())
      )
      .subscribe();
  }

  updateSelection(recipe: Recipe): void {
    const isLiked = !!this.selection().recipes.find(r => r.id === recipe.id);
    this.selection.mutate(
      selection =>
        (selection.recipes = isLiked
          ? selection.recipes.filter(r => r.id !== recipe.id)
          : [...selection.recipes, recipe])
    );
    this.selectionService.updateSelection(this.selection()).subscribe();
  }

  private getRecipes(): void {
    this.recipesService
      .getRecipes()
      .pipe(tap(recipes => this.recipes.set(recipes)))
      .subscribe();
  }

  private getSelection(): void {
    this.selectionService
      .getSelection()
      .pipe(
        tap(selection => {
          this.selection.set(selection);
          console.log(this.selection());
        })
      )
      .subscribe();
  }
}
