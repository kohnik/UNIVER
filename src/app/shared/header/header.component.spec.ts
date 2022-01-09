import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HeaderComponent} from "./header.component";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import {By} from "@angular/platform-browser";
import {AuthService} from "../../core/services/authService/auth.service";
import {MatMenuModule} from "@angular/material/menu";
describe('BookmarksComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const fakeAuthService: AuthService = jasmine.createSpyObj('AuthService', [
    'logout']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule,MatMenuModule],
      providers: [
        HttpTestingController,
        HttpClient,
        HttpHandler,
        { provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
