import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="grid gap-6 md:grid-cols-2">
      <li *ngFor="let item of items">
        <ng-container
          *ngIf="itemTemplateRef"
          [ngTemplateOutlet]="itemTemplateRef"
          [ngTemplateOutletContext]="{
            $implicit: item
          }"
        >
        </ng-container>
      </li>
    </ul>
  `,
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> {
  @Input() items: T[] = [];
  @ContentChild('item', { read: TemplateRef }) itemTemplateRef:
    | TemplateRef<{ $implicit: T }>
    | undefined;
}
