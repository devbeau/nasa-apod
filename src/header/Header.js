import Navbar from './Navbar';

function Header ({setArticle}) {

    return (
        <header>
            <h1> Astronomy Picture of the Day </h1>
            <Navbar setArticle={setArticle}/>
        </header>
    )
}

export default Header;