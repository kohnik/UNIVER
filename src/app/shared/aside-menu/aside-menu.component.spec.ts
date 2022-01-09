import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AsideMenuComponent} from "./aside-menu.component";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import {By} from "@angular/platform-browser";
describe('BookmarksComponent', () => {
  let component: AsideMenuComponent;
  let fixture: ComponentFixture<AsideMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideMenuComponent ],
      imports: [RouterTestingModule],
      providers: [
        HttpTestingController,
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('button should changed style', fakeAsync(() => {
    spyOn(component, 'changeStyleThemeForButton');
    const btn = fixture.debugElement.query(By.css('.asideMenu'));
    btn.triggerEventHandler('click', null);
    tick();
    expect(component.changeStyleThemeForButton).toHaveBeenCalled();
    fixture.detectChanges();
  }));
});
