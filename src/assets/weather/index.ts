const weatherIcons: any = {
  'clear-day': [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.37,14.62c0-0.24,0.08-0.45,0.25-0.62c0.17-0.16,0.38-0.24,0.6-0.24h2.04c0.23,0,0.42,0.08,0.58,0.25
          c0.15,0.17,0.23,0.37,0.23,0.61S8,15.06,7.85,15.23c-0.15,0.17-0.35,0.25-0.58,0.25H5.23c-0.23,0-0.43-0.08-0.6-0.25
          C4.46,15.06,4.37,14.86,4.37,14.62z M7.23,21.55c0-0.23,0.08-0.43,0.23-0.61l1.47-1.43c0.15-0.16,0.35-0.23,0.59-0.23
          c0.24,0,0.44,0.08,0.6,0.23s0.24,0.34,0.24,0.57c0,0.24-0.08,0.46-0.24,0.64L8.7,22.14c-0.41,0.32-0.82,0.32-1.23,0
          C7.31,21.98,7.23,21.78,7.23,21.55z M7.23,7.71c0-0.23,0.08-0.43,0.23-0.61C7.66,6.93,7.87,6.85,8.1,6.85
          c0.22,0,0.42,0.08,0.59,0.24l1.43,1.47c0.16,0.15,0.24,0.35,0.24,0.59c0,0.24-0.08,0.44-0.24,0.6s-0.36,0.24-0.6,0.24
          c-0.24,0-0.44-0.08-0.59-0.24L7.47,8.32C7.31,8.16,7.23,7.95,7.23,7.71z M9.78,14.62c0-0.93,0.23-1.8,0.7-2.6s1.1-1.44,1.91-1.91
          s1.67-0.7,2.6-0.7c0.7,0,1.37,0.14,2.02,0.42c0.64,0.28,1.2,0.65,1.66,1.12c0.47,0.47,0.84,1.02,1.11,1.66
          c0.27,0.64,0.41,1.32,0.41,2.02c0,0.94-0.23,1.81-0.7,2.61c-0.47,0.8-1.1,1.43-1.9,1.9c-0.8,0.47-1.67,0.7-2.61,0.7
          s-1.81-0.23-2.61-0.7c-0.8-0.47-1.43-1.1-1.9-1.9C10.02,16.43,9.78,15.56,9.78,14.62z M11.48,14.62c0,0.98,0.34,1.81,1.03,2.5
          c0.68,0.69,1.51,1.04,2.49,1.04s1.81-0.35,2.5-1.04s1.04-1.52,1.04-2.5c0-0.96-0.35-1.78-1.04-2.47c-0.69-0.68-1.52-1.02-2.5-1.02
          c-0.97,0-1.8,0.34-2.48,1.02C11.82,12.84,11.48,13.66,11.48,14.62z M14.14,22.4c0-0.24,0.08-0.44,0.25-0.6s0.37-0.24,0.6-0.24
          c0.24,0,0.45,0.08,0.61,0.24s0.24,0.36,0.24,0.6v1.99c0,0.24-0.08,0.45-0.25,0.62c-0.17,0.17-0.37,0.25-0.6,0.25
          s-0.44-0.08-0.6-0.25c-0.17-0.17-0.25-0.38-0.25-0.62V22.4z M14.14,6.9V4.86c0-0.23,0.08-0.43,0.25-0.6C14.56,4.09,14.76,4,15,4
          s0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6V6.9c0,0.23-0.08,0.42-0.25,0.58S15.23,7.71,15,7.71s-0.44-0.08-0.6-0.23
          S14.14,7.13,14.14,6.9z M19.66,20.08c0-0.23,0.08-0.42,0.23-0.56c0.15-0.16,0.34-0.23,0.56-0.23c0.24,0,0.44,0.08,0.6,0.23
          l1.46,1.43c0.16,0.17,0.24,0.38,0.24,0.61c0,0.23-0.08,0.43-0.24,0.59c-0.4,0.31-0.8,0.31-1.2,0l-1.42-1.42
          C19.74,20.55,19.66,20.34,19.66,20.08z M19.66,9.16c0-0.25,0.08-0.45,0.23-0.59l1.42-1.47c0.17-0.16,0.37-0.24,0.59-0.24
          c0.24,0,0.44,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6c0,0.25-0.08,0.46-0.24,0.62l-1.46,1.43c-0.18,0.16-0.38,0.24-0.6,0.24
          c-0.23,0-0.41-0.08-0.56-0.24S19.66,9.4,19.66,9.16z M21.92,14.62c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.35-0.24,0.57-0.24h2.02
          c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6s-0.09,0.43-0.26,0.6c-0.17,0.17-0.37,0.25-0.6,0.25h-2.02
          c-0.23,0-0.43-0.08-0.58-0.25S21.92,14.86,21.92,14.62z
        `
      }
    }
  ],
  'clear-night': [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
              M7.91,14.48c0-0.96,0.19-1.87,0.56-2.75s0.88-1.63,1.51-2.26c0.63-0.63,1.39-1.14,2.27-1.52c0.88-0.38,1.8-0.57,2.75-0.57
              h1.14c0.16,0.04,0.23,0.14,0.23,0.28l0.05,0.88c0.04,1.27,0.49,2.35,1.37,3.24c0.88,0.89,1.94,1.37,3.19,1.42l0.82,0.07
              c0.16,0,0.24,0.08,0.24,0.23v0.98c0.01,1.28-0.3,2.47-0.93,3.56c-0.63,1.09-1.48,1.95-2.57,2.59c-1.08,0.63-2.27,0.95-3.55,0.95
              c-0.97,0-1.9-0.19-2.78-0.56s-1.63-0.88-2.26-1.51c-0.63-0.63-1.13-1.39-1.5-2.26C8.1,16.37,7.91,15.45,7.91,14.48z M9.74,14.48
              c0,0.76,0.15,1.48,0.45,2.16c0.3,0.67,0.7,1.24,1.19,1.7c0.49,0.46,1.05,0.82,1.69,1.08c0.63,0.27,1.28,0.4,1.94,0.4
              c0.58,0,1.17-0.11,1.76-0.34c0.59-0.23,1.14-0.55,1.65-0.96c0.51-0.41,0.94-0.93,1.31-1.57c0.37-0.64,0.6-1.33,0.71-2.09
              c-1.63-0.34-2.94-1.04-3.92-2.1s-1.55-2.3-1.7-3.74C13.86,9.08,13,9.37,12.21,9.9c-0.78,0.53-1.39,1.2-1.82,2.02
              C9.96,12.74,9.74,13.59,9.74,14.48z
            `
      }
    }
  ],
  cloudy: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M3.89,17.6c0-0.99,0.31-1.88,0.93-2.65s1.41-1.27,2.38-1.49c0.26-1.17,0.85-2.14,1.78-2.88c0.93-0.75,2-1.12,3.22-1.12
          c1.18,0,2.24,0.36,3.16,1.09c0.93,0.73,1.53,1.66,1.8,2.8h0.27c1.18,0,2.18,0.41,3.01,1.24s1.25,1.83,1.25,3
          c0,1.18-0.42,2.18-1.25,3.01s-1.83,1.25-3.01,1.25H8.16c-0.58,0-1.13-0.11-1.65-0.34S5.52,21,5.14,20.62
          c-0.38-0.38-0.68-0.84-0.91-1.36S3.89,18.17,3.89,17.6z M5.34,17.6c0,0.76,0.28,1.42,0.82,1.96s1.21,0.82,1.99,0.82h9.28
          c0.77,0,1.44-0.27,1.99-0.82c0.55-0.55,0.83-1.2,0.83-1.96c0-0.76-0.27-1.42-0.83-1.96c-0.55-0.54-1.21-0.82-1.99-0.82h-1.39
          c-0.1,0-0.15-0.05-0.15-0.15l-0.07-0.49c-0.1-0.94-0.5-1.73-1.19-2.35s-1.51-0.93-2.45-0.93c-0.94,0-1.76,0.31-2.46,0.94
          c-0.7,0.62-1.09,1.41-1.18,2.34l-0.07,0.42c0,0.1-0.05,0.15-0.16,0.15l-0.45,0.07c-0.72,0.06-1.32,0.36-1.81,0.89
          C5.59,16.24,5.34,16.87,5.34,17.6z M14.19,8.88c-0.1,0.09-0.08,0.16,0.07,0.21c0.43,0.19,0.79,0.37,1.08,0.55
          c0.11,0.03,0.19,0.02,0.22-0.03c0.61-0.57,1.31-0.86,2.12-0.86c0.81,0,1.5,0.27,2.1,0.81c0.59,0.54,0.92,1.21,0.99,2l0.09,0.64h1.42
          c0.65,0,1.21,0.23,1.68,0.7c0.47,0.47,0.7,1.02,0.7,1.66c0,0.6-0.21,1.12-0.62,1.57s-0.92,0.7-1.53,0.77c-0.1,0-0.15,0.05-0.15,0.16
          v1.13c0,0.11,0.05,0.16,0.15,0.16c1.01-0.06,1.86-0.46,2.55-1.19s1.04-1.6,1.04-2.6c0-1.06-0.37-1.96-1.12-2.7
          c-0.75-0.75-1.65-1.12-2.7-1.12h-0.15c-0.26-1-0.81-1.82-1.65-2.47c-0.83-0.65-1.77-0.97-2.8-0.97C16.28,7.29,15.11,7.82,14.19,8.88
          z
        `
      }
    }
  ],
  fog: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M2.62,21.05c0-0.24,0.08-0.45,0.25-0.61c0.17-0.16,0.38-0.24,0.63-0.24h18.67c0.25,0,0.45,0.08,0.61,0.24
          c0.16,0.16,0.24,0.36,0.24,0.61c0,0.23-0.08,0.43-0.25,0.58c-0.17,0.16-0.37,0.23-0.6,0.23H3.5c-0.25,0-0.46-0.08-0.63-0.23
          C2.7,21.47,2.62,21.28,2.62,21.05z M5.24,17.91c0-0.24,0.09-0.44,0.26-0.6c0.15-0.15,0.35-0.23,0.59-0.23h18.67
          c0.23,0,0.42,0.08,0.58,0.24c0.16,0.16,0.23,0.35,0.23,0.59c0,0.24-0.08,0.44-0.23,0.6c-0.16,0.17-0.35,0.25-0.58,0.25H6.09
          c-0.24,0-0.44-0.08-0.6-0.25C5.32,18.34,5.24,18.14,5.24,17.91z M5.37,15.52c0,0.09,0.05,0.13,0.15,0.13h1.43
          c0.06,0,0.13-0.05,0.2-0.16c0.24-0.52,0.59-0.94,1.06-1.27c0.47-0.33,0.99-0.52,1.55-0.56l0.55-0.07c0.11,0,0.17-0.06,0.17-0.18
          l0.07-0.5c0.11-1.08,0.56-1.98,1.37-2.7c0.81-0.72,1.76-1.08,2.85-1.08c1.08,0,2.02,0.36,2.83,1.07c0.8,0.71,1.26,1.61,1.37,2.68
          l0.08,0.57c0,0.11,0.07,0.17,0.2,0.17h1.59c0.64,0,1.23,0.17,1.76,0.52s0.92,0.8,1.18,1.37c0.07,0.11,0.14,0.16,0.21,0.16h1.43
          c0.12,0,0.17-0.07,0.14-0.23c-0.29-1.02-0.88-1.86-1.74-2.51c-0.87-0.65-1.86-0.97-2.97-0.97h-0.32c-0.33-1.33-1.03-2.42-2.1-3.27
          s-2.28-1.27-3.65-1.27c-1.4,0-2.64,0.44-3.73,1.32s-1.78,2-2.09,3.36c-0.85,0.2-1.6,0.6-2.24,1.21c-0.64,0.61-1.09,1.33-1.34,2.18
          v-0.04C5.37,15.45,5.37,15.48,5.37,15.52z M6.98,24.11c0-0.24,0.09-0.43,0.26-0.59c0.15-0.15,0.35-0.23,0.6-0.23h18.68
          c0.24,0,0.44,0.08,0.6,0.23c0.17,0.16,0.25,0.35,0.25,0.58c0,0.24-0.08,0.44-0.25,0.61c-0.17,0.17-0.37,0.25-0.6,0.25H7.84
          c-0.23,0-0.43-0.09-0.6-0.26C7.07,24.55,6.98,24.34,6.98,24.11z
        `
      }
    }
  ],
  hail: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.64,16.9c0,1.33,0.46,2.47,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.34
          c0-0.11-0.06-0.17-0.17-0.17c-0.86-0.04-1.58-0.38-2.18-1.02c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.54,0.84-2.16
          c0.56-0.61,1.26-0.97,2.09-1.07l0.53-0.03c0.13,0,0.2-0.06,0.2-0.19l0.06-0.53c0.11-1.08,0.56-1.99,1.37-2.71
          c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.81,0.73,1.27,1.63,1.39,2.71l0.08,0.58c0,0.11,0.06,0.17,0.18,0.17
          h1.61c0.89,0,1.66,0.32,2.31,0.96c0.65,0.64,0.98,1.39,0.98,2.27c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.02
          c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c0.87-0.02,1.67-0.26,2.4-0.71c0.73-0.45,1.31-1.05,1.73-1.8
          c0.42-0.75,0.63-1.57,0.63-2.44c0-0.89-0.22-1.72-0.67-2.47c-0.44-0.75-1.05-1.35-1.81-1.78S21.29,12,20.4,12h-0.32
          c-0.32-1.34-1.03-2.43-2.1-3.28s-2.3-1.28-3.68-1.28c-1.41,0-2.66,0.44-3.75,1.31c-1.09,0.87-1.79,1.99-2.1,3.35
          c-1.11,0.26-2.02,0.83-2.73,1.73S4.64,15.75,4.64,16.9z M10.09,24.1c0.09,0.21,0.25,0.37,0.46,0.46c0.2,0.1,0.41,0.11,0.62,0.02
          c0.22-0.09,0.36-0.24,0.45-0.45c0.1-0.22,0.11-0.43,0.02-0.64c-0.08-0.21-0.24-0.35-0.45-0.44c-0.2-0.11-0.4-0.12-0.61-0.03
          c-0.21,0.09-0.36,0.24-0.46,0.47C10.01,23.66,10.01,23.86,10.09,24.1z M10.72,21.28c0,0.16,0.05,0.31,0.15,0.45
          c0.1,0.15,0.26,0.25,0.46,0.32c0.19,0.11,0.4,0.12,0.62,0.01c0.22-0.1,0.37-0.3,0.44-0.6l0.9-3.38c0.06-0.25,0.04-0.47-0.08-0.67
          c-0.12-0.2-0.29-0.32-0.53-0.36c-0.08-0.02-0.16-0.03-0.24-0.03c-0.16,0-0.32,0.05-0.47,0.15c-0.15,0.1-0.26,0.25-0.32,0.44
          l-0.88,3.39C10.73,21.16,10.72,21.25,10.72,21.28z M12.58,26.87c0,0.12,0.02,0.22,0.06,0.29c0.09,0.22,0.24,0.37,0.45,0.45
          c0.09,0.05,0.2,0.08,0.33,0.08c0.06,0,0.16-0.02,0.3-0.06c0.22-0.08,0.38-0.23,0.47-0.45c0.1-0.22,0.1-0.44,0-0.66
          c-0.1-0.22-0.25-0.37-0.45-0.46c-0.2-0.09-0.4-0.09-0.62,0c-0.19,0.08-0.32,0.2-0.41,0.36C12.62,26.58,12.58,26.73,12.58,26.87z
          M13.31,24.26c0,0.37,0.21,0.61,0.63,0.73c0.11,0.03,0.19,0.04,0.24,0.04c0.15,0,0.28-0.03,0.38-0.08c0.21-0.08,0.35-0.27,0.42-0.57
          l1.67-6.29c0.06-0.24,0.04-0.45-0.06-0.65c-0.1-0.19-0.27-0.32-0.49-0.38c-0.08-0.02-0.17-0.03-0.27-0.03
          c-0.16,0-0.32,0.05-0.48,0.15c-0.16,0.1-0.26,0.25-0.3,0.44l-1.71,6.34C13.32,24.1,13.31,24.2,13.31,24.26z M16.74,23.8
          c0,0.12,0.02,0.23,0.08,0.32c0.08,0.19,0.23,0.34,0.44,0.44c0.11,0.04,0.23,0.07,0.35,0.07c0.06,0,0.16-0.02,0.3-0.06
          c0.21-0.08,0.37-0.23,0.46-0.44c0.07-0.22,0.07-0.43-0.01-0.63c-0.08-0.2-0.22-0.35-0.42-0.45c-0.23-0.11-0.44-0.12-0.65-0.03
          c-0.21,0.09-0.36,0.24-0.46,0.47C16.77,23.59,16.74,23.69,16.74,23.8z M17.47,21.23c0,0.14,0.05,0.29,0.16,0.45
          c0.11,0.16,0.26,0.27,0.45,0.33c0.16,0.03,0.25,0.05,0.27,0.05c0.09,0,0.22-0.03,0.37-0.1c0.2-0.09,0.33-0.27,0.4-0.52l0.9-3.34
          c0.02-0.17,0.03-0.26,0.03-0.26c0-0.16-0.05-0.31-0.15-0.46c-0.1-0.15-0.25-0.25-0.45-0.31c-0.09-0.02-0.18-0.03-0.26-0.03
          c-0.16,0-0.32,0.05-0.47,0.15s-0.25,0.25-0.31,0.45l-0.9,3.36L17.47,21.23z
        `
      }
    }
  ],
  'partly-cloudy-day': [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M1.56,16.9c0,0.9,0.22,1.73,0.66,2.49s1.04,1.36,1.8,1.8c0.76,0.44,1.58,0.66,2.47,0.66h10.83c0.89,0,1.72-0.22,2.48-0.66
          c0.76-0.44,1.37-1.04,1.81-1.8c0.44-0.76,0.67-1.59,0.67-2.49c0-0.66-0.14-1.33-0.42-2C22.62,13.98,23,12.87,23,11.6
          c0-0.71-0.14-1.39-0.41-2.04c-0.27-0.65-0.65-1.2-1.12-1.67C21,7.42,20.45,7.04,19.8,6.77c-0.65-0.28-1.33-0.41-2.04-0.41
          c-1.48,0-2.77,0.58-3.88,1.74c-0.77-0.44-1.67-0.66-2.7-0.66c-1.41,0-2.65,0.44-3.73,1.31c-1.08,0.87-1.78,1.99-2.08,3.35
          c-1.12,0.26-2.03,0.83-2.74,1.73S1.56,15.75,1.56,16.9z M3.27,16.9c0-0.84,0.28-1.56,0.84-2.17c0.56-0.61,1.26-0.96,2.1-1.06
          l0.5-0.03c0.12,0,0.19-0.06,0.19-0.18l0.07-0.54c0.14-1.08,0.61-1.99,1.41-2.71c0.8-0.73,1.74-1.09,2.81-1.09
          c1.1,0,2.06,0.37,2.87,1.1c0.82,0.73,1.27,1.63,1.37,2.71l0.07,0.58c0.02,0.11,0.09,0.17,0.21,0.17h1.61c0.88,0,1.64,0.32,2.28,0.96
          c0.64,0.64,0.96,1.39,0.96,2.27c0,0.91-0.32,1.68-0.95,2.32c-0.63,0.64-1.4,0.96-2.28,0.96H6.49c-0.88,0-1.63-0.32-2.27-0.97
          C3.59,18.57,3.27,17.8,3.27,16.9z M9.97,4.63c0,0.24,0.08,0.45,0.24,0.63l0.66,0.64c0.25,0.19,0.46,0.27,0.64,0.25
          c0.21,0,0.39-0.09,0.55-0.26s0.24-0.38,0.24-0.62c0-0.24-0.09-0.44-0.26-0.59l-0.59-0.66c-0.18-0.16-0.38-0.24-0.61-0.24
          c-0.24,0-0.45,0.08-0.62,0.25C10.05,4.19,9.97,4.39,9.97,4.63z M15.31,9.06c0.69-0.67,1.51-1,2.45-1c0.99,0,1.83,0.34,2.52,1.03
          c0.69,0.69,1.04,1.52,1.04,2.51c0,0.62-0.17,1.24-0.51,1.84C19.84,12.48,18.68,12,17.32,12H17C16.75,10.91,16.19,9.93,15.31,9.06z
          M16.94,3.78c0,0.26,0.08,0.46,0.23,0.62s0.35,0.23,0.59,0.23c0.26,0,0.46-0.08,0.62-0.23c0.16-0.16,0.23-0.36,0.23-0.62V1.73
          c0-0.24-0.08-0.43-0.24-0.59s-0.36-0.23-0.61-0.23c-0.24,0-0.43,0.08-0.59,0.23s-0.23,0.35-0.23,0.59V3.78z M22.46,6.07
          c0,0.26,0.07,0.46,0.22,0.62c0.21,0.16,0.42,0.24,0.62,0.24c0.18,0,0.38-0.08,0.59-0.24l1.43-1.43c0.16-0.18,0.24-0.39,0.24-0.64
          c0-0.24-0.08-0.44-0.24-0.6c-0.16-0.16-0.36-0.24-0.59-0.24c-0.24,0-0.43,0.08-0.58,0.24l-1.47,1.43
          C22.53,5.64,22.46,5.84,22.46,6.07z M23.25,17.91c0,0.24,0.08,0.45,0.25,0.63l0.65,0.63c0.15,0.16,0.34,0.24,0.58,0.24
          s0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.62c0-0.22-0.08-0.42-0.24-0.58l-0.65-0.65c-0.16-0.16-0.35-0.24-0.57-0.24
          c-0.24,0-0.44,0.08-0.6,0.24C23.34,17.47,23.25,17.67,23.25,17.91z M24.72,11.6c0,0.23,0.09,0.42,0.26,0.58
          c0.16,0.16,0.37,0.24,0.61,0.24h2.04c0.23,0,0.42-0.08,0.58-0.23s0.23-0.35,0.23-0.59c0-0.24-0.08-0.44-0.23-0.6
          s-0.35-0.25-0.58-0.25h-2.04c-0.24,0-0.44,0.08-0.61,0.25C24.8,11.17,24.72,11.37,24.72,11.6z
        `
      }
    }
  ],
  'partly-cloudy-night': [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.14,16.9c0-1.16,0.35-2.18,1.06-3.08s1.62-1.47,2.74-1.72c0.23-1.03,0.7-1.93,1.4-2.7c0.7-0.77,1.55-1.32,2.53-1.65
          c0.62-0.21,1.26-0.32,1.93-0.32c0.81,0,1.6,0.16,2.35,0.48c0.28-0.47,0.61-0.88,0.99-1.22c0.38-0.34,0.77-0.61,1.17-0.79
          c0.4-0.18,0.8-0.32,1.18-0.41s0.76-0.13,1.12-0.13c0.38,0,0.79,0.05,1.23,0.16l0.82,0.25c0.14,0.06,0.18,0.13,0.14,0.22l-0.14,0.6
          c-0.07,0.31-0.1,0.6-0.1,0.86c0,0.31,0.05,0.63,0.15,0.95c0.1,0.32,0.24,0.63,0.44,0.94c0.19,0.31,0.46,0.58,0.8,0.83
          c0.34,0.25,0.72,0.44,1.15,0.57l0.62,0.22c0.1,0.03,0.15,0.08,0.15,0.16c0,0.02-0.01,0.04-0.02,0.07l-0.18,0.67
          c-0.27,1.08-0.78,1.93-1.5,2.57c0.4,0.7,0.62,1.45,0.65,2.24c0.01,0.05,0.01,0.12,0.01,0.23c0,0.89-0.22,1.72-0.67,2.48
          c-0.44,0.76-1.05,1.36-1.8,1.8c-0.76,0.44-1.59,0.67-2.48,0.67H9.07c-0.89,0-1.72-0.22-2.48-0.67s-1.35-1.05-1.79-1.8
          S4.14,17.8,4.14,16.9z M5.85,16.9c0,0.89,0.32,1.66,0.96,2.31c0.64,0.65,1.39,0.98,2.26,0.98h10.81c0.89,0,1.65-0.32,2.28-0.97
          s0.95-1.42,0.95-2.32c0-0.88-0.32-1.63-0.96-2.26c-0.64-0.63-1.4-0.95-2.28-0.95h-1.78l-0.1-0.75c-0.1-1.01-0.52-1.88-1.26-2.59
          s-1.62-1.11-2.63-1.2c-0.03,0-0.08,0-0.15-0.01c-0.07-0.01-0.11-0.01-0.15-0.01c-0.51,0-1.02,0.1-1.54,0.29V9.4
          c-0.73,0.28-1.35,0.74-1.84,1.37c-0.5,0.63-0.8,1.35-0.9,2.17l-0.07,0.72l-0.68,0.03c-0.84,0.1-1.54,0.45-2.1,1.06
          S5.85,16.07,5.85,16.9z M17.6,8.79c1.06,0.91,1.72,1.97,1.97,3.18h0.32c1.24,0,2.3,0.39,3.17,1.18c0.33-0.31,0.58-0.67,0.76-1.07
          c-0.91-0.43-1.63-1.09-2.16-1.97c-0.52-0.88-0.79-1.81-0.79-2.78V7.09c-0.05-0.01-0.13-0.01-0.24-0.01
          c-0.58-0.01-1.15,0.13-1.7,0.44C18.38,7.82,17.93,8.24,17.6,8.79z
        `
      }
    }
  ],
  rain: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
        M4.65,16.96c0,1.32,0.47,2.46,1.4,3.41c0.93,0.96,2.06,1.46,3.38,1.5c0.12,0,0.18-0.06,0.18-0.17v-1.33
        c0-0.12-0.06-0.18-0.18-0.18c-0.84-0.04-1.57-0.38-2.17-1.02s-0.91-1.37-0.91-2.22c0-0.84,0.28-1.57,0.85-2.19
        c0.57-0.62,1.26-0.97,2.1-1.04l0.53-0.07c0.12,0,0.19-0.06,0.19-0.18l0.07-0.5c0.1-1.09,0.55-2.01,1.36-2.75s1.76-1.11,2.86-1.11
        c1.08,0,2.03,0.37,2.84,1.1c0.81,0.73,1.28,1.63,1.4,2.71l0.07,0.58c0,0.12,0.06,0.18,0.19,0.18h1.6c0.9,0,1.67,0.32,2.32,0.97
        c0.64,0.64,0.97,1.41,0.97,2.3c0,0.84-0.3,1.58-0.9,2.22c-0.6,0.63-1.33,0.97-2.18,1.02c-0.13,0-0.2,0.06-0.2,0.18v1.33
        c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.54,3.38-1.5s1.38-2.09,1.38-3.42c0-0.89-0.22-1.72-0.67-2.48
        c-0.44-0.76-1.05-1.36-1.81-1.8c-0.76-0.44-1.59-0.66-2.48-0.66h-0.31c-0.33-1.34-1.03-2.43-2.11-3.29
        c-1.07-0.85-2.3-1.28-3.68-1.28c-1.41,0-2.66,0.44-3.75,1.31s-1.79,1.99-2.1,3.35c-1.13,0.29-2.04,0.88-2.75,1.77
        S4.65,15.8,4.65,16.96z M10.05,23.98c0,0.17,0.05,0.34,0.16,0.51c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.44,0.06,0.64-0.04
        c0.19-0.09,0.33-0.28,0.39-0.56l0.14-0.61c0.05-0.23,0.02-0.44-0.09-0.63s-0.28-0.33-0.52-0.4c-0.22-0.07-0.44-0.04-0.64,0.08
        s-0.34,0.3-0.4,0.53l-0.14,0.59C10.06,23.83,10.05,23.89,10.05,23.98z M10.81,21.08c0,0.21,0.08,0.4,0.25,0.57
        c0.16,0.17,0.34,0.25,0.56,0.25c0.24,0,0.44-0.08,0.6-0.24c0.16-0.16,0.24-0.35,0.24-0.59c0-0.23-0.08-0.43-0.24-0.59
        c-0.16-0.16-0.36-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.23C10.89,20.65,10.81,20.85,10.81,21.08z M11.42,18.81
        c-0.01,0.16,0.03,0.31,0.14,0.45c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07S13,19.23,13.07,19l0.28-0.9
        c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.34,0.28-0.41,0.5
        l-0.24,0.92c0,0.02-0.01,0.06-0.02,0.12C11.43,18.72,11.42,18.77,11.42,18.81z M12.59,27.1c0,0.18,0.05,0.34,0.15,0.5
        c0.1,0.16,0.26,0.27,0.48,0.33c0.08,0.02,0.17,0.03,0.25,0.03c0.43,0,0.69-0.2,0.79-0.61l0.14-0.59c0.06-0.26,0.03-0.48-0.08-0.68
        c-0.12-0.2-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.14,0.59
        C12.6,26.97,12.59,27.04,12.59,27.1z M13.36,24.2c0,0.22,0.08,0.41,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24
        c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
        c-0.24,0-0.43,0.08-0.59,0.23S13.36,23.97,13.36,24.2z M13.99,21.93c-0.01,0.15,0.03,0.31,0.13,0.47c0.1,0.16,0.25,0.26,0.45,0.3
        c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.27-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
        c-0.22-0.07-0.43-0.04-0.64,0.08c-0.21,0.12-0.34,0.3-0.41,0.53l-0.23,0.9C14,21.74,13.99,21.83,13.99,21.93z M16.75,24.08
        c0,0.16,0.05,0.32,0.15,0.48c0.1,0.16,0.26,0.27,0.46,0.33c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.1,0.02,0.14,0.02
        c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.11-0.21-0.28-0.34-0.51-0.41
        c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.02-0.01,0.07-0.02,0.12S16.75,24.04,16.75,24.08z
         M17.49,21.12c0,0.22,0.08,0.42,0.25,0.57c0.15,0.16,0.34,0.24,0.57,0.24c0.24,0,0.43-0.08,0.59-0.23s0.23-0.35,0.23-0.58
        c0-0.24-0.08-0.43-0.23-0.59s-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23C17.57,20.69,17.49,20.88,17.49,21.12z M18.1,18.81
        c0,0.17,0.05,0.33,0.16,0.48c0.11,0.15,0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02s0.11,0.02,0.14,0.02
        c0.1,0,0.22-0.03,0.36-0.09c0.21-0.11,0.35-0.29,0.41-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.08-0.63c-0.11-0.2-0.28-0.33-0.51-0.4
        c-0.23-0.07-0.44-0.05-0.64,0.06c-0.19,0.11-0.33,0.27-0.39,0.51l-0.28,0.91c0,0.02-0.01,0.06-0.02,0.12
        C18.1,18.74,18.1,18.78,18.1,18.81z
        `
      }
    }
  ],
  sleet: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.09,16.95c0-1.16,0.36-2.19,1.08-3.09s1.64-1.49,2.74-1.74c0.31-1.37,1.01-2.49,2.1-3.37s2.35-1.32,3.77-1.32
          c0.81,0,1.55,0.13,2.2,0.4c0,0.01,0,0.01,0.01,0.02c0.84,0.32,1.58,0.84,2.21,1.55h0.03c0.68,0.73,1.13,1.6,1.37,2.62h0.31
          c1.08,0,2.02,0.29,2.83,0.86v-0.01c0.53,0.36,0.98,0.8,1.34,1.33c0.36,0.53,0.6,1.11,0.73,1.74c0.04,0.21,0.06,0.38,0.08,0.52v0.06
          c0,0.01,0,0.06,0.01,0.17s0.01,0.19,0.01,0.24v0.03c0,0.88-0.21,1.7-0.64,2.45c-0.42,0.75-1,1.36-1.74,1.81
          c-0.73,0.45-1.54,0.69-2.42,0.72c-0.13,0-0.2-0.06-0.2-0.17v-1.34c0-0.13,0.07-0.19,0.2-0.19c0.86-0.04,1.58-0.38,2.18-1.02
          c0.6-0.64,0.9-1.39,0.9-2.26c0-0.89-0.32-1.65-0.97-2.29c-0.64-0.64-1.41-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17
          l-0.08-0.59c-0.1-1-0.52-1.86-1.27-2.59c-0.01-0.01-0.01-0.02-0.02-0.03s-0.02-0.02-0.02-0.03c-0.01-0.01-0.02-0.02-0.04-0.02
          c0-0.02-0.01-0.03-0.02-0.03c-0.73-0.66-1.58-1.04-2.56-1.12c-0.07-0.01-0.18-0.01-0.34-0.01c-1.1,0-2.05,0.37-2.86,1.1
          s-1.27,1.64-1.37,2.72l-0.08,0.59c-0.03,0.09-0.11,0.14-0.22,0.14L8.75,13.7c-0.84,0.1-1.55,0.46-2.11,1.07s-0.84,1.34-0.84,2.18
          v0.04h0.03c0.01,0.48,0.11,0.93,0.3,1.35c0.2,0.43,0.46,0.79,0.8,1.09c0.21,0.18,0.45,0.34,0.74,0.48v0.01
          c0.4,0.19,0.8,0.3,1.21,0.32c0.11,0,0.17,0.06,0.17,0.18v1.34c0,0.11-0.06,0.17-0.17,0.17c-0.52-0.03-1.01-0.13-1.48-0.3v0.01
          c-0.83-0.29-1.54-0.77-2.11-1.43s-0.95-1.44-1.11-2.31v-0.03c-0.01-0.01-0.01-0.02-0.01-0.04C4.11,17.57,4.09,17.27,4.09,16.95z
          M9.59,24.12c0-0.03,0.01-0.07,0.02-0.13c0.01-0.05,0.02-0.09,0.02-0.12l0.09-0.59c0.07-0.24,0.2-0.41,0.41-0.53
          s0.43-0.14,0.68-0.08c0.23,0.07,0.39,0.21,0.51,0.41c0.11,0.21,0.13,0.42,0.07,0.63l-0.14,0.6c-0.1,0.44-0.35,0.66-0.76,0.66
          c-0.03,0-0.08-0.01-0.14-0.02c-0.06-0.01-0.1-0.02-0.14-0.02c-0.21-0.06-0.36-0.17-0.46-0.33C9.64,24.45,9.59,24.29,9.59,24.12z
          M10.33,21.18c0-0.24,0.08-0.43,0.23-0.59s0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59c0,0.23-0.08,0.42-0.23,0.58
          s-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.57-0.24C10.42,21.59,10.33,21.4,10.33,21.18z M11.97,27.17c0-0.04,0.01-0.11,0.04-0.23
          l0.13-0.59c0.07-0.23,0.21-0.4,0.41-0.51c0.21-0.12,0.42-0.14,0.63-0.07c0.23,0.04,0.41,0.17,0.53,0.37
          c0.12,0.2,0.15,0.43,0.08,0.68l-0.13,0.59c-0.1,0.41-0.37,0.61-0.8,0.61c-0.07,0-0.16-0.01-0.24-0.03
          c-0.22-0.06-0.38-0.17-0.49-0.33C12.03,27.5,11.97,27.34,11.97,27.17z M12.76,24.26c0-0.23,0.08-0.43,0.23-0.58
          c0.16-0.16,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.58c0,0.24-0.08,0.43-0.23,0.59
          c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.58-0.24C12.84,24.68,12.76,24.49,12.76,24.26z M13.38,21.99
          c0-0.1,0.01-0.19,0.03-0.27l0.23-0.9c0.07-0.23,0.21-0.41,0.41-0.53c0.21-0.12,0.42-0.15,0.64-0.08c0.24,0.07,0.41,0.2,0.53,0.4
          s0.14,0.41,0.07,0.63l-0.26,0.9c-0.08,0.28-0.22,0.46-0.41,0.56c-0.19,0.1-0.41,0.12-0.64,0.06c-0.2-0.04-0.35-0.14-0.45-0.3
          C13.41,22.3,13.37,22.14,13.38,21.99z M16.14,24.13c0-0.03,0-0.08,0.01-0.13s0.01-0.09,0.01-0.11l0.09-0.59
          c0.07-0.24,0.2-0.41,0.41-0.53s0.43-0.14,0.68-0.08c0.23,0.07,0.4,0.21,0.51,0.41c0.12,0.21,0.14,0.42,0.07,0.63l-0.14,0.6
          c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08-0.01-0.14-0.02c-0.06-0.01-0.11-0.02-0.14-0.02c-0.2-0.06-0.35-0.17-0.45-0.33
          C16.2,24.46,16.14,24.3,16.14,24.13z M16.88,21.19c0-0.24,0.08-0.43,0.23-0.59c0.16-0.16,0.35-0.23,0.59-0.23
          c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58C18.14,21.92,17.95,22,17.71,22
          c-0.24,0-0.43-0.08-0.58-0.24C16.97,21.61,16.88,21.42,16.88,21.19z
        `
      }
    }
  ],
  snow: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.64,16.95c0-1.16,0.35-2.18,1.06-3.08s1.62-1.48,2.74-1.76c0.31-1.36,1.01-2.48,2.1-3.36s2.34-1.31,3.75-1.31
          c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.66c0.76,0.44,1.37,1.04,1.81,1.8
          c0.44,0.76,0.67,1.59,0.67,2.48c0,1.32-0.46,2.47-1.39,3.42c-0.92,0.96-2.05,1.46-3.38,1.5c-0.13,0-0.2-0.06-0.2-0.17v-1.33
          c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.38,0.9-2.23c0-0.89-0.32-1.65-0.97-2.3s-1.42-0.97-2.32-0.97h-1.61
          c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.72c-0.82-0.73-1.76-1.1-2.85-1.1c-1.1,0-2.05,0.37-2.86,1.11
          c-0.81,0.74-1.27,1.65-1.37,2.75l-0.06,0.5c0,0.12-0.07,0.19-0.2,0.19l-0.53,0.07c-0.83,0.07-1.53,0.41-2.1,1.04
          s-0.85,1.35-0.85,2.19c0,0.85,0.3,1.59,0.9,2.23s1.33,0.97,2.18,1.02c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17
          c-1.34-0.04-2.47-0.54-3.4-1.5C5.1,19.42,4.64,18.27,4.64,16.95z M11,21.02c0-0.22,0.08-0.42,0.24-0.58
          c0.16-0.16,0.35-0.24,0.59-0.24c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58c0,0.24-0.08,0.44-0.24,0.6
          c-0.16,0.17-0.35,0.25-0.59,0.25c-0.23,0-0.43-0.08-0.59-0.25C11.08,21.46,11,21.26,11,21.02z M11,24.65c0-0.24,0.08-0.44,0.24-0.6
          c0.16-0.15,0.35-0.23,0.58-0.23c0.23,0,0.43,0.08,0.59,0.23c0.16,0.16,0.24,0.35,0.24,0.59c0,0.24-0.08,0.43-0.24,0.59
          c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.43-0.08-0.59-0.23C11.08,25.08,11,24.88,11,24.65z M14.19,22.95
          c0-0.23,0.08-0.44,0.25-0.62c0.16-0.16,0.35-0.24,0.57-0.24c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6
          c0,0.23-0.08,0.43-0.25,0.6c-0.17,0.17-0.37,0.25-0.61,0.25c-0.23,0-0.42-0.08-0.58-0.25S14.19,23.18,14.19,22.95z M14.19,19.33
          c0-0.23,0.08-0.43,0.25-0.6c0.18-0.16,0.37-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.36,0.25,0.6
          c0,0.23-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,19.76,14.19,19.56,14.19,19.33z
          M14.19,26.61c0-0.23,0.08-0.43,0.25-0.61c0.16-0.16,0.35-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.37,0.25,0.6
          s-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,27.03,14.19,26.84,14.19,26.61z
          M17.41,21.02c0-0.22,0.08-0.41,0.25-0.58c0.17-0.17,0.37-0.25,0.6-0.25c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
          c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.24,0-0.44-0.08-0.6-0.25C17.5,21.45,17.41,21.25,17.41,21.02z
          M17.41,24.65c0-0.22,0.08-0.42,0.25-0.6c0.16-0.15,0.36-0.23,0.6-0.23c0.24,0,0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59
          c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.44-0.08-0.6-0.24C17.5,25.07,17.41,24.88,17.41,24.65z
        `
      }
    }
  ],
  thunderstorm: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.63,16.91c0,1.11,0.33,2.1,0.99,2.97s1.52,1.47,2.58,1.79l-0.66,1.68c-0.03,0.14,0.02,0.22,0.14,0.22h2.13l-0.98,4.3h0.28
          l3.92-5.75c0.04-0.04,0.04-0.09,0.01-0.14c-0.03-0.05-0.08-0.07-0.15-0.07h-2.18l2.48-4.64c0.07-0.14,0.02-0.22-0.14-0.22h-2.94
          c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.87c-0.71-0.18-1.3-0.57-1.77-1.16c-0.47-0.59-0.7-1.26-0.7-2.01c0-0.83,0.28-1.55,0.85-2.17
          c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.07c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51c0.11-1.08,0.56-1.99,1.37-2.72
          c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.85,1.1c0.82,0.73,1.28,1.64,1.4,2.72l0.07,0.58c0,0.11,0.06,0.17,0.18,0.17h1.6
          c0.91,0,1.68,0.32,2.32,0.95c0.64,0.63,0.97,1.4,0.97,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.33,0.97-2.2,1.04
          c-0.13,0-0.2,0.06-0.2,0.18v1.37c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.39-1.51s1.39-2.11,1.39-3.45
          c0-0.9-0.22-1.73-0.67-2.49c-0.44-0.76-1.05-1.36-1.81-1.8c-0.77-0.44-1.6-0.66-2.5-0.66H20.1c-0.33-1.33-1.04-2.42-2.11-3.26
          s-2.3-1.27-3.68-1.27c-1.41,0-2.67,0.44-3.76,1.31s-1.79,1.99-2.1,3.36c-1.11,0.26-2.02,0.83-2.74,1.73S4.63,15.76,4.63,16.91z
          M12.77,26.62c0,0.39,0.19,0.65,0.58,0.77c0.01,0,0.05,0,0.11,0.01c0.06,0.01,0.11,0.01,0.14,0.01c0.17,0,0.33-0.05,0.49-0.15
          c0.16-0.1,0.27-0.26,0.32-0.48l2.25-8.69c0.06-0.24,0.04-0.45-0.07-0.65c-0.11-0.19-0.27-0.32-0.5-0.39
          c-0.17-0.02-0.26-0.03-0.26-0.03c-0.16,0-0.32,0.05-0.47,0.15c-0.15,0.1-0.26,0.25-0.31,0.45l-2.26,8.72
          C12.78,26.44,12.77,26.53,12.77,26.62z M16.93,23.56c0,0.13,0.03,0.26,0.1,0.38c0.14,0.22,0.31,0.37,0.51,0.44
          c0.11,0.03,0.21,0.05,0.3,0.05s0.2-0.02,0.32-0.08c0.21-0.09,0.35-0.28,0.42-0.57l1.44-5.67c0.03-0.14,0.05-0.23,0.05-0.27
          c0-0.15-0.05-0.3-0.16-0.45s-0.26-0.26-0.46-0.32c-0.17-0.02-0.26-0.03-0.26-0.03c-0.17,0-0.33,0.05-0.47,0.15
          c-0.14,0.1-0.24,0.25-0.3,0.45l-1.46,5.7c0,0.02,0,0.05-0.01,0.11C16.93,23.5,16.93,23.53,16.93,23.56z
        `
      }
    }
  ],
  tornado: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.13,15.19c0,0.69,0.36,1.28,1.08,1.77c1.32,0.93,3.31,1.39,5.98,1.39c1.2,0,2.31-0.1,3.34-0.31
          c1.08-0.23,1.97-0.6,2.65-1.1s1.03-1.08,1.03-1.76c0-0.21-0.04-0.41-0.12-0.62c1.39-0.34,2.48-0.8,3.27-1.38s1.19-1.25,1.19-2
          c0-0.19-0.03-0.39-0.09-0.6c2.29-0.81,3.43-1.9,3.43-3.28c0-0.88-0.5-1.66-1.49-2.34c-1.95-1.3-4.81-1.95-8.58-1.95
          c-1.78,0-3.39,0.16-4.83,0.47C9.42,3.8,8.16,4.3,7.2,4.98S5.76,6.44,5.76,7.31c0,0.52,0.16,0.99,0.48,1.42
          c-1.18,0.67-1.77,1.49-1.77,2.46c0,0.75,0.37,1.41,1.1,1.98C4.61,13.73,4.13,14.4,4.13,15.19z M4.73,19.69
          c0,0.73,0.45,1.31,1.35,1.72s2.04,0.62,3.41,0.62c1.39,0,2.53-0.21,3.44-0.62s1.36-0.99,1.36-1.72c0-0.27-0.09-0.5-0.26-0.69
          s-0.4-0.28-0.67-0.28c-0.22,0-0.42,0.08-0.6,0.23s-0.29,0.35-0.34,0.57c-0.2,0.16-0.56,0.3-1.1,0.43s-1.15,0.2-1.83,0.2
          c-1.1,0-2-0.16-2.68-0.47c0.16-0.16,0.24-0.36,0.26-0.6s-0.04-0.45-0.15-0.62c-0.16-0.21-0.36-0.35-0.61-0.4s-0.48,0-0.7,0.13
          C5.02,18.6,4.73,19.09,4.73,19.69z M6.01,15.19c0-0.01,0.06-0.07,0.19-0.18c0.09-0.09,0.28-0.2,0.56-0.34s0.61-0.25,0.96-0.35
          l0.12-0.06c1.62,0.54,3.51,0.81,5.67,0.81c0.95,0,1.81-0.05,2.58-0.16l0.26,0.23c-0.09,0.16-0.3,0.32-0.63,0.5
          c-0.4,0.21-1.02,0.41-1.86,0.57s-1.73,0.25-2.67,0.25s-1.83-0.08-2.67-0.25s-1.47-0.36-1.88-0.57C6.3,15.5,6.09,15.35,6.01,15.19z
          M6.12,23.61c0,0.63,0.36,1.12,1.08,1.46s1.61,0.51,2.67,0.51c1.08,0,1.99-0.17,2.72-0.51s1.1-0.83,1.1-1.46
          c0-0.25-0.09-0.48-0.28-0.67s-0.41-0.29-0.66-0.29c-0.47,0-0.78,0.24-0.92,0.72c-0.39,0.24-1.04,0.37-1.96,0.37
          c-0.8,0-1.44-0.12-1.92-0.37c-0.15-0.48-0.45-0.72-0.92-0.72c-0.25,0-0.47,0.09-0.64,0.28S6.12,23.34,6.12,23.61z M6.33,11.19
          c0-0.08,0.05-0.17,0.15-0.28c0.24-0.3,0.72-0.6,1.42-0.88c1.92,1.03,4.56,1.54,7.91,1.54c1.71,0,3.32-0.16,4.82-0.47v0.09
          c0,0.15-0.09,0.3-0.28,0.45c-0.41,0.36-1.17,0.7-2.29,1.03c-1.21,0.36-2.73,0.54-4.56,0.54c-1.84,0-3.36-0.18-4.57-0.54
          C7.77,12.35,7,12.01,6.61,11.65C6.42,11.5,6.33,11.35,6.33,11.19z M7.63,7.31c0-0.18,0.12-0.37,0.35-0.59
          C8.43,6.3,9.33,5.9,10.66,5.51c1.43-0.42,3.14-0.63,5.14-0.63c2.01,0,3.74,0.21,5.19,0.63c1.35,0.39,2.24,0.8,2.68,1.22
          c0.22,0.22,0.34,0.42,0.34,0.59s-0.11,0.35-0.34,0.56c-0.44,0.42-1.33,0.83-2.68,1.23c-1.45,0.42-3.17,0.63-5.19,0.63
          c-2,0-3.72-0.21-5.14-0.63C9.32,8.71,8.42,8.3,7.98,7.87C7.75,7.66,7.63,7.48,7.63,7.31z
        `
      }
    }
  ],
  wind: [
    {
      type: 'svg',
      props: {
        fill: 'black',
        viewBox: '0 0 30 30',
        height: '1em',
        width: '1em',
        x: 0,
        y: 0,
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    {
      type: 'path',
      props: {
        d: `
          M4.65,15.5c0-0.22,0.08-0.41,0.23-0.56c0.16-0.15,0.35-0.22,0.57-0.22h12.08c0.22,0,0.4,0.07,0.54,0.22
          c0.14,0.15,0.22,0.34,0.22,0.57c0,0.22-0.07,0.4-0.22,0.54c-0.14,0.14-0.32,0.22-0.54,0.22H5.45c-0.22,0-0.42-0.07-0.57-0.22
          C4.72,15.9,4.65,15.72,4.65,15.5z M7.06,12.6c0-0.22,0.08-0.4,0.23-0.55c0.15-0.15,0.34-0.23,0.56-0.23h12.09
          c0.21,0,0.39,0.08,0.54,0.23c0.15,0.15,0.22,0.33,0.22,0.55c0,0.22-0.07,0.4-0.22,0.56c-0.15,0.15-0.33,0.23-0.54,0.23H7.86
          c-0.22,0-0.41-0.08-0.56-0.23S7.06,12.82,7.06,12.6z M8.68,18.34c0-0.21,0.08-0.39,0.24-0.54c0.14-0.14,0.32-0.22,0.54-0.22h12.1
          c0.22,0,0.41,0.07,0.56,0.22c0.15,0.14,0.22,0.32,0.22,0.54s-0.08,0.41-0.23,0.56s-0.34,0.23-0.56,0.23H9.46
          c-0.22,0-0.4-0.08-0.56-0.23S8.68,18.56,8.68,18.34z M19.26,15.5c0-0.23,0.07-0.42,0.22-0.57c0.15-0.15,0.34-0.22,0.57-0.22h4.52
          c0.23,0,0.42,0.07,0.57,0.22c0.15,0.15,0.22,0.34,0.22,0.56c0,0.22-0.07,0.4-0.22,0.54c-0.15,0.14-0.34,0.22-0.56,0.22h-4.52
          c-0.23,0-0.42-0.07-0.57-0.22C19.33,15.9,19.26,15.72,19.26,15.5z
        `
      }
    }
  ]
};

export { weatherIcons };