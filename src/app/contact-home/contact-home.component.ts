import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactsDeleteComponent } from '../contacts-delete/contacts-delete.component';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent {
  dataSource: any = [];

  constructor(
    private contactService: ContactsService,
    private route: Router,
    public dialog: MatDialog
  ) { }


  ngOnInit(){
    this.contactService.getContacts().subscribe(data => {
      this.dataSource = data;
    });
  }

  openDetailForm(row: any){
    this.route.navigate(['/contacts', row.id]);
  }

  openDeleteDialog(contactId: number):void{
    const dialogRef = this.dialog.open(ContactsDeleteComponent, { data: {contactId : contactId}})
  }
  editContactoDetail(contactId: any){
    this.route.navigate(['/contacts/edit', contactId]);
  }

}
