import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(24px)' }),
      animate('1500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ], { optional: true }),
  ])
]);
