export function formatComment(comment: string): string {
  const paragraphs = comment.split('\n')
  const formattedParagrahs = paragraphs
    .map((paragraph) => `<p style="text-indent: 30px;">${paragraph}</p>`)
    .join('')

  return formattedParagrahs
}
