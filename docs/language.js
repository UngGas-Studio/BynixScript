Prism.languages.bynixscript = {
    'comment': /\/\/.*/,  // Komentar diawali dengan //
    'string': {
      pattern: /"(?:\\.|[^\\"])*"/,  // String menggunakan tanda kutip ganda
      greedy: true
    },
    'keyword': /\b(var|const|if|elif|else|end|match|case|default|break|delay|repeat|require)\b/,  // Kata kunci
    'keyword2': /\b(print|touch|ask|confirm)\b/,
    'boolean': /\b(true|false)\b/,  // Boolean
    'number': /\b\d+(\.\d+)?\b/,  // Angka
    'operator': /[-+*/%=&|<>!]+/,  // Operator aritmatika dan logika
    'punctuation': /[{}[\];(),.:]/,  // Simbol umum
    'function': /\b(rand|roundUp|roundDown|maxOf|minOf|replace|getElement|getAllElement|createElement|addElement|is_value|is_design|is_action|is_have|is_start|is_end|num|str|int)\b/,  // Fungsi bawaan
    'delay': {
      pattern: /end:\d+:$/,  // Penanganan fungsi delay
      alias: 'keyword'
    }
  };
  