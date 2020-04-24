import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

	constructor(eventHandler: EventHandler, url: string, className: string) {
		super(eventHandler, url, className);
	}
	
	createLink(): string {
		return `https://linkedin.com/shareArticle?url=${this.url}`;
	}
}
