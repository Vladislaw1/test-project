import React from 'react';
import styles from "./Header.module.scss"

function Header(props) {
    return (
        <header className={styles.header}>
            <h1>ADMIN.BIKE-BOOKING.COM</h1>
        </header>
    );
}

export default Header;