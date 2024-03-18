

let posts = document.getElementById('posts')


function addPostToPage(creator = '', time = '', content = 'post', caption = '', ){
    let post = document.createElement('div')
    post.setAttribute('class', 'post')

    let postDetails = document.createElement('div')
    postDetails.setAttribute('class', 'post-details')

    let postCreatorHandle = document.createElement('p')
    postCreatorHandle.setAttribute('class', 'post-creator-handle')
    postCreatorHandle.innerHTML = creator

    let timeSincePosted = document.createElement('p')
    timeSincePosted.setAttribute('class', 'time-since-posted')
    timeSincePosted.innerHTML = time

    let postContent = document.createElement('div')
    postContent.setAttribute('class', 'post-content')
    postContent.innerHTML = content

    let postButtons = document.createElement('div')
    postButtons.setAttribute('class', 'post-buttons')

    let likeBtn = document.createElement('div')
    likeBtn.setAttribute('class', 'like-btn')
    likeBtn.innerHTML = '<i class = "fa-solid fa-heart"></i>'

    let commentBtn = document.createElement('div')
    commentBtn.setAttribute('class', 'comment-btn')
    commentBtn.innerHTML = '<i class = "fa-solid fa-comment"></i>'

    let forwardBtn = document.createElement('div')
    forwardBtn.setAttribute('class', 'forward-btn')
    forwardBtn.innerHTML = '<i class = "fa-solid fa-paper-plane"></i>'

    let saveBtn = document.createElement('div')
    saveBtn.setAttribute('class', 'save-btn')
    saveBtn.innerHTML = '<i class = "fa-solid fa-bookmark"></i>'

    //create post stats div

    let postStats = document.createElement('div')
    postStats.setAttribute('class', 'post-stats')

    let captionContainer = document.createElement('div')
    captionContainer.setAttribute('class', 'caption-container')

    let commentsContainer = document.createElement('div')
    commentsContainer.setAttribute('class', 'comments-container')

    let likes = document.createElement('p')
    likes.setAttribute('class', 'likes')

    let postCaption = document.createElement('p')
    postCaption.setAttribute('class', 'post-caption')


    let viewComments = document.createElement('p')
    viewComments.setAttribute('class', 'view-comments')



    postDetails.appendChild(postCreatorHandle)
    postDetails.appendChild(timeSincePosted)

    postButtons.appendChild(likeBtn)
    postButtons.appendChild(commentBtn)
    postButtons.appendChild(forwardBtn)
    postButtons.appendChild(saveBtn)


    post.appendChild(postDetails)
    post.appendChild(postContent)
    post.appendChild(postButtons)


    posts.appendChild(post)
}

for(i = 0; i< 100; i++){
    addPostToPage("uct", 'id', 'I dropped out to find a job, now I am jobless')
}
