import PostContent from "./PostContent";
import Paragraph from "./Paragraph";

describe('PostContent', function () {
  it("can be created with text", () => {
    const paragraph =  `
    Once upon a time, a beautiful girl had a dream. She was going to let herself be.
    `
    const postContent = new PostContent(paragraph);
  });

  it("can split in paragraphs", () => {
    const content =  `
    Once upon a time, a beautiful girl had a dream. She was going to let herself be.
    
    This girl once went to a party.
    `
    const postContent = new PostContent(content);

    const paragraphs = postContent.paragraphs;

    expect(paragraphs).toHaveLength(2);
    expect(paragraphs[0]).toBeInstanceOf(Paragraph);
    expect(paragraphs[1]).toContain('went to a party')
  });

  describe('splitParagraphs', function () {
    it("returnsAllParagraphs", () => {
      const content =  `
      Once upon a time, a beautiful girl had a dream. She was going to let herself be.
      
      This girl once went to a party.
      `
      const postContent = new PostContent(content);

      const paragraphs = postContent.getParagraphs(content);
      expect(paragraphs).toHaveLength(2);
      expect(paragraphs[0]).toBeInstanceOf(Paragraph);
    });
  });
});