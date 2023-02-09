import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
	hiddenNavTab = true;
	@Output() modalEvent = new EventEmitter<string>();
	constructor() {}

	ngOnInit() {
		return;
	}

	sendModal(modal: string) {
		this.modalEvent.emit(modal);
	}
}
