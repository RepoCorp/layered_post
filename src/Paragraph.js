
export default class Paragraph {
  constructor(content) {
    this.content = content;
  }

  toString() {
    return this.content;
  }

  getComponents() {
    return this.content.split(".")
  }
}