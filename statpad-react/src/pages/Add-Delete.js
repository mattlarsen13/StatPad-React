import "../css/Add-Delete.css"

const AddDelete = () => {
    return (
        <div className = "add-delete">
            <hr class="border-line"></hr>
            <div class = "add-delete-title">
                <h2 class="active">Add/Delete Your Own Player!</h2>
            </div> 
            <div class = "add-delete-info">
                <div class="add">
                    <h3>Add Player Name</h3>
                    <input type="text" placeholder="Enter player name" />
                    <button type="button">Add Player Name</button>
                    <h3>Add Image of Athlete</h3>
                    <input type="answer" placeholder="Enter image of athlete" />
                    <button type="button">Add Player Image</button>
                    <h3>Add Highlight Reel Link of Athlete</h3>
                    <input type="answer" placeholder="Enter highlight reel link of athlete" />
                    <button type="button">Add Highlight Reel Link</button>
                    <h3>Add Description of Athlete</h3>
                    <input type="answer" placeholder="Enter description of athlete" />
                    <button type="button">Add Player Description</button>
                </div>
                <div class="delete">
                    <h3>Delete Player Name</h3>
                    <input type="text" placeholder="Enter player name" />
                    <button type="button">Delete Player Name</button>
                    <h3>Delete Image of Athlete</h3>
                    <input type="answer" placeholder="Enter image of athlete" />
                    <button type="button">Delete Player Image</button>
                    <h3>Delete Highlight Reel Link of Athlete</h3>
                    <input type="answer" placeholder="Enter highlight reel link of athlete" />
                    <button type="button">Delete Highlight Reel Link</button>
                    <h3>Delete Description of Athlete</h3>
                    <input type="answer" placeholder="Enter description of athlete" />
                    <button type="button">Delete Player Description</button>
                </div>
            </div>
            <hr class="border-line"></hr>
        </div>
    );
};

export default AddDelete;