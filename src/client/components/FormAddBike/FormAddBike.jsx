import React, {useCallback} from 'react';
import useForm from "../../../shared/hooks/useForm";
import {state} from "./initialState";

import styles from "./FormAddBike.module.scss"
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../shared/components/Button";
import {addNewBike} from "../../../redux/bike/bike-operations";
import {isError} from "../../../redux/bike/bike-selectors";

function FormAddBike() {
    const dispatch = useDispatch()
    const error = useSelector(isError)

    const onSubmit = useCallback((data) => dispatch(addNewBike(data)),[])

    const [data, handleChange, handleSubmit] = useForm(state, onSubmit)

    return (
        <div style={{padding: "10px"}}>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={`${styles.formInput} ${styles.margin}`} onChange={handleChange} placeholder={"Name"}
                       type={"text"} name="name" value={data.name} required/>
                <input className={styles.formInput} onChange={handleChange} placeholder={"Type"} type={"text"}
                       name="type" value={data.type} required/>
                <input className={`${styles.formInput} ${styles.margin}`} onChange={handleChange} placeholder={"Color"}
                       type={"text"} name="color" value={data.color} required/>
                <input className={styles.formInput} onChange={handleChange} placeholder={"Wheel size"} type={"number"}
                       name="wheelSize" value={data.wheelSize} required/>
                <input className={`${styles.formInput} ${styles.margin}`} onChange={handleChange} placeholder={"Price"}
                       type={"number"} name="price" value={data.price} required/>
                <input className={styles.formInput} onChange={handleChange} placeholder={"ID (slug): ХХХХХХХХХХХХХ"}
                       type={"number"} name="id" value={data.id} required/>
                <textarea className={styles.formTextarea} onChange={handleChange} placeholder={"Description"}
                          type={"text"} name="description" value={data.description} required/>
                <button className={`${styles.formBtn} ${styles.margin}`} type={"submit"}>Save</button>
                <button className={styles.formBtn} type={"reset"}>Clear</button>
            </form>
        </div>
    );
}

export default FormAddBike;