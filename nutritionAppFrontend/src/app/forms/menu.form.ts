import { FormControl, FormGroup } from '@angular/forms';
import { MenuJsonSerialized } from '../models/menu';

export type MenuFormType = {
  breakfastsCount: FormControl<number>;
  mealsCount: FormControl<number>;
  collationsCount: FormControl<number>;
};

export class MenuForm extends FormGroup<MenuFormType> {
  get breakfastsCount(): FormControl<number> {
    return this.controls.breakfastsCount;
  }

  get mealsCount(): FormControl<number> {
    return this.controls.mealsCount;
  }

  get collationsCount(): FormControl<number> {
    return this.controls.collationsCount;
  }

  constructor() {
    super({
      breakfastsCount: new FormControl<number>(null),
      mealsCount: new FormControl<number>(null),
      collationsCount: new FormControl<number>(null)
    });
  }

  toMenuCreation(): MenuJsonSerialized {
    return {
      breakfasts_count: this.breakfastsCount.value ?? undefined,
      meals_count: this.mealsCount.value ?? undefined,
      collations_count: this.collationsCount.value ?? undefined
    };
  }
}
