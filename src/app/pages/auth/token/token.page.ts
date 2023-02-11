import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { ToolsService } from "../../../services/tools.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
	ifcLogo = "../../../../assets/ifc/logoRedondo_v3.png";
	token = new FormControl("56q9bg", [
		Validators.required,
		Validators.minLength(6),
		Validators.maxLength(6),
	]);

	textContext = "";

	constructor(
		private _authSrvc: AuthService,
		private _toolsSrvc: ToolsService,
		private router: Router,
	) {}

	ngOnInit() {
		return;
	}

	async signUp() {
		if (this.token.valid) {
			await this._authSrvc.signInWithToken(this.token.value!).then((resp) => {
				console.log(resp);
				if (resp.result) {
					this._toolsSrvc.startSubscriber(
						resp.data.asambleaData,
						resp.data.inmuebleData,
					);
					this.router.navigateByUrl("/asamblea");
				}
			});
		} else {
		}
	}
}
