import { writable, derived } from 'svelte/store';
import { siteData } from './data';
import { getCourseIdFromURL } from '../util/helpers';
import { products } from './products';


export interface UserData {
    email?: string;
    uid?: string;
    displayName?: string;
    photoURL?: string;
    joined?: number;
    stripeCustomerId?: string;
    discordId?: string;
    is_pro?: boolean;
    expires?: number; 
    enterprise?: boolean;
    enterpriseOwner?: string;
    pro_status?: 'lifetime' | 'active' | 'past_due' | 'expiring' | 'canceled' | 'enterprise';
    products?: {
        [key: string]: boolean; // legacy course tracking
    }
    subscriptions?: {
        [key:string]: string;
    }
    courses?: {
        [key:string]: boolean;
    }
    sentMail?: {
        [key:string]: boolean;
    }
}

interface UserProgress {
	xp: number;
	[key: string]: number;
}

interface User {
    email?: string;
    uid?: string;
    displayName?: string;
    photoURL?: string;
}

export const user = writable<User>(null);
export const userData = writable<UserData>(null);
export const userProgress = writable<UserProgress>(null);
export const seats = writable<any>(null);


export const canAccess = derived([userData, siteData], ([$userData, $siteData]) => {
	const id = getCourseIdFromURL($siteData?.permalink);
	return !!($userData?.is_pro || $userData?.courses?.[id] || $userData?.products?.[products[id]?.legacy_sku]);
});
