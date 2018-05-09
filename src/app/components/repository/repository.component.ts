import { Component, Input } from '@angular/core';
import { IRepository } from "../../states/repositories-state.service";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {
  @Input() public repository: IRepository;
}
