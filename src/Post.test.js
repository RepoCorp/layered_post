import Post from './Post'
import PostContent from "./PostContent";

describe('Post', function () {
  it("initContent", () => {

    const content =  `
      Once upon a time, a beautiful girl had a dream. She was going to let herself be.
      
      This girl once went to a party.
      `

    let post;
    post = new Post(content);

    expect(post.getOriginalPostContent()).toContain('a time, a beautif');
    expect(post.getOriginalPostContent().split("\n")).toHaveLength(2);

  });
});