import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Network } from './network';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public networks: Network[] = [];

  constructor(private networkService: NetworkService){}

  ngOnInit(){
    this.getNetworks();
  }

  public getNetworks(): void{
    this.networkService.getNetworks().subscribe(
      (response: Network[]) => {
        this.networks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal(network:Network, mode:string):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addNetworkModal');
    }
    if(mode === 'update'){
      button.setAttribute('data-target','#updateNetworkModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target','#deleteNetworkModal');
    }
    container?.appendChild(button);
    button.click();

  }
}
