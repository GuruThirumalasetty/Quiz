import { Component } from '@angular/core';

export interface ObjectData {
  question: string;
  options:object[];
  crtAns:number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  questionArray :ObjectData[] = [
    // {question:'test',options:'',crtAns:0},
    // {question:'question',options:'',crtAns:0},
  ];
  index:number=0;
  noOfQues:any;

  next(){
    if(this.index < this.questionArray.length-1)
      ++this.index;
  }
  previous(){
    if(this.index != 0)
      --this.index;
  }

  numberOnly(event: { which: any; keyCode: any; key:any }) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  value:any;
  noOfQuestions(event:any){
    debugger
    this.value =+event;
    if(event < this.index)
      this.index = event
    this.questionArray = [];
    for(let i=0;i<this.value;i++){
      let obj = {question:'',options:[
        {option:'',ans:false},
        {option:'',ans:false},
        {option:'',ans:false},
        {option:'',ans:false}],crtAns:0};
      this.questionArray[i]= obj;
    }
  }

  submit(){
  }
}
