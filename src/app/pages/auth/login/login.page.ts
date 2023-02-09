import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	viewPassword = false;
	type = "password";
	ifcLogo = "../../../../assets/ifc/logoRedondo_v3.png";
	datosLogin: FormGroup = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(6),
		]),
	});
	constructor() {}

	ngOnInit() {}

	changePass() {
		if (this.type === "password") {
			this.type = "text";
			this.viewPassword = true;
		} else {
			this.type = "password";
			this.viewPassword = false;
		}
	}
	login() {}
}
