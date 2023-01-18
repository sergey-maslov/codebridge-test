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
  const inputValue = useAppSelector(state => state.search.inputSearch.toUpperCase());

  function articlesFilter() {
    const filteredArrayTitles = articles.filter(item => item.title.toUpperCase().includes(inputValue));
    const filteredArraySummary = articles.filter(item => !item.title.toUpperCase().includes(inputValue)).filter(item => item.summary.substring(0, 99).toUpperCase().includes(inputValue))
    return [...filteredArrayTitles, ...filteredArraySummary];
  }

  async function fetchData() {
    try {
      const response = await axios.get<IArticle[]>('https://api.spaceflightnewsapi.net/v3/articles')
      setArticles(response.data)
      console.log("fetched!");
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