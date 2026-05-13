import styles from "./Launching.module.css";

const Launching = () => {
  return (
    <div className={styles.launchingBg}>
      <div className={styles.glassBox}>
        <div className={styles.centerContent}>
          <img
            src="/logo.png"
            alt="A A Sha Impex and Exports Logo"
            className={styles.logoGlow}
          />
          <h1 className={styles.launchingTitle}>House of Electrical Insulation</h1>
          <p className={styles.companyName}>A A Sha Impex and Exports</p>
          <p className={styles.description}>
            Authorised Importer and Stockist of Electrical Insulation Materials
            since 1972.
            <br />
            Our new website is coming soon!
          </p>
          <nav className={styles.socialNav}>
            <a
              href="https://wa.me/+918122816789?text=Hello%2C%20I%20am%20interested%20in%20your%20import%20and%20export%20services."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Launching;
