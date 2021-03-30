import React from "react"

const Element = props => {
    const { element, elements, index, setElements } = props;

    const onClick = () => {
        setElements(()=>elements.filter(element => elements.indexOf(element) !== index))
    }
    const onCheck = () => {
        {
            element.isCompleted?
            element.isCompleted = false:
            element.isCompleted = true
        }
        setElements([...elements])
    }


    return(
        <div className="Row">
            <div className="col-6 offset-3">
                {
                    element.isCompleted?
                    <h4 style={{textDecoration: "line-through", display: "inline-block", verticalAlign: "top"}}>{ element.name }</h4>:
                    <h4 style={{display: "inline-block", verticalAlign: "top"}}>{ element.name }</h4>
                    
                }
                <input style={{zoom: "1.5", marginLeft: "10px", marginRight: "10px", verticalAlign: "middle"}} onChange={ onCheck } type="checkbox" name="checkbox"/>
                <button onClick={ onClick } className="btn btn-sm btn-danger">Delete</button>            
            </div>
        </div>
    )
}
export default Element

