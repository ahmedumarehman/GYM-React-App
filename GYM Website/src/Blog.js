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
                    image="data:image/jpeg;base64,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"
                    content="Praise for PGC Gym: PGC Gym has truly transformed my fitness journey. The trainers are dedicated, the facilities are top-notch, and the community support is unparalleled. I'm grateful to be part of such an inspiring fitness family!"
                />
                <BlogPost
                    title="My Life Changed After Going To PGC Gym"
                    author="Jane Smith"
                    date="January 20, 2024"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyykuVUkF5PRAnPNPkLcYAfY_SI7RRJJL1oQ&s"
                    content="Praise for PGC Gym: I've been a member of PGC Gym for years, and it's been an incredible journey. The trainers push me to reach my potential, the classes are invigorating, and the positive atmosphere keeps me motivated. Thank you, PGC Gym, for helping me become the best version of myself!"
                />
                <BlogPost
                    title="Best Equipment In Gym"
                    author="Alex Johnson"
                    date="March 25, 2024"
                    image="data:image/jpeg;base64,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"
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
