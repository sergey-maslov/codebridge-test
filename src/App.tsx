import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList/ArticlesList';
import axios from 'axios';
import { IArticle } from './types/types';
import './App.scss';
import ArticlePage from './components/ArticlePage/ArticlePage';
import { useAppSelector } from './hook';

function App() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const inputValue = useAppSelector(state => state.search.inputSearch.toLowerCase());

  function articlesFilter() {
    const reg = new RegExp(`${inputValue.trim().replace(/\s\s+/g, ' ').split(' ').join('|')}`, "gi");
    let filteredArray = [];
    for (let article of articles) {
      if (article.title.match(reg) && filteredArray.filter(item => item.id === article.id).length === 0) {
        filteredArray.push(article);
      }
    }
    for (let article of articles) {
      if (article.summary.substring(0, 99).match(reg) && filteredArray.filter(item => item.id === article.id).length === 0) {
        filteredArray.push(article);
      }
    }
    return filteredArray;
  }

  async function fetchData() {
    try {
      const response = await axios.get<IArticle[]>('https://api.spaceflightnewsapi.net/v3/articles')
      setArticles(response.data)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<ArticlesList articles={articlesFilter()} />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;