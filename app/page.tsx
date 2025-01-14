import Comment from "./components/Comment";
import NewComment from "./components/NewComment";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col gap-5 justify-center items-center">
      <Comment />
      <NewComment text="comment"/>
    </section>
  );
}
