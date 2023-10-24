import {Component, Inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {ShoppingList} from "../../../models/shopping-list.model";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {ItemType} from "../../../models/item";

@Component({
  selector: 'app-shopping-list-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatListModule],
  templateUrl: './shopping-list-dialog.component.html',
  styleUrls: ['./shopping-list-dialog.component.scss']
})
export class ShoppingListDialogComponent {
  shoppingList = signal<ShoppingList>(null);

  constructor(@Inject(MAT_DIALOG_DATA) public data: ShoppingList) {
    console.log(data);
    this.shoppingList.set(data);
  }

  protected readonly ItemType = ItemType;
}
