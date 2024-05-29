import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    const url= 'http://localhost:30030/products/getAll';
    const headers= new HttpHeaders();
    // .set('Authorization', 'Basic '+ btoa('demo:demo'))
    // .set('X-User', 'demo')
    // .set('X-Password', 'demo');
    return this.http.get<any>(url, {headers});
  }

  getProduct(c_id: number): Observable<any>{
    const url= 'http://localhost:30030/products/get';
    const headers= new HttpHeaders()
      .set('Content-type', 'application/json');
    const body = JSON.stringify({id: c_id });
    return this.http.post(url, body, {headers});
  }

  updateProd(contact: any): Observable<any>{
    const url= 'http://localhost:30030/products/update';
    const headers = new HttpHeaders();
    const body = contact;
    return this.http.put(url, body, {headers});
  }

  new(contact: any): void{
    const url= 'http://localhost:30030/products/add';
    const headers= new HttpHeaders();
    const body = contact;
    this.http.post(url, body, {headers}).subscribe();
  }


  delete(id:number):void{
    const url= 'http://localhost:30030/products/delete';
    const body = {id: id};
    const options = {
      body: body,
      header: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
  }

}
