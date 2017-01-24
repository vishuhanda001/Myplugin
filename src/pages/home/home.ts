import {ActionSheetController, Platform} from 'ionic-angular';
import {Observable, Subscription} from 'rxjs/Rx';
import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {AngularFire} from 'angularfire2';


import {FilePath, FileChooser} from 'ionic-native';

import { NavController, LoadingController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
declare var navigator: any;
declare var cordova: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit ,OnDestroy{

  myDate: any;
  path: any;
  totalPath: any;
  longitude: any;
  latitude: any;
  seconds: any = 0;
  minutes: any = 0;
  count: any = 0;
  timer:Subscription;
  secondobservable:any;

  constructor(public navCtrl: NavController,
   private loadcontroller: LoadingController,
  public actionsheetcontroller:ActionSheetController,
  public platform:Platform,
  public angularfire:AngularFire) {}

presentactionsheet(){
   let actionSheet = this.actionsheetcontroller.create({
     subTitle:'make your album awesome',
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: (data) => {

              this.timer  = Observable.interval(1000).subscribe((t) => {
              this.seconds = t;
                if(this.seconds == 60)
                {
                  this.minutes=this.minutes+1;
                  this.timer.unsubscribe();

                }
    });

            console.log('Destructive clicked-> '+data);
          }
        },{
          text: 'Archive',
          handler: (data) => {
            console.log('Archive clicked-> '+data);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked->'+data);
          }
        }
      ]
    });
    actionSheet.present();
  }




  ngOnInit() {

    console.log(this.platform.is('android'));

    // this.timer  = Observable.interval(1000).subscribe((t) => {
    //   this.seconds = t;
    //   if(this.seconds == 60)
    //   {
    //     this.minutes=this.minutes+1;
    //     this.timer.unsubscribe();

    //   }
    // });
     
var args = [0,1,2];
    this.foo.apply(null,args);
  }


  foo(x,y,z){
    console.log(x,y,z);
  }

  ngOnDestroy(){
    this.timer.unsubscribe();
    
  }


  onChange(event: any) {
    console.log(event.target.value);

  }

  wheelfun(event){
console.log("--");


  }

  dblclick(event){                                                                                                                                                                                                                                                                                         

console.log("----"+event);

  }



  mybutton() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log(navigator.vibrate(3000));
    }


  }
  mysecondbutton() {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      cordova.plugins.amilateyou.coolMethod("hello", function (success) { console.log("--" + success) }, function (error) { console.log("++" + error) });
    }
  }

  deviceinfo() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      cordova.plugins.amilateyou.deviceInfo("wow", function (success) { console.log("--" + success) }, function (error) { console.log("++" + error) });
    }

  }


  geolocation() {

    Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    })
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);

      })
      .catch((error) => { console.log(error) })

  }

  watchposition() {

    Geolocation.watchPosition({ enableHighAccuracy: true })
      .filter((p: any) => p.code === undefined) //Filter Out Errors
      .subscribe(position => {
        console.log(position.coords.longitude + '-- ' + position.coords.latitude + '-- ' + position.coords.altitude);
      }, (error) => { console.log(error) });

  }


  playvideo() {

    FileChooser.open()
      .then(uri => {
        console.log("uri-> " + uri);
        this.path = uri;
      })
      .catch(e => console.log(e));

    FilePath.resolveNativePath(this.path)
      .then((filepath) => {
        this.totalPath = filepath;
        console.log("filepath:=> " + filepath)
      })
      .catch((error) => { console.log(error) })

    // VideoPlayer.play(this.totalPath)
    // .then(()=>{
    //   console.log("video completed")
    // })
    // .catch((error)=>{console.log()})
    // }

  }

  openYoutubeVideo() {

    let loading = this.loadcontroller.create({ content: 'please wait' });

    loading.present();

    setTimeout(function () {
      loading.dismiss();
    }, 5000);


  }

  datechanged() {
    console.log(this.myDate);

  }


  favorite(item) {
    console.log("favourite:-> " + JSON.stringify(item));

  }

  share(item) {
    console.log("share:-> " + JSON.stringify(item));

  }


  unread(item) {
    console.log("unread:-> " + JSON.stringify(item));

  }


