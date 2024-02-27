import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  scrollToRecent() {
    const recentSection = document.getElementById('recent');
    if (recentSection) {
      const start = window.pageYOffset;
      const end = recentSection.getBoundingClientRect().top;
      const duration = 1000; // Adjust the duration (in milliseconds) as needed
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const scroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = easeInOutQuad(Math.min(elapsedTime / duration, 1));
        window.scrollTo(0, start + end * progress);
        if (elapsedTime < duration) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  }

}
