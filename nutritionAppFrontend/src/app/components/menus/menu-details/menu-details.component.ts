import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Menu} from '../../../models/menu';
import {RecipeCardComponent} from '../../recipes/recipe-card/recipe-card.component';
import {RecipesListComponent} from '../../recipes/recipes-list/recipes-list.component';

@Component({
  selector: 'app-menu-details',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent, RecipesListComponent],
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent {
  @Input() menu: Menu;

  @Output() openShoppingListDialog = new EventEmitter<number>;
}
