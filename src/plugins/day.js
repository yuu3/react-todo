import dayjs from 'dayjs'

export const toDay = () => {
  const now = dayjs()
  return convertToISO(now.format())
}

export const convertToISO = (data) => {
  return dayjs(data).format('YYYY/MM/DD')
}
