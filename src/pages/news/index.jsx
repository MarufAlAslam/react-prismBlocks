import React from 'react'
import NewsHero from '../../components/news-hero'
import NewsFeatured from '../../components/news-featured'
import NewsCards from '../../components/news-cards'

const News = () => {
    return (
        <>
            <NewsHero />
            <NewsFeatured />
            <NewsCards />
        </>
    )
}

export default News