import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-links',
  standalone: true,
  templateUrl: './contact-links.html',
  styleUrls: ['./contact-links.scss'],
})
export class ContactLinksComponent {
  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
    this.isVisible = isInViewport;
  }
}
