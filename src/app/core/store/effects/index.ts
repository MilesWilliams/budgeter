import { RouterEffects } from './router.effects';
import { AuthenticationEffects } from './auth.effects';

export const CoreEffects: any[] = [RouterEffects, AuthenticationEffects];

export * from './router.effects';
export * from './auth.effects';


