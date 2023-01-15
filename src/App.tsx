import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import axios from 'axios';
import { IArticle } from './types/types';
import './App.scss';
import ArticlePage from './components/ArticlePage';

function App() {
  const [articles, setArticles] = useState<IArticle[]>([]);

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
        <Route path="/" element={<ArticlesList articles={articles} />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
