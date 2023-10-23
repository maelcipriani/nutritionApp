import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item, ItemType } from '../models/item'; // Adjust the path as needed

export type ItemFormType = {
  name: FormControl<string>;
  price: FormControl<number>;
  calories: FormControl<number>;
  proteins: FormControl<number>;
  lipids: FormControl<number>;
  carbohydrates: FormControl<number>;
  type: FormControl<ItemType>;
};

export class ItemForm extends FormGroup<ItemFormType> {
  constructor() {
    super({
      name: new FormControl<string>(null, [Validators.required, Validators.minLength(3)]),
      price: new FormControl<number>(null, [Validators.required, Validators.min(0)]),
      calories: new FormControl<number>(null, [Validators.required, Validators.min(0)]),
      proteins: new FormControl<number>(null, [Validators.required, Validators.min(0)]),
      lipids: new FormControl<number>(null, [Validators.required, Validators.min(0)]),
      carbohydrates: new FormControl<number>(null, [Validators.required, Validators.min(0)]),
      type: new FormControl<ItemType>(null, Validators.required)
    });
  }

  fromItem(item: Item): void {
    Object.keys(this.controls).forEach(key => {
      const control = this.get(key);

      if (control && item.hasOwnProperty(key)) {
        control.patchValue(item[key]);
      }
    });
  }

  toItem(): Item {
    const item = new Item();

    Object.keys(this.controls).forEach(key => {
      item[key] = this.get(key)?.value;
    });

    return item;
  }

  // You can add any other form related methods here if needed
}
