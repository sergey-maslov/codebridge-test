import React, { useState, useEffect, FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IArticle } from '../types/types';
import './ArticlePage.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import axios from 'axios';

const ArticlePage: FC = () => {
    const [article, setArticle] = useState<IArticle | null>(null)
    const params = useParams();
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await axios.get<IArticle>('https://api.spaceflightnewsapi.net/v3/articles/' + params.id)
            setArticle(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div className='article-page' style={{
            backgroundImage: "url(" + article?.imageUrl + ")",
        }}>
            <div className='article-page__content'>
                <div className='article-page__title'>{article?.title}</div>
                <div className='article-page__article'>{article?.summary}</div>
            </div>
            <div className='article-page__button'>
                <Button size="small" onClick={() => navigate('/')}><ArrowBackIcon />Back to homepage</Button>
            </div>
        </div>
    )
}

export default ArticlePage;