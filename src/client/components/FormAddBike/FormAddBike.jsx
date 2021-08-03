import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";
import useForm from "../../../shared/hooks/useForm";

import {state} from "./initialState";
import {fields} from "./fields";

import {addNewBike} from "../../../redux/bike/bike-operations";
import {isError} from "../../../redux/bike/bike-selectors";

import {ReactComponent as Error} from "../../../img/error.svg";
import styles from "./FormAddBike.module.scss"

function FormAddBike() {
    const dispatch = useDispatch()
    const error = useSelector(isError)

    const onSubmit = useCallback((data) => dispatch(addNewBike(data)),[dispatch])

    const [data,reset,handleChange, handleSubmit] = useForm(state, onSubmit)

    return (
        <div style={{padding: "10px",textAlign:"center"}}>
            {error && <p className={styles.error}><Error className={styles.errorIcon}/>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={`${styles.formInput} ${styles.margin}`} onChange={handleChange} value={data.name} {...fields.name}/>
                <input className={styles.formInput} onChange={handleChange} {...fields.type} value={data.type}/>
                <input className={`${styles.formInput} ${styles.margin}`} onChange={handleChange} {...fields.color} value={data.color}/>
                <input className={styles.formInput} onChange={handleChange} {...fields.wheelSize} value={data.wheelSize}/>
                <input className={`${styles.formInput} ${styles.margin}`} onChange={handleChange} {...fields.price} value={data.price}/>
                <input className={styles.formInput} onChange={handleChange} {...fields.id} value={data.id}/>
                <textarea className={styles.formTextarea} onChange={handleChange} {...fields.description} value={data.description}/>

                <button className={`${styles.formBtn} ${styles.margin}`} type={"submit"}>Save</button>
                <button className={styles.formBtn} type={"button"} onClick={reset}>Clear</button>
            </form>
        </div>
    );
}

export default FormAddBike;