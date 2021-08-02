import React from 'react';

import styles from "./Footer.module.scss"

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Developer: <span className={styles.nameDev}>Vladislaw Zaychenko</span></p>
        </footer>
    );
}

export default Footer;