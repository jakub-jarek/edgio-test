// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  eval(res.query.name)
  res.status(200).json({ name: 'John Doe' })
}
