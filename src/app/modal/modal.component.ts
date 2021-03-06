import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BroadcasterModalService } from '../service/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('modal', [
      state('show', style({ opacity: 1, display: 'block' })),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
    trigger('modalBackdrop', [
      state('show', style({ opacity: .8, display: 'block' })),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ]),
  ]
})

export class ModalComponent implements OnInit {

  @Input() article;
  private show;
  showBack = true;
  public index;
  public story;

  constructor(private _broadcaster: BroadcasterModalService) { }

  ngOnInit() {
    this.delayOpening();
    this.index = this.article.index;
    this.story = this.article.story[this.index];
    console.log('story: ', this.story, ' index: ', this.index);
  }

  get modalState() {
    return this.show ? 'show' : 'hide';
  }
  get modalBackdropState() {
    return this.showBack ? 'show' : 'hide';
  }

  delayOpening() {
    setTimeout(() => {
      this.show = 'show';
      this.story.state = 'show';
    }, 100);
  }

  closeModal() {
    this.show = !this.show;
    this.showBack = !this.showBack;
    this.story.state = 'hide';
    this._broadcaster.sendModalUpdate(false);
  }

}
