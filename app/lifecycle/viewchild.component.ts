import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'view-child',
  template: `
    <div>View child {{ id }}</div>
  `,
})
export class ViewchildComponent
  implements
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy,
    OnChanges,
    OnInit
{
  @Input()
  id: string;

  ngOnChanges() {
    console.log('=>viewchild ngOnChanges');
  }

  ngOnInit() {
    console.log('=>viewchild ngOnInit');
  }

  ngDoCheck() {
    console.log('=>viewchild ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('=>viewchild ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('=>viewchild ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('=>viewchild ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('=>viewchild ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('=>viewchild ngOnDestroy');
  }
}
