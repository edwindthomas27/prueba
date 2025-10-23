import { Injectable } from '@angular/core';
import { WebApi } from '../webApi/web-api';
@Injectable({
  providedIn: 'root'
})
export class Products {
    constructor(private webApi: WebApi) {}

    getProduct() {
        return this.webApi.get<any>('menu-mc/products/restaurant/10446');
    }
}
