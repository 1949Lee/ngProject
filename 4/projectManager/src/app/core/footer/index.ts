import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <md-toolbar color="primary">
      <span class="fill-remaining-space"></span>
      <span>&copy; 2017 版权所有: 佳轩Lee的作品</span>
      <span class="fill-remaining-space"></span>
    </md-toolbar>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
