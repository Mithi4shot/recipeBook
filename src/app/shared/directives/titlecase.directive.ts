import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[numbers]'
})
export class TitlecaseDirective implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if ((event.which < 48 || event.which > 57) && event.which !== 8) {
      event.preventDefault();
    }

    return;
  }

}
