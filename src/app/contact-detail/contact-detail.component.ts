import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactsDeleteComponent } from '../contacts-delete/contacts-delete.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.contactsService.getContact(this.route.snapshot.params['id']).subscribe(data =>{
      this.contact = data;
    })
  }

  editContact(){
    this.router.navigate(['/contacts/edit',this.route.snapshot.params['id']]);
  }

  closeContact(){
    this.router.navigate(['/contacts']);
  }

  openDeleteDialog(contactId: number):void{
    const dialogRef = this.dialog.open(ContactsDeleteComponent, { data: {contactId : contactId}})
  }



}
