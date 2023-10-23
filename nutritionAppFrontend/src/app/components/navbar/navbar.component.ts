import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from '../../constants/pages.constants';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly Components = Components;
}
