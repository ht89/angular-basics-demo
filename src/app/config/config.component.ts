import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent implements OnInit, OnDestroy {
  config: Config | undefined;

  getConfigSub: Subscription | undefined;

  constructor(private readonly configService: ConfigService) {}

  ngOnInit(): void {
    this.showConfig();
  }

  ngOnDestroy(): void {
    this.getConfigSub?.unsubscribe();
  }

  showConfig() {
    this.getConfigSub = this.configService.getConfig().subscribe(
      (data: Config) =>
        (this.config = {
          heroesUrl: data.heroesUrl,
          textfile: data.textfile,
          date: data.date,
        })
    );
  }
}
