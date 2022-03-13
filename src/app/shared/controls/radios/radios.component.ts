import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()  => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value>();

  value!: Value;
  isDisabled!: boolean;

  constructor() { }
  ngOnInit(): void {
  }

  private propagatechange:any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.propagatechange = fn;
  }
  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onChanged(value: Value): void {
    this.value = value;
    this.propagatechange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value): boolean {
    return this.value === value;
  }

}
