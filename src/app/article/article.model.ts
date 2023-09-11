export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp = () => (this.votes += 1);

  voteDown = () => (this.votes -= 1);

  // domain() is a utility function that extracts the domain from a URL
  domain() {
    try {
      //  e.g. http://foo.com/path/to/bar
      const domainAndPath = this.link.split('//')[1];
      // e.g. foo.com/ahpt/to/ bar;
      return domainAndPath.split('/')[0];
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
