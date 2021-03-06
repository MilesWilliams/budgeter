export function Matches() {
    if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype['msMatchesSelector'] ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
                const matches = (this.document || this.ownerDocument).querySelectorAll(s);
                
				let i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
                
                return i > -1;
			};
	}
}