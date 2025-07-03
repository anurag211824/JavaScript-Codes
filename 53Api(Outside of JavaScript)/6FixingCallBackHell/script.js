function makeHttpRequest(method,url){
    const xhr = new XMLHttpRequest();
    xhr.responseType='json'

    const promise = new Promise((resolve,reject)=>{
        xhr.addEventListener('load',()=>{
          resolve(xhr.response)
        })
    })
    xhr.addEventListener('error',()=>{
      reject('request failed')
    })
   
    xhr.open(method,url)
    xhr.send()

    return promise
}


// fixed callback hell using promises
makeHttpRequest('GET','https://dummyjson.com/users').then((userData)=>{
    console.log(userData);
    const userArray =userData.users
    console.log(userArray);
    const userDiv=document.querySelector('.users');
   userDiv.classList.add('users')
    userArray.forEach((user,id)=>{
        const userdetails = document.createElement('div');
        userdetails.textContent = `Name: ${user.firstName}, age: ${user.age}`;
        userdetails.classList.add('userdetails')
        userDiv.appendChild(userdetails);
    })
    return makeHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`)
}).then((postData)=>{
  console.log(postData);
  const postDiv=document.querySelector('.posts');
  return makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
}).then((commentsData)=>{
 console.log(commentsData);
 return makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
}).then((commentedBy)=>{
  console.log(commentedBy);
}).catch((error)=>{
    console.log(error)
})

//Callback Hell
// makeHttpRequest('GET','https://dummyjson.com/users',(usersData)=>{
//     console.log(usersData);
//   makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersData.users[0].id}`,(postData)=>{
//     console.log(postData.posts[0]);
//     makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`,(commentsData)=>{
//         console.log(commentsData.comments);
//         console.log(commentsData.comments[0].user);
//         makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`,(userData)=>{
//             console.log(userData);
//         })
//     })
//   })
// })
