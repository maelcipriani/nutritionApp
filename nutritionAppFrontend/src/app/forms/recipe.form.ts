import { FormBuilder, Validators, FormGroup, FormArray, FormControl, Form } from '@angular/forms';
import { RecipeType } from '../enums/recipe-type.enum';
import { ItemWithQuantity, Recipe } from '../models/recipe';
import { Item } from '../models/item';

export type RecipeFormType = {
  name: FormControl<string>;
  itemsWithQuantity: FormArray<itemsWithQuantityForm>;
  recipeType: FormControl<RecipeType>;
  preparationTime: FormControl<number>;
};

export class RecipeForm extends FormGroup<RecipeFormType> {
  get itemsWithQuantity(): FormArray<itemsWithQuantityForm> {
    return this.controls.itemsWithQuantity;
  }

  get name(): FormControl<string> {
    return this.controls.name;
  }

  get recipeType(): FormControl<RecipeType> {
    return this.controls.recipeType;
  }

  get preparationTime(): FormControl<number> {
    return this.controls.preparationTime;
  }

  constructor() {
    super({
      name: new FormControl<string>(null, Validators.required),
      itemsWithQuantity: new FormArray<itemsWithQuantityForm>([], Validators.minLength(1)),
      recipeType: new FormControl<RecipeType>(null, Validators.required),
      preparationTime: new FormControl<number>(null)
    });
  }

  addItemWithQuantity(): void {
    const lastItem = this.itemsWithQuantity.controls[this.itemsWithQuantity.length - 1];
    if (!this.itemsWithQuantity.length || (lastItem?.itemId.value && lastItem?.quantity.value)) {
      this.itemsWithQuantity.push(new itemsWithQuantityForm());
    }
  }

  toRecipe(): Recipe {
    return new Recipe(
      null,
      this.itemsWithQuantity.controls.map(
        control => new ItemWithQuantity(new Item(control.itemId.value), control.quantity.value)
      ),
      this.name.value,
      this.recipeType.value,
      this.preparationTime.value
    );
  }
}

export type itemsWithQuantityFormType = {
  itemId: FormControl<number>;
  quantity: FormControl<number>;
};

export class itemsWithQuantityForm extends FormGroup<itemsWithQuantityFormType> {
  get itemId(): FormControl<number> {
    return this.controls.itemId;
  }

  get quantity(): FormControl<number> {
    return this.controls.quantity;
  }

  constructor() {
    super({
      itemId: new FormControl<number>(null, Validators.required),
      quantity: new FormControl<number>(null, Validators.min(1))
    });
  }
}
