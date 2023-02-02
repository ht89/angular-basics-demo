import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private readonly http: HttpClient) {}

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
