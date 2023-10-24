import {Component, OnInit, signal} from '@angular/core';
import {MenuDetailsComponent} from './menu-details/menu-details.component';
import {MenuForm} from '../../forms/menu.form';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../models/menu';
import {switchMap, tap} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MenusListComponent} from "./menus-list/menus-list.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ShoppingListDialogComponent} from "./shopping-list-dialog/shopping-list-dialog.component";
import {ShoppingList} from "../../models/shopping-list.model";

@Component({
  standalone: true,
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  imports: [MenuDetailsComponent, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MenusListComponent],
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  lastMenus = signal<Menu[]>([]);
  menu = signal<Menu>(null);
  menuCreationForm = new MenuForm();

  constructor(private readonly menuService: MenuService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.menuService.getMenus().pipe(
      tap(menus => this.lastMenus.set(menus))
    ).subscribe()
  }

  generateMenu(): void {
    this.menuService
      .createMenu(this.menuCreationForm.toMenuCreation())
      .pipe(
        tap(menu => console.log(menu)),
        tap(menu => this.menu.set(menu)),
        tap(() => this.getMenus())
      )
      .subscribe();
  }

  openShoppingListDialog(menuId: number): void {
    this.menuService.generateShoppingList(menuId).pipe(
      tap(shoppingList => this.dialog.open<ShoppingListDialogComponent, ShoppingList>(ShoppingListDialogComponent, {
        width: "800px",
        data: shoppingList
      }))
    ).subscribe()
  }
}
