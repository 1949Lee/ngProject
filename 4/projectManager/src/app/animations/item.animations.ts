import { animate,state,transition,trigger,style,keyframes } from '@angular/animations';
export const itemAnimations = trigger('item',[
    state('out',style({'border-left-width':'3px'})),
    state('hover',style({'border-left-width':'8px'})),
    transition('out => hover',animate('.1s ease-in')),
    transition('hover => out',animate('.1s ease-out'))
]);