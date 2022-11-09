export type ThemeProps = {
  id: string
  name: string
  font: string
  fontSize?: string
  colors: {
    body: {
      background?: string
      middleground?: string
      foreground?: string
    }
    text?: string
    button?: {
      text?: string
      background?: string
    }
    link?: {
      text?: string
      opacity?: number
    }
  }
}

export type Props = {
  light: ThemeProps
  dark: ThemeProps
  material: ThemeProps
  sharp: ThemeProps
  calm: ThemeProps
  cherryBonBon: ThemeProps
  seaWave: ThemeProps
}

export const THEME_DATA: Props = {
  light: {
    id: 'T_001',
    name: 'Light',
    font: 'Tinos',
    // fontSize: '1em',
    colors: {
      body: {
        background: '#FFFFFF',
        middleground: '#FFFFFF',
        foreground: '#FFFFFF',
      },
      text: '#000000',
      button: {
        text: '#FFFFFF',
        background: '#000000',
      },
      link: {
        text: 'teal',
        opacity: 1,
      },
    },
  },
  dark: {
    id: 'T_002',
    name: 'Dark',
    colors: {
      body: {
        background: '#000000',
        middleground: '#000000',
        foreground: '#000000',
      },
      text: '#FFFFFF',
      button: {
        text: '#000000',
        background: '#FFFFFF',
      },
      link: {
        text: 'teal',
        opacity: 1,
      },
    },
    font: 'Roboto',
  },
  material: {
    id: 'T_003',
    name: 'Material',
    colors: {
      body: {
        background: '#6a1b9a',
        middleground: '#6a1b9a',
        foreground: '#6a1b9a',
      },
      text: '#ebdbf5',
      button: {
        text: '#6a1b9a',
        background: '#ebdbf5',
      },
      link: {
        text: '#ebdbf5',
        opacity: 0.8,
      },
    },
    font: 'Abel',
  },
  sharp: {
    id: 'T_004',
    name: 'Sharp',
    colors: {
      body: {
        background: '#ffeb3b',
        middleground: '#ffeb3b',
        foreground: '#ffeb3b',
      },
      text: '#292500',
      button: {
        text: '#FFFFFF',
        background: '#292500',
      },
      link: {
        text: '#292500',
        opacity: 0.8,
      },
    },
    font: 'Kufam',
  },
  calm: {
    id: 'T_005',
    name: 'Calm',
    colors: {
      body: {
        background: '#80cbc4',
        middleground: '#80cbc4',
        foreground: '#80cbc4',
      },
      text: '#002b24',
      button: {
        text: '#FFFFFF',
        background: '#002b24',
      },
      link: {
        text: '#002b24',
        opacity: 0.8,
      },
    },
    font: 'Nunito Sans',
  },
  cherryBonBon: {
    id: 'T_006',
    name: 'Cherry Bon Bon',
    colors: {
      body: {
        background: '#c62828',
        middleground: '#c62828',
        foreground: '#c62828',
      },
      text: '#ffeeed',
      button: {
        text: '#c62828',
        background: '#ffeeed',
      },
      link: {
        text: '#ffeeed',
        opacity: 0.8,
      },
    },
    font: 'Crimson Text',
  },
  seaWave: {
    id: 'T_007',
    name: 'Sea Wave',
    colors: {
      body: {
        background: '#9be7ff',
        middleground: '#9be7ff',
        foreground: '#9be7ff',
      },
      text: '#0d47a1',
      button: {
        text: '#ffffff',
        background: '#0d47a1',
      },
      link: {
        text: '#0d47a1',
        opacity: 0.8,
      },
    },
    font: 'Ubuntu',
  },
}

