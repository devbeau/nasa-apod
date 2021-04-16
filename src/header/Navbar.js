import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import ReactDatePicker from 'react-datepicker';

const FIRST_DATE = '1995-06-16'

function Navbar ({setArticle, todaysDate}) {

    const [date, setDate] = useState(todaysDate);

    useEffect(() => {
        let reqDate = '';
        if (date) {
            console.log(date)
            reqDate = format(date, "yyyy-MM-dd");
        }

        fetch(
            'https://api.nasa.gov/planetary/apod'
            + '?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab'
            + "&date=" + reqDate
        )
        .then(res => res.json())
        .then(data => {
            setArticle(data);
        })
        .catch(error => console.log(error));
    }, [date, setArticle]);
    
    function onChange (date) {
        return setDate(date);
    }

    function onClick () {
        setDate(parseISO(todaysDate));
    }

    return (
        <nav className='header-nav'>
            <Link to='/'>
                <button 
                    className='header-nav-a home-button'
                    onClick={() => onClick()}
                >
                    Today's Picture
                </button>
            </Link>

            <Link to='/gallery'>
                <button className='header-nav-a'>
                    This Week
                </button>
            </Link>

            <ReactDatePicker
                selected={date}
                onChange={date => onChange(date)}
                dateFormat="yyyy-MM-dd"
                maxDate={parseISO(todaysDate)}
                minDate={parseISO(FIRST_DATE)}
            />          
        </nav>
    )
}

export default Navbar;