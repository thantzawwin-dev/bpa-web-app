declare module 'MyModels' {
  export interface ThemeProps {
    id: string
    name: string
    style: {
      colors?: {
        header?: {
          text: string
          background: string
        }
        body?: string
        text?: string
        button?: {
          text: string
          background: string
        }
        link?: {
          text: string
          opacity: number
        }
        icon?: string
      }
      font?: string
    }
  }
}
