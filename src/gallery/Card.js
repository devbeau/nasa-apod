function Card({article}) {

    return (
        <img src={article.url} alt={article.title} />
    )
}

export default Card;