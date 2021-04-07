import {useState, useEffect} from 'react';

function Navbar ({setArticle}) {

    const [date, setDate] = useState('');

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
        setDate(value);
        console.log(date);
    }

    function onClick () {
        setDate('');
    }

    return (
        <nav className='header-nav'>
            <button 
                className='header-nav-a home-button'
                onClick={() => onClick()}
            >
                Today's Picture
            </button>
            <button className='header-nav-a'>
                This Week
            </button>
            <input 
                id='date-picker'
                className='header-textinput'
                type='date'
                value={date}
                onChange={e => onChange(e)}
            />
        </nav>
    )
}

export default Navbar