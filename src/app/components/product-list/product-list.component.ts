import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition} from '@angular/animations';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private productservice: ProductService, 
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("username")!= null){
      this.productservice.getProducts().subscribe(data=>{
        this.products =data ;
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  


  deleteproduct(product: Product):void {
    let result = confirm("do you really want to delete the product?")
    if(result){
      this.productservice.deleteproduct(product.id).subscribe(data=>{
        this.products =this.products.filter(p=> p!== product);
      });
    }    
  }
  addproduct():void {
      this.router.navigate(['add']);
  }

  editproduct(product: Product):void{
    localStorage.removeItem("editProductId");
    localStorage.setItem("editProductId", product.id.toString());
    this.router.navigate(['edit']);
  } 
  
  
}
  
