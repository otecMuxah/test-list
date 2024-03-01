import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { Tariff } from '../tariff.service';

@Component({
  selector: 'app-sorter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  Sort by:
    <form [formGroup]="form">
      <select formControlName="sort">
        <option value="">--Sort By--</option>
        <option
          *ngFor="let option of options"
          [value]="option"
        >
          {{ option }}
        </option>
      </select>
    </form>
  `,
  styleUrl: './sorter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SorterComponent {
  @Input() options: (keyof Tariff)[] = [];
  form = new FormGroup({
    sort: new FormControl<keyof Tariff | null>(null),
  });
  @Output() select = this.form.valueChanges.pipe(map(val => val.sort || undefined));
}
