import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatePipesComponent } from './truncate.pipes.component';

describe('TruncatePipesComponent', () => {
  let component: TruncatePipesComponent;
  let fixture: ComponentFixture<TruncatePipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruncatePipesComponent]
    });
    fixture = TestBed.createComponent(TruncatePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
