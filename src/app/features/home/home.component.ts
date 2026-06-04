import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { TerminalHeroComponent } from '../../shared/components/terminal-hero/terminal-hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // RouterLink,
    SectionHeaderComponent,
    TerminalHeroComponent,
    // ProjectCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readonly dataService = inject(PortfolioDataService);

  protected readonly profile = toSignal(this.dataService.getProfile(), {
    initialValue: null
  });

  protected readonly projects = toSignal(this.dataService.getProjects(), {
    initialValue: []
  });

  protected readonly featuredProjects = computed(() =>
    this.projects()
      .filter((project) => project.featured)
      .slice(0, 3)
  );
}
