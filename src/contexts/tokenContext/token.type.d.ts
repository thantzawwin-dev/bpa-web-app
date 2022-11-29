declare module 'MyModels' {
  export interface TokenProps {
    oAuthToken: string | null
    signToken: string | null
    claim: string | null
  }
}
