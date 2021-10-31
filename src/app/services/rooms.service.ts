import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Player } from '../model/player';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RoomsService {

  private reserveRoomURL: string;
  private findAvailableRoomURL: string;
  private findAllAvailableRoomsURL: string;
  private findAllTakenRoomsURL: string;

  constructor(private http: HttpClient) {
    this.reserveRoomURL = environment.backendUrl + "/reserveRoom";
    this.findAvailableRoomURL = environment.backendUrl + "/findAvailableRoom";
    this.findAllAvailableRoomsURL = environment.backendUrl + "/allAvailableRooms";
    this.findAllTakenRoomsURL = environment.backendUrl + "/allTakenRooms";
  }

  public reserveRoom(roomName: string){
    return this.http.post<string>(this.reserveRoomURL, roomName);
  }

//   public findAvailableRoom(): Observable<string> {
//     return this.http.get<string>(this.findAvailableRoomURL);
//   }

  public findAllAvailableRooms(): Observable<string[]> {
    return this.http.get<string[]>(this.findAllAvailableRoomsURL);
  }

  public findAllTakenRooms(): Observable<string[]> {
    return this.http.get<string[]>(this.findAllTakenRoomsURL);
  }

}