import '../styles/experience.css';

const roles = [
    {
        title: 'Senior Associate Software Engineer',
        period: 'Oct 2026 – Present',
        start: '2026-10',
        end: null,
        employer: 'Global Payments',
        focus: 'Android & mobile payment SDKs',
    },
    {
        title: 'Software Engineer',
        period: 'Sep 2023 – Oct 2026',
        start: '2023-09',
        end: '2026-10',
        employer: 'Worldpay',
        focus: 'Android & mobile SDKs',
    },
    {
        title: 'Graduate Software Engineer',
        period: 'Sep 2021 – Sep 2023',
        start: '2021-09',
        end: '2023-09',
        employer: 'Worldpay',
        focus: null,
    },
];

const Experience = () => (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
            <p className="eyebrow">CAREER</p>
            <h2 id="experience-title">Work history</h2>
        </div>
        <p className="experience-intro">From graduate engineer at Worldpay to Senior Associate Software Engineer, now at Global Payments.</p>
        <ol className="career-timeline" aria-label="Career history, most recent first">
            {roles.map(role => (
                <li className="career-role" key={role.start}>
                    <p className="career-period">
                        <time dateTime={role.start}>{role.period.split(' – ')[0]}</time>
                        {' – '}
                        {role.end ? <time dateTime={role.end}>{role.period.split(' – ')[1]}</time> : 'Present'}
                    </p>
                    <div className="career-details">
                        <h3>{role.title}</h3>
                        <p className="career-employer">{role.employer}</p>
                        {role.focus && <p className="career-focus">{role.focus}</p>}
                    </div>
                </li>
            ))}
        </ol>
    </section>
);

export default Experience;
