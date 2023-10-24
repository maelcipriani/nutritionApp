import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Menu} from "../../../models/menu";
import {IsInFilteredArrayPipe} from "../../../pipes/is-in-filtered-array.pipe";
import {RecipeCardComponent} from "../../recipes/recipe-card/recipe-card.component";
import {MenuCardComponent} from "../menu-card/menu-card.component";

@Component({
  selector: 'app-menus-list',
  standalone: true,
  imports: [CommonModule, IsInFilteredArrayPipe, RecipeCardComponent, MenuCardComponent],
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.scss']
})
export class MenusListComponent {
  @Input() menus: Menu[];

  @Output() openShoppingListDialog = new EventEmitter<number>;

  emitOpenShoppingListDialog(menuId: number): void {
    this.openShoppingListDialog.emit(menuId)
  }
}
