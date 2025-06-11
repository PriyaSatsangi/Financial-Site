import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  constructor(private http: HttpClient) {}

  onSubmit() {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  this.http.post('http://localhost:8080/api/contact', this.formData, { headers })
    .subscribe({
      next: response => {
        console.log('Message sent successfully!', response);
        alert('Message sent!');
        this.formData = { name: '', email: '', phone: '', message: '' };
      },
      error: error => {
        console.error('Error sending message', error);
        alert('Message failed!');
      }
    });
}
  // onSubmit() {
  //   // Here you would typically send the form data to your backend
  //   console.log('Form submitted:', this.formData);
  //   // Reset form after submission
  //   this.formData = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: ''
  //   };
  // }
}
