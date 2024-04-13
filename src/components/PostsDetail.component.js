import React from "react";
import { getStaticProps } from "../notion";
import { NotionRenderer } from "react-notion";
import { useParams } from "react-router-dom";

const PostsDetail = () => {
  const { id } = useParams();

  const [blockMap, setBlockMap] = React.useState(null);

  React.useEffect(() => {
    getStaticProps(id)
      .then((data) => {
        console.log(data);
        setBlockMap(data.props.blockMap);
      })
      .catch((err) => {
        console.log(err);
        console.log(`The posts with id: ${id} is not found`)
      });
  }, [id]);

  if (blockMap) {
    return (
      <div style={{ maxWidth: "70%" }}>
        <h1>Styling is under construction..</h1>
        <NotionRenderer blockMap={blockMap} />
      </div>
    );
  } else {
    return <h1>My server is under attack!!!!! Stop accessing it!!!!<p>(for more please check console)</p></h1>;
  }
};

export default PostsDetail;
