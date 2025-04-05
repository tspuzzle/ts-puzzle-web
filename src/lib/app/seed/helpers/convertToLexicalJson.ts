function convertToLexicalJSON(input: string) {
  const root: any = {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    children: [],
    direction: 'ltr',
  }

  const lines = input.split('\n')
  let currentParagraph: any[] = []
  let inCodeBlock = false
  let codeBlockLines: string[] = []
  let codeLanguage = ''

  function flushParagraph() {
    if (currentParagraph.length > 0) {
      root.children.push({
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        textStyle: '',
        textFormat: 0,
        children: currentParagraph,
      })
      currentParagraph = []
    }
  }

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        flushParagraph()
        inCodeBlock = true
        codeLanguage = line.slice(3).trim() || 'plaintext'
        codeBlockLines = []
      } else {
        // End of code block
        inCodeBlock = false
        root.children.push({
          type: 'block',
          format: '',
          version: 2,
          fields: {
            id: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
            code: codeBlockLines.join('\n'),
            language: codeLanguage,
            blockName: '',
            blockType: 'code',
          },
        })
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockLines.push(line)
    } else {
      if (line.trim() === '') {
        flushParagraph()
        continue
      }

      const segments = line.split(/(`[^`]+`)/g) // capture inline code
      for (const seg of segments) {
        if (seg.startsWith('`') && seg.endsWith('`')) {
          currentParagraph.push({
            mode: 'normal',
            text: seg.slice(1, -1),
            type: 'text',
            style: '',
            detail: 0,
            format: 16, // inline code
            version: 1,
          })
        } else {
          const words = seg.split(/(\b)/g)
          for (const word of words) {
            if (/^[A-Z][A-Za-z0-9]*$/.test(word)) {
              // Possibly a type like C, T, F
              currentParagraph.push({
                mode: 'normal',
                text: word,
                type: 'text',
                style: '',
                detail: 0,
                format: 16,
                version: 1,
              })
            } else {
              currentParagraph.push({
                mode: 'normal',
                text: word,
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              })
            }
          }
        }
      }
    }
  }

  flushParagraph()

  return { root }
}
