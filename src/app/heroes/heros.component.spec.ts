import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../services/hero service/hero.service';
import { HeroesComponent } from './heroes.component';

describe('Testing HeroesComponent', () => {
  //mocking->facking
  let heroesComponent: HeroesComponent;
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let herosArray: Hero[];
  beforeEach(() => {
    herosArray = [
      { id: 1, name: 'superMan', strength: 8 },
      { id: 2, name: 'batMan', strength: 10 },
      { id: 3, name: 'wonder Woman', strength: 9 },
    ];
    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);
    //fake getHeroes implementation
    mockHeroService.getHeroes.and.returnValue(of(herosArray));
    heroesComponent = new HeroesComponent(mockHeroService);
  });

  it('Testing component create successfully', () => {
    expect(heroesComponent).toBeTruthy();
  });
  it('test heroes is empty', () => {
    expect(heroesComponent.heroes.length).toBe(0);
   
  });
  it('test heros[] after calling ngOnInit',()=>{
    heroesComponent.ngOnInit();
    expect(heroesComponent.heroes.length).toBe(3)
    expect(heroesComponent.heroes[0].name).toBe('superMan');
    expect(mockHeroService.getHeroes).toHaveBeenCalled()
  })
  it('test deleting wonder Woman successfully',()=>{
    heroesComponent.ngOnInit()
    heroesComponent.delete(herosArray[2]);
    expect(heroesComponent.heroes.length).toBe(2)
    expect(mockHeroService.deleteHero).toHaveBeenCalled()
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(herosArray[2])
  })
});
