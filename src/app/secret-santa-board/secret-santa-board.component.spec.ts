import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretSantaBoardComponent } from './secret-santa-board.component';

describe('SecretSantaBoardComponent', () => {
  let component: SecretSantaBoardComponent;
  let fixture: ComponentFixture<SecretSantaBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretSantaBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretSantaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
