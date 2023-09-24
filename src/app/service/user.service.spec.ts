import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from '../envs/environments';
import { UserResponseInterface } from '../model/user.interface';
import { mock } from 'ts-mockito';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users successfully', () => {
    const mockResponse: UserResponseInterface = mock();
    const limit = 10;
    const page = 1;

    service.getUsers(limit, page).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${environment.apiURL}/user?limit=${limit}&page=${page}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });
});