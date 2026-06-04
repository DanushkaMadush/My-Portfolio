import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  private readonly dataService = inject(PortfolioDataService);

  protected readonly projects = toSignal(this.dataService.getProjects(), {
    initialValue: []
  });

  protected readonly searchTerm = signal('');
  protected readonly statusFilter = signal('All');
  protected readonly techFilter = signal('All');

  protected readonly statuses = ['All', 'Production', 'In Development', 'Archived'];

  protected readonly techOptions = computed(() => {
    const set = new Set<string>();
    this.projects().forEach((project) => {
      project.technologies.forEach((tech) => set.add(tech));
    });
    return ['All', ...Array.from(set).sort()];
  });

  protected readonly filteredProjects = computed(() => {
    const search = this.searchTerm().trim().toLowerCase();
    const status = this.statusFilter();
    const tech = this.techFilter();

    return this.projects().filter((project: Project) => {
      const matchesSearch =
        !search ||
        project.name.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.technologies.some((item) => item.toLowerCase().includes(search));

      const matchesStatus = status === 'All' || project.status === status;
      const matchesTech = tech === 'All' || project.technologies.includes(tech);

      return matchesSearch && matchesStatus && matchesTech;
    });
  });

  updateSearch(value: string): void {
    this.searchTerm.set(value);
  }

  updateStatus(value: string): void {
    this.statusFilter.set(value);
  }

  updateTech(value: string): void {
    this.techFilter.set(value);
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.statusFilter.set('All');
    this.techFilter.set('All');
  }
}
