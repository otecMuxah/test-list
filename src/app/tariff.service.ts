import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  getData(): Observable<Tariff[]> {
    return of(MOCK);
  }
}

export interface Tariff {
  Operator: string;
  Price_per_month: string;
  Speed_Mbps: string;
  Features: string[]
}

const MOCK: Tariff[] = [
  {
    Operator: 'XYZ Telecom',
    Price_per_month: '$20',
    Speed_Mbps: 'Up to 50',
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
    Speed_Mbps: 'Up to 100',
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
    Speed_Mbps: 'Up to 30',
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
    Speed_Mbps: 'Up to 150',
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
    Speed_Mbps: 'Up to 40',
    Features: [
      'Unlimited talk and text.',
      '10GB high-speed data.',
      'Loyalty rewards program.',
      'Free access to music streaming services.',
      'International texting included.',
    ],
  },
];
