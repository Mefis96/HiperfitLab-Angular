import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('hiperfit-lab');

  ngAfterViewInit() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.style.display =
          mobileMenu.style.display === 'block' ? 'none' : 'block';
      });

      mobileMenu.addEventListener('mouseleave', () => {
        mobileMenu.style.display = 'none';
      });
    }
  }
}
