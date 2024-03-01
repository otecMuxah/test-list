import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  tariffs$ = new Observable<Tariff[]>();

  getData(): Observable<Tariff[]> {
    this.tariffs$ = of(MOCK);
    return this.tariffs$;
  }

  filter(term: keyof Tariff) {
    return this.tariffs$.pipe(
      map((el) => {
        if (!term) return el;
        switch (term) {
          case 'Features':
            return el.sort(
              (prev, next) => prev.Features.length - next.Features.length
            );
          case 'Speed_Mbps':
            return el.sort((prev, next) => {
              return Number(prev.Speed_Mbps) - Number(next.Speed_Mbps)
            });
          default:
            return el.sort((prev, next) =>
              prev[term].toString().localeCompare(next[term].toString())
            );
        }
      })
    );
  }
}

export interface Tariff {
  Operator: string;
  Price_per_month: string;
  Speed_Mbps: string;
  Features: string[];
}

const MOCK: Tariff[] = [
  {
    Operator: 'XYZ Telecom',
    Price_per_month: '$20',
    Speed_Mbps: '50',
    Features: [
      'Unlimited talk, text, and data.',
      'International roaming included.',
      'Free access to streaming services.',
      'Discounts for family plans.',
    ],
  },
  {
    Operator: 'ABC Mobile',
    Price_per_month: '$25',
    Speed_Mbps: '100',
    Features: [
      'Unlimited talk and text.',
      '20GB high-speed data.',
      'Free access to social media platforms.',
      'International calling add-ons available.',
    ],
  },
  {
    Operator: 'QRS Wireless',
    Price_per_month: '$15',
    Speed_Mbps: '30',
    Features: [
      'Basic plan with limited talk and text.',
      '5GB high-speed data.',
      'Additional data packs available.',
      'Pay-as-you-go international rates.',
    ],
  },
  {
    Operator: 'DEF Connect',
    Price_per_month: '$30',
    Speed_Mbps: '150',
    Features: [
      'Unlimited talk and text.',
      '30GB high-speed data.',
      'Premium customer service.',
      'Priority access to network towers.',
      'International data roaming options.',
    ],
  },
  {
    Operator: 'UVW Communications',
    Price_per_month: '$18',
    Speed_Mbps: '40',
    Features: [
      'Unlimited talk and text.',
      '10GB high-speed data.',
      'Loyalty rewards program.',
      'Free access to music streaming services.',
      'International texting included.',
    ],
  },
];
