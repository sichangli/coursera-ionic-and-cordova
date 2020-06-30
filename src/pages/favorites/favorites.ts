import {Component, Inject, OnInit} from '@angular/core';
import {IonicPage, ItemSliding, NavController, NavParams} from 'ionic-angular';
import {Dish} from "../../shared/dish";
import {FavoriteProvider} from "../../providers/favorite/favorite";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {

  favorites: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private favoriteservice: FavoriteProvider, @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ngOnInit() {
    this.favoriteservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMess = errmess);
  }

  deleteFavorite(item: ItemSliding, id: number) {
    console.log('delete', id);
    this.favoriteservice.deleteFavorite(id)
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMess = errmess);
    item.close();

  }

}
