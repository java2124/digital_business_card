import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public load = true;
  public notLoad = false;

  constructor() {}

  public toTrailhead() {
    window.open('https://trailblazer.me/id/rbomfim', '_blank');
  }

  public toGithub() {
    window.open('https://github.com/java2124', '_blank');
  }

  public toLinkedin() {
    window.open('https://www.linkedin.com/in/rafaela-bomfim-de-jesus-1a1317177', '_blank');
  }

  async ngOnInit() {
    setTimeout(() =>
    {
      this.load = false;
      this.notLoad = true;
    },
    1500);
  }
}
