import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  private readonly dataService = inject(PortfolioDataService);

  protected readonly profile = toSignal(this.dataService.getProfile(), {
    initialValue: null
  });
}
