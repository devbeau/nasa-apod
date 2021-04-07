import Navbar from './Navbar';

function Header ({setArticle, todaysDate}) {

    return (
        <header>
            <h1> Astronomy Picture of the Day </h1>
            <Navbar setArticle={setArticle} todaysDate={todaysDate} />
        </header>
    )
}

export default Header;