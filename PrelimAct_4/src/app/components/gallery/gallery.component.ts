import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gallery',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  samsung29_ultra = "Samsung 29 Ultra"
  samsung29_ultra_desc = "Samsung Galaxy S29 Ultra 5G 2024 is another Smartphone from the “S” series."

  samsung30_ultra = "Samsung Galaxy S30 Ultra"
  samsung30_ultra_desc = "Samsung Galaxy S30 Ultra 5G features a next-gen Exynos chipset and a stunning AMOLED display."

  samsung_z_fold6 = ""
  samsung_z_fold6_desc = "Samsung Galaxy Z Fold 6 offers a foldable design, enhanced multitasking, and improved durability."

  samsung_a75_5g = "Samsung Galaxy A75 5G"
  samsung_a75_5g_desc = "Samsung Galaxy A75 5G delivers great performance with a sleek design at an affordable price."
}
