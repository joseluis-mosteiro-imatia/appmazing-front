import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductsDeleteComponent } from '../products-delete/products-delete.component';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  dataSource: any = [];

  constructor(
    private productService: ProductsService,
    private route: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.dataSource = data;
    });
  }

  OpenDetailForm(row:any){
    this.route.navigate(['/products', row.id]);
  }
  openDeleteDialog(contactId: number):void{
    const dialogRef = this.dialog.open(ProductsDeleteComponent, { data: {contactId : contactId}})
  }

  openEdit(id: any){
    this.route.navigate(['/products/edit', id]);
  }
}
