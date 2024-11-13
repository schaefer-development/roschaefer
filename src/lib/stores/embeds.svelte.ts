export type Consent = {
	explanation: string;
	get hasConsented(): boolean;
	set hasConsented(consent: boolean);
};

const createConsent: (explanation: string) => Consent = (explanation) => {
	let _consent = $state(false);
	return {
		explanation,
		get hasConsented() {
			return _consent;
		},
		set hasConsented(consent: boolean) {
			_consent = consent;
		}
	};
};

export const facebook = createConsent('I agree to videos from Facebook being displayed to me');
export const ccc = createConsent('I agree to videos from CCC being displayed to me');
export const youtube = createConsent('I agree to videos from YouTube being displayed to me');
