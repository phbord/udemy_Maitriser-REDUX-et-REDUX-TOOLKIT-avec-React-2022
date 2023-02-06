import { connect } from "react-redux";
import { apiCall } from "../redux/comments/actionComments";
import { useEffect } from "react";

const CommentsContainer = ({apiData, apiComment}) => {
  console.log(apiData)
  
  useEffect(() => {
    apiComment()
  }, [apiComment])

  const displayApiData = !apiData?.isLoading
                    ? <p>Loading...</p>
                    : apiData?.error
                        ? <p>{apiData?.error}</p>
                        : apiData?.comments.splice(0, 5).map(comment => {
                          return (
                            <div key={comment.id} className="comments">
                              <p>{comment.body}</p>
                            </div>
                          )
                        })

  return (
    <>
      <h2>Commentaires :</h2>
      <hr />
      {displayApiData}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    apiData: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    apiComment: () => dispatch(apiCall())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);