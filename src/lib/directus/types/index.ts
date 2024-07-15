import type { Block_Hero } from "./block_hero"
import type { Block_Card_Group } from "./block_card_group"
import type { Block_Grid_2x2 } from "./block_grid_2x2"
import type { Block_Logo_Cloud } from "./block_logo_cloud"

export interface Schema {
    shcoc_page: Page[]
}

export interface Page {
  id: string
  status: string
  sort: null | string
  user_created: null | string
  date_created: null | string
  user_updated: null | string
  date_updated: null | string
  title: string
  slug: string
  seo: string
  blocks: Block[]
}

export type Block = 
  Block_Hero |
  Block_Grid_2x2 |
  Block_Card_Group |
  Block_Logo_Cloud


