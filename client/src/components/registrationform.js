import React from 'react';


const FormField = (props)=>{

    const renderFields= ()=>{
        const formArray = [];
        
        for(let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings: props.formData[elementName]
            })
        }

       return formArray.map( (item ,i)=>{
           return(
               <div key={i} className='registration_form'>
                   {renderTemplates(item)}
               </div>
           )
       })
    }

    const changeHandler = (event, id)=>{
        const newState = props.formData;
        newState[id].value = event.target.value;
        
        let validData = validate(newState[id]);
        newState[id].valid = validData[0];
        newState[id].validationMessage = validData[1];


        props.change(newState)
    }

    const validate = (element)=>{
        let error = [true, '']
        
        if(element.validation.required){
            const valid = element.value.trim() !=='';
            const message = `${!valid ? 'This field is required':''}`;

            error = !valid ? [valid, message]: error
        }

        return error;
    }

    const showLabel=(show, label)=>{
        return show ? <label>{label}</label>: null
    }

    const showValidation = (data)=>{
        let errorMessage = null;

        if(data.validation && !data.valid){
            errorMessage = (
                <div className='label_error'>
                    {data.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

   const  renderTemplates = (data)=>{
        let formTemplate = '';
        let values = data.settings;
        switch(values.element){
            case('input'):
            formTemplate = (<div>
                   {showLabel(values.label, values.labelText)}
                   <input 
                   {...values.config} 
                   onChange ={
                       (event)=> changeHandler(event, data.id)
                   }
                   />
                   {showValidation(values)}
               </div>)
            break;
            default:
                formTemplate = null;
        }
        return formTemplate;
    }

    return(
        <div>
            {renderFields()}
        </div>
    )  
}

export default FormField;