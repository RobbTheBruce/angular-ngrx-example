import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { take } from 'rxjs/operators';
import { Save, Update } from 'src/app/actions/products.action';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'products-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() productId: number | undefined;
  form$: Observable<ProductModel>;
  simpleFormGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl()
  });

  constructor(private readonly store: Store, private router: Router, private route: ActivatedRoute) {
    //@ts-ignore
    this.form$ = store.select('products');
  }

  ngOnInit(): void {
    if (this.productId)
      this.getProductById(Number(this.productId));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productId)
      this.getProductById(Number(this.productId));
  }

  getProductById(id: number) {
    this.store.pipe(take(1)).subscribe((data: any) => {
      console.log(data.products[id]);
      this.simpleFormGroup.setValue(data.products[id]);
    });
  }

  save(event: any) {
    if (!this.productId)
      this.store.dispatch(Save(
        { product: this.simpleFormGroup.value }
      ));
    else
      this.store.dispatch(Update(
        { product: this.simpleFormGroup.value, position: this.productId }
      ));

    this.simpleFormGroup.reset();
    this.router.navigate(['/products']);
  }

}
