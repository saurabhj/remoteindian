import { FeaturedWrap } from './style';
import FeaturedGuides from './guides';
// import FeaturedRoadmaps from './roadmaps';

const FeaturedContent = (props) => (
  <FeaturedWrap className="border-top bg-light">
    <FeaturedGuides />
  </FeaturedWrap>
);

FeaturedContent.defaultProps = {
  className: '',
};

export default FeaturedContent;
