// const postsReducer = () => {
//   return [{
//     title: 'article1',
//     content: 'this is a article 1 dscription lost'
//   }]
// }

export const selectedArticleReducer = (selectedArticle = null, action) => {
  switch(action.type) {
    case 'ARTICLE_SELECTED':
      return action.payload
    default:
      return selectedArticle
  }
}

export default selectedArticleReducer
