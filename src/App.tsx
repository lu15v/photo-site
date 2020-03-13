import React from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './containers/CardContainer';
import {ImageData} from './typings';
import Footer from './components/Footer';

const cards: ImageData[] = [
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1},
  {title: "picture 1", img: "https://i.picsum.photos/id/159/500/250.jpg", author: "author", cols: 3},
  {title: "picture 2", img: "https://i.picsum.photos/id/151/500/250.jpg",  author: "author", cols: 2},
  {title: "picture 3", img: "https://i.picsum.photos/id/156/300/450.jpg",  author: "author", cols: 1}
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
