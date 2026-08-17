import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
    return (
        <section id="projects-section" style={{ padding: '40px 0' }}>
            <div className="project-container">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}
