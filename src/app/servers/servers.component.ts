import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', attribute 
  // selector : '.app-servers', class
  templateUrl: './servers.component.html',
  // template:`
  //   <p> INLINE TEMPLATE </p>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
  // styles: [`
  //   p {
  //     color:red;
  //   }
  // `],
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No new server created'
  serverName = 'Initial' ;
  serverCreated = false ;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true ;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true ;
    this.serverCreationStatus = 'Server was created'
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value ;
  }

}
