// item.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Item, ItemJson} from '../models/item';
import {HttpHelperService} from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsUrl = `${environment.API_URL}/items/`; // Change to your actual API endpoint

  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelperService
  ) {
  }

  getItems(): Observable<Item[]> {
    return this.http
      .get<ItemJson[]>(this.itemsUrl)
      .pipe(map((items: ItemJson[]) => items.map(item => Item.fromJson(item))));
  }

  createItem(item: Item, file: File): Observable<Item> {
    const formData = this.httpHelper.initFormData(item, file);

    return this.http.post<Item>(this.itemsUrl, formData);
  }
}
