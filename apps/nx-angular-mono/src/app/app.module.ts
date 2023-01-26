import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { fruitRoutes } from '@nx-angular-mono/frontend/fruit/shell';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes = [
  {
    path: 'fruit',
    children: fruitRoutes,
  },
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
