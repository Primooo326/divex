import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
	ifcLogo = "../../../../assets/ifc/logoRedondo_v3.png";
	email = new FormControl("", [Validators.required, Validators.email]);
	constructor() {}

	ngOnInit() {}

	resetear() {}
}
