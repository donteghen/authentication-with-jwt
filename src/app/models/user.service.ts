import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "./user";
const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class UserService{
    baseUrl :string;
    constructor(private httpService:HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    
    getUsers():Observable<User[]>{
        return this.httpService.get<User[]>(this.baseUrl + "users")
        .pipe(catchError((error:Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }

    saveUser(user:User):Observable<User>{
        return this.httpService.post<User>(this.baseUrl + "users", user)
        .pipe(catchError((error:Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
    updateUser(user:User): Observable<User> {
        return this.httpService.put<User>(`${this.baseUrl}users/${user.id}`, user)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }

    deleteUser(id: string): Observable<User> {
        return this.httpService.delete<User>(`${this.baseUrl}users/${id}`)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
}