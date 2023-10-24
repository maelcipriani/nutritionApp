import {Item, ItemJson} from './item';
import {RecipeType} from '../enums/recipe-type.enum';

export interface ItemWithQuantityJson {
  item: ItemJson;
  quantity: number;
  total_price?: number;
}

export interface ItemWithQuantityJsonSerialized {
  item_id: number;
  quantity: number;
}

export class ItemWithQuantity {
  constructor(
    public item?: Item,
    public quantity?: number,
    public totalPrice?: number
  ) {
  }

  toJson(): ItemWithQuantityJsonSerialized {
    return {
      item_id: this.item.id,
      quantity: this.quantity
    };
  }

  static fromJson(json: ItemWithQuantityJson): ItemWithQuantity {
    return new ItemWithQuantity(Item.fromJson(json.item), json.quantity, json.total_price);
  }
}

export interface RecipeJson {
  id?: number;
  items?: ItemWithQuantityJson[];
  created?: string;
  name?: string;
  recipe_type?: RecipeType;
  preparation_time?: number;
  total_price?: number;
  total_calories?: number;
  total_proteins?: number;
  total_lipids?: number;
  total_carbohydrates?: number;
  image?: string;
}

export interface RecipeJsonSerialized {
  items_with_quantity: ItemWithQuantityJsonSerialized[];
  name: string;
  recipe_type: RecipeType;
  preparation_time: number;
}

export class Recipe {
  constructor(
    public id?: number,
    public items?: ItemWithQuantity[],
    public name?: string,
    public recipeType?: RecipeType,
    public preparationTime?: number,
    public totalPrice?: number,
    public totalCalories?: number,
    public totalProteins?: number,
    public totalLipids?: number,
    public totalCarbohydrates?: number,
    public image?: string
  ) {
  }

  toJson(): RecipeJsonSerialized {
    return {
      items_with_quantity: this.items.map(item => item.toJson()),
      name: this.name,
      recipe_type: this.recipeType,
      preparation_time: this.preparationTime
    };
  }

  static fromJson(json: RecipeJson): Recipe {
    const items = json.items.map(itemJson => ItemWithQuantity.fromJson(itemJson));
    return new Recipe(
      json.id,
      items,
      json.name,
      json.recipe_type,
      json.preparation_time,
      json.total_price,
      json.total_calories,
      json.total_proteins,
      json.total_lipids,
      json.total_carbohydrates,
      json.image
    );
  }
}
