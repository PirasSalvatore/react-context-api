import { useContext } from "react"
import PostRieceContex from "../contexs/PostRieceContex"
import PostCard from "./PostCard"


export default function PostsList() {

    const { postsList } = useContext(PostRieceContex)

    return (

        <div className="row row-cols-md-3 row-cols-lg-5 gap-4">
            {
                postsList.map((post) => {
                    return (
                        <PostCard key={`post-${post.id}`} post={post} />
                    )
                })
            }
        </div>
    )
}