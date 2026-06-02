import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/home/home.component').then((m) => m.HomeComponent),
		title: 'Home'
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./features/about/about.component').then((m) => m.AboutComponent),
		title: 'About'
	},
	{
		path: 'experience',
		loadComponent: () =>
			import('./features/experience/experience.component').then(
				(m) => m.ExperienceComponent
			),
		title: 'Experience'
	},
	{
		path: 'skills',
		loadComponent: () =>
			import('./features/skills/skills.component').then(
				(m) => m.SkillsComponent
			),
		title: 'Skills'
	},
	{
		path: 'projects',
		loadComponent: () =>
			import('./features/projects/projects.component').then(
				(m) => m.ProjectsComponent
			),
		title: 'Projects'
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./features/contact/contact.component').then(
				(m) => m.ContactComponent
			),
		title: 'Contact'
	},
	{
		path: 'resume',
		loadComponent: () =>
			import('./features/resume/resume.component').then(
				(m) => m.ResumeComponent
			),
		title: 'Resume'
	},
	{
		path: '**',
		redirectTo: ''
	}
];
