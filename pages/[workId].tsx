import Layout from "../components/Layout";
import Hero from "../components/Hero";
import content from "../content.json";

export default function Work({
  title,
  challenge,
  scope,
  problem,
  process,
  outcomes,
  future,
  images,
}) {
  return (
    <Layout>
      <div className="container">
        <article>
          <h1>{title}</h1>
          <Hero
            eyebrow="challenge"
            heading={challenge.title}
            message={challenge.content}
          />
          <h2>{scope.title}</h2>
          <p>{scope.content}</p>
          <h2>{problem.title}</h2>
          <p>{problem.content}</p>
          <h2>{process.title}</h2>
          <p>{process.content}</p>
          <h2>{outcomes.title}</h2>
          <p>{outcomes.content}</p>
          <h2>{future.title}</h2>
          <p>{future.content}</p>
          {images.map((image, i) => {
            return (
              <>
                <img key={i} src={image.src} alt={image.alt} />
                <p>{image.caption}</p>
              </>
            );
          })}
        </article>
      </div>
    </Layout>
  );
}

const { works } = content;

export async function getStaticPaths() {
  const paths = works.map((work) => {
    const workId = work.id;
    return {
      params: { workId },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentPath = params.workId;
  const currentWorkPage = works.find((work) => {
    return work.id === currentPath;
  });
  return {
    props: currentWorkPage,
  };
}
