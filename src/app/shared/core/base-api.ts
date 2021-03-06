import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BaseApi {
  private baseUrl = 'http://house-expense/';

  constructor (public http: HttpClient) {}

  private getUrl (url: string = ''): string {
    return this.baseUrl + url;
  }

  public get (url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  public post (url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data, httpOptions);
  }

  public put (url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data, httpOptions);
  }
}
