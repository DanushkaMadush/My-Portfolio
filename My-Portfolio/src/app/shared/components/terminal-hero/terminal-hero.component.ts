import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TerminalLine {
  id: string;
  text: string;
  delay: number;
  chars: number;
}

@Component({
  selector: 'app-terminal-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './terminal-hero.component.html',
  styleUrls: ['./terminal-hero.component.scss']
})
export class TerminalHeroComponent implements OnInit {
  @Input() name = 'Danushka Dissanayaka';
  @Input() role = 'Full Stack Engineer';
  @Input() stack: string[] = ['Angular', 'TypeScript', '.NET'];
  @Input() status = 'ONLINE';

  protected readonly isTyping = signal(false);
  private readonly typingDurationMs = 3200;

  ngOnInit(): void {
    const typed = localStorage.getItem('heroTyped') === '1';
    if (!typed) {
      this.isTyping.set(true);
      setTimeout(() => {
        this.isTyping.set(false);
        localStorage.setItem('heroTyped', '1');
      }, this.typingDurationMs);
    }
  }

  get lines(): TerminalLine[] {
    const stackLine = this.stack.join(' / ');
    const lines = [
      { id: 'cmd', text: '$ whoami', delay: 0, chars: '$ whoami'.length },
      { id: 'name', text: this.name, delay: 0.5, chars: this.name.length },
      { id: 'role', text: this.role, delay: 1.1, chars: this.role.length },
      { id: 'stack', text: stackLine, delay: 1.7, chars: stackLine.length },
      {
        id: 'status',
        text: `System Status: ${this.status}`,
        delay: 2.4,
        chars: `System Status: ${this.status}`.length
      }
    ];

    return lines;
  }
}
