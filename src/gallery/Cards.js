import Card from './Card';

function Cards({articles, setArticle}) {

    return (
        articles.map(article => {
            return <Card 
                key={`${article.media_type}-${article.date}`} 
                article={article}
                setArticle={setArticle}
            />
        })
    )
}

export default Cards;