import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormulaService {
  constructor(private http: HttpClient) {}

  /* Get all Year champions from 2005 till 2022 */

  getAllYearChampions() {
    return this.http
      .get(
        `${environment.baseApiUrl}/driverstandings/1.json?limit=65&offset=30`
      )
      .pipe(catchError((err) => this.catchAuthError(err)));
  }

  /* Get all champions in a particular season */
  getYearRaceWinners(year: number) {
    return this.http.get(`${environment.baseApiUrl}/${year}/results/1.json`);
  }

  catchAuthError(error: any): any {
    if (error && error.error && error.error.message) {
      alert(error.error.message);
    } else if (error && error.message) {
      alert(error.message);
    } else {
      alert(JSON.stringify(error));
    }
  }
}
