import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Menu, MenuJson, MenuJsonSerialized } from '../models/menu';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly resourceUrl = `${environment.API_URL}/menus/`;

  constructor(private readonly http: HttpClient) {}

  createMenu(menuCreation: MenuJsonSerialized): Observable<Menu> {
    return this.http.post<MenuJson>(this.resourceUrl, menuCreation).pipe(map(menuJson => Menu.fromJson(menuJson)));
  }
}
