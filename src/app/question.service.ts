import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'studentName',
        label: 'Student Name',
        order: 1
      }),

      new TextboxQuestion({
        key: 'rollNumber',
        label: 'Roll Number',
        order: 2
      }),

      new TextboxQuestion({
        key: 'studentName',
        label: 'Student Name',
        order: 1
      }),

      new TextboxQuestion({
        key: 'studentName',
        label: 'Student Name',
        order: 1
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}