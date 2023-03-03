import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string | undefined;
  @Output('close') closeEvent = new EventEmitter<void>();

  onClose() {
    this.closeEvent.emit();
  }
}
