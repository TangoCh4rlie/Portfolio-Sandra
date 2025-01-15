import {Component, inject, ResourceStatus} from '@angular/core';
import {SectionComponent} from './section/section.component';
import {BucketService} from '../../services/bucket.service';

@Component({
  selector: 'app-home',
  imports: [
    SectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly bucketService: BucketService = inject(BucketService);
  protected readonly resourceStatus = ResourceStatus;

  protected pageLayoutRessource = this.bucketService.payeLayoutRessource;
}
