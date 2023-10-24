import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Menu} from "../../../models/menu";
import {MatButtonModule} from "@angular/material/button";
import {NutritionSummaryPipe} from "../../../pipes/nutrition-summary.pipe";

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NutritionSummaryPipe],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input() menu: Menu;

  @Output() openShoppingListDialog = new EventEmitter<number>;

  emitOpenShoppingListDialog(menuId: number): void {
    this.openShoppingListDialog.emit(menuId)
  }
}
