import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
export const loadSVGResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
    const dirImg = `assets/img/`;
    const dirSidebarSVG = `${dirImg}sidebar/`;
    const dirDaysSVG = `${dirImg}days/`;
    const dirAvatarsSVG = `${dirImg}avatar/`;
    ir.addSvgIcon('volume', ds.bypassSecurityTrustResourceUrl('assets/svg/remind.svg'));
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${dirAvatarsSVG}avatars.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${dirSidebarSVG}projects.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${dirSidebarSVG}month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${dirSidebarSVG}week.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${dirSidebarSVG}day.svg`));
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31];
    days.forEach(d => {
        ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${dirDaysSVG}day${d}.svg`));
    });

}