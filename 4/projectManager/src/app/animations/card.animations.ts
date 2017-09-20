import { animate,state,transition,trigger,style,keyframes } from '@angular/animations';
export const cardAnimations = trigger('card',[
    state('out',style({transform:'scale(1)','box-shadow':'none'})),
    state('hover',style({transform:'scale(1.1)','box-shadow':'0.7rem 2rem 1.25rem 0.2rem #AAAACA'})),
    transition('out => hover',animate('.1s ease-in')),
    transition('hover => out',animate('.1s ease-out'))
]);