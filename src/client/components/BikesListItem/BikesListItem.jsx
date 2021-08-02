import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {deleteBike, updateBike} from "../../../redux/bike/bike-operations";

import {ReactComponent as Remove} from "../../../img/remove.svg";

import styles from "./BikesListItem.module.scss"

function BikesListItem(props) {
    const dispatch = useDispatch()
    const {_id, id, name, type, color, price,status} = props.bike

    function removeBike(id) {
        dispatch(deleteBike(id))
    }
    const active = status === "Available" || status === "Busy" ? "availableListItem" : "unavailableListItem"
    return (
        <li className={styles.availableListItem}>
            <p className={styles.nameTag}><span className={styles.name}>{name}</span> - {type}({color})</p>
            <p className={styles.id}>ID: {id}</p>
            <p className={styles.price}>{price} UAH/hr</p>
            <button className={styles.btnDelete} type="button" onClick={() => removeBike(_id)}>
                <Remove className={styles.btnDeleteIcon}/>
            </button>
            <div>
                <p className={styles.statusCaption}>Status :</p>
                <select className={styles.statusSelect} defaultValue={"Available"} onChange={(e) => dispatch(updateBike(e.target.value, _id))}>
                    <option value={"Available"}>Available</option>
                    <option value={"Busy"}>Busy</option>
                    <option value={"Unavailable"}>Unavailable</option>
                </select>
            </div>
        </li>
    );
}

export default BikesListItem;