import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../Product.class';


@Component ({
    selector: 'product-item',
    templateUrl: 'product-item.component.html',
    styleUrls: ['product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

   @Input() product: Product;
   @Input() selectedProduct: Product;
   @Output() showMoreEmit = new EventEmitter();
   @Output() productAddToBasket = new EventEmitter();
   @Output() productAddToWishlist = new EventEmitter();
   @Output() productRemoveFromWishlist = new EventEmitter();
    isClicked: boolean = true;
    
    constructor() { }

    ngOnInit() {

    }

    toggleButton() {
        this.isClicked = !this.isClicked;
        if(!this.isClicked) {
           this.addProductToWishlist(this.product)
        }else {
            this.removeFromWishlist(this.product)
        }
    }

    showMore(product: Product) {
        this.showMoreEmit.emit(product)
    }

    addProductToBasket(product: Product) {
        this.productAddToBasket.emit(product);
    }

    addProductToWishlist(product: Product) {
        this.productAddToWishlist.emit(product);
    }

    removeFromWishlist(product: Product) {
        this.productRemoveFromWishlist.emit(product);
    }

}