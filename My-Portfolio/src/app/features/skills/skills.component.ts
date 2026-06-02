import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SkillModuleComponent } from '../../shared/components/skill-module/skill-module.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, SkillModuleComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  private readonly dataService = inject(PortfolioDataService);

  protected readonly categories = toSignal(this.dataService.getSkills(), {
    initialValue: []
  });
}
