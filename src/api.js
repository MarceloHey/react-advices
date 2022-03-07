export async function fetchAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice')
  const { slip } = await response.json()
  return slip
}