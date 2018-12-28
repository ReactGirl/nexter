// import jsonPlaceHolder from "../apis/jsonPlaceHolder"
// import axios from "axios"

export const selectArticle = (article) => {
  return {
    type: 'ARTICLE_SELECTED',
    payload: article
  }
}

