import { Type } from './middleware/action-checker.middleware';
import * as fromFormatting from './formating';
import { Pipes } from './pipes';
import * as fromAnimations from './animations';
import * as fromForms from './forms';
import * as fromHelpers from './helpers';
import * as fromHtml from "./html";
import { polyfills } from './polyfills';

export const Utils = {
	Animations: { ...fromAnimations },
	Format: { ...fromFormatting },
	Forms: fromForms,
	Helpers: { ...fromHelpers },
	Html: { ...fromHtml },
	Pipes: { ...Pipes },
	Polyfills: {...polyfills},
	Type,
};
