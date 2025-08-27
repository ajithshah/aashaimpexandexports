import styles from './Launching.module.css';

const Launching = () => {
  return (
    <div className={styles.launchingBg}>
      <div className={styles.glassBox}>
        <div className={styles.centerContent}>
          <img
            src="/logo.png"
            alt="Aasha Impex and Exports Logo"
            className={styles.logoGlow}
          />
          <h1 className={styles.launchingTitle}>
            LAUNCHING SOON
          </h1>
          <p className={styles.companyName}>
            Aasha Impex and Exports
          </p>
          <p className={styles.description}>
            Connecting global markets with quality products and reliable export-import solutions.<br />
            Our futuristic website is coming soon!
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
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
    </div>
  );
};

export default Launching;
