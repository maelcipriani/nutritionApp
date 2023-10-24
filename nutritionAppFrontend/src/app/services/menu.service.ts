import {Injectable} from '@angular/core';
import {environment} from '../../environment';
import {HttpClient} from '@angular/common/http';
import {Menu, MenuJson, MenuJsonSerialized} from '../models/menu';
import {map, Observable} from 'rxjs';
import {ShoppingList, ShoppingListJson} from "../models/shopping-list.model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly resourceUrl = `${environment.API_URL}/menus/`;

  constructor(private readonly http: HttpClient) {
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get<MenuJson[]>(this.resourceUrl).pipe(
      map(menus => menus.map(menu => Menu.fromJson(menu)))
    )
  }

  createMenu(menuCreation: MenuJsonSerialized): Observable<Menu> {
    return this.http.post<MenuJson>(this.resourceUrl, menuCreation).pipe(map(menuJson => Menu.fromJson(menuJson)));
  }

  generateShoppingList(menuId: number): Observable<ShoppingList> {
    const url = `${this.resourceUrl}generate_shopping_list/${menuId}/`

    return this.http.get<ShoppingListJson>(url).pipe(
      map(listJson => ShoppingList.fromJson(listJson)
      )
    )
  }
}
