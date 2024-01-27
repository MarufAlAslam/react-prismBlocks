import React from 'react'
import blogImg from "../../assets/img/blog-img.png"
import NewsCard from './news-card'

const NewsCards = () => {

    const data = [
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
        {
            date: '19 Jan 2024',
            img: blogImg,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking.',
        },
    ]
    return (
        <div className='news-cards py-[50px]'>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        data.map((item, index) => (
                            <NewsCard key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsCards