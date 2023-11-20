import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  private quizData: any[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
      correctAnswer: 'Tokyo',
    },
  ];

  getQuizData(): any[] {
    return this.quizData;
  }
}
