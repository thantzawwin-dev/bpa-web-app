import { AuthProps } from "MyModels"
import { IChannelInfo } from "types"

export const fakeAuth: (props: any) => Promise<AuthProps> = (props: any) => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          channel: {} as IChannelInfo,
        } as AuthProps),
      500,
    ),
  )
}
