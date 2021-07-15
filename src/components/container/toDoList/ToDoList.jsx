import React, { useState } from 'react';
import ListComponent from './ListComponent';

const ToDoList=  () => {
	//To add items from the input field to the list
	const [inputItem,setItem] = useState('');
	const itemAdd = (newListItem) => {
		setItem(newListItem.target.value)
	}

	//Empty Array to store the list items
	const [newItem,setNewItem] = useState([]);
	//Add entered input item in empty array 
	const ToDoList = () => {
		setNewItem((allItems) => {
			return [...allItems,inputItem]
		})
		setItem(' ')
	}
	//Toggle the to-do list box
	const [show,setShow] = useState(false)
	
	return(
		<>
			{show ?<div className="main-div">
				<div className="to-do-box">
					<h1 className='title'>{new Date().toDateString()}</h1>
					<ol>
						<li>
							{ newItem.map((InputItem,ind) => {
								return <ListComponent key={ind} text={InputItem} />
							} ) }
						</li>
					</ol>
					<div className="input-group">
  						<input type="text" value={inputItem} className="form-control" placeholder="Add Item" onChange={itemAdd} />
  						<button className="btn" type="button" id="button-addon2" onClick={ToDoList}>
							  <i className="fas fa-plus-circle"></i></button>
					</div>	
			
				</div>
			</div> : null }
			<div className='to-do-icon' onClick={()=>setShow(!show)}>
            <p className='to'>To-Do List </p>
            <i className="fas fa-clipboard-list text-white"></i>
        </div> 
		</>
	)
}
export default ToDoList;