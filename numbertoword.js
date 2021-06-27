function numberToEnglish(n, custom_join_character) {

  var string = n.toString(),
    units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

  var and = custom_join_character || 'and';

  /* Is number zero? */
  if (parseInt(string) === 0) {
    return 'zero';
  }

  /* Array of units as words */
  units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  /* Array of tens as words */
  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  /* Array of scales as words */
  scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

  /* Split user arguemnt into 3 digit chunks from right to left */
  start = string.length;
  chunks = [];
  while (start > 0) {
    end = start;
    chunks.push(string.slice((start = Math.max(0, start - 3)), end));
  }
  chunksLen = chunks.length;
  if (chunksLen > scales.length) {
    return '';
  }
  words = [];
  for (i = 0; i < chunksLen; i++) {

    chunk = parseInt(chunks[i]);

    if (chunk) {
      ints = chunks[i].split('').reverse().map(parseFloat);
      if (ints[1] === 1) {
        ints[0] += 10;
      }
      if ((word = scales[i])) {
        words.push(word);
      }
      if ((word = units[ints[0]])) {
        words.push(word);
      }
      if ((word = tens[ints[1]])) {
        words.push(word);
      }
      if (ints[0] || ints[1]) {
        if (ints[2] || !i && chunksLen) {
          words.push(and);
        }
      }
      if ((word = units[ints[2]])) {
        words.push(word + ' hundred');
      }
    }
  }
  return words.reverse().join(' ');
}