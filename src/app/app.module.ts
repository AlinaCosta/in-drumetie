import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './main/about/about.component';
import { GhidDrumetieComponent } from './main/ghid-drumetie/ghid-drumetie.component';
import { ToursComponent } from './main/tours/tours.component';
import { PopupComponent } from './main/popup/popup.component';
import { StoriesComponent } from './main/stories/stories.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    GhidDrumetieComponent,
    ToursComponent,
    PopupComponent,
    StoriesComponent,
    ContactComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
