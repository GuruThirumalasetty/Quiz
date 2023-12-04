import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private matDialog:MatDialog){}
  openDialog(rowdata?:any){
    this.matDialog.open(DialogComponent, {
      // disableClose: true,
      data:rowdata,
      width: '40%',
    }).afterClosed().subscribe(()=>{
    })
  }
}
