export type SunburstData = {
  id: string
  label: string
  parent: string
}

export const generateSunburstData = (data: any, parentName: string): any => {
  const formattedData: SunburstData[] = []

  if (Array.isArray(data)) {
    data.forEach((item) => {
      formattedData.push({ id: parentName + item, label: item, parent: parentName })
    })
  } else if (typeof data === 'object') {
    for (const key in data) {
      console.log(key, data[key])
      formattedData.push({ id: parentName + key, label: key, parent: parentName })
      formattedData.push(...generateSunburstData(data[key], parentName + key))
    }
  }

  return formattedData
}
