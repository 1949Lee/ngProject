import { animate, state, transition, trigger, style, keyframes, group } from '@angular/animations';
export const slideToRight = trigger('routeAnimations', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0.5 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
            animate('.5s ease-in', style({ opacity: 1 }))
        ])
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        group([
            animate('.5s ease-in-out', style({ transform: 'translateX(100%)' })),
            animate('.5s ease-in', style({ opacity: 0.5 }))
        ])
    ]),
]);