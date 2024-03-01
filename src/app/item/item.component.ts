import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Tariff } from '../tariff.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() tariff: Tariff = {} as Tariff;
  @Output() select = new EventEmitter();
}
