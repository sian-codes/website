import '../styling/technologyView.css';

const technologies = ['Kotlin', 'Android', 'Jetpack Compose', 'Mobile SDKs', 'Microservices', 'APIs', 'Software architecture', 'Java', 'React', 'TypeScript', 'AWS', 'Docker'];
const strengths = [
    {
        title: 'Microservices',
        description: 'Experience building and maintaining microservices in a FinTech environment.',
    },
    {
        title: 'APIs & integration',
        description: 'API experience alongside mobile SDK development, connecting applications and services.',
    },
    {
        title: 'Frontend Community of Practice',
        description: 'Contributing to the FE CoP, sharing knowledge and learning with fellow frontend engineers.',
    },
];

const TechnologyView = () => (
    <section className="technology-view" aria-labelledby="tech-title">
        <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2 id="tech-title">Good ideas. The right tools.</h2>
        </div>
        <ul className="tech-list">{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
        <div className="engineering-strengths">
            {strengths.map(strength => (
                <article className="engineering-strength" key={strength.title}>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                </article>
            ))}
        </div>
    </section>
);
export default TechnologyView;
