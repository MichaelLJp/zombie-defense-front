import { HttpClient } from "@angular/common/http";
import  { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { DefenseResponse,HistoricalStrategy } from "../Models/defense.model";

@Injectable({
    providedIn: 'root'
})
export class DefenseService{
    private http = inject(HttpClient);
    private apiurl = 'https://localhost:7150/api/DefenseZombie';

    getOptimalStrategy(bullets:number,time:number): Observable<DefenseResponse>{
        const body ={
            bullets: bullets,
            secondsAvailable: time
        };
        console.log("BODY:", body);
        return this.http.post<DefenseResponse>(`${this.apiurl}/optimal-strategy`, body);
    }
    getHistory(): Observable<HistoricalStrategy[]>{
        return this.http.get<HistoricalStrategy[]>(`${this.apiurl}/history`);
    }
}