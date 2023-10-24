import {Component, OnInit, signal} from '@angular/core';
import {Item, ItemType} from '../../models/item';
import {ItemsService} from '../../services/items.service';
import {finalize, tap} from 'rxjs';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemForm} from '../../forms/item.form';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule, ReactiveFormsModule],
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items = signal<Item[]>([]);
  creatingItem = signal<boolean>(false);

  itemForm = new ItemForm();
  selectedFile: File | null = null;

  protected readonly ItemType = ItemType;

  constructor(private itemService: ItemsService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  saveItem(): void {
    this.itemService
      .createItem(this.itemForm.toItem(), this.selectedFile)
      .pipe(
        tap(() => {
          this.creatingItem.set(false);
          this.getItems();
        }),
        finalize(() => this.itemForm.reset())
      )
      .subscribe();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  private getItems(): void {
    this.itemService
      .getItems()
      .pipe(tap((items: Item[]) => this.items.set(items)))
      .subscribe();
  }
}
