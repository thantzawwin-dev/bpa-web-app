import { AuthProps } from "MyModels"

export const fakeAuth: (props: any) => Promise<AuthProps> = (props: any) => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          token: '2342f2f1d131rf12',
          signToken: '2342f2f1d131rf12',
          claim: '1243njk245',
        }),
      500,
    ),
  )
}
