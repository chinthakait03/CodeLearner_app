import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {


private apiUrl ='http://localhost:7000/api/codebook';



  constructor(private http: HttpClient) { }


  getCodebookData(codebookNumber: string): Observable<any> {

    const url = `${this.apiUrl}/${codebookNumber}`;
    
    return this.http.get(url);
  }


  
  }



   

