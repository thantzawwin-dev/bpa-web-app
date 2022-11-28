import { IChannelInfo } from "types"

declare module 'MyModels' {
  export interface AuthProps {
    token: string | null
    signToken: string | null
    claim: string | null
    channel?: IChannelInfo | null
  }
}
