import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public menu: MenuController) {}

  toggleMenu() {
    console.log("toggling");
    this.menu.toggle("start");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.menu.enable(true);
  }
}
