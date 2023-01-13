import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import { useDelay } from "../../../hooks/useDelay";
import { PostData } from "../../../types/types";
import Loading from "../../layout/Loading";

import styles from "./index.module.css";

function Home(){
    const [posts, setPosts] = useState<PostData[]>([])

    useEffect(() => {
        async function getPosts(){
            await useDelay(1500)
            const response = await fetch("https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/posts");
            const data = await response.json();
            setPosts(data)
        }
        getPosts();
    }, [])

    return(
        <>
            {posts.length !== 0 ? (
                <section className={styles.containerPosts}>
                    {posts.map((post) => (
                        <div className={styles.post} key={post.id}>
                            <header>
                                <span className={styles.image}>
                                    <FaUserCircle size={35}/>
                                </span>
                                <span className={styles.name}>{post.name} |</span>
                                <span className={styles.username}>@{post.username}</span>
                            </header>
                            <div className={styles.message}>{post.message}</div>
                            <hr></hr>
                        </div>
                    ))}
                </section>
            ) : (
                <Loading/>
            )}
        </>
    )
}

export default Home;