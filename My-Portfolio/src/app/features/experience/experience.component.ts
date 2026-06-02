import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  private readonly dataService = inject(PortfolioDataService);

  protected readonly experience = toSignal(this.dataService.getExperience(), {
    initialValue: []
  });
}
