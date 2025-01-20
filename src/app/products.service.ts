import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts() {
    return [
      {
        id: 'P-101',
        prod_name: 'Logitech Mouse',
        description: '6 Button Mechanical Mouse',
        price: 899.00,
      },
      {
        id: 'P-102',
        prod_name: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: 1099.00,
      },
      {
        id: 'P-103',
        prod_name: 'Mechanical Keyboard',
        description: 'Hot-swappable RGB Backlit',
        price: 2395.00,
      },
      {
        id: 'P-104',
        prod_name: 'Oculus Meta',
        description: 'All-in-one Gaming Headset',
        price: 22450.00,
      },
    ];
  }
}
