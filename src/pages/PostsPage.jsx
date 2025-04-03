
import PostsList from "../components/PostsList"

export default function PostsPage() {

    return (
        <>
            <main>

                <div className="container">
                    <h1 className="p-3 my-2">Un tittolo a caso</h1>
                </div>

                <div className="container">
                    <PostsList />
                </div>

            </main>
        </>
    )
}