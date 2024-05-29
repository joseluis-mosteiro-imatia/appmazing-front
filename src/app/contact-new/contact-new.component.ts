import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  name!: string;
  surname!: string;
  lastname!: string;
  telephone!: string;
  email!: string;

  constructor(
    private contactService: ContactsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  newContact():void{
    const contact = {
      name: this.name,
      surname: this.surname,
      lastname: this.lastname,
      telephone: this.telephone,
      email: this.email
    }
    this.contactService.newContacto(contact);
    this.router.navigate(['/contacts']);
  }

  cancelInsert(){
    this.router.navigate(['/contacts']);
  }

}
