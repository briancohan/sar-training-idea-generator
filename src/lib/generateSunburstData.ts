export type SunburstData = {
  id: string
  label: string
  parent: string
}

function concatKeys(parent: string, key: string): string {
  if (parent === '') return key
  return parent + ' - ' + key
}

export const generateSunburstData = (data: any, parentName: string = ''): any => {
  const formattedData: SunburstData[] = []

  if (Array.isArray(data)) {
    data.forEach((item) => {
      formattedData.push({ id: concatKeys(parentName, item), label: item, parent: parentName })
    })
  } else if (typeof data === 'object') {
    for (const key in data) {
      formattedData.push({ id: concatKeys(parentName, key), label: key, parent: parentName })
      formattedData.push(...generateSunburstData(data[key], concatKeys(parentName, key)))
    }
  }

  return formattedData
}
