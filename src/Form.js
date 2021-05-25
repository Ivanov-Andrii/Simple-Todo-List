import React, {useState} from "react";

const Form = ({AddTask}) => {
    const [formValue, setFormValue] = useState('')

    const handleFormValue = (e) => {
        setFormValue(e.currentTarget.value)
    }

    const clickButton = (e) => {
            e.preventDefault();
            AddTask(formValue);
            setFormValue("");
        }

return (
    <>

        <form className={"row g-3 my-form"}>
            <div className="col-auto">
                <input type="text" className="form-control-plaintext border border-1 px-3"
                       value={formValue} onChange={handleFormValue}
                />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3"
                onClick={clickButton}
                >Add Task</button>
            </div>
        </form>


    </>

)
};


export default Form;