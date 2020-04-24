import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {

	constructor(eventHandler: EventHandler, url: string, className: string) {
		super(eventHandler, url, className);
	}
	
	createLink(): string {
		return `https://facebook.com/sharer.php?u=${this.url}`;
	}
}
