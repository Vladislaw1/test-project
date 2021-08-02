import React from 'react';
import {useSelector} from "react-redux";

import {allBikes, loading} from "../../../redux/bike/bike-selectors";

import styles from "./Statistic.module.scss"

function Statistic(props) {
    const bikes = useSelector(allBikes)
    const isLoading = useSelector(loading)

    const availableBike = bikes.filter(el => el.status === "Available")
    const busyBike = bikes.filter(el => el.status === "Busy")

    const sumPrice = bikes.reduce((acc,curr) => acc + curr.price,0)
    const averageBikeCost = (sumPrice / bikes.length).toFixed(2)

    return (
        <div className={styles.statBox}>
            <h2 className={styles.caption}>Statistic</h2>
            <p className={styles.statContent}>Total Bikes: <span className={styles.number}>{bikes?.length}</span></p>
            <p className={styles.statContent}>Available Bikes: <span className={styles.number}>{availableBike.length}</span></p>
            <p className={styles.statContent}>Booked Bikes: <span className={styles.number}>{busyBike.length}</span></p>
            <p className={styles.statContent}>Average bike cost: <span className={styles.number}>{averageBikeCost}</span> UAH/hr</p>
        </div>
    );
}

export default Statistic;