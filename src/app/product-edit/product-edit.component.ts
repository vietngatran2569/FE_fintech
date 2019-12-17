import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  productForm: FormGroup;

  @Output() editProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit() {
    this.product = this.productService.getData();
    this.productForm = new FormGroup({
      url: new FormControl(this.product.url, [Validators.required]),
      tag: new FormControl(this.product.tag, [Validators.required]),
      descriptions: new FormControl(this.product.descriptions, [Validators.required])
    });
  }

  onSubmit() {
    this.productService.editProduct(this.productForm.value).subscribe(result => {
      alert('sua thanh cong!');
    });
  }

}
