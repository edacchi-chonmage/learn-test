import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoriesStateService } from "./states/repositories-state.service";

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    RepositoriesStateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
