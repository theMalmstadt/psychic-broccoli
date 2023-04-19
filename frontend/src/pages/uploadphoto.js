import { useState } from "react";
import { WithContext as ReactTags } from 'react-tag-input';
import '../css/reactTags.css'

const KeyCodes = { comma: 188, enter: 13, space: 32 }
const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.space]

const UploadListing = () => {

    const [inputs, setInputs] = useState({})
    const [selectedFiles, setSelectedFiles] = useState(undefined)
    const [imagePreviews, setImagePreviews] = useState([])
    const [tags, setTags] = useState([])

    const handleTagDelete = i => { setTags(tags.filter((tag, index) => index !== i)) }
    const handleTagAddition = tag => { setTags([...tags, tag]) }


    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    }

    const selectFiles = (e) => {
        let images = []

        for (let i = 0; i < e.target.files.length; i++) {
            images.push(URL.createObjectURL(e.target.files[i]))
        }
        setSelectedFiles(e.target.files)
        handleChange(images)
        setImagePreviews(images)
    }

    const handleChange = (e) => {
        // for images
        const dictName = e.target.name
        let dictValue
        if (dictName === "listingImages") {
            // conver the image to byte arrays for storage

        } else {
            dictValue = e.target.value
            setInputs(values => ({ ...values, [dictName]: dictValue }))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(inputs["listingImages"])
    }

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="card mb-3 w-100">
                    <form onSubmit={handleSubmit}>
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
                                    name="listingImages"
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
                                    <input onChange={handleChange} name="title" type="text" className="form-control" placeholder="Listing Title" aria-label="Title" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Tags</span>
                                    <ReactTags
                                        classNames={{
                                            tagInputField: "form-control"
                                        }}
                                        name="tags"
                                        tags={tags}
                                        delimiters={delimiters}
                                        handleDelete={handleTagDelete}
                                        handleAddition={handleTagAddition}
                                        handleTagClick={handleTagClick}
                                        inputFieldPosition='inline'
                                        maxLength={8}
                                        allowUnique={true}
                                        autocomplete
                                        allowDragDrop={false}
                                    />
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text">Description</span>
                                    <textarea name="description" onChange={handleChange} className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">$</span>
                                    <input name="price" onChange={handleChange} type="text" className="form-control" placeholder="Price" />
                                </div>
                            </div>
                            {selectedFiles && (
                                <div className="card-text">
                                    <button className="btn btn-outline-success btn-sm mt-2" type="submit">
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

export default UploadListing;