import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // domain used
  private domain = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  /**
   * Send POST request to API server.
   * @param urlTarget URL of API route.
   * @param requestData Request data in JSON format.
   */
  async sendPostRequest(urlTarget: string, requestData): Promise<any> {
    let response;

    // Send the data to API server and store the response.
    await this.http.post(this.domain + urlTarget, requestData).toPromise().then(
      (apiResponse) => {
        response = apiResponse;
      }
    ).catch((e) => {
        console.error('Function error: on postUserLogin => ' + e);
      }
    );

    // Return the response.
    return response;
  }
}
