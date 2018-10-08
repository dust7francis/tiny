
const tiny: (value: string) => string
= (value: string) => {
    if (typeof value !== 'string') {
        throw new TypeError('Tiny wants a string!')
      }
      return value.split(/\s+/).join(' ')
}

export default tiny
  