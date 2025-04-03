import { useEffect, useState } from "react"
import PostsList from "../components/PostsList"

export default function PostsPage() {

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
            <main>

                <div className="container">
                    <h1 className="p-3 my-2">Un tittolo a caso</h1>
                </div>

                <div className="container">
                    <PostsList postsList={postsList} />
                </div>

            </main>
        </>
    )
}