import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {


  contactId: number;


  constructor(
    private service: ProductsService,
    public dialogRef: MatDialogRef<ProductsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      contactId:number
    },
    private router: Router
  ) {
    this.contactId = data.contactId;
  }

  ngOnInit(): void {}

  confirm():void {
    this.service.delete(this.contactId);
    this.dialogRef.close();
    this.router.navigateByUrl('/',{ skipLocationChange: true})
    .then(() => {
      this.router.navigate(['/products']);
    });
  }
}
