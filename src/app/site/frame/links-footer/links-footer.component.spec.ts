import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksFooterComponent } from './links-footer.component';

describe('LinksFooterComponent', () => {
  let component: LinksFooterComponent;
  let fixture: ComponentFixture<LinksFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
