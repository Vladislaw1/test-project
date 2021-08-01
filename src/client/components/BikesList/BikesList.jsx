import React, {useEffect} from 'react';
import BikesListItem from "../BikesListItem";
import {useDispatch, useSelector} from "react-redux";
import {allBikes, loading} from "../../../redux/bike/bike-selectors";
import {getALlBike} from "../../../redux/bike/bike-operations";

import styles from "./BikesList.module.scss"

function BikesList(props) {
    const dispatch = useDispatch()
    const bikes = useSelector(allBikes)
    const isLoading = useSelector(loading)

    useEffect(() => {
        dispatch(getALlBike())
    }, [dispatch])

    return (
        <div>
            <ul className={styles.bikeList}>
                {isLoading ? <p>Loading...</p> : bikes?.map(el => <BikesListItem key={el.id} bike={el}/>)}
            </ul>
        </div>
    );
}

export default BikesList;