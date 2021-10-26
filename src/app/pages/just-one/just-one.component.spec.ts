import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustOneComponent } from './just-one.component';

describe('JustOneComponent', () => {
  let component: JustOneComponent;
  let fixture: ComponentFixture<JustOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
