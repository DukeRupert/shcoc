// block_hero
export interface Block_Hero {
    collection: "block_hero"
    item: Hero_Data 
}

export interface Hero_Data {
  id: string
  headline: string
  description: string
  buttons?: Button[]
  announcement?: boolean
  announcement_label?: string
  announcement_href?: string
  image?: string
  image_alt?: string
  color_primary?: string
  color_secondary?: string
}

export interface Button {
  label: string
  href: string
  variant: string
}