import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBasketsComponent } from './my-baskets.component';

describe('MyBasketsComponent', () => {
  let component: MyBasketsComponent;
  let fixture: ComponentFixture<MyBasketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBasketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
