import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { CalculateItemPricePipe } from '../../../pipes/calculate-item-price.pipe';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  imports: [CalculateItemPricePipe, CommonModule],
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipe: Recipe;
  @Input() isLiked = false;
  @Input() canLike = false;

  @Output() updateSelection = new EventEmitter<void>();

  protected emitUpdateSelection(): void {
    this.updateSelection.emit();
  }
}
