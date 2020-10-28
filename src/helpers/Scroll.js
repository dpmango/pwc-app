export const ScrollTo = (to, duration = 800, el) => {
  const element = el || document.body
  const start = element.scrollTop
  const change = to - start
  const startDate = +new Date()
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) {
      return (c / 2) * t * t + b
    }
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const animateScroll = () => {
    const currentDate = +new Date()
    const currentTime = currentDate - startDate

    element.scrollTop = parseInt(
      easeInOutQuad(currentTime, start, change, duration),
      10
    )
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll)
    } else {
      element.scrollTop = to
    }
  }
  animateScroll()
}

export const scrollToEnd = (duration, el) => {
  const element = el || document.body
  const endOfThePageTop = element.scrollHeight
  ScrollTo(endOfThePageTop, duration, el)
}

export const scrollToStart = (duration, el) => {
  ScrollTo(0, duration, el)
}

export const getTop = elem => {
  var box = elem.getBoundingClientRect()

  var body = document.body

  var scrollTop = body.scrollTop
  var clientTop = body.clientTop || 0

  var top = box.top + scrollTop - clientTop

  return Math.round(top)
}
