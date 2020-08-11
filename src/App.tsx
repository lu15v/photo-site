import React from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './containers/CardContainer';
import {ImageData} from './typings';
import Footer from './components/Footer';

const cards: ImageData[] = [
  {id: "1", title: "picture 1", img: "http://lorempixel.com/500/250/sports/7/", author: "author", cols: 3},
  {id: "2", title: "picture 2", img: "http://lorempixel.com/500/250/city/1/",  author: "author", cols: 2},
  {id: "3", title: "picture 3", img: "http://lorempixel.com/300/450/animals/1/",  author: "author", cols: 1},
  {id: "4", title: "picture 1", img: "http://lorempixel.com/500/250/sports/2/", author: "author", cols: 3},
  {id: "5", title: "picture 2", img: "http://lorempixel.com/500/250/city/2/",  author: "author", cols: 2},
  {id: "6", title: "picture 3", img: "http://lorempixel.com/300/450/animals/2/",  author: "author", cols: 1},
  {id: "7", title: "picture 1", img: "http://lorempixel.com/500/250/sports/1/", author: "author", cols: 3},
  {id: "8", title: "picture 2", img: "http://lorempixel.com/500/250/city/3/",  author: "author", cols: 2},
  {id: "9", title: "picture 3", img: "http://lorempixel.com/300/450/animals/3/",  author: "author", cols: 1},
  {id: "10", title: "picture 1", img: "http://lorempixel.com/500/250/sports/3/", author: "author", cols: 3},
  {id: "11", title: "picture 2", img: "http://lorempixel.com/500/250/city/4/",  author: "author", cols: 2},
  {id: "12", title: "picture 3", img: "http://lorempixel.com/300/450/animals/4/",  author: "author", cols: 1},
  {id: "13", title: "picture 1", img: "http://lorempixel.com/500/250/sports/3/", author: "author", cols: 3},
  {id: "14", title: "picture 2", img: "http://lorempixel.com/500/250/city/5/",  author: "author", cols: 2},
  {id: "15", title: "picture 3", img: "http://lorempixel.com/300/450/animals/5/",  author: "author", cols: 1},
  {id: "16", title: "picture 1", img: "http://lorempixel.com/500/250/sports/5/", author: "author", cols: 3},
  {id: "17", title: "picture 2", img: "http://lorempixel.com/500/250/city/6/",  author: "author", cols: 2},
  {id: "18", title: "picture 3", img: "http://lorempixel.com/300/450/animals/9/",  author: "author", cols: 1},
  {id: "19", title: "picture 1", img: "http://lorempixel.com/500/250/sports/6/", author: "author", cols: 3},
  {id: "20", title: "picture 2", img: "http://lorempixel.com/500/250/city/7/",  author: "author", cols: 2},
  {id: "21", title: "picture 3", img: "http://lorempixel.com/300/450/animals/7/",  author: "author", cols: 1},
  {id: "22", title: "picture 1", img: "http://lorempixel.com/500/250/sports/8/", author: "author", cols: 3},
  {id: "23", title: "picture 2", img: "http://lorempixel.com/500/250/city/8/",  author: "author", cols: 2},
  {id: "24", title: "picture 3", img: "http://lorempixel.com/300/450/animals/8/",  author: "author", cols: 1}
]

function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer contentList={cards}/>
      <Footer/>
    </div>
  );
}

export default App;
