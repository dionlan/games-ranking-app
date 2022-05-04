import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  headers={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Game[]>{
    const url = this.baseUrl + "/api/gamers";
    return this.http.get<Game[]>(url); 
  }

  findById(id: any): Observable<Game>{
    const url = this.baseUrl + `/api/gamers/${id}`;
    return this.http.get<Game>(url);
  }

  create(game: Game) :Observable<Game>{
    const url = this.baseUrl + "/api/gamers";
    return this.http.post<Game>(url, JSON.stringify(game), this.headers);
  }

  update(id: any, game: Game): Observable<Game>{
    const url = this.baseUrl + `/api/players/${id}`;
    return this.http.put<Game>(url, JSON.stringify(game), this.headers);
  }

  delete(id: any): Observable<Game>{
    const url = this.baseUrl + `/api/gamers/${id}`;
    return this.http.delete<Game>(url);
  }

  message(msg: string): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}