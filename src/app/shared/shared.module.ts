import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { TitlecaseDirective } from './directives/titlecase.directive';
import { ShortenPipe } from './pipe/shorten.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    TitlecaseDirective,
    ShortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    TitlecaseDirective,
    ShortenPipe,
    CommonModule
  ]

})
export class SharedModule { }
