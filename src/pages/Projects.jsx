import React from 'react';
import { projects } from '../data/projects';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
    return (
        <section id="projects" className="container" style={{ paddingTop: '120px' }}>
            <div className="section-title">
                <h2>Projects</h2>
                <span></span>
            </div>
            
            {/* Level 0 of prop drilling: Page passes 'projects' list down to the Section Component */}
            <ProjectsSection projects={projects} />
        </section>
    );
}
