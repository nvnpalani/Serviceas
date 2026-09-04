import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  maintenanceStatuses = ['Pending', 'Processing', 'Completed'];
  maintenanceStatus = 'Completed';
  
  visitorUpdates = [
    'Gate 1: Delivery Checked',
    'Gate 1: Visitor checked out',
    'Gate 2: Cab entry approved',
    'Gate 1: Maid entry recorded'
  ];
  visitorUpdate = this.visitorUpdates[0];

  paymentFlats = ['A-121', 'B-404', 'C-102', 'A-305', 'D-201'];
  paymentAmounts = ['₹1,250', '₹4,100', '₹2,500', '₹3,200', '₹850'];
  paymentFlat = this.paymentFlats[0];
  paymentAmount = this.paymentAmounts[0];

  private intervals: any[] = [];
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.intervals.push(setInterval(() => {
        this.maintenanceStatus = this.maintenanceStatuses[Math.floor(Math.random() * this.maintenanceStatuses.length)];
      }, 3000));

      this.intervals.push(setInterval(() => {
        this.visitorUpdate = this.visitorUpdates[Math.floor(Math.random() * this.visitorUpdates.length)];
      }, 4000));

      this.intervals.push(setInterval(() => {
        this.paymentFlat = this.paymentFlats[Math.floor(Math.random() * this.paymentFlats.length)];
        this.paymentAmount = this.paymentAmounts[Math.floor(Math.random() * this.paymentAmounts.length)];
      }, 5000));
    }
  }

  getMaintenanceColor() {
    switch (this.maintenanceStatus) {
      case 'Completed': return 'var(--primary)'; // Pink
      case 'Processing': return '#0284c7'; // Blue
      case 'Pending': return '#ca8a04'; // Yellow/Orange
      default: return 'var(--primary)';
    }
  }

  ngOnDestroy() {
    this.intervals.forEach(i => clearInterval(i));
  }
}

