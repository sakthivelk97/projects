import ModelTest from "./components/custom-model-popup/model-test"
import TabTest from "./components/custom-tabs/tab-test"
import FeatureFlags from "./components/feature-flag"
import FeatureFlagGlobalState from "./components/feature-flag/context"
import GithubProfileFinder from "./components/github-profile-finder"
import ImageSlider from "./components/image-slider"
import LightDarkMode from "./components/light-dark-mode"
import LoadMoreData from "./components/load-more-data"
import QrCodeGenerator from "./components/qr-code-generator"
import RandomColor from "./components/random-color"
import ScrollIndicator from "./components/scroll-indicator"
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom"
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section"
import SearchAutocomplete from "./components/search-autocomplete-with-api"
import StarRating from "./components/star-rating"
import TreeView from "./components/tree-view"
import menus from "./components/tree-view/data"
import UseFetchHookTest from "./components/use-fetch/test"
import UseOnClickOutsideTest from "./components/use-outside-click/test"
import UseWindowResizeTest from "./components/use-window-resize/test"




function App() {


  return (
    <>
     {/* <RandomColor /> */}
     {/* <StarRating noOfStars={10}/> */}
     {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit = {'10'}/> */}
     {/* <LoadMoreData/> */}
     {/* <TreeView menus={menus}/> */}
     {/* <QrCodeGenerator /> */}
     {/* <LightDarkMode/> */}
     {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
     {/* <TabTest /> */}
     {/* <ModelTest/> */}
     {/* <GithubProfileFinder/> */}
     {/* <SearchAutocomplete /> */}
     {/* <TicTacToe/> */}

    {/* <FeatureFlagGlobalState>
      <FeatureFlags/>
    </FeatureFlagGlobalState> */}

    {/* <UseFetchHookTest/> */}
    {/* <UseOnClickOutsideTest/> */}
    {/* <UseWindowResizeTest/> */}
    {/* <ScrollToTopAndBottom/> */}
    <ScrollToSection/>
    </>
  )
}

export default App
