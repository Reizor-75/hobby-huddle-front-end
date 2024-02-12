
const PostDetails = ({content}) => {
  return (  
    <div className="">
      <article>
        <h1>{content.title}</h1>        
        <p>{content.description}</p>
      </article>
    </div>
  );
}

export default PostDetails;