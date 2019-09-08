import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing/routing.module';

import * as $  from "jquery";
  (window as any)["$"]=$;
  (window as any)["jQuery"]=$;
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageComponent } from './package/package.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { SliderComponent } from './slider/slider.component';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { PopularComponent } from './popular/popular.component';
import { StoryComponent } from './story/story.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HowToComponent } from './how-to/how-to.component';
  (window as any)["$"]=$;
  (window as any)["jQuery"]=$;

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SearchComponent,
    PackagesComponent,
    PackageComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AccountComponent,
    BlogComponent,
    SliderComponent,
    BookingComponent,
    EventsComponent,
    GalleryComponent,
    DestinationsComponent,
    PopularComponent,
    StoryComponent,
    PaginationComponent,
    HowToComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
