class Site {
  url: string
  title: string

  constructor(url: string, title: string) {
    this.url = url
    this.title = title
  }

  get urlObject(): URL {
    return new URL(this.url)
  }
}