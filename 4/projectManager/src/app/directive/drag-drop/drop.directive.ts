import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop-service.service';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterCls]'
})
export class DropDirective {


  @Input() dragEnterCls = '';
  @Input() dropTags:string[] = [];
  @Output() dropped = new EventEmitter<DragData>();
  private data$; 
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService,
  ) {
    this.data$ = service.getDragData().take(1);
  }

  
  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.el.nativeElement === event.target){
      this.data$.subscribe(dragData =>{      
        if(this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.addClass(this.el.nativeElement,this.dragEnterCls)
        }
      })
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.el.nativeElement === event.target){
      this.data$.subscribe(dragData =>{
        if(this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.setProperty(event,'dataTransfer.effectAllowed','all');
          this.rd.setProperty(event,'dataTransfer.dropEffect','move');
        }
        else{
          this.rd.setProperty(event,'dataTransfer.effectAllowed','none');
          this.rd.setProperty(event,'dataTransfer.dropEffect','none');
        }
      })
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.el.nativeElement === event.target){
      this.data$.subscribe(dragData =>{
        if(this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.removeClass(this.el.nativeElement,this.dragEnterCls)
        }
      })
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.el.nativeElement === event.target){
      this.data$.subscribe(dragData =>{
        if(this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.removeClass(this.el.nativeElement,this.dragEnterCls);
          this.service.clearDragData();
          this.dropped.emit(dragData);
        }
      })
    }
  }
}
