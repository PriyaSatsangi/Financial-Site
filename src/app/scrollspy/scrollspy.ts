import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrollspy.html',
  styleUrls: ['./scrollspy.scss'],
})
export class ScrollspyComponent implements AfterViewInit {
  activeSection = '';
  showBackToTop = false;
  hideNav = true;

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        root: null,
        threshold: 0.4, // Reduced from 0.6 to better detect smaller sections
        rootMargin: '0px 0px -30% 0px', //
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY;
    this.showBackToTop = scrollTop > 300;
    this.hideNav = scrollTop < 150; // hide when near top
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
