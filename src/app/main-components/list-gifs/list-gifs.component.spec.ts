import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGifsComponent } from './list-gifs.component';

describe('ListGifsComponent', () => {
  let component: ListGifsComponent;
  let fixture: ComponentFixture<ListGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
