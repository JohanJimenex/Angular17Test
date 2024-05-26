import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiservicioService {
  private http = inject(HttpClient);

  public getGithubProfile() {
    this.http.get('https://api.github.com/users/johanjimenex').subscribe({
      next: (resp: any) => {
        console.log(resp);
      },
    });
  }
}
