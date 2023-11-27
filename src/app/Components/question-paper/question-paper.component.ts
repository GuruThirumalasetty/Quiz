import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

interface QuizQuestion {
  id: number;
  question: string;
  answered: boolean;
}

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.scss']
})
export class QuestionPaperComponent {
  circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  durationInSeconds: number = 915; 
  displayTime: string = '';
  title = 'Quiz';
  selectedAnswers: any[] = [];
  quizCompleted:boolean=false;
  quizData: any[] =[];
  currentQuestionIndex: number = 0;
  correctAnswers: any;
  wrongAnswers: any;


  constructor(
    private quizService: QuizService,
    private router: Router,
  ) {}

  ngOnInit() {
     this.startTimer();
    this.quizData = this.quizService.getQuizData();
  }
  startTimer() {
    const timerInterval = setInterval(() => {
      this.durationInSeconds--;

      const minutes = Math.floor(this.durationInSeconds / 60);
      const seconds = this.durationInSeconds % 60;

      this.displayTime = `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(1, '0')}`;

      if (this.durationInSeconds <= 0) {
        clearInterval(timerInterval);
      this.timerExpired();
      this.router.navigate(['/sessionout']);
      Swal.fire({
        text: "Time Up your Results Out"
      }).then((result) => {
        if (result.isConfirmed) {
         this.submit();
        }
      })
      }
    }, 1000);
  }

  timerExpired() {
    console.log('Time is up!');
  }
  selectAnswer(option: any,id:number) {
    debugger
    this.selectedAnswers[this.currentQuestionIndex] = {id:id,checkedOption:option};
  }
  nextQuestion() {
    this.currentQuestionIndex++;
  }
  previousQuestion() {
    this.currentQuestionIndex--;
   
  }
  // submit() {
  //   debugger
  //   this.quizCompleted= true;
  //     let correctCount = 0;
  //     let wrongCount = 0
  //   this.quizData.map((x:any)=>{
  //     if(this.selectedAnswers.includes(x.correctAnswer)){
  //       correctCount++
  //     }
  //     else{
  //       wrongCount++
  //     }
  //   })
  //   Swal.fire(correctCount + 'answers correct',wrongCount + 'answers Wrong')
  //   Swal.fire({
  //     text:'Correct Answers : ' + correctCount + ' , Wrong Answers : ' + wrongCount
  //   })
  // }

  selectQuestion(qId:number){
    debugger
    this.currentQuestionIndex =qId-1
  }
  submit(){
    debugger
    let correctCount =0;
    let wrongCount = 0
    this.selectedAnswers.forEach(selected => {
      const question = this.quizData.find(q => q.id === selected.id);
      if (question && question.correctAnswer === selected.checkedOption) {
        correctCount++;
      }
      else{
        wrongCount++
      }
    });
    Swal.fire({
           text:'Correct Answers : ' + correctCount + ' , Wrong Answers : ' + wrongCount
         })
  }
  }

