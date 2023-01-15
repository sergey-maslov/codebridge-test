import React, { useState, useEffect, FC } from 'react';
import { IArticle } from '../types/types';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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
        <div>
            <div>{article?.title}</div>
            <img src={article?.imageUrl} alt={article?.title}/>
            <div>{article?.summary}</div>
            <div> <button onClick={() => navigate('/')}>Back to homepage</button></div>
        </div>
    )
}

export default ArticlePage;