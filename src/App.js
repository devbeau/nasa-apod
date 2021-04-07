import './App.css';
import {useState, useEffect} from 'react';
import Header from './header/Header';
import Article from './article/Article';

function App() {
  const [article, setArticle] = useState({});

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=OJBYBxZyIS0a1o6hNglyEDwsyOSkDItP6XcxQvab")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArticle(data)
        })
    }, [])

  return (
    <div className="App">
      <Header setArticle={setArticle}/>
      <Article article={article} />
    </div>
  );
}

export default App;

//  {
//     "copyright": "Kristine Richer",
//     "date": "2021-04-06",
//     "explanation": "Is this just a lonely tree on an empty hill? To start, perhaps, but look beyond.  There, a busy universe may wait to be discovered. First, physically, to the left of the tree, is the planet Mars. The red planet, which is the new home to NASA's Perseverance rover, remains visible this month at sunset above the western horizon. To the tree's right is the Pleiades, a bright cluster of stars dominated by several bright blue stars. The featured picture is a composite of several separate foreground and background images taken within a few hours of each other, early last month, from the same location on Vinegar Hill in Milford, Nova Scotia, Canada. At that time, Mars was passing slowly, night after night, nearly in front of the distant Seven Sisters star cluster. The next time Mars will pass angularly as close to the Pleiades as it did in March will be in 2038.",
//     "hdurl": "https://apod.nasa.gov/apod/image/2104/MartianSisters_Rose_2000.jpg",
//     "media_type": "image",
//     "service_version": "v1",
//     "title": "Mars and the Pleiades Beyond Vinegar Hill",
//     "url": "https://apod.nasa.gov/apod/image/2104/MartianSisters_Rose_960.jpg"
// }

