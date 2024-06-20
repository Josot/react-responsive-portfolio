import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillsList from "../../common/SkillsList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="SQL" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="Python" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="Lua" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="C#" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="HTML" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="CSS" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="JavaScript" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="React" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="Git" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="Scrum" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="Agile" />
        <SkillsList src={checkMarkIcon} alt="Checkmark" skill="Jira" />
      </div>
    </section>
  );
}

export default Skills;
