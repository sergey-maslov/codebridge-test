import React, { FC } from 'react';
import { IArticle } from '../types/types';
import './ArticlesList.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Filter from './Filter';
import { Link } from 'react-router-dom';

interface ArticlesListProps {
    articles: IArticle[];
}

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
    }
});

const ArticlesList: FC<ArticlesListProps> = ({ articles }) => {


    return (
        <div>
            <div>
                <Filter />
            </div>
            <div className="articles-list">
                {articles.map(article =>
                    <div key={article.id} className="card">
                        <ThemeProvider theme={theme}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="217"
                                    image={article.imageUrl}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.summary}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={'article/' + article.id}>
                                        <Button size="small">Read more <ArrowForwardIcon /></Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </ThemeProvider>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArticlesList;