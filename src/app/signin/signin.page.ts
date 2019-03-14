import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"]
})
export class SigninPage implements OnInit {
  constructor(private menu: MenuController) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.menu.enable(false);
  }
}
