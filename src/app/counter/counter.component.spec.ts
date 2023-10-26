import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('Testing CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    //whole component
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('component create successfully', () => {
    expect(component).toBeTruthy();
  });
  it('testing counter is zero', () => {
    expect(component.counter).toBe(0);
  });

  it('p tag has counter of zero', () => {
    fixture.detectChanges();
    let p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('0');
  });

  it('testing counter increse after cliking increase button and decrese after clicking on decrease btn',()=>{
    let increseBtn=fixture.debugElement.query(By.css('#inc'))
    let decreseBtn=fixture.debugElement.query(By.css('#dec'))

    increseBtn.triggerEventHandler('click')
    fixture.detectChanges()
    expect(component.counter).toBe(1)
    let p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('1');
  })
});
