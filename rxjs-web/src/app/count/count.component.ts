import { OnInit, Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
})
export class CountComponent implements OnInit, OnDestroy {
  private id = uuid();

  private destroy$ = new Subject<void>();

  protected count!: number;

  @Input() source!: Observable<number>;

  ngOnInit(): void {
    console.log(`[CountComponent] ${this.id} ngOnInit`);

    this.source.pipe(takeUntil(this.destroy$)).subscribe((count: number) => {
      this.count = count;
      console.log(`[CountComponent] ${this.id} source`, count);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log(`[CountComponent] ${this.id} ngOnDestroy`);
  }
}
