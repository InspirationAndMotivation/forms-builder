import {inject} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NgForm, ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {AuthServices} from "../../../shared/services/auth.service";

describe('Login form unit testing', function() {
  let $httpBackend, $rootScope, $location, $cookieStore;

  let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;

  beforeEach(inject(function($injector) {
    $httpBackend=$injector.get('$httpBackend');
    $rootScope=$injector.get('$rootScope');
    $cookieStore=$injector.get('$cookieStore');
    $location=$injector.get('$location');
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations:[AuthComponent],
      providers:[AuthServices]
    }).compileComponents();
  }));

  it("username is empty", () => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    component.email = '';
    component.password = '';
    component.handleSubmitForm();
    expect(component.objservice.isUserempty)
  })
  // Success
  it('should logs a user in and redirect', function() {
    $httpBackend.whenPOST('/login').respond(200);
    $rootScope.username = 'admin@mail.ru';
    $rootScope.password = 'admin123';
    $rootScope.login();

    $httpBackend.flush();
    $rootScope.$digest();
    expect($location.path()).toBe('/builder'); // --> error: location is not defined
    expect($cookieStore.get('username')).toBe('admin@mail.ru');
  });
});
