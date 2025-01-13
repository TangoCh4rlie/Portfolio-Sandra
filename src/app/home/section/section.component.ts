import {Component, input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-section',
  imports: [
    NgStyle
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  public imgSrc = input.required<string>();
  public title = input.required<string>();

  protected get imageUrl() {
    console.log(`${environment.imagesBucket}${this.imgSrc()}`);
    return environment.imagesBucket + this.imgSrc();
  }
}
