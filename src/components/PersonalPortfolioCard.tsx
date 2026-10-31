import InstaDupe from '../assets/instadupe.png';

const professionalProjects = [
    {
        title: 'Access Checkout Android',
        description: 'A payment SDK that helps developers integrate checkout into native Android applications.',
        contribution: 'I’ve contributed to ongoing maintenance as part of the team since joining Worldpay, now Global Payments.',
        tags: ['Android', 'Mobile SDK', 'Payments'],
        documentation: 'https://docs.worldpay.com/access/products/checkout/android',
    },
    {
        title: 'Access Checkout React Native',
        description: 'A checkout SDK that brings native payment capabilities to React Native applications.',
        contribution: 'I helped set up the React Native SDK using bridges to the existing iOS and Android SDKs, and have contributed to its ongoing maintenance as part of the team.',
        tags: ['React Native', 'Native bridges', 'iOS & Android'],
        documentation: 'https://docs.worldpay.com/access/products/checkout/react-native',
    },
];

const PersonalPortfolioCard = () => (
    <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="work-heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2 id="work-title">Software built together.</h2></div>
            <a className="text-link" href="https://github.com/sian-codes">Explore GitHub</a>
        </div>
        <h3 className="work-group-title">Professional work</h3>
        <p className="work-context">Team projects at Worldpay, now Global Payments.</p>
        <div className="professional-projects">
            {professionalProjects.map(project => (
                <article className="project-card professional-project" key={project.title}>
                    <div className="project-copy">
                        <p className="eyebrow">PAYMENTS / MOBILE SDK</p>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <h4 className="contribution-title">My contribution</h4>
                        <p>{project.contribution}</p>
                        <ul className="project-tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                        <a className="text-link" href={project.documentation}>View documentation</a>
                    </div>
                </article>
            ))}
        </div>
        <h3 className="work-group-title personal-work-title">Personal work</h3>
        <article className="project-card">
            <div className="project-image"><img src={InstaDupe} alt="Instagram interface clone showing its feed and navigation" loading="lazy" /></div>
            <div className="project-copy">
                <p className="eyebrow">FRONT-END EXPLORATION</p>
                <h3>Instagram UI Clone</h3>
                <p>A familiar interface, built from the components up. A styling and layout exercise recreating Instagram’s feed, profiles, navigation and stories with reusable React components.</p>
                <ul className="project-tags"><li>React</li><li>UI development</li><li>CSS</li></ul>
                <a className="text-link" href="https://github.com/sian-codes?tab=repositories">Browse my repositories</a>
            </div>
        </article>
    </section>
);
export default PersonalPortfolioCard;
