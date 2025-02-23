import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component'
import { EducationHistoryComponent } from './education-history/education-history.component'
import { ProjectsComponent } from './projects/projects.component'
import { ReferencesComponent } from './references/references.component'
import { ToolsComponent } from './tools/tools.component'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PersonalInfoComponent,
    EducationHistoryComponent,
    ProjectsComponent,
    ReferencesComponent,
    ToolsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';
}
