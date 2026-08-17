import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, techStack, image, link }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <article className="project-card">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                
                <div className="project-tech">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                {expanded && (
                    <div className="project-details-expanded">
                        <p><strong>Deployment Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
                        <p>This is a custom built system designed to solve resource orchestration challenges, incorporating automated pipelines and robust validation frameworks.</p>
                    </div>
                )}
            </div>

            <div className="project-buttons" style={{ marginTop: '20px' }}>
                <button onClick={toggleExpand}>
                    {expanded ? 'Hide Details' : 'Expand Info'}
                </button>
                <Link to={`/projects/${id}`}>
                    Full View
                </Link>
            </div>
        </article>
    );
}
