import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '@app/interfaces/account';
import { ApiResponse } from '@app/interfaces/api-response';
import { Party } from '@app/interfaces/party';
import { PartyUser } from '@app/interfaces/party-user';
import { Song } from '@app/interfaces/song';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  /**
   * Base API endpoint
   */
  static readonly base: string = environment.api;

  constructor(private http: HttpClient) {
  }

  /**
   * Get party list
   */
  getParties(): Observable<ApiResponse<Party>> {
    return this.http.get<ApiResponse<Party>>(`${ApiService.base}parties/`).pipe();
  }

  /**
   * Get party data
   */
  getParty(id: string): Observable<Party> {
    return this.http.get<Party>(`${ApiService.base}parties/${id}/`).pipe();
  }

  /**
   * Get party user list
   */
  getPartyUsers(params: { user?: string, party?: string, }): Observable<ApiResponse<PartyUser>> {
    return this.http.get<ApiResponse<PartyUser>>(`${ApiService.base}party-users/`, { params }).pipe();
  }

  /**
   * Get song list
   */
  getSongs(party: string): Observable<ApiResponse<Song>> {
    return this.http.get<ApiResponse<Song>>(`${ApiService.base}songs/`, {
      params: { party },
    }).pipe();
  }

  /**
   * Get song data
   */
  getSong(id: number): Observable<Song> {
    return this.http.get<Song>(`${ApiService.base}songs/${id}/`).pipe();
  }

  /**
   * Update user
   *
   * @param username User username
   * @param payload Update data
   */
  updateUser(username: string, payload: Account): Observable<Account> {
    return this.http.put<Account>(`${ApiService.base}accounts/${username}`, payload).pipe();
  }

  updateParty(id: string, title: string): Observable<Party> {
    return this.http.put<Party>(`${ApiService.base}party/${id}`, { title }).pipe();
  }
}
