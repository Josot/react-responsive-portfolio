import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com"
          h3="viberr"
          alt="Viberr logo project"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com"
          h3="Fresh burger"
          alt="Frsh burger logo project"
          p="Order a Fresh Burger App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com"
          h3="Hipsster"
          alt="Hipsster logo project"
          p="Social Media App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com"
          h3="Workout Tracker"
          alt="FitLift logo project"
          p="Workout Tracker App"
        />
      </div>
    </section>
  );
}

export default Projects;
