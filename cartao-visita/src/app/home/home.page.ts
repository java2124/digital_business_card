import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public fullstack = true;
  public salesforce = false;
  public dark = true;
  public light = false;
  public toolbarIntroduction = 'toolbar-introduction-light';
  public textThemeColor = 'text-black';
  public backgroundTheme = 'background-light';
  public footerColor = 'footer-light';
  public avatarStyle = 'avatarDiv animation-body gradient-light';

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
      this.showFullstack();
    },
    1000);
  }

  showFullstack(){
    this.salesforce = false;
    this.fullstack = true;

    setTimeout(() =>
    {
      this.showSalesforce();
    },
    1500);
  }

  showSalesforce(){
    this.salesforce = true;
    this.fullstack = false;

    setTimeout(() => {
      this.showFullstack();
    },
    1500);
  }

  public showDark(){
    this.dark = false;
    this.light = true;
    this.toolbarIntroduction = 'toolbar-introduction-dark';
    this.textThemeColor = 'text-white';
    this.backgroundTheme = 'background-dark';
    this.footerColor = 'footer-dark';
    this.avatarStyle = 'avatarDiv animation-body gradient-dark';
  }

  public showLight(){
    this.light = false;
    this.dark = true;
    this.toolbarIntroduction = 'toolbar-introduction-light';
    this.textThemeColor = 'text-black';
    this.backgroundTheme = 'background-light';
    this.footerColor = 'footer-light';
    this.avatarStyle = 'avatarDiv animation-body gradient-light';
  }
}
