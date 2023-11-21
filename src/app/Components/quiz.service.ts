import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  private quizData: any[] = [
    {
      id:1,
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      id:2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    {
      id:3,
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      id:4,
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      id:5,
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
      correctAnswer: 'Tokyo',
    },
  ];

  getQuizData(): any[] {
    return this.quizData;
  }
}
