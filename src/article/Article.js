import YouTube from './YouTube';

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
                {article.media_type === 'video' &&
                    <YouTube 
                        embedURL={article.url}
                        embedTitle={article.title}
                    />
                }
                {article.media_type === 'image' &&
                    <a href={article.hdurl}>
                        <img src={article.url} alt={article.title} />
                    </a>
                }
                <button 
                    className='next-button'
                >
                    {'>'}
                </button>
                <div className='citation-container'>
                    <cite className='author'> {article.copyright} </cite>
            </div>
            </div>
            <div className='text-container'>
                <p className='text-p'>{article.explanation}</p>
            </div>
        </div>
    )
}

export default Article;