import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { RolesComponent } from './components/roles/roles.component';
import { StatsComponent } from './components/stats/stats.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    RolesComponent,
    StatsComponent,
    HowItWorksComponent,
    ContactComponent,
    FooterComponent,
    PricingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FourDotz';
}
