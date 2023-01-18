import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { IArticle } from '../../types/types';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'
import { useAppSelector } from '../../hook';
import './CardItem.scss';

interface CardItemProps {
    articles: IArticle[];
}

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
    }
});

const CardItem: FC<CardItemProps> = ({ articles }) => {
    const inputValue = useAppSelector(state => state.search);

    function inputToReg(value: string) {
        if (value.trim().length < 1) {
            return new RegExp('dklfgs');
        }
        return new RegExp(`${value.trim().replace(/\s\s+/g, ' ').split(' ').join('|')}`, "gi");
    }

    return (
        <div className="articles-list">
            {articles.map(article =>
                <div key={article.id} className="card">
                    <ThemeProvider theme={theme}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={article.imageUrl}
                                height="217"
                                image={article.imageUrl}
                            />
                            <CardContent>
                                <Typography className="articles-list__title" gutterBottom variant="h6" component="span">
                                    <HighlightWithinTextarea
                                        value={article.title}
                                        highlight={inputToReg(inputValue.inputSearch)}
                                    />
                                </Typography>
                                <Typography className="articles-list__summary" variant="body2" color="text.secondary" component="span">
                                    <HighlightWithinTextarea
                                        value={article.summary.length > 100 ? article.summary.substring(0, 99) + "..." : article.summary}
                                        highlight={inputToReg(inputValue.inputSearch)}
                                    />
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
    )
}

export default CardItem;