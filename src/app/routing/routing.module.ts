import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PackagesComponent } from '../packages/packages.component'
import { PackageComponent } from '../package/package.component';
import { EventsComponent } from '../events/events.component';
import { SearchComponent } from '../search/search.component';
import { AccountComponent } from '../account/account.component';
import { AboutComponent } from '../about/about.component';
import { BookingComponent } from '../booking/booking.component';
import { StoryComponent } from '../story/story.component';
import { ContactComponent } from '../contact/contact.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'safari',
    component: PackagesComponent
  },
  {
    path: 'safari/[:id]',
    component: PackageComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
        redirectTo: 'our-story',
        pathMatch: 'full'
      },
      {
        path: 'our-story',
        component: StoryComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
