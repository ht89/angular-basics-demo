import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Config, ConfigService } from '../config/config.service';

@Component({
  selector: 'app-config-with-async-pipe',
  templateUrl: './config-with-async-pipe.component.html',
})
export class ConfigWithAsyncPipeComponent implements OnInit {
  config$: Observable<Config> | undefined;

  constructor(private readonly configService: ConfigService) {}

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.config$ = this.configService.getConfig();
  }
}
