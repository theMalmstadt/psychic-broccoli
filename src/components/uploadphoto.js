import { useState } from "react";
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = { comma: 188, enter: 13 }
const delimiters = [KeyCodes.comma, KeyCodes.enter]

const UploadAndDisplayImage = () => {

    const [selectedFiles, setSelectedFiles] = useState(undefined)
    const [imagePreviews, setImagePreviews] = useState([])

    const [tags, setTags] = useState([])

    const handleDelete = i => { setTags(tags.filter((tag, index) => index !== i)) }
    const handleAddition = tag => { setTags([...tags, tag]) }

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    }

    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    }

    const selectFiles = (e) => {
        let images = []

        for (let i = 0; i < e.target.files.length; i++) {
            images.push(URL.createObjectURL(e.target.files[i]))
        }
        setSelectedFiles(e.target.files)
        setImagePreviews(images)
    }

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="card mb-3 w-100">
                    <form>
                        {imagePreviews && (
                            <div>
                                {imagePreviews.map((img, i) => {
                                    return (
                                        <img className="card-img-top w-50" src={img} alt={"img-" + 1} key={i} />
                                    )
                                })}
                            </div>
                        )}

                        <div className="card-body">
                            <p className="card-title">Listing Info</p>
                            <div className="card-text">
                                <input
                                    type="file"
                                    name="myImage"
                                    multiple
                                    accept="image/*"
                                    onChange={
                                        selectFiles
                                    }
                                />
                            </div>
                            <div className="card-text">
                                <div className="input-group mb-3 mt-3">
                                    <span className="input-group-text" id="basic-addon1">Title</span>
                                    <input type="text" className="form-control" placeholder="Listing Title" aria-label="Title" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Tags</span>
                                    <ReactTags
                                        tags={tags}
                                        delimiters={delimiters}
                                        handleDelete={handleDelete}
                                        handleAddition={handleAddition}
                                        handleDrag={handleDrag}
                                        handleTagClick={handleTagClick}
                                        inputFieldPosition="bottom"
                                        autocomplete
                                    />
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text">Description</span>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" placeholder="Price" />
                                </div>
                            </div>
                            {selectedFiles && (
                                <div className="card-text">
                                    <button className="btn btn-outline-success btn-sm mt-2">
                                        Submit Listing
                                    </button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>

    );
};

export default UploadAndDisplayImage;