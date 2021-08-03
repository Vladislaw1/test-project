import  {useState} from 'react';

const useForm = (initialState,onSubmit = () => {}) => {
    const [data,setData] = useState(initialState);

    const handleChange = ({target}) => {
        const {name,value} = target;
        setData({...data,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data)
        reset()
    }

    function reset(){
        setData(initialState)
    }

    return [data,reset,handleChange,handleSubmit];
}

export default useForm;