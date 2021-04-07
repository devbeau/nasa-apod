import Card from './Card';

function Cards({articles}) {

    return (
        articles.map(article => {
            return <Card article={article}/>
        })
    )
}

export default Cards;