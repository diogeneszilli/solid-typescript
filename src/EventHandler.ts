export default interface EventHandler {
	addEventListenerToClass(className: string, event: string, func: any);
}
