function Article ({article}) {

    return (
        <div className='article'>
            <h3 className='date'> {article.date} </h3>
            <div className='image-container'>
                <button 
                    className='prev-button'
                > 
                    {'<'} 
                </button>
                <a href={article.hdurl}>
                    <img src={article.url} alt={article.title} />
                </a>
                <button 
                    className='next-button'
                >
                    {'>'}
                </button>
                <div className='citation-container'>
                    <copyright className='author'> {article.copyright} </copyright>
            </div>
            </div>
            <div className='text-container'>
                <p className='text-p'>{article.explanation}</p>
            </div>
        </div>
    )
}

export default Article;