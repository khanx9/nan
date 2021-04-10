import { Component, Input } from '@angular/core';

@Component({
  selector: 'archer-errors-message',
  styleUrls: ['./errors-message.component.scss',],
  template: `
    <ng-container>
        <div class="d-flex" *ngFor="let err of errors" style="color: red; font-style: italic; margin-top: 5px">
            <span>{{ err | translate}}</span>
        </div>
    </ng-container>
  `
})
export class ErrorMessageComponent {
  @Input() errors: any[];
}
