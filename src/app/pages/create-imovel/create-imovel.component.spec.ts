import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImovelComponent } from './create-imovel.component';

describe('CreateImovelComponent', () => {
  let component: CreateImovelComponent;
  let fixture: ComponentFixture<CreateImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
