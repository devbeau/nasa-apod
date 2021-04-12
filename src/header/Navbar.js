import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const FIRST_DATE = '1995-06-16'

function Navbar ({setArticle, todaysDate}) {

    const [date, setDate] = useState(todaysDate);

    useEffect(() => {
        fetch(
            'https://api.nasa.gov/planetary/apod'
            + '?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab'
            + "&date=" + date
        )
        .then(res => res.json())
        .then(data => {
            setArticle(data);
        })
        .catch(error => console.log(error));
    }, [date, setArticle]);
    
    function onChange (e) {
        const {value} = e.target;
        if (moment(value).isAfter(todaysDate)) {
            return setDate(todaysDate)
        } else if (moment(value).isBefore(FIRST_DATE)) {
            return setDate(FIRST_DATE)
        }
        return setDate(value);
    }

    function onClick () {
        setDate(todaysDate);
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

            <input 
                id='date-picker'
                name='datePicker'
                className='header-dateinput'
                type='date'
                value={date}
                onChange={e => onChange(e)}
            />
        </nav>
    )
}

export default Navbar