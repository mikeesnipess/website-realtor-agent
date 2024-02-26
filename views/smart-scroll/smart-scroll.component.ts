import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-smart-scroll',
  templateUrl: './smart-scroll.component.html',
  styleUrls: ['./smart-scroll.component.css']
})
export class SmartScrollComponent {
  activeButton: string = '#home'; // Default active button

  constructor(private el: ElementRef, private router: Router) {
    // Subscribe to router events to update active button on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveButton();
      }
    });
  }

  // Update active button based on scroll position
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateActiveButton();
  }

  updateActiveButton() {
    const scrollPosition = window.scrollY;

    // Define sections and their corresponding buttons
    const sections: { [key: string]: number } = {
      '#home': 0,
      '#recent': 0,
      '#actually': 0,
      '#faq': 0,
      '#blog': 0
    };

    // Get offsetTop for each section
    for (const section in sections) {
      const element = document.querySelector(section) as HTMLElement;
      if (element) {
        sections[section] = element.offsetTop;
      }
    }

    // Find the section currently in view
    let activeSection = '#home'; // Default to home section
    for (const section in sections) {
      if (sections[section] <= scrollPosition + 100) {
        activeSection = section;
      }
    }

    // Update active button if it has changed
    if (this.activeButton !== activeSection) {
      this.activeButton = activeSection;
    }
  }



  // Method to scroll to a section
  scrollTo(target: string) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeButton = target;
    }
  }

  // Method to check if a route is active
  isRouteActive(fragment: string): boolean {
    return this.router.url.includes(fragment);
  }
}
