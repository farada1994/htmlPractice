/// <reference types = "cypress" />
import { Murphelements, Diffselector, Vodsnpics } from "./murphPOM";
// import Diffselector from './murphPOM'
describe("the first few functionalities", () => {
  beforeEach(() => {
    const pageAccess = new Murphelements();
    pageAccess.visit();
  });
  it("text test", () => {
    const testText = new Murphelements();
    testText.textTest("h1");
    testText.errorCheck("h1");
  });
  it("testing difficulty selector", () => {
    const diffSelect = new Diffselector();
    diffSelect.selecting("Medium");
    diffSelect.testReps(" Medium ");
  });
  it("testing video player and pic visibility", () => {
    const videoAndPicture = new Vodsnpics();
    videoAndPicture.vod(".vod");
    // ytp-large-play-button ytp-button
    videoAndPicture.pic("#img1");
  });
  it("mapped arrays should not be visible", () => {
    const h3Vis = new Murphelements();
    h3Vis.invisCheck("h3");
  });
  it("invoke shenanigans", () => {
    const h2Vis = new Murphelements();
    h2Vis.visCheck("h2");
    h2Vis.invokeHide("h2");
  });
  it("scrolling on the page", () => {
    const scrollTest = new Murphelements();
    scrollTest.scrolling("bottom", 1000);
    scrollTest.scrolling("top", 1000);
    scrollTest.scrollonElement(".vod", 1000);
  });
  it("checkbox testing", () => {
    const boxTest = new Murphelements();
    boxTest.checkBox("#success");
  });
});
