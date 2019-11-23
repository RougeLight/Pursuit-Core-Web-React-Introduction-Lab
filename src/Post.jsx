import React from 'react'

class Post extends React.Component {
   constructor() {
      super()
      this.post = {
         title: "Sample post",
         image: "https://cdn.cnn.com/cnnnext/dam/assets/191121212606-tesla-cybertruck-exlarge-169.jpg",
         description: " A mad man's truck"
      }
   }

   render() {
      return (
         <div>
            <h4>{this.post.title}</h4>
      <img alt="" src={this.post.image}></img>
         </div>
      )
   }
}

export default Post;