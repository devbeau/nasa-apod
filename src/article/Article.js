function Article ({article}) {

    return (
        <div className={'article'}>
            <div className={'image-container'}>
                <img src={article.url} alt={article.title} />
                <div className={'citation-container'}></div>
                <cite className={'author'}> {article.copyright}</cite>
                <cite className={'date'}> {article.date}</cite>
            </div>
            <div className={'article-text'}>
                <p>{article.explanation}</p>
            </div>
        </div>
    )
}

export default Article;