import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from 'src/app/hero';

describe('3-hero service (http) integration testing:', () => {
  let service: HeroServiceForLab;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(HeroServiceForLab);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getHeroes function: send request and receive response successfully', () => {
    const mockHeroes: Hero[] = [
      { id: 1, name: 'Hero 1', strength: 25 },
      { id: 2, name: 'Hero 2', strength: 5 },
    ];

    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpMock.expectOne(service['heroesUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockHeroes);
  });

  it('updateHero function: send request and receive response successfully', () => {
    const heroToUpdate: Hero = {
      id: 1,
      name: 'Updated Hero',
      strength: 0,
    };

    service.updateHero(heroToUpdate).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(service['heroesUrl']);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });
});
