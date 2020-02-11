import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Bbm } from '../bbm/bbm.component';

@Injectable({
  providedIn: 'root'
})
export class BbmService {

  constructor(private http:HttpClient) { }

  getAllBBM(username) {
    return this.http.get<Bbm[]>(`${API_URL}/users/${username}/bbm`);
  }

  getBBM(username, id) {
    return this.http.get<Bbm>(`${API_URL}/users/${username}/bbm/${id}`);
  }

  deleteBBM(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/bbm/${id}`);
  }

  updateBBM(username, id, bbm) {
    return this.http.put(`${API_URL}/users/${username}/bbm/${id}`, bbm);
  }

  createBBM(username, bbm) {
    return this.http.post(`${API_URL}/users/${username}/bbm`, bbm);
  }
}
