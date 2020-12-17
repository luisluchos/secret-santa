import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretSantaCardComponent } from './secret-santa-card.component';

describe('SecretSantaCardComponent', () => {
  let component: SecretSantaCardComponent;
  let fixture: ComponentFixture<SecretSantaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretSantaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretSantaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
