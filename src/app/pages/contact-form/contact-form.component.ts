import { Component, Output, EventEmitter} from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  userName= signal('');  // Signal for the name field
  userEmail = signal('');  // Signal for the email field
  userMessage = signal('');

 

  @Output() formSubmitted = new EventEmitter<string>(); // Emit user name to parent

  // Handler for form submission
  submitForm(): void {
    const name = this.userName();  // Get the value from the signal
    const email = this.userEmail();
    const message = this.userMessage();   // Get the value from the signal

    
    
    
    // Emit the name to the parent component via the formSubmitted event
    this.formSubmitted.emit(name);
    
    this.formSubmitted.emit(name);
 
    // Reset the form signals (optional)
    this.userName.set('');  // Update signal with new value
    this.userEmail.set('');  // Update signal with new value
    this.userMessage.set('');
  }

  
  // Handler to update the signal manually
  updateUserName(event: Event): void {
    // Pass the value to the signal setter
    this.userName.set((<HTMLInputElement>event.target).value);
  }

  updateUserEmail(event: Event): void {
    // Pass the value to the signal setter
    this.userEmail.set((<HTMLInputElement>event.target).value);
  }
  updateUserMessage(event: Event): void {
    this.userMessage.set((event.target as HTMLTextAreaElement).value);
  }

}
