
import ITag from "./ITag"

interface ISticker {  

  id: number
  title: string
  description: string
  type: string
  url: string
  img_url: string
  user_id: number
  is_active: boolean
  views: number
  tags: Array<ITag>
  created_at: string
  updated_at: string
}

export default ISticker