import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  hoverPanelVisible = false;
  hoverTitle = '';
  hoverDescription = '';

  onMenuHover(title: string, description: string) {
    this.hoverTitle = title;
    this.hoverDescription = description;
    this.hoverPanelVisible = true;
  }

  hideHoverPanel() {
    this.hoverPanelVisible = false;
  }
}
