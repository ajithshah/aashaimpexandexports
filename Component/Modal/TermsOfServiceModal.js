import React from 'react';
import styles from './Modal.module.css';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
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
          <h2 className={styles.modalTitle}>Terms of Service</h2>
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
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using A A Sha Impex and Exports website and services,
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h3>2. Use License</h3>
            <p>
              Permission is granted to temporarily access the materials on our website for
              personal, non-commercial transitory viewing only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h3>3. Services</h3>
            <p>
              Our services include import-export consultation, logistics support, trade documentation,
              and related business services. All services are provided subject to availability and
              our standard terms and conditions.
            </p>

            <h3>4. User Responsibilities</h3>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when contacting us</li>
              <li>Use our services for lawful purposes only</li>
              <li>Not engage in any activity that could harm our business or reputation</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h3>5. Limitation of Liability</h3>
            <p>
              In no event shall A A Sha Impex and Exports be liable for any damages arising out of
              the use or inability to use our website or services. We shall not be liable for any
              indirect, special, incidental, or consequential damages.
            </p>

            <h3>6. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the
              laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts
              in Mumbai, Maharashtra.
            </p>

            <h3>7. Contact Information</h3>
            <p>
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <p>
              Email: info@aashaimpexandexports.com<br />
              Phone: +91 8879811876<br />
              Address: F8, First floor, Washington plaza, Mumbai - 400104 (INDIA)
            </p>

            <h3>8. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting on our website.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
