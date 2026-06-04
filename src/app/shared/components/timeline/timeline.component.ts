import { Component, Input } from '@angular/core';
import { ExperienceEntry } from '../../../core/models/experience.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input({ required: true }) entries: ExperienceEntry[] = [];
}
