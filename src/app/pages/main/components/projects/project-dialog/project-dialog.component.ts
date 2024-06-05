import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionClose } from '@ng-icons/ionicons';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ionClose})],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {

  constructor (public dialog_ref: MatDialogRef<ProjectDialogComponent>){}

}
