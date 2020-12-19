import React, { Component } from 'react'
import Style from './Content.module.css'
import Divider from '@material-ui/core/Divider';
import ClearIcon from '@material-ui/icons/Clear';
import { DragDropContext, Draggable,Droppable } from 'react-beautiful-dnd';

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            init:[
                "This is a card 'Drag it' into another list to show done.",
                "Add all the card and list you need.",
                "Add member to a board (via the slider) to collaborate, share and discuss.",
                "Use the + in the top menu to make your first board now",
                "There's lots of magic...."
            ],
            final:[],
            addItem:'',
        }
    }
    onDragOver=(param)=>{
        const source=param.source.index;
        const final=param.destination?.index
        if(final!=undefined){
          const item=this.state.init[source]
          this.state.init.splice(source,1)
          this.state.final.push(item)
        }
    }

    render() {
        return (
            <div className={Style.body}>
                <div className={Style.card_arrng}>
                <DragDropContext onDragEnd={(param)=>this.onDragOver(param)}>
                    <Droppable droppableId="droppable-1">
                        {(provided, snapshot) => (
                        <>
                            <div className={Style.card}>
                                <div className={Style.card_header}>stuff to try(this is a list)</div>
                                <div className={Style.item_card_arrng}>
                                    {
                                        this.state.init.map((e, i)=>{
                                            return(
                                                <Draggable  draggableId={`draggable-${i}`} index={i}>
                                                    {(provided, snapshot) => (
                                                        <div className={Style.item_card}
                                                        ref={provided.innerRef}
                                                        className={snapshot.isDragging? Style.card_item_drag:Style.item_card}
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
                                <div className={Style.card_footer}>+ Add another card</div>
                            </div>
                            <div className={Style.card} style={{backgroundColor:"white"}}>
                                <div className={Style.card_header}>
                                    <div style={{width:"90%"}}>Add to a Team</div>
                                    <div style={{width:"10%"}}><ClearIcon style={{width:"20px", height:"20px"}}/></div>
                                </div>
                                <Divider style={{width:"90%", height:"2px"}}/>
                                <div className={Style.item_card_arrng}>
                                    <div>
                                        <img src='./cardimage.png'></img>
                                    </div>
                                    <div className={Style.card_context_arrng}>
                                        <p style={{height:"0px", fontWeight:"500"}}>Build your dream Team</p>
                                        <p>Team Make it easy to orgnize board and member in one place</p>
                                    </div>
                                </div>
                                <div className={Style.btn_div}>
                                    <button className={Style.card_btn}>Add to team</button>
                                </div>
                            </div>
                            <div className={Style.card} style={{backgroundColor:"#78cf9a"}} ref={provided.innerRef} {...provided.droppableProps}>
                                <div className={Style.card_header}>
                                    <p style={{color:"white"}}>+ Add another list</p>
                                </div>
                                <div className={Style.item_card_arrng}>
                                    {
                                        this.state.final.length > 0?
                                            this.state.final.map((e)=>{
                                                return(
                                                    <div className={Style.item_card}>{e}</div>
                                                )
                                            })
                                        :
                                        null
                                    }
                                        
                                </div>
                            </div>
                        </>
                        )}
                    </Droppable>
                </DragDropContext>
                </div>
            </div>
        )
    }
}
