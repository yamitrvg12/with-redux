import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { INCREMENT, DECREMENT } from '../../actions';

@Component({
  selector: 'crew-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @select() newMessages;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    const getState = this.ngRedux.getState();

    if (getState.newMessages > 0) {
      this.ngRedux.dispatch({ type: DECREMENT });
    }
  }

}
