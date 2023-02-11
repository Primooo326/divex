import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	url = `${environment.backend}/auth-manageAuth`;

	constructor(private http: HttpClient) {}

	private async metodos(data: any): Promise<any> {
		console.log(data);
		return await this.http
			.post(this.url, data, {
				withCredentials: true,
				headers: new HttpHeaders({
					"Content-Type": "application/json",
				}),
			})
			.toPromise();
	}

	async signInWithToken(token: string) {
		const sendResp = {
			data: { token: token },
			crud: "authToken",
		};
		return await this.metodos(sendResp);
	}
}
