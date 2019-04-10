import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private productservice: ProductService) { }

  ngOnInit() {
    this.addForm = this.formbuilder.group({
      id: [],
      name: ['', Validators.required], 
      description: ['', Validators.required],
      price:['',Validators.required]
    });
  }
  goback(){
    this.router.navigate(['product-list']);
  }
  onSubmit(){
    this.submitted=true;
    if(this.addForm.invalid){
      return true;
    }
    this.productservice.createproduct(this.addForm.value).subscribe(data=>{alert
      ('record added..!')});
      this.router.navigate(['product-list']);
  }

}
