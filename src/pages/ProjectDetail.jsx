import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
    const { projectId } = useParams();
    
    // Find the corresponding project details in projects.js
    const project = projects.find(p => p.id === projectId);

    // If project is not found, handle it gracefully
    if (!project) {
        return (
            <section className="container detail-container" style={{ padding: '140px 20px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Project Not Found</h2>
                <p style={{ marginBottom: '30px' }}>The project ID you are trying to view does not exist or has been relocated.</p>
                <Link to="/projects" className="btn">
                    Back to Projects
                </Link>
            </section>
        );
    }

    return (
        <section className="container detail-container">
            <Link to="/projects" className="detail-back">
                ← Back to Projects
            </Link>

            <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="detail-image"
            />

            <div className="detail-header">
                <h1>{project.title}</h1>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                    Visit GitHub Codebase
                </a>
            </div>

            <div className="detail-tech-list">
                {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>

            <div className="detail-description">
                <p style={{ marginBottom: '20px' }}>{project.description}</p>
                <p>
                    This is an advanced developmental assignment built in the context of Full Stack Development.
                    It follows standard production conventions, modular architectures, component-scoped states,
                    and clean routing mechanisms. Development was driven by strict design patterns and 
                    robust structural frameworks.
                </p>
            </div>
        </section>
    );
}
