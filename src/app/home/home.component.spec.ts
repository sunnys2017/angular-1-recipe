import { HomeComponent } from './home.component';
import { TestBed, async } from '@angular/core/testing';

describe('Component: Home', () => {

	beforeEach(()=> {
		//testbed is a test instance to access all configure to all
		// test utilities.
		TestBed.configureTestingModule({
			declarations: [HomeComponent]
		});  //.compileComponents();
		//if not cli or web based test, need to add:'.compileComponents()'
	})
	
	it('should create an instance', ()=> {
		let component = new HomeComponent();
		expect(component).toBeTruthy();
	})
	
	it('should create the component', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	})

	 it(`should have as title 'recipe book'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.welcomeTitle).toEqual('recipe book');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to recipe book!');
  }));

});