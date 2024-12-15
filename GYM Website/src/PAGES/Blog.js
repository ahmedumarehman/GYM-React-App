import React from 'react';
import './blog.css'; // Import your CSS file

const BlogPost = ({ title, author, date, image, content }) => {
    return (
        <article>
            <h2>{title}</h2>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Date:</strong> {date}</p>
            <img src={image} alt="Blog Image" />
            <p>{content}</p>
        </article>
    );
}

const PgcGymBlog = () => {
    return (
        <div>
            <header>
                <h1>PGC Gym Blog</h1>
            </header>
            <main>
                <BlogPost
                    title="Best Gym Ever Experienced"
                    author="John Doe"
                    date="April 15, 2024"
                    image="beforeafter1.jpg"
                    content="Praise for PGC Gym: PGC Gym has truly transformed my fitness journey. The trainers are dedicated, the facilities are top-notch, and the community support is unparalleled. I'm grateful to be part of such an inspiring fitness family!"
                />
                <BlogPost
                    title="My Life Changed After Going To PGC Gym"
                    author="Jane Smith"
                    date="January 20, 2024"
                    image="beforeafter3.jpeg"
                    content="Praise for PGC Gym: I've been a member of PGC Gym for years, and it's been an incredible journey. The trainers push me to reach my potential, the classes are invigorating, and the positive atmosphere keeps me motivated. Thank you, PGC Gym, for helping me become the best version of myself!"
                />
                <BlogPost
                    title="Best Equipment In Gym"
                    author="Alex Johnson"
                    date="March 25, 2024"
                    image="beforeafter2.jpeg"
                    content="Praise for PGC Gym: PGC Gym has exceeded my expectations in every way. The staff's dedication to my fitness journey, the variety of workout options, and the sense of community make every visit enjoyable. I'm proud to be part of the PGC Gym family!"
                />
            </main>
            <footer>
                <p>&copy; 2024 PGC Gym. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default PgcGymBlog;
