import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-message',
  imports: [],
  templateUrl: './dialog-message.component.html',
  styleUrl: './dialog-message.component.scss'
})
export class DialogMessageComponent {
  @Output() close = new EventEmitter<void>();

  onClose():void {
    this.close.emit();
  }
}
