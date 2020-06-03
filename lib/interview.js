import interviews from 'content/interviews';
import authors from 'content/authors';
import siteConfig from 'content/site';

export const getAllInterviews = () => {
  return interviews.filter(interview => !interview.draft)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
};

export const getFeaturedInterviews = () => {
  return getAllInterviews().filter(interview => interview.featured);
};

export const getRequestedInterview = req => {
  const interview = interviews.find(interview => interview.url === req.url);
  if (!interview) {
    return null;
  }

  try {
    return {
      ...interview,
      author: authors.find(author => author.username === interview.author) || {},
    };
  } catch (e) {
    console.log(e);
  }

  return null;
};

export const getContributionUrl = (interview) => {
  return `${siteConfig.url.repoData}${interview.url}.md`
};
