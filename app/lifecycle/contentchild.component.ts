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
  selector: 'content-child',
  template: `
    <div>Content child {{ id }}</div>
  `,
})
export class ContentchildComponent
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
    console.log('=>contentchild ngOnChanges');
  }

  ngOnInit() {
    console.log('=>contentchild ngOnInit');
  }

  ngDoCheck() {
    console.log('=>contentchild ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('=>contentchild ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('=>contentchild ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('=>contentchild ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('=>contentchild ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('=>contentchild ngOnDestroy');
  }
}
