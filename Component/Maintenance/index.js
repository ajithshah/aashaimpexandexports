import Meta from "@/Component/Meta";
import styles from "@/styles/Maintenance.module.css";

export default function Maintenance() {
  return (
    <>
      <Meta
        title="Under Maintenance | A A Sha Impex and Exports"
        description="Our website is currently undergoing scheduled maintenance. We will be back shortly."
        noindex={true}
        url="https://aashaimpexandexports.com/maintenance"
      />

      <div className={styles.wrapper}>
        {/* Animated background blobs */}
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />

        <div className={styles.card}>
          {/* Logo / Brand */}
          <div className={styles.brand}>
            <span className={styles.brandPrimary}>AA</span>
            <span className={styles.brandSecondary}>SHA</span>
          </div>

          {/* Gear icon */}
          <div className={styles.iconWrap}>
            <svg
              className={styles.gearIcon}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M32 20a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M32 4v6M32 54v6M4 32h6M54 32h6M10.1 10.1l4.24 4.24M49.66 49.66l4.24 4.24M10.1 53.9l4.24-4.24M49.66 14.34l4.24-4.24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className={styles.heading}>Under Maintenance</h1>

          <p className={styles.subheading}>
            We&apos;re upgrading our systems to serve you better.
            <br />
            We&apos;ll be back shortly.
          </p>

          <div className={styles.divider} />

          <p className={styles.contact}>
            For urgent inquiries, reach us at:
          </p>

          <div className={styles.contactLinks}>
            <a href="tel:+919444455626" className={styles.contactBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.16 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 94444 55626
            </a>

            <a href="mailto:aashaimpexandexports@gmail.com" className={styles.contactBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              aashaimpexandexports@gmail.com
            </a>
          </div>

          <p className={styles.footer}>
            &copy; {new Date().getFullYear()} A A Sha Impex and Exports — Chennai, India
          </p>
        </div>
      </div>
    </>
  );
}
