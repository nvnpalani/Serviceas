import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  projects = [
    {
      id: 'Greenfield',
      name: 'Greenfield Residency',
      location: 'Coimbatore',
      homes: 248,
      occupancy: 94
    },
    {
      id: 'Skyline',
      name: 'Skyline Apartments',
      location: 'Chennai',
      homes: 150,
      occupancy: 62
    },
    {
      id: 'Orchard',
      name: 'Orchard Villas',
      location: 'Bangalore',
      homes: 85,
      occupancy: 88
    }
  ];

  activeProject = this.projects[0];

  selectProject(project: any) {
    this.activeProject = project;
  }
}
