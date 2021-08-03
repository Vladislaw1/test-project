import React from 'react';
import BikesList from "../BikesList";
import FormAddBike from "../FormAddBike";
import Statistic from "../Statistic";

import styles from "./Main.module.scss"

function Main(props) {
    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContentBikeList}>
                <BikesList/>
            </div>
            <div className={styles.mainContentStatisticAndForm}>
                <FormAddBike/>
                <Statistic/>
            </div>
        </div>
    );
}

export default Main;