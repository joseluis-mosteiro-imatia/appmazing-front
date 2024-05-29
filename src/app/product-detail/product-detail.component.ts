import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductsDeleteComponent } from '../products-delete/products-delete.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.params['id'])
    .subscribe(data => {
      this.product = data;
    });
  }
  editContact(){
    this.router.navigate(['/products/edit',this.route.snapshot.params['id']]);
  }

  closeContact(){
    this.router.navigate(['/products']);
  }

  openDeleteDialog(contactId: number):void{
    const dialogRef = this.dialog.open(ProductsDeleteComponent, { data: {contactId : contactId}})
  }

}
