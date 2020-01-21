import React from 'react'

const LoginForm = (props)=>{
    
    //takes the props and pushes the items into an array of object with the id being the element key and the settings being the attributes of the tag
    const renderFields= ()=>{
        let formArray = [];
        for(let element in props.formData){
            formArray.push({
                id: element,
                settings: props.formData[element]
            })
        }

        return formArray.map( (item, i)=>{
            return(
                <div key={i}>
                    {renderTemplate(item)}
                </div>
            )
        })
    
    }

    const renderLabels = (label_value, Ltext)=>{
        let item = null;
        if(label_value){
            item =(
                <label>{Ltext}</label>
            )
        }
        return item;
    }

    //takes the values entered in the form and updates the state 
    const changeHandler = (event, id)=>{
        const newState = props.formData;

        newState[id].value = event.target.value;
        props.change(newState)
    }


    //render the template of the form inputs
    const renderTemplate = (formElements)=>{
        let value = formElements.settings;
        let templates = '';
        switch(value.element){
            case('input'):
                templates=(
                    <div>
                        {renderLabels(value.label, value.labelText)}
                        <input {...value.config} value= {value.value} 
                        onChange= {(event)=>changeHandler(event, formElements.id)}
                        />
                    </div>
                )
            break;
            default:
                templates='';
        }

        return templates;
    }

    return(
        <div>
            {renderFields()}
        </div>
    )
}

export default LoginForm;

/**
 * TODO
 * grab the form form the state and push it into an array
 * for each item render the label 
 */