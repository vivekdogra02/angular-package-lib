import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component} from '@angular/core';
import { StatusLightComponent } from './status-light.component';
import { By } from '@angular/platform-browser';

@Component({
 template: `
 <vd-status-light [color]='appStatus'></vd-status-light>
 `
})
class TestComponent {
  appStatus= '';

}
describe('StatusLightComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, StatusLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the color to green when input is "safe"', () => {
    component.appStatus = 'safe';
    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('green')
  });
  it('should set the color to red when input is "danger"', () => {
    component.appStatus = 'danger';
    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('red')
  });
  it('should set the color to yellow when input is "warning"', () => {
    component.appStatus = 'warning';
    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('yellow')
  });
});
