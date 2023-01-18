import React from "react"

function Stream() {

  return(
    <div className="Container formContainer">
      <form>
        <h1>Stream</h1>
        <label> Title</label>
        <input type="text"/>

        <label> Catagory</label>
        <input type="text"/>

        <label> Description</label>
        <input type="text"/>

        <label> Stream Description</label>
        <input type="text"/>

        <label> Stream Description</label>
        <input type="text"/>


        <button type="submit">Submit</button>
      </form>
      <form>
        <h1>Stream Key</h1>
        <p> Your Stream key will appear here after submission </p>
        <input type="text"/>
      </form>
    </div>
  )
}

export default Stream
