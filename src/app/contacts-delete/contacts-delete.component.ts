import { Component, Inject, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-delete',
  templateUrl: './contacts-delete.component.html',
  styleUrls: ['./contacts-delete.component.css']
})
export class ContactsDeleteComponent implements OnInit {

  contactId: number;


  constructor(
    private contactService: ContactsService,
    public dialogRef: MatDialogRef<ContactsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      contactId:number
    },
    private router: Router
  ) {
    this.contactId = data.contactId;
  }

  ngOnInit(): void {}

  confirm():void {
    this.contactService.deleteContact(this.contactId);
    this.dialogRef.close();
    this.router.navigateByUrl('/',{ skipLocationChange: true})
    .then(() => {
      this.router.navigate(['/contacts']);
    });
  }

}
