// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('user', userId)
//       resolve(200)
//     }, 2000)
//   })
// }

// ;(async () => {
//   await getUser(1)
//   await getUser(2)
//   await getUser(3)
// })()

// fetchData()

// ;(async () => {
//   await getUser()
// })()

// let promise = new Promise((resolve, reject) => {
//   console.log('Promise started')
//   reject('promise error')
// })

// function getUser(userId, getNext) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('userId', userId)
//       // getNext && getNext()
//       resolve('final')
//     }, 2000)
//   })
// }
// getUser(1).then((res) => {
//   console.log('User 1 fetched', res)
//   getUser(2).then((res) => {
//     console.log('User 2 fetched', res)
//     getUser(3).then((res) => {
//       console.log('User 3 fetched', res)
//       getUser(4).then((res) => {
//         console.log('User 4 fetched', res)
//       })
//     })
//   })
// })
// getUser(1)
//   .then((res) => getUser(2))
//   .then((res) => getUser(3))
//   .then((res) => console.log('User 3 fetched', res))
//   .catch((err) => console.error(err))

// function getUser(userId, getNext) {
//   setTimeout(() => {
//     console.log('userId', userId)
//     getNext && getNext()
//   }, 2000)
// }

// // callback hell
// getUser(1, () => {
//   getUser(2, () => {
//     getUser(3, () => {
//       getUser(4)
//     })
//   })
// })

// const hello = () => {
//   setTimeout(() => {
//     console.log('Hello')
//   }, 3000)
// }
// hello()

// console.log('one')
// console.log('two')
// setTimeout(() => {
//   console.log('setTimeout')
// }, 2000)
// console.log('three')
// console.log('four')

// function sum(a, b) {
//   return a + b
// }
// function calculator(a, b, operation) {
//   return operation(a, b)
// }
// console.log(calculator(2, 3, sum)) // 5
