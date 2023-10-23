import { environment } from '../../environment';

export interface ItemJson {
  id: number;
  created: string;
  name: string;
  price: number;
  calories: number;
  proteins: number;
  lipids: number;
  carbohydrates: number;
  type: ItemType;
  image: string;
}

export enum ItemType {
  WEIGHT = 'WEIGHT',
  PORTION = 'PORTION'
}

export class Item {
  constructor(
    public id?: number,
    public created?: Date,
    public name?: string,
    public price?: number,
    public calories?: number,
    public proteins?: number,
    public lipids?: number,
    public carbohydrates?: number,
    public type?: ItemType,
    public image?: string
  ) {}

  toJson(): ItemJson {
    return {
      id: this.id,
      created: this.created?.toString(),
      name: this.name,
      price: this.price,
      calories: this.calories,
      proteins: this.proteins,
      lipids: this.lipids,
      carbohydrates: this.carbohydrates,
      type: this.type,
      image: this.image
    };
  }

  static fromJson(json: ItemJson): Item {
    return new Item(
      json.id,
      new Date(json.created),
      json.name,
      json.price,
      json.calories,
      json.proteins,
      json.lipids,
      json.carbohydrates,
      json.type,
      json.image
    );
  }
}
