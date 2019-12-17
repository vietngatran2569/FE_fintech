import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    url: new FormControl('', [Validators.required]),
    tag: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  @Output() addProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const product = this.productForm.value;
    this.addProduct.emit(product);
    this.productService.addProduct(product).subscribe(result => {
      alert('da them thanh cong!');
    });
  }
}
