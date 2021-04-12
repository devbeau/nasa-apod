import YouTube from './YouTube';
import moment from 'moment';

const FIRST_DATE = '1995-06-16'

function Article ({article, setArticle, todaysDate}) {

    function onClick(e) {
        const {name} = e.target;
        const forward = name === 'next' ? true : false;
        console.log(name, forward);
        const articleDateAfterClick = getDate(article.date, forward);
        fetch('https://api.nasa.gov/planetary/apod?' 
        + 'api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab'
        + '&thumbs=True'
        + '&date=' + articleDateAfterClick
        )
        .then(res => res.json())
        .then(data => {
            setArticle(data);
        })
    }

    function getDate(currentArticleDate, forward = false) {
        console.log(forward);
        if (forward) {
            if (moment(currentArticleDate).isSameOrAfter(moment(todaysDate))) return todaysDate;
            return moment(currentArticleDate, "YYYY-MM-DD").add(1, "days").format("YYYY-MM-DD");
        }

        if (moment(currentArticleDate).isSameOrBefore(moment(FIRST_DATE))) return FIRST_DATE;
        return moment(currentArticleDate, "YYYY-MM-DD").subtract(1, "days").format("YYYY-MM-DD");    
    }

    return (
        <div className='article'>
            <h3 className='date'> {moment(article.date, "YYYY-MM-DD").format('dddd, DD MMMM yyyy')} </h3>
            <h4 className='title'>{article.title}</h4>
            <div className='image-container'>
                <button
                    name="prev" 
                    className='prev-button'
                    onClick={onClick}
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
                    name="next" 
                    className='next-button'
                    onClick={onClick}
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