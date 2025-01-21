export default () => {
  return (
    <section>
      <Book />
    </section>
  );
};

// These should be separate components.
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <h2>Image Placeholder</h2>;
const Title = () => <h2>Title Placeholder</h2>;
const Author = () => <h2>Author Placeholder</h2>;
