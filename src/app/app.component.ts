import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoadingScreenComponent } from './shared/components/loading-screen/loading-screen.component';
import { routeTransition } from './route.animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransition],
})
export class AppComponent {
  protected readonly isLoading = signal(true);

  constructor() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 700);
  }

getRoute(outlet: RouterOutlet): string {
  const route = outlet?.isActivated 
    ? (outlet.activatedRouteData?.['animation'] ?? outlet.activatedRoute.snapshot.url?.[0]?.path ?? 'default')
    : 'default';
  console.log('route transition:', route);
  return route;
}
}
