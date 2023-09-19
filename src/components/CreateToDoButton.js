function CreateToDoButton({openModal}) {
    return(
        <button 
        className="createToDoButton"
        onClick={openModal}
        >+</button>
    );
}

export default CreateToDoButton;