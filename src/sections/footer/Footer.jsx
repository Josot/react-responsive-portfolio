import styles from "../footer/FooterStyles.module.css";

function footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Joost van Ewijk. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default footer;
