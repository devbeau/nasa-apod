import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './header/Header';
import Article from './article/Article';
import Gallery from './gallery/Gallery';
import {Route} from 'react-router';

function App() {
  const [article, setArticle] = useState({});
  const [todaysDate, setTodaysDate] = useState('');

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab&thumbs=True')
        .then(res => res.json())
        .then(data => {
            setArticle(data);
            setTodaysDate(data.date);
        })
    }, [])

  return (
    <div className="App">

      <Header setArticle={setArticle} todaysDate={todaysDate}/>

      <Route exact path='/'>
        <Article article={article} setArticle={setArticle} todaysDate= {todaysDate} />
      </Route>

      <Route exact path='/gallery'>
        <Gallery todaysDate={todaysDate} setArticle={setArticle}/>
      </Route>

    </div>
  );
}

export default App;