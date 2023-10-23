import { Pipe, PipeTransform } from '@angular/core';
import { ItemType } from '../models/item';
import { ItemWithQuantity } from '../models/recipe';

@Pipe({
  standalone: true,
  name: 'calculateItemPrice'
})
export class CalculateItemPricePipe implements PipeTransform {
  transform(itemWithQuantity: ItemWithQuantity): number {
    if (!itemWithQuantity.item.price) return null;

    if (itemWithQuantity.item.type === ItemType.WEIGHT) {
      return (itemWithQuantity.item.price / 1000) * itemWithQuantity.quantity;
    } else {
      return itemWithQuantity.item.price * itemWithQuantity.quantity;
    }
  }
}
