import { Component, ViewChild } from "@angular/core";
import { IonModal } from "@ionic/angular";
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	@ViewChild(IonModal) modal!: IonModal;

	tokenForm = new FormControl("", [
		Validators.required,
		Validators.minLength(6),
		Validators.maxLength(6),
	]);

	user = {
		img: "https://ionicframework.com/docs/img/demos/avatar.svg",
		nombre: "juan morales",
		email: "juan@example.com",
	};

	asambleas = new Array<any>(4);

	constructor(private _authSrvc: AuthService, private router: Router) {}

	async token() {
		if (this.tokenForm.valid) {
			await this._authSrvc
				.signInWithToken(this.tokenForm.value!)
				.then((resp) => {
					console.log(resp);
					if (resp.result) {
						localStorage.setItem(
							"asamblea",
							JSON.stringify(resp.data.asambleaData),
						);
						localStorage.setItem(
							"inmueble",
							JSON.stringify(resp.data.inmuebleData),
						);
						this.router.navigateByUrl("/asamblea");
					}
				});
		}

		this.modal.dismiss();
	}
}
