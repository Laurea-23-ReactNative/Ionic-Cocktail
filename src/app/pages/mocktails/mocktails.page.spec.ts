import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MocktailsPage } from './mocktails.page';

describe('MocktailsPage', () => {
  let component: MocktailsPage;
  let fixture: ComponentFixture<MocktailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MocktailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
