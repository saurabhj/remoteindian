import { FeaturedWrap } from './style';
import FeaturedGuides from './guides';
import FeaturedInterviews from './interviews';
// import FeaturedRoadmaps from './roadmaps';

const FeaturedContent = (props) => (
  <FeaturedWrap className="border-top bg-light">
    <FeaturedInterviews />
  </FeaturedWrap>
);

FeaturedContent.defaultProps = {
  className: '',
};

export default FeaturedContent;
