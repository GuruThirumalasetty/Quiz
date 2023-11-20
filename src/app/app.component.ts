import { Component } from '@angular/core';
import { QuizService } from './Components/quiz.service';
import { FormBuilder, FormGroup } from '@angular/forms';

interface DataObject {
  value: string;
  data:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quiz';
  quizData: any[] =[];
  currentQuestionIndex: number = 0;
  answerFormGroup: FormGroup = new FormGroup({});

  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    debugger
    this.quizData = this.quizService.getQuizData();
    this.answerFormGroup = this.formBuilder.group({
      selectedAnswer: [''], // Use appropriate validation if needed
    });
  }

  nextQuestion() {
    debugger
    if (this.currentQuestionIndex < this.quizData.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

}
