import { useEffect, useState } from "react"
import PostRieceContex from "./contexs/PostRieceContex"
import PostsPage from "./pages/PostsPage"

function App() {

  const [postsList, setPostsList] = useState([{
    id: '',
    title: '',
    slug: '',
    content: '',
    image: '',
    tags: ['']
  }])

  useEffect(() => {

    fetch('http://localhost:3000/api/v1/posts')
      .then(res => res.json())
      .then(data => setPostsList(data))
      .catch(err => console.error(err))

  }, [])

  return (
    <>
      <PostRieceContex.Provider value={{ postsList: postsList }}>

        <PostsPage />

      </PostRieceContex.Provider>

    </>
  )
}

export default App
