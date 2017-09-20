import { animate, state, transition, trigger, style, keyframes, group, query, stagger } from '@angular/animations';
export const listAnimations = trigger('listAnimations', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }),{optional:true}),
        query(':enter', stagger(100, [
            animate('1s ease-in',style({ opacity: 1 }))
        ]),{optional:true}),
        query(':leave', style({ opacity: 1 }),{optional:true}),
        query(':leave', stagger(100, [
            animate('1s ease-out',style({ opacity: 0 }))
        ]),{optional:true}),
    ])
]);