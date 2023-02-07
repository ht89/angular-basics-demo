import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-host-context-example',
  templateUrl: './host-context-example.component.html',
  styleUrls: ['./host-context-example.component.scss'],
})
export class HostContextExampleComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    this.toggleDarkClass();
  }

  ngOnDestroy(): void {
    this.toggleDarkClass();
  }

  private toggleDarkClass(): void {
    const body = document.querySelector('body');
    if (!body) return;

    body.classList.toggle('dark');
  }
}
