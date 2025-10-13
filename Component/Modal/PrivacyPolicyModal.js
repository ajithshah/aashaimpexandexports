import React from 'react';
import styles from './Modal.module.css';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Privacy Policy</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.policyContent}>
            <h3>1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you contact us,
              request information, or use our services. This may include your name, email address,
              phone number, company information, and any other information you choose to provide.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, and promotions</li>
            </ul>

            <h3>3. Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy. We may share your information
              with trusted third parties who assist us in operating our website or conducting our business.
            </p>

            <h3>4. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>

            <h3>5. Cookies</h3>
            <p>
              Our website may use cookies to enhance your browsing experience. You can control
              cookie settings through your browser preferences.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: info@aashaimpexandexports.com<br />
              Phone: +91 8879811876<br />
              Address: F8, First floor, Washington plaza, Mumbai - 400104 (INDIA)
            </p>

            <h3>7. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
