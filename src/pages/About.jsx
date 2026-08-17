import React from 'react';

export default function About() {
    const skillsList = [
        {
            category: "Programming Languages",
            tags: ["C", "C++", "Java", "Python", "JavaScript", "SQL"]
        },
        {
            category: "MERN Stack",
            tags: ["MongoDB", "Express.js", "React.js", "Node.js"]
        }
    ];

    return (
        <section id="about" className="container" style={{ paddingTop: '120px' }}>
            <div className="section-title">
                <h2>About Me</h2>
                <span></span>
            </div>

            <div className="about-content" style={{ marginBottom: '60px' }}>
                <div className="about-card">
                    <h3>Education & Background</h3>
                    <p>
                        I am currently pursuing my B.Tech in Computer Science and Engineering at NIT Warangal. 
                        My coursework and personal studies focus on programming, algorithms, databases, and general software design principles.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Technical Focus</h3>
                    <p>
                        I build applications using the MERN stack. I write JavaScript across the frontend (React) and backend (Node.js & Express), 
                        and work with databases like MongoDB and SQL to store and retrieve data.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Interests & Projects</h3>
                    <p>
                        I like working on web-based projects that address practical tasks, such as managing college workflows or tracking inventory. 
                        I am also interested in experimenting with API integrations and basic machine learning features in web apps.
                    </p>
                </div>
            </div>

            <div className="section-title" style={{ marginTop: '80px' }}>
                <h2>Skills</h2>
                <span></span>
            </div>

            <div className="skills-wrapper">
                {skillsList.map((skillGroup, index) => (
                    <div className="skill-box" key={index}>
                        <h3>{skillGroup.category}</h3>
                        <div className="skill-tags">
                            {skillGroup.tags.map((tag, tagIndex) => (
                                <span key={tagIndex}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-title" style={{ marginTop: '80px' }}>
                <h2>Education</h2>
                <span></span>
            </div>

            <div className="education-card">
                <h3>National Institute of Technology Warangal</h3>
                <h4>Bachelor of Technology</h4>
                <p>Computer Science and Engineering</p>
                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>2024 – Present</p>
            </div>
        </section>
    );
}
