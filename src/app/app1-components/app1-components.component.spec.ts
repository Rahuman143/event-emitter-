import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1ComponentsComponent } from './app1-components.component';

describe('App1ComponentsComponent', () => {
  let component: App1ComponentsComponent;
  let fixture: ComponentFixture<App1ComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App1ComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
