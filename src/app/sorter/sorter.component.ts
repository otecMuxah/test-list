import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-sorter',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex">
      <span>Sort by:</span>
      <form [formGroup]="form">
        <select formControlName="sort">
          @for (option of options; track option) {
          <option [value]="option">
            {{ option }}
          </option>
          }
        </select>
      </form>
    </div>
  `,
  styleUrl: './sorter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SorterComponent<T> {
  @Input() options: (keyof T)[] = [];

  form = new FormGroup({
    sort: new FormControl<keyof T | null>(null),
  });

  @Output() select = this.form.valueChanges.pipe(
    map((val) => val.sort || undefined)
  );
}
