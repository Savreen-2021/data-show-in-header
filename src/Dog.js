import React , {useState} from "react";
import Header from './Header';
//state is an object and is a collection of variables
//spread operators ...

const Child = () =>{

    const [object , setFormData ] = useState({});
    
    const saveData = () =>{
        console.log(object)
    }

    return(
        <>
        <Header object={object} />
       
            <h2>This data is coming form child component</h2>
            <form onSubmit={ (e) => e.preventDefault() }>
                
                <input type="text" value={object.firstname} onChange= { (e) => setFormData({ ...object,  firstname : e.target.value }) }  /> 

                <input type="text" value={object.lastname} onChange= { (e) => setFormData({ ...object,  lastname : e.target.value }) }  />
                
                <input type="text" value={object.email} onChange= { (e) => setFormData({ ...object,  email : e.target.value }) }  />

                
                <button onClick={ () => saveData() }>submit</button>
            </form>
           
        </>
    )
}

export default Child;


