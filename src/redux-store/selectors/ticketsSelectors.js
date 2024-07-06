import { createSelector } from 'reselect'

export const allTickets = (s) => s.tickets

export const noneTickets = () => []

export const withoutTransfer = createSelector(
  (s) => s.tickets,
  (tickets) =>
    tickets.filter(({ segments }) => {
      const forward = segments[0]
      const back = segments[1]
      return !forward.stops.length && !back.stops.length
    })
)

export const withOneTransfer = createSelector(
  (s) => s.tickets,
  (tickets) =>
    tickets.filter(({ segments }) => {
      const forward = segments[0]
      const back = segments[1]
      return forward.stops.length === 1 && back.stops.length === 1
    })
)

export const withTwoTransfer = createSelector(
  (s) => s.tickets,
  (tickets) =>
    tickets.filter(({ segments }) => {
      const forward = segments[0]
      const back = segments[1]
      return forward.stops.length === 2 && back.stops.length === 2
    })
)

export const withThreeTransfer = createSelector(
  (s) => s.tickets,
  (tickets) =>
    tickets.filter(({ segments }) => {
      const forward = segments[0]
      const back = segments[1]
      return forward.stops.length === 3 && back.stops.length === 3
    })
)

export const withOneTransferAndWithTwoTransferAndWithTreeTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 1 && back.stops.length !== 0) ||
      (forward.stops.length === 2 && back.stops.length !== 0) ||
      (forward.stops.length === 3 && back.stops.length !== 0)
    )
  }),
])

export const withoutTransferAndWithTwoTransferAndWithTreeTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 0 && back.stops.length !== 1) ||
      (forward.stops.length === 2 && back.stops.length !== 1) ||
      (forward.stops.length === 3 && back.stops.length !== 1)
    )
  }),
])

export const withoutTransferAndWithOneTransferAndWithTreeTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 0 && back.stops.length !== 2) ||
      (forward.stops.length === 1 && back.stops.length !== 2) ||
      (forward.stops.length === 3 && back.stops.length !== 2)
    )
  }),
])

export const withoutTransferAndWithOneTransferAndWithTwoTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 0 && back.stops.length !== 3) ||
      (forward.stops.length === 1 && back.stops.length !== 3) ||
      (forward.stops.length === 2 && back.stops.length !== 3)
    )
  }),
])

export const withoutTransferAndWithOneTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 0 && back.stops.length !== 2 && back.stops.length !== 3) ||
      (forward.stops.length === 1 && back.stops.length !== 2 && back.stops.length !== 3)
    )
  }),
])

export const withoutTransferAndWithTwoTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 0 && back.stops.length !== 1 && back.stops.length !== 3) ||
      (forward.stops.length === 2 && back.stops.length !== 1 && back.stops.length !== 3)
    )
  }),
])

export const withoutTransferAndWithThreeTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 0 && back.stops.length !== 1 && back.stops.length !== 2) ||
      (forward.stops.length === 3 && back.stops.length !== 1 && back.stops.length !== 2)
    )
  }),
])

export const withOneTransferAndWithTwoTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 1 && back.stops.length !== 0 && back.stops.length !== 3) ||
      (forward.stops.length === 2 && back.stops.length !== 0 && back.stops.length !== 3)
    )
  }),
])

export const withOneTransferAndWithThreeTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 1 && back.stops.length !== 0 && back.stops.length !== 2) ||
      (forward.stops.length === 3 && back.stops.length !== 0 && back.stops.length !== 2)
    )
  }),
])

export const withTwoTransferAndWithThreeTransfer = createSelector([(s) => s.tickets], (tickets) => [
  ...tickets.filter(({ segments }) => {
    const forward = segments[0]
    const back = segments[1]
    return (
      (forward.stops.length === 2 && back.stops.length !== 0 && back.stops.length !== 1) ||
      (forward.stops.length === 3 && back.stops.length !== 0 && back.stops.length !== 1)
    )
  }),
])
// export { withoutTransfer, withOneTransfer, withTwoTransfer, withThreeTransfer, withoutTransferOrWithOneTransfer }
