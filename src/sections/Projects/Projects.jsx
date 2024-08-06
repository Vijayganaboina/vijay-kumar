import styles from './ProjectsStyles.module.css';
import AmazonClone from '../../assets/Amazon-Logo.jpg';
import NikeLandingPage from '../../assets/NikeLandingPage.jpg';
import NewsPortal from '../../assets/News-portal.jpg';
import GithubRepos from '../../assets/github-repos.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={NikeLandingPage}
          link="https://github.com/Vijayganaboina/Nike-landing-page"
          h3="Shoes"
          p="Nike Landing Page"
        />
        <ProjectCard
          src={NewsPortal}
          link="https://github.com/Vijayganaboina/react-news-portal"
          h3="Latest News"
          p="News Portal"
        />
        <ProjectCard
          src={GithubRepos}
          link="https://github.com/Vijayganaboina/github-repositories-listing-page"
          h3="Github"
          p="Github repos Listing Page"
        />
        <ProjectCard
          src={AmazonClone}
          link="https://github.com/Vijayganaboina/Amazon-clone"
          h3="Amazon"
          p="Amazon Clone"
        />
      </div>
    </section>
  );
}

export default Projects;