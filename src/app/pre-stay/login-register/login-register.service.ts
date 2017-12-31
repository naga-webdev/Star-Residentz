import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginRegisterService {
  constructor(private httpClient: HttpClient) { }

}
