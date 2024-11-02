import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export type Consent = {
	explanation: string;
	store: Writable<boolean>;
};

export const facebook = {
	explanation: 'I agree to videos from Facebook being displayed to me',
	store: writable(false)
} satisfies Consent;

export const ccc = {
	explanation: 'I agree to videos from CCC being displayed to me',
	store: writable(false)
} satisfies Consent;

export const youtube = {
	explanation: 'I agree to videos from Youtube being displayed to me',
	store: writable(false)
} satisfies Consent;
