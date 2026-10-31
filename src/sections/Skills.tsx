import '../styles/skills.css';

const technologies = ['Kotlin', 'Android', 'Jetpack Compose', 'Mobile SDKs', 'Microservices', 'APIs', 'Software architecture', 'Java', 'React', 'TypeScript', 'AWS', 'Docker'];
const strengths = [
    {
        title: 'Microservices',
        description: 'Experience building and maintaining microservices in a FinTech environment.',
    },
    {
        title: 'APIs & integration',
        description: 'Experience working with APIs and integrating them into mobile SDKs.',
    },
    {
        title: 'Frontend Community of Practice',
        description: 'I take part in the FE CoP, sharing knowledge with other frontend engineers.',
    },
];

const Skills = () => (
    <section className="skills-section" aria-labelledby="tech-title">
        <div className="section-heading">
            <p className="eyebrow">TECHNOLOGIES</p>
            <h2 id="tech-title">Skills & experience</h2>
        </div>
        <ul className="tech-list">{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
        <div className="skill-areas">
            {strengths.map(strength => (
                <article className="skill-area" key={strength.title}>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                </article>
            ))}
        </div>
    </section>
);
export default Skills;
