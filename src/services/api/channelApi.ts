import { ChannelInfoProps } from 'MyModels'


export const getChannelInfo = async () => {
  const data = { username: 'example' }
  await fetch('https://example.com/profile', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
}