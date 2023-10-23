import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DialogRef } from '@angular/cdk/dialog';
import { RecipeForm } from '../../../forms/recipe.form';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../../../models/item';
import { ItemsService } from '../../../services/items.service';
import { tap } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { RecipeType } from '../../../enums/recipe-type.enum';

export type AddRecipeDialogResponse = {
  form: RecipeForm;
  file: File;
};

@Component({
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss']
})
export class AddRecipeDialogComponent implements OnInit {
  recipeForm = new RecipeForm();
  items = signal<Item[]>([]);

  selectedFile: File | null = null;

  readonly RecipeTypes = [RecipeType.BREAKFAST, RecipeType.MEAL, RecipeType.COLLATION];

  constructor(
    private dialogRef: MatDialogRef<AddRecipeDialogComponent, AddRecipeDialogResponse>,
    private readonly itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.getItems();
    this.addItemWithQuantity();
  }

  addItemWithQuantity(): void {
    this.recipeForm.addItemWithQuantity();
  }

  addRecipe(): void {
    this.dialogRef.close({ form: this.recipeForm, file: this.selectedFile });
  }

  private getItems(): void {
    this.itemsService
      .getItems()
      .pipe(tap((items: Item[]) => this.items.set(items)))
      .subscribe();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // ... add submit function to handle the form submission, sending data to the backend, etc.
}
