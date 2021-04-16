import React from 'react';
import {useHistory} from 'react-router-dom';

function Card({article, setArticle}) {
    const history = useHistory();

    function onClick (e) {
        setArticle(article)
        history.push('/')
    }

    return (
            <div className='thumbnail-container'>
                {article.date}
                <img 
                src={article.thumbnail_url 
                        ? article.thumbnail_url
                        : article.url
                    } 
                alt={article.title}
                onClick={e => onClick(e)} />
                <div className='thumbnail-title'>
                    {article.title}
                </div>
            </div>
    )
}

export default Card;