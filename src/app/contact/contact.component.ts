import { Component, ElementRef, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  mailSent = false;

  async sendMail() {

    let name = this.name.nativeElement;
    let email = this.email.nativeElement;
    let message = this.message.nativeElement;
    let button = this.button.nativeElement;

    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    button.disabled = true;

    let data = new FormData();
    data.append('name', name.value);
    data.append('email', email.value);
    data.append('message', message.value);

    await fetch('https://hong-hanh-chu.developerakademie.com/send_mail/send_mail.php',
      {
        method: 'POST',
        body: data
      }
    );

    this.mailSent = true;

    setTimeout(() => {
      this.mailSent = false;

      name.value = '';
      email.value = '';
      message.value = '';

      name.disabled = false;
      email.disabled = false;
      message.disabled = false;
      button.disabled = false;
    }, 3000);

  }

}
