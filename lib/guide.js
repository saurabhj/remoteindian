import guides from 'content/guides';
import authors from 'content/authors';
import siteConfig from 'content/site';

export const getAllGuides = () => {
  return guides.filter(guide => !guide.draft)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
};

export const getFeaturedGuides = () => {
  return getAllGuides().filter(guide => guide.featured);
};

export const getRequestedGuide = fileName => {
  const guide = guides.find(guide => guide.fileName === fileName);
  if (!guide) {
    return null;
  }

  try {
    return {
      ...guide,
      author: authors.find(author => author.username === guide.author) || {},
    };
  } catch (e) {
    console.log(e);
  }

  return null;
};

export const getContributionUrl = (guide) => {
  return `${siteConfig.url.repoData}${guide.url}.md`
};
