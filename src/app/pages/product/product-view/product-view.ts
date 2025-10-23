import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products as ProductService } from '../../../services/product/products';
@Component({
  selector: 'app-product-view',
  imports: [CommonModule],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css',
})
export class ProductView {
  product: any = null;
  images: string[] = [];
  variations: any[] = [];
  complements: any[] = [];
  imgSelectedIndex: number = 0;
  variationSelectedIndex: any = null;
  selectedComplements: number[] = [];
  quantity: number = 0;
  
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe((data) => {
      this.product = data?.data?.[0]?.product;
      this.variations = data?.data?.[0]?.variations;
      this.complements = data?.data?.[0]?.complements;
      this.images = Array(4).fill(this.product.pd_image);
    })
  }

  selectImage(newIndex: number) {
    this.imgSelectedIndex = newIndex;
  }

  selectVariation(newIndex: number, variationName: string) {
    this.variationSelectedIndex[variationName] = newIndex;
  }

  selectComplement(complementIndex: number) {
    const isActive = this.selectedComplements.includes(complementIndex);
    if(isActive) {
      this.selectedComplements = this.selectedComplements.filter(index => index !== complementIndex);
    }else {
      this.selectedComplements.push(complementIndex);
    }
  }

  addQuantity() {
    this.quantity += 1;
  }

  removeQuantity() {
    if(this.quantity > 0) {
      this.quantity -= 1;
    }
  }
}
