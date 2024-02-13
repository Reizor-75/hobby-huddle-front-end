
const PostDetails = ({content}) => {
  const date = new Date(content.date).toDateString()
  const time = new Date(content.date).toLocaleTimeString()

  return (  
    <div className="">
      <article>
        <h1>{content.title}</h1>        
        <div>{date}</div>
        <div>{time}</div>
        <p>{content.description}</p>
      </article>
    </div>
  );
}

export default PostDetails;