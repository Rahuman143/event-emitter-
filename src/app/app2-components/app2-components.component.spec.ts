import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2ComponentsComponent } from './app2-components.component';

describe('App2ComponentsComponent', () => {
  let component: App2ComponentsComponent;
  let fixture: ComponentFixture<App2ComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App2ComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App2ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
