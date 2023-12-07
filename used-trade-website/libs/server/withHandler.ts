import { NextApiRequest, NextApiResponse } from 'next'

export interface ResponseType {
  ok: boolean
  [key: string]: any
}

interface ConfigType {
  method: 'GET' | 'POST' | 'DELETE'
  handler: (req: NextApiRequest, res: NextApiResponse) => void
  isPrivate?: boolean
}

export default function withHandler({
  method,
  isPrivate = true,
  handler,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    //method: POST, ...
    if (req.method != method) {
      return res.status(405).end()
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'Plz log in.' })
    }
    try {
      await handler(req, res)
    } catch (error: any) {
      console.error(error)
      return res
        .status(500)
        .json({ message: error.message, stack: error.stack })

      //      return res.status(500).json({ error }) //server error
    }
  }
}
