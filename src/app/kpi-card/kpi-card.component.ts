import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.css']
})
export class KpiCardComponent implements OnInit {
  @Input() query: object;
  @Input() title: string;
  @Input() duration: number;
  @Input() progress: boolean;
  @Input() difference: string;

  constructor() { }

  public KPICards = [
    {
      title: 'סה"כ משימות פתוחות',
      query: { measures: ['Users.count'] },
      difference: 'Users',
      progress: false,
      duration: 2.5,
    },
    {
      title: 'סה"כ משימות בביצוע',
      query: { measures: ['Orders.percentOfCompletedOrders'] },
      difference: false,
      progress: true,
      duration: 2.75,
    },
    {
      title: 'סה"כ משימות שנסגרו השבוע',
      query: { measures: ['LineItems.price'] },
      difference: false,
      progress: false,
      duration: 3.25,
    },
  ];

  ngOnInit() {
  }

}

