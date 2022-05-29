const posts = [
    { title: 'Post One',body:'This is post one', posttime:new Date().getTime()},
    { title: 'Post Two',body:'This is post two',posttime:new Date().getTime()}
];
var intervalid = 0;

function getPost() {
    clearInterval(intervalid);
    
    intervalid = setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - created  ${Math.round((new Date().getTime() - post.posttime)/1000)} sec ago.</li>`;
        });
        console.log(intervalid);
        document.body.innerHTML = output;
    },1000);
    
}

function createPost(post,callback) {
    setTimeout(() => {
        posts.push({...post,posttime:new Date().getTime()});
        callback();
    }, 2000);
}

getPost();

createPost({title: 'Post Three', body: 'This is post three'}, getPost);

createPost({title: 'Post Four', body: 'This is post four'}, getPost);
