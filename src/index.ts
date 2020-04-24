import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from './DOMEventHandler';

const url = "https://www.github.com/diogeneszilli";
const eventHandler = new DOMEventHandler();

const shareButtonTwitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, url, ".btn-twitter");
const shareButtonFacebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, url, ".btn-facebook");
const shareButtonLinkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, url, ".btn-linkedin");
const shareButtonPrint: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print");

shareButtonTwitter.bind();
shareButtonFacebook.bind();
shareButtonLinkedin.bind();
shareButtonPrint.bind();

