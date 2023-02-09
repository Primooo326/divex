import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { JitsiComponent } from "./jitsi/jitsi.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TabsComponent } from "./tabs/tabs.component";
import { ChatComponent } from "./chat/chat.component";

@NgModule({
  declarations: [
     JitsiComponent, HeaderComponent, TabsComponent, ChatComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    // AppRoutingModule,
    CommonModule
  ],
  exports:[ JitsiComponent, HeaderComponent, TabsComponent, ChatComponent]
})
export class ComponentsModule {}
