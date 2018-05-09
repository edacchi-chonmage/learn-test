import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { consoleTestResultHandler } from "tslint/lib/test";
import { IRepository } from "../../states/repositories-state.service";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent {
  @Input() public repositories;
  public form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = this.buildForm(fb);
  }

  public filterByText(repositories: IRepository[], filterText: string): IRepository[] {
    const regex = new RegExp(filterText.replace(/\s/g, '.*'), 'gi');

    return repositories.filter(repository => regex.test(repository.name));
  }

  private buildForm(fb): FormGroup {
    return fb.group({
      filterText: ['']
    });
  }
}
