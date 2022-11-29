import { IChannelInfo } from 'types'

export type ChannelInfoRequestProps = {
  data?: IChannelInfo | null
  signToken: 'string'
}

export type ChannelResponse = {
  data?: IChannelInfo | null
  responseCode?: number
  responseMessage?: string
}

export const getChannelInfo: (props: ChannelInfoRequestProps) => Promise<ChannelResponse | null> =
  async (props: ChannelInfoRequestProps) => {
    console.log('FetchAPI')
    const data = { signToken: props.signToken } as ChannelInfoRequestProps
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
        return {
          channel: data,
        } as ChannelResponse
      })
      .catch((error) => {
        console.error('Error:', error)
        return {
          responseCode: error.code,
          responseMessage: error.message,
        } as ChannelResponse
      })
    return null
  }

export const getChannelInfoMock: (props: ChannelInfoRequestProps) => Promise<ChannelResponse> = (
  props: ChannelInfoRequestProps,
) => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            channelCode: 'aplus',
            channelName: 'A Plus',
            channelLogo:
              'file:///D:/my/projects/Bpa/bpa-web-app/src/assets/images/companyImages/CompanyName.svg',
            channelCountry: 'Myanmar',
            channelCurrency: 'MMK',
            channelStatus: 'true',
          } as IChannelInfo,
          responseCode: 200,
          responseMessage: 'Success',
        } as ChannelResponse),
      1000,
    ),
  )
}
