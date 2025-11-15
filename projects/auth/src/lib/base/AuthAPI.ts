import { Observable } from "rxjs";

export abstract class AuthAPI{
    abstract register (data:any) :Observable<any> 
    abstract login (data:any) :Observable<any> 
    abstract changePassword (data:any) :Observable<any> 
    abstract deleteMyaccount (data:any) :Observable<any> 
    abstract getLoggedUserInfo (data:any) :Observable<any> 
    abstract forgotPassword (data:any) :Observable<any> 
    abstract verifyResetCode (data:any) :Observable<any> 
    abstract resetPassword (data:any) :Observable<any> 
    abstract editProfile(data:any):Observable<any>
   abstract logOut(data:any):Observable<any>
}