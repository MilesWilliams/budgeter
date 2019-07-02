export function toInt(value: any): number {
	return typeof value !== 'number' ? parseInt(value, 10) : value;
}
