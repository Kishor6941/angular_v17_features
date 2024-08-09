import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-c',
  standalone: true,
  imports: [],
  templateUrl: './signal-c.component.html',
  styleUrl: './signal-c.component.scss'
})
export class SignalCComponent {

  counter = signal<number>(0);
  messageList = signal<string[] | any>([]);

  inc() {
    this.counter.update((prevCount) => prevCount + 1);
    this.messageList.update((prevMessage) => [...prevMessage, 'count is'+this.counter()])
  }

  dec() {
    this.counter.update((prevCount) => prevCount - 1)
    // this.messageList.update((prevMessage) => prevMessage.pop());
  }
}
