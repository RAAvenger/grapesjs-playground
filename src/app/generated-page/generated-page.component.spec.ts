import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPageComponent } from './generated-page.component';

describe('GeneratedPageComponent', () => {
  let component: GeneratedPageComponent;
  let fixture: ComponentFixture<GeneratedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
