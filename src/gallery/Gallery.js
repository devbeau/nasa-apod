import {useState, useEffect} from 'react';
import moment from 'moment';
import Cards from './Cards';

const FIRST_DATE = '1995-06-16'

function Gallery({todaysDate, setArticle}) {
    const [articles, setArticles] = useState([]);
    const [dateValues, setDateValues] = useState({
        endDate: todaysDate,
        startDate: moment(todaysDate, 'YYYY-MM-DD').subtract(7, 'days').format('YYYY-MM-DD') 
    });
    let {startDate, endDate} = dateValues;

    function onChange(e) {
        const {name, value} = e.target;

        if (name === 'startDate' && moment(value).isAfter(endDate)) {
            return setDateValues({...dateValues, startDate: endDate})
        }
        if (name === 'startDate' && moment(value).isBefore(FIRST_DATE)) {
            return setDateValues({...dateValues, startDate: FIRST_DATE})
        }
        if (name === 'endDate' && moment(value).isBefore(startDate)) {
            return setDateValues({...dateValues, endDate: startDate})
        }
        if (name === 'endDate' && moment(value).isAfter(todaysDate)) {
            return setDateValues({...dateValues, endDate: todaysDate})
        }
        
        return setDateValues({...dateValues, [name]: value}) 
    }
    
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod'
            + '?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab'
            + '&start_date=' + startDate
            + '&end_date=' + endDate
            + '&thumbs=True' 
        )
        .then(res => res.json())
        .then(data => setArticles(data))
        .catch(error => console.log(error))

    }, [startDate, endDate])

    return (
        <div className='gallery-container'>
            <input 
                id='start-date-picker'
                name='startDate'
                className='gallery-dateinput'
                type='date'
                value={startDate}
                onChange={e => onChange(e)}
            />
            <input 
                id='end-date-picker'
                name='endDate'
                className='gallery-dateinput'
                type='date'
                value={endDate}
                onChange={e => onChange(e)}
            />
            {articles && <Cards articles={articles} setArticle={setArticle} />}
        </div>
    )
}

export default Gallery;