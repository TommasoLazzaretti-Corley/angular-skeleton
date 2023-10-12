import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class DebounceUtility {
  private subject: Subject<any> = new Subject<any>();

  constructor(private delay: number) {}

  /**
   * Created using Rxjs operator DebounceTime
   * http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-debounceTime
   * Returns a Subject object with debounce logic incorporated.
   * The emissions of the subject are delayed by a specified time during the instance creation.
   * @returns A Subject object with debounce logic.
   */
  get debouncedSubject(): Subject<any> {
    return this.subject.pipe(debounceTime(this.delay)) as Subject<any>;
  }

  // Updated trigger method with optional parameters
  trigger(params?: any): void {
    this.subject.next(params);
  }

  complete(): void {
    this.subject.complete();
  }

}
