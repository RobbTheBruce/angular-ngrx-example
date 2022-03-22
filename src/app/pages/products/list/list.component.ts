import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Remove } from 'src/app/actions/products.action';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products$: Observable<ProductModel[]>;
  displayedColumns: string[] = ['title', 'category', 'description', 'price', 'options'];

  constructor(private readonly store: Store, private router: Router) {
    //@ts-ignore
    this.products$ = store.select('products');
  }

  removeItem(product: ProductModel) {
    this.store.dispatch(Remove(
      { product: product }
    ));
  }

  updateItem(product: ProductModel) {
    this.store.pipe(take(1)).subscribe((data: any) => {
      this.router.navigate(['/products/' , data.products.indexOf(product)]);
    });
  }

}
