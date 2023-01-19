import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"

function Listen() {

  let albums = [
      { "image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/0b12cd0f056e321968c9abade72a80f1c6f351d2.jpg"},
      {"image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/1af17e73721dbe0c40011b82ed4bb1a7dbe3ce29.jpg"},
      {"image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/1f24a33d27eaeca07edd904ff7c42301001acc34.jpg"},
      {"image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/233692e0aad5a445107564ca1bb68d51.jpg"},
      {"image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/2768459bbb0563e984acffb7e56731a83b88c601.jpg"},
      {"image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/457391c9c82bfdcbb4947278c0401e41.jpg"}
  ]

  let tracks = [
    {
      "id": 1,
      "artist": "Mac Ayres",
      "name": "Drive",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/3691308f2a4c2f6983f2880d32e29c84.jpg"
    },
    {
      "id": 1,
      "artist": "Frank Ocean",
      "name": "Moon River",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/46dcd4dd65b63d106b8cfb4aad906b23716cc613.jpg"
    },
    {
      "id": 1,
      "artist": "Mac Ayres",
      "name": "Juicebox",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/506822efbe22ec6ef41d5a0929732679a3ce01a8.jpg"
    },
    {
      "id": 1,
      "artist": "6lack",
      "name": "East Atlanta Love Letter",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/5575c186af624d52a5434292f2f5aa23.jpg"
    },
    {
      "id": 1,
      "artist": "Lucky Daye",
      "name": "Painted",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/5e3b687ec0d28caa6fe647f53d684e9fd3ebb000.jpg"
    },
    {
      "id": 1,
      "artist": "Tom Mich, Yusif Dayes",
      "name": "Track Title",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/65a2aaf4fd0da0e854efeca2c25cba29eff44ed1.jpg"
    },
    {
      "id": 1,
      "artist": "Mac Ayres",
      "name": "Drive",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/457391c9c82bfdcbb4947278c0401e41.jpg"
    },
    {
      "id": 1,
      "artist": "Frank Ocean",
      "name": "Moon River",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/2768459bbb0563e984acffb7e56731a83b88c601.jpg"
    },
    {
      "id": 1,
      "artist": "Mac Ayres",
      "name": "Juicebox",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/0b12cd0f056e321968c9abade72a80f1c6f351d2.jpg"
    },
    {
      "id": 1,
      "artist": "6lack",
      "name": "East Atlanta Love Letter",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/233692e0aad5a445107564ca1bb68d51.jpg"
    },
    {
      "id": 1,
      "artist": "Lucky Daye",
      "name": "Painted",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/1f24a33d27eaeca07edd904ff7c42301001acc34.jpg"
    },
    {
      "id": 1,
      "artist": "Tom Mich, Yusif Dayes",
      "name": "Track Title",
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/1af17e73721dbe0c40011b82ed4bb1a7dbe3ce29.jpg"
    }
  ]
  return(
    <div className="Container">

      <div className="section slider_container">
        <div className="slider_items">
          { albums.map( (item, i) => { return <Link to={`${i}`}> <img key={i} className="slider_item" src={item.image} /></Link>}) }
        </div>
      </div>{/*Section end*/}

        <div className="section">
        <div className="section_header">
          <span className="section_title">Popular albums</span>
          <IoIosArrowForward/>
        </div>

        <div className=" track_container">
        { tracks.map( ( item, i ) => { return (
            <div key={i} className='track_item'>
              <img className="track_item_image" src={item.imageURL}/>
              <div className="track_item_description">
              <span>{item.name}</span>
              <span>{item.artist}</span>
              </div>
            </div>
          )}) }

        </div>{/*Section end*/}
      </div>

    </div>
  )
}

export default Listen
