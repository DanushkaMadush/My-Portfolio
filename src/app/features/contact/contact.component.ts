import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Mail, Linkedin, Github, MapPin, MessageCircle, LucideAngularModule } from 'lucide-angular';

import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeaderComponent, ContactFormComponent, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly dataService = inject(PortfolioDataService);
  readonly Mail = Mail;
  readonly Linkedin = Linkedin;
  readonly Github = Github;
  readonly MapPin = MapPin;
  readonly MessageCircle = MessageCircle;

  protected readonly profile = toSignal(this.dataService.getProfile(), {
    initialValue: null
  });
}
