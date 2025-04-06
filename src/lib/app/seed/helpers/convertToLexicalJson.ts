const codeBlock = (code: string) => {
  return {
    type: 'block',
    fields: {
      id: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
      code,
      language: 'typescript',
      blockName: '',
      blockType: 'code',
    },
    format: '',
    version: 2,
  }
}

const textNode = (text: string) => {
  return {
    mode: 'normal',
    text,
    type: 'text',
    style: '',
    detail: 0,
    format: 0,
    version: 1,
  }
}

const inlineCodeNode = (code: string) => {
  return {
    mode: 'normal',
    text: code,
    type: 'text',
    style: '',
    detail: 0,
    format: 16,
    version: 1,
  }
}

const parseParagraph = (text: string) => {
  const segments = text.split(/(`[^`]+`)/g) // capture inline code
  const children = []
  for (const seg of segments) {
    if (seg.startsWith('`') && seg.endsWith('`')) {
      children.push(inlineCodeNode(seg.slice(1, -1)))
    } else {
      children.push(textNode(seg))
    }
  }

  return {
    type: 'paragraph',
    format: '',
    indent: 0,
    version: 1,
    children,
    direction: 'ltr',
    textStyle: '',
    textFormat: 0,
  }
}

export const convertStringToLexicalJSON = (input: string, skipEmptyParagraph = true) => {
  const lines = input.split('\n')
  const children: any[] = []

  let currentLine = 0
  while (currentLine < lines.length) {
    const line = lines[currentLine].trim()

    if (line === '') {
      currentLine++
      continue
    }

    if (line.startsWith('```')) {
      const codeBlockLines: string[] = []
      currentLine++
      while (currentLine < lines.length && !lines[currentLine].trim().startsWith('```')) {
        codeBlockLines.push(lines[currentLine])
        currentLine++
      }
      children.push(codeBlock(codeBlockLines.join('\n')))
      currentLine++
    } else {
      children.push(parseParagraph(line))
      currentLine++
    }
  }

  console.log(children)

  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children,
      direction: 'ltr',
    },
  }
}
