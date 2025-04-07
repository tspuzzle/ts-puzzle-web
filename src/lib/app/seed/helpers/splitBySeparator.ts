export const splitBySeparator = <KEYS extends string>(content: string): Record<KEYS, string> => {
  const sections = content.split(/#\[field\](.+?)\n/)

  const result = {} as Record<KEYS, string>
  for (let i = 1; i < sections.length; i += 2) {
    const fieldName = sections[i].trim()
    const fieldContent = sections[i + 1].trim()
    result[fieldName as KEYS] = fieldContent
  }

  return result
}
