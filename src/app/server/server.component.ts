import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        p{
            padding : 3px ;
            border-radius : 5% ;
            width : fit-content ;
        }
        .online{
            border : solid green 3px ;
        }
        .offline {
            border : solid red 3px ;
        }
    `],
})

export class ServerComponent {
    serverId: number ;
    serverStatus: string = '' ;

    constructor(){
        this.serverId = Math.round(Math.random() * 1000 );
        this.serverStatus = Math.random() < 0.5 ? 'online' : 'offline' ;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red' ;
    }
}