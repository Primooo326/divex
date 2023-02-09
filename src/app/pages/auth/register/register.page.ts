import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	viewPassword = false;
	type = "password";
	datosRegistro: FormGroup = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(6),
		]),
		confirmPassword: new FormControl("", [
			Validators.required,
			Validators.minLength(6),
		]),
	});

	ifcLogo = "../../../../assets/ifc/logoRedondo_v3.png";

	constructor() {}

	ngOnInit() {}
	registrar() {}

	changePass() {
		if (this.type === "password") {
			this.type = "text";
			this.viewPassword = true;
		} else {
			this.type = "password";
			this.viewPassword = false;
		}
	}
}
