const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

const template = (data) => {
  commentList.insertAdjacentHTML('beforeend', `
    <div class="comment flex items-start justify-start">
      <img src="${data.avatar}" alt="${data.author}" class="comment-avatar">
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <div class="comment-body">${data.comment}</div>
      </div>
    </div>
  `);
}

const appendComment = (e) => {
  const data = {
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNTExMzUzOF5BMl5BanBnXkFtZTgwOTI1MjA3OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    comment: commentInput.value,
    author: 'Henry Cavill',

  }

  e.preventDefault();

  template(data);
}

submit.addEventListener('click', appendComment, false);