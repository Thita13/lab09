const API_URL = 'https://jsonplaceholder.typicode.com';

// รายชื่อผู้ใช้
async function loadUsers() {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();
    const userList = document.getElementById('user-list');
    users.forEach(user => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="user.html?id=${user.id}">${user.name}</a>`;
        userList.appendChild(li);
    });
}

// ข้อมูลผู้ใช้
async function loadUserDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const res = await fetch(`${API_URL}/users/${userId}`);
    const user = await res.json();
    
    document.getElementById('user-name').innerText = user.name;
    document.getElementById('user-email').innerText = user.email;
    document.getElementById('user-phone').innerText = user.phone;
    document.getElementById('user-website').innerText = user.website;
}

// โพสต์
async function loadPosts() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const res = await fetch(`${API_URL}/posts?userId=${userId}`);
    const posts = await res.json();
    
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="comments.html?postId=${post.id}">${post.title}</a>`;
        postList.appendChild(li);
    });
}

// ความคิดเห็น
async function loadComments() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');
    const res = await fetch(`${API_URL}/comments?postId=${postId}`);
    const comments = await res.json();
    
    const commentList = document.getElementById('comment-list');
    comments.forEach(comment => {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${comment.email}:</strong> ${comment.body}`;
        commentList.appendChild(li);
    });
}
