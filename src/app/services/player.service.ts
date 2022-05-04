import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  headers={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Player[]>{
    const url = this.baseUrl + "/api/players";
    return this.http.get<Player[]>(url); 
  }

  findById(nickname: any): Observable<Player>{
    const url = this.baseUrl + `/api/players/${nickname}`;
    return this.http.get<Player>(url);
  }

  create(player: Player) :Observable<Player>{
    const url = this.baseUrl + "/api/players/save";
    return this.http.post<Player>(url, JSON.stringify(player), this.headers);
  }

  increment(nickname: any, player: Player): Observable<Player>{
    const url = this.baseUrl + `/api/players/wins/${nickname}`;
    return this.http.put<Player>(url, JSON.stringify(player), this.headers);
  }

  delete(id: any): Observable<Player>{
    const url = this.baseUrl + `/api/players/${id}`;
    return this.http.delete<Player>(url);
  }

  message(msg: string): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}