import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
	ifcLogo = "../../../../assets/ifc/logoRedondo_v3.png";
	token = new FormControl("", [
		Validators.required,
		Validators.minLength(6),
		Validators.maxLength(6),
	]);
	constructor() {}

	ngOnInit() {
		return;
	}

	resetear() {}
}
