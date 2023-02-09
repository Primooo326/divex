import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
	@ViewChild('content') private content: any;
	public chatObs!: Observable<any>;
	chat: any[] = [];
	owner!: string;
	// message: FormGroup;
	_chatService: any;
	firestore: any;
	onSend = false;
	subs: any;
	text = new FormControl("", [Validators.required]);
	session: any = JSON.parse(localStorage.getItem("session")!);
	constructor(
		private activateRoute: ActivatedRoute,
		private modalCtrl: ModalController,
	) {}

	ngOnInit() {
		// this.startSubscriber();
	}
	ngOnDestroy(): void {
		// this.subs.unsubscribe();
	}
	startSubscriber() {
		let chatObsDoc: any;
		// 	this.firestore,
		// 	`${this.session.asamblea.key}/Chat/asamblea`,
		// );
		// this.chatObs = collectionData(chatObsDoc);
		this.subs = this.chatObs.subscribe((resp2) => {
			const orderChat: any[] = resp2;
			console.log(resp2);
			orderChat.map(
				(message) =>
					(message["color"] =
						message.id === this.session.inmueble.codigo
							? "primary"
							: "success"),
			);
			orderChat.sort((a, b) => a.fecha - b.fecha);
			this.chat = orderChat;
			this.chat.map((chat) => {
				const fecha = chat.fecha.toString();
				const year = fecha.substring(0, 4);
				const month = fecha.substring(4, 6);
				const day = fecha.substring(6, 8);
				const hour = fecha.substring(8, 10);
				const minutes = fecha.substring(10, 12);
				const seconds = fecha.substring(12, 14);
				const newFecha = `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
				chat.fecha = newFecha;
			});
			// console.log(this.chat);
			this.scrollBottom();
		});
	}
	async sendMessage() {
		this.onSend = true;
		console.log("algo");
		if (this.text.valid) {
			const text = this.text.value;
			const sendResp = {
				// asambleaId: this.appComponent.miAsambleaLocal.key,
				message: text,
				// to: 'junta',
				// inmueble: this.appComponent.miPerfil,
			};
			console.log(sendResp);
			await this._chatService
				.setMessageChat(text!)
				.then((resp: any) => {
					console.log(resp);
					this.text.setValue("");
					this.onSend = true;
				})
				.catch((err: any) => {});
		} else {
			console.log("aja, escribe algo");
		}
		this.onSend = false;
	}
	scrollBottom() {
		setTimeout(() => {
			if (this.content.scrollToBottom) {
				this.content.scrollToBottom(4);
				this.onSend = false;
			}
		}, 500);
	}
	atras() {
		return this.modalCtrl.dismiss(null, "cancel");
	}
}

// function ViewChild(
// 	arg0: string,
// ): (target: ChatComponent, propertyKey: "content") => void {
// 	throw new Error("Function not implemented.");
// }

// function collection(firestore: any, arg1: string) {
// 	throw new Error("Function not implemented.");
// }

// function collectionData(chatObsDoc: any): Observable<any> {
// 	throw new Error("Function not implemented.");
// }
