import {useState, useEffect} from 'react';
import moment from 'moment';
import Cards from './Cards';

function Gallery({todaysDate}) {
    console.log(todaysDate)
    // below state for error handling
    // const [isStartActive, setStartActive] = useState(false);
    // const [isEndActive, setEndActive] = useState(false);
    const [articles, setArticles] = useState([]);
    const [dateValues, setDateValues] = useState({
        endDate: todaysDate,
        startDate: moment(todaysDate, 'YYYY-MM-DD').subtract(7, 'days').format('YYYY-MM-DD') 
    });

    
    function onChange(e) {
        const {name, value} = e.target;
        // error handling for date ranges goes here
        setDateValues({...dateValues, [name]: value}) 
    }
    
    let {startDate, endDate} = dateValues;
    
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod'
            + '?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab'
            + '&start_date=' + startDate
            + '&end_date=' + endDate
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
            {articles && <Cards articles={articles} />}
        </div>
    )
}

export default Gallery;