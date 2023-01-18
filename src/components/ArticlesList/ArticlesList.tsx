import React, { FC } from 'react';
import { IArticle } from '../../types/types';
import Filter from '../Filter/Filter';
import CardItem from '../CardItem/CardItem';
import { useAppSelector } from '../../hook';


interface ArticlesListProps {
    articles: IArticle[];
}

const ArticlesList: FC<ArticlesListProps> = ({ articles }) => {
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

    return (
        <div>
            <Filter results={articlesFilter().length} />
            <CardItem articles={articlesFilter()} />
        </div>
    )
}

export default ArticlesList;