import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question';
import { QuestionService } from '../../questions.service';

@Component({
  selector: 'app-question-type-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  @Input() question: Question;
  @Output() questionChange: EventEmitter<object> = new EventEmitter<object>();

  answer: number;
  isAnswered: boolean = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.answer = this.question.answer;
    this.isAnswered = !!this.question.answer;
  }

  sendAnswer() {
    const value = { question_id: this.question.id, answer: this.answer };
    this.questionChange.emit(value);
    this.questionService.addToLocalStorage(value);
  }
}
