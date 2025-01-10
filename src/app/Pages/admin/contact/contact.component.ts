import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ngOnInit(): void {
    const form = document.querySelector('#contact-form') as HTMLFormElement;
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const nameInput = target.elements.namedItem('name') as HTMLInputElement | null;
      const emailInput = target.elements.namedItem('email') as HTMLInputElement | null;
      const messageInput = target.elements.namedItem('message') as HTMLInputElement | null;

      if (nameInput) nameInput.value = '';
      if (emailInput) emailInput.value = '';
      if (messageInput) messageInput.value = '';
    });
  }

}
