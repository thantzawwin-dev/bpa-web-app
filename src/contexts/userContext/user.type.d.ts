import { IChannelInfo } from 'types'

declare module 'MyModels' {
  export interface UserProps {
    channel: IChannelInfo
  }
}
