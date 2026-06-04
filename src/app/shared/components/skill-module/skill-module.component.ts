import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-module',
  standalone: true,
  templateUrl: './skill-module.component.html',
  styleUrls: ['./skill-module.component.scss']
})
export class SkillModuleComponent {
  @Input({ required: true }) category!: SkillCategory;
}
