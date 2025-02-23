import { Component } from '@angular/core';
import { FeaturedComponent } from '../../components/featured/featured.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  imports: [
    FeaturedComponent,
    GalleryComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
