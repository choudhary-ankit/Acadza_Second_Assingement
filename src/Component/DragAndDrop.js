import React, { Component } from 'react'
import Style from './DragAndDrop.module.css'
import { DragDropContext, Draggable,Droppable } from 'react-beautiful-dnd';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

export default class DragAndDrop extends Component {
  constructor(props){
    super(props)
    this.state={
      init:["Apple","Banana","Mango"],
      final:[],
      addItem:'',
    }
  }
  onDragOver=(param)=>{
    const source=param.source.index;
    const final=param.destination?.index
    console.log(final)
    if(final!=undefined){
      const item=this.state.init[source]
      this.state.init.splice(source,1)
      this.state.final.push(item)
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submit=()=>{
    this.state.init.push(this.state.addItem)
    this.forceUpdate();
  }
  render() {
    return (
        <div className={Style.body}>
            <div className={Style.add_cart}>
                <div className={Style.search}>
                    <div className={Style.searchIcon}>
                        <AddIcon  />
                    </div>
                    <div>
                        <InputBase placeholder="Add Item into the cart" style={{color:'inherit',marginLeft:'50px'}} name="addItem" onChange={this.handleChange}/>
                    </div>
                </div>
                <Button className={Style.btn} variant="contained" onClick={this.submit}>Add Item</Button>
            </div>
            <DragDropContext onDragEnd={(param)=>this.onDragOver(param)}>
                <Droppable droppableId="droppable-1">
                    {(provided, snapshot) => (
                        <div className={Style.drag_contant}>
                            <div className={Style.box_containt}>
                            <h3>Pick your Item</h3>
                            <div className={Style.item_div}>
                            {
                                this.state.init.map((e, i)=>{
                                    return(
                                        <Draggable  draggableId={`draggable-${i}`} index={i}>
                                            {(provided, snapshot) => (
                                                <div className={Style.card_item}
                                                    ref={provided.innerRef}
                                                    className={snapshot.isDragging? Style.card_item_drag:Style.card_item}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                    {e}
                                                </div>
                                            )}
                                        </Draggable>   
                                    )
                                })
                            }
                            </div>
                            </div>
                            <div className={Style.box_containt}>
                                <h3>Drop your Item</h3>
                                <div className={Style.item_div} ref={provided.innerRef} {...provided.droppableProps}>
                                    {
                                        this.state.final.length>0?
                                            this.state.final.map((e)=>{
                                                return(
                                                <div className={Style.card_item}>{e}</div>
                                                )
                                            })
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
  }
}
