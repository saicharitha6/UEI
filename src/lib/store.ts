import { browser } from "$app/environment";
import { writable } from "svelte/store";
export const isOpen = writable(false);
export const isActiveTab = writable(browser ? localStorage.getItem("isActiveTab")||'':"");
isActiveTab.subscribe((val)=>browser && localStorage.setItem("isActiveTab", val))