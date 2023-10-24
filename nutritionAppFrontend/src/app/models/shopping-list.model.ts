import {ItemWithQuantity, ItemWithQuantityJson} from "./recipe";

export interface ShoppingListJson {
  shopping_list: ItemWithQuantityJson[];
  total_price: number;
}

export class ShoppingList {
  constructor(
    public shoppingList: ItemWithQuantity[],
    public totalPrice: number
  ) {
  }

  static fromJson(json: ShoppingListJson): ShoppingList {
    return new ShoppingList(
      json.shopping_list.map(itemJson => ItemWithQuantity.fromJson(itemJson)),
      json.total_price
    )
  }
}
