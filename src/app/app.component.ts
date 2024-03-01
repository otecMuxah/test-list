import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { Tariff, TariffService } from './tariff.service';
import { SorterComponent } from './sorter/sorter.component';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    ListComponent,
    ItemComponent,
    SorterComponent,
  ],
})
export class AppComponent {
  tariffsService = inject(TariffService);
  cdr = inject(ChangeDetectorRef);

  tariffs$ = this.tariffsService.getData();
  tariffsOptions$: Observable<(keyof Tariff)[]> = this.tariffs$.pipe(
    map((el) => Object.keys(el[0]) as (keyof Tariff)[])
  );

  tariffSelect(item: Tariff) {
    alert(item.Operator);
  }

  filter(event?: keyof Tariff) {
    this.tariffs$ = this.tariffsService.getData().pipe(
      map((el) => {
        if (!event) return el;
        return el.sort((prev, next) =>
          prev[event].toString().localeCompare(next[event].toString())
        );
      }),
      tap(() => this.cdr.detectChanges())
    );
  }
}
