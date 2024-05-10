const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// 2 events i want to fire off fill is the image i am dragging.
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// for of loop samething as forEach
// FOR EACH EMPTY OF THE empties array 
// i want to use the empty variable and add eventListener.
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
    // every time i drag over,drag enter,drag leave, and drag drop
}

function dragStart() {
    // i want to add the class name of hold when i start to drag
    // the hold class will put the border on the fill div (div that has the background image)
    this.className += ' hold' 
    // i am using this Keyword which will refer to whichever element 
    // the event is fired on in this case it is fill which is the div with the background image
    // .className sets the class if i set it to = then it will set to a class which will REPLACE 
    // i want to append not replace so i add + to =
    // i Still have the fill class but 
    // now it will ALSO HAVE THE 'hold' class which means
    //  when i drag the pic i will still have the fill class on the picture that i am not dragging and 
    // when idrag the picture i have the Hold class on the pic that is DRAGGABLE AND THE pic that is NOT DRAGGABLE.
    

    setTimeout(() => this.className = 'invisible', 0)
    // this gets rid of the fill class on the picture i am DRAGGING
    // console.log('drag start')

}

function dragEnd() {
    this.className = 'fill'
    // when i drag out the picture i want the READD the className of 'fill
    // console.log('drag end')
}

function dragOver(e) {
    // stops default behavior of this event
    e.preventDefault()
    // console.log('drag over')
    
}

function dragEnter(e) {
    // stops default behavior of this event
    e.preventDefault()
    this.className += ' hovered'
    // i want to ADD the class of hover
    // console.log('drag enter')
}

function dragLeave() {
    this.className = 'empty'
    // i want to ADD the class of 'empty' to reset the box state
    // console.log('drag leave')
}

function dragDrop() {
    // making sure i always have a class of empty before i drop
    this.className = 'empty'
    // and add the class of fill inside of whichever div has a class of empty. 
    this.append(fill)
    // console.log('drag drop')
}