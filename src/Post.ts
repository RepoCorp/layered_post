import PostContent from "./PostContent";
import Paragraph from "./Paragraph";

class Post {
  private postContent: PostContent;
  constructor(content: string) {
    this.postContent = new PostContent(content);
  }

  getOriginalPostContent = (): string => {
    return this.postContent.toString()
  }

  getComponents() {
    const paragraphs = this.postContent.paragraphs;

    const components = paragraphs.map((paragraph: Paragraph) => paragraph.getComponents());
    return components;
  }
}

export default Post;