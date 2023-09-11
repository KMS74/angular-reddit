import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  // In Angular, a component host is the element'selector' this component is attached to.
  // the host element (the app-article tag) we want to set the class attribute to have “row”.
  @HostBinding('attr.class') cssClass = 'row';

  @Input()
  article!: Article;

  constructor() {}

 
 
  voteUp() {
    this.article.voteUp();
  }
  voteDown() {
    this.article.voteDown();
  }
}
