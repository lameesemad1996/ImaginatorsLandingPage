import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IntroComponent } from './intro/intro.component';
import { FormComponent } from './form/form.component';
import { OptionsComponent } from './options/options.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { OptionService } from './services/option-card.service';
import { HoverEffectCardCardComponent } from './hover-effect-card/hover-effect-card.component';
import { HoverEffectElementComponent } from './hover-effect-element/hover-effect-element.component';
import { HoverEffectCardCardService } from './services/hover-effect-card-service';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroComponent,
    FormComponent,
    OptionsComponent,
    OptionCardComponent,
    HoverEffectCardCardComponent,
    HoverEffectElementComponent,
    SocialMediaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OptionService,
    HoverEffectCardCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
