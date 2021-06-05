export const decreaseCount = (name, currentCount) => {
  return {
    type: "DECREASE_COUNT",
    name: name,
    payload: currentCount - 1
  }
}

export const increaseCount = (name, currentCount) => {
  return {
    type: "INCREASE_COUNT",
    name: name,
    payload: currentCount + 1
  }
}

export const resetCount = () => {
  return {
    type: "RESET_COUNT",
    payload: 0
  }
}