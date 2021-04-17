import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import {format, parseISO} from 'date-fns';
import sub from 'date-fns/sub';
import Cards from './Cards';

const FIRST_DATE = '1995-06-16'

function Gallery({todaysDate, setArticle}) {
    const [articles, setArticles] = useState([]);
    const [dateValues, setDateValues] = useState({
        endDate: parseISO(todaysDate),
        startDate: sub(parseISO(todaysDate), {"days": 7})
    });
    let {startDate, endDate} = dateValues;

    function onChange(startDate, endDate) {

        return setDateValues({startDate, endDate}) 
    }
    
    useEffect(() => {
        console.log(startDate, endDate)
        let startDateReq = startDate 
            ? format(startDate, 'yyyy-MM-dd') 
            : ''
        let endDateReq = endDate 
            ? format(endDate, 'yyyy-MM-dd') 
            : ''

        console.log(startDate, startDateReq, endDate, endDateReq)
        fetch('https://api.nasa.gov/planetary/apod'
            + '?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab'
            + '&start_date=' + startDateReq
            + '&end_date=' + endDateReq
            + '&thumbs=True' 
        )
        .then(res => res.json())
        .then(data => setArticles(data))
        .catch(error => console.log(error))

    }, [startDate, endDate, todaysDate])

    return (
        <div className='gallery-container'>
            <DatePicker
                selected={endDate}
                onChange={([startDate, endDate]) => onChange(startDate, endDate)}
                startDate={startDate}
                endDate={endDate}
                maxDate={parseISO(todaysDate)}
                minDate={parseISO(FIRST_DATE)}
                selectsRange
                inline
                shouldCloseOnSelect={false}
            />
            {/* <input 
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
            /> */}
            {articles && <Cards articles={articles} setArticle={setArticle} />}
        </div>
    )
}

export default Gallery;