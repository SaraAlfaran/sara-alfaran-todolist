import React, { useRef } from "react"




const AddElementForm = props => {

    const { elements, setElements } = props
    let element = {
        name: "",
        isComplete: false
    };

    const refContainer = useRef("")


    const onChange = (e) => {
        element.name = e.target.value
    };
    const onSubmit = (e) => {
        e.preventDefault()
        setElements( [...elements, element] )
        refContainer.current.value = ""
        refContainer.current.focus()
        }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <form onSubmit = { onSubmit }>
                    <div className="form-group">
                        <label>Add element:</label>
                        <input onChange = { onChange } ref={refContainer} id="elementInput" type="abc" name="input" className="form-control"></input>
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-primary btn-sm">Add an element</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddElementForm

// import React, { useState } from 'react';

// // export default () => {
// const AddElementForm=()  =>{
//   const [inputVal, setInputVal] = useState('');
//   const [list, setList] = useState([]);

//   function add(e) {
//     e.preventDefault();

//     if(inputVal === '') return;

//     setList([...list, {
//       text: inputVal,
//       completed: false
//     }]);

//     setInputVal('');
//   }

//   function remove(index) {
//     setList(list.filter((_item, i) => i !== index));
//   }

//   function toggleChecked(index) {
//     const obj = {
//       ...list[index]
//     };

//     obj.completed = !obj.completed;

//     setList([
//       ...list.slice(0, index),
//       obj
//     ].concat(list.slice(index + 1)));
//   }

//   return (
//     <div>
//       {list.map((item, i) => (
//         <div key={i}>
//           <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
//           <input
//             type="checkbox"
//             checked={item.completed}
//             onClick={() => toggleChecked(i)}
//             readOnly
//           />
//           <button onClick={() => remove(i)}>Delete</button>
//         </div>
//       ))}

//       <form onSubmit={add}>
//         <input
//           onChange={e => setInputVal(e.target.value)}
//           value={inputVal}
//         />
//         <button>Add</button>
//       </form>
//     </div>
//  )

//  export default AddElementForm