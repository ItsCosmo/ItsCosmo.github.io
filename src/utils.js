export const minToString = (totalTime) => {
  const hours = Math.floor(totalTime / 60)
  const minutes = totalTime % 60

  return `${hours > 0 ? hours + " hr " : "" }${minutes > 0 ? minutes + " min" : ""}`
}