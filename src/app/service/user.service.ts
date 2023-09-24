import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../envs/environments";
import { Observable } from "rxjs";
import { UserDataInterface, UserFull, UserResponseInterface, UserSimple } from "../model/user.interface";

@Injectable({ providedIn: 'root' })
export class UserService {

    urlBase: string = environment.apiURL;
    headers: HttpHeaders = new HttpHeaders({ 'app-id': `${environment.token}` })

    constructor(private http: HttpClient) {

    }

    getUsers(limit?: number, page?: number): Observable<UserResponseInterface> {
        return this.http
            .get<UserResponseInterface>
            (`${this.urlBase}/user?limit=${limit}&page=${page}`, {
                headers: this.headers
            });
    }

    getUsersBy(id: string): Observable<UserFull> {
        return this.http
            .get<UserFull>
            (`${this.urlBase}/user/${id}`,
                {
                    headers: this.headers
                });
    }

    createNewUser(user: UserSimple): Observable<UserSimple> {
        return this.http
            .post<UserSimple>
            (`${this.urlBase}/user/create`, user,
                {
                    headers: this.headers
                });
    }

    removeUserBy(id: string) {
        return this.http
            .delete
            (`${this.urlBase}/user/${id}`,
                {
                    headers: this.headers
                });
    }

    updateUser(user: UserDataInterface) {
        return this.http
            .put(`${this.urlBase}/user/${user.id}`, user,
                {
                    headers: this.headers
                })
    }
}