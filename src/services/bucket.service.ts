import {  Injectable, resource} from '@angular/core';
import {environment} from '../environments/environment';
import {PageLayout} from '../models/page-layout.model';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private readonly bucket = environment.imagesBucket;

  public payeLayoutRessource = resource({
    loader: async (): Promise<PageLayout> => {
      const response: Response = await fetch(`${this.bucket}layout.json`);
      return response.json();
    }
  })
}
