import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';
import { ExperienceEntry } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private readonly basePath = 'assets/data';

  constructor(private readonly http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.basePath}/profile.json`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.basePath}/projects.json`);
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(`${this.basePath}/skills.json`);
  }

  getExperience(): Observable<ExperienceEntry[]> {
    return this.http.get<ExperienceEntry[]>(`${this.basePath}/experience.json`);
  }
}
