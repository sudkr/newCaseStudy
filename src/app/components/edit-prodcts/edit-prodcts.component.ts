import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-prodcts',
  templateUrl: './edit-prodcts.component.html',
  styleUrls: ['./edit-prodcts.component.css']
})
export class EditProdctsComponent implements OnInit {

  editForm: FormGroup;
  submitted: boolean = false;
  constructor(private router: Router,
    private productservice: ProductService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem("username") != null) 
    {
      let productId = localStorage.getItem("editProductId");
      if (!productId) 
      {
        alert('Invalid Action');
        this.router.navigate(['product-list']);
        return;
      }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required] ,
      description: ['', Validators.required],
      price:['',Validators.required]
    });
    this.productservice.getProductsById(+productId).subscribe(data=>{
      this.editForm.setValue(data)
    });
  }
  else{
    this.router.navigate(['/login']);
  }
  }
  onSubmit(){
    this.submitted=true;
    if(this.editForm.invalid){
      return true;
    }
    this.productservice.editproduct(this.editForm.value).subscribe(data=>{alert
      ('record added..!')});
      this.router.navigate(['product-list']);
  }
  back(){
    this.router.navigate(['product-list']);
  }

  }
