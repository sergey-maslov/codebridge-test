import React, { FC } from 'react';
import { IArticle } from '../../types/types';
import Filter from '../Filter/Filter';
import CardItem from '../CardItem/CardItem';

interface ArticlesListProps {
    articles: IArticle[];
}

const ArticlesList: FC<ArticlesListProps> = ({ articles }) => {

    return (
        <div>
            <Filter results={articles.length}/>
            <CardItem articles={articles} />
        </div>
    )
}

export default ArticlesList;