import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenUrl = `${environment.API_URL}/token/`; // Change to your API endpoint

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(username: string, password: string): Observable<void> {
    const body = {username, password};
    return this.http.post<any>(this.tokenUrl, body).pipe(
      tap(data => {
        localStorage.setItem('token', data.access);
        this.router.navigate(['/items']).then();
      })
    );
  }
}
