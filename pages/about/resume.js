import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import Experience from '../../components/resume/experience';

import resumeStyles from './resume.module.scss';

import experience from './resume-data.json';

export default function Me(props) {
    let experience = props.experienceJSON.experince;

    return (
        <Layout>
            <h1>Resume</h1>
            <Row>
                <Col md={9} xs={12}>
                    <p>
                        Web Developer with 10+ years experience. Writing clean, concise code with
                        test coverage is paramount. I take pride in being easy to work and
                        communicate with.
                    </p>
                    <h2 className={resumeStyles.header}>Experience</h2>
                    {experience.map((data) => {
                        return <Experience key={data.company} data={data} />;
                    })}
                </Col>
                <Col className={resumeStyles.skills} md={3} xs={12}>
                    <h2 className={resumeStyles.header}>HARD SKILLS</h2>
                    Javascript/ES6 ReactJS Node.js Ruby on Rails Electron Postgres MySQL NoSQL
                    Firebase AWS/S3 CSS, SCSS, SASS CERTIFICATES Certified SCRUM Master, ColabNet
                </Col>
            </Row>
        </Layout>
    );
}

function getExperience() {
    return experience;
}

export async function getStaticProps() {
    let experience = getExperience();

    return {
        props: {
            experienceJSON: JSON.parse(JSON.stringify(experience))
        }
    };
}

Me.propTypes = {
    experienceJSON: PropTypes.object
    // post: PropTypes.array
};
