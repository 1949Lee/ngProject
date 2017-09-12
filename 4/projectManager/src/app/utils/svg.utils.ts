import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
export const loadSVGResources = (ir:MdIconRegistry,ds:DomSanitizer) =>{
    ir.addSvgIcon('volume',ds.bypassSecurityTrustResourceUrl('assets/svg/remind.svg'));
}