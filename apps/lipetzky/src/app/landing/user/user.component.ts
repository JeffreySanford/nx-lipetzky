import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "./user.animations";
import { trigger, transition, useAnimation } from "@angular/animations";
import { Slide } from "./user.interface";

@Component({
  selector: 'lipetzky-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})

export class UsersComponent implements OnInit {
  @Input() slides!: Slide[];
  @Input() animationType = AnimationType.Scale;

  currentSlide = 4;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.image;
    }
  }

  getSlide(element: string, position: number): string {
    console.log(position);
    if (position < 0) {
      position = position + this.slides.length;
      console.log('position was too short, now: ' + position); 
    } else if (position > this.slides.length -1) {
      position = position - this.slides.length;
      console.log('position was too long, now: ' + position);
    }


    console.log(element + ' at '+ position )
    if(position < 0 || position > this.slides.length) {
      debugger
    }

    switch (element) {
      case 'image':
        return this.slides[position].image;
        break;
      case 'name':
        return this.slides[position].name;
        break;
      case 'color':
        return this.slides[position].color;
        break;
      default:
        return '';
    }
  }

  setCurrentUser (currentUserIndex: number): void {
    this.currentSlide = this.currentSlide + currentUserIndex;

    if (this.currentSlide < 0) {
      this.currentSlide = this.currentSlide + this.slides.length;
      console.log('set currentSlide was too short, now: ' + this.currentSlide); 
    } else if (this.currentSlide > this.slides.length -1) {
      this.currentSlide = this.currentSlide - this.slides.length;
      console.log('set currentSlide was too long, now: ' + this.currentSlide);
    }
  }
}