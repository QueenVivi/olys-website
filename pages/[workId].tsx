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
  const firstImage = images[0];
  const secondImage = images[1];
  const otherImages = images.slice(2);
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
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2>{scope.title}</h2>
                <p>{scope.content}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h2>{problem.title}</h2>
                <p>{problem.content}</p>
                <h2>{process.title}</h2>
                <p>{process.content}</p>
              </div>
              <div className="col-6">
                <img src={firstImage.src} alt={firstImage.alt} />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={secondImage.src} alt={secondImage.alt} />
              </div>
              <div className="col-6">
                <h2>{outcomes.title}</h2>
                <p>{outcomes.content}</p>
                <h2>{future.title}</h2>
                <p>{future.content}</p>
              </div>
            </div>
          </div>
          {otherImages.map((image, i) => {
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
