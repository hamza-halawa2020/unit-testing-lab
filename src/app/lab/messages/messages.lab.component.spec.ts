import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from 'src/app/services/message/message.service';

describe('2-message component integration testing:', () => {
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let component: MessagesComponentForLab;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
  });

  it('expect comp. created successfully', () => {
    expect(component).toBeTruthy();
  });

  it('expect component template to be empty', () => {
    messageService.messages = [];

    fixture.detectChanges();

    const messageElements = fixture.nativeElement.querySelectorAll('.msg');
    expect(messageElements.length).toBe(0);
  });

  it('then expect div.msg to have the messages after setting it', () => {
    messageService.messages = ['Message 1', 'Message 2'];

    fixture.detectChanges();

    const messageElements = fixture.nativeElement.querySelectorAll('.msg');
    expect(messageElements.length).toBe(2);
    expect(messageElements[0].textContent).toContain('Message 1');
    expect(messageElements[1].textContent).toContain('Message 2');
  });
});
