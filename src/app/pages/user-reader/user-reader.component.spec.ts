import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReaderComponent } from './user-reader.component';

describe('UserReaderComponent', () => {
  let component: UserReaderComponent;
  let fixture: ComponentFixture<UserReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
