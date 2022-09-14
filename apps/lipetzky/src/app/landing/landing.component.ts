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
      name: "Ryker",
      headline: "For Your Current Mood",
      image:
        "https://i.pravatar.cc/150?img=1",
      color: "pink"
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
    if (this.mode == "list") return this.listTemplate
    return this.cardTemplate
  }
}
