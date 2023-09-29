import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
 // products$: Observable<IProduct[]>;
 term = '';

 constructor(
   public productService: ProductService,
   public modalService: ModalService
 ) {}
 ngOnInit(): void {
   // this.products$ = this.productService.getAll();
   this.productService.getAll().subscribe(()=>{})
 }
 title = 'realproject';
}
