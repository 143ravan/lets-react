function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('userId', userId)
      // getNext && getNext()
      resolve('final')
    }, 2000)
  })
}

// ;(async () => {
//   await getUser(1)
//   await getUser(2)
//   await getUser(3)
//   await getUser(11)
//   await getUser(21)
//   await getUser(31)
// })()
// gerData()

// getData()
// getUser(1).then((res) =>
//   getUser(2).then((res) => getUser(3).then((res) => console.log(res)))
// )

// getUser(1).then((res) => {
//   getUser(2).then((res) => {
//     console.log('user 2 fetched', res)
//     getUser(3).then((res) => {
//       console.log('user 3 fetched', res)
//     })
//     getUser(4).then((res) => {
//       console.log('user 4 fetched', res)
//     })
//   })
// })

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

// function getUser(userId, getData) {
//   setTimeout(() => {
//     console.log('userId', userId)
//     getData && getData(userId)
//   }, 2000)
// }

// getUser(1, () => {
//   console.log('fetch data2')
//   getUser(2, () => {
//     console.log('fetch data3')
//     getUser(3, () => {
//       console.log('fetch data4')
//       getUser(4)
//     })
//   })
// })

// ;(async () => {
//   await getUser(1)
//   await getUser(2)
//   await getUser(3)
//   await getUser(11)
//   await getUser(21)
//   await getUser(31)
// })()

// const getData = async () => {
//   const response = await fetch('https://cataas.com/api/cats')
//   console.log(response)
//   const data = await response.json()
//   console.log(data)
// }

// getData()
