import React from 'react';
import './Photography.css';

const imageFolder = "images/";
let imagesPath = [
    {
        key: 1,
        name: "Emma",
        location: "Old Port",
        paths: ["emma/3.jpg", "emma/1.jpg"],
    },
    {
        key: 2,
        name: "Loc",
        location: "Atwater Market",
        paths: ["loc/1.jpg", "loc/2.jpg", "loc/3.jpg"]
    },
    {
        key: 3,
        name: "Loc",
        location: "Orange Palace",
        paths: ["loc/4.jpg", "loc/5.jpg"]
    },
    {
        key: 4,
        name: "Elina",
        location: "Shaughnessy Village",
        paths: ["portraits/2.jpg"]
    },
    {
        key: 5,
        name: "Kimstro",
        location: "Saint Joachim Parish",
        paths: ["portraits/4.jpg", "portraits/5.jpg"]
    },
    {
        key: 6,
        name: "Camille",
        location: "Downtown Montreal",
        paths: ["portraits/9.jpg", "portraits/10.jpg"]
    },
    {
        key: 7,
        name: "Strangers",
        location: "Oratoire St-Joseph",
        paths: ["portraits/12.jpg", "portraits/13.jpg"]
    },
    {
        key: 8,
        name: "Mommy at 60",
        location: "Home",
        paths: ["portraits/22.jpg", "portraits/23.jpg"]
    },
    {
        key: 9,
        name: "More",
        location: "Montreal",
        paths: ["portraits/1.jpg", "portraits/3.jpg", "portraits/6.jpg", "portraits/7.jpg", "portraits/8.jpg", "portraits/11.jpg", "portraits/14.jpg", "portraits/15.jpg", "portraits/16.jpg", "portraits/17.jpg", "portraits/18.jpg", "portraits/24.jpg", "portraits/19.jpg", "portraits/20.jpg", "portraits/21.jpg"]
    }
]


export const Photography = () => {
    //Same as function getImages
    const getImages = () => {
        let imgCollection = [];

        function toggleOpen(event) {
            // Photo that triggered the modal
            var photo = event.target;
            // Extract info from data-bs-* attributes
            var photoPathsString = photo.getAttribute('data-bs-paths');

            var photoPathsArray = photoPathsString.split(',');
            let modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = '';
            photoPathsArray.forEach(path => {
                var newImage = document.createElement("img");
                newImage.className = "img-fluid mb-4 float-right";
                newImage.alt = "";
                newImage.src = 'images/' + path;
                modalBody.appendChild(newImage);
            })

        }

        imagesPath.forEach(image => {
            imgCollection.push(
                <div className="col">
                    <div className="imgContainer" key={image.key}>
                        <img className="img-fluid mb-4" alt="" src={imageFolder + image.paths[0]} />
                        <div className="imgDescription" data-bs-toggle="modal" data-bs-target="#imgModal" data-bs-paths={image.paths} onClick={toggleOpen}>
                            <p className="imgName" data-bs-paths={image.paths}>{image.name}</p>
                        </div>
                    </div>
                </div>

            );
        })

        return imgCollection;
    }

    return (
        <div id="photography" className="fullSection photography-section container-fluid">
            <div className="row row-cols-3">
                {getImages()}
            </div>

            <div className="modal fade" id="imgModal" tabIndex="-1" aria-labelledby="imgModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        {/*Images are added inside modal-body when a user clicks on the image*/}
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div id="modalBody" className="row">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

