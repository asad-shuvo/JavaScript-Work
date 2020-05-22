class Article{
    constructor(title , date){
        this.title=title;
        this.date=date;
    }

    static compare(ArticleA,ArticleB){
        return ArticleA.date-ArticleB.date;
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
articles.sort(Article.compare);
  console.log(articles);
  