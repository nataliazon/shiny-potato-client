import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../model/player';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayerService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = environment.backendUrl + "/players"
  }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.usersUrl);
  }

  public save(user: Player) {
    return this.http.post<Player>(this.usersUrl, user);
  }
}