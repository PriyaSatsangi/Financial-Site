import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { ScrollspyComponent } from './scrollspy/scrollspy';
import { ContactLinksComponent } from './components/contact-links/contact-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    ScrollspyComponent,
    ContactLinksComponent,
  ],
  standalone: true,
})
export class AppComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const indicator = document.querySelector(
      '.scroll-indicator'
    ) as HTMLElement;
    if (indicator) {
      indicator.style.height = scrollPercent + '%';
    }
  }
}
