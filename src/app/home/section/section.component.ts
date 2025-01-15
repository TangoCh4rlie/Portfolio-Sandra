import {Component, input, InputSignal} from '@angular/core';
import {NgStyle} from '@angular/common';
import {environment} from '../../../environments/environment';
import {SectionLayout} from '../../../models/section-layout.model';

@Component({
  selector: 'app-section',
  imports: [
    NgStyle
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  public readonly sectionLayout: InputSignal<SectionLayout> = input.required<SectionLayout>();

  protected get imageUrl() {
    return environment.imagesBucket + this.sectionLayout().imgUrl;
  }
}
