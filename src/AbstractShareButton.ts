import EventHandler from "./EventHandler";
import DOMEventHandler from "./DOMEventHandler";

export default abstract class AbstractShareButton {
	className: string;
	eventHandler: EventHandler;

	constructor(eventHandler: EventHandler, className: string) {
		this.className = className;
		this.eventHandler = eventHandler;
	}

	abstract createAction(): void;

	bind() {
		const action = this.createAction();
		this.eventHandler.addEventListenerToClass(this.className, "click", action);
	}
}
