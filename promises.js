const posts = [
    { title: 'Post One',body:'This is post one', posttime:new Date().getTime()},
    { title: 'Post Two',body:'This is post two',posttime:new Date().getTime()}
];
var intervalid = 0;

function getPost() {
    clearInterval(intervalid);
    if(posts.length > 0){
        intervalid = setInterval(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title} - created  ${Math.round((new Date().getTime() - post.posttime)/1000)} sec ago.</li>`;
            });
            console.log(intervalid);
            document.body.innerHTML = output;
        },2000);
    }
    
    
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...post,posttime:new Date().getTime()});

            const error = false;

            if(!error){
                resolve();
            } else {
                document.innerHTML = "Array is empty now";
                reject('ERROR: SOMETHING WENT WRONG');
            }

        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            posts.pop();

            // const error = false;
            if(posts.length == 0){
                reject('ERROR: Posts array is empty');
            } else {
                resolve();
            }

        }, 3000);
    });
}

const user = {
    username: 'lokesh',
    lastactivitytime: new Date().getTime()
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            user.lastactivitytime = Math.round(new Date().getTime()/1000);
        },1000);
    })
}
createPost({title: 'Post Four', body: 'This is post four'});
createPost({title: 'Post Five', body: 'This is post five'});
createPost({title: 'Post Six', body: 'This is post six'})
.then(getPost);
deletePost();

//Promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//     console.log(values));

//updateLastUserActivityTime


Promise.all([createPost, updateLastUserActivityTime])
    .then([createPostresolved, updateLastUserActivityTimeresolved]);
