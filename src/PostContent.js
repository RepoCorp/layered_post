import Paragraph from "./Paragraph";

export default class PostContent {
  constructor(content) {
    this.paragraphs = this.getParagraphs(content);

  }

  getParagraphs(content) {
    const paragraphsContent = content.split("\n").filter((paragraphContent) => {
      return paragraphContent.trim().replace("\n", '').length > 0
    });

    return paragraphsContent.map((paragraph) => {
      return new Paragraph(paragraph);
    });
  }

  toString() {
    return this.paragraphs.map(paragraph => paragraph.toString()).join("\n");
  }
}

