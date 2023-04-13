import { useState } from "react";
import logo from '../logo.svg';

const UploadAndDisplayImage = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="card">
            <h2>Upload and Display Image usign React Hook's</h2>
            <form>
                {selectedImage ? (
                    <div>
                        <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(selectedImage)}
                            className="rounded"
                        />
                        <br />
                        <button onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                ) : (
                    <img
                        alt="not found"
                        width={"250px"}
                        src={logo}
                        className="rounded"
                    />
                )}

                <br />
                <br />

                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />
                <div>
                    <div className="mb-3">
                        <label className="form-label" for="photodesc">Photo Description</label>
                        <input type="description" className="form-control w-25" id="photodesc" aria-describedby="photoDesc" />
                        <div id="photoDesc" className="form-text">Enter an appealing description for this photo.</div>
                    </div>
                </div>

            </form>


        </div>
    );
};

export default UploadAndDisplayImage;