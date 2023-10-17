import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DronezComponent } from "./dronez.component";

describe("DronezComponent", () => {
  let component: DronezComponent;
  let fixture: ComponentFixture<DronezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DronezComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
