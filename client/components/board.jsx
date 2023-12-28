import React from 'react';
import TaskCard from './taskcards.jsx';
import interact from 'interactjs'

import { useSelector, useDispatch } from 'react-redux';
import TaskContainer from './taskContainer.js';


const Board = () => {

  const imgURL = "https://cdn.discordapp.com/attachments/1106400138143997952/1189797718831398972/umlaut42_wooden_framed_blank_fantasy_quest_board_wooden_frame_s_ad8c856b-9c0a-48ae-8d96-985e3b6a1b2e.png?ex=659f7879&is=658d0379&hm=4da8ac7b153d9b55aabb46da7403ced49166581c9533d68a4a4972af2891e360&"

    // from interact.js (https://interactjs.io/)
    // target elements with the "draggable" class
    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            // enable autoScroll
            autoScroll: true,
            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,
                // call this function on every dragend event
                end(event) {
                    var textEl = event.target.querySelector('p')
                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px')
                }
            }
        })
    function dragMoveListener(event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }





    
    //selecting task from state
    const taskList = useSelector((state) => state.projects.taskList)
    console.log('this is the current task list', taskList)
   
    //cards to be rendered
    let cards = [];

    // max length of the board so it doesnt overflow
    const maxLengthOfTaskList = Math.min(taskList.length, 15);

    for (let i = 0; i < maxLengthOfTaskList; i++) {
    cards.push(<TaskCard key={i} taskList={taskList[i]} />);
  }

    const toggleTaskModal = useSelector((state) => state.projects.taskModalBoolean);
    const modalId = useSelector((state) => state.projects.modalId);
    return (
        <div id="board-container">
          {/* <img src={imgURL} alt="Bulletin Board Background"></img> */}
          { 
          (toggleTaskModal) ? <div> <TaskContainer id={modalId}/> </div> : <></>
          }
            {cards}
        </div>
    )
}

export default Board;