import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      title: "Peanute",
      description: "The peanut, also known as the groundnut, goober, or monkey nut, and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics, being important to both small and large commercial producers. Wikipedia",
      imageUrl: "https://source.unsplash.com/ZPfd3ZobOc0/500x300"
    },
    {
      title: "Walnut",
      description: "A walnut is the nut of any tree of the genus Juglans, particularly the Persian or English walnut, Juglans regia. Technically a walnut is the seed of a drupe or drupaceous nut and thus not a true botanical nut. Wikipedia",
      imageUrl: "https://source.unsplash.com/eo7J_G7q36k/500x300"
    },
    {
      title: "Apple",
      description: "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Wikipedia",
      imageUrl: "https://source.unsplash.com/SYrmNNS5TdA/500x300"
    },
    {
      title: "Other",
      description: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Wikipedia.",
      imageUrl: "https://source.unsplash.com/F_ilCik66Hg/500x300"
    }
  ];
  
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  onProductClick(title:string)
  {
    this.router.navigate(['/details', title]);
  }

  ngOnInit() {
  }

}
