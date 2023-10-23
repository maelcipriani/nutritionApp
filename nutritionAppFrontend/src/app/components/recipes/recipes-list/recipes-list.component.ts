import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../../models/recipe';
import { IsInFilteredArrayPipe } from '../../../pipes/is-in-filtered-array.pipe';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Selection } from '../../../models/selection.model';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule, IsInFilteredArrayPipe, RecipeCardComponent],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Input() recipes: Recipe[];
  @Input() selection: Selection;
  @Input() canLike = false;

  @Output() updateSelection = new EventEmitter<Recipe>();

  protected emitUpdateSelection(recipe: Recipe): void {
    this.updateSelection.emit(recipe);
  }
}
