import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOutComponent } from './session-out.component';

describe('SessionOutComponent', () => {
  let component: SessionOutComponent;
  let fixture: ComponentFixture<SessionOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionOutComponent]
    });
    fixture = TestBed.createComponent(SessionOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
