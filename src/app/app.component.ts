import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    // add article to article list
    this.articles.push(new Article(title.value, link.value, 0));
    // clear article title and link feilds input
    title.value = '';
    link.value = '';
  }

  get sortedArticles(): Article[] {
    return this.articles
      .slice()
      .sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
