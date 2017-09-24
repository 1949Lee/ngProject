import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop-service.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedCls]'
})
export class DragDirective {


  @Input()draggedCls = '';
  @Input()dragTag:string;
  @Input()dragData:any;
  private _isDraggable = false;
  @Input('app-draggable')
  set Draggable(val:boolean){
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement,'draggable',`${val}`);
  }

  get Draggable(){
    return  this._isDraggable;
  }
  
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService,
  ) {

  }

  
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    if(this.el.nativeElement === event.target){
      this.rd.addClass(this.el.nativeElement,this.draggedCls)
      this.service.setDragData({tag:this.dragTag,data:this.dragData})
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    if(this.el.nativeElement === event.target){
      this.rd.removeClass(this.el.nativeElement,this.draggedCls)
    }
  }

}
