import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { AnimationType } from './user/user.animations';
import { UsersComponent } from './user/user.component';
import { Slide } from './user/user.interface';

@Component({
  selector: 'lipetzky-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit {

  @Input() formarray!: FormArray;
  @Output() add = new EventEmitter();
  @ViewChild('cardTemplate', { static: true }) cardTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate', { static: true }) listTemplate!: TemplateRef<HTMLElement>;
  @ViewChild(UsersComponent) carousel!: UsersComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];

  slides: Slide[] = [
    {
      name: "Ryker",
      headline: "For Your Current Mood",
      image:
        "https://i.pravatar.cc/150?img=1",
      color: "pink"
    },
    {
      name: "Bob",
      headline: "Miouw",
      image:
        "https://i.pravatar.cc/150?img=2",
      color: "darkblue"
    },
    {
      name: "Jennifer",
      headline: "In The Wilderness",
      image:
        "https://i.pravatar.cc/150?img=3",
      color: "blue"
    },
    {
      name: "Louisa",
      headline: "Focus On The Writing",
      image:
        "https://i.pravatar.cc/150?img=4",
      color: "lightblue"
    },
    {
      name: "Ben",
      headline: "For Your Current Mood",
      image:
        "https://i.pravatar.cc/150?img=5",
      color: "darkblue"
    },
    {
      name: "Alice",
      headline: "Miouw",
      image:
        "https://i.pravatar.cc/150?img=6",
      color: "plum"
    },
    {
      name: "Joseph",
      headline: "In The Wilderness",
      image:
        "https://i.pravatar.cc/150?img=7",
      color: "magenta"
    },
    {
      name: "Ahmed",
      headline: "Focus On The Writing",
      image:
        "https://i.pravatar.cc/150?img=8",
      color: "purple"
    }
  ];

  selectedIndex: number = 0;
  title = 'ngTemplateOutlet Example';
  mode = "card";

  constructor() { }

  // TODO I think this is an event.value
  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }




  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];

  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];

  get template() {
    if (this.mode == "list") return this.listTemplate
    return this.cardTemplate
  }

  ngOnInit(): void {

  }
}
