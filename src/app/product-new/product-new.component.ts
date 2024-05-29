import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  name!: string;
  stock!: number;
  price!: number;
  active!: number;
  date_added!: string;

  constructor(
    private service: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newContact():void{
    const contact = {
      name: this.name,
      stock: this.stock,
      price: this.price,
      active: this.active,
      date_added: this.date_added
    }
    this.service.new(contact);
    this.router.navigate(['/products']);
  }

  cancelInsert(){
    this.router.navigate(['/products']);
  }
}
