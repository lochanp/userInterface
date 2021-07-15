import React, {useState} from 'react';

const ListComponent = (props) => {
    
    const [line,setLine] = useState(false) 
    const lineThrough = () => {
        setLine(true)
    }

    return <div className='to-do-style'>
        <span onClick={lineThrough}>
        <li className='list-text' style={{textDecoration : line ?  'line-through' : 'none' }}>{props.text}</li>
        </span>
        </div>
}
export default ListComponent;