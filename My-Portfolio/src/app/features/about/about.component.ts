import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private readonly dataService = inject(PortfolioDataService);

  protected readonly profile = toSignal(this.dataService.getProfile(), {
    initialValue: null
  });

  protected readonly philosophy = computed(() => this.profile()?.philosophy ?? []);
  protected readonly focus = computed(() => this.profile()?.focus ?? []);
}
