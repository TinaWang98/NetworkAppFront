import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Network } from './network';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getNetworks(): Observable<Network[]> {
    return this.http.get<Network[]>(`${this.apiServerUrl}/network/all`);
  }

  public addNetworks(network: Network): Observable<Network> {
    return this.http.post<Network>(`${this.apiServerUrl}/network/add`,network);
  }

  public updateNetworks(network: Network): Observable<Network> {
    return this.http.put<Network>(`${this.apiServerUrl}/network/update`,network);
  }

  public deleteNetworks(networkId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/network/delete/${networkId}`);
  }



}
