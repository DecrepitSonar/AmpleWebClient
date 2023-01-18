import React from "react"
import { IoIosArrowForward } from "react-icons/io"

function Listen() {

  let albums = [
      { "image": "6b6d6d8fd77ca25db09b96a52c2b91ff.1000x1000x1.jpg"},
      {"image": "1580491482_bc5f17c0c7117e103e34efb67384571b.jpg"},
      {"image": "b0534b5730b0aaa9a005e395cf5b6c68.1000x1000x1.jpg"},
      {"image": "download.jpeg"},
      {"image": "Drake-Take-Care-Album-Cover-web-optimised-820.jpg"},
      {"image": "DzPcACBVYAAqGfi.jpg"}
  ]

  let tracks = [
    {
      "id": 1,
      "artist": "Artist",
      "name": "Track Title",
      "imageURL": ""
    },
    {
      "id": 1,
      "artist": "Artist",
      "name": "Track Title",
      "imageURL": ""
    },
    {
      "id": 1,
      "artist": "Artist",
      "name": "Track Title",
      "imageURL": ""
    },
    {
      "id": 1,
      "artist": "Artist",
      "name": "Track Title",
      "imageURL": ""
    },
    {
      "id": 1,
      "artist": "Artist",
      "name": "Track Title",
      "imageURL": ""
    },
    {
      "id": 1,
      "artist": "Artist",
      "name": "Track Title",
      "imageURL": ""
    }
  ]
  return(
    <div className="Container">

      <div className="section slider_container">
        <div className="slider_items">
          { albums.map( (item, i) => { return <div key={i} className="slider_item" style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/${item.image})`}}></div>}) }
        </div>
      </div>{/*Section end*/}

      <div className="body_container">
        <div className="section">
        <div className="section_header">
          <span className="section_title">Title</span>
          <IoIosArrowForward/>
        </div>
        <div className="track_container">

        { tracks.map( ( item, i ) => { return (
            <div key={i} className='track_item'>
              <div className="track_item_image"></div>
              <div className="track_item_description">
              <span>{item.name}</span>
              <span>{item.artist}</span>
              </div>
            </div>
          )}) }

        </div>
        </div>{/*Section end*/}
      </div>

    </div>
  )
}

export default Listen
