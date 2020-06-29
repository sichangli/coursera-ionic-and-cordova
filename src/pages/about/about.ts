import {Component, Inject, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LeaderProvider} from '../../providers/leader/leader';
import {Leader} from '../../shared/leader';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage implements OnInit{
  leaders: Leader[];
  leadersErrMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private leaderProvider: LeaderProvider, @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.leaderProvider.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        errmess => this.leadersErrMess = errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
