import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  @Input() title = '选择';
  @Input() rowHeight = '1:1';
  @Input() cols = 6;
  @Input() items: string[] = [];
  @Input() userSVGIcon = false;
  @Input() itemWidth = '5rem';

  private propgateChange = (_: any) => { };

  writeValue(obj: any): void {
    this.selected = obj;
  }
  registerOnChange(fn: any): void {
    this.propgateChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }


  selected: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(index) {
    this.selected = this.items[index];
    this.propgateChange(this.selected);
  }

  validate(fc: FormControl): { [key: string]: any } {
    return this.selected ? null : {
      imageListValid: {
        valid: false
      }
    };

  }

}
