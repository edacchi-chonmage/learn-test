import { Component } from '@angular/core';
import { IRepository, RepositoriesStateService } from "./states/repositories-state.service";
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public repositories$: Observable<IRepository[]>;

  constructor(repositoriesState: RepositoriesStateService) {
    this.repositories$ = repositoriesState.$;
    repositoriesState.fetch('thrbrd');
  }
}
