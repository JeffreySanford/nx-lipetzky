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

export class LandingComponent {

  @Input() formarray!: FormArray;
  @ViewChild('cardTemplate', { static: true }) cardTemplate!: TemplateRef<HTMLElement>;
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
      name: "Bob",
      headline: "Miouw",
      image:
        "https://i.pravatar.cc/150?img=2",
      color: "darkred"
    },
    {
      name: "Jennifer",
      headline: "In The Wilderness",
      image:
        "https://i.pravatar.cc/150?img=3",
      color: "firebrick"
    },
    {
      name: "Louisa",
      headline: "Focus On The Writing",
      image:
        "https://i.pravatar.cc/150?img=4",
      color: "red"
    },
    {
      name: "Ben",
      headline: "For Your Current Mood",
      image:
        "https://i.pravatar.cc/150?img=5",
      color: "orange"
    },
    {
      name: "Ryker",
      headline: "For Your Current Mood",
      image:
        "../../../../assets/images/jack-carver.png",
      color: "gold"
    },
    {
      name: "Alice",
      headline: "Miouw",
      image:
        "https://i.pravatar.cc/150?img=6",
      color: "green"
    },
    {
      name: "Joseph",
      headline: "In The Wilderness",
      image:
        "https://i.pravatar.cc/150?img=7",
      color: "darkgreen"
    },
    {
      name: "Ahmed",
      headline: "Focus On The Writing",
      image:
        "https://i.pravatar.cc/150?img=8",
      color: "violet"
    }
  ];

  selectedIndex = 4;
  title = 'ngTemplateOutlet Example';
  mode = "card";

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

  get template() {
    // if (this.mode == "list") return this.listTemplate
    return this.cardTemplate
  }
}
