import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/home/home.component').then((m) => m.HomeComponent),
		title: '~/danushka'
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./features/about/about.component').then((m) => m.AboutComponent),
		title: '~/danushka'
	},
	{
		path: 'experience',
		loadComponent: () =>
			import('./features/experience/experience.component').then(
				(m) => m.ExperienceComponent
			),
		title: '~/danushka'
	},
	{
		path: 'skills',
		loadComponent: () =>
			import('./features/skills/skills.component').then(
				(m) => m.SkillsComponent
			),
		title: '~/danushka'
	},
	{
		path: 'projects',
		loadComponent: () =>
			import('./features/projects/projects.component').then(
				(m) => m.ProjectsComponent
			),
		title: '~/danushka'
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./features/contact/contact.component').then(
				(m) => m.ContactComponent
			),
		title: '~/danushka'
	},
	{
		path: 'resume',
		loadComponent: () =>
			import('./features/resume/resume.component').then(
				(m) => m.ResumeComponent
			),
		title: '~/danushka'
	},
	{
		path: '**',
		redirectTo: ''
	}
];
