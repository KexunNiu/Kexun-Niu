import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

const tableId = "56a39dfba0cd456eb7525189af73f8ef";

//construct a post object
export function Post(id,title,summary,category,date,tags,thumbnail,slug) {
  this.id = id;
  this.title = title;
  this.summary = summary;
  this.category = category;
  this.date = date;
  this.tags = tags;
  this.thumbnail = thumbnail;
  this.slug = slug;
}

export async function getAllPostInfo() {
  const apiUrl = `https://notion-api.splitbee.io/v1/table/${tableId}`;

  const data = await fetch(apiUrl).then((res) => res.json());
  return data;
}

export async function findPostBySlug(slug) {
  //url to fetch all posts
  const apiUrl = `https://notion-api.splitbee.io/v1/table/${tableId}`;

  //fetch all posts
  const data = await fetch(apiUrl).then((res) => res.json());

  //find the post with the given slug
  const post = data.find((post) => post.slug === slug);

  return new Post(post.id,post.title,post.summary,post.category,post.date,post.tags,post.thumbnail[0].url,post.slug);
}


export async function getAllPageId() {
  const apiUrl = `https://notion-api.splitbee.io/v1/table/${tableId}`;

  const data = await fetch(apiUrl).then((res) => res.json());
  return data.map((row) => row.id);
}

export async function getStaticProps(pageId) {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/page/${pageId}`
  ).then((res) => res.json());
  return {
    props: {
      blockMap: data,
    },
  };
}

const page = ({ blockMap }) => (
  <div style={{ maxWidth: "70%" }}>
    <NotionRenderer blockMap={blockMap} />
  </div>
);

export default page;
