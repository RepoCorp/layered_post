import Paragraph from "./Paragraph";

describe('Paragraph', function () {
  it("can be created", () => {
    const content =  'Once upon a time, a beautiful girl had a dream. She was going to let herself be.';

    const paragraph = new Paragraph(content);

    expect(paragraph.content).toContain('a beautiful girl had a dream');
    expect(paragraph.content).toContain('a beautiful girl had a dream');
    expect(paragraph.toString()).toContain('a beautiful girl had a dream');
  });
});