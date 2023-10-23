import { Component, signal } from '@angular/core';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuForm } from '../../forms/menu.form';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';
import { tap } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  imports: [MenuDetailsComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {
  menu = signal<Menu>(null);
  menuCreationForm = new MenuForm();

  constructor(private readonly menuService: MenuService) {}

  generateMenu(): void {
    this.menuService
      .createMenu(this.menuCreationForm.toMenuCreation())
      .pipe(
        tap(menu => console.log(menu)),
        tap(menu => this.menu.set(menu))
      )
      .subscribe();
  }
}
