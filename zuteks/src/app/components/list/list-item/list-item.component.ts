import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../product/Product.class';

@Component ({
    selector: 'list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss']
})

export class ListItemComponent implements OnInit {

   @Input() product: Product;
   @Output() productAddToBasket = new EventEmitter();
   @Output() productRemoveFromWishlist = new EventEmitter();
    
    constructor() { }

    ngOnInit() {

    }

    addProductToBasket(product: Product) {
        this.productAddToBasket.emit(product);
    }

    removeFromWishlist(product: Product) {
        this.productRemoveFromWishlist.emit(product);
    }
}