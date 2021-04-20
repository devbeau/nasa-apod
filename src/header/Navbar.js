import React, {useState, useEffect, forwardRef} from 'react';
import {Link} from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faImages, faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";

const FIRST_DATE = '1995-06-16'

function Navbar ({setArticle, todaysDate}) {

    const [date, setDate] = useState(todaysDate);

    useEffect(() => {
        let reqDate = date ? format(date, "yyyy-MM-dd") : '';
        
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
    };

    function onClick () {
        setDate(parseISO(todaysDate));
    };

    const IconDatePicker = forwardRef(({onClick}, ref) => (
        <FontAwesomeIcon
            icon={faCalendarDay}
            onClick={onClick}
            ref={ref}
        />
    ));
    
    return (
        <nav className='header-nav'>
            <Link to='/'>
                <FontAwesomeIcon
                    icon={faHome} 
                    onClick={onClick} 
                /> 
            </Link>

            <Link to='/gallery'>
                <FontAwesomeIcon
                    icon={faImages}
                />
            </Link>

            <ReactDatePicker
                selected={date}
                onChange={date => onChange(date)}
                maxDate={parseISO(todaysDate)}
                minDate={parseISO(FIRST_DATE)}
                customInput={<IconDatePicker />}
            />          
        </nav>
    )
}

export default Navbar;