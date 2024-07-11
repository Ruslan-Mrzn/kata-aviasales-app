export default () => {
  self.onmessage = function (event) {
    const { type, data } = event.data
    if (type === 'cheapest') {
      data.sort((a, b) => a.price - b.price)
    }
    if (type === 'fastest') {
      data.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - b.segments[0].duration - b.segments[1].duration
      )
    }
    if (type === 'optimal') {
      data.sort(
        (a, b) =>
          a.price +
          a.segments[0].duration +
          a.segments[1].duration -
          b.price -
          b.segments[0].duration -
          b.segments[1].duration
      )
    }
    self.postMessage(data)
  }
}
