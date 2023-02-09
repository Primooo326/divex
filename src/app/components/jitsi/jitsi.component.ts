import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
declare let JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-jitsi',
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.scss'],
})
export class JitsiComponent implements OnInit {
	cameraActive = false;
	jitsiApi: any = null;
	classAbajo = true;
	urlSafe;
	options: any;
	constructor(private sanitizer: DomSanitizer) {
		this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
			this.getUrlSafe("https://www.youtube.com/embed/4ZUi5EP6rAI"),
		);
	}

	ngOnInit() {
		//<iframe width="1344" height="532" src="https://www.youtube.com/embed/4ZUi5EP6rAI" title="Deja de pensar demasiado 🔮 - Lofi hip hop mix - Cálmate y relájate - Lofi For Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		// this.initMeet(); https://www.youtube.com/watch?v=XYT1TxINbuM
	}
	ngAfterViewInit(): void {
		// this.initMeet();
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
	}
	getUrlSafe(embed: string): string {
		return `https://www.youtube.com/embed/${embed}?rel=0&modestbranding=1&autoplay=1`;
	}
	initMeet() {
		// document.querySelector("#meeting1")?.remove();
		// const padre = document.getElementById("jitsiFrame");
		// const div = document.createElement("div");
		// div.id = "meeting1";
		// padre!.appendChild(div);
		const domain = "meet.jit.si";
		this.options = {
			roomName: "TaniaTorres",
			parentNode: document.querySelector("#meeting1"),
			userInfo: {
				email: "Juan Morales",
				displayName: "Juan Morales",
			},
			configOverwrite: {
				startWithAudioMuted: true,
				prejoinPageEnabled: false,
				disableDeepLinking: true,
			},
			interfaceConfigOverwrite: {
				filmStripOnly: false,
				LANG_DETECTION: true,
				DEFAULT_REMOTE_DISPLAY_NAME: "TaniaTorres",
				TOOLBAR_ALWAYS_VISIBLE: true,
				GENERATE_ROOMNAMES_ON_WELCOME_PAGE: true,
				DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
				TOOLBAR_BUTTONS: this.getMeetingButtons(),
			},
		};
		this.jitsiApi = new JitsiMeetExternalAPI(domain, this.options);
	}
	getMeetingButtons(): string[] {
		let result: any[] = [
			"microphone",
			// todos
			,
			"camera", // todos
			// ,'closedcaptions'  // nadie
			//,'desktop'   //solo junta
			"fullscreen",
			"fodeviceselection",
			// ,'hangup'    // nadie
			//,'profile'
			//,'chat'      //junta
			//,'recording'  //soporte
			//,'livestreaming'  //junta
			"etherpad",
			"sharedvideo", //junta
			"settings", // junta
			"raisehand", // junta
			"videoquality", // todos
			//,'filmstrip'   //nadie
			//,'invite'      //nadie
			//,'feedback'    //nadie
			//,'stats'       //nadie
			//,'shortcuts'   //nadie
			"tileview", //todos
			// , 'videobackgroundblur'  //nadie
			//,'download'  //nadie
			//,'help'       //nadie
			//,'mute-everyone'  //nadie
			"e2ee",
			//,'security'
		];

		return result;
	}
}
